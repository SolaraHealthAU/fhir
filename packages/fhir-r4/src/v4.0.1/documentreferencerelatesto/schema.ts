import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDocumentReferenceRelatesToSchema() {
  return getCachedSchema("DocumentReferenceRelatesTo", () => {
    const baseSchema: z.ZodType<types.DocumentReferenceRelatesTo> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        code: z.enum(["replaces", "transforms", "signs", "appends"]),
        _code: z.lazy(() => createElementSchema()).optional(),
        target: createReferenceSchema(),
      });

    return baseSchema;
  });
}
