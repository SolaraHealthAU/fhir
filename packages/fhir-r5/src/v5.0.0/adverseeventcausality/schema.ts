import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createAdverseEventCausalitySchema() {
  const baseSchema: z.ZodType<types.AdverseEventCausality> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    assessmentMethod: z.lazy(() => createCodeableConceptSchema()).optional(),
    entityRelatedness: z.lazy(() => createCodeableConceptSchema()).optional(),
    author: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
