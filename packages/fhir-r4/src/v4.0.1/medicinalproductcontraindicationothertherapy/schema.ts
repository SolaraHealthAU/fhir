import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductContraindicationOtherTherapySchema() {
  const baseSchema: z.ZodType<types.MedicinalProductContraindicationOtherTherapy> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      therapyRelationshipType: z.lazy(() => createCodeableConceptSchema()),
      medicationCodeableConcept: z
        .lazy(() => createCodeableConceptSchema())
        .optional(),
      medicationReference: z.lazy(() => createReferenceSchema()).optional(),
    });

  return baseSchema;
}
