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
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createSupplyDeliverySuppliedItemSchema } from "../supplydeliverysupplieditem/schema";

/* Generated from FHIR JSON Schema */

export function createSupplyDeliverySchema() {
  return getCachedSchema("SupplyDelivery", () => {
    const baseSchema: z.ZodType<types.SupplyDelivery> = z.strictObject({
      resourceType: z.literal("SupplyDelivery"),
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
      basedOn: z.array(createReferenceSchema()).optional(),
      partOf: z.array(createReferenceSchema()).optional(),
      status: z
        .enum(["in-progress", "completed", "abandoned", "entered-in-error"])
        .optional(),
      _status: z.lazy(() => createElementSchema()).optional(),
      patient: createReferenceSchema().optional(),
      type: createCodeableConceptSchema().optional(),
      suppliedItem: createSupplyDeliverySuppliedItemSchema().optional(),
      occurrenceDateTime: z.string().optional(),
      _occurrenceDateTime: z.lazy(() => createElementSchema()).optional(),
      occurrencePeriod: createPeriodSchema().optional(),
      occurrenceTiming: createTimingSchema().optional(),
      supplier: createReferenceSchema().optional(),
      destination: createReferenceSchema().optional(),
      receiver: z.array(createReferenceSchema()).optional(),
    });

    return baseSchema;
  });
}
