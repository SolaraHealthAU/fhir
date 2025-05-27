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
  createPeriodSchema,
  createTimingSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createSupplyDeliverySuppliedItemSchema } from "../supplydeliverysupplieditem/schema";

/* Generated from FHIR JSON Schema */

export function createSupplyDeliverySchema() {
  const baseSchema: z.ZodType<types.SupplyDelivery> = z.object({
    resourceType: z.literal("SupplyDelivery"),
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
    partOf: z.array(z.lazy(() => createReferenceSchema())).optional(),
    status: z
      .enum(["in-progress", "completed", "abandoned", "entered-in-error"])
      .optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    patient: z.lazy(() => createReferenceSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    suppliedItem: z
      .lazy(() => createSupplyDeliverySuppliedItemSchema())
      .optional(),
    occurrenceDateTime: z.string().optional(),
    _occurrenceDateTime: z.lazy(() => createElementSchema()).optional(),
    occurrencePeriod: z.lazy(() => createPeriodSchema()).optional(),
    occurrenceTiming: z.lazy(() => createTimingSchema()).optional(),
    supplier: z.lazy(() => createReferenceSchema()).optional(),
    destination: z.lazy(() => createReferenceSchema()).optional(),
    receiver: z.array(z.lazy(() => createReferenceSchema())).optional(),
  });

  return baseSchema;
}
