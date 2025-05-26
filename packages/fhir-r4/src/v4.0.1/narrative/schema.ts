import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createNarrativeSchema() {
  const baseSchema: z.ZodType<types.Narrative> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    status: z.enum(["generated", "extensions", "additional", "empty"]),
    _status: z.lazy(() => createElementSchema()).optional(),
    div: primitives.createXhtmlSchema(),
  });

  return baseSchema;
}
