import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createTerminologyCapabilitiesParameterSchema } from "../terminologycapabilitiesparameter/schema";

/* Generated from FHIR JSON Schema */

export function createTerminologyCapabilitiesExpansionSchema() {
  return getCachedSchema("TerminologyCapabilitiesExpansion", () => {
    const baseSchema: z.ZodType<types.TerminologyCapabilitiesExpansion> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        hierarchical: primitives.getBooleanSchema().optional(),
        _hierarchical: z.lazy(() => createElementSchema()).optional(),
        paging: primitives.getBooleanSchema().optional(),
        _paging: z.lazy(() => createElementSchema()).optional(),
        incomplete: primitives.getBooleanSchema().optional(),
        _incomplete: z.lazy(() => createElementSchema()).optional(),
        parameter: z
          .array(createTerminologyCapabilitiesParameterSchema())
          .optional(),
        textFilter: primitives.getMarkdownSchema().optional(),
        _textFilter: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
