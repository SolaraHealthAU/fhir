import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createAgeSchema,
  createRangeSchema,
  createPeriodSchema,
  createAnnotationSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createFamilyMemberHistoryConditionSchema() {
  const baseSchema: z.ZodType<types.FamilyMemberHistoryCondition> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    code: z.lazy(() => createCodeableConceptSchema()),
    outcome: z.lazy(() => createCodeableConceptSchema()).optional(),
    contributedToDeath: primitives.createBooleanSchema().optional(),
    _contributedToDeath: z.lazy(() => createElementSchema()).optional(),
    onsetAge: z.lazy(() => createAgeSchema()).optional(),
    onsetRange: z.lazy(() => createRangeSchema()).optional(),
    onsetPeriod: z.lazy(() => createPeriodSchema()).optional(),
    onsetString: z.string().optional(),
    _onsetString: z.lazy(() => createElementSchema()).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
  });

  return baseSchema;
}
