import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createDurationSchema,
  createRangeSchema,
  createPeriodSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTimingRepeatSchema() {
  const baseSchema: z.ZodType<types.TimingRepeat> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    boundsDuration: z.lazy(() => createDurationSchema()).optional(),
    boundsRange: z.lazy(() => createRangeSchema()).optional(),
    boundsPeriod: z.lazy(() => createPeriodSchema()).optional(),
    count: primitives.createPositiveIntSchema().optional(),
    _count: z.lazy(() => createElementSchema()).optional(),
    countMax: primitives.createPositiveIntSchema().optional(),
    _countMax: z.lazy(() => createElementSchema()).optional(),
    duration: primitives.createDecimalSchema().optional(),
    _duration: z.lazy(() => createElementSchema()).optional(),
    durationMax: primitives.createDecimalSchema().optional(),
    _durationMax: z.lazy(() => createElementSchema()).optional(),
    durationUnit: z.enum(["s", "min", "h", "d", "wk", "mo", "a"]).optional(),
    _durationUnit: z.lazy(() => createElementSchema()).optional(),
    frequency: primitives.createPositiveIntSchema().optional(),
    _frequency: z.lazy(() => createElementSchema()).optional(),
    frequencyMax: primitives.createPositiveIntSchema().optional(),
    _frequencyMax: z.lazy(() => createElementSchema()).optional(),
    period: primitives.createDecimalSchema().optional(),
    _period: z.lazy(() => createElementSchema()).optional(),
    periodMax: primitives.createDecimalSchema().optional(),
    _periodMax: z.lazy(() => createElementSchema()).optional(),
    periodUnit: z.enum(["s", "min", "h", "d", "wk", "mo", "a"]).optional(),
    _periodUnit: z.lazy(() => createElementSchema()).optional(),
    dayOfWeek: z.array(primitives.createCodeSchema()).optional(),
    _dayOfWeek: z.array(z.lazy(() => createElementSchema())).optional(),
    timeOfDay: z.array(primitives.createTimeSchema()).optional(),
    _timeOfDay: z.array(z.lazy(() => createElementSchema())).optional(),
    when: z.array(z.any()).optional(),
    _when: z.array(z.lazy(() => createElementSchema())).optional(),
    offset: primitives.createUnsignedIntSchema().optional(),
    _offset: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
