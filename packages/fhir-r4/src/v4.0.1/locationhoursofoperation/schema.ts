import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createLocationHoursOfOperationSchema() {
  return getCachedSchema("LocationHoursOfOperation", () => {
    const baseSchema: z.ZodType<types.LocationHoursOfOperation> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        daysOfWeek: z.array(primitives.getCodeSchema()).optional(),
        _daysOfWeek: z.array(z.lazy(() => createElementSchema())).optional(),
        allDay: primitives.getBooleanSchema().optional(),
        _allDay: z.lazy(() => createElementSchema()).optional(),
        openingTime: primitives.getTimeSchema().optional(),
        _openingTime: z.lazy(() => createElementSchema()).optional(),
        closingTime: primitives.getTimeSchema().optional(),
        _closingTime: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
