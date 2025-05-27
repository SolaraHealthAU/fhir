import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMolecularSequenceRepositorySchema() {
  return getCachedSchema("MolecularSequenceRepository", () => {
    const baseSchema: z.ZodType<types.MolecularSequenceRepository> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        type: z.enum(["directlink", "openapi", "login", "oauth", "other"]),
        _type: z.lazy(() => createElementSchema()).optional(),
        url: primitives.getUriSchema().optional(),
        _url: z.lazy(() => createElementSchema()).optional(),
        name: primitives.getStringSchema().optional(),
        _name: z.lazy(() => createElementSchema()).optional(),
        datasetId: primitives.getStringSchema().optional(),
        _datasetId: z.lazy(() => createElementSchema()).optional(),
        variantsetId: primitives.getStringSchema().optional(),
        _variantsetId: z.lazy(() => createElementSchema()).optional(),
        readsetId: primitives.getStringSchema().optional(),
        _readsetId: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
