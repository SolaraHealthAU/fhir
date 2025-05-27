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
  createPeriodSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createInventoryReportInventoryListingSchema } from "../inventoryreportinventorylisting/schema";

/* Generated from FHIR JSON Schema */

export function createInventoryReportSchema() {
  const baseSchema: z.ZodType<types.InventoryReport> = z.object({
    resourceType: z.literal("InventoryReport"),
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
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    countType: primitives.createCodeSchema().optional(),
    _countType: z.lazy(() => createElementSchema()).optional(),
    operationType: z.lazy(() => createCodeableConceptSchema()).optional(),
    operationTypeReason: z.lazy(() => createCodeableConceptSchema()).optional(),
    reportedDateTime: primitives.createDateTimeSchema().optional(),
    _reportedDateTime: z.lazy(() => createElementSchema()).optional(),
    reporter: z.lazy(() => createReferenceSchema()).optional(),
    reportingPeriod: z.lazy(() => createPeriodSchema()).optional(),
    inventoryListing: z
      .array(z.lazy(() => createInventoryReportInventoryListingSchema()))
      .optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
  });

  return baseSchema;
}
