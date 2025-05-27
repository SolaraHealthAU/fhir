import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createElementSchema,
  createQuantitySchema,
  createRangeSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createEvidenceVariableDefinitionByTypeAndValueSchema() {
  const baseSchema: z.ZodType<types.EvidenceVariableDefinitionByTypeAndValue> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: z.lazy(() => createCodeableConceptSchema()),
      method: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
      device: z.lazy(() => createReferenceSchema()).optional(),
      valueCodeableConcept: z
        .lazy(() => createCodeableConceptSchema())
        .optional(),
      valueBoolean: z.boolean().optional(),
      _valueBoolean: z.lazy(() => createElementSchema()).optional(),
      valueQuantity: z.lazy(() => createQuantitySchema()).optional(),
      valueRange: z.lazy(() => createRangeSchema()).optional(),
      valueReference: z.lazy(() => createReferenceSchema()).optional(),
      valueId: z.string().optional(),
      _valueId: z.lazy(() => createElementSchema()).optional(),
      offset: z.lazy(() => createCodeableConceptSchema()).optional(),
    });

  return baseSchema;
}
