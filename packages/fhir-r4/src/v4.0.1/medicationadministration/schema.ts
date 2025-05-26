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
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createMedicationAdministrationPerformerSchema } from "../medicationadministrationperformer/schema";
import { createMedicationAdministrationDosageSchema } from "../medicationadministrationdosage/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationAdministrationSchema() {
  const baseSchema: z.ZodType<types.MedicationAdministration> = z.object({
    resourceType: z.literal("MedicationAdministration"),
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
    instantiates: z.array(primitives.createUriSchema()).optional(),
    _instantiates: z.array(z.lazy(() => createElementSchema())).optional(),
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
    supportingInformation: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
    effectiveDateTime: z.string().optional(),
    _effectiveDateTime: z.lazy(() => createElementSchema()).optional(),
    effectivePeriod: z.lazy(() => createPeriodSchema()).optional(),
    performer: z
      .array(z.lazy(() => createMedicationAdministrationPerformerSchema()))
      .optional(),
    reasonCode: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    reasonReference: z.array(z.lazy(() => createReferenceSchema())).optional(),
    request: z.lazy(() => createReferenceSchema()).optional(),
    device: z.array(z.lazy(() => createReferenceSchema())).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    dosage: z
      .lazy(() => createMedicationAdministrationDosageSchema())
      .optional(),
    eventHistory: z.array(z.lazy(() => createReferenceSchema())).optional(),
  });

  return baseSchema;
}
