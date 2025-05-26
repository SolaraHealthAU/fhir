import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createDurationSchema,
  createRangeSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createPlanDefinitionRelatedActionSchema() {
  const baseSchema: z.ZodType<types.PlanDefinitionRelatedAction> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    actionId: primitives.createIdSchema().optional(),
    _actionId: z.lazy(() => createElementSchema()).optional(),
    relationship: z
      .enum([
        "before-start",
        "before",
        "before-end",
        "concurrent-with-start",
        "concurrent",
        "concurrent-with-end",
        "after-start",
        "after",
        "after-end",
      ])
      .optional(),
    _relationship: z.lazy(() => createElementSchema()).optional(),
    offsetDuration: z.lazy(() => createDurationSchema()).optional(),
    offsetRange: z.lazy(() => createRangeSchema()).optional(),
  });

  return baseSchema;
}
