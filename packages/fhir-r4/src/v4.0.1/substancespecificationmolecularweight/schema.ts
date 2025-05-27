import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceSpecificationMolecularWeightSchema() {
  return getCachedSchema("SubstanceSpecificationMolecularWeight", () => {
    const baseSchema: z.ZodType<types.SubstanceSpecificationMolecularWeight> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        method: createCodeableConceptSchema().optional(),
        type: createCodeableConceptSchema().optional(),
        amount: createQuantitySchema().optional(),
      });

    return baseSchema;
  });
}
