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
  createQuantitySchema,
  createMoneySchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createChargeItemPerformerSchema } from "../chargeitemperformer/schema";

/* Generated from FHIR JSON Schema */

export function createChargeItemSchema() {
  return getCachedSchema("ChargeItem", () => {
    const baseSchema: z.ZodType<types.ChargeItem> = z.strictObject({
      resourceType: z.literal("ChargeItem"),
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
      definitionUri: z.array(primitives.getUriSchema()).optional(),
      _definitionUri: z.array(z.lazy(() => createElementSchema())).optional(),
      definitionCanonical: z.array(primitives.getCanonicalSchema()).optional(),
      status: z.enum([
        "planned",
        "billable",
        "not-billable",
        "aborted",
        "billed",
        "entered-in-error",
        "unknown",
      ]),
      _status: z.lazy(() => createElementSchema()).optional(),
      partOf: z.array(createReferenceSchema()).optional(),
      code: createCodeableConceptSchema(),
      subject: createReferenceSchema(),
      context: createReferenceSchema().optional(),
      occurrenceDateTime: z.string().optional(),
      _occurrenceDateTime: z.lazy(() => createElementSchema()).optional(),
      occurrencePeriod: createPeriodSchema().optional(),
      occurrenceTiming: createTimingSchema().optional(),
      performer: z.array(createChargeItemPerformerSchema()).optional(),
      performingOrganization: createReferenceSchema().optional(),
      requestingOrganization: createReferenceSchema().optional(),
      costCenter: createReferenceSchema().optional(),
      quantity: createQuantitySchema().optional(),
      bodysite: z.array(createCodeableConceptSchema()).optional(),
      factorOverride: primitives.getDecimalSchema().optional(),
      _factorOverride: z.lazy(() => createElementSchema()).optional(),
      priceOverride: createMoneySchema().optional(),
      overrideReason: primitives.getStringSchema().optional(),
      _overrideReason: z.lazy(() => createElementSchema()).optional(),
      enterer: createReferenceSchema().optional(),
      enteredDate: primitives.getDateTimeSchema().optional(),
      _enteredDate: z.lazy(() => createElementSchema()).optional(),
      reason: z.array(createCodeableConceptSchema()).optional(),
      service: z.array(createReferenceSchema()).optional(),
      productReference: createReferenceSchema().optional(),
      productCodeableConcept: createCodeableConceptSchema().optional(),
      account: z.array(createReferenceSchema()).optional(),
      note: z.array(createAnnotationSchema()).optional(),
      supportingInformation: z.array(createReferenceSchema()).optional(),
    });

    return baseSchema;
  });
}
