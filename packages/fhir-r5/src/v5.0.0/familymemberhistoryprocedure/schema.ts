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

export function createFamilyMemberHistoryProcedureSchema() {
  const baseSchema: z.ZodType<types.FamilyMemberHistoryProcedure> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    code: z.lazy(() => createCodeableConceptSchema()),
    outcome: z.lazy(() => createCodeableConceptSchema()).optional(),
    contributedToDeath: primitives.createBooleanSchema().optional(),
    _contributedToDeath: z.lazy(() => createElementSchema()).optional(),
    performedAge: z.lazy(() => createAgeSchema()).optional(),
    performedRange: z.lazy(() => createRangeSchema()).optional(),
    performedPeriod: z.lazy(() => createPeriodSchema()).optional(),
    performedString: z.string().optional(),
    _performedString: z.lazy(() => createElementSchema()).optional(),
    performedDateTime: z.string().optional(),
    _performedDateTime: z.lazy(() => createElementSchema()).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
  });

  return baseSchema;
}
