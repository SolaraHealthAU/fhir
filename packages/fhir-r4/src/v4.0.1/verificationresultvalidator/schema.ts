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
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        organization: createReferenceSchema(),
        identityCertificate: primitives.getStringSchema().optional(),
        _identityCertificate: z.lazy(() => createElementSchema()).optional(),
        attestationSignature: createSignatureSchema().optional(),
      });

    return baseSchema;
  });
}
