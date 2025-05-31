import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createRiskEvidenceSynthesisCertaintySubcomponentSchema } from "../riskevidencesynthesiscertaintysubcomponent/schema";

/* Generated from FHIR JSON Schema */

export function createRiskEvidenceSynthesisCertaintySchema() {
  return getCachedSchema("RiskEvidenceSynthesisCertainty", () => {
    const baseSchema: z.ZodType<types.RiskEvidenceSynthesisCertainty> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        rating: z.array(createCodeableConceptSchema()).optional(),
        note: z.array(createAnnotationSchema()).optional(),
        certaintySubcomponent: z
          .array(createRiskEvidenceSynthesisCertaintySubcomponentSchema())
          .optional(),
      });

    return baseSchema;
  });
}
