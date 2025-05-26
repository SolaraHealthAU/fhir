import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
  createAnnotationSchema,
  createDosageSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";

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
    basedOn: z.array(z.lazy(() => createReferenceSchema())).optional(),
    partOf: z.array(z.lazy(() => createReferenceSchema())).optional(),
    status: primitives.createCodeSchema(),
    _status: z.lazy(() => createElementSchema()).optional(),
    statusReason: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    category: z.lazy(() => createCodeableConceptSchema()).optional(),
    medicationCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    medicationReference: z.lazy(() => createReferenceSchema()).optional(),
    subject: z.lazy(() => createReferenceSchema()),
    context: z.lazy(() => createReferenceSchema()).optional(),
    effectiveDateTime: z.string().optional(),
    _effectiveDateTime: z.lazy(() => createElementSchema()).optional(),
    effectivePeriod: z.lazy(() => createPeriodSchema()).optional(),
    dateAsserted: primitives.createDateTimeSchema().optional(),
    _dateAsserted: z.lazy(() => createElementSchema()).optional(),
    informationSource: z.lazy(() => createReferenceSchema()).optional(),
    derivedFrom: z.array(z.lazy(() => createReferenceSchema())).optional(),
    reasonCode: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    reasonReference: z.array(z.lazy(() => createReferenceSchema())).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    dosage: z.array(z.lazy(() => createDosageSchema())).optional(),
  });

  return baseSchema;
}
