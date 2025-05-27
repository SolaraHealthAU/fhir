import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.Bundle> = z.object({
    resourceType: z.literal("Bundle"),
    id: primitives.createIdSchema().optional(),
    meta: z.lazy(() => createMetaSchema()).optional(),
    implicitRules: primitives.createUriSchema().optional(),
    _implicitRules: z.lazy(() => createElementSchema()).optional(),
    language: primitives.createCodeSchema().optional(),
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
    timestamp: primitives.createInstantSchema().optional(),
    _timestamp: z.lazy(() => createElementSchema()).optional(),
    total: primitives.createUnsignedIntSchema().optional(),
    _total: z.lazy(() => createElementSchema()).optional(),
    link: z.array(z.lazy(() => createBundleLinkSchema())).optional(),
    entry: z.array(z.lazy(() => createBundleEntrySchema())).optional(),
    signature: z.lazy(() => createSignatureSchema()).optional(),
  });

  return baseSchema;
}
