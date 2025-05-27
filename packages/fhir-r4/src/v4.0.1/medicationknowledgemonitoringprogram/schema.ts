import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationKnowledgeMonitoringProgramSchema() {
  const baseSchema: z.ZodType<types.MedicationKnowledgeMonitoringProgram> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: z.lazy(() => createCodeableConceptSchema()).optional(),
      name: primitives.createStringSchema().optional(),
      _name: z.lazy(() => createElementSchema()).optional(),
    });

  return baseSchema;
}
