import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createImmunizationEducationSchema() {
  const baseSchema: z.ZodType<types.ImmunizationEducation> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    documentType: primitives.createStringSchema().optional(),
    _documentType: z.lazy(() => createElementSchema()).optional(),
    reference: primitives.createUriSchema().optional(),
    _reference: z.lazy(() => createElementSchema()).optional(),
    publicationDate: primitives.createDateTimeSchema().optional(),
    _publicationDate: z.lazy(() => createElementSchema()).optional(),
    presentationDate: primitives.createDateTimeSchema().optional(),
    _presentationDate: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
