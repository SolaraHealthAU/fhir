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
  createPeriodSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createEpisodeOfCareStatusHistorySchema } from "../episodeofcarestatushistory/schema";
import { createEpisodeOfCareDiagnosisSchema } from "../episodeofcarediagnosis/schema";

/* Generated from FHIR JSON Schema */

export function createEpisodeOfCareSchema() {
  const baseSchema: z.ZodType<types.EpisodeOfCare> = z.object({
    resourceType: z.literal("EpisodeOfCare"),
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
      .array(z.lazy(() => createEpisodeOfCareStatusHistorySchema()))
      .optional(),
    type: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    diagnosis: z
      .array(z.lazy(() => createEpisodeOfCareDiagnosisSchema()))
      .optional(),
    patient: z.lazy(() => createReferenceSchema()),
    managingOrganization: z.lazy(() => createReferenceSchema()).optional(),
    period: z.lazy(() => createPeriodSchema()).optional(),
    referralRequest: z.array(z.lazy(() => createReferenceSchema())).optional(),
    careManager: z.lazy(() => createReferenceSchema()).optional(),
    team: z.array(z.lazy(() => createReferenceSchema())).optional(),
    account: z.array(z.lazy(() => createReferenceSchema())).optional(),
  });

  return baseSchema;
}
