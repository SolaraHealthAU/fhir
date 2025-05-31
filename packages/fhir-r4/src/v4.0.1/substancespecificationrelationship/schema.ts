import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("SubstanceSpecificationRelationship", () => {
    const baseSchema: z.ZodType<types.SubstanceSpecificationRelationship> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        substanceReference: createReferenceSchema().optional(),
        substanceCodeableConcept: createCodeableConceptSchema().optional(),
        relationship: createCodeableConceptSchema().optional(),
        isDefining: primitives.getBooleanSchema().optional(),
        _isDefining: createElementSchema().optional(),
        amountQuantity: createQuantitySchema().optional(),
        amountRange: createRangeSchema().optional(),
        amountRatio: createRatioSchema().optional(),
        amountString: z.string().optional(),
        _amountString: createElementSchema().optional(),
        amountRatioLowLimit: createRatioSchema().optional(),
        amountType: createCodeableConceptSchema().optional(),
        source: z.array(createReferenceSchema()).optional(),
      });

    return baseSchema;
  });
}
