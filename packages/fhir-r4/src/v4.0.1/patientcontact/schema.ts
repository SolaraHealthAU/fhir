import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.PatientContact> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    relationship: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    name: z.lazy(() => createHumanNameSchema()).optional(),
    telecom: z.array(z.lazy(() => createContactPointSchema())).optional(),
    address: z.lazy(() => createAddressSchema()).optional(),
    gender: z.enum(["male", "female", "other", "unknown"]).optional(),
    _gender: z.lazy(() => createElementSchema()).optional(),
    organization: z.lazy(() => createReferenceSchema()).optional(),
    period: z.lazy(() => createPeriodSchema()).optional(),
  });

  return baseSchema;
}
