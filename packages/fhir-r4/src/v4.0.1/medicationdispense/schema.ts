import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("MedicationDispense", () => {
    const baseSchema: z.ZodType<types.MedicationDispense> = z.strictObject({
      resourceType: z.literal("MedicationDispense"),
      id: primitives.getIdSchema().optional(),
      meta: createMetaSchema().optional(),
      implicitRules: primitives.getUriSchema().optional(),
      _implicitRules: createElementSchema().optional(),
      language: primitives.getCodeSchema().optional(),
      _language: createElementSchema().optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      identifier: z.array(createIdentifierSchema()).optional(),
      partOf: z.array(createReferenceSchema()).optional(),
      status: primitives.getCodeSchema(),
      _status: createElementSchema().optional(),
      statusReasonCodeableConcept: createCodeableConceptSchema().optional(),
      statusReasonReference: createReferenceSchema().optional(),
      category: createCodeableConceptSchema().optional(),
      medicationCodeableConcept: createCodeableConceptSchema().optional(),
      medicationReference: createReferenceSchema().optional(),
      subject: createReferenceSchema().optional(),
      context: createReferenceSchema().optional(),
      supportingInformation: z.array(createReferenceSchema()).optional(),
      performer: z.array(createMedicationDispensePerformerSchema()).optional(),
      location: createReferenceSchema().optional(),
      authorizingPrescription: z.array(createReferenceSchema()).optional(),
      type: createCodeableConceptSchema().optional(),
      quantity: createQuantitySchema().optional(),
      daysSupply: createQuantitySchema().optional(),
      whenPrepared: primitives.getDateTimeSchema().optional(),
      _whenPrepared: createElementSchema().optional(),
      whenHandedOver: primitives.getDateTimeSchema().optional(),
      _whenHandedOver: createElementSchema().optional(),
      destination: createReferenceSchema().optional(),
      receiver: z.array(createReferenceSchema()).optional(),
      note: z.array(createAnnotationSchema()).optional(),
      dosageInstruction: z.array(createDosageSchema()).optional(),
      substitution: createMedicationDispenseSubstitutionSchema().optional(),
      detectedIssue: z.array(createReferenceSchema()).optional(),
      eventHistory: z.array(createReferenceSchema()).optional(),
    });

    return baseSchema;
  });
}
