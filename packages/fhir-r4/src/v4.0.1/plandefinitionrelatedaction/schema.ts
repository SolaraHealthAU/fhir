import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createDurationSchema,
  createRangeSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createPlanDefinitionRelatedActionSchema() {
  return getCachedSchema("PlanDefinitionRelatedAction", () => {
    const baseSchema: z.ZodType<types.PlanDefinitionRelatedAction> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        actionId: primitives.getIdSchema().optional(),
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
        offsetDuration: createDurationSchema().optional(),
        offsetRange: createRangeSchema().optional(),
      });

    return baseSchema;
  });
}
