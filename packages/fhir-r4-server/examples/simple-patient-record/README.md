# Simple FHIR R4 Server Example

A comprehensive getting started example showing how to create a FHIR R4 server using `@solarahealth/fhir-r4-server` with Express.js. This example demonstrates both reading individual patient records and searching across multiple patients using FHIR-standard search parameters.

## What This Example Shows

- How to set up a FHIR server with Express.js
- Defining Patient resources with both **read** and **search** capabilities
- Using the resource builder pattern with search parameters
- Implementing FHIR-compliant search functionality
- Working with multiple sample patients
- Proper error handling for missing resources
- Auto-generated capability statement with search parameter documentation
- Structured code organization following best practices

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Quick Demo

For a comprehensive demonstration of all functionality, run the interactive demo script:

```bash
# Make sure the server is running first
npm run dev

# In another terminal, run the demo
./demo.sh
```

The demo script will walk through all the key features including reading individual patients, searching with different parameters, and showing the capability statement.

## What's Included

This example includes:

- **4 sample Patient resources** with diverse characteristics for testing search
- **Read operation** for individual Patient resources by ID
- **Search operation** supporting multiple FHIR R4 search parameters:
  - `name` - Search across both given and family names
  - `family` - Search by family name
  - `given` - Search by given name
  - `identifier` - Search by patient identifier (MRN)
  - `gender` - Search by gender
  - `birthdate` - Search by birth date
- **Modular code structure** with separate files for search parameters and sample data
- **Enhanced logging** for debugging and understanding request flow
- **Health check endpoint** for monitoring
- **Interactive demo script** showcasing all functionality

## API Endpoints

### Core FHIR Endpoints

- `GET /fhir/metadata` - Server capability statement
- `GET /fhir/Patient/{id}` - Read specific patient by ID
- `GET /fhir/Patient?{search-params}` - Search patients

### Utility Endpoints

- `GET /health` - Health check

## Quick Test Examples

### Read Individual Patients

```bash
# Get John Doe (comprehensive patient record)
curl http://localhost:3000/fhir/Patient/123

# Get Jane Smith (with maiden name)
curl http://localhost:3000/fhir/Patient/456

# Get Robert Brown (with nickname)
curl http://localhost:3000/fhir/Patient/789

# Get Sarah Wilson
curl http://localhost:3000/fhir/Patient/101

# Try a non-existent patient (returns 404)
curl http://localhost:3000/fhir/Patient/999
```

### Search Patients

```bash
# Search by name (matches both given and family names)
curl "http://localhost:3000/fhir/Patient?name=John"
curl "http://localhost:3000/fhir/Patient?name=Smith"

# Search by family name
curl "http://localhost:3000/fhir/Patient?family=Doe"
curl "http://localhost:3000/fhir/Patient?family=Brown"

# Search by given name
curl "http://localhost:3000/fhir/Patient?given=Jane"
curl "http://localhost:3000/fhir/Patient?given=Sarah"

# Search by gender
curl "http://localhost:3000/fhir/Patient?gender=male"
curl "http://localhost:3000/fhir/Patient?gender=female"

# Search by identifier (MRN)
curl "http://localhost:3000/fhir/Patient?identifier=MRN123456"

# Search by birth date
curl "http://localhost:3000/fhir/Patient?birthdate=1980-01-15"

# Get all patients (no search parameters)
curl "http://localhost:3000/fhir/Patient"
```

### Server Information

```bash
# Check server capabilities
curl http://localhost:3000/fhir/metadata

# Health check
curl http://localhost:3000/health
```

## Code Structure

The example is organized into several files for clarity and maintainability:

### `src/index.ts` - Main Server Setup

- Express server configuration
- FHIR resource definition with read and search operations
- Search implementation logic
- Server initialization and startup

### `src/patient-search-params.ts` - Search Parameter Definitions

- FHIR R4 compliant search parameter definitions
- Type-safe search schema generation
- Follows documented best practices for search parameter organization

### `src/sample-data.ts` - Sample Patient Data

- Diverse patient records for testing different search scenarios
- Comprehensive FHIR Patient resource examples
- Data designed to demonstrate various search parameter combinations

### `src/create-context.ts` - Request Context

- Request-scoped context management
- Ready for extension with authentication, database connections, etc.

## Key Concepts Demonstrated

### 1. **Resource Definition with Search**

```typescript
const patientResource = builder
  .defineResource('Patient')
  .searchParams(patientSearchParamsForBuilder)
  .read(/* read implementation */)
  .search(/* search implementation */)
  .build();
```

### 2. **Search Parameter Handling**

Shows how to work with FHIR's double-array search parameter structure and implement common search patterns.

### 3. **FHIR Bundle Responses**

Proper Bundle construction for search results following FHIR specifications.

### 4. **Type Safety**

Full TypeScript integration with compile-time type checking for search parameters and responses.

## Sample Data Overview

The example includes 4 patients with different characteristics:

| ID  | Name               | Gender | Birth Date | Identifier | Notable Features      |
| --- | ------------------ | ------ | ---------- | ---------- | --------------------- |
| 123 | John Michael Doe   | male   | 1980-01-15 | MRN123456  | Complete contact info |
| 456 | Jane Smith         | female | 1975-08-22 | MRN789012  | Maiden name (Johnson) |
| 789 | Robert James Brown | male   | 1992-03-10 | MRN345678  | Nickname (Bob)        |
| 101 | Sarah Marie Wilson | female | 1988-12-05 | MRN567890  | Email contact only    |

## Next Steps

This example provides a solid foundation for FHIR server development. For production applications, consider adding:

### Data Layer

- Database integration (PostgreSQL, MongoDB, etc.)
- Data persistence and transaction management
- Performance optimization for large datasets

### Additional FHIR Operations

- `create` - Add new patients
- `update` - Modify existing patients
- `delete` - Remove patients
- `patch` - Partial updates

### Enhanced Search

- More search parameters (address, phone, email, etc.)
- Complex search combinations
- Pagination support (`_count`, `_offset`)
- Sorting (`_sort`)

### Production Features

- Authentication and authorization
- Input validation and business rules
- Audit logging
- Error monitoring
- Rate limiting

### Additional Resource Types

- Observation, Practitioner, Organization, etc.
- Resource relationships and references
- Contained resources

## Troubleshooting

### Common Issues

**Search returns no results**: Check that search parameter values match the data format. String searches are case-insensitive and use "contains" matching.

**TypeScript errors**: Ensure all dependencies are installed and the TypeScript configuration is correct.

**Server won't start**: Check that port 3000 is available or set a different port using the `PORT` environment variable.

## Learning Resources

- [FHIR R4 Search Specification](https://www.hl7.org/fhir/search.html)
- [Patient Resource Documentation](https://www.hl7.org/fhir/patient.html)
- [Search Parameter Types](https://www.hl7.org/fhir/search.html#ptypes)
