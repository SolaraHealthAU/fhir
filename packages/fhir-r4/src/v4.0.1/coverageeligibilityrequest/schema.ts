import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createPeriodSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createCoverageEligibilityRequestSupportingInfoSchema } from "../coverageeligibilityrequestsupportinginfo/schema";
import { createCoverageEligibilityRequestInsuranceSchema } from "../coverageeligibilityrequestinsurance/schema";
import { createCoverageEligibilityRequestItemSchema } from "../coverageeligibilityrequestitem/schema";

/* Generated from FHIR JSON Schema */

export function createCoverageEligibilityRequestSchema() {
  return getCachedSchema("CoverageEligibilityRequest", () => {
    const baseSchema: z.ZodType<types.CoverageEligibilityRequest> =
      z.strictObject({
        resourceType: z.literal("CoverageEligibilityRequest"),
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
        priority: createCodeableConceptSchema().optional(),
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
        enterer: createReferenceSchema().optional(),
        provider: createReferenceSchema().optional(),
        insurer: createReferenceSchema(),
        facility: createReferenceSchema().optional(),
        supportingInfo: z
          .array(createCoverageEligibilityRequestSupportingInfoSchema())
          .optional(),
        insurance: z
          .array(createCoverageEligibilityRequestInsuranceSchema())
          .optional(),
        item: z.array(createCoverageEligibilityRequestItemSchema()).optional(),
      });

    return baseSchema;
  });
}
