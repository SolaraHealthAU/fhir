import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createQuantitySchema,
  createDurationSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationRequestInitialFillSchema() {
  return getCachedSchema("MedicationRequestInitialFill", () => {
    const baseSchema: z.ZodType<types.MedicationRequestInitialFill> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        quantity: createQuantitySchema().optional(),
        duration: createDurationSchema().optional(),
      });

    return baseSchema;
  });
}
