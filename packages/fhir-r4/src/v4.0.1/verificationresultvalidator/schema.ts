import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createReferenceSchema,
  createElementSchema,
  createSignatureSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createVerificationResultValidatorSchema() {
  return getCachedSchema("VerificationResultValidator", () => {
    const baseSchema: z.ZodType<types.VerificationResultValidator> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        organization: createReferenceSchema(),
        identityCertificate: primitives.getStringSchema().optional(),
        _identityCertificate: createElementSchema().optional(),
        attestationSignature: createSignatureSchema().optional(),
      });

    return baseSchema;
  });
}
