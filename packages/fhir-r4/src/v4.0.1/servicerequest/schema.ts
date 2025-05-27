import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createRatioSchema,
  createRangeSchema,
  createPeriodSchema,
  createTimingSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";

/* Generated from FHIR JSON Schema */

export function createServiceRequestSchema() {
  const baseSchema: z.ZodType<types.ServiceRequest> = z.object({
    resourceType: z.literal("ServiceRequest"),
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
    instantiatesCanonical: z
      .array(primitives.createCanonicalSchema())
      .optional(),
    instantiatesUri: z.array(primitives.createUriSchema()).optional(),
    _instantiatesUri: z.array(z.lazy(() => createElementSchema())).optional(),
    basedOn: z.array(z.lazy(() => createReferenceSchema())).optional(),
    replaces: z.array(z.lazy(() => createReferenceSchema())).optional(),
    requisition: z.lazy(() => createIdentifierSchema()).optional(),
    status: primitives.createCodeSchema(),
    _status: z.lazy(() => createElementSchema()).optional(),
    intent: primitives.createCodeSchema(),
    _intent: z.lazy(() => createElementSchema()).optional(),
    category: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    priority: primitives.createCodeSchema().optional(),
    _priority: z.lazy(() => createElementSchema()).optional(),
    doNotPerform: primitives.createBooleanSchema().optional(),
    _doNotPerform: z.lazy(() => createElementSchema()).optional(),
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
    orderDetail: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    quantityQuantity: z.lazy(() => createQuantitySchema()).optional(),
    quantityRatio: z.lazy(() => createRatioSchema()).optional(),
    quantityRange: z.lazy(() => createRangeSchema()).optional(),
    subject: z.lazy(() => createReferenceSchema()),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    occurrenceDateTime: z.string().optional(),
    _occurrenceDateTime: z.lazy(() => createElementSchema()).optional(),
    occurrencePeriod: z.lazy(() => createPeriodSchema()).optional(),
    occurrenceTiming: z.lazy(() => createTimingSchema()).optional(),
    asNeededBoolean: z.boolean().optional(),
    _asNeededBoolean: z.lazy(() => createElementSchema()).optional(),
    asNeededCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    authoredOn: primitives.createDateTimeSchema().optional(),
    _authoredOn: z.lazy(() => createElementSchema()).optional(),
    requester: z.lazy(() => createReferenceSchema()).optional(),
    performerType: z.lazy(() => createCodeableConceptSchema()).optional(),
    performer: z.array(z.lazy(() => createReferenceSchema())).optional(),
    locationCode: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    locationReference: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
    reasonCode: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    reasonReference: z.array(z.lazy(() => createReferenceSchema())).optional(),
    insurance: z.array(z.lazy(() => createReferenceSchema())).optional(),
    supportingInfo: z.array(z.lazy(() => createReferenceSchema())).optional(),
    specimen: z.array(z.lazy(() => createReferenceSchema())).optional(),
    bodySite: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    patientInstruction: primitives.createStringSchema().optional(),
    _patientInstruction: z.lazy(() => createElementSchema()).optional(),
    relevantHistory: z.array(z.lazy(() => createReferenceSchema())).optional(),
  });

  return baseSchema;
}
