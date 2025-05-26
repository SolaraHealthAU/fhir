import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createConditionStageSchema() {
  const baseSchema: z.ZodType<types.ConditionStage> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    summary: z.lazy(() => createCodeableConceptSchema()).optional(),
    assessment: z.array(z.lazy(() => createReferenceSchema())).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
  });

  return baseSchema;
}
