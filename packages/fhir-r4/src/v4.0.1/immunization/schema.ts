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
  createQuantitySchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createImmunizationPerformerSchema } from "../immunizationperformer/schema";
import { createImmunizationEducationSchema } from "../immunizationeducation/schema";
import { createImmunizationReactionSchema } from "../immunizationreaction/schema";
import { createImmunizationProtocolAppliedSchema } from "../immunizationprotocolapplied/schema";

/* Generated from FHIR JSON Schema */

export function createImmunizationSchema() {
  return getCachedSchema("Immunization", () => {
    const baseSchema: z.ZodType<types.Immunization> = z.strictObject({
      resourceType: z.literal("Immunization"),
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
      status: primitives.getCodeSchema(),
      _status: createElementSchema().optional(),
      statusReason: createCodeableConceptSchema().optional(),
      vaccineCode: createCodeableConceptSchema(),
      patient: createReferenceSchema(),
      encounter: createReferenceSchema().optional(),
      occurrenceDateTime: z.string().optional(),
      _occurrenceDateTime: createElementSchema().optional(),
      occurrenceString: z.string().optional(),
      _occurrenceString: createElementSchema().optional(),
      recorded: primitives.getDateTimeSchema().optional(),
      _recorded: createElementSchema().optional(),
      primarySource: primitives.getBooleanSchema().optional(),
      _primarySource: createElementSchema().optional(),
      reportOrigin: createCodeableConceptSchema().optional(),
      location: createReferenceSchema().optional(),
      manufacturer: createReferenceSchema().optional(),
      lotNumber: primitives.getStringSchema().optional(),
      _lotNumber: createElementSchema().optional(),
      expirationDate: primitives.getDateSchema().optional(),
      _expirationDate: createElementSchema().optional(),
      site: createCodeableConceptSchema().optional(),
      route: createCodeableConceptSchema().optional(),
      doseQuantity: createQuantitySchema().optional(),
      performer: z.array(createImmunizationPerformerSchema()).optional(),
      note: z.array(createAnnotationSchema()).optional(),
      reasonCode: z.array(createCodeableConceptSchema()).optional(),
      reasonReference: z.array(createReferenceSchema()).optional(),
      isSubpotent: primitives.getBooleanSchema().optional(),
      _isSubpotent: createElementSchema().optional(),
      subpotentReason: z.array(createCodeableConceptSchema()).optional(),
      education: z.array(createImmunizationEducationSchema()).optional(),
      programEligibility: z.array(createCodeableConceptSchema()).optional(),
      fundingSource: createCodeableConceptSchema().optional(),
      reaction: z.array(createImmunizationReactionSchema()).optional(),
      protocolApplied: z
        .array(createImmunizationProtocolAppliedSchema())
        .optional(),
    });

    return baseSchema;
  });
}
