import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createRangeSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceReferenceInformationTargetSchema() {
  const baseSchema: z.ZodType<types.SubstanceReferenceInformationTarget> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      target: z.lazy(() => createIdentifierSchema()).optional(),
      type: z.lazy(() => createCodeableConceptSchema()).optional(),
      interaction: z.lazy(() => createCodeableConceptSchema()).optional(),
      organism: z.lazy(() => createCodeableConceptSchema()).optional(),
      organismType: z.lazy(() => createCodeableConceptSchema()).optional(),
      amountQuantity: z.lazy(() => createQuantitySchema()).optional(),
      amountRange: z.lazy(() => createRangeSchema()).optional(),
      amountString: z.string().optional(),
      _amountString: z.lazy(() => createElementSchema()).optional(),
      amountType: z.lazy(() => createCodeableConceptSchema()).optional(),
      source: z.array(z.lazy(() => createReferenceSchema())).optional(),
    });

  return baseSchema;
}
