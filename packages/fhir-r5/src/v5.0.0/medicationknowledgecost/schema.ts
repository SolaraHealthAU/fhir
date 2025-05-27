import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createPeriodSchema,
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
    effectiveDate: z.array(z.lazy(() => createPeriodSchema())).optional(),
    type: z.lazy(() => createCodeableConceptSchema()),
    source: primitives.createStringSchema().optional(),
    _source: z.lazy(() => createElementSchema()).optional(),
    costMoney: z.lazy(() => createMoneySchema()).optional(),
    costCodeableConcept: z.lazy(() => createCodeableConceptSchema()).optional(),
  });

  return baseSchema;
}
