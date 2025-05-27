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

export function createImplementationGuideResourceSchema() {
  return getCachedSchema("ImplementationGuideResource", () => {
    const baseSchema: z.ZodType<types.ImplementationGuideResource> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        reference: createReferenceSchema(),
        fhirVersion: z.array(z.any()).optional(),
        _fhirVersion: z.array(z.lazy(() => createElementSchema())).optional(),
        name: primitives.getStringSchema().optional(),
        _name: z.lazy(() => createElementSchema()).optional(),
        description: primitives.getStringSchema().optional(),
        _description: z.lazy(() => createElementSchema()).optional(),
        exampleBoolean: z.boolean().optional(),
        _exampleBoolean: z.lazy(() => createElementSchema()).optional(),
        exampleCanonical: z.string().optional(),
        _exampleCanonical: z.lazy(() => createElementSchema()).optional(),
        groupingId: primitives.getIdSchema().optional(),
        _groupingId: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
