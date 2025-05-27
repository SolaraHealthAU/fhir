import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createExpressionSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createRequestGroupConditionSchema() {
  return getCachedSchema("RequestGroupCondition", () => {
    const baseSchema: z.ZodType<types.RequestGroupCondition> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      kind: primitives.getCodeSchema().optional(),
      _kind: z.lazy(() => createElementSchema()).optional(),
      expression: createExpressionSchema().optional(),
    });

    return baseSchema;
  });
}
