import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("FamilyMemberHistoryCondition", () => {
    const baseSchema: z.ZodType<types.FamilyMemberHistoryCondition> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        code: createCodeableConceptSchema(),
        outcome: createCodeableConceptSchema().optional(),
        contributedToDeath: primitives.getBooleanSchema().optional(),
        _contributedToDeath: z.lazy(() => createElementSchema()).optional(),
        onsetAge: createAgeSchema().optional(),
        onsetRange: createRangeSchema().optional(),
        onsetPeriod: createPeriodSchema().optional(),
        onsetString: z.string().optional(),
        _onsetString: z.lazy(() => createElementSchema()).optional(),
        note: z.array(createAnnotationSchema()).optional(),
      });

    return baseSchema;
  });
}
