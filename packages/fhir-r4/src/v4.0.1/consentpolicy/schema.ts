import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createConsentPolicySchema() {
  const baseSchema: z.ZodType<types.ConsentPolicy> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    authority: primitives.createUriSchema().optional(),
    _authority: z.lazy(() => createElementSchema()).optional(),
    uri: primitives.createUriSchema().optional(),
    _uri: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
