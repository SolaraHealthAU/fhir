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

### Search Parameter Definitions

> 📋 **Search Parameters**: Following the patterns from the [Search Parameters](./search-parameters.md) guide, we define search parameters as constants and generate schemas from them.

```typescript
// database/patient-search-params.ts
import * as rest from '@solarahealth/fhir-r4-server';
import type { CapabilityStatementSearchParam } from '@solarahealth/fhir-r4';

export const patientSearchParams = [
  {
    name: 'identifier',
    documentation: 'A patient identifier',
    type: 'token',
  },
  {
    name: 'name',
    documentation: 'A server defined search that matches name fields',
    type: 'string',
  },
  {
    name: 'family',
    documentation: 'A portion of the family name of the patient',
    type: 'string',
  },
  {
    name: 'given',
    documentation: 'A portion of the given name of the patient',
    type: 'string',
  },
  {
    name: 'birthdate',
    documentation: "The patient's date of birth",
    type: 'date',
  },
  {
    name: 'gender',
    documentation: 'Gender of the patient',
    type: 'token',
  },
  {
    name: 'active',
    documentation: 'Whether the patient record is active',
    type: 'token',
  },
  {
    name: 'email',
    documentation: 'Search for patients by email address',
    type: 'token',
  },
  {
    name: 'phone',
    documentation: 'Search for patients by phone number',
    type: 'token',
  },
  {
    name: '_count',
    documentation: 'Number of results to return',
    type: 'number',
  },
  {
    name: '_sort',
    documentation:
      "Allowed sort fields include meta.lastUpdated. A leading '-' indicates descending order.",
    type: 'string',
  },
] as const satisfies ReadonlyArray<CapabilityStatementSearchParam>;

// Generate the schema directly
export const patientSearchSchema = rest.codecs.createSearchParametersSchema(patientSearchParams);
export type PatientSearchParams = rest.codecs.ParamsToShape<typeof patientSearchParams>;
```

### Database Access Layer

> 📋 **Mapping Recommendation**: The examples below show basic mapping approaches. For production applications, consider using the structured mapping patterns described in the [Mapping Objects to FHIR Objects](./mapping-objects-to-fhir-objects.md) guide to ensure robust, maintainable, and validated data transformations.

```typescript
// database/patient-repository.ts
import { PrismaClient } from '@prisma/client';
import type { Patient as FhirPatient } from '@solarahealth/fhir-r4';
import { errors } from '@solarahealth/fhir-r4-server';
import type { PatientSearchParams } from './patient-search-params';

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

  async search(params: PatientSearchParams) {
    // Helper functions for working with double-array search parameters
    const getFirstValue = <T>(param: T[][] | undefined): T | undefined => {
      return param?.[0]?.[0];
    };

    const getAllValues = <T>(param: T[][] | undefined): T[] => {
      return param?.flat() || [];
    };

    const where: any = {};

    // Handle string parameters (name, family, given)
    const nameQuery = getFirstValue(params.name);
    if (nameQuery) {
      const searchTerm = nameQuery.value;
      if (nameQuery.op === 'exact') {
        where.OR = [{ givenName: { has: searchTerm } }, { familyName: { equals: searchTerm } }];
      } else {
        // 'startsWith' or 'contains'
        const mode = nameQuery.op === 'contains' ? 'contains' : 'startsWith';
        where.OR = [
          { givenName: { hasSome: [searchTerm] } },
          { familyName: { [mode]: searchTerm, mode: 'insensitive' } },
        ];
      }
    }

    const familyQuery = getFirstValue(params.family);
    if (familyQuery) {
      const mode =
        familyQuery.op === 'exact'
          ? 'equals'
          : familyQuery.op === 'contains'
            ? 'contains'
            : 'startsWith';
      where.familyName = { [mode]: familyQuery.value, mode: 'insensitive' };
    }

    const givenQuery = getFirstValue(params.given);
    if (givenQuery) {
      if (givenQuery.op === 'exact') {
        where.givenName = { has: givenQuery.value };
      } else {
        where.givenName = { hasSome: [givenQuery.value] };
      }
    }

    // Handle date parameters (birthdate)
    const birthdateQuery = getFirstValue(params.birthdate);
    if (birthdateQuery) {
      const date = birthdateQuery.date;
      switch (birthdateQuery.prefix) {
        case 'eq':
          const nextDay = new Date(date.getTime() + 24 * 60 * 60 * 1000);
          where.birthDate = { gte: date, lt: nextDay };
          break;
        case 'lt':
          where.birthDate = { lt: date };
          break;
        case 'le':
          where.birthDate = { lte: date };
          break;
        case 'gt':
          where.birthDate = { gt: date };
          break;
        case 'ge':
          where.birthDate = { gte: date };
          break;
        case 'ne':
          where.birthDate = { not: date };
          break;
      }
    }

    // Handle token parameters (gender, active, email, phone)
    const genderQuery = getFirstValue(params.gender);
    if (genderQuery?.codingCodeOrIdentifierValue) {
      where.gender = genderQuery.codingCodeOrIdentifierValue;
    }

    const activeQuery = getFirstValue(params.active);
    if (activeQuery?.codingCodeOrIdentifierValue) {
      where.active = activeQuery.codingCodeOrIdentifierValue === 'true';
    }

    const emailQuery = getFirstValue(params.email);
    if (emailQuery?.codingCodeOrIdentifierValue) {
      where.email = emailQuery.codingCodeOrIdentifierValue;
    }

    const phoneQuery = getFirstValue(params.phone);
    if (phoneQuery?.codingCodeOrIdentifierValue) {
      where.phone = phoneQuery.codingCodeOrIdentifierValue;
    }

    // Handle identifier searches (OR logic across all identifiers)
    const allIdentifiers = getAllValues(params.identifier);
    if (allIdentifiers.length > 0) {
      where.OR = [
        ...(where.OR || []),
        ...allIdentifiers.map((id) => ({
          id: id.codingCodeOrIdentifierValue,
        })),
      ];
    }

    const [patients, total] = await Promise.all([
      this.prisma.patient.findMany({
        where,
        take: params._count || 20,
        orderBy: params._sort?.map((sort) => ({ [sort.field]: sort.direction })) || [
          { updatedAt: 'desc' },
        ],
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
import * as rest from '@solarahealth/fhir-r4-server';
import { patientSearchParams, patientSearchSchema } from '../database/patient-search-params';
import { errors } from '@solarahealth/fhir-r4-server';

export const patientResource = rest
  .resource('Patient')
  .searchParams(patientSearchParams)
  .read((builder) =>
    builder.id(z.string()).handler(async (id, context) => {
      const patient = await context.database.patients.findById(id);
      if (!patient) {
        throw new errors.ResourceNotFound('Patient', id);
      }
      return patient;
    }),
  )
  .search((builder) =>
    builder.params(patientSearchSchema).handler(async (context, params) => {
      const results = await context.database.patients.search(params);

      return {
        resourceType: 'Bundle',
        type: 'searchset',
        total: results.total,
        entry: results.patients.map((resource) => ({ resource })),
      };
    }),
  );

export default patientResource;
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
import type { PatientSearchParams } from '../database/patient-search-params';

export class PatientRepository {
  async findById(id: string): Promise<FhirPatient | null> {
    const patient = await Patient.findOne({ id });
    return patient ? this.mapToFhir(patient) : null;
  }

  async search(params: PatientSearchParams) {
    // Helper functions for working with double-array search parameters
    const getFirstValue = <T>(param: T[][] | undefined): T | undefined => {
      return param?.[0]?.[0];
    };

    const getAllValues = <T>(param: T[][] | undefined): T[] => {
      return param?.flat() || [];
    };

    const query: any = {};

    // Handle string parameters
    const nameQuery = getFirstValue(params.name);
    if (nameQuery) {
      const searchTerm = nameQuery.value;
      const regexPattern =
        nameQuery.op === 'exact'
          ? new RegExp(`^${searchTerm}$`, 'i')
          : nameQuery.op === 'contains'
            ? new RegExp(searchTerm, 'i')
            : new RegExp(`^${searchTerm}`, 'i'); // startsWith

      query.$or = [{ 'name.given': regexPattern }, { 'name.family': regexPattern }];
    }

    const familyQuery = getFirstValue(params.family);
    if (familyQuery) {
      const regexPattern =
        familyQuery.op === 'exact'
          ? new RegExp(`^${familyQuery.value}$`, 'i')
          : familyQuery.op === 'contains'
            ? new RegExp(familyQuery.value, 'i')
            : new RegExp(`^${familyQuery.value}`, 'i');

      query['name.family'] = regexPattern;
    }

    const givenQuery = getFirstValue(params.given);
    if (givenQuery) {
      const regexPattern =
        givenQuery.op === 'exact'
          ? new RegExp(`^${givenQuery.value}$`, 'i')
          : givenQuery.op === 'contains'
            ? new RegExp(givenQuery.value, 'i')
            : new RegExp(`^${givenQuery.value}`, 'i');

      query['name.given'] = regexPattern;
    }

    // Handle date parameters
    const birthdateQuery = getFirstValue(params.birthdate);
    if (birthdateQuery) {
      const date = birthdateQuery.date;
      switch (birthdateQuery.prefix) {
        case 'eq':
          const nextDay = new Date(date.getTime() + 24 * 60 * 60 * 1000);
          query.birthDate = { $gte: date, $lt: nextDay };
          break;
        case 'lt':
          query.birthDate = { $lt: date };
          break;
        case 'le':
          query.birthDate = { $lte: date };
          break;
        case 'gt':
          query.birthDate = { $gt: date };
          break;
        case 'ge':
          query.birthDate = { $gte: date };
          break;
        case 'ne':
          query.birthDate = { $ne: date };
          break;
      }
    }

    // Handle token parameters
    const genderQuery = getFirstValue(params.gender);
    if (genderQuery?.codingCodeOrIdentifierValue) {
      query.gender = genderQuery.codingCodeOrIdentifierValue;
    }

    const activeQuery = getFirstValue(params.active);
    if (activeQuery?.codingCodeOrIdentifierValue) {
      query.active = activeQuery.codingCodeOrIdentifierValue === 'true';
    }

    // Handle multiple identifiers (OR logic)
    const allIdentifiers = getAllValues(params.identifier);
    if (allIdentifiers.length > 0) {
      query.$or = [
        ...(query.$or || []),
        ...allIdentifiers.map((id) => ({
          id: id.codingCodeOrIdentifierValue,
        })),
      ];
    }

    const [patients, total] = await Promise.all([
      Patient.find(query)
        .limit(params._count || 20)
        .sort(
          params._sort?.reduce((acc, sort) => {
            acc[sort.field] = sort.direction === 'asc' ? 1 : -1;
            return acc;
          }, {} as any) || { updatedAt: -1 },
        ),
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
import type { PatientSearchParams } from '../database/patient-search-params';

export class PatientService {
  constructor(private patientRepository: Repository<PatientEntity>) {}

  async findById(id: string): Promise<FhirPatient | null> {
    const patient = await this.patientRepository.findOne({ where: { id } });
    return patient ? this.mapToFhir(patient) : null;
  }

  async search(params: PatientSearchParams) {
    // Helper functions for working with double-array search parameters
    const getFirstValue = <T>(param: T[][] | undefined): T | undefined => {
      return param?.[0]?.[0];
    };

    const getAllValues = <T>(param: T[][] | undefined): T[] => {
      return param?.flat() || [];
    };

    const queryBuilder = this.patientRepository.createQueryBuilder('patient');

    // Handle string parameters
    const nameQuery = getFirstValue(params.name);
    if (nameQuery) {
      const searchTerm = nameQuery.value;
      const operator = nameQuery.op === 'exact' ? '=' : 'LIKE';
      const value =
        nameQuery.op === 'exact'
          ? searchTerm
          : nameQuery.op === 'contains'
            ? `%${searchTerm}%`
            : `${searchTerm}%`;

      queryBuilder.andWhere('JSON_SEARCH(patient.name, "one", :name) IS NOT NULL', {
        name: value,
      });
    }

    const familyQuery = getFirstValue(params.family);
    if (familyQuery) {
      const operator = familyQuery.op === 'exact' ? '=' : 'LIKE';
      const value =
        familyQuery.op === 'exact'
          ? familyQuery.value
          : familyQuery.op === 'contains'
            ? `%${familyQuery.value}%`
            : `${familyQuery.value}%`;

      queryBuilder.andWhere('JSON_EXTRACT(patient.name, "$[*].family") LIKE :family', {
        family: value,
      });
    }

    const givenQuery = getFirstValue(params.given);
    if (givenQuery) {
      const value =
        givenQuery.op === 'exact'
          ? givenQuery.value
          : givenQuery.op === 'contains'
            ? `%${givenQuery.value}%`
            : `${givenQuery.value}%`;

      queryBuilder.andWhere(
        'JSON_SEARCH(patient.name, "one", :given, null, "$[*].given[*]") IS NOT NULL',
        {
          given: value,
        },
      );
    }

    // Handle date parameters
    const birthdateQuery = getFirstValue(params.birthdate);
    if (birthdateQuery) {
      const date = birthdateQuery.date;
      switch (birthdateQuery.prefix) {
        case 'eq':
          const nextDay = new Date(date.getTime() + 24 * 60 * 60 * 1000);
          queryBuilder.andWhere(
            'patient.birthDate >= :startDate AND patient.birthDate < :endDate',
            {
              startDate: date,
              endDate: nextDay,
            },
          );
          break;
        case 'lt':
          queryBuilder.andWhere('patient.birthDate < :date', { date });
          break;
        case 'le':
          queryBuilder.andWhere('patient.birthDate <= :date', { date });
          break;
        case 'gt':
          queryBuilder.andWhere('patient.birthDate > :date', { date });
          break;
        case 'ge':
          queryBuilder.andWhere('patient.birthDate >= :date', { date });
          break;
        case 'ne':
          queryBuilder.andWhere('patient.birthDate != :date', { date });
          break;
      }
    }

    // Handle token parameters
    const genderQuery = getFirstValue(params.gender);
    if (genderQuery?.codingCodeOrIdentifierValue) {
      queryBuilder.andWhere('patient.gender = :gender', {
        gender: genderQuery.codingCodeOrIdentifierValue,
      });
    }

    const activeQuery = getFirstValue(params.active);
    if (activeQuery?.codingCodeOrIdentifierValue) {
      queryBuilder.andWhere('patient.active = :active', {
        active: activeQuery.codingCodeOrIdentifierValue === 'true',
      });
    }

    // Handle multiple identifiers (OR logic)
    const allIdentifiers = getAllValues(params.identifier);
    if (allIdentifiers.length > 0) {
      const idConditions = allIdentifiers.map((_, index) => `patient.id = :id${index}`);
      const idParams = allIdentifiers.reduce((acc, id, index) => {
        acc[`id${index}`] = id.codingCodeOrIdentifierValue;
        return acc;
      }, {} as any);

      queryBuilder.andWhere(`(${idConditions.join(' OR ')})`, idParams);
    }

    // Apply sorting
    if (params._sort) {
      params._sort.forEach((sort) => {
        queryBuilder.addOrderBy(
          `patient.${sort.field}`,
          sort.direction.toUpperCase() as 'ASC' | 'DESC',
        );
      });
    } else {
      queryBuilder.orderBy('patient.updatedAt', 'DESC');
    }

    const [patients, total] = await queryBuilder.take(params._count || 20).getManyAndCount();

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
import type { PatientSearchParams } from '../database/patient-search-params';

export class PatientRepository {
  async findById(id: string): Promise<FhirPatient | null> {
    const patient = await db('patients').where({ id }).first();
    return patient ? this.mapToFhir(patient) : null;
  }

  async search(params: PatientSearchParams) {
    // Helper functions for working with double-array search parameters
    const getFirstValue = <T>(param: T[][] | undefined): T | undefined => {
      return param?.[0]?.[0];
    };

    const getAllValues = <T>(param: T[][] | undefined): T[] => {
      return param?.flat() || [];
    };

    let query = db('patients').select('*');

    // Handle string parameters
    const nameQuery = getFirstValue(params.name);
    if (nameQuery) {
      const searchTerm = nameQuery.value;
      query = query.where(function () {
        if (nameQuery.op === 'exact') {
          this.whereRaw("JSON_EXTRACT(name, '$[*].given') = ?", [searchTerm]).orWhereRaw(
            "JSON_EXTRACT(name, '$[*].family') = ?",
            [searchTerm],
          );
        } else {
          const sqlPattern = nameQuery.op === 'contains' ? `%${searchTerm}%` : `${searchTerm}%`;
          this.whereRaw("JSON_EXTRACT(name, '$[*].given') LIKE ?", [sqlPattern]).orWhereRaw(
            "JSON_EXTRACT(name, '$[*].family') LIKE ?",
            [sqlPattern],
          );
        }
      });
    }

    const familyQuery = getFirstValue(params.family);
    if (familyQuery) {
      if (familyQuery.op === 'exact') {
        query = query.whereRaw("JSON_EXTRACT(name, '$[*].family') = ?", [familyQuery.value]);
      } else {
        const sqlPattern =
          familyQuery.op === 'contains' ? `%${familyQuery.value}%` : `${familyQuery.value}%`;
        query = query.whereRaw("JSON_EXTRACT(name, '$[*].family') LIKE ?", [sqlPattern]);
      }
    }

    const givenQuery = getFirstValue(params.given);
    if (givenQuery) {
      if (givenQuery.op === 'exact') {
        query = query.whereRaw("JSON_EXTRACT(name, '$[*].given') = ?", [givenQuery.value]);
      } else {
        const sqlPattern =
          givenQuery.op === 'contains' ? `%${givenQuery.value}%` : `${givenQuery.value}%`;
        query = query.whereRaw("JSON_EXTRACT(name, '$[*].given') LIKE ?", [sqlPattern]);
      }
    }

    // Handle date parameters
    const birthdateQuery = getFirstValue(params.birthdate);
    if (birthdateQuery) {
      const date = birthdateQuery.date;
      switch (birthdateQuery.prefix) {
        case 'eq':
          const nextDay = new Date(date.getTime() + 24 * 60 * 60 * 1000);
          query = query.whereBetween('birth_date', [date, nextDay]);
          break;
        case 'lt':
          query = query.where('birth_date', '<', date);
          break;
        case 'le':
          query = query.where('birth_date', '<=', date);
          break;
        case 'gt':
          query = query.where('birth_date', '>', date);
          break;
        case 'ge':
          query = query.where('birth_date', '>=', date);
          break;
        case 'ne':
          query = query.where('birth_date', '!=', date);
          break;
      }
    }

    // Handle token parameters
    const genderQuery = getFirstValue(params.gender);
    if (genderQuery?.codingCodeOrIdentifierValue) {
      query = query.where('gender', genderQuery.codingCodeOrIdentifierValue);
    }

    const activeQuery = getFirstValue(params.active);
    if (activeQuery?.codingCodeOrIdentifierValue) {
      query = query.where('active', activeQuery.codingCodeOrIdentifierValue === 'true');
    }

    // Handle multiple identifiers (OR logic)
    const allIdentifiers = getAllValues(params.identifier);
    if (allIdentifiers.length > 0) {
      query = query.where(function () {
        allIdentifiers.forEach((id) => {
          this.orWhere('id', id.codingCodeOrIdentifierValue);
        });
      });
    }

    const countQuery = query.clone();
    const total = await countQuery.count('* as count').first();

    // Apply sorting
    if (params._sort) {
      params._sort.forEach((sort) => {
        query = query.orderBy(sort.field, sort.direction);
      });
    } else {
      query = query.orderBy('updated_at', 'desc');
    }

    const patients = await query.limit(params._count || 20);

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
import { errors } from '@solarahealth/fhir-r4-server';
import type { PatientSearchParams } from '../database/patient-search-params';

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
      throw new errors.InternalServerError(`Failed to fetch patient: ${error.message}`);
    }
  }

  async searchPatients(
    params: PatientSearchParams,
  ): Promise<{ patients: FhirPatient[]; total: number }> {
    try {
      const searchParams = new URLSearchParams();

      // Helper functions for working with double-array search parameters
      const getFirstValue = <T>(param: T[][] | undefined): T | undefined => {
        return param?.[0]?.[0];
      };

      // Convert search parameters to FHIR search format
      const nameQuery = getFirstValue(params.name);
      if (nameQuery) {
        let searchValue = nameQuery.value;
        if (nameQuery.op === 'exact') {
          searchValue = `:exact=${searchValue}`;
        } else if (nameQuery.op === 'contains') {
          searchValue = `:contains=${searchValue}`;
        }
        searchParams.append('name', searchValue);
      }

      const familyQuery = getFirstValue(params.family);
      if (familyQuery) {
        let searchValue = familyQuery.value;
        if (familyQuery.op === 'exact') {
          searchValue = `:exact=${searchValue}`;
        } else if (familyQuery.op === 'contains') {
          searchValue = `:contains=${searchValue}`;
        }
        searchParams.append('family', searchValue);
      }

      const givenQuery = getFirstValue(params.given);
      if (givenQuery) {
        let searchValue = givenQuery.value;
        if (givenQuery.op === 'exact') {
          searchValue = `:exact=${searchValue}`;
        } else if (givenQuery.op === 'contains') {
          searchValue = `:contains=${searchValue}`;
        }
        searchParams.append('given', searchValue);
      }

      const birthdateQuery = getFirstValue(params.birthdate);
      if (birthdateQuery) {
        let searchValue = birthdateQuery.raw;
        if (birthdateQuery.prefix !== 'eq') {
          searchValue = `${birthdateQuery.prefix}${searchValue}`;
        }
        searchParams.append('birthdate', searchValue);
      }

      const genderQuery = getFirstValue(params.gender);
      if (genderQuery?.codingCodeOrIdentifierValue) {
        searchParams.append('gender', genderQuery.codingCodeOrIdentifierValue);
      }

      const activeQuery = getFirstValue(params.active);
      if (activeQuery?.codingCodeOrIdentifierValue) {
        searchParams.append('active', activeQuery.codingCodeOrIdentifierValue);
      }

      if (params._count) {
        searchParams.append('_count', params._count.toString());
      }

      if (params._sort) {
        const sortString = params._sort
          .map((sort) => (sort.direction === 'desc' ? `-${sort.field}` : sort.field))
          .join(',');
        searchParams.append('_sort', sortString);
      }

      const response = await this.client.get(`/Patient?${searchParams}`);
      const bundle: Bundle = response.data;

      return {
        patients: bundle.entry?.map((entry) => entry.resource as FhirPatient) || [],
        total: bundle.total || 0,
      };
    } catch (error) {
      throw new errors.InternalServerError(`Failed to search patients: ${error.message}`);
    }
  }
}
```

### Integration with FHIR Server

```typescript
// repositories/external-patient-repository.ts
import { ExternalApiService } from '../services/external-api.service';
import type { Patient as FhirPatient } from '@solarahealth/fhir-r4';
import type { PatientSearchParams } from '../database/patient-search-params';

export class ExternalPatientRepository {
  constructor(private apiService: ExternalApiService) {}

  async findById(id: string): Promise<FhirPatient | null> {
    return this.apiService.findPatientById(id);
  }

  async search(params: PatientSearchParams) {
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
