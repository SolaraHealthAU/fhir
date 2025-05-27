import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createIngredientManufacturerSchema } from "../ingredientmanufacturer/schema";
import { createIngredientSubstanceSchema } from "../ingredientsubstance/schema";

/* Generated from FHIR JSON Schema */

export function createIngredientSchema() {
  const baseSchema: z.ZodType<types.Ingredient> = z.object({
    resourceType: z.literal("Ingredient"),
    id: primitives.createIdSchema().optional(),
    meta: z.lazy(() => createMetaSchema()).optional(),
    implicitRules: primitives.createUriSchema().optional(),
    _implicitRules: z.lazy(() => createElementSchema()).optional(),
    language: primitives.createCodeSchema().optional(),
    _language: z.lazy(() => createElementSchema()).optional(),
    text: z.lazy(() => createNarrativeSchema()).optional(),
    contained: z.array(z.lazy(() => createResourceListSchema())).optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    identifier: z.lazy(() => createIdentifierSchema()).optional(),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    for: z.array(z.lazy(() => createReferenceSchema())).optional(),
    role: z.lazy(() => createCodeableConceptSchema()),
    function: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    group: z.lazy(() => createCodeableConceptSchema()).optional(),
    allergenicIndicator: primitives.createBooleanSchema().optional(),
    _allergenicIndicator: z.lazy(() => createElementSchema()).optional(),
    comment: primitives.createMarkdownSchema().optional(),
    _comment: z.lazy(() => createElementSchema()).optional(),
    manufacturer: z
      .array(z.lazy(() => createIngredientManufacturerSchema()))
      .optional(),
    substance: z.lazy(() => createIngredientSubstanceSchema()),
  });

  return baseSchema;
}
