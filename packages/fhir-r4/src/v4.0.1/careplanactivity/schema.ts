import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createCarePlanDetailSchema } from "../careplandetail/schema";

/* Generated from FHIR JSON Schema */

export function createCarePlanActivitySchema() {
  return getCachedSchema("CarePlanActivity", () => {
    const baseSchema: z.ZodType<types.CarePlanActivity> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      outcomeCodeableConcept: z.array(createCodeableConceptSchema()).optional(),
      outcomeReference: z.array(createReferenceSchema()).optional(),
      progress: z.array(createAnnotationSchema()).optional(),
      reference: createReferenceSchema().optional(),
      detail: createCarePlanDetailSchema().optional(),
    });

    return baseSchema;
  });
}
