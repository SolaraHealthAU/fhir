import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTerminologyCapabilitiesFilterSchema() {
  const baseSchema: z.ZodType<types.TerminologyCapabilitiesFilter> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    code: primitives.createCodeSchema().optional(),
    _code: z.lazy(() => createElementSchema()).optional(),
    op: z.array(primitives.createCodeSchema()).optional(),
    _op: z.array(z.lazy(() => createElementSchema())).optional(),
  });

  return baseSchema;
}
