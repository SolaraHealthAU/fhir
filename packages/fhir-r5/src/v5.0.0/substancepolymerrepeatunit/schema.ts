import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
} from "../core/schema";
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
    unit: primitives.createStringSchema().optional(),
    _unit: z.lazy(() => createElementSchema()).optional(),
    orientation: z.lazy(() => createCodeableConceptSchema()).optional(),
    amount: primitives.createIntegerSchema().optional(),
    _amount: z.lazy(() => createElementSchema()).optional(),
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
