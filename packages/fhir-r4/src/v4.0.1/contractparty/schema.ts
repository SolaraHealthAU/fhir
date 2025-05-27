import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createContractPartySchema() {
  const baseSchema: z.ZodType<types.ContractParty> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    reference: z.array(z.lazy(() => createReferenceSchema())),
    role: z.lazy(() => createCodeableConceptSchema()),
  });

  return baseSchema;
}
