import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createSignatureSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createVerificationResultAttestationSchema() {
  return getCachedSchema("VerificationResultAttestation", () => {
    const baseSchema: z.ZodType<types.VerificationResultAttestation> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        who: createReferenceSchema().optional(),
        onBehalfOf: createReferenceSchema().optional(),
        communicationMethod: createCodeableConceptSchema().optional(),
        date: primitives.getDateSchema().optional(),
        _date: z.lazy(() => createElementSchema()).optional(),
        sourceIdentityCertificate: primitives.getStringSchema().optional(),
        _sourceIdentityCertificate: z
          .lazy(() => createElementSchema())
          .optional(),
        proxyIdentityCertificate: primitives.getStringSchema().optional(),
        _proxyIdentityCertificate: z
          .lazy(() => createElementSchema())
          .optional(),
        proxySignature: createSignatureSchema().optional(),
        sourceSignature: createSignatureSchema().optional(),
      });

    return baseSchema;
  });
}
