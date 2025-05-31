import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createMoneySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationKnowledgeCostSchema() {
  return getCachedSchema("MedicationKnowledgeCost", () => {
    const baseSchema: z.ZodType<types.MedicationKnowledgeCost> = z.strictObject(
      {
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        type: createCodeableConceptSchema(),
        source: primitives.getStringSchema().optional(),
        _source: createElementSchema().optional(),
        cost: createMoneySchema(),
      },
    );

    return baseSchema;
  });
}
