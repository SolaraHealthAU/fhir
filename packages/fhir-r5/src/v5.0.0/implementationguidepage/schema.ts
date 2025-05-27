import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createImplementationGuidePageSchema() {
  const baseSchema: z.ZodType<types.ImplementationGuidePage> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    sourceUrl: z.string().optional(),
    _sourceUrl: z.lazy(() => createElementSchema()).optional(),
    sourceString: z.string().optional(),
    _sourceString: z.lazy(() => createElementSchema()).optional(),
    sourceMarkdown: z.string().optional(),
    _sourceMarkdown: z.lazy(() => createElementSchema()).optional(),
    name: primitives.createUrlSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    title: primitives.createStringSchema().optional(),
    _title: z.lazy(() => createElementSchema()).optional(),
    generation: primitives.createCodeSchema().optional(),
    _generation: z.lazy(() => createElementSchema()).optional(),
    page: z
      .array(z.lazy(() => createImplementationGuidePageSchema()))
      .optional(),
  });

  return baseSchema;
}
