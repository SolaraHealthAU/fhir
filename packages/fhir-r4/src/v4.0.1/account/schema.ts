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
import { createAccountCoverageSchema } from "../accountcoverage/schema";
import { createAccountGuarantorSchema } from "../accountguarantor/schema";

/* Generated from FHIR JSON Schema */

export function createAccountSchema() {
  return getCachedSchema("Account", () => {
    const baseSchema: z.ZodType<types.Account> = z.strictObject({
      resourceType: z.literal("Account"),
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
      status: z.enum([
        "active",
        "inactive",
        "entered-in-error",
        "on-hold",
        "unknown",
      ]),
      _status: z.lazy(() => createElementSchema()).optional(),
      type: createCodeableConceptSchema().optional(),
      name: primitives.getStringSchema().optional(),
      _name: z.lazy(() => createElementSchema()).optional(),
      subject: z.array(createReferenceSchema()).optional(),
      servicePeriod: createPeriodSchema().optional(),
      coverage: z.array(createAccountCoverageSchema()).optional(),
      owner: createReferenceSchema().optional(),
      description: primitives.getStringSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      guarantor: z.array(createAccountGuarantorSchema()).optional(),
      partOf: createReferenceSchema().optional(),
    });

    return baseSchema;
  });
}
