import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createContractPartySchema() {
  return getCachedSchema("ContractParty", () => {
    const baseSchema: z.ZodType<types.ContractParty> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      reference: z.array(createReferenceSchema()),
      role: createCodeableConceptSchema(),
    });

    return baseSchema;
  });
}
