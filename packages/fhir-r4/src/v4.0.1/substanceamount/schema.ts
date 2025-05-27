import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createQuantitySchema,
  createRangeSchema,
  createElementSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createSubstanceAmountReferenceRangeSchema } from "../substanceamountreferencerange/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceAmountSchema() {
  return getCachedSchema("SubstanceAmount", () => {
    const baseSchema: z.ZodType<types.SubstanceAmount> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      amountQuantity: createQuantitySchema().optional(),
      amountRange: createRangeSchema().optional(),
      amountString: z.string().optional(),
      _amountString: z.lazy(() => createElementSchema()).optional(),
      amountType: createCodeableConceptSchema().optional(),
      amountText: primitives.getStringSchema().optional(),
      _amountText: z.lazy(() => createElementSchema()).optional(),
      referenceRange: createSubstanceAmountReferenceRangeSchema().optional(),
    });

    return baseSchema;
  });
}
