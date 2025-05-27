import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTerminologyCapabilitiesImplementationSchema() {
  const baseSchema: z.ZodType<types.TerminologyCapabilitiesImplementation> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      description: primitives.createStringSchema(),
      _description: z.lazy(() => createElementSchema()).optional(),
      url: primitives.createUrlSchema().optional(),
      _url: z.lazy(() => createElementSchema()).optional(),
    });

  return baseSchema;
}
