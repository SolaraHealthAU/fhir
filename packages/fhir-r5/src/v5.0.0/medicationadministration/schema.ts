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
    basedOn: z.array(z.lazy(() => createReferenceSchema())).optional(),
    partOf: z.array(z.lazy(() => createReferenceSchema())).optional(),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    statusReason: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    category: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    medication: z.lazy(() => createCodeableReferenceSchema()),
    subject: z.lazy(() => createReferenceSchema()),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    supportingInformation: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
    occurenceDateTime: z.string().optional(),
    _occurenceDateTime: z.lazy(() => createElementSchema()).optional(),
    occurencePeriod: z.lazy(() => createPeriodSchema()).optional(),
    occurenceTiming: z.lazy(() => createTimingSchema()).optional(),
    recorded: primitives.createDateTimeSchema().optional(),
    _recorded: z.lazy(() => createElementSchema()).optional(),
    isSubPotent: primitives.createBooleanSchema().optional(),
    _isSubPotent: z.lazy(() => createElementSchema()).optional(),
    subPotentReason: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    performer: z
      .array(z.lazy(() => createMedicationAdministrationPerformerSchema()))
      .optional(),
    reason: z.array(z.lazy(() => createCodeableReferenceSchema())).optional(),
    request: z.lazy(() => createReferenceSchema()).optional(),
    device: z.array(z.lazy(() => createCodeableReferenceSchema())).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    dosage: z
      .lazy(() => createMedicationAdministrationDosageSchema())
      .optional(),
    eventHistory: z.array(z.lazy(() => createReferenceSchema())).optional(),
  });

  return baseSchema;
}
