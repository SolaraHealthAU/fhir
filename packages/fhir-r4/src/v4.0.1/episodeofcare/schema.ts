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
  createPeriodSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createEpisodeOfCareStatusHistorySchema } from "../episodeofcarestatushistory/schema";
import { createEpisodeOfCareDiagnosisSchema } from "../episodeofcarediagnosis/schema";

/* Generated from FHIR JSON Schema */

export function createEpisodeOfCareSchema() {
  return getCachedSchema("EpisodeOfCare", () => {
    const baseSchema: z.ZodType<types.EpisodeOfCare> = z.strictObject({
      resourceType: z.literal("EpisodeOfCare"),
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
      status: z.enum([
        "planned",
        "waitlist",
        "active",
        "onhold",
        "finished",
        "cancelled",
        "entered-in-error",
      ]),
      _status: z.lazy(() => createElementSchema()).optional(),
      statusHistory: z
        .array(createEpisodeOfCareStatusHistorySchema())
        .optional(),
      type: z.array(createCodeableConceptSchema()).optional(),
      diagnosis: z.array(createEpisodeOfCareDiagnosisSchema()).optional(),
      patient: createReferenceSchema(),
      managingOrganization: createReferenceSchema().optional(),
      period: createPeriodSchema().optional(),
      referralRequest: z.array(createReferenceSchema()).optional(),
      careManager: createReferenceSchema().optional(),
      team: z.array(createReferenceSchema()).optional(),
      account: z.array(createReferenceSchema()).optional(),
    });

    return baseSchema;
  });
}
