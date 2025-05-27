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
  createPeriodSchema,
  createReferenceSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createInsurancePlanContactSchema } from "../insuranceplancontact/schema";
import { createInsurancePlanCoverageSchema } from "../insuranceplancoverage/schema";
import { createInsurancePlanPlanSchema } from "../insuranceplanplan/schema";

/* Generated from FHIR JSON Schema */

export function createInsurancePlanSchema() {
  return getCachedSchema("InsurancePlan", () => {
    const baseSchema: z.ZodType<types.InsurancePlan> = z.strictObject({
      resourceType: z.literal("InsurancePlan"),
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
      status: z.enum(["draft", "active", "retired", "unknown"]).optional(),
      _status: z.lazy(() => createElementSchema()).optional(),
      type: z.array(createCodeableConceptSchema()).optional(),
      name: primitives.getStringSchema().optional(),
      _name: z.lazy(() => createElementSchema()).optional(),
      alias: z.array(primitives.getStringSchema()).optional(),
      _alias: z.array(z.lazy(() => createElementSchema())).optional(),
      period: createPeriodSchema().optional(),
      ownedBy: createReferenceSchema().optional(),
      administeredBy: createReferenceSchema().optional(),
      coverageArea: z.array(createReferenceSchema()).optional(),
      contact: z.array(createInsurancePlanContactSchema()).optional(),
      endpoint: z.array(createReferenceSchema()).optional(),
      network: z.array(createReferenceSchema()).optional(),
      coverage: z.array(createInsurancePlanCoverageSchema()).optional(),
      plan: z.array(createInsurancePlanPlanSchema()).optional(),
    });

    return baseSchema;
  });
}
