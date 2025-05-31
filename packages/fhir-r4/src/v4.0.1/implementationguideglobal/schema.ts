import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createImplementationGuideGlobalSchema() {
  return getCachedSchema("ImplementationGuideGlobal", () => {
    const baseSchema: z.ZodType<types.ImplementationGuideGlobal> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        type: primitives.getCodeSchema(),
        _type: createElementSchema().optional(),
        profile: primitives.getCanonicalSchema(),
      });

    return baseSchema;
  });
}
