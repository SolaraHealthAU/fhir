import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDataRequirementSortSchema() {
  return getCachedSchema("DataRequirementSort", () => {
    const baseSchema: z.ZodType<types.DataRequirementSort> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      path: primitives.getStringSchema(),
      _path: z.lazy(() => createElementSchema()).optional(),
      direction: z.enum(["ascending", "descending"]),
      _direction: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
