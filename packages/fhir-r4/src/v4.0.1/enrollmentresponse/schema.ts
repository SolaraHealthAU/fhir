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
      _implicitRules: createElementSchema().optional(),
      language: primitives.getCodeSchema().optional(),
      _language: createElementSchema().optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      identifier: z.array(createIdentifierSchema()).optional(),
      status: primitives.getCodeSchema().optional(),
      _status: createElementSchema().optional(),
      request: createReferenceSchema().optional(),
      outcome: z.enum(["queued", "complete", "error", "partial"]).optional(),
      _outcome: createElementSchema().optional(),
      disposition: primitives.getStringSchema().optional(),
      _disposition: createElementSchema().optional(),
      created: primitives.getDateTimeSchema().optional(),
      _created: createElementSchema().optional(),
      organization: createReferenceSchema().optional(),
      requestProvider: createReferenceSchema().optional(),
    });

    return baseSchema;
  });
}
