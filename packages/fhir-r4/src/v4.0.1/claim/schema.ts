import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
import { createClaimCareTeamSchema } from "../claimcareteam/schema";
import { createClaimSupportingInfoSchema } from "../claimsupportinginfo/schema";
import { createClaimDiagnosisSchema } from "../claimdiagnosis/schema";
import { createClaimProcedureSchema } from "../claimprocedure/schema";
import { createClaimInsuranceSchema } from "../claiminsurance/schema";
import { createClaimAccidentSchema } from "../claimaccident/schema";
import { createClaimItemSchema } from "../claimitem/schema";

/* Generated from FHIR JSON Schema */

export function createClaimSchema() {
  return getCachedSchema("Claim", () => {
    const baseSchema: z.ZodType<types.Claim> = z.strictObject({
      resourceType: z.literal("Claim"),
      id: primitives.getIdSchema().optional(),
      meta: createMetaSchema().optional(),
      implicitRules: primitives.getUriSchema().optional(),
      _implicitRules: z.lazy(() => createElementSchema()).optional(),
      language: primitives.getCodeSchema().optional(),
      _language: z.lazy(() => createElementSchema()).optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
      status: primitives.getCodeSchema(),
      _status: z.lazy(() => createElementSchema()).optional(),
      type: createCodeableConceptSchema(),
      subType: createCodeableConceptSchema().optional(),
      use: z.enum(["claim", "preauthorization", "predetermination"]),
      _use: z.lazy(() => createElementSchema()).optional(),
      patient: createReferenceSchema(),
      billablePeriod: createPeriodSchema().optional(),
      created: primitives.getDateTimeSchema(),
      _created: z.lazy(() => createElementSchema()).optional(),
      enterer: createReferenceSchema().optional(),
      insurer: createReferenceSchema().optional(),
      provider: createReferenceSchema(),
      priority: createCodeableConceptSchema(),
      fundsReserve: createCodeableConceptSchema().optional(),
      related: z.array(createClaimRelatedSchema()).optional(),
      prescription: createReferenceSchema().optional(),
      originalPrescription: createReferenceSchema().optional(),
      payee: createClaimPayeeSchema().optional(),
      referral: createReferenceSchema().optional(),
      facility: createReferenceSchema().optional(),
      careTeam: z.array(createClaimCareTeamSchema()).optional(),
      supportingInfo: z.array(createClaimSupportingInfoSchema()).optional(),
      diagnosis: z.array(createClaimDiagnosisSchema()).optional(),
      procedure: z.array(createClaimProcedureSchema()).optional(),
      insurance: z.array(createClaimInsuranceSchema()),
      accident: createClaimAccidentSchema().optional(),
      item: z.array(createClaimItemSchema()).optional(),
      total: createMoneySchema().optional(),
    });

    return baseSchema;
  });
}
