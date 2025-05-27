import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.EvidenceVariableCharacteristic> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    definitionReference: z.lazy(() => createReferenceSchema()).optional(),
    definitionCanonical: z.string().optional(),
    _definitionCanonical: z.lazy(() => createElementSchema()).optional(),
    definitionCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    definitionExpression: z.lazy(() => createExpressionSchema()).optional(),
    definitionDataRequirement: z
      .lazy(() => createDataRequirementSchema())
      .optional(),
    definitionTriggerDefinition: z
      .lazy(() => createTriggerDefinitionSchema())
      .optional(),
    usageContext: z.array(z.lazy(() => createUsageContextSchema())).optional(),
    exclude: primitives.createBooleanSchema().optional(),
    _exclude: z.lazy(() => createElementSchema()).optional(),
    participantEffectiveDateTime: z.string().optional(),
    _participantEffectiveDateTime: z
      .lazy(() => createElementSchema())
      .optional(),
    participantEffectivePeriod: z.lazy(() => createPeriodSchema()).optional(),
    participantEffectiveDuration: z
      .lazy(() => createDurationSchema())
      .optional(),
    participantEffectiveTiming: z.lazy(() => createTimingSchema()).optional(),
    timeFromStart: z.lazy(() => createDurationSchema()).optional(),
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
}
