import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createRangeSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createObservationDefinitionQualifiedIntervalSchema() {
  return getCachedSchema("ObservationDefinitionQualifiedInterval", () => {
    const baseSchema: z.ZodType<types.ObservationDefinitionQualifiedInterval> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        category: z.enum(["reference", "critical", "absolute"]).optional(),
        _category: z.lazy(() => createElementSchema()).optional(),
        range: createRangeSchema().optional(),
        context: createCodeableConceptSchema().optional(),
        appliesTo: z.array(createCodeableConceptSchema()).optional(),
        gender: z.enum(["male", "female", "other", "unknown"]).optional(),
        _gender: z.lazy(() => createElementSchema()).optional(),
        age: createRangeSchema().optional(),
        gestationalAge: createRangeSchema().optional(),
        condition: primitives.getStringSchema().optional(),
        _condition: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
