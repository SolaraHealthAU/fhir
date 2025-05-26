import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.SubstanceAmount> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    amountQuantity: z.lazy(() => createQuantitySchema()).optional(),
    amountRange: z.lazy(() => createRangeSchema()).optional(),
    amountString: z.string().optional(),
    _amountString: z.lazy(() => createElementSchema()).optional(),
    amountType: z.lazy(() => createCodeableConceptSchema()).optional(),
    amountText: primitives.createStringSchema().optional(),
    _amountText: z.lazy(() => createElementSchema()).optional(),
    referenceRange: z
      .lazy(() => createSubstanceAmountReferenceRangeSchema())
      .optional(),
  });

  return baseSchema;
}
