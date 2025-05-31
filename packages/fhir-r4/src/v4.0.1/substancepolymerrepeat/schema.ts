import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createSubstancePolymerRepeatUnitSchema } from "../substancepolymerrepeatunit/schema";

/* Generated from FHIR JSON Schema */

export function createSubstancePolymerRepeatSchema() {
  return getCachedSchema("SubstancePolymerRepeat", () => {
    const baseSchema: z.ZodType<types.SubstancePolymerRepeat> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      numberOfUnits: primitives.getIntegerSchema().optional(),
      _numberOfUnits: createElementSchema().optional(),
      averageMolecularFormula: primitives.getStringSchema().optional(),
      _averageMolecularFormula: createElementSchema().optional(),
      repeatUnitAmountType: createCodeableConceptSchema().optional(),
      repeatUnit: z.array(createSubstancePolymerRepeatUnitSchema()).optional(),
    });

    return baseSchema;
  });
}
