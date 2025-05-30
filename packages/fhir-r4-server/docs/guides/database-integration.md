# Database Integration Guide

This guide shows how to integrate various databases and ORMs with your FHIR server. The package is database-agnostic, giving you full control over your data layer.

## Overview

The FHIR server is designed to work with any data storage solution:

- **SQL Databases**: PostgreSQL, MySQL, SQLite, SQL Server
- **NoSQL Databases**: MongoDB, DynamoDB, CouchDB
- **ORMs/Query Builders**: Prisma, TypeORM, Sequelize, Knex.js
- **External APIs**: REST, GraphQL, gRPC services
- **In-Memory**: For testing and development

> 💡 **Important**: When working with your existing database schemas or external APIs, you'll need to map your data structures to FHIR objects. See our comprehensive [Mapping Objects to FHIR Objects](./mapping-objects-to-fhir-objects.md) guide for best practices and examples.

## PostgreSQL with Prisma

Prisma provides excellent TypeScript support and type safety.

### Setup

```bash
npm install prisma @prisma/client
npx prisma init
```

### Schema Definition

```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Patient {
  id        String   @id @default(cuid())
  active    Boolean  @default(true)
  givenName String[]
  familyName String?
  birthDate DateTime?
  gender    Gender?
  phone     String?
  email     String?
  address   Json?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("patients")
}

enum Gender {
  male
  female
  other
  unknown
}
```

### Database Access Layer

> 📋 **Mapping Recommendation**: The examples below show basic mapping approaches. For production applications, consider using the structured mapping patterns described in the [Mapping Objects to FHIR Objects](./mapping-objects-to-fhir-objects.md) guide to ensure robust, maintainable, and validated data transformations.

```typescript
// database/patient-repository.ts
import { PrismaClient } from '@prisma/client';
import type { Patient as FhirPatient } from '@solarahealth/fhir-r4';
import { errors } from '@solarahealth/fhir-r4-server';

export class PatientRepository {
  constructor(private prisma: PrismaClient) {}

  async findById(id: string): Promise<FhirPatient | null> {
    const patient = await this.prisma.patient.findUnique({
      where: { id },
    });

    if (!patient) {
      return null;
    }

    return this.mapToFhir(patient);
  }

  async search(params: {
    name?: string;
    family?: string;
    given?: string;
    birthdate?: string;
    gender?: string;
    active?: boolean;
    limit?: number;
    offset?: number;
  }) {
    const where: any = {};

    // Text search across names
    if (params.name) {
      where.OR = [
        { givenName: { hasSome: [params.name] } },
        { familyName: { contains: params.name, mode: 'insensitive' } },
      ];
    }

    if (params.family) {
      where.familyName = { contains: params.family, mode: 'insensitive' };
    }

    if (params.given) {
      where.givenName = { hasSome: [params.given] };
    }

    if (params.birthdate) {
      const date = new Date(params.birthdate);
      const nextDay = new Date(date.getTime() + 24 * 60 * 60 * 1000);
      where.birthDate = { gte: date, lt: nextDay };
    }

    if (params.gender) {
      where.gender = params.gender;
    }

    if (params.active !== undefined) {
      where.active = params.active;
    }

    const [patients, total] = await Promise.all([
      this.prisma.patient.findMany({
        where,
        take: params.limit || 20,
        skip: params.offset || 0,
        orderBy: { updatedAt: 'desc' },
      }),
      this.prisma.patient.count({ where }),
    ]);

    return {
      patients: patients.map((p) => this.mapToFhir(p)),
      total,
    };
  }

  private mapToFhir(patient: any): FhirPatient {
    return {
      resourceType: 'Patient',
      id: patient.id,
      active: patient.active,
      name: [
        {
          given: patient.givenName,
          family: patient.familyName,
        },
      ],
      gender: patient.gender,
      birthDate: patient.birthDate?.toISOString().split('T')[0],
      telecom: [
        ...(patient.phone ? [{ system: 'phone', value: patient.phone }] : []),
        ...(patient.email ? [{ system: 'email', value: patient.email }] : []),
      ],
      address: patient.address ? [patient.address] : undefined,
    };
  }
}
```

### Context Integration

```typescript
// context.ts
import { PrismaClient } from '@prisma/client';
import { PatientRepository } from './database/patient-repository';

const prisma = new PrismaClient();

export interface AppContext {
  database: {
    patients: PatientRepository;
  };
  prisma: PrismaClient;
  userId?: string;
}

export const createContext = async ({ req }): Promise<AppContext> => {
  return {
    database: {
      patients: new PatientRepository(prisma),
    },
    prisma,
    userId: req.headers['x-user-id'] as string,
  };
};
```

### Resource Implementation

```typescript
// resources/patient.ts
import { builder } from '@solarahealth/fhir-r4-server';
import { z } from 'zod';

export const patientResource = builder
  .defineResource('Patient')
  .read((builder) =>
    builder.id(z.string()).retrieveWith(async (id, context) => {
      const patient = await context.database.patients.findById(id);
      if (!patient) {
        throw new errors.ResourceNotFound('Patient', id);
      }
      return patient;
    }),
  )
  .search((builder) =>
    builder
      .parameters(
        z.object({
          name: z.string().optional(),
          family: z.string().optional(),
          given: z.string().optional(),
          birthdate: z.string().optional(),
          gender: z.enum(['male', 'female', 'other', 'unknown']).optional(),
          active: z.boolean().optional(),
          _count: z.number().min(1).max(100).default(20).optional(),
          _offset: z.number().min(0).default(0).optional(),
        }),
      )
      .searchWith(async (params, context) => {
        const { _count, _offset, ...searchParams } = params;
        const results = await context.database.patients.search({
          ...searchParams,
          limit: _count,
          offset: _offset,
        });

        return {
          resourceType: 'Bundle',
          type: 'searchset',
          total: results.total,
          entry: results.patients.map((resource) => ({ resource })),
        };
      }),
  )
  .build();
```

## MongoDB with Mongoose

MongoDB provides flexible document storage for FHIR resources.

### Setup

```bash
npm install mongoose @types/mongoose
```

### Schema Definition

```typescript
// models/patient.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IPatient extends Document {
  id: string;
  active: boolean;
  name: Array<{
    given?: string[];
    family?: string;
  }>;
  gender?: 'male' | 'female' | 'other' | 'unknown';
  birthDate?: Date;
  telecom?: Array<{
    system: string;
    value: string;
  }>;
  address?: any[];
}

const PatientSchema = new Schema<IPatient>(
  {
    id: { type: String, required: true, unique: true },
    active: { type: Boolean, default: true },
    name: [
      {
        given: [String],
        family: String,
      },
    ],
    gender: {
      type: String,
      enum: ['male', 'female', 'other', 'unknown'],
    },
    birthDate: Date,
    telecom: [
      {
        system: String,
        value: String,
      },
    ],
    address: [Schema.Types.Mixed],
  },
  {
    timestamps: true,
    collection: 'patients',
  },
);

// Indexes for search performance
PatientSchema.index({ 'name.given': 1 });
PatientSchema.index({ 'name.family': 1 });
PatientSchema.index({ birthDate: 1 });
PatientSchema.index({ gender: 1 });
PatientSchema.index({ active: 1 });

export const Patient = mongoose.model<IPatient>('Patient', PatientSchema);
```

### Repository Implementation

```typescript
// repositories/patient-repository.ts
import { Patient } from '../models/patient';
import type { Patient as FhirPatient } from '@solarahealth/fhir-r4';

export class PatientRepository {
  async findById(id: string): Promise<FhirPatient | null> {
    const patient = await Patient.findOne({ id });
    return patient ? this.mapToFhir(patient) : null;
  }

  async search(params: {
    name?: string;
    family?: string;
    given?: string;
    birthdate?: string;
    gender?: string;
    active?: boolean;
    limit?: number;
    offset?: number;
  }) {
    const query: any = {};

    if (params.name) {
      query.$or = [
        { 'name.given': { $regex: params.name, $options: 'i' } },
        { 'name.family': { $regex: params.name, $options: 'i' } },
      ];
    }

    if (params.family) {
      query['name.family'] = { $regex: params.family, $options: 'i' };
    }

    if (params.given) {
      query['name.given'] = { $regex: params.given, $options: 'i' };
    }

    if (params.birthdate) {
      const date = new Date(params.birthdate);
      const nextDay = new Date(date.getTime() + 24 * 60 * 60 * 1000);
      query.birthDate = { $gte: date, $lt: nextDay };
    }

    if (params.gender) {
      query.gender = params.gender;
    }

    if (params.active !== undefined) {
      query.active = params.active;
    }

    const [patients, total] = await Promise.all([
      Patient.find(query)
        .limit(params.limit || 20)
        .skip(params.offset || 0)
        .sort({ updatedAt: -1 }),
      Patient.countDocuments(query),
    ]);

    return {
      patients: patients.map((p) => this.mapToFhir(p)),
      total,
    };
  }

  private mapToFhir(patient: any): FhirPatient {
    return {
      resourceType: 'Patient',
      id: patient.id,
      active: patient.active,
      name: patient.name,
      gender: patient.gender,
      birthDate: patient.birthDate?.toISOString().split('T')[0],
      telecom: patient.telecom,
      address: patient.address,
    };
  }
}
```

## MySQL with TypeORM

TypeORM provides decorator-based entity definition with good TypeScript support.

### Setup

```bash
npm install typeorm mysql2 reflect-metadata
```

### Entity Definition

```typescript
// entities/patient.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('patients')
export class PatientEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: true })
  active: boolean;

  @Column('json', { nullable: true })
  name: Array<{
    given?: string[];
    family?: string;
  }>;

  @Column({
    type: 'enum',
    enum: ['male', 'female', 'other', 'unknown'],
    nullable: true,
  })
  gender: 'male' | 'female' | 'other' | 'unknown';

  @Column({ type: 'date', nullable: true })
  birthDate: Date;

  @Column('json', { nullable: true })
  telecom: Array<{
    system: string;
    value: string;
  }>;

  @Column('json', { nullable: true })
  address: any[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
```

### Repository Service

```typescript
// services/patient.service.ts
import { Repository } from 'typeorm';
import { PatientEntity } from '../entities/patient.entity';
import type { Patient as FhirPatient } from '@solarahealth/fhir-r4';

export class PatientService {
  constructor(private patientRepository: Repository<PatientEntity>) {}

  async findById(id: string): Promise<FhirPatient | null> {
    const patient = await this.patientRepository.findOne({ where: { id } });
    return patient ? this.mapToFhir(patient) : null;
  }

  async search(params: any) {
    const queryBuilder = this.patientRepository.createQueryBuilder('patient');

    if (params.name) {
      queryBuilder.andWhere('JSON_SEARCH(patient.name, "one", :name) IS NOT NULL', {
        name: `%${params.name}%`,
      });
    }

    if (params.family) {
      queryBuilder.andWhere('JSON_EXTRACT(patient.name, "$[*].family") LIKE :family', {
        family: `%${params.family}%`,
      });
    }

    if (params.birthdate) {
      const date = new Date(params.birthdate);
      const nextDay = new Date(date.getTime() + 24 * 60 * 60 * 1000);
      queryBuilder.andWhere('patient.birthDate >= :startDate AND patient.birthDate < :endDate', {
        startDate: date,
        endDate: nextDay,
      });
    }

    if (params.gender) {
      queryBuilder.andWhere('patient.gender = :gender', { gender: params.gender });
    }

    if (params.active !== undefined) {
      queryBuilder.andWhere('patient.active = :active', { active: params.active });
    }

    const [patients, total] = await queryBuilder
      .take(params.limit || 20)
      .skip(params.offset || 0)
      .orderBy('patient.updatedAt', 'DESC')
      .getManyAndCount();

    return {
      patients: patients.map((p) => this.mapToFhir(p)),
      total,
    };
  }

  private mapToFhir(patient: PatientEntity): FhirPatient {
    return {
      resourceType: 'Patient',
      id: patient.id,
      active: patient.active,
      name: patient.name || [],
      gender: patient.gender,
      birthDate: patient.birthDate?.toISOString().split('T')[0],
      telecom: patient.telecom,
      address: patient.address,
    };
  }
}
```

## SQLite with Knex.js

Knex.js provides a lightweight query builder that works well for development and smaller deployments.

### Setup

```bash
npm install knex sqlite3 @types/sqlite3
```

### Configuration

```typescript
// database/config.ts
import knex from 'knex';

export const db = knex({
  client: 'sqlite3',
  connection: {
    filename: process.env.DATABASE_PATH || './data/fhir.db',
  },
  useNullAsDefault: true,
  migrations: {
    directory: './database/migrations',
  },
});
```

### Migration

```typescript
// database/migrations/001_create_patients.ts
import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('patients', (table) => {
    table.string('id').primary();
    table.boolean('active').defaultTo(true);
    table.json('name');
    table.string('gender');
    table.date('birth_date');
    table.json('telecom');
    table.json('address');
    table.timestamps(true, true);

    // Indexes
    table.index(['active']);
    table.index(['gender']);
    table.index(['birth_date']);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('patients');
}
```

### Repository Implementation

```typescript
// repositories/patient-repository.ts
import { db } from '../database/config';
import type { Patient as FhirPatient } from '@solarahealth/fhir-r4';

export class PatientRepository {
  async findById(id: string): Promise<FhirPatient | null> {
    const patient = await db('patients').where({ id }).first();
    return patient ? this.mapToFhir(patient) : null;
  }

  async search(params: any) {
    let query = db('patients').select('*');

    if (params.name) {
      query = query.where(function () {
        this.whereRaw("JSON_EXTRACT(name, '$[*].given') LIKE ?", [`%${params.name}%`]).orWhereRaw(
          "JSON_EXTRACT(name, '$[*].family') LIKE ?",
          [`%${params.name}%`],
        );
      });
    }

    if (params.birthdate) {
      const date = new Date(params.birthdate);
      const nextDay = new Date(date.getTime() + 24 * 60 * 60 * 1000);
      query = query.whereBetween('birth_date', [date, nextDay]);
    }

    if (params.gender) {
      query = query.where('gender', params.gender);
    }

    if (params.active !== undefined) {
      query = query.where('active', params.active);
    }

    const countQuery = query.clone();
    const total = await countQuery.count('* as count').first();

    const patients = await query
      .limit(params.limit || 20)
      .offset(params.offset || 0)
      .orderBy('updated_at', 'desc');

    return {
      patients: patients.map((p) => this.mapToFhir(p)),
      total: total.count,
    };
  }

  private mapToFhir(patient: any): FhirPatient {
    return {
      resourceType: 'Patient',
      id: patient.id,
      active: patient.active,
      name: JSON.parse(patient.name || '[]'),
      gender: patient.gender,
      birthDate: patient.birth_date,
      telecom: JSON.parse(patient.telecom || '[]'),
      address: JSON.parse(patient.address || '[]'),
    };
  }
}
```

## External API Integration

Sometimes you need to integrate with external FHIR servers or APIs.

### HTTP Client Service

```typescript
// services/external-api.service.ts
import axios, { AxiosInstance } from 'axios';
import type { Patient as FhirPatient, Bundle } from '@solarahealth/fhir-r4';

export class ExternalApiService {
  private client: AxiosInstance;

  constructor(baseUrl: string, apiKey?: string) {
    this.client = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/fhir+json',
        ...(apiKey && { Authorization: `Bearer ${apiKey}` }),
      },
      timeout: 10000,
    });
  }

  async findPatientById(id: string): Promise<FhirPatient | null> {
    try {
      const response = await this.client.get(`/Patient/${id}`);
      return response.data;
    } catch (error) {
      if (error.response?.status === 404) {
        return null;
      }
      throw new Error(`Failed to fetch patient: ${error.message}`);
    }
  }

  async searchPatients(params: any): Promise<{ patients: FhirPatient[]; total: number }> {
    try {
      const searchParams = new URLSearchParams();

      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          searchParams.append(key, value.toString());
        }
      });

      const response = await this.client.get(`/Patient?${searchParams}`);
      const bundle: Bundle = response.data;

      return {
        patients: bundle.entry?.map((entry) => entry.resource as FhirPatient) || [],
        total: bundle.total || 0,
      };
    } catch (error) {
      throw new Error(`Failed to search patients: ${error.message}`);
    }
  }
}
```

### Integration with FHIR Server

```typescript
// repositories/external-patient-repository.ts
import { ExternalApiService } from '../services/external-api.service';
import type { Patient as FhirPatient } from '@solarahealth/fhir-r4';

export class ExternalPatientRepository {
  constructor(private apiService: ExternalApiService) {}

  async findById(id: string): Promise<FhirPatient | null> {
    return this.apiService.findPatientById(id);
  }

  async search(params: any) {
    const results = await this.apiService.searchPatients(params);
    return {
      patients: results.patients,
      total: results.total,
    };
  }
}
```

## Connection Pooling and Performance

### Database Connection Pooling

```typescript
// database/connection-pool.ts
import { Pool } from 'pg';

// PostgreSQL connection pool
export const pool = new Pool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  min: 2, // Minimum connections
  max: 10, // Maximum connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Query helper with error handling
export async function query(text: string, params?: any[]) {
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result;
  } finally {
    client.release();
  }
}
```

### Caching Layer

```typescript
// services/cache.service.ts
import Redis from 'ioredis';

export class CacheService {
  private redis: Redis;

  constructor(redisUrl: string) {
    this.redis = new Redis(redisUrl);
  }

  async get<T>(key: string): Promise<T | null> {
    const cached = await this.redis.get(key);
    return cached ? JSON.parse(cached) : null;
  }

  async set(key: string, value: any, ttlSeconds: number = 300): Promise<void> {
    await this.redis.setex(key, ttlSeconds, JSON.stringify(value));
  }

  async invalidate(pattern: string): Promise<void> {
    const keys = await this.redis.keys(pattern);
    if (keys.length > 0) {
      await this.redis.del(...keys);
    }
  }
}

// Usage in repository
export class CachedPatientRepository {
  constructor(
    private repository: PatientRepository,
    private cache: CacheService,
  ) {}

  async findById(id: string): Promise<FhirPatient | null> {
    const cacheKey = `patient:${id}`;

    // Try cache first
    const cached = await this.cache.get<FhirPatient>(cacheKey);
    if (cached) {
      return cached;
    }

    // Fetch from database
    const patient = await this.repository.findById(id);

    // Cache result
    if (patient) {
      await this.cache.set(cacheKey, patient, 300); // 5 minutes
    }

    return patient;
  }
}
```

## Testing Database Integration

### In-Memory Database for Testing

```typescript
// tests/database-setup.ts
import { DataSource } from 'typeorm';
import { PatientEntity } from '../entities/patient.entity';

export const testDataSource = new DataSource({
  type: 'sqlite',
  database: ':memory:',
  entities: [PatientEntity],
  synchronize: true,
  logging: false,
});

export async function setupTestDatabase() {
  await testDataSource.initialize();
  return testDataSource;
}

export async function teardownTestDatabase() {
  await testDataSource.destroy();
}
```

### Repository Testing

```typescript
// tests/patient-repository.test.ts
import { setupTestDatabase, teardownTestDatabase } from './database-setup';
import { PatientService } from '../services/patient.service';

describe('PatientService', () => {
  let dataSource: DataSource;
  let patientService: PatientService;

  beforeAll(async () => {
    dataSource = await setupTestDatabase();
    patientService = new PatientService(dataSource.getRepository(PatientEntity));
  });

  afterAll(async () => {
    await teardownTestDatabase();
  });

  beforeEach(async () => {
    // Clear data before each test
    await dataSource.getRepository(PatientEntity).clear();
  });

  it('should find patient by id', async () => {
    // Create test patient
    const patientEntity = dataSource.getRepository(PatientEntity).create({
      id: 'test-123',
      active: true,
      name: [{ given: ['John'], family: 'Doe' }],
    });
    await dataSource.getRepository(PatientEntity).save(patientEntity);

    // Test retrieval
    const patient = await patientService.findById('test-123');

    expect(patient).toBeTruthy();
    expect(patient?.id).toBe('test-123');
    expect(patient?.name?.[0]?.given?.[0]).toBe('John');
  });

  it('should return null for non-existent patient', async () => {
    const patient = await patientService.findById('non-existent');
    expect(patient).toBeNull();
  });
});
```

## Best Practices

### 1. Use Transactions for Data Consistency

```typescript
async function createPatientWithObservations(patientData: any, observations: any[]) {
  return db.transaction(async (trx) => {
    // Create patient
    const [patient] = await trx('patients').insert(patientData).returning('*');

    // Create observations
    const observationData = observations.map((obs) => ({
      ...obs,
      patient_id: patient.id,
    }));

    await trx('observations').insert(observationData);

    return patient;
  });
}
```

### 2. Handle Database Errors Gracefully

```typescript
async function findPatientWithErrorHandling(id: string): Promise<FhirPatient | null> {
  try {
    return await patientRepository.findById(id);
  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      throw new errors.InternalServerError('Database connection failed');
    }
    if (error.code === '23505') {
      // Unique constraint violation
      throw new errors.Conflict('Patient already exists');
    }
    throw new errors.InternalServerError('Database error occurred');
  }
}
```

### 3. Optimize Queries with Indexes

```sql
-- Create indexes for common search patterns
CREATE INDEX idx_patients_active ON patients(active);
CREATE INDEX idx_patients_gender ON patients(gender);
CREATE INDEX idx_patients_birth_date ON patients(birth_date);
CREATE INDEX idx_patients_name_gin ON patients USING GIN ((name::jsonb));
CREATE INDEX idx_patients_full_text ON patients USING GIN (to_tsvector('english', given_name || ' ' || family_name));
```

### 4. Use Connection Pooling

```typescript
// Configure appropriate pool sizes based on your load
const poolConfig = {
  min: process.env.NODE_ENV === 'production' ? 5 : 2,
  max: process.env.NODE_ENV === 'production' ? 20 : 10,
  acquireTimeoutMillis: 30000,
  idleTimeoutMillis: 30000,
};
```

## Next Steps

- **Start with** [Mapping Objects to FHIR Objects](./mapping-objects-to-fhir-objects.md) for best practices on transforming your data to FHIR format
- Review [Error Handling](./error-handling.md) for database error patterns
- Check [Deployment](./deployment.md) for production database setup
- Explore [Context Management](./context.md) for database connection handling
- See [Resource Operations](./resource-operations.md) for advanced query patterns
