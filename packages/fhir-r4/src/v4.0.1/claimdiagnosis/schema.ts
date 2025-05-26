import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createClaimDiagnosisSchema() {
  const baseSchema: z.ZodType<types.ClaimDiagnosis> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    sequence: primitives.createPositiveIntSchema(),
    _sequence: z.lazy(() => createElementSchema()).optional(),
    diagnosisCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    diagnosisReference: z.lazy(() => createReferenceSchema()).optional(),
    type: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    onAdmission: z.lazy(() => createCodeableConceptSchema()).optional(),
    packageCode: z.lazy(() => createCodeableConceptSchema()).optional(),
  });

  return baseSchema;
}
