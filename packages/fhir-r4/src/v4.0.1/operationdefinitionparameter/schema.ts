import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createOperationDefinitionBindingSchema } from "../operationdefinitionbinding/schema";
import { createOperationDefinitionReferencedFromSchema } from "../operationdefinitionreferencedfrom/schema";

/* Generated from FHIR JSON Schema */

export function createOperationDefinitionParameterSchema() {
  return getCachedSchema("OperationDefinitionParameter", () => {
    const baseSchema: z.ZodType<types.OperationDefinitionParameter> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        name: primitives.getCodeSchema(),
        _name: z.lazy(() => createElementSchema()).optional(),
        use: z.enum(["in", "out"]),
        _use: z.lazy(() => createElementSchema()).optional(),
        min: primitives.getIntegerSchema(),
        _min: z.lazy(() => createElementSchema()).optional(),
        max: primitives.getStringSchema(),
        _max: z.lazy(() => createElementSchema()).optional(),
        documentation: primitives.getStringSchema().optional(),
        _documentation: z.lazy(() => createElementSchema()).optional(),
        type: primitives.getCodeSchema().optional(),
        _type: z.lazy(() => createElementSchema()).optional(),
        targetProfile: z.array(primitives.getCanonicalSchema()).optional(),
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
        binding: createOperationDefinitionBindingSchema().optional(),
        referencedFrom: z
          .array(createOperationDefinitionReferencedFromSchema())
          .optional(),
        part: z.array(createOperationDefinitionParameterSchema()).optional(),
      });

    return baseSchema;
  });
}
