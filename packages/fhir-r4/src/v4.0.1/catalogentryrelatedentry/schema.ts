import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCatalogEntryRelatedEntrySchema() {
  return getCachedSchema("CatalogEntryRelatedEntry", () => {
    const baseSchema: z.ZodType<types.CatalogEntryRelatedEntry> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        relationtype: z.enum(["triggers", "is-replaced-by"]),
        _relationtype: createElementSchema().optional(),
        item: createReferenceSchema(),
      });

    return baseSchema;
  });
}
