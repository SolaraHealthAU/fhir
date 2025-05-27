import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTestScriptFixtureSchema() {
  const baseSchema: z.ZodType<types.TestScriptFixture> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    autocreate: primitives.createBooleanSchema().optional(),
    _autocreate: z.lazy(() => createElementSchema()).optional(),
    autodelete: primitives.createBooleanSchema().optional(),
    _autodelete: z.lazy(() => createElementSchema()).optional(),
    resource: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
