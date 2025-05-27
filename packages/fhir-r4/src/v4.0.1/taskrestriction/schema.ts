import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createPeriodSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTaskRestrictionSchema() {
  const baseSchema: z.ZodType<types.TaskRestriction> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    repetitions: primitives.createPositiveIntSchema().optional(),
    _repetitions: z.lazy(() => createElementSchema()).optional(),
    period: z.lazy(() => createPeriodSchema()).optional(),
    recipient: z.array(z.lazy(() => createReferenceSchema())).optional(),
  });

  return baseSchema;
}
