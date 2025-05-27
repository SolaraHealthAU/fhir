import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createSubstanceAmountSchema } from "../substanceamount/schema";

/* Generated from FHIR JSON Schema */

export function createSubstancePolymerDegreeOfPolymerisationSchema() {
  return getCachedSchema("SubstancePolymerDegreeOfPolymerisation", () => {
    const baseSchema: z.ZodType<types.SubstancePolymerDegreeOfPolymerisation> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        degree: createCodeableConceptSchema().optional(),
        amount: createSubstanceAmountSchema().optional(),
      });

    return baseSchema;
  });
}
