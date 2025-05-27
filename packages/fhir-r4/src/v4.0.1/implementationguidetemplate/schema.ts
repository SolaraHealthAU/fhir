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
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        code: primitives.getCodeSchema().optional(),
        _code: z.lazy(() => createElementSchema()).optional(),
        source: primitives.getStringSchema().optional(),
        _source: z.lazy(() => createElementSchema()).optional(),
        scope: primitives.getStringSchema().optional(),
        _scope: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
