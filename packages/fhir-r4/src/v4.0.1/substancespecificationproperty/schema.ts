import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createReferenceSchema,
  createQuantitySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceSpecificationPropertySchema() {
  return getCachedSchema("SubstanceSpecificationProperty", () => {
    const baseSchema: z.ZodType<types.SubstanceSpecificationProperty> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        category: createCodeableConceptSchema().optional(),
        code: createCodeableConceptSchema().optional(),
        parameters: primitives.getStringSchema().optional(),
        _parameters: createElementSchema().optional(),
        definingSubstanceReference: createReferenceSchema().optional(),
        definingSubstanceCodeableConcept:
          createCodeableConceptSchema().optional(),
        amountQuantity: createQuantitySchema().optional(),
        amountString: z.string().optional(),
        _amountString: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
