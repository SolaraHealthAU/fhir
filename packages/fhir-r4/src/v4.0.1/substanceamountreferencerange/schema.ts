import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createQuantitySchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceAmountReferenceRangeSchema() {
  const baseSchema: z.ZodType<types.SubstanceAmountReferenceRange> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    lowLimit: z.lazy(() => createQuantitySchema()).optional(),
    highLimit: z.lazy(() => createQuantitySchema()).optional(),
  });

  return baseSchema;
}
