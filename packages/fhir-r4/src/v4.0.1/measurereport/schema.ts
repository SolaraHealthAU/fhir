import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
  createPeriodSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createMeasureReportGroupSchema } from "../measurereportgroup/schema";

/* Generated from FHIR JSON Schema */

export function createMeasureReportSchema() {
  const baseSchema: z.ZodType<types.MeasureReport> = z.object({
    resourceType: z.literal("MeasureReport"),
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
    status: z.enum(["complete", "pending", "error"]),
    _status: z.lazy(() => createElementSchema()).optional(),
    type: z.enum(["individual", "subject-list", "summary", "data-collection"]),
    _type: z.lazy(() => createElementSchema()).optional(),
    measure: primitives.createCanonicalSchema(),
    subject: z.lazy(() => createReferenceSchema()).optional(),
    date: primitives.createDateTimeSchema().optional(),
    _date: z.lazy(() => createElementSchema()).optional(),
    reporter: z.lazy(() => createReferenceSchema()).optional(),
    period: z.lazy(() => createPeriodSchema()),
    improvementNotation: z.lazy(() => createCodeableConceptSchema()).optional(),
    group: z.array(z.lazy(() => createMeasureReportGroupSchema())).optional(),
    evaluatedResource: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
  });

  return baseSchema;
}
