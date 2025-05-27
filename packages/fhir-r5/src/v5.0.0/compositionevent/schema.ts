import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createPeriodSchema,
  createCodeableReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCompositionEventSchema() {
  const baseSchema: z.ZodType<types.CompositionEvent> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    period: z.lazy(() => createPeriodSchema()).optional(),
    detail: z.array(z.lazy(() => createCodeableReferenceSchema())).optional(),
  });

  return baseSchema;
}
