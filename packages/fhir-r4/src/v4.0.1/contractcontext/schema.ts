import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createContractContextSchema() {
  const baseSchema: z.ZodType<types.ContractContext> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    reference: z.lazy(() => createReferenceSchema()).optional(),
    code: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    text: primitives.createStringSchema().optional(),
    _text: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
