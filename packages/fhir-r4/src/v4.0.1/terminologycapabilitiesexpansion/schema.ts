import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createTerminologyCapabilitiesParameterSchema } from "../terminologycapabilitiesparameter/schema";

/* Generated from FHIR JSON Schema */

export function createTerminologyCapabilitiesExpansionSchema() {
  const baseSchema: z.ZodType<types.TerminologyCapabilitiesExpansion> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      hierarchical: primitives.createBooleanSchema().optional(),
      _hierarchical: z.lazy(() => createElementSchema()).optional(),
      paging: primitives.createBooleanSchema().optional(),
      _paging: z.lazy(() => createElementSchema()).optional(),
      incomplete: primitives.createBooleanSchema().optional(),
      _incomplete: z.lazy(() => createElementSchema()).optional(),
      parameter: z
        .array(z.lazy(() => createTerminologyCapabilitiesParameterSchema()))
        .optional(),
      textFilter: primitives.createMarkdownSchema().optional(),
      _textFilter: z.lazy(() => createElementSchema()).optional(),
    });

  return baseSchema;
}
