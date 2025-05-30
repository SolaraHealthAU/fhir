# Adding Application/XML Support

By default, the FHIR REST server supports `application/json` format for all FHIR resources. To enable `application/xml` support, you need to provide a serialization implementation that can convert FHIR objects to XML format.

## Using the `fhir` Package (Recommended)

The easiest way to add XML support is by using the third-party [`fhir`](https://www.npmjs.com/package/fhir) package, which provides robust serialization support for FHIR objects.

### Installation

```bash
npm install fhir
```

### Basic Implementation

```typescript
import express from 'express';
import { Fhir } from 'fhir';
import { RestServer, builder } from '@solarahealth/fhir-r4-server';
import type { Patient } from '@solarahealth/fhir-r4';

const app = express();
app.use(express.json());

// Initialize the FHIR serializer
const fhir = new Fhir();

// Your resource handlers...
const patientResource = builder
  .defineResource('Patient')
  .read((builder) =>
    builder.id(z.string()).retrieveWith(async (id) => {
      // Your implementation...
    }),
  )
  .build();

// Initialize the FHIR server with XML support
const fhirServer = RestServer.init({
  fhir, // Pass the FHIR serializer instance
  capabilities: {
    resourceType: 'CapabilityStatement',
    status: 'active',
    date: new Date().toISOString(),
    kind: 'instance',
    fhirVersion: '4.0.1',
    format: ['json', 'xml'], // Declare support for both formats
    rest: [
      {
        mode: 'server',
        resource: [patientResource],
      },
    ],
  },
});

app.use('/fhir', RestServer.expressMiddleware(fhirServer, { context: createContext }));
```

### Content Negotiation

Once XML support is configured, clients can request XML responses using:

1. **Accept Header**: `Accept: application/xml`
2. **Query Parameter**: `_format=xml` or `_format=application/xml`

Example requests:

```bash
# Using Accept header
curl -H "Accept: application/xml" http://localhost:3000/fhir/Patient/123

# Using query parameter
curl http://localhost:3000/fhir/Patient/123?_format=xml
```

## Custom XML Serialization Implementation

If you prefer to use a different XML serialization library or implement your own, you can provide a custom implementation that matches the required interface:

```typescript
interface FhirSerializer {
  objToXml: (obj: object) => string;
}
```

### Example with Custom Implementation

```typescript
import * as xmlbuilder from 'xmlbuilder';

// Custom XML serializer implementation
const customFhirSerializer = {
  objToXml: (obj: object): string => {
    // Your custom XML serialization logic
    return xmlbuilder.create(obj, { encoding: 'UTF-8' }).end({ pretty: true });
  },
};

// Use the custom implementation
const fhirServer = RestServer.init({
  fhir: customFhirSerializer,
  capabilities: {
    // ... your capability statement
  },
});
```

## Error Handling

If XML serialization fails, the server will throw a `ResourceInvalid` error. This typically happens when:

- The FHIR object contains invalid data that cannot be serialized to XML
- The serialization library encounters an unexpected error
- Required XML namespace declarations are missing

## Performance Considerations

- XML serialization is generally slower than JSON serialization
- Consider caching serialized XML for frequently accessed resources
- Monitor memory usage, especially for large Bundle resources

## Testing XML Support

You can test XML support by making requests with different Accept headers and verifying the response format:

```typescript
import request from 'supertest';

describe('XML Support', () => {
  it('should return XML when Accept header is application/xml', async () => {
    const response = await request(app)
      .get('/fhir/Patient/123')
      .set('Accept', 'application/xml')
      .expect(200);

    expect(response.headers['content-type']).toContain('application/xml');
    expect(response.text).toContain('<?xml');
  });

  it('should return JSON by default', async () => {
    const response = await request(app).get('/fhir/Patient/123').expect(200);

    expect(response.headers['content-type']).toContain('application/json');
  });
});
```
