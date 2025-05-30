# Feature Support

This document provides a comprehensive overview of FHIR R4 features supported by `@solarahealth/fhir-r4-server`.

## Legend

- ✅ **Fully Supported** - Feature is implemented and tested
- 🟡 **Partially Supported** - Feature is implemented with limitations
- ⏳ **Planned** - Feature is planned for future release
- ❌ **Not Planned** - Feature is not planned for implementation

## FHIR Operations

### Instance Level Interactions

| Operation   | Status | Notes                                     |
| ----------- | ------ | ----------------------------------------- |
| **read**    | ✅     | Retrieve a resource by ID                 |
| **vread**   | ⏳     | Retrieve a specific version of a resource |
| **update**  | ⏳     | Update a resource                         |
| **patch**   | ⏳     | Partial update of a resource              |
| **delete**  | ⏳     | Delete a resource                         |
| **history** | ⏳     | Retrieve change history for a resource    |

### Type Level Interactions

| Operation   | Status | Notes                                       |
| ----------- | ------ | ------------------------------------------- |
| **create**  | ⏳     | Create new resources                        |
| **search**  | ✅     | Search for resources with parameters        |
| **history** | ⏳     | Retrieve change history for a resource type |

### Whole System Interactions

| Operation        | Status | Notes                                                    |
| ---------------- | ------ | -------------------------------------------------------- |
| **capabilities** | ✅     | Capability statement generation and serving              |
| **batch**        | ⏳     | Process multiple operations in a single request          |
| **transaction**  | ⏳     | Process multiple operations with transactional semantics |
| **history**      | ⏳     | Retrieve change history for the entire server            |
| **search**       | ⏳     | Search across all resource types                         |

## Search Features

### Basic Search

| Feature                  | Status | Notes                                   |
| ------------------------ | ------ | --------------------------------------- |
| **Simple parameters**    | ✅     | String, number, date, token searches    |
| **Parameter validation** | ✅     | Using Zod schemas                       |
| **Multiple values**      | 🟡     | Supported through custom implementation |
| **Modifiers**            | ⏳     | :exact, :missing, :contains, etc.       |
| **Prefixes**             | ⏳     | gt, lt, ge, le, sa, eb, ap              |

### Advanced Search

| Feature                  | Status | Notes                              |
| ------------------------ | ------ | ---------------------------------- |
| **Chained parameters**   | ⏳     | patient.name, subject:Patient.name |
| **Reverse chaining**     | ⏳     | \_has parameter                    |
| **Composite parameters** | ⏳     | Multiple parameter components      |
| **\_include**            | 🟡     | Basic support, needs expansion     |
| **\_revinclude**         | ⏳     | Reverse include functionality      |

### Search Controls

| Feature        | Status | Notes                                   |
| -------------- | ------ | --------------------------------------- |
| **\_count**    | ✅     | Pagination support                      |
| **\_offset**   | ✅     | Offset-based pagination                 |
| **\_sort**     | 🟡     | Basic sorting, limited modifier support |
| **\_elements** | ⏳     | Field selection                         |
| **\_summary**  | ⏳     | Summary views (text, data, count)       |
| **\_total**    | ⏳     | Total count estimation modes            |

## Content Types and Formats

### Response Formats

| Format   | Status | Notes                                   |
| -------- | ------ | --------------------------------------- |
| **JSON** | ✅     | Full support                            |
| **XML**  | 🟡     | Available via `fhir` package conversion |
| **RDF**  | ❌     | Not planned                             |

### Request/Response Features

| Feature                | Status | Notes                        |
| ---------------------- | ------ | ---------------------------- |
| **\_format parameter** | 🟡     | Limited support for JSON/XML |
| **\_pretty parameter** | ⏳     | Pretty-print JSON responses  |
| **Accept header**      | 🟡     | Basic content negotiation    |
| **Compression**        | ✅     | gzip/deflate support         |

## Versioning and History

| Feature                  | Status | Notes                              |
| ------------------------ | ------ | ---------------------------------- |
| **Resource versioning**  | ⏳     | Version tracking                   |
| **History interactions** | ⏳     | Instance, type, and system history |
| **Since parameter**      | ⏳     | History since timestamp            |
| **At parameter**         | ⏳     | History at specific time           |

## Conditional Operations

| Feature                | Status | Notes                |
| ---------------------- | ------ | -------------------- |
| **Conditional read**   | 🟡     | Basic ETag support   |
| **Conditional create** | ⏳     | If-None-Exist header |
| **Conditional update** | ⏳     | If-Match header      |
| **Conditional delete** | ⏳     | Conditional deletion |

## Authentication and Security

| Feature                    | Status | Notes                      |
| -------------------------- | ------ | -------------------------- |
| **Custom auth middleware** | ✅     | Via context system         |
| **Bearer tokens**          | ✅     | Via context implementation |
| **OAuth 2.0**              | 🟡     | Via external middleware    |
| **SMART on FHIR**          | ⏳     | Planned integration        |
| **Audit logging**          | 🟡     | Via custom context logging |

## Validation

### Request Validation

| Feature                    | Status | Notes                          |
| -------------------------- | ------ | ------------------------------ |
| **Parameter validation**   | ✅     | Zod schema validation          |
| **Resource validation**    | 🟡     | Basic structure validation     |
| **Profile validation**     | ⏳     | Against FHIR profiles          |
| **Terminology validation** | ⏳     | ValueSet/CodeSystem validation |

### Response Validation

| Feature                | Status | Notes                       |
| ---------------------- | ------ | --------------------------- |
| **Schema compliance**  | ✅     | TypeScript type checking    |
| **Profile compliance** | ⏳     | Profile-specific validation |

## Bundle Support

| Feature                 | Status | Notes                 |
| ----------------------- | ------ | --------------------- |
| **Search bundles**      | ✅     | searchset bundles     |
| **Transaction bundles** | ⏳     | Atomic operations     |
| **Batch bundles**       | ⏳     | Non-atomic operations |
| **Collection bundles**  | ⏳     | Document bundles      |
| **History bundles**     | ⏳     | History responses     |

## Error Handling

| Feature               | Status | Notes                           |
| --------------------- | ------ | ------------------------------- |
| **OperationOutcome**  | ✅     | Standard error responses        |
| **HTTP status codes** | ✅     | Proper status code mapping      |
| **Error details**     | ✅     | Detailed error information      |
| **Multiple issues**   | ✅     | Multiple errors in one response |
| **Severity levels**   | ✅     | error, warning, information     |

## Resource Types

### Administrative Resources

| Resource              | Status | Notes                     |
| --------------------- | ------ | ------------------------- |
| **Patient**           | ✅     | Full support via examples |
| **Practitioner**      | ✅     | Builder pattern support   |
| **Organization**      | ✅     | Builder pattern support   |
| **Location**          | ✅     | Builder pattern support   |
| **HealthcareService** | ✅     | Builder pattern support   |

### Clinical Resources

| Resource               | Status | Notes                   |
| ---------------------- | ------ | ----------------------- |
| **Observation**        | ✅     | Builder pattern support |
| **Condition**          | ✅     | Builder pattern support |
| **Procedure**          | ✅     | Builder pattern support |
| **DiagnosticReport**   | ✅     | Builder pattern support |
| **Encounter**          | ✅     | Builder pattern support |
| **AllergyIntolerance** | ✅     | Builder pattern support |

### Medication Resources

| Resource                | Status | Notes                   |
| ----------------------- | ------ | ----------------------- |
| **Medication**          | ✅     | Builder pattern support |
| **MedicationRequest**   | ✅     | Builder pattern support |
| **MedicationStatement** | ✅     | Builder pattern support |
| **MedicationDispense**  | ✅     | Builder pattern support |

_Note: All FHIR R4 resource types are supported through the generic builder pattern._

## Deployment Support

### Platforms

| Platform       | Status | Notes                  |
| -------------- | ------ | ---------------------- |
| **Node.js**    | ✅     | Native support         |
| **Express.js** | ✅     | Middleware integration |
| **AWS Lambda** | ✅     | Serverless deployment  |
| **Vercel**     | ✅     | Edge functions         |
| **Docker**     | ✅     | Container deployment   |
| **Kubernetes** | ✅     | Orchestration support  |

### Databases

| Database       | Status | Notes                      |
| -------------- | ------ | -------------------------- |
| **PostgreSQL** | ✅     | Recommended for production |
| **MySQL**      | ✅     | Full support               |
| **SQLite**     | ✅     | Development and testing    |
| **MongoDB**    | ✅     | NoSQL support              |
| **DynamoDB**   | 🟡     | Via custom adapters        |

### ORMs/Query Builders

| Tool          | Status | Notes                        |
| ------------- | ------ | ---------------------------- |
| **Prisma**    | ✅     | Excellent TypeScript support |
| **TypeORM**   | ✅     | Decorator-based entities     |
| **Sequelize** | ✅     | Traditional ORM              |
| **Knex.js**   | ✅     | Query builder                |
| **Mongoose**  | ✅     | MongoDB ODM                  |

## Performance Features

| Feature                | Status | Notes                          |
| ---------------------- | ------ | ------------------------------ |
| **Connection pooling** | ✅     | Database connection pools      |
| **Response caching**   | ✅     | Via context implementation     |
| **Compression**        | ✅     | gzip/deflate compression       |
| **Rate limiting**      | 🟡     | Via external middleware        |
| **Circuit breakers**   | 🟡     | Custom implementation patterns |

## Development Features

| Feature               | Status | Notes                          |
| --------------------- | ------ | ------------------------------ |
| **TypeScript**        | ✅     | First-class TypeScript support |
| **Type safety**       | ✅     | Compile-time type checking     |
| **IntelliSense**      | ✅     | IDE autocompletion             |
| **Hot reload**        | ✅     | Development experience         |
| **Testing utilities** | 🟡     | Basic testing patterns         |

## Limitations

### Current Limitations

1. **Search Modifiers**: Limited support for FHIR search modifiers
2. **Complex Queries**: Advanced search patterns need custom implementation
3. **Terminology Services**: No built-in terminology server integration
4. **Profile Validation**: FHIR profile validation not implemented
5. **Bulk Operations**: No bulk data export/import
6. **Subscriptions**: Real-time subscriptions not supported

### Performance Considerations

1. **Large Result Sets**: No streaming support for very large responses
2. **Complex Joins**: Database joins must be optimized manually
3. **Memory Usage**: Large searches can consume significant memory
4. **Concurrent Requests**: Connection pool sizing important for performance

### Planned Improvements

#### Near Term (Next 3-6 months)

- ✅ **Update operations** - PUT and PATCH support
- ✅ **Create operations** - POST support for new resources
- ✅ **Delete operations** - DELETE support
- ✅ **Search modifiers** - :exact, :missing, :contains
- ✅ **Conditional operations** - If-Match, If-None-Exist headers

#### Medium Term (6-12 months)

- ✅ **History operations** - Resource versioning and history
- ✅ **Transaction bundles** - Atomic multi-resource operations
- ✅ **Advanced search** - Chained parameters, \_include expansion
- ✅ **Terminology integration** - ValueSet/CodeSystem validation
- ✅ **Profile validation** - FHIR profile compliance

#### Long Term (12+ months)

- ✅ **Subscriptions** - Real-time notifications
- ✅ **Bulk operations** - Large-scale data operations
- ✅ **GraphQL integration** - Alternative query interface
- ✅ **CDS Hooks** - Clinical decision support
- ✅ **SMART on FHIR** - Complete SMART integration

## Migration Path

### Version Compatibility

The package follows semantic versioning:

- **Major versions** (1.x → 2.x): Breaking changes
- **Minor versions** (1.1 → 1.2): New features, backward compatible
- **Patch versions** (1.1.1 → 1.1.2): Bug fixes

### Upgrade Strategy

1. **Review changelog** for breaking changes
2. **Update dependencies** to latest versions
3. **Run tests** to identify compatibility issues
4. **Update code** for any breaking changes
5. **Test thoroughly** before deploying

## Contributing

We welcome contributions to expand feature support:

1. **Check roadmap** in GitHub issues
2. **Discuss approach** before implementing
3. **Follow TypeScript patterns** established in codebase
4. **Add tests** for new features
5. **Update documentation** including this feature matrix

## Support Matrix

### Node.js Versions

| Version     | Status | Notes           |
| ----------- | ------ | --------------- |
| **Node 18** | ✅     | Recommended LTS |
| **Node 20** | ✅     | Current LTS     |
| **Node 22** | ✅     | Latest stable   |
| **Node 16** | ⚠️     | End of life     |

### Express Versions

| Version       | Status | Notes          |
| ------------- | ------ | -------------- |
| **Express 4** | ✅     | Stable support |
| **Express 5** | ✅     | Latest version |

### TypeScript Versions

| Version  | Status | Notes            |
| -------- | ------ | ---------------- |
| **4.5+** | ✅     | Minimum required |
| **5.0+** | ✅     | Recommended      |

For the most up-to-date feature status, check the [GitHub repository](https://github.com/SolaraHealthAU/fhir) and recent releases.
