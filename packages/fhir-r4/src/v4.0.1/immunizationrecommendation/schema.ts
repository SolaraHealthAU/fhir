import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createImmunizationRecommendationRecommendationSchema } from "../immunizationrecommendationrecommendation/schema";

/* Generated from FHIR JSON Schema */

export function createImmunizationRecommendationSchema() {
  return getCachedSchema("ImmunizationRecommendation", () => {
    const baseSchema: z.ZodType<types.ImmunizationRecommendation> =
      z.strictObject({
        resourceType: z.literal("ImmunizationRecommendation"),
        id: primitives.getIdSchema().optional(),
        meta: createMetaSchema().optional(),
        implicitRules: primitives.getUriSchema().optional(),
        _implicitRules: createElementSchema().optional(),
        language: primitives.getCodeSchema().optional(),
        _language: createElementSchema().optional(),
        text: createNarrativeSchema().optional(),
        contained: z.array(createResourceListSchema()).optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        identifier: z.array(createIdentifierSchema()).optional(),
        patient: createReferenceSchema(),
        date: primitives.getDateTimeSchema(),
        _date: createElementSchema().optional(),
        authority: createReferenceSchema().optional(),
        recommendation: z.array(
          createImmunizationRecommendationRecommendationSchema(),
        ),
      });

    return baseSchema;
  });
}
