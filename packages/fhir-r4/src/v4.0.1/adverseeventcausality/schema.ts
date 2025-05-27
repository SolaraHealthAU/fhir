import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createAdverseEventCausalitySchema() {
  return getCachedSchema("AdverseEventCausality", () => {
    const baseSchema: z.ZodType<types.AdverseEventCausality> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      assessment: createCodeableConceptSchema().optional(),
      productRelatedness: primitives.getStringSchema().optional(),
      _productRelatedness: z.lazy(() => createElementSchema()).optional(),
      author: createReferenceSchema().optional(),
      method: createCodeableConceptSchema().optional(),
    });

    return baseSchema;
  });
}
