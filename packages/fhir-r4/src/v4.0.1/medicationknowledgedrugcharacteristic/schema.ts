import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createQuantitySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationKnowledgeDrugCharacteristicSchema() {
  const baseSchema: z.ZodType<types.MedicationKnowledgeDrugCharacteristic> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: z.lazy(() => createCodeableConceptSchema()).optional(),
      valueCodeableConcept: z
        .lazy(() => createCodeableConceptSchema())
        .optional(),
      valueString: z.string().optional(),
      _valueString: z.lazy(() => createElementSchema()).optional(),
      valueQuantity: z.lazy(() => createQuantitySchema()).optional(),
      valueBase64Binary: z.string().optional(),
      _valueBase64Binary: z.lazy(() => createElementSchema()).optional(),
    });

  return baseSchema;
}
