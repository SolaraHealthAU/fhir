import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodingSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTestScriptOriginSchema() {
  const baseSchema: z.ZodType<types.TestScriptOrigin> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    index: primitives.createIntegerSchema(),
    _index: z.lazy(() => createElementSchema()).optional(),
    profile: z.lazy(() => createCodingSchema()),
  });

  return baseSchema;
}
