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
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        reference: createReferenceSchema(),
        fhirVersion: z.array(z.any()).optional(),
        _fhirVersion: z.array(createElementSchema()).optional(),
        name: primitives.getStringSchema().optional(),
        _name: createElementSchema().optional(),
        description: primitives.getStringSchema().optional(),
        _description: createElementSchema().optional(),
        exampleBoolean: z.boolean().optional(),
        _exampleBoolean: createElementSchema().optional(),
        exampleCanonical: z.string().optional(),
        _exampleCanonical: createElementSchema().optional(),
        groupingId: primitives.getIdSchema().optional(),
        _groupingId: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
