import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTerminologyCapabilitiesSoftwareSchema() {
  return getCachedSchema("TerminologyCapabilitiesSoftware", () => {
    const baseSchema: z.ZodType<types.TerminologyCapabilitiesSoftware> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        name: primitives.getStringSchema(),
        _name: createElementSchema().optional(),
        version: primitives.getStringSchema().optional(),
        _version: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
