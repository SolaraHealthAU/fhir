import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTerminologyCapabilitiesParameterSchema() {
  return getCachedSchema("TerminologyCapabilitiesParameter", () => {
    const baseSchema: z.ZodType<types.TerminologyCapabilitiesParameter> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        name: primitives.getCodeSchema().optional(),
        _name: createElementSchema().optional(),
        documentation: primitives.getStringSchema().optional(),
        _documentation: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
