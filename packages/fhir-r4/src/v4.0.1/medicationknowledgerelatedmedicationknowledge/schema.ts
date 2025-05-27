import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationKnowledgeRelatedMedicationKnowledgeSchema() {
  return getCachedSchema(
    "MedicationKnowledgeRelatedMedicationKnowledge",
    () => {
      const baseSchema: z.ZodType<types.MedicationKnowledgeRelatedMedicationKnowledge> =
        z.strictObject({
          id: primitives.getStringSchema().optional(),
          extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
          modifierExtension: z
            .array(z.lazy(() => createExtensionSchema()))
            .optional(),
          type: createCodeableConceptSchema(),
          reference: z.array(createReferenceSchema()),
        });

      return baseSchema;
    },
  );
}
