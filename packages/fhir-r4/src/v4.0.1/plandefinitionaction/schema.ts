import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("PlanDefinitionAction", () => {
    const baseSchema: z.ZodType<types.PlanDefinitionAction> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      prefix: primitives.getStringSchema().optional(),
      _prefix: createElementSchema().optional(),
      title: primitives.getStringSchema().optional(),
      _title: createElementSchema().optional(),
      description: primitives.getStringSchema().optional(),
      _description: createElementSchema().optional(),
      textEquivalent: primitives.getStringSchema().optional(),
      _textEquivalent: createElementSchema().optional(),
      priority: primitives.getCodeSchema().optional(),
      _priority: createElementSchema().optional(),
      code: z.array(createCodeableConceptSchema()).optional(),
      reason: z.array(createCodeableConceptSchema()).optional(),
      documentation: z.array(createRelatedArtifactSchema()).optional(),
      goalId: z.array(primitives.getIdSchema()).optional(),
      _goalId: z.array(createElementSchema()).optional(),
      subjectCodeableConcept: createCodeableConceptSchema().optional(),
      subjectReference: createReferenceSchema().optional(),
      trigger: z.array(createTriggerDefinitionSchema()).optional(),
      condition: z.array(createPlanDefinitionConditionSchema()).optional(),
      input: z.array(createDataRequirementSchema()).optional(),
      output: z.array(createDataRequirementSchema()).optional(),
      relatedAction: z
        .array(createPlanDefinitionRelatedActionSchema())
        .optional(),
      timingDateTime: z.string().optional(),
      _timingDateTime: createElementSchema().optional(),
      timingAge: createAgeSchema().optional(),
      timingPeriod: createPeriodSchema().optional(),
      timingDuration: createDurationSchema().optional(),
      timingRange: createRangeSchema().optional(),
      timingTiming: createTimingSchema().optional(),
      participant: z.array(createPlanDefinitionParticipantSchema()).optional(),
      type: createCodeableConceptSchema().optional(),
      groupingBehavior: z
        .enum(["visual-group", "logical-group", "sentence-group"])
        .optional(),
      _groupingBehavior: createElementSchema().optional(),
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
      _selectionBehavior: createElementSchema().optional(),
      requiredBehavior: z
        .enum(["must", "could", "must-unless-documented"])
        .optional(),
      _requiredBehavior: createElementSchema().optional(),
      precheckBehavior: z.enum(["yes", "no"]).optional(),
      _precheckBehavior: createElementSchema().optional(),
      cardinalityBehavior: z.enum(["single", "multiple"]).optional(),
      _cardinalityBehavior: createElementSchema().optional(),
      definitionCanonical: z.string().optional(),
      _definitionCanonical: createElementSchema().optional(),
      definitionUri: z.string().optional(),
      _definitionUri: createElementSchema().optional(),
      transform: primitives.getCanonicalSchema().optional(),
      dynamicValue: z
        .array(createPlanDefinitionDynamicValueSchema())
        .optional(),
      action: z.array(createPlanDefinitionActionSchema()).optional(),
    });

    return baseSchema;
  });
}
