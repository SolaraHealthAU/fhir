import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createRangeSchema,
  createQuantitySchema,
  createRatioSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDosageDoseAndRateSchema() {
  const baseSchema: z.ZodType<types.DosageDoseAndRate> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    doseRange: z.lazy(() => createRangeSchema()).optional(),
    doseQuantity: z.lazy(() => createQuantitySchema()).optional(),
    rateRatio: z.lazy(() => createRatioSchema()).optional(),
    rateRange: z.lazy(() => createRangeSchema()).optional(),
    rateQuantity: z.lazy(() => createQuantitySchema()).optional(),
  });

  return baseSchema;
}
