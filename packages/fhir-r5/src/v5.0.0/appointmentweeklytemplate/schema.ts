import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createAppointmentWeeklyTemplateSchema() {
  const baseSchema: z.ZodType<types.AppointmentWeeklyTemplate> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    monday: primitives.createBooleanSchema().optional(),
    _monday: z.lazy(() => createElementSchema()).optional(),
    tuesday: primitives.createBooleanSchema().optional(),
    _tuesday: z.lazy(() => createElementSchema()).optional(),
    wednesday: primitives.createBooleanSchema().optional(),
    _wednesday: z.lazy(() => createElementSchema()).optional(),
    thursday: primitives.createBooleanSchema().optional(),
    _thursday: z.lazy(() => createElementSchema()).optional(),
    friday: primitives.createBooleanSchema().optional(),
    _friday: z.lazy(() => createElementSchema()).optional(),
    saturday: primitives.createBooleanSchema().optional(),
    _saturday: z.lazy(() => createElementSchema()).optional(),
    sunday: primitives.createBooleanSchema().optional(),
    _sunday: z.lazy(() => createElementSchema()).optional(),
    weekInterval: primitives.createPositiveIntSchema().optional(),
    _weekInterval: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
