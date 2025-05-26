import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createMoneySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationKnowledgeCostSchema() {
  const baseSchema: z.ZodType<types.MedicationKnowledgeCost> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.lazy(() => createCodeableConceptSchema()),
    source: primitives.createStringSchema().optional(),
    _source: z.lazy(() => createElementSchema()).optional(),
    cost: z.lazy(() => createMoneySchema()),
  });

  return baseSchema;
}
