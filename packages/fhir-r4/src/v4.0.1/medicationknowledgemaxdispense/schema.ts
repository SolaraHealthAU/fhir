import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createQuantitySchema,
  createDurationSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationKnowledgeMaxDispenseSchema() {
  return getCachedSchema("MedicationKnowledgeMaxDispense", () => {
    const baseSchema: z.ZodType<types.MedicationKnowledgeMaxDispense> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        quantity: createQuantitySchema(),
        period: createDurationSchema().optional(),
      });

    return baseSchema;
  });
}
