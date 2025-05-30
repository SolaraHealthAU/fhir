import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("MedicinalProductIngredient", () => {
    const baseSchema: z.ZodType<types.MedicinalProductIngredient> =
      z.strictObject({
        resourceType: z.literal("MedicinalProductIngredient"),
        id: primitives.getIdSchema().optional(),
        meta: createMetaSchema().optional(),
        implicitRules: primitives.getUriSchema().optional(),
        _implicitRules: z.lazy(() => createElementSchema()).optional(),
        language: primitives.getCodeSchema().optional(),
        _language: z.lazy(() => createElementSchema()).optional(),
        text: createNarrativeSchema().optional(),
        contained: z.array(createResourceListSchema()).optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        identifier: z.lazy(() => createIdentifierSchema()).optional(),
        role: createCodeableConceptSchema(),
        allergenicIndicator: primitives.getBooleanSchema().optional(),
        _allergenicIndicator: z.lazy(() => createElementSchema()).optional(),
        manufacturer: z.array(createReferenceSchema()).optional(),
        specifiedSubstance: z
          .array(createMedicinalProductIngredientSpecifiedSubstanceSchema())
          .optional(),
        substance: createMedicinalProductIngredientSubstanceSchema().optional(),
      });

    return baseSchema;
  });
}
