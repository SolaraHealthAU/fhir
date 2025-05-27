import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("ResearchElementDefinitionCharacteristic", () => {
    const baseSchema: z.ZodType<types.ResearchElementDefinitionCharacteristic> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        definitionCodeableConcept: createCodeableConceptSchema().optional(),
        definitionCanonical: z.string().optional(),
        _definitionCanonical: z.lazy(() => createElementSchema()).optional(),
        definitionExpression: createExpressionSchema().optional(),
        definitionDataRequirement: createDataRequirementSchema().optional(),
        usageContext: z.array(createUsageContextSchema()).optional(),
        exclude: primitives.getBooleanSchema().optional(),
        _exclude: z.lazy(() => createElementSchema()).optional(),
        unitOfMeasure: createCodeableConceptSchema().optional(),
        studyEffectiveDescription: primitives.getStringSchema().optional(),
        _studyEffectiveDescription: z
          .lazy(() => createElementSchema())
          .optional(),
        studyEffectiveDateTime: z.string().optional(),
        _studyEffectiveDateTime: z.lazy(() => createElementSchema()).optional(),
        studyEffectivePeriod: createPeriodSchema().optional(),
        studyEffectiveDuration: createDurationSchema().optional(),
        studyEffectiveTiming: createTimingSchema().optional(),
        studyEffectiveTimeFromStart: createDurationSchema().optional(),
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
          .getStringSchema()
          .optional(),
        _participantEffectiveDescription: z
          .lazy(() => createElementSchema())
          .optional(),
        participantEffectiveDateTime: z.string().optional(),
        _participantEffectiveDateTime: z
          .lazy(() => createElementSchema())
          .optional(),
        participantEffectivePeriod: createPeriodSchema().optional(),
        participantEffectiveDuration: createDurationSchema().optional(),
        participantEffectiveTiming: createTimingSchema().optional(),
        participantEffectiveTimeFromStart: createDurationSchema().optional(),
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
  });
}
