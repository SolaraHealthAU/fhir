import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createIdentifierSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCompositionRelatesToSchema() {
  const baseSchema: z.ZodType<types.CompositionRelatesTo> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    code: primitives.createCodeSchema(),
    _code: z.lazy(() => createElementSchema()).optional(),
    targetIdentifier: z.lazy(() => createIdentifierSchema()).optional(),
    targetReference: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
