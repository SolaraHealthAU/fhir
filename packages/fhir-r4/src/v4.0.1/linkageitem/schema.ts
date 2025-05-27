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

export function createLinkageItemSchema() {
  return getCachedSchema("LinkageItem", () => {
    const baseSchema: z.ZodType<types.LinkageItem> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: z.enum(["source", "alternate", "historical"]),
      _type: z.lazy(() => createElementSchema()).optional(),
      resource: createReferenceSchema(),
    });

    return baseSchema;
  });
}
