import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createRangeSchema,
  createQuantitySchema,
  createRatioSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDosageDoseAndRateSchema() {
  return getCachedSchema("DosageDoseAndRate", () => {
    const baseSchema: z.ZodType<types.DosageDoseAndRate> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: createCodeableConceptSchema().optional(),
      doseRange: createRangeSchema().optional(),
      doseQuantity: createQuantitySchema().optional(),
      rateRatio: createRatioSchema().optional(),
      rateRange: createRangeSchema().optional(),
      rateQuantity: createQuantitySchema().optional(),
    });

    return baseSchema;
  });
}
