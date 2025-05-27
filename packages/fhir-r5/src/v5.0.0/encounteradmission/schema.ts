import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createEncounterAdmissionSchema() {
  const baseSchema: z.ZodType<types.EncounterAdmission> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    preAdmissionIdentifier: z.lazy(() => createIdentifierSchema()).optional(),
    origin: z.lazy(() => createReferenceSchema()).optional(),
    admitSource: z.lazy(() => createCodeableConceptSchema()).optional(),
    reAdmission: z.lazy(() => createCodeableConceptSchema()).optional(),
    destination: z.lazy(() => createReferenceSchema()).optional(),
    dischargeDisposition: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
  });

  return baseSchema;
}
