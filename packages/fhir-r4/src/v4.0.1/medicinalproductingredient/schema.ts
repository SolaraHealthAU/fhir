import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createMedicinalProductIngredientSpecifiedSubstanceSchema } from "../medicinalproductingredientspecifiedsubstance/schema";
import { createMedicinalProductIngredientSubstanceSchema } from "../medicinalproductingredientsubstance/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductIngredientSchema() {
  const baseSchema: z.ZodType<types.MedicinalProductIngredient> = z.object({
    resourceType: z.literal("MedicinalProductIngredient"),
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
    role: z.lazy(() => createCodeableConceptSchema()),
    allergenicIndicator: primitives.createBooleanSchema().optional(),
    _allergenicIndicator: z.lazy(() => createElementSchema()).optional(),
    manufacturer: z.array(z.lazy(() => createReferenceSchema())).optional(),
    specifiedSubstance: z
      .array(
        z.lazy(() =>
          createMedicinalProductIngredientSpecifiedSubstanceSchema(),
        ),
      )
      .optional(),
    substance: z
      .lazy(() => createMedicinalProductIngredientSubstanceSchema())
      .optional(),
  });

  return baseSchema;
}
