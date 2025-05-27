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
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createSubstanceInstanceSchema } from "../substanceinstance/schema";
import { createSubstanceIngredientSchema } from "../substanceingredient/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceSchema() {
  return getCachedSchema("Substance", () => {
    const baseSchema: z.ZodType<types.Substance> = z.strictObject({
      resourceType: z.literal("Substance"),
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
      identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
      status: z.enum(["active", "inactive", "entered-in-error"]).optional(),
      _status: z.lazy(() => createElementSchema()).optional(),
      category: z.array(createCodeableConceptSchema()).optional(),
      code: createCodeableConceptSchema(),
      description: primitives.getStringSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      instance: z.array(createSubstanceInstanceSchema()).optional(),
      ingredient: z.array(createSubstanceIngredientSchema()).optional(),
    });

    return baseSchema;
  });
}
