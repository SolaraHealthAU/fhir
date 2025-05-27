import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createCapabilityStatementSecuritySchema } from "../capabilitystatementsecurity/schema";
import { createCapabilityStatementResourceSchema } from "../capabilitystatementresource/schema";
import { createCapabilityStatementInteraction1Schema } from "../capabilitystatementinteraction1/schema";
import { createCapabilityStatementSearchParamSchema } from "../capabilitystatementsearchparam/schema";
import { createCapabilityStatementOperationSchema } from "../capabilitystatementoperation/schema";

/* Generated from FHIR JSON Schema */

export function createCapabilityStatementRestSchema() {
  const baseSchema: z.ZodType<types.CapabilityStatementRest> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    mode: primitives.createCodeSchema().optional(),
    _mode: z.lazy(() => createElementSchema()).optional(),
    documentation: primitives.createMarkdownSchema().optional(),
    _documentation: z.lazy(() => createElementSchema()).optional(),
    security: z
      .lazy(() => createCapabilityStatementSecuritySchema())
      .optional(),
    resource: z
      .array(z.lazy(() => createCapabilityStatementResourceSchema()))
      .optional(),
    interaction: z
      .array(z.lazy(() => createCapabilityStatementInteraction1Schema()))
      .optional(),
    searchParam: z
      .array(z.lazy(() => createCapabilityStatementSearchParamSchema()))
      .optional(),
    operation: z
      .array(z.lazy(() => createCapabilityStatementOperationSchema()))
      .optional(),
    compartment: z.array(primitives.createCanonicalSchema()).optional(),
  });

  return baseSchema;
}
