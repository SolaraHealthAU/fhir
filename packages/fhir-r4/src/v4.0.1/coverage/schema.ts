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
import { createCoverageClassSchema } from "../coverageclass/schema";
import { createCoverageCostToBeneficiarySchema } from "../coveragecosttobeneficiary/schema";

/* Generated from FHIR JSON Schema */

export function createCoverageSchema() {
  const baseSchema: z.ZodType<types.Coverage> = z.object({
    resourceType: z.literal("Coverage"),
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
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    policyHolder: z.lazy(() => createReferenceSchema()).optional(),
    subscriber: z.lazy(() => createReferenceSchema()).optional(),
    subscriberId: primitives.createStringSchema().optional(),
    _subscriberId: z.lazy(() => createElementSchema()).optional(),
    beneficiary: z.lazy(() => createReferenceSchema()),
    dependent: primitives.createStringSchema().optional(),
    _dependent: z.lazy(() => createElementSchema()).optional(),
    relationship: z.lazy(() => createCodeableConceptSchema()).optional(),
    period: z.lazy(() => createPeriodSchema()).optional(),
    payor: z.array(z.lazy(() => createReferenceSchema())),
    class: z.array(z.lazy(() => createCoverageClassSchema())).optional(),
    order: primitives.createPositiveIntSchema().optional(),
    _order: z.lazy(() => createElementSchema()).optional(),
    network: primitives.createStringSchema().optional(),
    _network: z.lazy(() => createElementSchema()).optional(),
    costToBeneficiary: z
      .array(z.lazy(() => createCoverageCostToBeneficiarySchema()))
      .optional(),
    subrogation: primitives.createBooleanSchema().optional(),
    _subrogation: z.lazy(() => createElementSchema()).optional(),
    contract: z.array(z.lazy(() => createReferenceSchema())).optional(),
  });

  return baseSchema;
}
