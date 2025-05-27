import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createHealthcareServiceEligibilitySchema() {
  return getCachedSchema("HealthcareServiceEligibility", () => {
    const baseSchema: z.ZodType<types.HealthcareServiceEligibility> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        code: createCodeableConceptSchema().optional(),
        comment: primitives.getMarkdownSchema().optional(),
        _comment: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
