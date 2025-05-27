import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createExpressionSchema,
  createDataRequirementSchema,
  createTriggerDefinitionSchema,
  createUsageContextSchema,
  createPeriodSchema,
  createDurationSchema,
  createTimingSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createEvidenceVariableCharacteristicSchema() {
  return getCachedSchema("EvidenceVariableCharacteristic", () => {
    const baseSchema: z.ZodType<types.EvidenceVariableCharacteristic> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        description: primitives.getStringSchema().optional(),
        _description: z.lazy(() => createElementSchema()).optional(),
        definitionReference: createReferenceSchema().optional(),
        definitionCanonical: z.string().optional(),
        _definitionCanonical: z.lazy(() => createElementSchema()).optional(),
        definitionCodeableConcept: createCodeableConceptSchema().optional(),
        definitionExpression: createExpressionSchema().optional(),
        definitionDataRequirement: createDataRequirementSchema().optional(),
        definitionTriggerDefinition: createTriggerDefinitionSchema().optional(),
        usageContext: z.array(createUsageContextSchema()).optional(),
        exclude: primitives.getBooleanSchema().optional(),
        _exclude: z.lazy(() => createElementSchema()).optional(),
        participantEffectiveDateTime: z.string().optional(),
        _participantEffectiveDateTime: z
          .lazy(() => createElementSchema())
          .optional(),
        participantEffectivePeriod: createPeriodSchema().optional(),
        participantEffectiveDuration: createDurationSchema().optional(),
        participantEffectiveTiming: createTimingSchema().optional(),
        timeFromStart: createDurationSchema().optional(),
        groupMeasure: z
          .enum([
            "mean",
            "median",
            "mean-of-mean",
            "mean-of-median",
            "median-of-mean",
            "median-of-median",
          ])
          .optional(),
        _groupMeasure: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
