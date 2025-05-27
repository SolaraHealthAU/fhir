import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createDurationSchema,
  createRangeSchema,
  createPeriodSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTimingRepeatSchema() {
  return getCachedSchema("TimingRepeat", () => {
    const baseSchema: z.ZodType<types.TimingRepeat> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      boundsDuration: createDurationSchema().optional(),
      boundsRange: createRangeSchema().optional(),
      boundsPeriod: createPeriodSchema().optional(),
      count: primitives.getPositiveIntSchema().optional(),
      _count: z.lazy(() => createElementSchema()).optional(),
      countMax: primitives.getPositiveIntSchema().optional(),
      _countMax: z.lazy(() => createElementSchema()).optional(),
      duration: primitives.getDecimalSchema().optional(),
      _duration: z.lazy(() => createElementSchema()).optional(),
      durationMax: primitives.getDecimalSchema().optional(),
      _durationMax: z.lazy(() => createElementSchema()).optional(),
      durationUnit: z.enum(["s", "min", "h", "d", "wk", "mo", "a"]).optional(),
      _durationUnit: z.lazy(() => createElementSchema()).optional(),
      frequency: primitives.getPositiveIntSchema().optional(),
      _frequency: z.lazy(() => createElementSchema()).optional(),
      frequencyMax: primitives.getPositiveIntSchema().optional(),
      _frequencyMax: z.lazy(() => createElementSchema()).optional(),
      period: primitives.getDecimalSchema().optional(),
      _period: z.lazy(() => createElementSchema()).optional(),
      periodMax: primitives.getDecimalSchema().optional(),
      _periodMax: z.lazy(() => createElementSchema()).optional(),
      periodUnit: z.enum(["s", "min", "h", "d", "wk", "mo", "a"]).optional(),
      _periodUnit: z.lazy(() => createElementSchema()).optional(),
      dayOfWeek: z.array(primitives.getCodeSchema()).optional(),
      _dayOfWeek: z.array(z.lazy(() => createElementSchema())).optional(),
      timeOfDay: z.array(primitives.getTimeSchema()).optional(),
      _timeOfDay: z.array(z.lazy(() => createElementSchema())).optional(),
      when: z.array(z.any()).optional(),
      _when: z.array(z.lazy(() => createElementSchema())).optional(),
      offset: primitives.getUnsignedIntSchema().optional(),
      _offset: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
