import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createQuantitySchema,
  createCodeableConceptSchema,
  createRangeSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createObservationReferenceRangeSchema() {
  const baseSchema: z.ZodType<types.ObservationReferenceRange> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    low: z.lazy(() => createQuantitySchema()).optional(),
    high: z.lazy(() => createQuantitySchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    appliesTo: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    age: z.lazy(() => createRangeSchema()).optional(),
    text: primitives.createStringSchema().optional(),
    _text: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
