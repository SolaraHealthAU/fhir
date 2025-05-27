import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCatalogEntryRelatedEntrySchema() {
  const baseSchema: z.ZodType<types.CatalogEntryRelatedEntry> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    relationtype: z.enum(["triggers", "is-replaced-by"]),
    _relationtype: z.lazy(() => createElementSchema()).optional(),
    item: z.lazy(() => createReferenceSchema()),
  });

  return baseSchema;
}
