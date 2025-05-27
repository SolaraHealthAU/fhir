import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCoverageEligibilityRequestDiagnosisSchema() {
  return getCachedSchema("CoverageEligibilityRequestDiagnosis", () => {
    const baseSchema: z.ZodType<types.CoverageEligibilityRequestDiagnosis> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        diagnosisCodeableConcept: createCodeableConceptSchema().optional(),
        diagnosisReference: createReferenceSchema().optional(),
      });

    return baseSchema;
  });
}
