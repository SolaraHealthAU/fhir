import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createSignatureSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createVerificationResultAttestationSchema() {
  const baseSchema: z.ZodType<types.VerificationResultAttestation> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    who: z.lazy(() => createReferenceSchema()).optional(),
    onBehalfOf: z.lazy(() => createReferenceSchema()).optional(),
    communicationMethod: z.lazy(() => createCodeableConceptSchema()).optional(),
    date: primitives.createDateSchema().optional(),
    _date: z.lazy(() => createElementSchema()).optional(),
    sourceIdentityCertificate: primitives.createStringSchema().optional(),
    _sourceIdentityCertificate: z.lazy(() => createElementSchema()).optional(),
    proxyIdentityCertificate: primitives.createStringSchema().optional(),
    _proxyIdentityCertificate: z.lazy(() => createElementSchema()).optional(),
    proxySignature: z.lazy(() => createSignatureSchema()).optional(),
    sourceSignature: z.lazy(() => createSignatureSchema()).optional(),
  });

  return baseSchema;
}
