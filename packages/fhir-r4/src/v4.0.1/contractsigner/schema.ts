import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodingSchema,
  createReferenceSchema,
  createSignatureSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createContractSignerSchema() {
  return getCachedSchema("ContractSigner", () => {
    const baseSchema: z.ZodType<types.ContractSigner> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: createCodingSchema(),
      party: createReferenceSchema(),
      signature: z.array(createSignatureSchema()),
    });

    return baseSchema;
  });
}
