import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.CoverageEligibilityResponse> = z.object({
    resourceType: z.literal("CoverageEligibilityResponse"),
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
    purpose: z.array(z.any()),
    _purpose: z.array(z.lazy(() => createElementSchema())).optional(),
    patient: z.lazy(() => createReferenceSchema()),
    servicedDate: z.string().optional(),
    _servicedDate: z.lazy(() => createElementSchema()).optional(),
    servicedPeriod: z.lazy(() => createPeriodSchema()).optional(),
    created: primitives.createDateTimeSchema(),
    _created: z.lazy(() => createElementSchema()).optional(),
    requestor: z.lazy(() => createReferenceSchema()).optional(),
    request: z.lazy(() => createReferenceSchema()),
    outcome: z.enum(["queued", "complete", "error", "partial"]),
    _outcome: z.lazy(() => createElementSchema()).optional(),
    disposition: primitives.createStringSchema().optional(),
    _disposition: z.lazy(() => createElementSchema()).optional(),
    insurer: z.lazy(() => createReferenceSchema()),
    insurance: z
      .array(z.lazy(() => createCoverageEligibilityResponseInsuranceSchema()))
      .optional(),
    preAuthRef: primitives.createStringSchema().optional(),
    _preAuthRef: z.lazy(() => createElementSchema()).optional(),
    form: z.lazy(() => createCodeableConceptSchema()).optional(),
    error: z
      .array(z.lazy(() => createCoverageEligibilityResponseErrorSchema()))
      .optional(),
  });

  return baseSchema;
}
