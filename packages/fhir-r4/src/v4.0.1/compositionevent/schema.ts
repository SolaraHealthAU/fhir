import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCompositionEventSchema() {
  return getCachedSchema("CompositionEvent", () => {
    const baseSchema: z.ZodType<types.CompositionEvent> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      code: z.array(createCodeableConceptSchema()).optional(),
      period: createPeriodSchema().optional(),
      detail: z.array(createReferenceSchema()).optional(),
    });

    return baseSchema;
  });
}
