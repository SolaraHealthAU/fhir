import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createRangeSchema,
  createDurationSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createPlanDefinitionTargetSchema() {
  const baseSchema: z.ZodType<types.PlanDefinitionTarget> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    measure: z.lazy(() => createCodeableConceptSchema()).optional(),
    detailQuantity: z.lazy(() => createQuantitySchema()).optional(),
    detailRange: z.lazy(() => createRangeSchema()).optional(),
    detailCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    due: z.lazy(() => createDurationSchema()).optional(),
  });

  return baseSchema;
}
