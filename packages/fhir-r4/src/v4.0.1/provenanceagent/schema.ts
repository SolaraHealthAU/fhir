import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createProvenanceAgentSchema() {
  return getCachedSchema("ProvenanceAgent", () => {
    const baseSchema: z.ZodType<types.ProvenanceAgent> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: createCodeableConceptSchema().optional(),
      role: z.array(createCodeableConceptSchema()).optional(),
      who: createReferenceSchema(),
      onBehalfOf: createReferenceSchema().optional(),
    });

    return baseSchema;
  });
}
