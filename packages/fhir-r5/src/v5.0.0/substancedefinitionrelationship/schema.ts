import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createQuantitySchema,
  createRatioSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceDefinitionRelationshipSchema() {
  const baseSchema: z.ZodType<types.SubstanceDefinitionRelationship> = z.object(
    {
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      substanceDefinitionReference: z
        .lazy(() => createReferenceSchema())
        .optional(),
      substanceDefinitionCodeableConcept: z
        .lazy(() => createCodeableConceptSchema())
        .optional(),
      type: z.lazy(() => createCodeableConceptSchema()),
      isDefining: primitives.createBooleanSchema().optional(),
      _isDefining: z.lazy(() => createElementSchema()).optional(),
      amountQuantity: z.lazy(() => createQuantitySchema()).optional(),
      amountRatio: z.lazy(() => createRatioSchema()).optional(),
      amountString: z.string().optional(),
      _amountString: z.lazy(() => createElementSchema()).optional(),
      ratioHighLimitAmount: z.lazy(() => createRatioSchema()).optional(),
      comparator: z.lazy(() => createCodeableConceptSchema()).optional(),
      source: z.array(z.lazy(() => createReferenceSchema())).optional(),
    },
  );

  return baseSchema;
}
