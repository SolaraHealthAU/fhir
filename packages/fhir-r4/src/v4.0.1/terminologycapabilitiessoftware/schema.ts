import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTerminologyCapabilitiesSoftwareSchema() {
  const baseSchema: z.ZodType<types.TerminologyCapabilitiesSoftware> = z.object(
    {
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      name: primitives.createStringSchema(),
      _name: z.lazy(() => createElementSchema()).optional(),
      version: primitives.createStringSchema().optional(),
      _version: z.lazy(() => createElementSchema()).optional(),
    },
  );

  return baseSchema;
}
