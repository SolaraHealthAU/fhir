import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTerminologyCapabilitiesImplementationSchema() {
  return getCachedSchema("TerminologyCapabilitiesImplementation", () => {
    const baseSchema: z.ZodType<types.TerminologyCapabilitiesImplementation> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        description: primitives.getStringSchema(),
        _description: createElementSchema().optional(),
        url: primitives.getUrlSchema().optional(),
        _url: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
