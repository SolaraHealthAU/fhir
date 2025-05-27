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

export function createContractSubjectSchema() {
  return getCachedSchema("ContractSubject", () => {
    const baseSchema: z.ZodType<types.ContractSubject> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      reference: z.array(createReferenceSchema()),
      role: createCodeableConceptSchema().optional(),
    });

    return baseSchema;
  });
}
