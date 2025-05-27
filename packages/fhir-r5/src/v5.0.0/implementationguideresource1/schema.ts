import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createReferenceSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createImplementationGuideResource1Schema() {
  const baseSchema: z.ZodType<types.ImplementationGuideResource1> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    reference: z.lazy(() => createReferenceSchema()),
    isExample: primitives.createBooleanSchema().optional(),
    _isExample: z.lazy(() => createElementSchema()).optional(),
    profile: z.array(primitives.createCanonicalSchema()).optional(),
    relativePath: primitives.createUrlSchema().optional(),
    _relativePath: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
