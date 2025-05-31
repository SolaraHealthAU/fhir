import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCapabilityStatementSoftwareSchema() {
  return getCachedSchema("CapabilityStatementSoftware", () => {
    const baseSchema: z.ZodType<types.CapabilityStatementSoftware> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        name: primitives.getStringSchema(),
        _name: createElementSchema().optional(),
        version: primitives.getStringSchema().optional(),
        _version: createElementSchema().optional(),
        releaseDate: primitives.getDateTimeSchema().optional(),
        _releaseDate: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
