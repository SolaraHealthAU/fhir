import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createAnnotationSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createEffectEvidenceSynthesisCertaintySubcomponentSchema() {
  const baseSchema: z.ZodType<types.EffectEvidenceSynthesisCertaintySubcomponent> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: z.lazy(() => createCodeableConceptSchema()).optional(),
      rating: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
      note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    });

  return baseSchema;
}
