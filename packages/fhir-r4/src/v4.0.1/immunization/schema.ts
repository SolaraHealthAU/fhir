import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.Immunization> = z.object({
    resourceType: z.literal("Immunization"),
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
    status: primitives.createCodeSchema(),
    _status: z.lazy(() => createElementSchema()).optional(),
    statusReason: z.lazy(() => createCodeableConceptSchema()).optional(),
    vaccineCode: z.lazy(() => createCodeableConceptSchema()),
    patient: z.lazy(() => createReferenceSchema()),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    occurrenceDateTime: z.string().optional(),
    _occurrenceDateTime: z.lazy(() => createElementSchema()).optional(),
    occurrenceString: z.string().optional(),
    _occurrenceString: z.lazy(() => createElementSchema()).optional(),
    recorded: primitives.createDateTimeSchema().optional(),
    _recorded: z.lazy(() => createElementSchema()).optional(),
    primarySource: primitives.createBooleanSchema().optional(),
    _primarySource: z.lazy(() => createElementSchema()).optional(),
    reportOrigin: z.lazy(() => createCodeableConceptSchema()).optional(),
    location: z.lazy(() => createReferenceSchema()).optional(),
    manufacturer: z.lazy(() => createReferenceSchema()).optional(),
    lotNumber: primitives.createStringSchema().optional(),
    _lotNumber: z.lazy(() => createElementSchema()).optional(),
    expirationDate: primitives.createDateSchema().optional(),
    _expirationDate: z.lazy(() => createElementSchema()).optional(),
    site: z.lazy(() => createCodeableConceptSchema()).optional(),
    route: z.lazy(() => createCodeableConceptSchema()).optional(),
    doseQuantity: z.lazy(() => createQuantitySchema()).optional(),
    performer: z
      .array(z.lazy(() => createImmunizationPerformerSchema()))
      .optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    reasonCode: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    reasonReference: z.array(z.lazy(() => createReferenceSchema())).optional(),
    isSubpotent: primitives.createBooleanSchema().optional(),
    _isSubpotent: z.lazy(() => createElementSchema()).optional(),
    subpotentReason: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    education: z
      .array(z.lazy(() => createImmunizationEducationSchema()))
      .optional(),
    programEligibility: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    fundingSource: z.lazy(() => createCodeableConceptSchema()).optional(),
    reaction: z
      .array(z.lazy(() => createImmunizationReactionSchema()))
      .optional(),
    protocolApplied: z
      .array(z.lazy(() => createImmunizationProtocolAppliedSchema()))
      .optional(),
  });

  return baseSchema;
}
