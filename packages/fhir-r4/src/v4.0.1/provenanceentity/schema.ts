import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";
import { createProvenanceAgentSchema } from "../provenanceagent/schema";

/* Generated from FHIR JSON Schema */

export function createProvenanceEntitySchema() {
  return getCachedSchema("ProvenanceEntity", () => {
    const baseSchema: z.ZodType<types.ProvenanceEntity> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      role: z.enum([
        "derivation",
        "revision",
        "quotation",
        "source",
        "removal",
      ]),
      _role: createElementSchema().optional(),
      what: createReferenceSchema(),
      agent: z.array(createProvenanceAgentSchema()).optional(),
    });

    return baseSchema;
  });
}
