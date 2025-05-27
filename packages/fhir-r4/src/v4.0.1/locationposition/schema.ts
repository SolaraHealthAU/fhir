import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createLocationPositionSchema() {
  return getCachedSchema("LocationPosition", () => {
    const baseSchema: z.ZodType<types.LocationPosition> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      longitude: primitives.getDecimalSchema(),
      _longitude: z.lazy(() => createElementSchema()).optional(),
      latitude: primitives.getDecimalSchema(),
      _latitude: z.lazy(() => createElementSchema()).optional(),
      altitude: primitives.getDecimalSchema().optional(),
      _altitude: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
