import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createHumanNameSchema,
  createContactPointSchema,
  createAddressSchema,
  createAttachmentSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createPractitionerQualificationSchema } from "../practitionerqualification/schema";

/* Generated from FHIR JSON Schema */

export function createPractitionerSchema() {
  return getCachedSchema("Practitioner", () => {
    const baseSchema: z.ZodType<types.Practitioner> = z.strictObject({
      resourceType: z.literal("Practitioner"),
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
      name: z.array(createHumanNameSchema()).optional(),
      telecom: z.array(createContactPointSchema()).optional(),
      address: z.array(createAddressSchema()).optional(),
      gender: z.enum(["male", "female", "other", "unknown"]).optional(),
      _gender: z.lazy(() => createElementSchema()).optional(),
      birthDate: primitives.getDateSchema().optional(),
      _birthDate: z.lazy(() => createElementSchema()).optional(),
      photo: z.array(createAttachmentSchema()).optional(),
      qualification: z
        .array(createPractitionerQualificationSchema())
        .optional(),
      communication: z.array(createCodeableConceptSchema()).optional(),
    });

    return baseSchema;
  });
}
