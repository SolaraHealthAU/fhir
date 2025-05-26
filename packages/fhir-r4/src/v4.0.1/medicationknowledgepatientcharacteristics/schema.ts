import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationKnowledgePatientCharacteristicsSchema() {
  const baseSchema: z.ZodType<types.MedicationKnowledgePatientCharacteristics> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      characteristicCodeableConcept: z
        .lazy(() => createCodeableConceptSchema())
        .optional(),
      characteristicQuantity: z.lazy(() => createQuantitySchema()).optional(),
      value: z.array(primitives.createStringSchema()).optional(),
      _value: z.array(z.lazy(() => createElementSchema())).optional(),
    });

  return baseSchema;
}
