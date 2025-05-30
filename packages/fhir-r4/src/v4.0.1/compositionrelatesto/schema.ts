import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createIdentifierSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCompositionRelatesToSchema() {
  return getCachedSchema("CompositionRelatesTo", () => {
    const baseSchema: z.ZodType<types.CompositionRelatesTo> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      code: primitives.getCodeSchema(),
      _code: z.lazy(() => createElementSchema()).optional(),
      targetIdentifier: z.lazy(() => createIdentifierSchema()).optional(),
      targetReference: createReferenceSchema().optional(),
    });

    return baseSchema;
  });
}
