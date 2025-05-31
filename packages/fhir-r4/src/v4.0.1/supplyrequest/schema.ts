import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("SupplyRequest", () => {
    const baseSchema: z.ZodType<types.SupplyRequest> = z.strictObject({
      resourceType: z.literal("SupplyRequest"),
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
      _status: createElementSchema().optional(),
      category: createCodeableConceptSchema().optional(),
      priority: primitives.getCodeSchema().optional(),
      _priority: createElementSchema().optional(),
      itemCodeableConcept: createCodeableConceptSchema().optional(),
      itemReference: createReferenceSchema().optional(),
      quantity: createQuantitySchema(),
      parameter: z.array(createSupplyRequestParameterSchema()).optional(),
      occurrenceDateTime: z.string().optional(),
      _occurrenceDateTime: createElementSchema().optional(),
      occurrencePeriod: createPeriodSchema().optional(),
      occurrenceTiming: createTimingSchema().optional(),
      authoredOn: primitives.getDateTimeSchema().optional(),
      _authoredOn: createElementSchema().optional(),
      requester: createReferenceSchema().optional(),
      supplier: z.array(createReferenceSchema()).optional(),
      reasonCode: z.array(createCodeableConceptSchema()).optional(),
      reasonReference: z.array(createReferenceSchema()).optional(),
      deliverFrom: createReferenceSchema().optional(),
      deliverTo: createReferenceSchema().optional(),
    });

    return baseSchema;
  });
}
