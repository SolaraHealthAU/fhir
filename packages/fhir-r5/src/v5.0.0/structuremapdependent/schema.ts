import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createStructureMapParameterSchema } from "../structuremapparameter/schema";

/* Generated from FHIR JSON Schema */

export function createStructureMapDependentSchema() {
  const baseSchema: z.ZodType<types.StructureMapDependent> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    name: primitives.createIdSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    parameter: z.array(z.lazy(() => createStructureMapParameterSchema())),
  });

  return baseSchema;
}
