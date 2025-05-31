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

/* Generated from FHIR JSON Schema */

export function createFlagSchema() {
  return getCachedSchema("Flag", () => {
    const baseSchema: z.ZodType<types.Flag> = z.strictObject({
      resourceType: z.literal("Flag"),
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
      status: z.enum(["active", "inactive", "entered-in-error"]),
      _status: createElementSchema().optional(),
      category: z.array(createCodeableConceptSchema()).optional(),
      code: createCodeableConceptSchema(),
      subject: createReferenceSchema(),
      period: createPeriodSchema().optional(),
      encounter: createReferenceSchema().optional(),
      author: createReferenceSchema().optional(),
    });

    return baseSchema;
  });
}
