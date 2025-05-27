import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createImplementationGuideTemplateSchema() {
  const baseSchema: z.ZodType<types.ImplementationGuideTemplate> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    code: primitives.createCodeSchema().optional(),
    _code: z.lazy(() => createElementSchema()).optional(),
    source: primitives.createStringSchema().optional(),
    _source: z.lazy(() => createElementSchema()).optional(),
    scope: primitives.createStringSchema().optional(),
    _scope: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
