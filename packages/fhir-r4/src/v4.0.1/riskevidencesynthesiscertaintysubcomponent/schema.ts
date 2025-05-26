import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createAnnotationSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createRiskEvidenceSynthesisCertaintySubcomponentSchema() {
  const baseSchema: z.ZodType<types.RiskEvidenceSynthesisCertaintySubcomponent> =
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
