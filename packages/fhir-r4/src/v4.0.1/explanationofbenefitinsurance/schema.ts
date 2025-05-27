import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createExplanationOfBenefitInsuranceSchema() {
  return getCachedSchema("ExplanationOfBenefitInsurance", () => {
    const baseSchema: z.ZodType<types.ExplanationOfBenefitInsurance> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        focal: primitives.getBooleanSchema(),
        _focal: z.lazy(() => createElementSchema()).optional(),
        coverage: createReferenceSchema(),
        preAuthRef: z.array(primitives.getStringSchema()).optional(),
        _preAuthRef: z.array(z.lazy(() => createElementSchema())).optional(),
      });

    return baseSchema;
  });
}
