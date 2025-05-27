import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createReferenceSchema,
  createQuantitySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceSpecificationPropertySchema() {
  const baseSchema: z.ZodType<types.SubstanceSpecificationProperty> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    category: z.lazy(() => createCodeableConceptSchema()).optional(),
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
    parameters: primitives.createStringSchema().optional(),
    _parameters: z.lazy(() => createElementSchema()).optional(),
    definingSubstanceReference: z
      .lazy(() => createReferenceSchema())
      .optional(),
    definingSubstanceCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    amountQuantity: z.lazy(() => createQuantitySchema()).optional(),
    amountString: z.string().optional(),
    _amountString: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
