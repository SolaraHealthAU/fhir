import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createRiskEvidenceSynthesisSampleSizeSchema() {
  return getCachedSchema("RiskEvidenceSynthesisSampleSize", () => {
    const baseSchema: z.ZodType<types.RiskEvidenceSynthesisSampleSize> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        description: primitives.getStringSchema().optional(),
        _description: z.lazy(() => createElementSchema()).optional(),
        numberOfStudies: primitives.getIntegerSchema().optional(),
        _numberOfStudies: z.lazy(() => createElementSchema()).optional(),
        numberOfParticipants: primitives.getIntegerSchema().optional(),
        _numberOfParticipants: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
