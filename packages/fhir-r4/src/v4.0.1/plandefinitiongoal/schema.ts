import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createRelatedArtifactSchema,
} from "../core/schema";
import { createPlanDefinitionTargetSchema } from "../plandefinitiontarget/schema";

/* Generated from FHIR JSON Schema */

export function createPlanDefinitionGoalSchema() {
  const baseSchema: z.ZodType<types.PlanDefinitionGoal> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    category: z.lazy(() => createCodeableConceptSchema()).optional(),
    description: z.lazy(() => createCodeableConceptSchema()),
    priority: z.lazy(() => createCodeableConceptSchema()).optional(),
    start: z.lazy(() => createCodeableConceptSchema()).optional(),
    addresses: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    documentation: z
      .array(z.lazy(() => createRelatedArtifactSchema()))
      .optional(),
    target: z
      .array(z.lazy(() => createPlanDefinitionTargetSchema()))
      .optional(),
  });

  return baseSchema;
}
