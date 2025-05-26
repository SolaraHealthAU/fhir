import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createElementDefinitionTypeSchema() {
  const baseSchema: z.ZodType<types.ElementDefinitionType> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    code: primitives.createUriSchema(),
    _code: z.lazy(() => createElementSchema()).optional(),
    profile: z.array(primitives.createCanonicalSchema()).optional(),
    targetProfile: z.array(primitives.createCanonicalSchema()).optional(),
    aggregation: z.array(z.any()).optional(),
    _aggregation: z.array(z.lazy(() => createElementSchema())).optional(),
    versioning: z.enum(["either", "independent", "specific"]).optional(),
    _versioning: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
