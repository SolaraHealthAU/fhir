import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createMetaSchema,
  createElementSchema,
  createIdentifierSchema,
  createSignatureSchema,
} from "../core/schema";
import { createBundleLinkSchema } from "../bundlelink/schema";
import { createBundleEntrySchema } from "../bundleentry/schema";

/* Generated from FHIR JSON Schema */

export function createBundleSchema() {
  return getCachedSchema("Bundle", () => {
    const baseSchema: z.ZodType<types.Bundle> = z.strictObject({
      resourceType: z.literal("Bundle"),
      id: primitives.getIdSchema().optional(),
      meta: createMetaSchema().optional(),
      implicitRules: primitives.getUriSchema().optional(),
      _implicitRules: z.lazy(() => createElementSchema()).optional(),
      language: primitives.getCodeSchema().optional(),
      _language: z.lazy(() => createElementSchema()).optional(),
      identifier: z.lazy(() => createIdentifierSchema()).optional(),
      type: z.enum([
        "document",
        "message",
        "transaction",
        "transaction-response",
        "batch",
        "batch-response",
        "history",
        "searchset",
        "collection",
      ]),
      _type: z.lazy(() => createElementSchema()).optional(),
      timestamp: primitives.getInstantSchema().optional(),
      _timestamp: z.lazy(() => createElementSchema()).optional(),
      total: primitives.getUnsignedIntSchema().optional(),
      _total: z.lazy(() => createElementSchema()).optional(),
      link: z.array(createBundleLinkSchema()).optional(),
      entry: z.array(createBundleEntrySchema()).optional(),
      signature: createSignatureSchema().optional(),
    });

    return baseSchema;
  });
}
