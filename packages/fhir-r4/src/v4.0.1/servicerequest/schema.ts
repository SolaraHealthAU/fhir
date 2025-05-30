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
  return getCachedSchema("ServiceRequest", () => {
    const baseSchema: z.ZodType<types.ServiceRequest> = z.strictObject({
      resourceType: z.literal("ServiceRequest"),
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
      replaces: z.array(createReferenceSchema()).optional(),
      requisition: z.lazy(() => createIdentifierSchema()).optional(),
      status: primitives.getCodeSchema(),
      _status: z.lazy(() => createElementSchema()).optional(),
      intent: primitives.getCodeSchema(),
      _intent: z.lazy(() => createElementSchema()).optional(),
      category: z.array(createCodeableConceptSchema()).optional(),
      priority: primitives.getCodeSchema().optional(),
      _priority: z.lazy(() => createElementSchema()).optional(),
      doNotPerform: primitives.getBooleanSchema().optional(),
      _doNotPerform: z.lazy(() => createElementSchema()).optional(),
      code: createCodeableConceptSchema().optional(),
      orderDetail: z.array(createCodeableConceptSchema()).optional(),
      quantityQuantity: createQuantitySchema().optional(),
      quantityRatio: createRatioSchema().optional(),
      quantityRange: createRangeSchema().optional(),
      subject: createReferenceSchema(),
      encounter: createReferenceSchema().optional(),
      occurrenceDateTime: z.string().optional(),
      _occurrenceDateTime: z.lazy(() => createElementSchema()).optional(),
      occurrencePeriod: createPeriodSchema().optional(),
      occurrenceTiming: createTimingSchema().optional(),
      asNeededBoolean: z.boolean().optional(),
      _asNeededBoolean: z.lazy(() => createElementSchema()).optional(),
      asNeededCodeableConcept: createCodeableConceptSchema().optional(),
      authoredOn: primitives.getDateTimeSchema().optional(),
      _authoredOn: z.lazy(() => createElementSchema()).optional(),
      requester: createReferenceSchema().optional(),
      performerType: createCodeableConceptSchema().optional(),
      performer: z.array(createReferenceSchema()).optional(),
      locationCode: z.array(createCodeableConceptSchema()).optional(),
      locationReference: z.array(createReferenceSchema()).optional(),
      reasonCode: z.array(createCodeableConceptSchema()).optional(),
      reasonReference: z.array(createReferenceSchema()).optional(),
      insurance: z.array(createReferenceSchema()).optional(),
      supportingInfo: z.array(createReferenceSchema()).optional(),
      specimen: z.array(createReferenceSchema()).optional(),
      bodySite: z.array(createCodeableConceptSchema()).optional(),
      note: z.array(createAnnotationSchema()).optional(),
      patientInstruction: primitives.getStringSchema().optional(),
      _patientInstruction: z.lazy(() => createElementSchema()).optional(),
      relevantHistory: z.array(createReferenceSchema()).optional(),
    });

    return baseSchema;
  });
}
