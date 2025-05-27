import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstancePolymerDegreeOfPolymerisationSchema() {
  const baseSchema: z.ZodType<types.SubstancePolymerDegreeOfPolymerisation> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: z.lazy(() => createCodeableConceptSchema()).optional(),
      average: primitives.createIntegerSchema().optional(),
      _average: z.lazy(() => createElementSchema()).optional(),
      low: primitives.createIntegerSchema().optional(),
      _low: z.lazy(() => createElementSchema()).optional(),
      high: primitives.createIntegerSchema().optional(),
      _high: z.lazy(() => createElementSchema()).optional(),
    });

  return baseSchema;
}
