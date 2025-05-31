import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationKnowledgePackagingSchema() {
  return getCachedSchema("MedicationKnowledgePackaging", () => {
    const baseSchema: z.ZodType<types.MedicationKnowledgePackaging> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        type: createCodeableConceptSchema().optional(),
        quantity: createQuantitySchema().optional(),
      });

    return baseSchema;
  });
}
