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
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        type: createCodeableConceptSchema(),
        source: primitives.getStringSchema().optional(),
        _source: z.lazy(() => createElementSchema()).optional(),
        cost: createMoneySchema(),
      },
    );

    return baseSchema;
  });
}
