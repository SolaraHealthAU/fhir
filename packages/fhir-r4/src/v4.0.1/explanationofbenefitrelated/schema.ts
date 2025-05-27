import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createIdentifierSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createExplanationOfBenefitRelatedSchema() {
  const baseSchema: z.ZodType<types.ExplanationOfBenefitRelated> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    claim: z.lazy(() => createReferenceSchema()).optional(),
    relationship: z.lazy(() => createCodeableConceptSchema()).optional(),
    reference: z.lazy(() => createIdentifierSchema()).optional(),
  });

  return baseSchema;
}
