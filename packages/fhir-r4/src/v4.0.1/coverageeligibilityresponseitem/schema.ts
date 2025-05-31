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
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        category: createCodeableConceptSchema().optional(),
        productOrService: createCodeableConceptSchema().optional(),
        modifier: z.array(createCodeableConceptSchema()).optional(),
        provider: createReferenceSchema().optional(),
        excluded: primitives.getBooleanSchema().optional(),
        _excluded: createElementSchema().optional(),
        name: primitives.getStringSchema().optional(),
        _name: createElementSchema().optional(),
        description: primitives.getStringSchema().optional(),
        _description: createElementSchema().optional(),
        network: createCodeableConceptSchema().optional(),
        unit: createCodeableConceptSchema().optional(),
        term: createCodeableConceptSchema().optional(),
        benefit: z
          .array(createCoverageEligibilityResponseBenefitSchema())
          .optional(),
        authorizationRequired: primitives.getBooleanSchema().optional(),
        _authorizationRequired: createElementSchema().optional(),
        authorizationSupporting: z
          .array(createCodeableConceptSchema())
          .optional(),
        authorizationUrl: primitives.getUriSchema().optional(),
        _authorizationUrl: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
