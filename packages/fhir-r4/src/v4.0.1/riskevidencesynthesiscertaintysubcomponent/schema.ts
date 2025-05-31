import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createAnnotationSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createRiskEvidenceSynthesisCertaintySubcomponentSchema() {
  return getCachedSchema("RiskEvidenceSynthesisCertaintySubcomponent", () => {
    const baseSchema: z.ZodType<types.RiskEvidenceSynthesisCertaintySubcomponent> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        type: createCodeableConceptSchema().optional(),
        rating: z.array(createCodeableConceptSchema()).optional(),
        note: z.array(createAnnotationSchema()).optional(),
      });

    return baseSchema;
  });
}
