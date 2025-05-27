import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createRelatedArtifactSchema,
} from "../core/schema";
import { createPlanDefinitionTargetSchema } from "../plandefinitiontarget/schema";

/* Generated from FHIR JSON Schema */

export function createPlanDefinitionGoalSchema() {
  return getCachedSchema("PlanDefinitionGoal", () => {
    const baseSchema: z.ZodType<types.PlanDefinitionGoal> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      category: createCodeableConceptSchema().optional(),
      description: createCodeableConceptSchema(),
      priority: createCodeableConceptSchema().optional(),
      start: createCodeableConceptSchema().optional(),
      addresses: z.array(createCodeableConceptSchema()).optional(),
      documentation: z.array(createRelatedArtifactSchema()).optional(),
      target: z.array(createPlanDefinitionTargetSchema()).optional(),
    });

    return baseSchema;
  });
}
