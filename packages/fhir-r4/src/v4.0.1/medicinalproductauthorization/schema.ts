import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createMedicinalProductAuthorizationJurisdictionalAuthorizationSchema } from "../medicinalproductauthorizationjurisdictionalauthorization/schema";
import { createMedicinalProductAuthorizationProcedureSchema } from "../medicinalproductauthorizationprocedure/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductAuthorizationSchema() {
  return getCachedSchema("MedicinalProductAuthorization", () => {
    const baseSchema: z.ZodType<types.MedicinalProductAuthorization> =
      z.strictObject({
        resourceType: z.literal("MedicinalProductAuthorization"),
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
        subject: createReferenceSchema().optional(),
        country: z.array(createCodeableConceptSchema()).optional(),
        jurisdiction: z.array(createCodeableConceptSchema()).optional(),
        status: createCodeableConceptSchema().optional(),
        statusDate: primitives.getDateTimeSchema().optional(),
        _statusDate: createElementSchema().optional(),
        restoreDate: primitives.getDateTimeSchema().optional(),
        _restoreDate: createElementSchema().optional(),
        validityPeriod: createPeriodSchema().optional(),
        dataExclusivityPeriod: createPeriodSchema().optional(),
        dateOfFirstAuthorization: primitives.getDateTimeSchema().optional(),
        _dateOfFirstAuthorization: createElementSchema().optional(),
        internationalBirthDate: primitives.getDateTimeSchema().optional(),
        _internationalBirthDate: createElementSchema().optional(),
        legalBasis: createCodeableConceptSchema().optional(),
        jurisdictionalAuthorization: z
          .array(
            createMedicinalProductAuthorizationJurisdictionalAuthorizationSchema(),
          )
          .optional(),
        holder: createReferenceSchema().optional(),
        regulator: createReferenceSchema().optional(),
        procedure:
          createMedicinalProductAuthorizationProcedureSchema().optional(),
      });

    return baseSchema;
  });
}
