import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createHealthcareServiceAvailableTimeSchema() {
  return getCachedSchema("HealthcareServiceAvailableTime", () => {
    const baseSchema: z.ZodType<types.HealthcareServiceAvailableTime> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        daysOfWeek: z
          .enum(["mon", "tue", "wed", "thu", "fri", "sat", "sun"])
          .array()
          .optional(),
        _daysOfWeek: z.array(createElementSchema()).optional(),
        allDay: primitives.getBooleanSchema().optional(),
        _allDay: createElementSchema().optional(),
        availableStartTime: primitives.getTimeSchema().optional(),
        _availableStartTime: createElementSchema().optional(),
        availableEndTime: primitives.getTimeSchema().optional(),
        _availableEndTime: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
