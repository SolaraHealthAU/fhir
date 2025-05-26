import type { CapabilityStatement } from '@solarahealth/fhir-r4';

export async function generate(capabilityStatement: CapabilityStatement) {
  let output = `
import { z } from 'zod';
import * as rest from '@healiocloud/fhir-rest-server-core';
import type { CapabilityStatementSearchParam } from '@solarahealth/fhir-r4';
`;

  for (const rest of capabilityStatement.rest || []) {
    for (const resource of rest.resource || []) {
      const searchParams = resource.searchParam?.filter((type) => type.name != null);
      const typeName = `${resource.type}SearchParams`;

      output += `
const definition${typeName} = ${JSON.stringify(
        searchParams?.map((param) => ({
          name: param.name,
          type: param.type ?? 'special',
        })),
      )} as const satisfies ReadonlyArray<CapabilityStatementSearchParam>;
export function create${typeName}Schema(): z.ZodType<${typeName}> {
  return rest.FhirR4.codecs.createSearchParametersSchema(definition${typeName});
};

export type ${typeName} = rest.FhirR4.codecs.ParamsToShape<typeof definition${typeName}>;
`;
    }
  }

  return output;
}
