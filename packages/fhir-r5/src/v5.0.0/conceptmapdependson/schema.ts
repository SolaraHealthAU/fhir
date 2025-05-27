import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodingSchema,
  createQuantitySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createConceptMapDependsOnSchema() {
  const baseSchema: z.ZodType<types.ConceptMapDependsOn> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    attribute: primitives.createCodeSchema().optional(),
    _attribute: z.lazy(() => createElementSchema()).optional(),
    valueCode: z.string().optional(),
    _valueCode: z.lazy(() => createElementSchema()).optional(),
    valueCoding: z.lazy(() => createCodingSchema()).optional(),
    valueString: z.string().optional(),
    _valueString: z.lazy(() => createElementSchema()).optional(),
    valueBoolean: z.boolean().optional(),
    _valueBoolean: z.lazy(() => createElementSchema()).optional(),
    valueQuantity: z.lazy(() => createQuantitySchema()).optional(),
    valueSet: primitives.createCanonicalSchema().optional(),
  });

  return baseSchema;
}
