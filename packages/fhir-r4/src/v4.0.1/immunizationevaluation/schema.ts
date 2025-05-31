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
      _implicitRules: createElementSchema().optional(),
      language: primitives.getCodeSchema().optional(),
      _language: createElementSchema().optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      identifier: z.array(createIdentifierSchema()).optional(),
      status: primitives.getCodeSchema(),
      _status: createElementSchema().optional(),
      patient: createReferenceSchema(),
      date: primitives.getDateTimeSchema().optional(),
      _date: createElementSchema().optional(),
      authority: createReferenceSchema().optional(),
      targetDisease: createCodeableConceptSchema(),
      immunizationEvent: createReferenceSchema(),
      doseStatus: createCodeableConceptSchema(),
      doseStatusReason: z.array(createCodeableConceptSchema()).optional(),
      description: primitives.getStringSchema().optional(),
      _description: createElementSchema().optional(),
      series: primitives.getStringSchema().optional(),
      _series: createElementSchema().optional(),
      doseNumberPositiveInt: z.number().optional(),
      _doseNumberPositiveInt: createElementSchema().optional(),
      doseNumberString: z.string().optional(),
      _doseNumberString: createElementSchema().optional(),
      seriesDosesPositiveInt: z.number().optional(),
      _seriesDosesPositiveInt: createElementSchema().optional(),
      seriesDosesString: z.string().optional(),
      _seriesDosesString: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
