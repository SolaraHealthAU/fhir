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
import { createCoverageClassSchema } from "../coverageclass/schema";
import { createCoverageCostToBeneficiarySchema } from "../coveragecosttobeneficiary/schema";

/* Generated from FHIR JSON Schema */

export function createCoverageSchema() {
  return getCachedSchema("Coverage", () => {
    const baseSchema: z.ZodType<types.Coverage> = z.strictObject({
      resourceType: z.literal("Coverage"),
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
      type: createCodeableConceptSchema().optional(),
      policyHolder: createReferenceSchema().optional(),
      subscriber: createReferenceSchema().optional(),
      subscriberId: primitives.getStringSchema().optional(),
      _subscriberId: createElementSchema().optional(),
      beneficiary: createReferenceSchema(),
      dependent: primitives.getStringSchema().optional(),
      _dependent: createElementSchema().optional(),
      relationship: createCodeableConceptSchema().optional(),
      period: createPeriodSchema().optional(),
      payor: z.array(createReferenceSchema()),
      class: z.array(createCoverageClassSchema()).optional(),
      order: primitives.getPositiveIntSchema().optional(),
      _order: createElementSchema().optional(),
      network: primitives.getStringSchema().optional(),
      _network: createElementSchema().optional(),
      costToBeneficiary: z
        .array(createCoverageCostToBeneficiarySchema())
        .optional(),
      subrogation: primitives.getBooleanSchema().optional(),
      _subrogation: createElementSchema().optional(),
      contract: z.array(createReferenceSchema()).optional(),
    });

    return baseSchema;
  });
}
