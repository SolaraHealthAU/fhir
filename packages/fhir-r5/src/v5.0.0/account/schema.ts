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
import { createAccountDiagnosisSchema } from "../accountdiagnosis/schema";
import { createAccountProcedureSchema } from "../accountprocedure/schema";
import { createAccountRelatedAccountSchema } from "../accountrelatedaccount/schema";
import { createAccountBalanceSchema } from "../accountbalance/schema";

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
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    billingStatus: z.lazy(() => createCodeableConceptSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    subject: z.array(z.lazy(() => createReferenceSchema())).optional(),
    servicePeriod: z.lazy(() => createPeriodSchema()).optional(),
    coverage: z.array(z.lazy(() => createAccountCoverageSchema())).optional(),
    owner: z.lazy(() => createReferenceSchema()).optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    guarantor: z.array(z.lazy(() => createAccountGuarantorSchema())).optional(),
    diagnosis: z.array(z.lazy(() => createAccountDiagnosisSchema())).optional(),
    procedure: z.array(z.lazy(() => createAccountProcedureSchema())).optional(),
    relatedAccount: z
      .array(z.lazy(() => createAccountRelatedAccountSchema()))
      .optional(),
    currency: z.lazy(() => createCodeableConceptSchema()).optional(),
    balance: z.array(z.lazy(() => createAccountBalanceSchema())).optional(),
    calculatedAt: primitives.createInstantSchema().optional(),
    _calculatedAt: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
