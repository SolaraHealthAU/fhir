import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createMedicationKnowledgeIngredientSchema } from "../medicationknowledgeingredient/schema";
import { createMedicationKnowledgeDrugCharacteristicSchema } from "../medicationknowledgedrugcharacteristic/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationKnowledgeDefinitionalSchema() {
  const baseSchema: z.ZodType<types.MedicationKnowledgeDefinitional> = z.object(
    {
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      definition: z.array(z.lazy(() => createReferenceSchema())).optional(),
      doseForm: z.lazy(() => createCodeableConceptSchema()).optional(),
      intendedRoute: z
        .array(z.lazy(() => createCodeableConceptSchema()))
        .optional(),
      ingredient: z
        .array(z.lazy(() => createMedicationKnowledgeIngredientSchema()))
        .optional(),
      drugCharacteristic: z
        .array(
          z.lazy(() => createMedicationKnowledgeDrugCharacteristicSchema()),
        )
        .optional(),
    },
  );

  return baseSchema;
}
