import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createRatioSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceIngredientSchema() {
  const baseSchema: z.ZodType<types.SubstanceIngredient> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    quantity: z.lazy(() => createRatioSchema()).optional(),
    substanceCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    substanceReference: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
