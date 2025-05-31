import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createElementDefinitionMappingSchema() {
  return getCachedSchema("ElementDefinitionMapping", () => {
    const baseSchema: z.ZodType<types.ElementDefinitionMapping> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        identity: primitives.getIdSchema(),
        _identity: createElementSchema().optional(),
        language: primitives.getCodeSchema().optional(),
        _language: createElementSchema().optional(),
        map: primitives.getStringSchema(),
        _map: createElementSchema().optional(),
        comment: primitives.getStringSchema().optional(),
        _comment: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
