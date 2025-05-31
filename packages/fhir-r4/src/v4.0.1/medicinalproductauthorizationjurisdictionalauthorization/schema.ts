import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductAuthorizationJurisdictionalAuthorizationSchema() {
  return getCachedSchema(
    "MedicinalProductAuthorizationJurisdictionalAuthorization",
    () => {
      const baseSchema: z.ZodType<types.MedicinalProductAuthorizationJurisdictionalAuthorization> =
        z.strictObject({
          id: primitives.getStringSchema().optional(),
          extension: z.array(createExtensionSchema()).optional(),
          modifierExtension: z.array(createExtensionSchema()).optional(),
          identifier: z.array(createIdentifierSchema()).optional(),
          country: createCodeableConceptSchema().optional(),
          jurisdiction: z.array(createCodeableConceptSchema()).optional(),
          legalStatusOfSupply: createCodeableConceptSchema().optional(),
          validityPeriod: createPeriodSchema().optional(),
        });

      return baseSchema;
    },
  );
}
