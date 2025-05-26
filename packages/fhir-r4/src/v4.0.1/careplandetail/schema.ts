import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.CarePlanDetail> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    kind: primitives.createCodeSchema().optional(),
    _kind: z.lazy(() => createElementSchema()).optional(),
    instantiatesCanonical: z
      .array(primitives.createCanonicalSchema())
      .optional(),
    instantiatesUri: z.array(primitives.createUriSchema()).optional(),
    _instantiatesUri: z.array(z.lazy(() => createElementSchema())).optional(),
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
    reasonCode: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    reasonReference: z.array(z.lazy(() => createReferenceSchema())).optional(),
    goal: z.array(z.lazy(() => createReferenceSchema())).optional(),
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
    statusReason: z.lazy(() => createCodeableConceptSchema()).optional(),
    doNotPerform: primitives.createBooleanSchema().optional(),
    _doNotPerform: z.lazy(() => createElementSchema()).optional(),
    scheduledTiming: z.lazy(() => createTimingSchema()).optional(),
    scheduledPeriod: z.lazy(() => createPeriodSchema()).optional(),
    scheduledString: z.string().optional(),
    _scheduledString: z.lazy(() => createElementSchema()).optional(),
    location: z.lazy(() => createReferenceSchema()).optional(),
    performer: z.array(z.lazy(() => createReferenceSchema())).optional(),
    productCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    productReference: z.lazy(() => createReferenceSchema()).optional(),
    dailyAmount: z.lazy(() => createQuantitySchema()).optional(),
    quantity: z.lazy(() => createQuantitySchema()).optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
