import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationKnowledgeSubstitutionSchema() {
  const baseSchema: z.ZodType<types.MedicationKnowledgeSubstitution> = z.object(
    {
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: z.lazy(() => createCodeableConceptSchema()),
      allowed: primitives.createBooleanSchema().optional(),
      _allowed: z.lazy(() => createElementSchema()).optional(),
    },
  );

  return baseSchema;
}
