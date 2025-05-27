import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createQuantitySchema,
  createDurationSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationRequestInitialFillSchema() {
  const baseSchema: z.ZodType<types.MedicationRequestInitialFill> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    quantity: z.lazy(() => createQuantitySchema()).optional(),
    duration: z.lazy(() => createDurationSchema()).optional(),
  });

  return baseSchema;
}
