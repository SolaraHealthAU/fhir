import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";

/* Generated from FHIR JSON Schema */

export function createImmunizationEvaluationSchema() {
  const baseSchema: z.ZodType<types.ImmunizationEvaluation> = z.object({
    resourceType: z.literal("ImmunizationEvaluation"),
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
    patient: z.lazy(() => createReferenceSchema()),
    date: primitives.createDateTimeSchema().optional(),
    _date: z.lazy(() => createElementSchema()).optional(),
    authority: z.lazy(() => createReferenceSchema()).optional(),
    targetDisease: z.lazy(() => createCodeableConceptSchema()),
    immunizationEvent: z.lazy(() => createReferenceSchema()),
    doseStatus: z.lazy(() => createCodeableConceptSchema()),
    doseStatusReason: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    series: primitives.createStringSchema().optional(),
    _series: z.lazy(() => createElementSchema()).optional(),
    doseNumber: primitives.createStringSchema().optional(),
    _doseNumber: z.lazy(() => createElementSchema()).optional(),
    seriesDoses: primitives.createStringSchema().optional(),
    _seriesDoses: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
