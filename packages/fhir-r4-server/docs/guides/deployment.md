# Deployment Guide

This guide covers deploying your FHIR server to various environments, from traditional servers to modern serverless platforms.

## Overview

The package is designed for modern deployment scenarios and supports:

- **Traditional Server Deployment** (Node.js, PM2, Docker)
- **Cloud Platforms** (AWS, Google Cloud, Azure)
- **Serverless Functions** (AWS Lambda, Vercel, Netlify)
- **Container Orchestration** (Kubernetes, Docker Swarm)
- **Edge Deployment** (Cloudflare Workers, AWS CloudFront)

## Traditional Server Deployment

### Basic Node.js Server

```typescript
// server.ts
import express from 'express';
import { RestServer, builder } from '@solarahealth/fhir-r4-server';

const app = express();
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Your FHIR server setup
const fhirServer = RestServer.init(/* configuration */);
app.use('/fhir', RestServer.expressMiddleware(fhirServer, { context: createContext }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`FHIR server running on port ${PORT}`);
});
```

### Production Configuration

```typescript
// server-production.ts
import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import { RestServer, builder } from '@solarahealth/fhir-r4-server';

const app = express();

// Security middleware
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
      },
    },
  }),
);

// Compression
app.use(compression());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP',
});
app.use('/fhir', limiter);

// Body parsing with size limits
app.use(express.json({ limit: '10mb' }));

// CORS configuration
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGINS || '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  next();
});

// FHIR server
const fhirServer = RestServer.init(/* configuration */);
app.use('/fhir', RestServer.expressMiddleware(fhirServer, { context: createContext }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Production FHIR server running on port ${PORT}`);
});
```

### PM2 Deployment

Create a PM2 ecosystem file:

```javascript
// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'fhir-server',
      script: 'dist/server.js',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        DATABASE_URL: 'postgresql://user:pass@localhost:5432/fhir',
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_file: './logs/combined.log',
      time: true,
      max_memory_restart: '1G',
    },
  ],
};
```

Deploy with PM2:

```bash
# Build the application
npm run build

# Start with PM2
pm2 start ecosystem.config.js --env production

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup
```

## Docker Deployment

### Dockerfile

```dockerfile
# Multi-stage build for production
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy source code
COPY src/ ./src/

# Build application
RUN npm run build

# Production stage
FROM node:18-alpine AS production

# Install dumb-init for proper signal handling
RUN apk add --no-cache dumb-init

# Create app user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S fhir -u 1001

WORKDIR /app

# Copy built application
COPY --from=builder --chown=fhir:nodejs /app/dist ./dist
COPY --from=builder --chown=fhir:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=fhir:nodejs /app/package.json ./

# Switch to non-root user
USER fhir

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

# Start application
ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "dist/server.js"]
```

### Docker Compose

```yaml
# docker-compose.yml
version: '3.8'

services:
  fhir-server:
    build: .
    ports:
      - '3000:3000'
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://fhir:password@postgres:5432/fhir
      - REDIS_URL=redis://redis:6379
    depends_on:
      - postgres
      - redis
    restart: unless-stopped

  postgres:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=fhir
      - POSTGRES_USER=fhir
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: unless-stopped

  redis:
    image: redis:7-alpine
    restart: unless-stopped

volumes:
  postgres_data:
```

Build and run:

```bash
# Build and start services
docker-compose up -d

# View logs
docker-compose logs -f fhir-server

# Scale the service
docker-compose up -d --scale fhir-server=3
```

## AWS Deployment

### AWS Lambda

```typescript
// lambda.ts
import serverless from 'serverless-http';
import express from 'express';
import { RestServer, builder } from '@solarahealth/fhir-r4-server';

const app = express();
app.use(express.json());

// Configure for Lambda environment
const createContext = async ({ req }) => ({
  database: await getDatabaseConnection(),
  logger: console, // CloudWatch integration
  requestId: req.headers['x-amzn-request-id'],
});

const fhirServer = RestServer.init(/* configuration */);
app.use('/fhir', RestServer.expressMiddleware(fhirServer, { context: createContext }));

// Export for Lambda
export const handler = serverless(app, {
  binary: false,
  request: (request, event, context) => {
    // Add Lambda context to request
    request.lambda = { event, context };
  },
});
```

### Serverless Framework Configuration

```yaml
# serverless.yml
service: fhir-r4-server

provider:
  name: aws
  runtime: nodejs18.x
  region: us-east-1
  timeout: 30
  memorySize: 512
  environment:
    NODE_ENV: production
    DATABASE_URL: ${env:DATABASE_URL}
  iam:
    role:
      statements:
        - Effect: Allow
          Action:
            - rds:DescribeDBInstances
          Resource: '*'

functions:
  fhir:
    handler: dist/lambda.handler
    events:
      - http:
          path: /{proxy+}
          method: ANY
          cors: true
      - http:
          path: /
          method: ANY
          cors: true

plugins:
  - serverless-typescript
  - serverless-offline

custom:
  serverless-offline:
    httpPort: 3000
```

Deploy to AWS:

```bash
# Install Serverless Framework
npm install -g serverless

# Deploy
serverless deploy

# Test locally
serverless offline
```

### AWS ECS (Fargate)

```json
{
  "family": "fhir-server",
  "networkMode": "awsvpc",
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "256",
  "memory": "512",
  "executionRoleArn": "arn:aws:iam::ACCOUNT:role/ecsTaskExecutionRole",
  "taskRoleArn": "arn:aws:iam::ACCOUNT:role/ecsTaskRole",
  "containerDefinitions": [
    {
      "name": "fhir-server",
      "image": "your-account.dkr.ecr.region.amazonaws.com/fhir-server:latest",
      "portMappings": [
        {
          "containerPort": 3000,
          "protocol": "tcp"
        }
      ],
      "environment": [
        {
          "name": "NODE_ENV",
          "value": "production"
        }
      ],
      "secrets": [
        {
          "name": "DATABASE_URL",
          "valueFrom": "arn:aws:secretsmanager:region:account:secret:db-url"
        }
      ],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/fhir-server",
          "awslogs-region": "us-east-1",
          "awslogs-stream-prefix": "ecs"
        }
      }
    }
  ]
}
```

## Vercel Deployment

### API Route Setup

```typescript
// api/fhir/[...slug].ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';
import { RestServer, builder } from '@solarahealth/fhir-r4-server';

const app = express();
app.use(express.json());

// Configure for Vercel environment
const createContext = async ({ req }) => ({
  database: await getDatabaseConnection(),
  logger: console,
  requestId: req.headers['x-vercel-id'],
});

const fhirServer = RestServer.init(/* configuration */);
app.use('/api/fhir', RestServer.expressMiddleware(fhirServer, { context: createContext }));

export default app;
```

### Vercel Configuration

```json
{
  "version": 2,
  "name": "fhir-r4-server",
  "builds": [
    {
      "src": "api/**/*.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/fhir/(.*)",
      "dest": "/api/fhir/$1"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  },
  "functions": {
    "api/**/*.ts": {
      "maxDuration": 30
    }
  }
}
```

Deploy to Vercel:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## Kubernetes Deployment

### Deployment Manifest

```yaml
# k8s/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: fhir-server
  labels:
    app: fhir-server
spec:
  replicas: 3
  selector:
    matchLabels:
      app: fhir-server
  template:
    metadata:
      labels:
        app: fhir-server
    spec:
      containers:
        - name: fhir-server
          image: your-registry/fhir-server:latest
          ports:
            - containerPort: 3000
          env:
            - name: NODE_ENV
              value: 'production'
            - name: DATABASE_URL
              valueFrom:
                secretKeyRef:
                  name: fhir-secrets
                  key: database-url
          resources:
            requests:
              memory: '256Mi'
              cpu: '250m'
            limits:
              memory: '512Mi'
              cpu: '500m'
          livenessProbe:
            httpGet:
              path: /health
              port: 3000
            initialDelaySeconds: 30
            periodSeconds: 10
          readinessProbe:
            httpGet:
              path: /health
              port: 3000
            initialDelaySeconds: 5
            periodSeconds: 5
---
apiVersion: v1
kind: Service
metadata:
  name: fhir-server-service
spec:
  selector:
    app: fhir-server
  ports:
    - protocol: TCP
      port: 80
      targetPort: 3000
  type: LoadBalancer
```

### Ingress Configuration

```yaml
# k8s/ingress.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: fhir-server-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
    cert-manager.io/cluster-issuer: 'letsencrypt-prod'
spec:
  tls:
    - hosts:
        - fhir.yourdomain.com
      secretName: fhir-tls
  rules:
    - host: fhir.yourdomain.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: fhir-server-service
                port:
                  number: 80
```

Deploy to Kubernetes:

```bash
# Apply configurations
kubectl apply -f k8s/

# Check deployment status
kubectl get deployments
kubectl get pods
kubectl get services

# View logs
kubectl logs -f deployment/fhir-server
```

## Environment Configuration

### Environment Variables

```bash
# Core configuration
NODE_ENV=production
PORT=3000

# Database
DATABASE_URL=postgresql://user:pass@host:5432/db
DATABASE_POOL_MIN=2
DATABASE_POOL_MAX=10

# Redis (for caching/sessions)
REDIS_URL=redis://host:6379

# Security
JWT_SECRET=your-secret-key
ENCRYPTION_KEY=your-encryption-key

# Logging
LOG_LEVEL=info
LOG_FORMAT=json

# FHIR specific
FHIR_BASE_URL=https://your-domain.com/fhir
FHIR_VERSION=4.0.1

# External services
TERMINOLOGY_SERVER_URL=https://tx.fhir.org
```

### Configuration Management

```typescript
// config.ts
interface Config {
  port: number;
  nodeEnv: string;
  database: {
    url: string;
    poolMin: number;
    poolMax: number;
  };
  redis: {
    url: string;
  };
  fhir: {
    baseUrl: string;
    version: string;
  };
}

export const config: Config = {
  port: parseInt(process.env.PORT || '3000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  database: {
    url: process.env.DATABASE_URL || '',
    poolMin: parseInt(process.env.DATABASE_POOL_MIN || '2', 10),
    poolMax: parseInt(process.env.DATABASE_POOL_MAX || '10', 10),
  },
  redis: {
    url: process.env.REDIS_URL || 'redis://localhost:6379',
  },
  fhir: {
    baseUrl: process.env.FHIR_BASE_URL || 'http://localhost:3000/fhir',
    version: process.env.FHIR_VERSION || '4.0.1',
  },
};

// Validate configuration
function validateConfig(config: Config) {
  const required = ['DATABASE_URL'];
  const missing = required.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}

validateConfig(config);
```

## Monitoring and Observability

### Health Checks

```typescript
// health.ts
import { Request, Response } from 'express';

interface HealthCheck {
  status: 'healthy' | 'unhealthy';
  timestamp: string;
  uptime: number;
  checks: {
    database: boolean;
    redis: boolean;
    memory: {
      used: number;
      free: number;
      percentage: number;
    };
  };
}

export async function healthCheck(req: Request, res: Response) {
  try {
    const memUsage = process.memoryUsage();
    const memPercentage = (memUsage.heapUsed / memUsage.heapTotal) * 100;

    const health: HealthCheck = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      checks: {
        database: await checkDatabase(),
        redis: await checkRedis(),
        memory: {
          used: memUsage.heapUsed,
          free: memUsage.heapTotal - memUsage.heapUsed,
          percentage: memPercentage,
        },
      },
    };

    // Determine overall health
    const isHealthy = health.checks.database && health.checks.redis && memPercentage < 90;

    health.status = isHealthy ? 'healthy' : 'unhealthy';

    res.status(isHealthy ? 200 : 503).json(health);
  } catch (error) {
    res.status(503).json({
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      error: error.message,
    });
  }
}

async function checkDatabase(): Promise<boolean> {
  try {
    // Implement database health check
    return true;
  } catch {
    return false;
  }
}

async function checkRedis(): Promise<boolean> {
  try {
    // Implement Redis health check
    return true;
  } catch {
    return false;
  }
}
```

### Logging Configuration

```typescript
// logger.ts
import winston from 'winston';

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    process.env.NODE_ENV === 'production' ? winston.format.json() : winston.format.simple(),
  ),
  transports: [
    new winston.transports.Console(),
    ...(process.env.NODE_ENV === 'production'
      ? [
          new winston.transports.File({ filename: 'error.log', level: 'error' }),
          new winston.transports.File({ filename: 'combined.log' }),
        ]
      : []),
  ],
});

export { logger };
```

## Performance Optimization

### Production Optimizations

```typescript
// optimizations.ts

// 1. Connection pooling
const dbConfig = {
  min: 2,
  max: 10,
  acquireTimeoutMillis: 30000,
  idleTimeoutMillis: 30000,
};

// 2. Caching layer
class CacheService {
  private redis: Redis;

  async get<T>(key: string): Promise<T | null> {
    const cached = await this.redis.get(key);
    return cached ? JSON.parse(cached) : null;
  }

  async set(key: string, value: any, ttl: number = 300): Promise<void> {
    await this.redis.setex(key, ttl, JSON.stringify(value));
  }
}

// 3. Response compression
app.use(
  compression({
    level: 6,
    threshold: 1024,
    filter: (req, res) => {
      return compression.filter(req, res);
    },
  }),
);

// 4. Request timeout
app.use((req, res, next) => {
  req.setTimeout(30000, () => {
    res.status(408).json({
      resourceType: 'OperationOutcome',
      issue: [
        {
          severity: 'error',
          code: 'timeout',
          details: { text: 'Request timeout' },
        },
      ],
    });
  });
  next();
});
```

## Next Steps

- Review [Error Handling](./error-handling.md) for production error management
- Check [Database Integration](./database-integration.md) for database optimization
- Explore [Context Management](./context.md) for request handling
- See [Builder API](./builder-api.md) for advanced patterns
