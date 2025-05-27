import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCompositionAttesterSchema() {
  return getCachedSchema("CompositionAttester", () => {
    const baseSchema: z.ZodType<types.CompositionAttester> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      mode: z.enum(["personal", "professional", "legal", "official"]),
      _mode: z.lazy(() => createElementSchema()).optional(),
      time: primitives.getDateTimeSchema().optional(),
      _time: z.lazy(() => createElementSchema()).optional(),
      party: createReferenceSchema().optional(),
    });

    return baseSchema;
  });
}
