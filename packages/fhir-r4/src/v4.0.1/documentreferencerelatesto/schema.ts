import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDocumentReferenceRelatesToSchema() {
  const baseSchema: z.ZodType<types.DocumentReferenceRelatesTo> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    code: z.enum(["replaces", "transforms", "signs", "appends"]),
    _code: z.lazy(() => createElementSchema()).optional(),
    target: z.lazy(() => createReferenceSchema()),
  });

  return baseSchema;
}
