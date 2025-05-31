import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createImplementationGuideTemplateSchema() {
  return getCachedSchema("ImplementationGuideTemplate", () => {
    const baseSchema: z.ZodType<types.ImplementationGuideTemplate> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        code: primitives.getCodeSchema().optional(),
        _code: createElementSchema().optional(),
        source: primitives.getStringSchema().optional(),
        _source: createElementSchema().optional(),
        scope: primitives.getStringSchema().optional(),
        _scope: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
