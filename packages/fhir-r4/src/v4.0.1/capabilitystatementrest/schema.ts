import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createCapabilityStatementSecuritySchema } from "../capabilitystatementsecurity/schema";
import { createCapabilityStatementResourceSchema } from "../capabilitystatementresource/schema";
import { createCapabilityStatementInteraction1Schema } from "../capabilitystatementinteraction1/schema";
import { createCapabilityStatementSearchParamSchema } from "../capabilitystatementsearchparam/schema";
import { createCapabilityStatementOperationSchema } from "../capabilitystatementoperation/schema";

/* Generated from FHIR JSON Schema */

export function createCapabilityStatementRestSchema() {
  return getCachedSchema("CapabilityStatementRest", () => {
    const baseSchema: z.ZodType<types.CapabilityStatementRest> = z.strictObject(
      {
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        mode: z.enum(["client", "server"]),
        _mode: z.lazy(() => createElementSchema()).optional(),
        documentation: primitives.getMarkdownSchema().optional(),
        _documentation: z.lazy(() => createElementSchema()).optional(),
        security: createCapabilityStatementSecuritySchema().optional(),
        resource: z.array(createCapabilityStatementResourceSchema()).optional(),
        interaction: z
          .array(createCapabilityStatementInteraction1Schema())
          .optional(),
        searchParam: z
          .array(createCapabilityStatementSearchParamSchema())
          .optional(),
        operation: z
          .array(createCapabilityStatementOperationSchema())
          .optional(),
        compartment: z.array(primitives.getCanonicalSchema()).optional(),
      },
    );

    return baseSchema;
  });
}
