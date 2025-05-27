import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createAppointmentYearlyTemplateSchema() {
  const baseSchema: z.ZodType<types.AppointmentYearlyTemplate> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    yearInterval: primitives.createPositiveIntSchema().optional(),
    _yearInterval: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
