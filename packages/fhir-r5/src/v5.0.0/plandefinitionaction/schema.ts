import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createRelatedArtifactSchema,
  createReferenceSchema,
  createTriggerDefinitionSchema,
  createAgeSchema,
  createDurationSchema,
  createRangeSchema,
  createTimingSchema,
  createCodeableReferenceSchema,
} from "../core/schema";
import { createPlanDefinitionConditionSchema } from "../plandefinitioncondition/schema";
import { createPlanDefinitionInputSchema } from "../plandefinitioninput/schema";
import { createPlanDefinitionOutputSchema } from "../plandefinitionoutput/schema";
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
    linkId: primitives.createStringSchema().optional(),
    _linkId: z.lazy(() => createElementSchema()).optional(),
    prefix: primitives.createStringSchema().optional(),
    _prefix: z.lazy(() => createElementSchema()).optional(),
    title: primitives.createStringSchema().optional(),
    _title: z.lazy(() => createElementSchema()).optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    textEquivalent: primitives.createMarkdownSchema().optional(),
    _textEquivalent: z.lazy(() => createElementSchema()).optional(),
    priority: primitives.createCodeSchema().optional(),
    _priority: z.lazy(() => createElementSchema()).optional(),
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
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
    subjectCanonical: z.string().optional(),
    _subjectCanonical: z.lazy(() => createElementSchema()).optional(),
    trigger: z.array(z.lazy(() => createTriggerDefinitionSchema())).optional(),
    condition: z
      .array(z.lazy(() => createPlanDefinitionConditionSchema()))
      .optional(),
    input: z.array(z.lazy(() => createPlanDefinitionInputSchema())).optional(),
    output: z
      .array(z.lazy(() => createPlanDefinitionOutputSchema()))
      .optional(),
    relatedAction: z
      .array(z.lazy(() => createPlanDefinitionRelatedActionSchema()))
      .optional(),
    timingAge: z.lazy(() => createAgeSchema()).optional(),
    timingDuration: z.lazy(() => createDurationSchema()).optional(),
    timingRange: z.lazy(() => createRangeSchema()).optional(),
    timingTiming: z.lazy(() => createTimingSchema()).optional(),
    location: z.lazy(() => createCodeableReferenceSchema()).optional(),
    participant: z
      .array(z.lazy(() => createPlanDefinitionParticipantSchema()))
      .optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    groupingBehavior: primitives.createCodeSchema().optional(),
    _groupingBehavior: z.lazy(() => createElementSchema()).optional(),
    selectionBehavior: primitives.createCodeSchema().optional(),
    _selectionBehavior: z.lazy(() => createElementSchema()).optional(),
    requiredBehavior: primitives.createCodeSchema().optional(),
    _requiredBehavior: z.lazy(() => createElementSchema()).optional(),
    precheckBehavior: primitives.createCodeSchema().optional(),
    _precheckBehavior: z.lazy(() => createElementSchema()).optional(),
    cardinalityBehavior: primitives.createCodeSchema().optional(),
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
