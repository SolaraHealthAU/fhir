import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMolecularSequenceRepositorySchema() {
  const baseSchema: z.ZodType<types.MolecularSequenceRepository> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.enum(["directlink", "openapi", "login", "oauth", "other"]),
    _type: z.lazy(() => createElementSchema()).optional(),
    url: primitives.createUriSchema().optional(),
    _url: z.lazy(() => createElementSchema()).optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    datasetId: primitives.createStringSchema().optional(),
    _datasetId: z.lazy(() => createElementSchema()).optional(),
    variantsetId: primitives.createStringSchema().optional(),
    _variantsetId: z.lazy(() => createElementSchema()).optional(),
    readsetId: primitives.createStringSchema().optional(),
    _readsetId: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
