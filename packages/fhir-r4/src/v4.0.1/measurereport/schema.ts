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
  createPeriodSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createMeasureReportGroupSchema } from "../measurereportgroup/schema";

/* Generated from FHIR JSON Schema */

export function createMeasureReportSchema() {
  return getCachedSchema("MeasureReport", () => {
    const baseSchema: z.ZodType<types.MeasureReport> = z.strictObject({
      resourceType: z.literal("MeasureReport"),
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
      status: z.enum(["complete", "pending", "error"]),
      _status: z.lazy(() => createElementSchema()).optional(),
      type: z.enum([
        "individual",
        "subject-list",
        "summary",
        "data-collection",
      ]),
      _type: z.lazy(() => createElementSchema()).optional(),
      measure: primitives.getCanonicalSchema(),
      subject: createReferenceSchema().optional(),
      date: primitives.getDateTimeSchema().optional(),
      _date: z.lazy(() => createElementSchema()).optional(),
      reporter: createReferenceSchema().optional(),
      period: createPeriodSchema(),
      improvementNotation: createCodeableConceptSchema().optional(),
      group: z.array(createMeasureReportGroupSchema()).optional(),
      evaluatedResource: z.array(createReferenceSchema()).optional(),
    });

    return baseSchema;
  });
}
