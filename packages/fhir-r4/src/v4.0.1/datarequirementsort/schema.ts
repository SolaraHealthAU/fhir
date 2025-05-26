import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDataRequirementSortSchema() {
  const baseSchema: z.ZodType<types.DataRequirementSort> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    path: primitives.createStringSchema(),
    _path: z.lazy(() => createElementSchema()).optional(),
    direction: z.enum(["ascending", "descending"]),
    _direction: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
