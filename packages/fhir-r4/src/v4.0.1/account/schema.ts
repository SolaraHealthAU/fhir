import { z } from "zod/v4";
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
import { createAccountCoverageSchema } from "../accountcoverage/schema";
import { createAccountGuarantorSchema } from "../accountguarantor/schema";

/* Generated from FHIR JSON Schema */

export function createAccountSchema() {
  const baseSchema: z.ZodType<types.Account> = z.object({
    resourceType: z.literal("Account"),
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
    status: z.enum([
      "active",
      "inactive",
      "entered-in-error",
      "on-hold",
      "unknown",
    ]),
    _status: z.lazy(() => createElementSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    subject: z.array(z.lazy(() => createReferenceSchema())).optional(),
    servicePeriod: z.lazy(() => createPeriodSchema()).optional(),
    coverage: z.array(z.lazy(() => createAccountCoverageSchema())).optional(),
    owner: z.lazy(() => createReferenceSchema()).optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    guarantor: z.array(z.lazy(() => createAccountGuarantorSchema())).optional(),
    partOf: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
