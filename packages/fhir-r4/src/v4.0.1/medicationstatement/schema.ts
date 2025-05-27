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
  createDosageSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationStatementSchema() {
  return getCachedSchema("MedicationStatement", () => {
    const baseSchema: z.ZodType<types.MedicationStatement> = z.strictObject({
      resourceType: z.literal("MedicationStatement"),
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
      basedOn: z.array(createReferenceSchema()).optional(),
      partOf: z.array(createReferenceSchema()).optional(),
      status: primitives.getCodeSchema(),
      _status: z.lazy(() => createElementSchema()).optional(),
      statusReason: z.array(createCodeableConceptSchema()).optional(),
      category: createCodeableConceptSchema().optional(),
      medicationCodeableConcept: createCodeableConceptSchema().optional(),
      medicationReference: createReferenceSchema().optional(),
      subject: createReferenceSchema(),
      context: createReferenceSchema().optional(),
      effectiveDateTime: z.string().optional(),
      _effectiveDateTime: z.lazy(() => createElementSchema()).optional(),
      effectivePeriod: createPeriodSchema().optional(),
      dateAsserted: primitives.getDateTimeSchema().optional(),
      _dateAsserted: z.lazy(() => createElementSchema()).optional(),
      informationSource: createReferenceSchema().optional(),
      derivedFrom: z.array(createReferenceSchema()).optional(),
      reasonCode: z.array(createCodeableConceptSchema()).optional(),
      reasonReference: z.array(createReferenceSchema()).optional(),
      note: z.array(createAnnotationSchema()).optional(),
      dosage: z.array(createDosageSchema()).optional(),
    });

    return baseSchema;
  });
}
