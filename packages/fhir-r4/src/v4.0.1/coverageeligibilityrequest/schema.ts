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
        _implicitRules: z.lazy(() => createElementSchema()).optional(),
        language: primitives.getCodeSchema().optional(),
        _language: z.lazy(() => createElementSchema()).optional(),
        text: createNarrativeSchema().optional(),
        contained: z.array(createResourceListSchema()).optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
        status: primitives.getCodeSchema(),
        _status: z.lazy(() => createElementSchema()).optional(),
        priority: createCodeableConceptSchema().optional(),
        purpose: z.array(z.any()),
        _purpose: z.array(z.lazy(() => createElementSchema())).optional(),
        patient: createReferenceSchema(),
        servicedDate: z.string().optional(),
        _servicedDate: z.lazy(() => createElementSchema()).optional(),
        servicedPeriod: createPeriodSchema().optional(),
        created: primitives.getDateTimeSchema(),
        _created: z.lazy(() => createElementSchema()).optional(),
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
