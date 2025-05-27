import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createRiskEvidenceSynthesisCertaintySubcomponentSchema } from "../riskevidencesynthesiscertaintysubcomponent/schema";

/* Generated from FHIR JSON Schema */

export function createRiskEvidenceSynthesisCertaintySchema() {
  const baseSchema: z.ZodType<types.RiskEvidenceSynthesisCertainty> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    rating: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    certaintySubcomponent: z
      .array(
        z.lazy(() => createRiskEvidenceSynthesisCertaintySubcomponentSchema()),
      )
      .optional(),
  });

  return baseSchema;
}
