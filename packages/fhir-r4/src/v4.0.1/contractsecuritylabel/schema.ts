import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodingSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createContractSecurityLabelSchema() {
  return getCachedSchema("ContractSecurityLabel", () => {
    const baseSchema: z.ZodType<types.ContractSecurityLabel> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      number: z.array(primitives.getUnsignedIntSchema()).optional(),
      _number: z.array(createElementSchema()).optional(),
      classification: createCodingSchema(),
      category: z.array(createCodingSchema()).optional(),
      control: z.array(createCodingSchema()).optional(),
    });

    return baseSchema;
  });
}
