import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.SubstancePolymerRepeatUnit> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    orientationOfPolymerisation: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    repeatUnit: primitives.createStringSchema().optional(),
    _repeatUnit: z.lazy(() => createElementSchema()).optional(),
    amount: z.lazy(() => createSubstanceAmountSchema()).optional(),
    degreeOfPolymerisation: z
      .array(z.lazy(() => createSubstancePolymerDegreeOfPolymerisationSchema()))
      .optional(),
    structuralRepresentation: z
      .array(
        z.lazy(() => createSubstancePolymerStructuralRepresentationSchema()),
      )
      .optional(),
  });

  return baseSchema;
}
