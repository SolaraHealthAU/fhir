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
      _implicitRules: createElementSchema().optional(),
      language: primitives.getCodeSchema().optional(),
      _language: createElementSchema().optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      identifier: z.array(createIdentifierSchema()).optional(),
      active: primitives.getBooleanSchema().optional(),
      _active: createElementSchema().optional(),
      name: z.array(createHumanNameSchema()).optional(),
      telecom: z.array(createContactPointSchema()).optional(),
      gender: z.enum(["male", "female", "other", "unknown"]).optional(),
      _gender: createElementSchema().optional(),
      birthDate: primitives.getDateSchema().optional(),
      _birthDate: createElementSchema().optional(),
      deceasedBoolean: z.boolean().optional(),
      _deceasedBoolean: createElementSchema().optional(),
      deceasedDateTime: z.string().optional(),
      _deceasedDateTime: createElementSchema().optional(),
      address: z.array(createAddressSchema()).optional(),
      maritalStatus: createCodeableConceptSchema().optional(),
      multipleBirthBoolean: z.boolean().optional(),
      _multipleBirthBoolean: createElementSchema().optional(),
      multipleBirthInteger: z.number().optional(),
      _multipleBirthInteger: createElementSchema().optional(),
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
