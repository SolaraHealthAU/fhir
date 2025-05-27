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
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createClinicalImpressionInvestigationSchema } from "../clinicalimpressioninvestigation/schema";
import { createClinicalImpressionFindingSchema } from "../clinicalimpressionfinding/schema";

/* Generated from FHIR JSON Schema */

export function createClinicalImpressionSchema() {
  return getCachedSchema("ClinicalImpression", () => {
    const baseSchema: z.ZodType<types.ClinicalImpression> = z.strictObject({
      resourceType: z.literal("ClinicalImpression"),
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
      status: primitives.getCodeSchema(),
      _status: z.lazy(() => createElementSchema()).optional(),
      statusReason: createCodeableConceptSchema().optional(),
      code: createCodeableConceptSchema().optional(),
      description: primitives.getStringSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      subject: createReferenceSchema(),
      encounter: createReferenceSchema().optional(),
      effectiveDateTime: z.string().optional(),
      _effectiveDateTime: z.lazy(() => createElementSchema()).optional(),
      effectivePeriod: createPeriodSchema().optional(),
      date: primitives.getDateTimeSchema().optional(),
      _date: z.lazy(() => createElementSchema()).optional(),
      assessor: createReferenceSchema().optional(),
      previous: createReferenceSchema().optional(),
      problem: z.array(createReferenceSchema()).optional(),
      investigation: z
        .array(createClinicalImpressionInvestigationSchema())
        .optional(),
      protocol: z.array(primitives.getUriSchema()).optional(),
      _protocol: z.array(z.lazy(() => createElementSchema())).optional(),
      summary: primitives.getStringSchema().optional(),
      _summary: z.lazy(() => createElementSchema()).optional(),
      finding: z.array(createClinicalImpressionFindingSchema()).optional(),
      prognosisCodeableConcept: z
        .array(createCodeableConceptSchema())
        .optional(),
      prognosisReference: z.array(createReferenceSchema()).optional(),
      supportingInfo: z.array(createReferenceSchema()).optional(),
      note: z.array(createAnnotationSchema()).optional(),
    });

    return baseSchema;
  });
}
