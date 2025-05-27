import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTerminologyCapabilitiesFilterSchema() {
  return getCachedSchema("TerminologyCapabilitiesFilter", () => {
    const baseSchema: z.ZodType<types.TerminologyCapabilitiesFilter> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        code: primitives.getCodeSchema().optional(),
        _code: z.lazy(() => createElementSchema()).optional(),
        op: z.array(primitives.getCodeSchema()).optional(),
        _op: z.array(z.lazy(() => createElementSchema())).optional(),
      });

    return baseSchema;
  });
}
