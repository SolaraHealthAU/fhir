import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createConceptMapDependsOnSchema() {
  return getCachedSchema("ConceptMapDependsOn", () => {
    const baseSchema: z.ZodType<types.ConceptMapDependsOn> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      property: primitives.getUriSchema().optional(),
      _property: createElementSchema().optional(),
      system: primitives.getCanonicalSchema().optional(),
      value: primitives.getStringSchema().optional(),
      _value: createElementSchema().optional(),
      display: primitives.getStringSchema().optional(),
      _display: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
