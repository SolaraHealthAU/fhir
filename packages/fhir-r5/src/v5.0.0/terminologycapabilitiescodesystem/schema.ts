import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createTerminologyCapabilitiesVersionSchema } from "../terminologycapabilitiesversion/schema";

/* Generated from FHIR JSON Schema */

export function createTerminologyCapabilitiesCodeSystemSchema() {
  const baseSchema: z.ZodType<types.TerminologyCapabilitiesCodeSystem> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      uri: primitives.createCanonicalSchema().optional(),
      version: z
        .array(z.lazy(() => createTerminologyCapabilitiesVersionSchema()))
        .optional(),
      content: primitives.createCodeSchema().optional(),
      _content: z.lazy(() => createElementSchema()).optional(),
      subsumption: primitives.createBooleanSchema().optional(),
      _subsumption: z.lazy(() => createElementSchema()).optional(),
    });

  return baseSchema;
}
