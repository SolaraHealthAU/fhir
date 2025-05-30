import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDocumentManifestRelatedSchema() {
  return getCachedSchema("DocumentManifestRelated", () => {
    const baseSchema: z.ZodType<types.DocumentManifestRelated> = z.strictObject(
      {
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        identifier: z.lazy(() => createIdentifierSchema()).optional(),
        ref: createReferenceSchema().optional(),
      },
    );

    return baseSchema;
  });
}
