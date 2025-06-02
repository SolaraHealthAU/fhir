import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
  createPeriodSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createCoverageEligibilityResponseInsuranceSchema } from "../coverageeligibilityresponseinsurance/schema";
import { createCoverageEligibilityResponseErrorSchema } from "../coverageeligibilityresponseerror/schema";

/* Generated from FHIR JSON Schema */

export function createCoverageEligibilityResponseSchema() {
  return getCachedSchema("CoverageEligibilityResponse", () => {
    const baseSchema: z.ZodType<types.CoverageEligibilityResponse> =
      z.strictObject({
        resourceType: z.literal("CoverageEligibilityResponse"),
        id: primitives.getIdSchema().optional(),
        meta: createMetaSchema().optional(),
        implicitRules: primitives.getUriSchema().optional(),
        _implicitRules: createElementSchema().optional(),
        language: primitives.getCodeSchema().optional(),
        _language: createElementSchema().optional(),
        text: createNarrativeSchema().optional(),
        contained: z.array(createResourceListSchema()).optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        identifier: z.array(createIdentifierSchema()).optional(),
        status: primitives.getCodeSchema(),
        _status: createElementSchema().optional(),
        purpose: z
          .enum(["auth-requirements", "benefits", "discovery", "validation"])
          .array(),
        _purpose: z.array(createElementSchema()).optional(),
        patient: createReferenceSchema(),
        servicedDate: z.string().optional(),
        _servicedDate: createElementSchema().optional(),
        servicedPeriod: createPeriodSchema().optional(),
        created: primitives.getDateTimeSchema(),
        _created: createElementSchema().optional(),
        requestor: createReferenceSchema().optional(),
        request: createReferenceSchema(),
        outcome: z.enum(["queued", "complete", "error", "partial"]),
        _outcome: createElementSchema().optional(),
        disposition: primitives.getStringSchema().optional(),
        _disposition: createElementSchema().optional(),
        insurer: createReferenceSchema(),
        insurance: z
          .array(createCoverageEligibilityResponseInsuranceSchema())
          .optional(),
        preAuthRef: primitives.getStringSchema().optional(),
        _preAuthRef: createElementSchema().optional(),
        form: createCodeableConceptSchema().optional(),
        error: z
          .array(createCoverageEligibilityResponseErrorSchema())
          .optional(),
      });

    return baseSchema;
  });
}
