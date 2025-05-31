import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createTerminologyCapabilitiesVersionSchema } from "../terminologycapabilitiesversion/schema";

/* Generated from FHIR JSON Schema */

export function createTerminologyCapabilitiesCodeSystemSchema() {
  return getCachedSchema("TerminologyCapabilitiesCodeSystem", () => {
    const baseSchema: z.ZodType<types.TerminologyCapabilitiesCodeSystem> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        uri: primitives.getCanonicalSchema().optional(),
        version: z
          .array(createTerminologyCapabilitiesVersionSchema())
          .optional(),
        subsumption: primitives.getBooleanSchema().optional(),
        _subsumption: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
