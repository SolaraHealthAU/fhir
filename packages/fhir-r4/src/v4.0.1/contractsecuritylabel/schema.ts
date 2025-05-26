import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodingSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createContractSecurityLabelSchema() {
  const baseSchema: z.ZodType<types.ContractSecurityLabel> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    number: z.array(primitives.createUnsignedIntSchema()).optional(),
    _number: z.array(z.lazy(() => createElementSchema())).optional(),
    classification: z.lazy(() => createCodingSchema()),
    category: z.array(z.lazy(() => createCodingSchema())).optional(),
    control: z.array(z.lazy(() => createCodingSchema())).optional(),
  });

  return baseSchema;
}
