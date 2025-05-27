import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createSubstancePolymerRepeatUnitSchema } from "../substancepolymerrepeatunit/schema";

/* Generated from FHIR JSON Schema */

export function createSubstancePolymerRepeatSchema() {
  const baseSchema: z.ZodType<types.SubstancePolymerRepeat> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    averageMolecularFormula: primitives.createStringSchema().optional(),
    _averageMolecularFormula: z.lazy(() => createElementSchema()).optional(),
    repeatUnitAmountType: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    repeatUnit: z
      .array(z.lazy(() => createSubstancePolymerRepeatUnitSchema()))
      .optional(),
  });

  return baseSchema;
}
