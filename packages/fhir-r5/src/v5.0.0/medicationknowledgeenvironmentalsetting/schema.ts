import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createRangeSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationKnowledgeEnvironmentalSettingSchema() {
  const baseSchema: z.ZodType<types.MedicationKnowledgeEnvironmentalSetting> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: z.lazy(() => createCodeableConceptSchema()),
      valueQuantity: z.lazy(() => createQuantitySchema()).optional(),
      valueRange: z.lazy(() => createRangeSchema()).optional(),
      valueCodeableConcept: z
        .lazy(() => createCodeableConceptSchema())
        .optional(),
    });

  return baseSchema;
}
