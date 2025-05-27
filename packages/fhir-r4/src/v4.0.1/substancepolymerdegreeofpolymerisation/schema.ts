import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createSubstanceAmountSchema } from "../substanceamount/schema";

/* Generated from FHIR JSON Schema */

export function createSubstancePolymerDegreeOfPolymerisationSchema() {
  const baseSchema: z.ZodType<types.SubstancePolymerDegreeOfPolymerisation> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      degree: z.lazy(() => createCodeableConceptSchema()).optional(),
      amount: z.lazy(() => createSubstanceAmountSchema()).optional(),
    });

  return baseSchema;
}
