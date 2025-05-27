import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createElementSchema,
} from "../core/schema";
import { createCoverageEligibilityResponseBenefitSchema } from "../coverageeligibilityresponsebenefit/schema";

/* Generated from FHIR JSON Schema */

export function createCoverageEligibilityResponseItemSchema() {
  return getCachedSchema("CoverageEligibilityResponseItem", () => {
    const baseSchema: z.ZodType<types.CoverageEligibilityResponseItem> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        category: createCodeableConceptSchema().optional(),
        productOrService: createCodeableConceptSchema().optional(),
        modifier: z.array(createCodeableConceptSchema()).optional(),
        provider: createReferenceSchema().optional(),
        excluded: primitives.getBooleanSchema().optional(),
        _excluded: z.lazy(() => createElementSchema()).optional(),
        name: primitives.getStringSchema().optional(),
        _name: z.lazy(() => createElementSchema()).optional(),
        description: primitives.getStringSchema().optional(),
        _description: z.lazy(() => createElementSchema()).optional(),
        network: createCodeableConceptSchema().optional(),
        unit: createCodeableConceptSchema().optional(),
        term: createCodeableConceptSchema().optional(),
        benefit: z
          .array(createCoverageEligibilityResponseBenefitSchema())
          .optional(),
        authorizationRequired: primitives.getBooleanSchema().optional(),
        _authorizationRequired: z.lazy(() => createElementSchema()).optional(),
        authorizationSupporting: z
          .array(createCodeableConceptSchema())
          .optional(),
        authorizationUrl: primitives.getUriSchema().optional(),
        _authorizationUrl: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
