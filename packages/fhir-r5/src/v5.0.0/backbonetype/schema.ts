import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createBackboneTypeSchema() {
  const baseSchema: z.ZodType<types.BackboneType> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
  });

  return baseSchema;
}
