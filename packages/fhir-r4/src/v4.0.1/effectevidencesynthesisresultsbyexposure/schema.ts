import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createEffectEvidenceSynthesisResultsByExposureSchema() {
  const baseSchema: z.ZodType<types.EffectEvidenceSynthesisResultsByExposure> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      description: primitives.createStringSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      exposureState: z.enum(["exposure", "exposure-alternative"]).optional(),
      _exposureState: z.lazy(() => createElementSchema()).optional(),
      variantState: z.lazy(() => createCodeableConceptSchema()).optional(),
      riskEvidenceSynthesis: z.lazy(() => createReferenceSchema()),
    });

  return baseSchema;
}
