import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTerminologyCapabilitiesValidateCodeSchema() {
  return getCachedSchema("TerminologyCapabilitiesValidateCode", () => {
    const baseSchema: z.ZodType<types.TerminologyCapabilitiesValidateCode> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        translations: primitives.getBooleanSchema(),
        _translations: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
