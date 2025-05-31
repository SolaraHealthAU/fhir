import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createQuantitySchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceAmountReferenceRangeSchema() {
  return getCachedSchema("SubstanceAmountReferenceRange", () => {
    const baseSchema: z.ZodType<types.SubstanceAmountReferenceRange> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        lowLimit: createQuantitySchema().optional(),
        highLimit: createQuantitySchema().optional(),
      });

    return baseSchema;
  });
}
