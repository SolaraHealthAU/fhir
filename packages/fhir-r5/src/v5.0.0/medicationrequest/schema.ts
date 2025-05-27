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
  createAnnotationSchema,
  createPeriodSchema,
  createDosageSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createMedicationRequestDispenseRequestSchema } from "../medicationrequestdispenserequest/schema";
import { createMedicationRequestSubstitutionSchema } from "../medicationrequestsubstitution/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationRequestSchema() {
  const baseSchema: z.ZodType<types.MedicationRequest> = z.object({
    resourceType: z.literal("MedicationRequest"),
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
    priorPrescription: z.lazy(() => createReferenceSchema()).optional(),
    groupIdentifier: z.lazy(() => createIdentifierSchema()).optional(),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    statusReason: z.lazy(() => createCodeableConceptSchema()).optional(),
    statusChanged: primitives.createDateTimeSchema().optional(),
    _statusChanged: z.lazy(() => createElementSchema()).optional(),
    intent: primitives.createCodeSchema().optional(),
    _intent: z.lazy(() => createElementSchema()).optional(),
    category: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    priority: primitives.createCodeSchema().optional(),
    _priority: z.lazy(() => createElementSchema()).optional(),
    doNotPerform: primitives.createBooleanSchema().optional(),
    _doNotPerform: z.lazy(() => createElementSchema()).optional(),
    medication: z.lazy(() => createCodeableReferenceSchema()),
    subject: z.lazy(() => createReferenceSchema()),
    informationSource: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    supportingInformation: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
    authoredOn: primitives.createDateTimeSchema().optional(),
    _authoredOn: z.lazy(() => createElementSchema()).optional(),
    requester: z.lazy(() => createReferenceSchema()).optional(),
    reported: primitives.createBooleanSchema().optional(),
    _reported: z.lazy(() => createElementSchema()).optional(),
    performerType: z.lazy(() => createCodeableConceptSchema()).optional(),
    performer: z.array(z.lazy(() => createReferenceSchema())).optional(),
    device: z.array(z.lazy(() => createCodeableReferenceSchema())).optional(),
    recorder: z.lazy(() => createReferenceSchema()).optional(),
    reason: z.array(z.lazy(() => createCodeableReferenceSchema())).optional(),
    courseOfTherapyType: z.lazy(() => createCodeableConceptSchema()).optional(),
    insurance: z.array(z.lazy(() => createReferenceSchema())).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    renderedDosageInstruction: primitives.createMarkdownSchema().optional(),
    _renderedDosageInstruction: z.lazy(() => createElementSchema()).optional(),
    effectiveDosePeriod: z.lazy(() => createPeriodSchema()).optional(),
    dosageInstruction: z.array(z.lazy(() => createDosageSchema())).optional(),
    dispenseRequest: z
      .lazy(() => createMedicationRequestDispenseRequestSchema())
      .optional(),
    substitution: z
      .lazy(() => createMedicationRequestSubstitutionSchema())
      .optional(),
    eventHistory: z.array(z.lazy(() => createReferenceSchema())).optional(),
  });

  return baseSchema;
}
