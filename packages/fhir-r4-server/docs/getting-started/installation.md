# Installation

This guide will help you install and set up `@solarahealth/fhir-r4-server` in your project.

## Requirements

- **Node.js** >= 18.0.0 (for modern JavaScript features and optimal performance)
- **Express.js** ^5.1.0
- **TypeScript** >= 4.5.0 (strongly recommended for the best development experience)

## Installation

Install the package and its peer dependencies:

```bash
npm install @solarahealth/fhir-r4-server @solarahealth/fhir-r4 express
```

If you're using TypeScript (recommended), also install the TypeScript types for Express:

```bash
npm install --save-dev @types/express @types/node
```

## Dependencies

This package has minimal dependencies to keep it lightweight:

### Core Dependencies

- **`@solarahealth/fhir-r4`**: FHIR R4 type definitions, utilities, and data transformation helpers
- **`zod`**: Runtime type validation and schema parsing

### Peer Dependencies

- **`express`**: Web framework for Node.js (you need to install this separately)

## Project Setup

### TypeScript Configuration

If you're using TypeScript, ensure your `tsconfig.json` includes these recommended settings:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### Package.json Scripts

Add these helpful scripts to your `package.json`:

```json
{
  "scripts": {
    "dev": "ts-node src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js",
    "type-check": "tsc --noEmit"
  }
}
```

## Verification

After installation, you can verify everything is working by creating a simple test file:

```typescript
// test-installation.ts
import { RestServer, builder } from '@solarahealth/fhir-r4-server';
import type { Patient } from '@solarahealth/fhir-r4';

console.log('✅ Installation successful!');
console.log('RestServer:', typeof RestServer);
console.log('builder:', typeof builder);
```

Run it with:

```bash
npx ts-node test-installation.ts
```

You should see output confirming the installation was successful.

## Next Steps

Now that you have the package installed, continue to the [Quick Start Guide](./quick-start.md) to build your first FHIR server.
