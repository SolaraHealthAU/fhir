import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createExpressionSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createPlanDefinitionConditionSchema() {
  const baseSchema: z.ZodType<types.PlanDefinitionCondition> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    kind: primitives.createCodeSchema().optional(),
    _kind: z.lazy(() => createElementSchema()).optional(),
    expression: z.lazy(() => createExpressionSchema()).optional(),
  });

  return baseSchema;
}
