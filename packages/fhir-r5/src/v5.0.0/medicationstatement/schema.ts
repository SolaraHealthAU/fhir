import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createCodeableReferenceSchema,
  createPeriodSchema,
  createTimingSchema,
  createAnnotationSchema,
  createDosageSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createMedicationStatementAdherenceSchema } from "../medicationstatementadherence/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationStatementSchema() {
  const baseSchema: z.ZodType<types.MedicationStatement> = z.object({
    resourceType: z.literal("MedicationStatement"),
    id: primitives.createIdSchema().optional(),
    meta: z.lazy(() => createMetaSchema()).optional(),
    implicitRules: primitives.createUriSchema().optional(),
    _implicitRules: z.lazy(() => createElementSchema()).optional(),
    language: primitives.createCodeSchema().optional(),
    _language: z.lazy(() => createElementSchema()).optional(),
    text: z.lazy(() => createNarrativeSchema()).optional(),
    contained: z.array(z.lazy(() => createResourceListSchema())).optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    partOf: z.array(z.lazy(() => createReferenceSchema())).optional(),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    category: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    medication: z.lazy(() => createCodeableReferenceSchema()),
    subject: z.lazy(() => createReferenceSchema()),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    effectiveDateTime: z.string().optional(),
    _effectiveDateTime: z.lazy(() => createElementSchema()).optional(),
    effectivePeriod: z.lazy(() => createPeriodSchema()).optional(),
    effectiveTiming: z.lazy(() => createTimingSchema()).optional(),
    dateAsserted: primitives.createDateTimeSchema().optional(),
    _dateAsserted: z.lazy(() => createElementSchema()).optional(),
    informationSource: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
    derivedFrom: z.array(z.lazy(() => createReferenceSchema())).optional(),
    reason: z.array(z.lazy(() => createCodeableReferenceSchema())).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    relatedClinicalInformation: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
    renderedDosageInstruction: primitives.createMarkdownSchema().optional(),
    _renderedDosageInstruction: z.lazy(() => createElementSchema()).optional(),
    dosage: z.array(z.lazy(() => createDosageSchema())).optional(),
    adherence: z
      .lazy(() => createMedicationStatementAdherenceSchema())
      .optional(),
  });

  return baseSchema;
}
