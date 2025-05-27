import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createRelatedArtifactSchema,
  createReferenceSchema,
  createAgeSchema,
  createPeriodSchema,
  createDurationSchema,
  createRangeSchema,
  createTimingSchema,
  createCodeableReferenceSchema,
} from "../core/schema";
import { createRequestOrchestrationConditionSchema } from "../requestorchestrationcondition/schema";
import { createRequestOrchestrationInputSchema } from "../requestorchestrationinput/schema";
import { createRequestOrchestrationOutputSchema } from "../requestorchestrationoutput/schema";
import { createRequestOrchestrationRelatedActionSchema } from "../requestorchestrationrelatedaction/schema";
import { createRequestOrchestrationParticipantSchema } from "../requestorchestrationparticipant/schema";
import { createRequestOrchestrationDynamicValueSchema } from "../requestorchestrationdynamicvalue/schema";

/* Generated from FHIR JSON Schema */

export function createRequestOrchestrationActionSchema() {
  const baseSchema: z.ZodType<types.RequestOrchestrationAction> = z.object({
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
    code: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    documentation: z
      .array(z.lazy(() => createRelatedArtifactSchema()))
      .optional(),
    goal: z.array(z.lazy(() => createReferenceSchema())).optional(),
    condition: z
      .array(z.lazy(() => createRequestOrchestrationConditionSchema()))
      .optional(),
    input: z
      .array(z.lazy(() => createRequestOrchestrationInputSchema()))
      .optional(),
    output: z
      .array(z.lazy(() => createRequestOrchestrationOutputSchema()))
      .optional(),
    relatedAction: z
      .array(z.lazy(() => createRequestOrchestrationRelatedActionSchema()))
      .optional(),
    timingDateTime: z.string().optional(),
    _timingDateTime: z.lazy(() => createElementSchema()).optional(),
    timingAge: z.lazy(() => createAgeSchema()).optional(),
    timingPeriod: z.lazy(() => createPeriodSchema()).optional(),
    timingDuration: z.lazy(() => createDurationSchema()).optional(),
    timingRange: z.lazy(() => createRangeSchema()).optional(),
    timingTiming: z.lazy(() => createTimingSchema()).optional(),
    location: z.lazy(() => createCodeableReferenceSchema()).optional(),
    participant: z
      .array(z.lazy(() => createRequestOrchestrationParticipantSchema()))
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
    resource: z.lazy(() => createReferenceSchema()).optional(),
    definitionCanonical: z.string().optional(),
    _definitionCanonical: z.lazy(() => createElementSchema()).optional(),
    definitionUri: z.string().optional(),
    _definitionUri: z.lazy(() => createElementSchema()).optional(),
    transform: primitives.createCanonicalSchema().optional(),
    dynamicValue: z
      .array(z.lazy(() => createRequestOrchestrationDynamicValueSchema()))
      .optional(),
    action: z
      .array(z.lazy(() => createRequestOrchestrationActionSchema()))
      .optional(),
  });

  return baseSchema;
}
