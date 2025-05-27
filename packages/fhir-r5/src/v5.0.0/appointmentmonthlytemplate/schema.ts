import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodingSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createAppointmentMonthlyTemplateSchema() {
  const baseSchema: z.ZodType<types.AppointmentMonthlyTemplate> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    dayOfMonth: primitives.createPositiveIntSchema().optional(),
    _dayOfMonth: z.lazy(() => createElementSchema()).optional(),
    nthWeekOfMonth: z.lazy(() => createCodingSchema()).optional(),
    dayOfWeek: z.lazy(() => createCodingSchema()).optional(),
    monthInterval: primitives.createPositiveIntSchema().optional(),
    _monthInterval: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
