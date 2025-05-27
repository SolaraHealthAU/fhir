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
  createHumanNameSchema,
  createContactPointSchema,
  createAddressSchema,
  createAttachmentSchema,
  createPeriodSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createRelatedPersonCommunicationSchema } from "../relatedpersoncommunication/schema";

/* Generated from FHIR JSON Schema */

export function createRelatedPersonSchema() {
  return getCachedSchema("RelatedPerson", () => {
    const baseSchema: z.ZodType<types.RelatedPerson> = z.strictObject({
      resourceType: z.literal("RelatedPerson"),
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
      active: primitives.getBooleanSchema().optional(),
      _active: z.lazy(() => createElementSchema()).optional(),
      patient: createReferenceSchema(),
      relationship: z.array(createCodeableConceptSchema()).optional(),
      name: z.array(createHumanNameSchema()).optional(),
      telecom: z.array(createContactPointSchema()).optional(),
      gender: z.enum(["male", "female", "other", "unknown"]).optional(),
      _gender: z.lazy(() => createElementSchema()).optional(),
      birthDate: primitives.getDateSchema().optional(),
      _birthDate: z.lazy(() => createElementSchema()).optional(),
      address: z.array(createAddressSchema()).optional(),
      photo: z.array(createAttachmentSchema()).optional(),
      period: createPeriodSchema().optional(),
      communication: z
        .array(createRelatedPersonCommunicationSchema())
        .optional(),
    });

    return baseSchema;
  });
}
