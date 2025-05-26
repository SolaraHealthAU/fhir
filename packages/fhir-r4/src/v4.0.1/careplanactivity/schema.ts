import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createCarePlanDetailSchema } from "../careplandetail/schema";

/* Generated from FHIR JSON Schema */

export function createCarePlanActivitySchema() {
  const baseSchema: z.ZodType<types.CarePlanActivity> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    outcomeCodeableConcept: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    outcomeReference: z.array(z.lazy(() => createReferenceSchema())).optional(),
    progress: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    reference: z.lazy(() => createReferenceSchema()).optional(),
    detail: z.lazy(() => createCarePlanDetailSchema()).optional(),
  });

  return baseSchema;
}
