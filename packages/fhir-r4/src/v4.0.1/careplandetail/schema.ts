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
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      kind: primitives.getCodeSchema().optional(),
      _kind: z.lazy(() => createElementSchema()).optional(),
      instantiatesCanonical: z
        .array(primitives.getCanonicalSchema())
        .optional(),
      instantiatesUri: z.array(primitives.getUriSchema()).optional(),
      _instantiatesUri: z.array(z.lazy(() => createElementSchema())).optional(),
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
      _status: z.lazy(() => createElementSchema()).optional(),
      statusReason: createCodeableConceptSchema().optional(),
      doNotPerform: primitives.getBooleanSchema().optional(),
      _doNotPerform: z.lazy(() => createElementSchema()).optional(),
      scheduledTiming: createTimingSchema().optional(),
      scheduledPeriod: createPeriodSchema().optional(),
      scheduledString: z.string().optional(),
      _scheduledString: z.lazy(() => createElementSchema()).optional(),
      location: createReferenceSchema().optional(),
      performer: z.array(createReferenceSchema()).optional(),
      productCodeableConcept: createCodeableConceptSchema().optional(),
      productReference: createReferenceSchema().optional(),
      dailyAmount: createQuantitySchema().optional(),
      quantity: createQuantitySchema().optional(),
      description: primitives.getStringSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
