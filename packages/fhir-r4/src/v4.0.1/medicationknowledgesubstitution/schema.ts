import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationKnowledgeSubstitutionSchema() {
  return getCachedSchema("MedicationKnowledgeSubstitution", () => {
    const baseSchema: z.ZodType<types.MedicationKnowledgeSubstitution> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        type: createCodeableConceptSchema(),
        allowed: primitives.getBooleanSchema().optional(),
        _allowed: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
