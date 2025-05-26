import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createLocationHoursOfOperationSchema() {
  const baseSchema: z.ZodType<types.LocationHoursOfOperation> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    daysOfWeek: z.array(primitives.createCodeSchema()).optional(),
    _daysOfWeek: z.array(z.lazy(() => createElementSchema())).optional(),
    allDay: primitives.createBooleanSchema().optional(),
    _allDay: z.lazy(() => createElementSchema()).optional(),
    openingTime: primitives.createTimeSchema().optional(),
    _openingTime: z.lazy(() => createElementSchema()).optional(),
    closingTime: primitives.createTimeSchema().optional(),
    _closingTime: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
