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
  createTimingSchema,
  createPeriodSchema,
  createCodeableConceptSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";

/* Generated from FHIR JSON Schema */

export function createDeviceUseStatementSchema() {
  return getCachedSchema("DeviceUseStatement", () => {
    const baseSchema: z.ZodType<types.DeviceUseStatement> = z.strictObject({
      resourceType: z.literal("DeviceUseStatement"),
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
      basedOn: z.array(createReferenceSchema()).optional(),
      status: z.enum([
        "active",
        "completed",
        "entered-in-error",
        "intended",
        "stopped",
        "on-hold",
      ]),
      _status: createElementSchema().optional(),
      subject: createReferenceSchema(),
      derivedFrom: z.array(createReferenceSchema()).optional(),
      timingTiming: createTimingSchema().optional(),
      timingPeriod: createPeriodSchema().optional(),
      timingDateTime: z.string().optional(),
      _timingDateTime: createElementSchema().optional(),
      recordedOn: primitives.getDateTimeSchema().optional(),
      _recordedOn: createElementSchema().optional(),
      source: createReferenceSchema().optional(),
      device: createReferenceSchema(),
      reasonCode: z.array(createCodeableConceptSchema()).optional(),
      reasonReference: z.array(createReferenceSchema()).optional(),
      bodySite: createCodeableConceptSchema().optional(),
      note: z.array(createAnnotationSchema()).optional(),
    });

    return baseSchema;
  });
}
