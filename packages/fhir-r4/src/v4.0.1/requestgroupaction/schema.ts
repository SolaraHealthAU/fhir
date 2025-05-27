import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createRelatedArtifactSchema,
  createAgeSchema,
  createPeriodSchema,
  createDurationSchema,
  createRangeSchema,
  createTimingSchema,
  createReferenceSchema,
} from "../core/schema";
import { createRequestGroupConditionSchema } from "../requestgroupcondition/schema";
import { createRequestGroupRelatedActionSchema } from "../requestgrouprelatedaction/schema";

/* Generated from FHIR JSON Schema */

export function createRequestGroupActionSchema() {
  const baseSchema: z.ZodType<types.RequestGroupAction> = z.object({
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
    documentation: z
      .array(z.lazy(() => createRelatedArtifactSchema()))
      .optional(),
    condition: z
      .array(z.lazy(() => createRequestGroupConditionSchema()))
      .optional(),
    relatedAction: z
      .array(z.lazy(() => createRequestGroupRelatedActionSchema()))
      .optional(),
    timingDateTime: z.string().optional(),
    _timingDateTime: z.lazy(() => createElementSchema()).optional(),
    timingAge: z.lazy(() => createAgeSchema()).optional(),
    timingPeriod: z.lazy(() => createPeriodSchema()).optional(),
    timingDuration: z.lazy(() => createDurationSchema()).optional(),
    timingRange: z.lazy(() => createRangeSchema()).optional(),
    timingTiming: z.lazy(() => createTimingSchema()).optional(),
    participant: z.array(z.lazy(() => createReferenceSchema())).optional(),
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
    action: z.array(z.lazy(() => createRequestGroupActionSchema())).optional(),
  });

  return baseSchema;
}
