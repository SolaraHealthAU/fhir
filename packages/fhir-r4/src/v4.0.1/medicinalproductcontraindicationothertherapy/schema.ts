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

export function createMedicinalProductContraindicationOtherTherapySchema() {
  return getCachedSchema("MedicinalProductContraindicationOtherTherapy", () => {
    const baseSchema: z.ZodType<types.MedicinalProductContraindicationOtherTherapy> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        therapyRelationshipType: createCodeableConceptSchema(),
        medicationCodeableConcept: createCodeableConceptSchema().optional(),
        medicationReference: createReferenceSchema().optional(),
      });

    return baseSchema;
  });
}
