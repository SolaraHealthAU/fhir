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
        fhirVersion: z
          .enum([
            "0.01",
            "0.05",
            "0.06",
            "0.11",
            "0.0.80",
            "0.0.81",
            "0.0.82",
            "0.4.0",
            "0.5.0",
            "1.0.0",
            "1.0.1",
            "1.0.2",
            "1.1.0",
            "1.4.0",
            "1.6.0",
            "1.8.0",
            "3.0.0",
            "3.0.1",
            "3.3.0",
            "3.5.0",
            "4.0.0",
            "4.0.1",
          ])
          .array()
          .optional(),
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
