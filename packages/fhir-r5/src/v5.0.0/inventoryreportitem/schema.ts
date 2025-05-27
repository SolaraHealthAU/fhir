import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createCodeableReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createInventoryReportItemSchema() {
  const baseSchema: z.ZodType<types.InventoryReportItem> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    category: z.lazy(() => createCodeableConceptSchema()).optional(),
    quantity: z.lazy(() => createQuantitySchema()),
    item: z.lazy(() => createCodeableReferenceSchema()),
  });

  return baseSchema;
}
