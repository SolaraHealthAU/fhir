import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createAvailabilityAvailableTimeSchema() {
  const baseSchema: z.ZodType<types.AvailabilityAvailableTime> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    daysOfWeek: z.array(primitives.createCodeSchema()).optional(),
    _daysOfWeek: z.array(z.lazy(() => createElementSchema())).optional(),
    allDay: primitives.createBooleanSchema().optional(),
    _allDay: z.lazy(() => createElementSchema()).optional(),
    availableStartTime: primitives.createTimeSchema().optional(),
    _availableStartTime: z.lazy(() => createElementSchema()).optional(),
    availableEndTime: primitives.createTimeSchema().optional(),
    _availableEndTime: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
