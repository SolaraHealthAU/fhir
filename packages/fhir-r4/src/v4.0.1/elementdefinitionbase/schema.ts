import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createElementDefinitionBaseSchema() {
  return getCachedSchema("ElementDefinitionBase", () => {
    const baseSchema: z.ZodType<types.ElementDefinitionBase> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      path: primitives.getStringSchema(),
      _path: z.lazy(() => createElementSchema()).optional(),
      min: primitives.getUnsignedIntSchema(),
      _min: z.lazy(() => createElementSchema()).optional(),
      max: primitives.getStringSchema(),
      _max: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
