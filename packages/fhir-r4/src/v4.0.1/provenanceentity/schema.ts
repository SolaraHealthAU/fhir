import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";
import { createProvenanceAgentSchema } from "../provenanceagent/schema";

/* Generated from FHIR JSON Schema */

export function createProvenanceEntitySchema() {
  const baseSchema: z.ZodType<types.ProvenanceEntity> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    role: z.enum(["derivation", "revision", "quotation", "source", "removal"]),
    _role: z.lazy(() => createElementSchema()).optional(),
    what: z.lazy(() => createReferenceSchema()),
    agent: z.array(z.lazy(() => createProvenanceAgentSchema())).optional(),
  });

  return baseSchema;
}
