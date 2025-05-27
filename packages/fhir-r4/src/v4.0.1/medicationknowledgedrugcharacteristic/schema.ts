import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createQuantitySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationKnowledgeDrugCharacteristicSchema() {
  return getCachedSchema("MedicationKnowledgeDrugCharacteristic", () => {
    const baseSchema: z.ZodType<types.MedicationKnowledgeDrugCharacteristic> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        type: createCodeableConceptSchema().optional(),
        valueCodeableConcept: createCodeableConceptSchema().optional(),
        valueString: z.string().optional(),
        _valueString: z.lazy(() => createElementSchema()).optional(),
        valueQuantity: createQuantitySchema().optional(),
        valueBase64Binary: z.string().optional(),
        _valueBase64Binary: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
