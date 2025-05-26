import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCodeSystemFilterSchema() {
  const baseSchema: z.ZodType<types.CodeSystemFilter> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    code: primitives.createCodeSchema(),
    _code: z.lazy(() => createElementSchema()).optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    operator: z.array(primitives.createCodeSchema()),
    _operator: z.array(z.lazy(() => createElementSchema())).optional(),
    value: primitives.createStringSchema(),
    _value: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
