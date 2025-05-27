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
    name: primitives.createCodeSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    use: primitives.createCodeSchema().optional(),
    _use: z.lazy(() => createElementSchema()).optional(),
    scope: z.array(primitives.createCodeSchema()).optional(),
    _scope: z.array(z.lazy(() => createElementSchema())).optional(),
    min: primitives.createIntegerSchema().optional(),
    _min: z.lazy(() => createElementSchema()).optional(),
    max: primitives.createStringSchema().optional(),
    _max: z.lazy(() => createElementSchema()).optional(),
    documentation: primitives.createMarkdownSchema().optional(),
    _documentation: z.lazy(() => createElementSchema()).optional(),
    type: primitives.createCodeSchema().optional(),
    _type: z.lazy(() => createElementSchema()).optional(),
    allowedType: z.array(primitives.createCodeSchema()).optional(),
    _allowedType: z.array(z.lazy(() => createElementSchema())).optional(),
    targetProfile: z.array(primitives.createCanonicalSchema()).optional(),
    searchType: primitives.createCodeSchema().optional(),
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
