import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationKnowledgeScheduleSchema() {
  return getCachedSchema("MedicationKnowledgeSchedule", () => {
    const baseSchema: z.ZodType<types.MedicationKnowledgeSchedule> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        schedule: createCodeableConceptSchema(),
      });

    return baseSchema;
  });
}
