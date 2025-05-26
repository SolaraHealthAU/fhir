import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createImplementationGuidePageSchema() {
  const baseSchema: z.ZodType<types.ImplementationGuidePage> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    nameUrl: z.string().optional(),
    _nameUrl: z.lazy(() => createElementSchema()).optional(),
    nameReference: z.lazy(() => createReferenceSchema()).optional(),
    title: primitives.createStringSchema().optional(),
    _title: z.lazy(() => createElementSchema()).optional(),
    generation: z.enum(["html", "markdown", "xml", "generated"]).optional(),
    _generation: z.lazy(() => createElementSchema()).optional(),
    page: z
      .array(z.lazy(() => createImplementationGuidePageSchema()))
      .optional(),
  });

  return baseSchema;
}
