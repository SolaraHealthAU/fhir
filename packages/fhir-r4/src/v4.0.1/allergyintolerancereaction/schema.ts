import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createAnnotationSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createAllergyIntoleranceReactionSchema() {
  return getCachedSchema("AllergyIntoleranceReaction", () => {
    const baseSchema: z.ZodType<types.AllergyIntoleranceReaction> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        substance: createCodeableConceptSchema().optional(),
        manifestation: z.array(createCodeableConceptSchema()),
        description: primitives.getStringSchema().optional(),
        _description: z.lazy(() => createElementSchema()).optional(),
        onset: primitives.getDateTimeSchema().optional(),
        _onset: z.lazy(() => createElementSchema()).optional(),
        severity: z.enum(["mild", "moderate", "severe"]).optional(),
        _severity: z.lazy(() => createElementSchema()).optional(),
        exposureRoute: createCodeableConceptSchema().optional(),
        note: z.array(createAnnotationSchema()).optional(),
      });

    return baseSchema;
  });
}
