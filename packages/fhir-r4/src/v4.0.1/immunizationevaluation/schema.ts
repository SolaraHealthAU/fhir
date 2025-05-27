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
  createCodeableConceptSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";

/* Generated from FHIR JSON Schema */

export function createImmunizationEvaluationSchema() {
  return getCachedSchema("ImmunizationEvaluation", () => {
    const baseSchema: z.ZodType<types.ImmunizationEvaluation> = z.strictObject({
      resourceType: z.literal("ImmunizationEvaluation"),
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
      patient: createReferenceSchema(),
      date: primitives.getDateTimeSchema().optional(),
      _date: z.lazy(() => createElementSchema()).optional(),
      authority: createReferenceSchema().optional(),
      targetDisease: createCodeableConceptSchema(),
      immunizationEvent: createReferenceSchema(),
      doseStatus: createCodeableConceptSchema(),
      doseStatusReason: z.array(createCodeableConceptSchema()).optional(),
      description: primitives.getStringSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      series: primitives.getStringSchema().optional(),
      _series: z.lazy(() => createElementSchema()).optional(),
      doseNumberPositiveInt: z.number().optional(),
      _doseNumberPositiveInt: z.lazy(() => createElementSchema()).optional(),
      doseNumberString: z.string().optional(),
      _doseNumberString: z.lazy(() => createElementSchema()).optional(),
      seriesDosesPositiveInt: z.number().optional(),
      _seriesDosesPositiveInt: z.lazy(() => createElementSchema()).optional(),
      seriesDosesString: z.string().optional(),
      _seriesDosesString: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
