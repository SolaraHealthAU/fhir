import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createBundleLinkSchema() {
  return getCachedSchema("BundleLink", () => {
    const baseSchema: z.ZodType<types.BundleLink> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      relation: primitives.getStringSchema(),
      _relation: z.lazy(() => createElementSchema()).optional(),
      url: primitives.getUriSchema(),
      _url: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
