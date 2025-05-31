import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createIdentifierSchema,
  createElementSchema,
  createQuantitySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceSpecificationMoietySchema() {
  return getCachedSchema("SubstanceSpecificationMoiety", () => {
    const baseSchema: z.ZodType<types.SubstanceSpecificationMoiety> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        role: createCodeableConceptSchema().optional(),
        identifier: createIdentifierSchema().optional(),
        name: primitives.getStringSchema().optional(),
        _name: createElementSchema().optional(),
        stereochemistry: createCodeableConceptSchema().optional(),
        opticalActivity: createCodeableConceptSchema().optional(),
        molecularFormula: primitives.getStringSchema().optional(),
        _molecularFormula: createElementSchema().optional(),
        amountQuantity: createQuantitySchema().optional(),
        amountString: z.string().optional(),
        _amountString: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
