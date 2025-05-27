import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("MedicationRequest", () => {
    const baseSchema: z.ZodType<types.MedicationRequest> = z.strictObject({
      resourceType: z.literal("MedicationRequest"),
      id: primitives.getIdSchema().optional(),
      meta: createMetaSchema().optional(),
      implicitRules: primitives.getUriSchema().optional(),
      _implicitRules: z.lazy(() => createElementSchema()).optional(),
      language: primitives.getCodeSchema().optional(),
      _language: z.lazy(() => createElementSchema()).optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
      status: primitives.getCodeSchema(),
      _status: z.lazy(() => createElementSchema()).optional(),
      statusReason: createCodeableConceptSchema().optional(),
      intent: primitives.getCodeSchema(),
      _intent: z.lazy(() => createElementSchema()).optional(),
      category: z.array(createCodeableConceptSchema()).optional(),
      priority: primitives.getCodeSchema().optional(),
      _priority: z.lazy(() => createElementSchema()).optional(),
      doNotPerform: primitives.getBooleanSchema().optional(),
      _doNotPerform: z.lazy(() => createElementSchema()).optional(),
      reportedBoolean: z.boolean().optional(),
      _reportedBoolean: z.lazy(() => createElementSchema()).optional(),
      reportedReference: createReferenceSchema().optional(),
      medicationCodeableConcept: createCodeableConceptSchema().optional(),
      medicationReference: createReferenceSchema().optional(),
      subject: createReferenceSchema(),
      encounter: createReferenceSchema().optional(),
      supportingInformation: z.array(createReferenceSchema()).optional(),
      authoredOn: primitives.getDateTimeSchema().optional(),
      _authoredOn: z.lazy(() => createElementSchema()).optional(),
      requester: createReferenceSchema().optional(),
      performer: createReferenceSchema().optional(),
      performerType: createCodeableConceptSchema().optional(),
      recorder: createReferenceSchema().optional(),
      reasonCode: z.array(createCodeableConceptSchema()).optional(),
      reasonReference: z.array(createReferenceSchema()).optional(),
      instantiatesCanonical: z
        .array(primitives.getCanonicalSchema())
        .optional(),
      _instantiatesCanonical: z
        .array(z.lazy(() => createElementSchema()))
        .optional(),
      instantiatesUri: z.array(primitives.getUriSchema()).optional(),
      _instantiatesUri: z.array(z.lazy(() => createElementSchema())).optional(),
      basedOn: z.array(createReferenceSchema()).optional(),
      groupIdentifier: z.lazy(() => createIdentifierSchema()).optional(),
      courseOfTherapyType: createCodeableConceptSchema().optional(),
      insurance: z.array(createReferenceSchema()).optional(),
      note: z.array(createAnnotationSchema()).optional(),
      dosageInstruction: z.array(createDosageSchema()).optional(),
      dispenseRequest:
        createMedicationRequestDispenseRequestSchema().optional(),
      substitution: createMedicationRequestSubstitutionSchema().optional(),
      priorPrescription: createReferenceSchema().optional(),
      detectedIssue: z.array(createReferenceSchema()).optional(),
      eventHistory: z.array(createReferenceSchema()).optional(),
    });

    return baseSchema;
  });
}
