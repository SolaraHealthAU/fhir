import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createMetaSchema, createElementSchema } from "../core/schema";
import { createParametersParameterSchema } from "../parametersparameter/schema";

/* Generated from FHIR JSON Schema */

export function createParametersSchema() {
  const baseSchema: z.ZodType<types.Parameters> = z.object({
    resourceType: z.literal("Parameters"),
    id: primitives.createIdSchema().optional(),
    meta: z.lazy(() => createMetaSchema()).optional(),
    implicitRules: primitives.createUriSchema().optional(),
    _implicitRules: z.lazy(() => createElementSchema()).optional(),
    language: primitives.createCodeSchema().optional(),
    _language: z.lazy(() => createElementSchema()).optional(),
    parameter: z
      .array(z.lazy(() => createParametersParameterSchema()))
      .optional(),
  });

  return baseSchema;
}
