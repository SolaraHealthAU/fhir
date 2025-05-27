import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";
import { createInventoryReportItemSchema } from "../inventoryreportitem/schema";

/* Generated from FHIR JSON Schema */

export function createInventoryReportInventoryListingSchema() {
  const baseSchema: z.ZodType<types.InventoryReportInventoryListing> = z.object(
    {
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      location: z.lazy(() => createReferenceSchema()).optional(),
      itemStatus: z.lazy(() => createCodeableConceptSchema()).optional(),
      countingDateTime: primitives.createDateTimeSchema().optional(),
      _countingDateTime: z.lazy(() => createElementSchema()).optional(),
      item: z.array(z.lazy(() => createInventoryReportItemSchema())).optional(),
    },
  );

  return baseSchema;
}
