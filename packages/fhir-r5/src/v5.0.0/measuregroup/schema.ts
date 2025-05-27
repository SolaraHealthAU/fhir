import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";
import { createMeasurePopulationSchema } from "../measurepopulation/schema";
import { createMeasureStratifierSchema } from "../measurestratifier/schema";

/* Generated from FHIR JSON Schema */

export function createMeasureGroupSchema() {
  const baseSchema: z.ZodType<types.MeasureGroup> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    linkId: primitives.createStringSchema().optional(),
    _linkId: z.lazy(() => createElementSchema()).optional(),
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    type: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    subjectCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    subjectReference: z.lazy(() => createReferenceSchema()).optional(),
    basis: primitives.createCodeSchema().optional(),
    _basis: z.lazy(() => createElementSchema()).optional(),
    scoring: z.lazy(() => createCodeableConceptSchema()).optional(),
    scoringUnit: z.lazy(() => createCodeableConceptSchema()).optional(),
    rateAggregation: primitives.createMarkdownSchema().optional(),
    _rateAggregation: z.lazy(() => createElementSchema()).optional(),
    improvementNotation: z.lazy(() => createCodeableConceptSchema()).optional(),
    library: z.array(primitives.createCanonicalSchema()).optional(),
    population: z
      .array(z.lazy(() => createMeasurePopulationSchema()))
      .optional(),
    stratifier: z
      .array(z.lazy(() => createMeasureStratifierSchema()))
      .optional(),
  });

  return baseSchema;
}
