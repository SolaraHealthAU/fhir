import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("EnrollmentResponse", () => {
    const baseSchema: z.ZodType<types.EnrollmentResponse> = z.strictObject({
      resourceType: z.literal("EnrollmentResponse"),
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
      status: primitives.getCodeSchema().optional(),
      _status: z.lazy(() => createElementSchema()).optional(),
      request: createReferenceSchema().optional(),
      outcome: z.enum(["queued", "complete", "error", "partial"]).optional(),
      _outcome: z.lazy(() => createElementSchema()).optional(),
      disposition: primitives.getStringSchema().optional(),
      _disposition: z.lazy(() => createElementSchema()).optional(),
      created: primitives.getDateTimeSchema().optional(),
      _created: z.lazy(() => createElementSchema()).optional(),
      organization: createReferenceSchema().optional(),
      requestProvider: createReferenceSchema().optional(),
    });

    return baseSchema;
  });
}
