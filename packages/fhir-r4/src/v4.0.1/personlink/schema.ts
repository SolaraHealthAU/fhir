import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createReferenceSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createPersonLinkSchema() {
  const baseSchema: z.ZodType<types.PersonLink> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    target: z.lazy(() => createReferenceSchema()),
    assurance: z.enum(["level1", "level2", "level3", "level4"]).optional(),
    _assurance: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
