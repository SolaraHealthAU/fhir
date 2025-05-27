import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createOperationDefinitionOverloadSchema() {
  const baseSchema: z.ZodType<types.OperationDefinitionOverload> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    parameterName: z.array(primitives.createStringSchema()).optional(),
    _parameterName: z.array(z.lazy(() => createElementSchema())).optional(),
    comment: primitives.createStringSchema().optional(),
    _comment: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
