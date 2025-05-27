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
  createPeriodSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createCatalogEntryRelatedEntrySchema } from "../catalogentryrelatedentry/schema";

/* Generated from FHIR JSON Schema */

export function createCatalogEntrySchema() {
  return getCachedSchema("CatalogEntry", () => {
    const baseSchema: z.ZodType<types.CatalogEntry> = z.strictObject({
      resourceType: z.literal("CatalogEntry"),
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
      type: createCodeableConceptSchema().optional(),
      orderable: primitives.getBooleanSchema(),
      _orderable: z.lazy(() => createElementSchema()).optional(),
      referencedItem: createReferenceSchema(),
      additionalIdentifier: z
        .array(z.lazy(() => createIdentifierSchema()))
        .optional(),
      classification: z.array(createCodeableConceptSchema()).optional(),
      status: z.enum(["draft", "active", "retired", "unknown"]).optional(),
      _status: z.lazy(() => createElementSchema()).optional(),
      validityPeriod: createPeriodSchema().optional(),
      validTo: primitives.getDateTimeSchema().optional(),
      _validTo: z.lazy(() => createElementSchema()).optional(),
      lastUpdated: primitives.getDateTimeSchema().optional(),
      _lastUpdated: z.lazy(() => createElementSchema()).optional(),
      additionalCharacteristic: z
        .array(createCodeableConceptSchema())
        .optional(),
      additionalClassification: z
        .array(createCodeableConceptSchema())
        .optional(),
      relatedEntry: z.array(createCatalogEntryRelatedEntrySchema()).optional(),
    });

    return baseSchema;
  });
}
