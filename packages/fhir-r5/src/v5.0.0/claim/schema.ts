import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createPeriodSchema,
  createMoneySchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createClaimRelatedSchema } from "../claimrelated/schema";
import { createClaimPayeeSchema } from "../claimpayee/schema";
import { createClaimEventSchema } from "../claimevent/schema";
import { createClaimCareTeamSchema } from "../claimcareteam/schema";
import { createClaimSupportingInfoSchema } from "../claimsupportinginfo/schema";
import { createClaimDiagnosisSchema } from "../claimdiagnosis/schema";
import { createClaimProcedureSchema } from "../claimprocedure/schema";
import { createClaimInsuranceSchema } from "../claiminsurance/schema";
import { createClaimAccidentSchema } from "../claimaccident/schema";
import { createClaimItemSchema } from "../claimitem/schema";

/* Generated from FHIR JSON Schema */

export function createClaimSchema() {
  const baseSchema: z.ZodType<types.Claim> = z.object({
    resourceType: z.literal("Claim"),
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
    traceNumber: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()),
    subType: z.lazy(() => createCodeableConceptSchema()).optional(),
    use: primitives.createCodeSchema().optional(),
    _use: z.lazy(() => createElementSchema()).optional(),
    patient: z.lazy(() => createReferenceSchema()),
    billablePeriod: z.lazy(() => createPeriodSchema()).optional(),
    created: primitives.createDateTimeSchema().optional(),
    _created: z.lazy(() => createElementSchema()).optional(),
    enterer: z.lazy(() => createReferenceSchema()).optional(),
    insurer: z.lazy(() => createReferenceSchema()).optional(),
    provider: z.lazy(() => createReferenceSchema()).optional(),
    priority: z.lazy(() => createCodeableConceptSchema()).optional(),
    fundsReserve: z.lazy(() => createCodeableConceptSchema()).optional(),
    related: z.array(z.lazy(() => createClaimRelatedSchema())).optional(),
    prescription: z.lazy(() => createReferenceSchema()).optional(),
    originalPrescription: z.lazy(() => createReferenceSchema()).optional(),
    payee: z.lazy(() => createClaimPayeeSchema()).optional(),
    referral: z.lazy(() => createReferenceSchema()).optional(),
    encounter: z.array(z.lazy(() => createReferenceSchema())).optional(),
    facility: z.lazy(() => createReferenceSchema()).optional(),
    diagnosisRelatedGroup: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    event: z.array(z.lazy(() => createClaimEventSchema())).optional(),
    careTeam: z.array(z.lazy(() => createClaimCareTeamSchema())).optional(),
    supportingInfo: z
      .array(z.lazy(() => createClaimSupportingInfoSchema()))
      .optional(),
    diagnosis: z.array(z.lazy(() => createClaimDiagnosisSchema())).optional(),
    procedure: z.array(z.lazy(() => createClaimProcedureSchema())).optional(),
    insurance: z.array(z.lazy(() => createClaimInsuranceSchema())).optional(),
    accident: z.lazy(() => createClaimAccidentSchema()).optional(),
    patientPaid: z.lazy(() => createMoneySchema()).optional(),
    item: z.array(z.lazy(() => createClaimItemSchema())).optional(),
    total: z.lazy(() => createMoneySchema()).optional(),
  });

  return baseSchema;
}
