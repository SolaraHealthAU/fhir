import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createEncounterHospitalizationSchema() {
  const baseSchema: z.ZodType<types.EncounterHospitalization> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    preAdmissionIdentifier: z.lazy(() => createIdentifierSchema()).optional(),
    origin: z.lazy(() => createReferenceSchema()).optional(),
    admitSource: z.lazy(() => createCodeableConceptSchema()).optional(),
    reAdmission: z.lazy(() => createCodeableConceptSchema()).optional(),
    dietPreference: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    specialCourtesy: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    specialArrangement: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    destination: z.lazy(() => createReferenceSchema()).optional(),
    dischargeDisposition: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
  });

  return baseSchema;
}
