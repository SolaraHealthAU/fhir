import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDocumentReferenceContextSchema() {
  const baseSchema: z.ZodType<types.DocumentReferenceContext> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    encounter: z.array(z.lazy(() => createReferenceSchema())).optional(),
    event: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    period: z.lazy(() => createPeriodSchema()).optional(),
    facilityType: z.lazy(() => createCodeableConceptSchema()).optional(),
    practiceSetting: z.lazy(() => createCodeableConceptSchema()).optional(),
    sourcePatientInfo: z.lazy(() => createReferenceSchema()).optional(),
    related: z.array(z.lazy(() => createReferenceSchema())).optional(),
  });

  return baseSchema;
}
