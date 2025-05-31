import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createEffectEvidenceSynthesisResultsByExposureSchema() {
  return getCachedSchema("EffectEvidenceSynthesisResultsByExposure", () => {
    const baseSchema: z.ZodType<types.EffectEvidenceSynthesisResultsByExposure> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        description: primitives.getStringSchema().optional(),
        _description: createElementSchema().optional(),
        exposureState: z.enum(["exposure", "exposure-alternative"]).optional(),
        _exposureState: createElementSchema().optional(),
        variantState: createCodeableConceptSchema().optional(),
        riskEvidenceSynthesis: createReferenceSchema(),
      });

    return baseSchema;
  });
}
