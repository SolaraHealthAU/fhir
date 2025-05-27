import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createResearchSubjectProgressSchema() {
  const baseSchema: z.ZodType<types.ResearchSubjectProgress> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    subjectState: z.lazy(() => createCodeableConceptSchema()).optional(),
    milestone: z.lazy(() => createCodeableConceptSchema()).optional(),
    reason: z.lazy(() => createCodeableConceptSchema()).optional(),
    startDate: primitives.createDateTimeSchema().optional(),
    _startDate: z.lazy(() => createElementSchema()).optional(),
    endDate: primitives.createDateTimeSchema().optional(),
    _endDate: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
