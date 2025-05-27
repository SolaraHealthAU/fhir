import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createResearchStudyRecruitmentSchema() {
  const baseSchema: z.ZodType<types.ResearchStudyRecruitment> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    targetNumber: primitives.createUnsignedIntSchema().optional(),
    _targetNumber: z.lazy(() => createElementSchema()).optional(),
    actualNumber: primitives.createUnsignedIntSchema().optional(),
    _actualNumber: z.lazy(() => createElementSchema()).optional(),
    eligibility: z.lazy(() => createReferenceSchema()).optional(),
    actualGroup: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
