import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createOperationDefinitionBindingSchema } from "../operationdefinitionbinding/schema";
import { createOperationDefinitionReferencedFromSchema } from "../operationdefinitionreferencedfrom/schema";

/* Generated from FHIR JSON Schema */

export function createOperationDefinitionParameterSchema() {
  const baseSchema: z.ZodType<types.OperationDefinitionParameter> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    name: primitives.createCodeSchema(),
    _name: z.lazy(() => createElementSchema()).optional(),
    use: z.enum(["in", "out"]),
    _use: z.lazy(() => createElementSchema()).optional(),
    min: primitives.createIntegerSchema(),
    _min: z.lazy(() => createElementSchema()).optional(),
    max: primitives.createStringSchema(),
    _max: z.lazy(() => createElementSchema()).optional(),
    documentation: primitives.createStringSchema().optional(),
    _documentation: z.lazy(() => createElementSchema()).optional(),
    type: primitives.createCodeSchema().optional(),
    _type: z.lazy(() => createElementSchema()).optional(),
    targetProfile: z.array(primitives.createCanonicalSchema()).optional(),
    searchType: z
      .enum([
        "number",
        "date",
        "string",
        "token",
        "reference",
        "composite",
        "quantity",
        "uri",
        "special",
      ])
      .optional(),
    _searchType: z.lazy(() => createElementSchema()).optional(),
    binding: z.lazy(() => createOperationDefinitionBindingSchema()).optional(),
    referencedFrom: z
      .array(z.lazy(() => createOperationDefinitionReferencedFromSchema()))
      .optional(),
    part: z
      .array(z.lazy(() => createOperationDefinitionParameterSchema()))
      .optional(),
  });

  return baseSchema;
}
