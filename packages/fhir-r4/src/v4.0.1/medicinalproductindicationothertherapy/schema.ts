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

export function createMedicinalProductIndicationOtherTherapySchema() {
  return getCachedSchema("MedicinalProductIndicationOtherTherapy", () => {
    const baseSchema: z.ZodType<types.MedicinalProductIndicationOtherTherapy> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        therapyRelationshipType: createCodeableConceptSchema(),
        medicationCodeableConcept: createCodeableConceptSchema().optional(),
        medicationReference: createReferenceSchema().optional(),
      });

    return baseSchema;
  });
}
