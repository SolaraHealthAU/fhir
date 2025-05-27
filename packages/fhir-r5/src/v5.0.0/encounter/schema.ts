import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createCodeableReferenceSchema,
  createReferenceSchema,
  createPeriodSchema,
  createDurationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createEncounterParticipantSchema } from "../encounterparticipant/schema";
import { createVirtualServiceDetailSchema } from "../virtualservicedetail/schema";
import { createEncounterReasonSchema } from "../encounterreason/schema";
import { createEncounterDiagnosisSchema } from "../encounterdiagnosis/schema";
import { createEncounterAdmissionSchema } from "../encounteradmission/schema";
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
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    class: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    priority: z.lazy(() => createCodeableConceptSchema()).optional(),
    type: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    serviceType: z
      .array(z.lazy(() => createCodeableReferenceSchema()))
      .optional(),
    subject: z.lazy(() => createReferenceSchema()).optional(),
    subjectStatus: z.lazy(() => createCodeableConceptSchema()).optional(),
    episodeOfCare: z.array(z.lazy(() => createReferenceSchema())).optional(),
    basedOn: z.array(z.lazy(() => createReferenceSchema())).optional(),
    careTeam: z.array(z.lazy(() => createReferenceSchema())).optional(),
    partOf: z.lazy(() => createReferenceSchema()).optional(),
    serviceProvider: z.lazy(() => createReferenceSchema()).optional(),
    participant: z
      .array(z.lazy(() => createEncounterParticipantSchema()))
      .optional(),
    appointment: z.array(z.lazy(() => createReferenceSchema())).optional(),
    virtualService: z
      .array(z.lazy(() => createVirtualServiceDetailSchema()))
      .optional(),
    actualPeriod: z.lazy(() => createPeriodSchema()).optional(),
    plannedStartDate: primitives.createDateTimeSchema().optional(),
    _plannedStartDate: z.lazy(() => createElementSchema()).optional(),
    plannedEndDate: primitives.createDateTimeSchema().optional(),
    _plannedEndDate: z.lazy(() => createElementSchema()).optional(),
    length: z.lazy(() => createDurationSchema()).optional(),
    reason: z.array(z.lazy(() => createEncounterReasonSchema())).optional(),
    diagnosis: z
      .array(z.lazy(() => createEncounterDiagnosisSchema()))
      .optional(),
    account: z.array(z.lazy(() => createReferenceSchema())).optional(),
    dietPreference: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    specialArrangement: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    specialCourtesy: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    admission: z.lazy(() => createEncounterAdmissionSchema()).optional(),
    location: z.array(z.lazy(() => createEncounterLocationSchema())).optional(),
  });

  return baseSchema;
}
