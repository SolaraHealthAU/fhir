import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createElementDefinitionTypeSchema() {
  return getCachedSchema("ElementDefinitionType", () => {
    const baseSchema: z.ZodType<types.ElementDefinitionType> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      code: primitives.getUriSchema(),
      _code: createElementSchema().optional(),
      profile: z.array(primitives.getCanonicalSchema()).optional(),
      targetProfile: z.array(primitives.getCanonicalSchema()).optional(),
      aggregation: z.array(z.any()).optional(),
      _aggregation: z.array(createElementSchema()).optional(),
      versioning: z.enum(["either", "independent", "specific"]).optional(),
      _versioning: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
