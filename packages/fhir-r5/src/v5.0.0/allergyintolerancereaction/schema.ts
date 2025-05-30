import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createCodeableReferenceSchema,
  createElementSchema,
  createAnnotationSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createAllergyIntoleranceReactionSchema() {
  const baseSchema: z.ZodType<types.AllergyIntoleranceReaction> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    substance: z.lazy(() => createCodeableConceptSchema()).optional(),
    manifestation: z.array(z.lazy(() => createCodeableReferenceSchema())),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    onset: primitives.createDateTimeSchema().optional(),
    _onset: z.lazy(() => createElementSchema()).optional(),
    severity: primitives.createCodeSchema().optional(),
    _severity: z.lazy(() => createElementSchema()).optional(),
    exposureRoute: z.lazy(() => createCodeableConceptSchema()).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
  });

  return baseSchema;
}
