import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createAnnotationSchema,
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
    status: primitives.createCodeSchema(),
    _status: z.lazy(() => createElementSchema()).optional(),
    statusReason: z.lazy(() => createCodeableConceptSchema()).optional(),
    intent: primitives.createCodeSchema(),
    _intent: z.lazy(() => createElementSchema()).optional(),
    category: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    priority: primitives.createCodeSchema().optional(),
    _priority: z.lazy(() => createElementSchema()).optional(),
    doNotPerform: primitives.createBooleanSchema().optional(),
    _doNotPerform: z.lazy(() => createElementSchema()).optional(),
    reportedBoolean: z.boolean().optional(),
    _reportedBoolean: z.lazy(() => createElementSchema()).optional(),
    reportedReference: z.lazy(() => createReferenceSchema()).optional(),
    medicationCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    medicationReference: z.lazy(() => createReferenceSchema()).optional(),
    subject: z.lazy(() => createReferenceSchema()),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    supportingInformation: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
    authoredOn: primitives.createDateTimeSchema().optional(),
    _authoredOn: z.lazy(() => createElementSchema()).optional(),
    requester: z.lazy(() => createReferenceSchema()).optional(),
    performer: z.lazy(() => createReferenceSchema()).optional(),
    performerType: z.lazy(() => createCodeableConceptSchema()).optional(),
    recorder: z.lazy(() => createReferenceSchema()).optional(),
    reasonCode: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    reasonReference: z.array(z.lazy(() => createReferenceSchema())).optional(),
    instantiatesCanonical: z
      .array(primitives.createCanonicalSchema())
      .optional(),
    _instantiatesCanonical: z
      .array(z.lazy(() => createElementSchema()))
      .optional(),
    instantiatesUri: z.array(primitives.createUriSchema()).optional(),
    _instantiatesUri: z.array(z.lazy(() => createElementSchema())).optional(),
    basedOn: z.array(z.lazy(() => createReferenceSchema())).optional(),
    groupIdentifier: z.lazy(() => createIdentifierSchema()).optional(),
    courseOfTherapyType: z.lazy(() => createCodeableConceptSchema()).optional(),
    insurance: z.array(z.lazy(() => createReferenceSchema())).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    dosageInstruction: z.array(z.lazy(() => createDosageSchema())).optional(),
    dispenseRequest: z
      .lazy(() => createMedicationRequestDispenseRequestSchema())
      .optional(),
    substitution: z
      .lazy(() => createMedicationRequestSubstitutionSchema())
      .optional(),
    priorPrescription: z.lazy(() => createReferenceSchema()).optional(),
    detectedIssue: z.array(z.lazy(() => createReferenceSchema())).optional(),
    eventHistory: z.array(z.lazy(() => createReferenceSchema())).optional(),
  });

  return baseSchema;
}
