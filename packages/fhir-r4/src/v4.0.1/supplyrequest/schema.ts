import { z } from "zod/v4";
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
  createPeriodSchema,
  createTimingSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createSupplyRequestParameterSchema } from "../supplyrequestparameter/schema";

/* Generated from FHIR JSON Schema */

export function createSupplyRequestSchema() {
  const baseSchema: z.ZodType<types.SupplyRequest> = z.object({
    resourceType: z.literal("SupplyRequest"),
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
    status: z
      .enum([
        "draft",
        "active",
        "suspended",
        "cancelled",
        "completed",
        "entered-in-error",
        "unknown",
      ])
      .optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    category: z.lazy(() => createCodeableConceptSchema()).optional(),
    priority: primitives.createCodeSchema().optional(),
    _priority: z.lazy(() => createElementSchema()).optional(),
    itemCodeableConcept: z.lazy(() => createCodeableConceptSchema()).optional(),
    itemReference: z.lazy(() => createReferenceSchema()).optional(),
    quantity: z.lazy(() => createQuantitySchema()),
    parameter: z
      .array(z.lazy(() => createSupplyRequestParameterSchema()))
      .optional(),
    occurrenceDateTime: z.string().optional(),
    _occurrenceDateTime: z.lazy(() => createElementSchema()).optional(),
    occurrencePeriod: z.lazy(() => createPeriodSchema()).optional(),
    occurrenceTiming: z.lazy(() => createTimingSchema()).optional(),
    authoredOn: primitives.createDateTimeSchema().optional(),
    _authoredOn: z.lazy(() => createElementSchema()).optional(),
    requester: z.lazy(() => createReferenceSchema()).optional(),
    supplier: z.array(z.lazy(() => createReferenceSchema())).optional(),
    reasonCode: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    reasonReference: z.array(z.lazy(() => createReferenceSchema())).optional(),
    deliverFrom: z.lazy(() => createReferenceSchema()).optional(),
    deliverTo: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
