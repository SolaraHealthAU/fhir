import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createIdentifierSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCoverageClassSchema() {
  const baseSchema: z.ZodType<types.CoverageClass> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.lazy(() => createCodeableConceptSchema()),
    value: z.lazy(() => createIdentifierSchema()),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
