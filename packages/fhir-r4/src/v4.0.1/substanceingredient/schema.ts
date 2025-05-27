import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createRatioSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceIngredientSchema() {
  return getCachedSchema("SubstanceIngredient", () => {
    const baseSchema: z.ZodType<types.SubstanceIngredient> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      quantity: createRatioSchema().optional(),
      substanceCodeableConcept: createCodeableConceptSchema().optional(),
      substanceReference: createReferenceSchema().optional(),
    });

    return baseSchema;
  });
}
