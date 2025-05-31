import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createStructureDefinitionMappingSchema() {
  return getCachedSchema("StructureDefinitionMapping", () => {
    const baseSchema: z.ZodType<types.StructureDefinitionMapping> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        identity: primitives.getIdSchema(),
        _identity: createElementSchema().optional(),
        uri: primitives.getUriSchema().optional(),
        _uri: createElementSchema().optional(),
        name: primitives.getStringSchema().optional(),
        _name: createElementSchema().optional(),
        comment: primitives.getStringSchema().optional(),
        _comment: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
