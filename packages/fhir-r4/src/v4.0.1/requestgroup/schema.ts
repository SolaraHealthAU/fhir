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
  createCodeableConceptSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createRequestGroupActionSchema } from "../requestgroupaction/schema";

/* Generated from FHIR JSON Schema */

export function createRequestGroupSchema() {
  return getCachedSchema("RequestGroup", () => {
    const baseSchema: z.ZodType<types.RequestGroup> = z.strictObject({
      resourceType: z.literal("RequestGroup"),
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
      instantiatesCanonical: z
        .array(primitives.getCanonicalSchema())
        .optional(),
      _instantiatesCanonical: z.array(createElementSchema()).optional(),
      instantiatesUri: z.array(primitives.getUriSchema()).optional(),
      _instantiatesUri: z.array(createElementSchema()).optional(),
      basedOn: z.array(createReferenceSchema()).optional(),
      replaces: z.array(createReferenceSchema()).optional(),
      groupIdentifier: createIdentifierSchema().optional(),
      status: primitives.getCodeSchema(),
      _status: createElementSchema().optional(),
      intent: primitives.getCodeSchema(),
      _intent: createElementSchema().optional(),
      priority: primitives.getCodeSchema().optional(),
      _priority: createElementSchema().optional(),
      code: createCodeableConceptSchema().optional(),
      subject: createReferenceSchema().optional(),
      encounter: createReferenceSchema().optional(),
      authoredOn: primitives.getDateTimeSchema().optional(),
      _authoredOn: createElementSchema().optional(),
      author: createReferenceSchema().optional(),
      reasonCode: z.array(createCodeableConceptSchema()).optional(),
      reasonReference: z.array(createReferenceSchema()).optional(),
      note: z.array(createAnnotationSchema()).optional(),
      action: z.array(createRequestGroupActionSchema()).optional(),
    });

    return baseSchema;
  });
}
