import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createLocationPositionSchema() {
  const baseSchema: z.ZodType<types.LocationPosition> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    longitude: primitives.createDecimalSchema().optional(),
    _longitude: z.lazy(() => createElementSchema()).optional(),
    latitude: primitives.createDecimalSchema().optional(),
    _latitude: z.lazy(() => createElementSchema()).optional(),
    altitude: primitives.createDecimalSchema().optional(),
    _altitude: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
