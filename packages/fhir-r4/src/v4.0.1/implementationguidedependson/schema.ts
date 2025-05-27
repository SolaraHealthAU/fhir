import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createImplementationGuideDependsOnSchema() {
  return getCachedSchema("ImplementationGuideDependsOn", () => {
    const baseSchema: z.ZodType<types.ImplementationGuideDependsOn> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        uri: primitives.getCanonicalSchema(),
        packageId: primitives.getIdSchema().optional(),
        _packageId: z.lazy(() => createElementSchema()).optional(),
        version: primitives.getStringSchema().optional(),
        _version: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
