import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createQuantitySchema,
  createRangeSchema,
  createRatioSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceSpecificationRelationshipSchema() {
  const baseSchema: z.ZodType<types.SubstanceSpecificationRelationship> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      substanceReference: z.lazy(() => createReferenceSchema()).optional(),
      substanceCodeableConcept: z
        .lazy(() => createCodeableConceptSchema())
        .optional(),
      relationship: z.lazy(() => createCodeableConceptSchema()).optional(),
      isDefining: primitives.createBooleanSchema().optional(),
      _isDefining: z.lazy(() => createElementSchema()).optional(),
      amountQuantity: z.lazy(() => createQuantitySchema()).optional(),
      amountRange: z.lazy(() => createRangeSchema()).optional(),
      amountRatio: z.lazy(() => createRatioSchema()).optional(),
      amountString: z.string().optional(),
      _amountString: z.lazy(() => createElementSchema()).optional(),
      amountRatioLowLimit: z.lazy(() => createRatioSchema()).optional(),
      amountType: z.lazy(() => createCodeableConceptSchema()).optional(),
      source: z.array(z.lazy(() => createReferenceSchema())).optional(),
    });

  return baseSchema;
}
