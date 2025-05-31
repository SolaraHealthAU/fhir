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
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        hierarchical: primitives.getBooleanSchema().optional(),
        _hierarchical: createElementSchema().optional(),
        paging: primitives.getBooleanSchema().optional(),
        _paging: createElementSchema().optional(),
        incomplete: primitives.getBooleanSchema().optional(),
        _incomplete: createElementSchema().optional(),
        parameter: z
          .array(createTerminologyCapabilitiesParameterSchema())
          .optional(),
        textFilter: primitives.getMarkdownSchema().optional(),
        _textFilter: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
