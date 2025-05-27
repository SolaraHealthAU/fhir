import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
  createReferenceSchema,
  createExtendedContactDetailSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createInsurancePlanCoverageSchema } from "../insuranceplancoverage/schema";
import { createInsurancePlanPlanSchema } from "../insuranceplanplan/schema";

/* Generated from FHIR JSON Schema */

export function createInsurancePlanSchema() {
  const baseSchema: z.ZodType<types.InsurancePlan> = z.object({
    resourceType: z.literal("InsurancePlan"),
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
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    type: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    alias: z.array(primitives.createStringSchema()).optional(),
    _alias: z.array(z.lazy(() => createElementSchema())).optional(),
    period: z.lazy(() => createPeriodSchema()).optional(),
    ownedBy: z.lazy(() => createReferenceSchema()).optional(),
    administeredBy: z.lazy(() => createReferenceSchema()).optional(),
    coverageArea: z.array(z.lazy(() => createReferenceSchema())).optional(),
    contact: z
      .array(z.lazy(() => createExtendedContactDetailSchema()))
      .optional(),
    endpoint: z.array(z.lazy(() => createReferenceSchema())).optional(),
    network: z.array(z.lazy(() => createReferenceSchema())).optional(),
    coverage: z
      .array(z.lazy(() => createInsurancePlanCoverageSchema()))
      .optional(),
    plan: z.array(z.lazy(() => createInsurancePlanPlanSchema())).optional(),
  });

  return baseSchema;
}
