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
  createCodeableConceptSchema,
  createPeriodSchema,
  createTimingSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createDeviceRequestParameterSchema } from "../devicerequestparameter/schema";

/* Generated from FHIR JSON Schema */

export function createDeviceRequestSchema() {
  return getCachedSchema("DeviceRequest", () => {
    const baseSchema: z.ZodType<types.DeviceRequest> = z.strictObject({
      resourceType: z.literal("DeviceRequest"),
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
      instantiatesCanonical: z
        .array(primitives.getCanonicalSchema())
        .optional(),
      instantiatesUri: z.array(primitives.getUriSchema()).optional(),
      _instantiatesUri: z.array(z.lazy(() => createElementSchema())).optional(),
      basedOn: z.array(createReferenceSchema()).optional(),
      priorRequest: z.array(createReferenceSchema()).optional(),
      groupIdentifier: z.lazy(() => createIdentifierSchema()).optional(),
      status: primitives.getCodeSchema().optional(),
      _status: z.lazy(() => createElementSchema()).optional(),
      intent: primitives.getCodeSchema(),
      _intent: z.lazy(() => createElementSchema()).optional(),
      priority: primitives.getCodeSchema().optional(),
      _priority: z.lazy(() => createElementSchema()).optional(),
      codeReference: createReferenceSchema().optional(),
      codeCodeableConcept: createCodeableConceptSchema().optional(),
      parameter: z.array(createDeviceRequestParameterSchema()).optional(),
      subject: createReferenceSchema(),
      encounter: createReferenceSchema().optional(),
      occurrenceDateTime: z.string().optional(),
      _occurrenceDateTime: z.lazy(() => createElementSchema()).optional(),
      occurrencePeriod: createPeriodSchema().optional(),
      occurrenceTiming: createTimingSchema().optional(),
      authoredOn: primitives.getDateTimeSchema().optional(),
      _authoredOn: z.lazy(() => createElementSchema()).optional(),
      requester: createReferenceSchema().optional(),
      performerType: createCodeableConceptSchema().optional(),
      performer: createReferenceSchema().optional(),
      reasonCode: z.array(createCodeableConceptSchema()).optional(),
      reasonReference: z.array(createReferenceSchema()).optional(),
      insurance: z.array(createReferenceSchema()).optional(),
      supportingInfo: z.array(createReferenceSchema()).optional(),
      note: z.array(createAnnotationSchema()).optional(),
      relevantHistory: z.array(createReferenceSchema()).optional(),
    });

    return baseSchema;
  });
}
