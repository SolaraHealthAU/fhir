import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createIdentifierSchema,
  createElementSchema,
  createQuantitySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceDefinitionMoietySchema() {
  const baseSchema: z.ZodType<types.SubstanceDefinitionMoiety> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    role: z.lazy(() => createCodeableConceptSchema()).optional(),
    identifier: z.lazy(() => createIdentifierSchema()).optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    stereochemistry: z.lazy(() => createCodeableConceptSchema()).optional(),
    opticalActivity: z.lazy(() => createCodeableConceptSchema()).optional(),
    molecularFormula: primitives.createStringSchema().optional(),
    _molecularFormula: z.lazy(() => createElementSchema()).optional(),
    amountQuantity: z.lazy(() => createQuantitySchema()).optional(),
    amountString: z.string().optional(),
    _amountString: z.lazy(() => createElementSchema()).optional(),
    measurementType: z.lazy(() => createCodeableConceptSchema()).optional(),
  });

  return baseSchema;
}
