import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.DeviceUseStatement> = z.object({
    resourceType: z.literal("DeviceUseStatement"),
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
    basedOn: z.array(z.lazy(() => createReferenceSchema())).optional(),
    status: z.enum([
      "active",
      "completed",
      "entered-in-error",
      "intended",
      "stopped",
      "on-hold",
    ]),
    _status: z.lazy(() => createElementSchema()).optional(),
    subject: z.lazy(() => createReferenceSchema()),
    derivedFrom: z.array(z.lazy(() => createReferenceSchema())).optional(),
    timingTiming: z.lazy(() => createTimingSchema()).optional(),
    timingPeriod: z.lazy(() => createPeriodSchema()).optional(),
    timingDateTime: z.string().optional(),
    _timingDateTime: z.lazy(() => createElementSchema()).optional(),
    recordedOn: primitives.createDateTimeSchema().optional(),
    _recordedOn: z.lazy(() => createElementSchema()).optional(),
    source: z.lazy(() => createReferenceSchema()).optional(),
    device: z.lazy(() => createReferenceSchema()),
    reasonCode: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    reasonReference: z.array(z.lazy(() => createReferenceSchema())).optional(),
    bodySite: z.lazy(() => createCodeableConceptSchema()).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
  });

  return baseSchema;
}
