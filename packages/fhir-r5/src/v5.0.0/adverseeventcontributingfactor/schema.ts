import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createAdverseEventContributingFactorSchema() {
  const baseSchema: z.ZodType<types.AdverseEventContributingFactor> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    itemReference: z.lazy(() => createReferenceSchema()).optional(),
    itemCodeableConcept: z.lazy(() => createCodeableConceptSchema()).optional(),
  });

  return baseSchema;
}
