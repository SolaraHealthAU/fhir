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
      _implicitRules: createElementSchema().optional(),
      language: primitives.getCodeSchema().optional(),
      _language: createElementSchema().optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      identifier: z.array(createIdentifierSchema()).optional(),
      status: z.enum(["complete", "pending", "error"]),
      _status: createElementSchema().optional(),
      type: z.enum([
        "individual",
        "subject-list",
        "summary",
        "data-collection",
      ]),
      _type: createElementSchema().optional(),
      measure: primitives.getCanonicalSchema(),
      subject: createReferenceSchema().optional(),
      date: primitives.getDateTimeSchema().optional(),
      _date: createElementSchema().optional(),
      reporter: createReferenceSchema().optional(),
      period: createPeriodSchema(),
      improvementNotation: createCodeableConceptSchema().optional(),
      group: z.array(createMeasureReportGroupSchema()).optional(),
      evaluatedResource: z.array(createReferenceSchema()).optional(),
    });

    return baseSchema;
  });
}
