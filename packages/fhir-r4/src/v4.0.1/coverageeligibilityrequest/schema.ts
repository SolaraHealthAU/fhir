import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.CoverageEligibilityRequest> = z.object({
    resourceType: z.literal("CoverageEligibilityRequest"),
    id: primitives.createIdSchema().optional(),
    meta: z.lazy(() => createMetaSchema()).optional(),
    implicitRules: primitives.createUriSchema().optional(),
    _implicitRules: z.lazy(() => createElementSchema()).optional(),
    language: primitives.createCodeSchema().optional(),
    _language: z.lazy(() => createElementSchema()).optional(),
    text: z.lazy(() => createNarrativeSchema()).optional(),
    contained: z.array(z.lazy(() => createResourceListSchema())).optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    status: primitives.createCodeSchema(),
    _status: z.lazy(() => createElementSchema()).optional(),
    priority: z.lazy(() => createCodeableConceptSchema()).optional(),
    purpose: z.array(z.any()),
    _purpose: z.array(z.lazy(() => createElementSchema())).optional(),
    patient: z.lazy(() => createReferenceSchema()),
    servicedDate: z.string().optional(),
    _servicedDate: z.lazy(() => createElementSchema()).optional(),
    servicedPeriod: z.lazy(() => createPeriodSchema()).optional(),
    created: primitives.createDateTimeSchema(),
    _created: z.lazy(() => createElementSchema()).optional(),
    enterer: z.lazy(() => createReferenceSchema()).optional(),
    provider: z.lazy(() => createReferenceSchema()).optional(),
    insurer: z.lazy(() => createReferenceSchema()),
    facility: z.lazy(() => createReferenceSchema()).optional(),
    supportingInfo: z
      .array(
        z.lazy(() => createCoverageEligibilityRequestSupportingInfoSchema()),
      )
      .optional(),
    insurance: z
      .array(z.lazy(() => createCoverageEligibilityRequestInsuranceSchema()))
      .optional(),
    item: z
      .array(z.lazy(() => createCoverageEligibilityRequestItemSchema()))
      .optional(),
  });

  return baseSchema;
}
