import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createTimingSchema,
  createPeriodSchema,
  createQuantitySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCarePlanDetailSchema() {
  return getCachedSchema("CarePlanDetail", () => {
    const baseSchema: z.ZodType<types.CarePlanDetail> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      kind: primitives.getCodeSchema().optional(),
      _kind: createElementSchema().optional(),
      instantiatesCanonical: z
        .array(primitives.getCanonicalSchema())
        .optional(),
      instantiatesUri: z.array(primitives.getUriSchema()).optional(),
      _instantiatesUri: z.array(createElementSchema()).optional(),
      code: createCodeableConceptSchema().optional(),
      reasonCode: z.array(createCodeableConceptSchema()).optional(),
      reasonReference: z.array(createReferenceSchema()).optional(),
      goal: z.array(createReferenceSchema()).optional(),
      status: z
        .enum([
          "not-started",
          "scheduled",
          "in-progress",
          "on-hold",
          "completed",
          "cancelled",
          "stopped",
          "unknown",
          "entered-in-error",
        ])
        .optional(),
      _status: createElementSchema().optional(),
      statusReason: createCodeableConceptSchema().optional(),
      doNotPerform: primitives.getBooleanSchema().optional(),
      _doNotPerform: createElementSchema().optional(),
      scheduledTiming: createTimingSchema().optional(),
      scheduledPeriod: createPeriodSchema().optional(),
      scheduledString: z.string().optional(),
      _scheduledString: createElementSchema().optional(),
      location: createReferenceSchema().optional(),
      performer: z.array(createReferenceSchema()).optional(),
      productCodeableConcept: createCodeableConceptSchema().optional(),
      productReference: createReferenceSchema().optional(),
      dailyAmount: createQuantitySchema().optional(),
      quantity: createQuantitySchema().optional(),
      description: primitives.getStringSchema().optional(),
      _description: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
