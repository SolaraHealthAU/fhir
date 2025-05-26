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
  createQuantitySchema,
  createAnnotationSchema,
  createDosageSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createMedicationDispensePerformerSchema } from "../medicationdispenseperformer/schema";
import { createMedicationDispenseSubstitutionSchema } from "../medicationdispensesubstitution/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationDispenseSchema() {
  const baseSchema: z.ZodType<types.MedicationDispense> = z.object({
    resourceType: z.literal("MedicationDispense"),
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
    status: primitives.createCodeSchema(),
    _status: z.lazy(() => createElementSchema()).optional(),
    statusReasonCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    statusReasonReference: z.lazy(() => createReferenceSchema()).optional(),
    category: z.lazy(() => createCodeableConceptSchema()).optional(),
    medicationCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    medicationReference: z.lazy(() => createReferenceSchema()).optional(),
    subject: z.lazy(() => createReferenceSchema()).optional(),
    context: z.lazy(() => createReferenceSchema()).optional(),
    supportingInformation: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
    performer: z
      .array(z.lazy(() => createMedicationDispensePerformerSchema()))
      .optional(),
    location: z.lazy(() => createReferenceSchema()).optional(),
    authorizingPrescription: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    quantity: z.lazy(() => createQuantitySchema()).optional(),
    daysSupply: z.lazy(() => createQuantitySchema()).optional(),
    whenPrepared: primitives.createDateTimeSchema().optional(),
    _whenPrepared: z.lazy(() => createElementSchema()).optional(),
    whenHandedOver: primitives.createDateTimeSchema().optional(),
    _whenHandedOver: z.lazy(() => createElementSchema()).optional(),
    destination: z.lazy(() => createReferenceSchema()).optional(),
    receiver: z.array(z.lazy(() => createReferenceSchema())).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    dosageInstruction: z.array(z.lazy(() => createDosageSchema())).optional(),
    substitution: z
      .lazy(() => createMedicationDispenseSubstitutionSchema())
      .optional(),
    detectedIssue: z.array(z.lazy(() => createReferenceSchema())).optional(),
    eventHistory: z.array(z.lazy(() => createReferenceSchema())).optional(),
  });

  return baseSchema;
}
