import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createRelatedArtifactSchema,
  createReferenceSchema,
  createTriggerDefinitionSchema,
  createDataRequirementSchema,
  createAgeSchema,
  createPeriodSchema,
  createDurationSchema,
  createRangeSchema,
  createTimingSchema,
} from "../core/schema";
import { createPlanDefinitionConditionSchema } from "../plandefinitioncondition/schema";
import { createPlanDefinitionRelatedActionSchema } from "../plandefinitionrelatedaction/schema";
import { createPlanDefinitionParticipantSchema } from "../plandefinitionparticipant/schema";
import { createPlanDefinitionDynamicValueSchema } from "../plandefinitiondynamicvalue/schema";

/* Generated from FHIR JSON Schema */

export function createPlanDefinitionActionSchema() {
  const baseSchema: z.ZodType<types.PlanDefinitionAction> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    prefix: primitives.createStringSchema().optional(),
    _prefix: z.lazy(() => createElementSchema()).optional(),
    title: primitives.createStringSchema().optional(),
    _title: z.lazy(() => createElementSchema()).optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    textEquivalent: primitives.createStringSchema().optional(),
    _textEquivalent: z.lazy(() => createElementSchema()).optional(),
    priority: primitives.createCodeSchema().optional(),
    _priority: z.lazy(() => createElementSchema()).optional(),
    code: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    reason: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    documentation: z
      .array(z.lazy(() => createRelatedArtifactSchema()))
      .optional(),
    goalId: z.array(primitives.createIdSchema()).optional(),
    _goalId: z.array(z.lazy(() => createElementSchema())).optional(),
    subjectCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    subjectReference: z.lazy(() => createReferenceSchema()).optional(),
    trigger: z.array(z.lazy(() => createTriggerDefinitionSchema())).optional(),
    condition: z
      .array(z.lazy(() => createPlanDefinitionConditionSchema()))
      .optional(),
    input: z.array(z.lazy(() => createDataRequirementSchema())).optional(),
    output: z.array(z.lazy(() => createDataRequirementSchema())).optional(),
    relatedAction: z
      .array(z.lazy(() => createPlanDefinitionRelatedActionSchema()))
      .optional(),
    timingDateTime: z.string().optional(),
    _timingDateTime: z.lazy(() => createElementSchema()).optional(),
    timingAge: z.lazy(() => createAgeSchema()).optional(),
    timingPeriod: z.lazy(() => createPeriodSchema()).optional(),
    timingDuration: z.lazy(() => createDurationSchema()).optional(),
    timingRange: z.lazy(() => createRangeSchema()).optional(),
    timingTiming: z.lazy(() => createTimingSchema()).optional(),
    participant: z
      .array(z.lazy(() => createPlanDefinitionParticipantSchema()))
      .optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    groupingBehavior: z
      .enum(["visual-group", "logical-group", "sentence-group"])
      .optional(),
    _groupingBehavior: z.lazy(() => createElementSchema()).optional(),
    selectionBehavior: z
      .enum([
        "any",
        "all",
        "all-or-none",
        "exactly-one",
        "at-most-one",
        "one-or-more",
      ])
      .optional(),
    _selectionBehavior: z.lazy(() => createElementSchema()).optional(),
    requiredBehavior: z
      .enum(["must", "could", "must-unless-documented"])
      .optional(),
    _requiredBehavior: z.lazy(() => createElementSchema()).optional(),
    precheckBehavior: z.enum(["yes", "no"]).optional(),
    _precheckBehavior: z.lazy(() => createElementSchema()).optional(),
    cardinalityBehavior: z.enum(["single", "multiple"]).optional(),
    _cardinalityBehavior: z.lazy(() => createElementSchema()).optional(),
    definitionCanonical: z.string().optional(),
    _definitionCanonical: z.lazy(() => createElementSchema()).optional(),
    definitionUri: z.string().optional(),
    _definitionUri: z.lazy(() => createElementSchema()).optional(),
    transform: primitives.createCanonicalSchema().optional(),
    dynamicValue: z
      .array(z.lazy(() => createPlanDefinitionDynamicValueSchema()))
      .optional(),
    action: z
      .array(z.lazy(() => createPlanDefinitionActionSchema()))
      .optional(),
  });

  return baseSchema;
}
