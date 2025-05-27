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
  createPeriodSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createMedicationAdministrationPerformerSchema } from "../medicationadministrationperformer/schema";
import { createMedicationAdministrationDosageSchema } from "../medicationadministrationdosage/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationAdministrationSchema() {
  return getCachedSchema("MedicationAdministration", () => {
    const baseSchema: z.ZodType<types.MedicationAdministration> =
      z.strictObject({
        resourceType: z.literal("MedicationAdministration"),
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
        instantiates: z.array(primitives.getUriSchema()).optional(),
        _instantiates: z.array(z.lazy(() => createElementSchema())).optional(),
        partOf: z.array(createReferenceSchema()).optional(),
        status: primitives.getCodeSchema(),
        _status: z.lazy(() => createElementSchema()).optional(),
        statusReason: z.array(createCodeableConceptSchema()).optional(),
        category: createCodeableConceptSchema().optional(),
        medicationCodeableConcept: createCodeableConceptSchema().optional(),
        medicationReference: createReferenceSchema().optional(),
        subject: createReferenceSchema(),
        context: createReferenceSchema().optional(),
        supportingInformation: z.array(createReferenceSchema()).optional(),
        effectiveDateTime: z.string().optional(),
        _effectiveDateTime: z.lazy(() => createElementSchema()).optional(),
        effectivePeriod: createPeriodSchema().optional(),
        performer: z
          .array(createMedicationAdministrationPerformerSchema())
          .optional(),
        reasonCode: z.array(createCodeableConceptSchema()).optional(),
        reasonReference: z.array(createReferenceSchema()).optional(),
        request: createReferenceSchema().optional(),
        device: z.array(createReferenceSchema()).optional(),
        note: z.array(createAnnotationSchema()).optional(),
        dosage: createMedicationAdministrationDosageSchema().optional(),
        eventHistory: z.array(createReferenceSchema()).optional(),
      });

    return baseSchema;
  });
}
