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
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      boundsDuration: createDurationSchema().optional(),
      boundsRange: createRangeSchema().optional(),
      boundsPeriod: createPeriodSchema().optional(),
      count: primitives.getPositiveIntSchema().optional(),
      _count: createElementSchema().optional(),
      countMax: primitives.getPositiveIntSchema().optional(),
      _countMax: createElementSchema().optional(),
      duration: primitives.getDecimalSchema().optional(),
      _duration: createElementSchema().optional(),
      durationMax: primitives.getDecimalSchema().optional(),
      _durationMax: createElementSchema().optional(),
      durationUnit: z.enum(["s", "min", "h", "d", "wk", "mo", "a"]).optional(),
      _durationUnit: createElementSchema().optional(),
      frequency: primitives.getPositiveIntSchema().optional(),
      _frequency: createElementSchema().optional(),
      frequencyMax: primitives.getPositiveIntSchema().optional(),
      _frequencyMax: createElementSchema().optional(),
      period: primitives.getDecimalSchema().optional(),
      _period: createElementSchema().optional(),
      periodMax: primitives.getDecimalSchema().optional(),
      _periodMax: createElementSchema().optional(),
      periodUnit: z.enum(["s", "min", "h", "d", "wk", "mo", "a"]).optional(),
      _periodUnit: createElementSchema().optional(),
      dayOfWeek: z.array(primitives.getCodeSchema()).optional(),
      _dayOfWeek: z.array(createElementSchema()).optional(),
      timeOfDay: z.array(primitives.getTimeSchema()).optional(),
      _timeOfDay: z.array(createElementSchema()).optional(),
      when: z
        .enum([
          "MORN",
          "MORN.early",
          "MORN.late",
          "NOON",
          "AFT",
          "AFT.early",
          "AFT.late",
          "EVE",
          "EVE.early",
          "EVE.late",
          "NIGHT",
          "PHS",
          "HS",
          "WAKE",
          "C",
          "CM",
          "CD",
          "CV",
          "AC",
          "ACM",
          "ACD",
          "ACV",
          "PC",
          "PCM",
          "PCD",
          "PCV",
        ])
        .array()
        .optional(),
      _when: z.array(createElementSchema()).optional(),
      offset: primitives.getUnsignedIntSchema().optional(),
      _offset: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
