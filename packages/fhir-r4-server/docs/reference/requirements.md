# Requirements

This document outlines the system requirements, dependencies, and compatibility for `@solarahealth/fhir-r4-server`.

## System Requirements

### Node.js

**Minimum Required:** Node.js 18.0.0+

**Recommended:** Node.js 20.x LTS

| Version  | Status | Support Level   | Notes                                   |
| -------- | ------ | --------------- | --------------------------------------- |
| 18.x LTS | ✅     | Fully Supported | Minimum required version                |
| 20.x LTS | ✅     | Recommended     | Current LTS with optimal performance    |
| 22.x     | ✅     | Supported       | Latest stable version                   |
| 16.x     | ❌     | End of Life     | Security vulnerabilities, not supported |

#### Why Node.js 18+?

- **ES2022 Support**: Native support for modern JavaScript features
- **Performance**: Improved V8 engine performance
- **Security**: Latest security patches and updates
- **Async/Await**: Optimal async/await performance
- **Module System**: Better ESM and CommonJS interoperability

### Memory Requirements

| Environment     | Minimum RAM | Recommended RAM | Notes                                         |
| --------------- | ----------- | --------------- | --------------------------------------------- |
| **Development** | 512 MB      | 2 GB            | For basic development with small datasets     |
| **Testing**     | 1 GB        | 4 GB            | Running test suites and multiple environments |
| **Production**  | 2 GB        | 8 GB+           | Depends on concurrent users and data volume   |
| **Serverless**  | 128 MB      | 512 MB          | AWS Lambda or similar functions               |

### Storage Requirements

| Component       | Minimum | Recommended | Notes                     |
| --------------- | ------- | ----------- | ------------------------- |
| **Application** | 50 MB   | 100 MB      | Including node_modules    |
| **Database**    | 100 MB  | 1 GB+       | Depends on data volume    |
| **Logs**        | 10 MB   | 500 MB      | Rotating logs recommended |
| **Cache**       | 0 MB    | 100 MB      | Optional Redis cache      |

## Dependencies

### Core Dependencies

#### Required (Peer Dependencies)

```json
{
  "express": "^5.1.0",
  "@solarahealth/fhir-r4": "^1.0.0"
}
```

#### Bundled Dependencies

```json
{
  "zod": "^3.22.0"
}
```

### Development Dependencies

For TypeScript development (strongly recommended):

```bash
npm install --save-dev @types/express @types/node typescript ts-node
```

### Optional Dependencies

#### Database Drivers

Choose based on your database:

```bash
# PostgreSQL
npm install pg @types/pg

# MySQL
npm install mysql2 @types/mysql

# SQLite
npm install sqlite3 @types/sqlite3

# MongoDB
npm install mongodb @types/mongodb
```

#### ORMs/Query Builders

```bash
# Prisma (recommended)
npm install prisma @prisma/client

# TypeORM
npm install typeorm reflect-metadata

# Sequelize
npm install sequelize @types/sequelize

# Knex.js
npm install knex @types/knex

# Mongoose (for MongoDB)
npm install mongoose @types/mongoose
```

#### Caching

```bash
# Redis
npm install ioredis @types/ioredis

# In-memory cache
npm install node-cache @types/node-cache
```

#### Additional Middleware

```bash
# Security
npm install helmet @types/helmet

# Compression
npm install compression @types/compression

# Rate limiting
npm install express-rate-limit @types/express-rate-limit

# CORS
npm install cors @types/cors

# Logging
npm install winston @types/winston
```

## Compatibility Matrix

### Express.js Compatibility

| Express Version | Status | Notes                       |
| --------------- | ------ | --------------------------- |
| **4.x**         | ✅     | Fully supported             |
| **5.x**         | ✅     | Latest version, recommended |
| **3.x**         | ❌     | Not supported               |

### TypeScript Compatibility

| TypeScript Version | Status | Notes                     |
| ------------------ | ------ | ------------------------- |
| **4.5+**           | ✅     | Minimum required          |
| **4.9**            | ✅     | Stable LTS                |
| **5.0+**           | ✅     | Latest features           |
| **<4.5**           | ❌     | Missing required features |

### Database Compatibility

#### SQL Databases

| Database       | Min Version | Recommended | Status | Notes                      |
| -------------- | ----------- | ----------- | ------ | -------------------------- |
| **PostgreSQL** | 12.0        | 15.0+       | ✅     | Recommended for production |
| **MySQL**      | 8.0         | 8.0+        | ✅     | Full JSON support required |
| **MariaDB**    | 10.5        | 10.8+       | ✅     | MySQL-compatible           |
| **SQLite**     | 3.35        | 3.40+       | ✅     | Development/testing        |
| **SQL Server** | 2019        | 2022        | 🟡     | Via community drivers      |

#### NoSQL Databases

| Database     | Min Version | Recommended | Status | Notes               |
| ------------ | ----------- | ----------- | ------ | ------------------- |
| **MongoDB**  | 5.0         | 6.0+        | ✅     | Document storage    |
| **DynamoDB** | N/A         | Latest      | 🟡     | Via custom adapters |
| **CouchDB**  | 3.0         | 3.2+        | 🟡     | Community support   |

### Cloud Platform Compatibility

#### Serverless Platforms

| Platform                   | Status | Notes                        |
| -------------------------- | ------ | ---------------------------- |
| **AWS Lambda**             | ✅     | Node.js 18+ runtime          |
| **Vercel Functions**       | ✅     | Edge and Node.js runtimes    |
| **Netlify Functions**      | ✅     | Node.js runtime              |
| **Google Cloud Functions** | ✅     | Node.js 18+ runtime          |
| **Azure Functions**        | ✅     | Node.js v4 programming model |

#### Container Platforms

| Platform                      | Status | Notes                           |
| ----------------------------- | ------ | ------------------------------- |
| **Docker**                    | ✅     | Any version supporting Node 18+ |
| **Kubernetes**                | ✅     | Any recent version              |
| **AWS ECS**                   | ✅     | Fargate and EC2 launch types    |
| **Google Cloud Run**          | ✅     | Full support                    |
| **Azure Container Instances** | ✅     | Full support                    |

#### Traditional Hosting

| Platform                   | Status | Notes             |
| -------------------------- | ------ | ----------------- |
| **AWS EC2**                | ✅     | Any instance type |
| **Google Compute Engine**  | ✅     | Any machine type  |
| **Azure Virtual Machines** | ✅     | Any VM size       |
| **DigitalOcean Droplets**  | ✅     | Any droplet size  |
| **Linode**                 | ✅     | Any plan          |

## Operating System Support

| OS          | Architecture | Status | Notes                       |
| ----------- | ------------ | ------ | --------------------------- |
| **Linux**   | x64          | ✅     | Recommended for production  |
| **Linux**   | ARM64        | ✅     | Apple Silicon, AWS Graviton |
| **macOS**   | x64          | ✅     | Development environment     |
| **macOS**   | ARM64        | ✅     | Apple Silicon Macs          |
| **Windows** | x64          | ✅     | Development and production  |
| **Windows** | ARM64        | 🟡     | Limited testing             |

## Performance Requirements

### Minimum Performance Benchmarks

Based on a basic Patient resource server with 1000 resources:

| Metric            | Minimum     | Target       | Notes               |
| ----------------- | ----------- | ------------ | ------------------- |
| **Response Time** | <500ms      | <100ms       | 95th percentile     |
| **Throughput**    | 100 req/min | 1000 req/min | Concurrent requests |
| **Memory Usage**  | <100MB      | <50MB        | Steady state        |
| **CPU Usage**     | <50%        | <25%         | Under load          |

### Scaling Characteristics

| Load Level     | Concurrent Users | Requests/sec | Memory | CPU  |
| -------------- | ---------------- | ------------ | ------ | ---- |
| **Light**      | 1-10             | 1-10         | 50MB   | 5%   |
| **Medium**     | 10-100           | 10-50        | 100MB  | 15%  |
| **Heavy**      | 100-1000         | 50-200       | 200MB  | 40%  |
| **Enterprise** | 1000+            | 200+         | 500MB+ | 60%+ |

## Security Requirements

### TLS/SSL

- **Minimum**: TLS 1.2
- **Recommended**: TLS 1.3
- **Cipher Suites**: Modern, secure cipher suites only

### Dependencies Security

- Regular dependency updates required
- Use `npm audit` to check for vulnerabilities
- Consider tools like Snyk or Dependabot

### Runtime Security

```bash
# Check for known vulnerabilities
npm audit

# Fix automatically where possible
npm audit fix

# Check specific packages
npm audit --package=package-name
```

## Development Environment Setup

### Minimum Development Setup

```bash
# Required tools
node --version  # Should be 18.0.0 or higher
npm --version   # Should be 8.0.0 or higher

# Install project
npm install @solarahealth/fhir-r4-server @solarahealth/fhir-r4 express

# TypeScript (recommended)
npm install --save-dev typescript @types/node @types/express ts-node
```

### Recommended Development Setup

```bash
# Modern Node.js
nvm install 20
nvm use 20

# Package manager (choose one)
npm --version   # or
yarn --version  # or
pnpm --version

# Development tools
npm install --save-dev \
  typescript \
  @types/node \
  @types/express \
  ts-node \
  nodemon \
  jest \
  @types/jest \
  eslint \
  prettier \
  @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin
```

## Production Environment Requirements

### Container Requirements

```dockerfile
FROM node:20-alpine

# Minimum container requirements
RUN apk add --no-cache \
    tini \
    curl

# Security: non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S fhir -u 1001

# Health checks
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

USER fhir
```

### Environment Variables

#### Required

```bash
NODE_ENV=production
DATABASE_URL=postgresql://user:pass@host:5432/db
```

#### Recommended

```bash
PORT=3000
LOG_LEVEL=info
FHIR_BASE_URL=https://your-domain.com/fhir
```

#### Optional

```bash
REDIS_URL=redis://host:6379
JWT_SECRET=your-secret-key
RATE_LIMIT_MAX=100
RATE_LIMIT_WINDOW=900000
```

### Monitoring Requirements

#### Health Checks

Implement health check endpoints:

```typescript
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});
```

#### Metrics Collection

Recommended monitoring:

- **Response times**: 95th percentile
- **Error rates**: 4xx and 5xx responses
- **Memory usage**: Heap and process memory
- **CPU usage**: Process CPU utilization
- **Database connections**: Active/idle connections

## Troubleshooting

### Common Issues

#### Node.js Version Issues

```bash
# Check Node.js version
node --version

# Update Node.js (using nvm)
nvm install 20
nvm use 20
```

#### Memory Issues

```bash
# Increase Node.js memory limit
node --max-old-space-size=4096 app.js

# Monitor memory usage
node --inspect app.js
```

#### Database Connection Issues

```bash
# Test database connection
npm install --save-dev wait-port
npx wait-port postgresql://localhost:5432
```

### Performance Tuning

#### Database Optimization

```bash
# PostgreSQL connection pooling
DATABASE_POOL_MIN=2
DATABASE_POOL_MAX=10
```

#### Node.js Optimization

```bash
# Enable HTTP/2
NODE_OPTIONS="--enable-source-maps"

# Optimize garbage collection
NODE_OPTIONS="--max-old-space-size=2048"
```

## Support and Updates

### Long-term Support (LTS)

- **Node.js LTS**: Follow Node.js LTS schedule
- **Package Updates**: Regular security and feature updates
- **Breaking Changes**: Only in major version releases

### Migration Support

- **Version Compatibility**: Maintained for 1 major version back
- **Migration Guides**: Provided for major version upgrades
- **Deprecation Warnings**: 6 months notice for breaking changes

### Community Support

- **GitHub Issues**: Bug reports and feature requests
- **Discussions**: Community Q&A and best practices
- **Security**: Responsible disclosure process

For the latest requirements and compatibility information, check the [GitHub repository](https://github.com/SolaraHealthAU/fhir) and recent releases.
