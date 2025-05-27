import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createBundleLinkSchema() {
  const baseSchema: z.ZodType<types.BundleLink> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    relation: primitives.createStringSchema(),
    _relation: z.lazy(() => createElementSchema()).optional(),
    url: primitives.createUriSchema(),
    _url: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
