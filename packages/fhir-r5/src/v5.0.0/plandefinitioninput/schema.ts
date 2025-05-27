import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createDataRequirementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createPlanDefinitionInputSchema() {
  const baseSchema: z.ZodType<types.PlanDefinitionInput> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    title: primitives.createStringSchema().optional(),
    _title: z.lazy(() => createElementSchema()).optional(),
    requirement: z.lazy(() => createDataRequirementSchema()).optional(),
    relatedData: primitives.createIdSchema().optional(),
    _relatedData: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
