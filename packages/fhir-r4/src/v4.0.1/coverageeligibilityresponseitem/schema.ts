import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createElementSchema,
} from "../core/schema";
import { createCoverageEligibilityResponseBenefitSchema } from "../coverageeligibilityresponsebenefit/schema";

/* Generated from FHIR JSON Schema */

export function createCoverageEligibilityResponseItemSchema() {
  const baseSchema: z.ZodType<types.CoverageEligibilityResponseItem> = z.object(
    {
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      category: z.lazy(() => createCodeableConceptSchema()).optional(),
      productOrService: z.lazy(() => createCodeableConceptSchema()).optional(),
      modifier: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
      provider: z.lazy(() => createReferenceSchema()).optional(),
      excluded: primitives.createBooleanSchema().optional(),
      _excluded: z.lazy(() => createElementSchema()).optional(),
      name: primitives.createStringSchema().optional(),
      _name: z.lazy(() => createElementSchema()).optional(),
      description: primitives.createStringSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      network: z.lazy(() => createCodeableConceptSchema()).optional(),
      unit: z.lazy(() => createCodeableConceptSchema()).optional(),
      term: z.lazy(() => createCodeableConceptSchema()).optional(),
      benefit: z
        .array(z.lazy(() => createCoverageEligibilityResponseBenefitSchema()))
        .optional(),
      authorizationRequired: primitives.createBooleanSchema().optional(),
      _authorizationRequired: z.lazy(() => createElementSchema()).optional(),
      authorizationSupporting: z
        .array(z.lazy(() => createCodeableConceptSchema()))
        .optional(),
      authorizationUrl: primitives.createUriSchema().optional(),
      _authorizationUrl: z.lazy(() => createElementSchema()).optional(),
    },
  );

  return baseSchema;
}
