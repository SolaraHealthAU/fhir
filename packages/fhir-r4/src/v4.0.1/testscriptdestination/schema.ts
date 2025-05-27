import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodingSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTestScriptDestinationSchema() {
  return getCachedSchema("TestScriptDestination", () => {
    const baseSchema: z.ZodType<types.TestScriptDestination> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      index: primitives.getIntegerSchema(),
      _index: z.lazy(() => createElementSchema()).optional(),
      profile: createCodingSchema(),
    });

    return baseSchema;
  });
}
