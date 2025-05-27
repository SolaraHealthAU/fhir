import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createReferenceSchema,
  createElementSchema,
  createSignatureSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createVerificationResultValidatorSchema() {
  const baseSchema: z.ZodType<types.VerificationResultValidator> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    organization: z.lazy(() => createReferenceSchema()),
    identityCertificate: primitives.createStringSchema().optional(),
    _identityCertificate: z.lazy(() => createElementSchema()).optional(),
    attestationSignature: z.lazy(() => createSignatureSchema()).optional(),
  });

  return baseSchema;
}
