import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.MedicinalProductAuthorization> = z.object({
    resourceType: z.literal("MedicinalProductAuthorization"),
    id: primitives.createIdSchema().optional(),
    meta: z.lazy(() => createMetaSchema()).optional(),
    implicitRules: primitives.createUriSchema().optional(),
    _implicitRules: z.lazy(() => createElementSchema()).optional(),
    language: primitives.createCodeSchema().optional(),
    _language: z.lazy(() => createElementSchema()).optional(),
    text: z.lazy(() => createNarrativeSchema()).optional(),
    contained: z.array(z.lazy(() => createResourceListSchema())).optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    subject: z.lazy(() => createReferenceSchema()).optional(),
    country: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    jurisdiction: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    status: z.lazy(() => createCodeableConceptSchema()).optional(),
    statusDate: primitives.createDateTimeSchema().optional(),
    _statusDate: z.lazy(() => createElementSchema()).optional(),
    restoreDate: primitives.createDateTimeSchema().optional(),
    _restoreDate: z.lazy(() => createElementSchema()).optional(),
    validityPeriod: z.lazy(() => createPeriodSchema()).optional(),
    dataExclusivityPeriod: z.lazy(() => createPeriodSchema()).optional(),
    dateOfFirstAuthorization: primitives.createDateTimeSchema().optional(),
    _dateOfFirstAuthorization: z.lazy(() => createElementSchema()).optional(),
    internationalBirthDate: primitives.createDateTimeSchema().optional(),
    _internationalBirthDate: z.lazy(() => createElementSchema()).optional(),
    legalBasis: z.lazy(() => createCodeableConceptSchema()).optional(),
    jurisdictionalAuthorization: z
      .array(
        z.lazy(() =>
          createMedicinalProductAuthorizationJurisdictionalAuthorizationSchema(),
        ),
      )
      .optional(),
    holder: z.lazy(() => createReferenceSchema()).optional(),
    regulator: z.lazy(() => createReferenceSchema()).optional(),
    procedure: z
      .lazy(() => createMedicinalProductAuthorizationProcedureSchema())
      .optional(),
  });

  return baseSchema;
}
