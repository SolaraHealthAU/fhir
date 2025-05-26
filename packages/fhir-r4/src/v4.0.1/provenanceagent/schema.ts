import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createProvenanceAgentSchema() {
  const baseSchema: z.ZodType<types.ProvenanceAgent> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    role: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    who: z.lazy(() => createReferenceSchema()),
    onBehalfOf: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
