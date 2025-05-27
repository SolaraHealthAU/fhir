import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createMetaSchema, createElementSchema } from "../core/schema";
import { createParametersParameterSchema } from "../parametersparameter/schema";

/* Generated from FHIR JSON Schema */

export function createParametersSchema() {
  return getCachedSchema("Parameters", () => {
    const baseSchema: z.ZodType<types.Parameters> = z.strictObject({
      resourceType: z.literal("Parameters"),
      id: primitives.getIdSchema().optional(),
      meta: createMetaSchema().optional(),
      implicitRules: primitives.getUriSchema().optional(),
      _implicitRules: z.lazy(() => createElementSchema()).optional(),
      language: primitives.getCodeSchema().optional(),
      _language: z.lazy(() => createElementSchema()).optional(),
      parameter: z.array(createParametersParameterSchema()).optional(),
    });

    return baseSchema;
  });
}
