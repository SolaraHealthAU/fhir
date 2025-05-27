import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createDurationSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createProductShelfLifeSchema() {
  const baseSchema: z.ZodType<types.ProductShelfLife> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    periodDuration: z.lazy(() => createDurationSchema()).optional(),
    periodString: z.string().optional(),
    _periodString: z.lazy(() => createElementSchema()).optional(),
    specialPrecautionsForStorage: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
  });

  return baseSchema;
}
