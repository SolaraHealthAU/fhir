import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCompartmentDefinitionResourceSchema() {
  const baseSchema: z.ZodType<types.CompartmentDefinitionResource> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    code: primitives.createCodeSchema(),
    _code: z.lazy(() => createElementSchema()).optional(),
    param: z.array(primitives.createStringSchema()).optional(),
    _param: z.array(z.lazy(() => createElementSchema())).optional(),
    documentation: primitives.createStringSchema().optional(),
    _documentation: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
