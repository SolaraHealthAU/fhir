import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createReferenceSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createImplementationGuideResource1Schema() {
  return getCachedSchema("ImplementationGuideResource1", () => {
    const baseSchema: z.ZodType<types.ImplementationGuideResource1> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        reference: createReferenceSchema(),
        exampleBoolean: z.boolean().optional(),
        _exampleBoolean: createElementSchema().optional(),
        exampleCanonical: z.string().optional(),
        _exampleCanonical: createElementSchema().optional(),
        relativePath: primitives.getUrlSchema().optional(),
        _relativePath: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
