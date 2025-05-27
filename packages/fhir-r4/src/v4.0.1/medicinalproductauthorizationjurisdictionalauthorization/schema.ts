import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductAuthorizationJurisdictionalAuthorizationSchema() {
  const baseSchema: z.ZodType<types.MedicinalProductAuthorizationJurisdictionalAuthorization> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
      country: z.lazy(() => createCodeableConceptSchema()).optional(),
      jurisdiction: z
        .array(z.lazy(() => createCodeableConceptSchema()))
        .optional(),
      legalStatusOfSupply: z
        .lazy(() => createCodeableConceptSchema())
        .optional(),
      validityPeriod: z.lazy(() => createPeriodSchema()).optional(),
    });

  return baseSchema;
}
