import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";

/* Generated from FHIR JSON Schema */

export function createEnrollmentResponseSchema() {
  const baseSchema: z.ZodType<types.EnrollmentResponse> = z.object({
    resourceType: z.literal("EnrollmentResponse"),
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
    request: z.lazy(() => createReferenceSchema()).optional(),
    outcome: primitives.createCodeSchema().optional(),
    _outcome: z.lazy(() => createElementSchema()).optional(),
    disposition: primitives.createStringSchema().optional(),
    _disposition: z.lazy(() => createElementSchema()).optional(),
    created: primitives.createDateTimeSchema().optional(),
    _created: z.lazy(() => createElementSchema()).optional(),
    organization: z.lazy(() => createReferenceSchema()).optional(),
    requestProvider: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
