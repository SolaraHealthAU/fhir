import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableReferenceSchema,
  createAnnotationSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCarePlanActivitySchema() {
  const baseSchema: z.ZodType<types.CarePlanActivity> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    performedActivity: z
      .array(z.lazy(() => createCodeableReferenceSchema()))
      .optional(),
    progress: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    plannedActivityReference: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
