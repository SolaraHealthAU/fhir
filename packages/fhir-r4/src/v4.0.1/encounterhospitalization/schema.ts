import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createEncounterHospitalizationSchema() {
  return getCachedSchema("EncounterHospitalization", () => {
    const baseSchema: z.ZodType<types.EncounterHospitalization> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        preAdmissionIdentifier: createIdentifierSchema().optional(),
        origin: createReferenceSchema().optional(),
        admitSource: createCodeableConceptSchema().optional(),
        reAdmission: createCodeableConceptSchema().optional(),
        dietPreference: z.array(createCodeableConceptSchema()).optional(),
        specialCourtesy: z.array(createCodeableConceptSchema()).optional(),
        specialArrangement: z.array(createCodeableConceptSchema()).optional(),
        destination: createReferenceSchema().optional(),
        dischargeDisposition: createCodeableConceptSchema().optional(),
      });

    return baseSchema;
  });
}
