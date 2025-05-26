import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createQuantitySchema,
  createDurationSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationKnowledgeMaxDispenseSchema() {
  const baseSchema: z.ZodType<types.MedicationKnowledgeMaxDispense> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    quantity: z.lazy(() => createQuantitySchema()),
    period: z.lazy(() => createDurationSchema()).optional(),
  });

  return baseSchema;
}
