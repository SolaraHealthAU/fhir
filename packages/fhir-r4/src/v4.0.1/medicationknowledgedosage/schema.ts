import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createDosageSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationKnowledgeDosageSchema() {
  return getCachedSchema("MedicationKnowledgeDosage", () => {
    const baseSchema: z.ZodType<types.MedicationKnowledgeDosage> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        type: createCodeableConceptSchema(),
        dosage: z.array(createDosageSchema()),
      });

    return baseSchema;
  });
}
