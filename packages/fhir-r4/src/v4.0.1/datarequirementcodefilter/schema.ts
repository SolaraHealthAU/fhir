import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodingSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDataRequirementCodeFilterSchema() {
  return getCachedSchema("DataRequirementCodeFilter", () => {
    const baseSchema: z.ZodType<types.DataRequirementCodeFilter> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        path: primitives.getStringSchema().optional(),
        _path: z.lazy(() => createElementSchema()).optional(),
        searchParam: primitives.getStringSchema().optional(),
        _searchParam: z.lazy(() => createElementSchema()).optional(),
        valueSet: primitives.getCanonicalSchema().optional(),
        code: z.array(createCodingSchema()).optional(),
      });

    return baseSchema;
  });
}
