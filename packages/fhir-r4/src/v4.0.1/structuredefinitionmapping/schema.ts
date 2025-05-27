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
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        identity: primitives.getIdSchema(),
        _identity: z.lazy(() => createElementSchema()).optional(),
        uri: primitives.getUriSchema().optional(),
        _uri: z.lazy(() => createElementSchema()).optional(),
        name: primitives.getStringSchema().optional(),
        _name: z.lazy(() => createElementSchema()).optional(),
        comment: primitives.getStringSchema().optional(),
        _comment: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
