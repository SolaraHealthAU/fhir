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
  createCodeableConceptSchema,
  createAttachmentSchema,
  createReferenceSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createPatientContactSchema } from "../patientcontact/schema";
import { createPatientCommunicationSchema } from "../patientcommunication/schema";
import { createPatientLinkSchema } from "../patientlink/schema";

/* Generated from FHIR JSON Schema */

export function createPatientSchema() {
  return getCachedSchema("Patient", () => {
    const baseSchema: z.ZodType<types.Patient> = z.strictObject({
      resourceType: z.literal("Patient"),
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
      gender: z.enum(["male", "female", "other", "unknown"]).optional(),
      _gender: z.lazy(() => createElementSchema()).optional(),
      birthDate: primitives.getDateSchema().optional(),
      _birthDate: z.lazy(() => createElementSchema()).optional(),
      deceasedBoolean: z.boolean().optional(),
      _deceasedBoolean: z.lazy(() => createElementSchema()).optional(),
      deceasedDateTime: z.string().optional(),
      _deceasedDateTime: z.lazy(() => createElementSchema()).optional(),
      address: z.array(createAddressSchema()).optional(),
      maritalStatus: createCodeableConceptSchema().optional(),
      multipleBirthBoolean: z.boolean().optional(),
      _multipleBirthBoolean: z.lazy(() => createElementSchema()).optional(),
      multipleBirthInteger: z.number().optional(),
      _multipleBirthInteger: z.lazy(() => createElementSchema()).optional(),
      photo: z.array(createAttachmentSchema()).optional(),
      contact: z.array(createPatientContactSchema()).optional(),
      communication: z.array(createPatientCommunicationSchema()).optional(),
      generalPractitioner: z.array(createReferenceSchema()).optional(),
      managingOrganization: createReferenceSchema().optional(),
      link: z.array(createPatientLinkSchema()).optional(),
    });

    return baseSchema;
  });
}
