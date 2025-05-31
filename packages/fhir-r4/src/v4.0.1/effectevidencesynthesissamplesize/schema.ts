import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createEffectEvidenceSynthesisSampleSizeSchema() {
  return getCachedSchema("EffectEvidenceSynthesisSampleSize", () => {
    const baseSchema: z.ZodType<types.EffectEvidenceSynthesisSampleSize> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        description: primitives.getStringSchema().optional(),
        _description: createElementSchema().optional(),
        numberOfStudies: primitives.getIntegerSchema().optional(),
        _numberOfStudies: createElementSchema().optional(),
        numberOfParticipants: primitives.getIntegerSchema().optional(),
        _numberOfParticipants: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
