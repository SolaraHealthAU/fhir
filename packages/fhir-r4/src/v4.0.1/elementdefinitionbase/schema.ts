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
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      path: primitives.getStringSchema(),
      _path: createElementSchema().optional(),
      min: primitives.getUnsignedIntSchema(),
      _min: createElementSchema().optional(),
      max: primitives.getStringSchema(),
      _max: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
