import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createConditionDefinitionPreconditionSchema() {
  const baseSchema: z.ZodType<types.ConditionDefinitionPrecondition> = z.object(
    {
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: primitives.createCodeSchema().optional(),
      _type: z.lazy(() => createElementSchema()).optional(),
      code: z.lazy(() => createCodeableConceptSchema()),
      valueCodeableConcept: z
        .lazy(() => createCodeableConceptSchema())
        .optional(),
      valueQuantity: z.lazy(() => createQuantitySchema()).optional(),
    },
  );

  return baseSchema;
}
