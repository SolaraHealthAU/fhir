import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createTerminologyCapabilitiesFilterSchema } from "../terminologycapabilitiesfilter/schema";

/* Generated from FHIR JSON Schema */

export function createTerminologyCapabilitiesVersionSchema() {
  return getCachedSchema("TerminologyCapabilitiesVersion", () => {
    const baseSchema: z.ZodType<types.TerminologyCapabilitiesVersion> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        code: primitives.getStringSchema().optional(),
        _code: createElementSchema().optional(),
        isDefault: primitives.getBooleanSchema().optional(),
        _isDefault: createElementSchema().optional(),
        compositional: primitives.getBooleanSchema().optional(),
        _compositional: createElementSchema().optional(),
        language: z.array(primitives.getCodeSchema()).optional(),
        _language: z.array(createElementSchema()).optional(),
        filter: z.array(createTerminologyCapabilitiesFilterSchema()).optional(),
        property: z.array(primitives.getCodeSchema()).optional(),
        _property: z.array(createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
