import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createHealthcareServiceNotAvailableSchema() {
  return getCachedSchema("HealthcareServiceNotAvailable", () => {
    const baseSchema: z.ZodType<types.HealthcareServiceNotAvailable> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        description: primitives.getStringSchema(),
        _description: z.lazy(() => createElementSchema()).optional(),
        during: createPeriodSchema().optional(),
      });

    return baseSchema;
  });
}
