import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createPeriodSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createCatalogEntryRelatedEntrySchema } from "../catalogentryrelatedentry/schema";

/* Generated from FHIR JSON Schema */

export function createCatalogEntrySchema() {
  const baseSchema: z.ZodType<types.CatalogEntry> = z.object({
    resourceType: z.literal("CatalogEntry"),
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
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    orderable: primitives.createBooleanSchema(),
    _orderable: z.lazy(() => createElementSchema()).optional(),
    referencedItem: z.lazy(() => createReferenceSchema()),
    additionalIdentifier: z
      .array(z.lazy(() => createIdentifierSchema()))
      .optional(),
    classification: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    status: z.enum(["draft", "active", "retired", "unknown"]).optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    validityPeriod: z.lazy(() => createPeriodSchema()).optional(),
    validTo: primitives.createDateTimeSchema().optional(),
    _validTo: z.lazy(() => createElementSchema()).optional(),
    lastUpdated: primitives.createDateTimeSchema().optional(),
    _lastUpdated: z.lazy(() => createElementSchema()).optional(),
    additionalCharacteristic: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    additionalClassification: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    relatedEntry: z
      .array(z.lazy(() => createCatalogEntryRelatedEntrySchema()))
      .optional(),
  });

  return baseSchema;
}
