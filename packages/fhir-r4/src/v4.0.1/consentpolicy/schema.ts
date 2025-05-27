import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createConsentPolicySchema() {
  return getCachedSchema("ConsentPolicy", () => {
    const baseSchema: z.ZodType<types.ConsentPolicy> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      authority: primitives.getUriSchema().optional(),
      _authority: z.lazy(() => createElementSchema()).optional(),
      uri: primitives.getUriSchema().optional(),
      _uri: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
