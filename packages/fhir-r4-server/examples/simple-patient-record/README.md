# Simple FHIR R4 Server Example

A minimal getting started example showing how to create a basic FHIR R4 server using `@solarahealth/fhir-r4-server` with Express.js. This bare-bones implementation demonstrates the core concepts needed to get up and running.

## What This Example Shows

- How to set up a basic FHIR server with Express
- Defining a simple Patient resource with read capability
- Using the resource builder pattern
- Basic error handling for missing resources
- Auto-generated capability statement

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## What's Included

This example includes:

- One hardcoded Patient resource (ID: "123")
- A single `read` operation for Patient resources
- Basic context setup (though minimal in this example)
- FHIR-compliant error responses

## API Endpoints

- `GET /fhir/Patient/123` - Returns the example patient
- `GET /fhir/metadata` - Returns server capabilities

## Quick Test

```bash
# Get the example patient
curl http://localhost:3000/fhir/Patient/123

# Try a non-existent patient (returns 404)
curl http://localhost:3000/fhir/Patient/999

# Check server capabilities
curl http://localhost:3000/fhir/metadata
```

## Code Walkthrough

The main concepts demonstrated in `src/index.ts`:

1. **Resource Definition**: Using `builder.defineResource('Patient')` to create a resource handler
2. **Read Operation**: Implementing a simple read with ID validation using Zod
3. **Error Handling**: Throwing `ResourceNotFound` for missing patients
4. **Server Setup**: Mounting the FHIR server on Express with `/fhir` prefix

## Next Steps

This is intentionally minimal to show the basics. For real applications, you'd want to add:

- Database persistence (instead of in-memory storage)
- More FHIR operations (create, update, delete, search)
- Additional resource types
- Authentication and authorization
- Input validation and business rules

## Key Files

- `src/index.ts` - Main server setup and Patient resource definition
- `src/create-context.ts` - Basic context factory (minimal implementation)
