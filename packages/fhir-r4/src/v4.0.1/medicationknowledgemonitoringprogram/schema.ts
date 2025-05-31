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

export function createMedicationKnowledgeMonitoringProgramSchema() {
  return getCachedSchema("MedicationKnowledgeMonitoringProgram", () => {
    const baseSchema: z.ZodType<types.MedicationKnowledgeMonitoringProgram> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        type: createCodeableConceptSchema().optional(),
        name: primitives.getStringSchema().optional(),
        _name: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
