import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodingSchema,
  createReferenceSchema,
  createSignatureSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createContractSignerSchema() {
  const baseSchema: z.ZodType<types.ContractSigner> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.lazy(() => createCodingSchema()),
    party: z.lazy(() => createReferenceSchema()),
    signature: z.array(z.lazy(() => createSignatureSchema())),
  });

  return baseSchema;
}
