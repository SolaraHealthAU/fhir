import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createExplanationOfBenefitInsuranceSchema() {
  const baseSchema: z.ZodType<types.ExplanationOfBenefitInsurance> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    focal: primitives.createBooleanSchema().optional(),
    _focal: z.lazy(() => createElementSchema()).optional(),
    coverage: z.lazy(() => createReferenceSchema()),
    preAuthRef: z.array(primitives.createStringSchema()).optional(),
    _preAuthRef: z.array(z.lazy(() => createElementSchema())).optional(),
  });

  return baseSchema;
}
