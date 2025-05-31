import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createEffectEvidenceSynthesisCertaintySubcomponentSchema } from "../effectevidencesynthesiscertaintysubcomponent/schema";

/* Generated from FHIR JSON Schema */

export function createEffectEvidenceSynthesisCertaintySchema() {
  return getCachedSchema("EffectEvidenceSynthesisCertainty", () => {
    const baseSchema: z.ZodType<types.EffectEvidenceSynthesisCertainty> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        rating: z.array(createCodeableConceptSchema()).optional(),
        note: z.array(createAnnotationSchema()).optional(),
        certaintySubcomponent: z
          .array(createEffectEvidenceSynthesisCertaintySubcomponentSchema())
          .optional(),
      });

    return baseSchema;
  });
}
