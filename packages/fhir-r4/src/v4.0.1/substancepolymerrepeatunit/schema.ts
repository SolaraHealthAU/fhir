import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";
import { createSubstanceAmountSchema } from "../substanceamount/schema";
import { createSubstancePolymerDegreeOfPolymerisationSchema } from "../substancepolymerdegreeofpolymerisation/schema";
import { createSubstancePolymerStructuralRepresentationSchema } from "../substancepolymerstructuralrepresentation/schema";

/* Generated from FHIR JSON Schema */

export function createSubstancePolymerRepeatUnitSchema() {
  return getCachedSchema("SubstancePolymerRepeatUnit", () => {
    const baseSchema: z.ZodType<types.SubstancePolymerRepeatUnit> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        orientationOfPolymerisation: createCodeableConceptSchema().optional(),
        repeatUnit: primitives.getStringSchema().optional(),
        _repeatUnit: createElementSchema().optional(),
        amount: createSubstanceAmountSchema().optional(),
        degreeOfPolymerisation: z
          .array(createSubstancePolymerDegreeOfPolymerisationSchema())
          .optional(),
        structuralRepresentation: z
          .array(createSubstancePolymerStructuralRepresentationSchema())
          .optional(),
      });

    return baseSchema;
  });
}
