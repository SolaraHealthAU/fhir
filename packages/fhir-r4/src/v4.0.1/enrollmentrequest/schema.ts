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

export function createEnrollmentRequestSchema() {
  return getCachedSchema("EnrollmentRequest", () => {
    const baseSchema: z.ZodType<types.EnrollmentRequest> = z.strictObject({
      resourceType: z.literal("EnrollmentRequest"),
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
      created: primitives.getDateTimeSchema().optional(),
      _created: z.lazy(() => createElementSchema()).optional(),
      insurer: createReferenceSchema().optional(),
      provider: createReferenceSchema().optional(),
      candidate: createReferenceSchema().optional(),
      coverage: createReferenceSchema().optional(),
    });

    return baseSchema;
  });
}
