import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createHumanNameSchema,
  createContactPointSchema,
  createAddressSchema,
  createElementSchema,
  createReferenceSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createPatientContactSchema() {
  return getCachedSchema("PatientContact", () => {
    const baseSchema: z.ZodType<types.PatientContact> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      relationship: z.array(createCodeableConceptSchema()).optional(),
      name: createHumanNameSchema().optional(),
      telecom: z.array(createContactPointSchema()).optional(),
      address: createAddressSchema().optional(),
      gender: z.enum(["male", "female", "other", "unknown"]).optional(),
      _gender: createElementSchema().optional(),
      organization: createReferenceSchema().optional(),
      period: createPeriodSchema().optional(),
    });

    return baseSchema;
  });
}
