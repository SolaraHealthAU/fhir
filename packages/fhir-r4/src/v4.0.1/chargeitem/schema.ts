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
  createQuantitySchema,
  createMoneySchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createChargeItemPerformerSchema } from "../chargeitemperformer/schema";

/* Generated from FHIR JSON Schema */

export function createChargeItemSchema() {
  const baseSchema: z.ZodType<types.ChargeItem> = z.object({
    resourceType: z.literal("ChargeItem"),
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
    definitionUri: z.array(primitives.createUriSchema()).optional(),
    _definitionUri: z.array(z.lazy(() => createElementSchema())).optional(),
    definitionCanonical: z.array(primitives.createCanonicalSchema()).optional(),
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
    partOf: z.array(z.lazy(() => createReferenceSchema())).optional(),
    code: z.lazy(() => createCodeableConceptSchema()),
    subject: z.lazy(() => createReferenceSchema()),
    context: z.lazy(() => createReferenceSchema()).optional(),
    occurrenceDateTime: z.string().optional(),
    _occurrenceDateTime: z.lazy(() => createElementSchema()).optional(),
    occurrencePeriod: z.lazy(() => createPeriodSchema()).optional(),
    occurrenceTiming: z.lazy(() => createTimingSchema()).optional(),
    performer: z
      .array(z.lazy(() => createChargeItemPerformerSchema()))
      .optional(),
    performingOrganization: z.lazy(() => createReferenceSchema()).optional(),
    requestingOrganization: z.lazy(() => createReferenceSchema()).optional(),
    costCenter: z.lazy(() => createReferenceSchema()).optional(),
    quantity: z.lazy(() => createQuantitySchema()).optional(),
    bodysite: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    factorOverride: primitives.createDecimalSchema().optional(),
    _factorOverride: z.lazy(() => createElementSchema()).optional(),
    priceOverride: z.lazy(() => createMoneySchema()).optional(),
    overrideReason: primitives.createStringSchema().optional(),
    _overrideReason: z.lazy(() => createElementSchema()).optional(),
    enterer: z.lazy(() => createReferenceSchema()).optional(),
    enteredDate: primitives.createDateTimeSchema().optional(),
    _enteredDate: z.lazy(() => createElementSchema()).optional(),
    reason: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    service: z.array(z.lazy(() => createReferenceSchema())).optional(),
    productReference: z.lazy(() => createReferenceSchema()).optional(),
    productCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    account: z.array(z.lazy(() => createReferenceSchema())).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    supportingInformation: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
  });

  return baseSchema;
}
