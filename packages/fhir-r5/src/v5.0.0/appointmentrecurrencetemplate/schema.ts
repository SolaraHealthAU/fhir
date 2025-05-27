import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";
import { createAppointmentWeeklyTemplateSchema } from "../appointmentweeklytemplate/schema";
import { createAppointmentMonthlyTemplateSchema } from "../appointmentmonthlytemplate/schema";
import { createAppointmentYearlyTemplateSchema } from "../appointmentyearlytemplate/schema";

/* Generated from FHIR JSON Schema */

export function createAppointmentRecurrenceTemplateSchema() {
  const baseSchema: z.ZodType<types.AppointmentRecurrenceTemplate> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    timezone: z.lazy(() => createCodeableConceptSchema()).optional(),
    recurrenceType: z.lazy(() => createCodeableConceptSchema()),
    lastOccurrenceDate: primitives.createDateSchema().optional(),
    _lastOccurrenceDate: z.lazy(() => createElementSchema()).optional(),
    occurrenceCount: primitives.createPositiveIntSchema().optional(),
    _occurrenceCount: z.lazy(() => createElementSchema()).optional(),
    occurrenceDate: z.array(primitives.createDateSchema()).optional(),
    _occurrenceDate: z.array(z.lazy(() => createElementSchema())).optional(),
    weeklyTemplate: z
      .lazy(() => createAppointmentWeeklyTemplateSchema())
      .optional(),
    monthlyTemplate: z
      .lazy(() => createAppointmentMonthlyTemplateSchema())
      .optional(),
    yearlyTemplate: z
      .lazy(() => createAppointmentYearlyTemplateSchema())
      .optional(),
    excludingDate: z.array(primitives.createDateSchema()).optional(),
    _excludingDate: z.array(z.lazy(() => createElementSchema())).optional(),
    excludingRecurrenceId: z
      .array(primitives.createPositiveIntSchema())
      .optional(),
    _excludingRecurrenceId: z
      .array(z.lazy(() => createElementSchema()))
      .optional(),
  });

  return baseSchema;
}
