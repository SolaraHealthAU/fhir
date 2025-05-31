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

export function createPersonLinkSchema() {
  return getCachedSchema("PersonLink", () => {
    const baseSchema: z.ZodType<types.PersonLink> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      target: createReferenceSchema(),
      assurance: z.enum(["level1", "level2", "level3", "level4"]).optional(),
      _assurance: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
