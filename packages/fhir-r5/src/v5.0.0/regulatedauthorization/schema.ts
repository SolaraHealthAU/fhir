import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
  createCodeableReferenceSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createRegulatedAuthorizationCaseSchema } from "../regulatedauthorizationcase/schema";

/* Generated from FHIR JSON Schema */

export function createRegulatedAuthorizationSchema() {
  const baseSchema: z.ZodType<types.RegulatedAuthorization> = z.object({
    resourceType: z.literal("RegulatedAuthorization"),
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
    subject: z.array(z.lazy(() => createReferenceSchema())).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    region: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    status: z.lazy(() => createCodeableConceptSchema()).optional(),
    statusDate: primitives.createDateTimeSchema().optional(),
    _statusDate: z.lazy(() => createElementSchema()).optional(),
    validityPeriod: z.lazy(() => createPeriodSchema()).optional(),
    indication: z
      .array(z.lazy(() => createCodeableReferenceSchema()))
      .optional(),
    intendedUse: z.lazy(() => createCodeableConceptSchema()).optional(),
    basis: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    holder: z.lazy(() => createReferenceSchema()).optional(),
    regulator: z.lazy(() => createReferenceSchema()).optional(),
    attachedDocument: z.array(z.lazy(() => createReferenceSchema())).optional(),
    case: z.lazy(() => createRegulatedAuthorizationCaseSchema()).optional(),
  });

  return baseSchema;
}
