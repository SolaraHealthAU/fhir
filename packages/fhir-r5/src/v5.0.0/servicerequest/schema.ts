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
  createCodeableReferenceSchema,
  createQuantitySchema,
  createRatioSchema,
  createRangeSchema,
  createPeriodSchema,
  createTimingSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createServiceRequestOrderDetailSchema } from "../servicerequestorderdetail/schema";
import { createServiceRequestPatientInstructionSchema } from "../servicerequestpatientinstruction/schema";

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
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    intent: primitives.createCodeSchema().optional(),
    _intent: z.lazy(() => createElementSchema()).optional(),
    category: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    priority: primitives.createCodeSchema().optional(),
    _priority: z.lazy(() => createElementSchema()).optional(),
    doNotPerform: primitives.createBooleanSchema().optional(),
    _doNotPerform: z.lazy(() => createElementSchema()).optional(),
    code: z.lazy(() => createCodeableReferenceSchema()).optional(),
    orderDetail: z
      .array(z.lazy(() => createServiceRequestOrderDetailSchema()))
      .optional(),
    quantityQuantity: z.lazy(() => createQuantitySchema()).optional(),
    quantityRatio: z.lazy(() => createRatioSchema()).optional(),
    quantityRange: z.lazy(() => createRangeSchema()).optional(),
    subject: z.lazy(() => createReferenceSchema()),
    focus: z.array(z.lazy(() => createReferenceSchema())).optional(),
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
    location: z.array(z.lazy(() => createCodeableReferenceSchema())).optional(),
    reason: z.array(z.lazy(() => createCodeableReferenceSchema())).optional(),
    insurance: z.array(z.lazy(() => createReferenceSchema())).optional(),
    supportingInfo: z
      .array(z.lazy(() => createCodeableReferenceSchema()))
      .optional(),
    specimen: z.array(z.lazy(() => createReferenceSchema())).optional(),
    bodySite: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    bodyStructure: z.lazy(() => createReferenceSchema()).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    patientInstruction: z
      .array(z.lazy(() => createServiceRequestPatientInstructionSchema()))
      .optional(),
    relevantHistory: z.array(z.lazy(() => createReferenceSchema())).optional(),
  });

  return baseSchema;
}
