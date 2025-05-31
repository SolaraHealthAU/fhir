import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createImplementationGuidePage1Schema() {
  return getCachedSchema("ImplementationGuidePage1", () => {
    const baseSchema: z.ZodType<types.ImplementationGuidePage1> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        name: primitives.getStringSchema().optional(),
        _name: createElementSchema().optional(),
        title: primitives.getStringSchema().optional(),
        _title: createElementSchema().optional(),
        anchor: z.array(primitives.getStringSchema()).optional(),
        _anchor: z.array(createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
