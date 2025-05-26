import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createExpressionSchema,
  createDataRequirementSchema,
  createUsageContextSchema,
  createPeriodSchema,
  createDurationSchema,
  createTimingSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createResearchElementDefinitionCharacteristicSchema() {
  const baseSchema: z.ZodType<types.ResearchElementDefinitionCharacteristic> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      definitionCodeableConcept: z
        .lazy(() => createCodeableConceptSchema())
        .optional(),
      definitionCanonical: z.string().optional(),
      _definitionCanonical: z.lazy(() => createElementSchema()).optional(),
      definitionExpression: z.lazy(() => createExpressionSchema()).optional(),
      definitionDataRequirement: z
        .lazy(() => createDataRequirementSchema())
        .optional(),
      usageContext: z
        .array(z.lazy(() => createUsageContextSchema()))
        .optional(),
      exclude: primitives.createBooleanSchema().optional(),
      _exclude: z.lazy(() => createElementSchema()).optional(),
      unitOfMeasure: z.lazy(() => createCodeableConceptSchema()).optional(),
      studyEffectiveDescription: primitives.createStringSchema().optional(),
      _studyEffectiveDescription: z
        .lazy(() => createElementSchema())
        .optional(),
      studyEffectiveDateTime: z.string().optional(),
      _studyEffectiveDateTime: z.lazy(() => createElementSchema()).optional(),
      studyEffectivePeriod: z.lazy(() => createPeriodSchema()).optional(),
      studyEffectiveDuration: z.lazy(() => createDurationSchema()).optional(),
      studyEffectiveTiming: z.lazy(() => createTimingSchema()).optional(),
      studyEffectiveTimeFromStart: z
        .lazy(() => createDurationSchema())
        .optional(),
      studyEffectiveGroupMeasure: z
        .enum([
          "mean",
          "median",
          "mean-of-mean",
          "mean-of-median",
          "median-of-mean",
          "median-of-median",
        ])
        .optional(),
      _studyEffectiveGroupMeasure: z
        .lazy(() => createElementSchema())
        .optional(),
      participantEffectiveDescription: primitives
        .createStringSchema()
        .optional(),
      _participantEffectiveDescription: z
        .lazy(() => createElementSchema())
        .optional(),
      participantEffectiveDateTime: z.string().optional(),
      _participantEffectiveDateTime: z
        .lazy(() => createElementSchema())
        .optional(),
      participantEffectivePeriod: z.lazy(() => createPeriodSchema()).optional(),
      participantEffectiveDuration: z
        .lazy(() => createDurationSchema())
        .optional(),
      participantEffectiveTiming: z.lazy(() => createTimingSchema()).optional(),
      participantEffectiveTimeFromStart: z
        .lazy(() => createDurationSchema())
        .optional(),
      participantEffectiveGroupMeasure: z
        .enum([
          "mean",
          "median",
          "mean-of-mean",
          "mean-of-median",
          "median-of-mean",
          "median-of-median",
        ])
        .optional(),
      _participantEffectiveGroupMeasure: z
        .lazy(() => createElementSchema())
        .optional(),
    });

  return baseSchema;
}
