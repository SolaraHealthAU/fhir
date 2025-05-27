import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createExplanationOfBenefitEventSchema() {
  const baseSchema: z.ZodType<types.ExplanationOfBenefitEvent> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.lazy(() => createCodeableConceptSchema()),
    whenDateTime: z.string().optional(),
    _whenDateTime: z.lazy(() => createElementSchema()).optional(),
    whenPeriod: z.lazy(() => createPeriodSchema()).optional(),
  });

  return baseSchema;
}
