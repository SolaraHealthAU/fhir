import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.ImmunizationRecommendation> = z.object({
    resourceType: z.literal("ImmunizationRecommendation"),
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
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    patient: z.lazy(() => createReferenceSchema()),
    date: primitives.createDateTimeSchema(),
    _date: z.lazy(() => createElementSchema()).optional(),
    authority: z.lazy(() => createReferenceSchema()).optional(),
    recommendation: z.array(
      z.lazy(() => createImmunizationRecommendationRecommendationSchema()),
    ),
  });

  return baseSchema;
}
