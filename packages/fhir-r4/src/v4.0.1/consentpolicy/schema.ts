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
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      authority: primitives.getUriSchema().optional(),
      _authority: createElementSchema().optional(),
      uri: primitives.getUriSchema().optional(),
      _uri: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
