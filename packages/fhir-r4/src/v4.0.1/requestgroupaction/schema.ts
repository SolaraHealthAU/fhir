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
      documentation: z.array(createRelatedArtifactSchema()).optional(),
      condition: z.array(createRequestGroupConditionSchema()).optional(),
      relatedAction: z
        .array(createRequestGroupRelatedActionSchema())
        .optional(),
      timingDateTime: z.string().optional(),
      _timingDateTime: createElementSchema().optional(),
      timingAge: createAgeSchema().optional(),
      timingPeriod: createPeriodSchema().optional(),
      timingDuration: createDurationSchema().optional(),
      timingRange: createRangeSchema().optional(),
      timingTiming: createTimingSchema().optional(),
      participant: z.array(createReferenceSchema()).optional(),
      type: createCodeableConceptSchema().optional(),
      groupingBehavior: primitives.getCodeSchema().optional(),
      _groupingBehavior: createElementSchema().optional(),
      selectionBehavior: primitives.getCodeSchema().optional(),
      _selectionBehavior: createElementSchema().optional(),
      requiredBehavior: primitives.getCodeSchema().optional(),
      _requiredBehavior: createElementSchema().optional(),
      precheckBehavior: primitives.getCodeSchema().optional(),
      _precheckBehavior: createElementSchema().optional(),
      cardinalityBehavior: primitives.getCodeSchema().optional(),
      _cardinalityBehavior: createElementSchema().optional(),
      resource: createReferenceSchema().optional(),
      action: z.array(createRequestGroupActionSchema()).optional(),
    });

    return baseSchema;
  });
}
