import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCompartmentDefinitionResourceSchema() {
  return getCachedSchema("CompartmentDefinitionResource", () => {
    const baseSchema: z.ZodType<types.CompartmentDefinitionResource> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        code: primitives.getCodeSchema(),
        _code: z.lazy(() => createElementSchema()).optional(),
        param: z.array(primitives.getStringSchema()).optional(),
        _param: z.array(z.lazy(() => createElementSchema())).optional(),
        documentation: primitives.getStringSchema().optional(),
        _documentation: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
