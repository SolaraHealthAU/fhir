import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createStructureDefinitionContextSchema() {
  const baseSchema: z.ZodType<types.StructureDefinitionContext> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.enum(["fhirpath", "element", "extension"]),
    _type: z.lazy(() => createElementSchema()).optional(),
    expression: primitives.createStringSchema(),
    _expression: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
