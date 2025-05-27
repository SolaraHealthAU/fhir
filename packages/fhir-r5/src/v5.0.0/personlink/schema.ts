import { z } from "zod/v4";
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
    assurance: primitives.createCodeSchema().optional(),
    _assurance: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
