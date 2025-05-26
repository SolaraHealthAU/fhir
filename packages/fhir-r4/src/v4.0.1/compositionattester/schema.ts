import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCompositionAttesterSchema() {
  const baseSchema: z.ZodType<types.CompositionAttester> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    mode: z.enum(["personal", "professional", "legal", "official"]),
    _mode: z.lazy(() => createElementSchema()).optional(),
    time: primitives.createDateTimeSchema().optional(),
    _time: z.lazy(() => createElementSchema()).optional(),
    party: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
