import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createContractContextSchema() {
  return getCachedSchema("ContractContext", () => {
    const baseSchema: z.ZodType<types.ContractContext> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      reference: createReferenceSchema().optional(),
      code: z.array(createCodeableConceptSchema()).optional(),
      text: primitives.getStringSchema().optional(),
      _text: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
