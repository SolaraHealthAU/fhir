import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
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
    assessment: z.lazy(() => createCodeableConceptSchema()).optional(),
    productRelatedness: primitives.createStringSchema().optional(),
    _productRelatedness: z.lazy(() => createElementSchema()).optional(),
    author: z.lazy(() => createReferenceSchema()).optional(),
    method: z.lazy(() => createCodeableConceptSchema()).optional(),
  });

  return baseSchema;
}
