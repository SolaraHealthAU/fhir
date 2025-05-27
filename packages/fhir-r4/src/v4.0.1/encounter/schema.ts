import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("Encounter", () => {
    const baseSchema: z.ZodType<types.Encounter> = z.strictObject({
      resourceType: z.literal("Encounter"),
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
      statusHistory: z.array(createEncounterStatusHistorySchema()).optional(),
      class: createCodingSchema(),
      classHistory: z.array(createEncounterClassHistorySchema()).optional(),
      type: z.array(createCodeableConceptSchema()).optional(),
      serviceType: createCodeableConceptSchema().optional(),
      priority: createCodeableConceptSchema().optional(),
      subject: createReferenceSchema().optional(),
      episodeOfCare: z.array(createReferenceSchema()).optional(),
      basedOn: z.array(createReferenceSchema()).optional(),
      participant: z.array(createEncounterParticipantSchema()).optional(),
      appointment: z.array(createReferenceSchema()).optional(),
      period: createPeriodSchema().optional(),
      length: createDurationSchema().optional(),
      reasonCode: z.array(createCodeableConceptSchema()).optional(),
      reasonReference: z.array(createReferenceSchema()).optional(),
      diagnosis: z.array(createEncounterDiagnosisSchema()).optional(),
      account: z.array(createReferenceSchema()).optional(),
      hospitalization: createEncounterHospitalizationSchema().optional(),
      location: z.array(createEncounterLocationSchema()).optional(),
      serviceProvider: createReferenceSchema().optional(),
      partOf: createReferenceSchema().optional(),
    });

    return baseSchema;
  });
}
