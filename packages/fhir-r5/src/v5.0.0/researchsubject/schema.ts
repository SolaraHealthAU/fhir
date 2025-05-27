import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createPeriodSchema,
  createReferenceSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createResearchSubjectProgressSchema } from "../researchsubjectprogress/schema";

/* Generated from FHIR JSON Schema */

export function createResearchSubjectSchema() {
  const baseSchema: z.ZodType<types.ResearchSubject> = z.object({
    resourceType: z.literal("ResearchSubject"),
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
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    progress: z
      .array(z.lazy(() => createResearchSubjectProgressSchema()))
      .optional(),
    period: z.lazy(() => createPeriodSchema()).optional(),
    study: z.lazy(() => createReferenceSchema()),
    subject: z.lazy(() => createReferenceSchema()),
    assignedComparisonGroup: primitives.createIdSchema().optional(),
    _assignedComparisonGroup: z.lazy(() => createElementSchema()).optional(),
    actualComparisonGroup: primitives.createIdSchema().optional(),
    _actualComparisonGroup: z.lazy(() => createElementSchema()).optional(),
    consent: z.array(z.lazy(() => createReferenceSchema())).optional(),
  });

  return baseSchema;
}
