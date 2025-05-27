import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createResearchStudyProgressStatusSchema() {
  const baseSchema: z.ZodType<types.ResearchStudyProgressStatus> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    state: z.lazy(() => createCodeableConceptSchema()),
    actual: primitives.createBooleanSchema().optional(),
    _actual: z.lazy(() => createElementSchema()).optional(),
    period: z.lazy(() => createPeriodSchema()).optional(),
  });

  return baseSchema;
}
