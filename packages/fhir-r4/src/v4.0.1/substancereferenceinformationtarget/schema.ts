import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("SubstanceReferenceInformationTarget", () => {
    const baseSchema: z.ZodType<types.SubstanceReferenceInformationTarget> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        target: z.lazy(() => createIdentifierSchema()).optional(),
        type: createCodeableConceptSchema().optional(),
        interaction: createCodeableConceptSchema().optional(),
        organism: createCodeableConceptSchema().optional(),
        organismType: createCodeableConceptSchema().optional(),
        amountQuantity: createQuantitySchema().optional(),
        amountRange: createRangeSchema().optional(),
        amountString: z.string().optional(),
        _amountString: z.lazy(() => createElementSchema()).optional(),
        amountType: createCodeableConceptSchema().optional(),
        source: z.array(createReferenceSchema()).optional(),
      });

    return baseSchema;
  });
}
