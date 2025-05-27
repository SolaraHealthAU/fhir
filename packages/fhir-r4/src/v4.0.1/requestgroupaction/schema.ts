import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("RequestGroupAction", () => {
    const baseSchema: z.ZodType<types.RequestGroupAction> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      prefix: primitives.getStringSchema().optional(),
      _prefix: z.lazy(() => createElementSchema()).optional(),
      title: primitives.getStringSchema().optional(),
      _title: z.lazy(() => createElementSchema()).optional(),
      description: primitives.getStringSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      textEquivalent: primitives.getStringSchema().optional(),
      _textEquivalent: z.lazy(() => createElementSchema()).optional(),
      priority: primitives.getCodeSchema().optional(),
      _priority: z.lazy(() => createElementSchema()).optional(),
      code: z.array(createCodeableConceptSchema()).optional(),
      documentation: z.array(createRelatedArtifactSchema()).optional(),
      condition: z.array(createRequestGroupConditionSchema()).optional(),
      relatedAction: z
        .array(createRequestGroupRelatedActionSchema())
        .optional(),
      timingDateTime: z.string().optional(),
      _timingDateTime: z.lazy(() => createElementSchema()).optional(),
      timingAge: createAgeSchema().optional(),
      timingPeriod: createPeriodSchema().optional(),
      timingDuration: createDurationSchema().optional(),
      timingRange: createRangeSchema().optional(),
      timingTiming: createTimingSchema().optional(),
      participant: z.array(createReferenceSchema()).optional(),
      type: createCodeableConceptSchema().optional(),
      groupingBehavior: primitives.getCodeSchema().optional(),
      _groupingBehavior: z.lazy(() => createElementSchema()).optional(),
      selectionBehavior: primitives.getCodeSchema().optional(),
      _selectionBehavior: z.lazy(() => createElementSchema()).optional(),
      requiredBehavior: primitives.getCodeSchema().optional(),
      _requiredBehavior: z.lazy(() => createElementSchema()).optional(),
      precheckBehavior: primitives.getCodeSchema().optional(),
      _precheckBehavior: z.lazy(() => createElementSchema()).optional(),
      cardinalityBehavior: primitives.getCodeSchema().optional(),
      _cardinalityBehavior: z.lazy(() => createElementSchema()).optional(),
      resource: createReferenceSchema().optional(),
      action: z.array(createRequestGroupActionSchema()).optional(),
    });

    return baseSchema;
  });
}
