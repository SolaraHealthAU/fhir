import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createExplanationOfBenefitDiagnosisSchema() {
  return getCachedSchema("ExplanationOfBenefitDiagnosis", () => {
    const baseSchema: z.ZodType<types.ExplanationOfBenefitDiagnosis> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        sequence: primitives.getPositiveIntSchema(),
        _sequence: createElementSchema().optional(),
        diagnosisCodeableConcept: createCodeableConceptSchema().optional(),
        diagnosisReference: createReferenceSchema().optional(),
        type: z.array(createCodeableConceptSchema()).optional(),
        onAdmission: createCodeableConceptSchema().optional(),
        packageCode: createCodeableConceptSchema().optional(),
      });

    return baseSchema;
  });
}
