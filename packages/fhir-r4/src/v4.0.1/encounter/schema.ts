import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodingSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createPeriodSchema,
  createDurationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createEncounterStatusHistorySchema } from "../encounterstatushistory/schema";
import { createEncounterClassHistorySchema } from "../encounterclasshistory/schema";
import { createEncounterParticipantSchema } from "../encounterparticipant/schema";
import { createEncounterDiagnosisSchema } from "../encounterdiagnosis/schema";
import { createEncounterHospitalizationSchema } from "../encounterhospitalization/schema";
import { createEncounterLocationSchema } from "../encounterlocation/schema";

/* Generated from FHIR JSON Schema */

export function createEncounterSchema() {
  const baseSchema: z.ZodType<types.Encounter> = z.object({
    resourceType: z.literal("Encounter"),
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
    status: z.enum([
      "planned",
      "arrived",
      "triaged",
      "in-progress",
      "onleave",
      "finished",
      "cancelled",
      "entered-in-error",
      "unknown",
    ]),
    _status: z.lazy(() => createElementSchema()).optional(),
    statusHistory: z
      .array(z.lazy(() => createEncounterStatusHistorySchema()))
      .optional(),
    class: z.lazy(() => createCodingSchema()),
    classHistory: z
      .array(z.lazy(() => createEncounterClassHistorySchema()))
      .optional(),
    type: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    serviceType: z.lazy(() => createCodeableConceptSchema()).optional(),
    priority: z.lazy(() => createCodeableConceptSchema()).optional(),
    subject: z.lazy(() => createReferenceSchema()).optional(),
    episodeOfCare: z.array(z.lazy(() => createReferenceSchema())).optional(),
    basedOn: z.array(z.lazy(() => createReferenceSchema())).optional(),
    participant: z
      .array(z.lazy(() => createEncounterParticipantSchema()))
      .optional(),
    appointment: z.array(z.lazy(() => createReferenceSchema())).optional(),
    period: z.lazy(() => createPeriodSchema()).optional(),
    length: z.lazy(() => createDurationSchema()).optional(),
    reasonCode: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    reasonReference: z.array(z.lazy(() => createReferenceSchema())).optional(),
    diagnosis: z
      .array(z.lazy(() => createEncounterDiagnosisSchema()))
      .optional(),
    account: z.array(z.lazy(() => createReferenceSchema())).optional(),
    hospitalization: z
      .lazy(() => createEncounterHospitalizationSchema())
      .optional(),
    location: z.array(z.lazy(() => createEncounterLocationSchema())).optional(),
    serviceProvider: z.lazy(() => createReferenceSchema()).optional(),
    partOf: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
