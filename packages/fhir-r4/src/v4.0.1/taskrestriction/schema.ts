import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createPeriodSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTaskRestrictionSchema() {
  return getCachedSchema("TaskRestriction", () => {
    const baseSchema: z.ZodType<types.TaskRestriction> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      repetitions: primitives.getPositiveIntSchema().optional(),
      _repetitions: z.lazy(() => createElementSchema()).optional(),
      period: createPeriodSchema().optional(),
      recipient: z.array(createReferenceSchema()).optional(),
    });

    return baseSchema;
  });
}
