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
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createClinicalImpressionInvestigationSchema } from "../clinicalimpressioninvestigation/schema";
import { createClinicalImpressionFindingSchema } from "../clinicalimpressionfinding/schema";

/* Generated from FHIR JSON Schema */

export function createClinicalImpressionSchema() {
  const baseSchema: z.ZodType<types.ClinicalImpression> = z.object({
    resourceType: z.literal("ClinicalImpression"),
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
    status: primitives.createCodeSchema(),
    _status: z.lazy(() => createElementSchema()).optional(),
    statusReason: z.lazy(() => createCodeableConceptSchema()).optional(),
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    subject: z.lazy(() => createReferenceSchema()),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    effectiveDateTime: z.string().optional(),
    _effectiveDateTime: z.lazy(() => createElementSchema()).optional(),
    effectivePeriod: z.lazy(() => createPeriodSchema()).optional(),
    date: primitives.createDateTimeSchema().optional(),
    _date: z.lazy(() => createElementSchema()).optional(),
    assessor: z.lazy(() => createReferenceSchema()).optional(),
    previous: z.lazy(() => createReferenceSchema()).optional(),
    problem: z.array(z.lazy(() => createReferenceSchema())).optional(),
    investigation: z
      .array(z.lazy(() => createClinicalImpressionInvestigationSchema()))
      .optional(),
    protocol: z.array(primitives.createUriSchema()).optional(),
    _protocol: z.array(z.lazy(() => createElementSchema())).optional(),
    summary: primitives.createStringSchema().optional(),
    _summary: z.lazy(() => createElementSchema()).optional(),
    finding: z
      .array(z.lazy(() => createClinicalImpressionFindingSchema()))
      .optional(),
    prognosisCodeableConcept: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    prognosisReference: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
    supportingInfo: z.array(z.lazy(() => createReferenceSchema())).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
  });

  return baseSchema;
}
