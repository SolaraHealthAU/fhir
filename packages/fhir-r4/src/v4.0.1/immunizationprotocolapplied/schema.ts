import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createImmunizationProtocolAppliedSchema() {
  const baseSchema: z.ZodType<types.ImmunizationProtocolApplied> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    series: primitives.createStringSchema().optional(),
    _series: z.lazy(() => createElementSchema()).optional(),
    authority: z.lazy(() => createReferenceSchema()).optional(),
    targetDisease: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    doseNumberPositiveInt: z.number().optional(),
    _doseNumberPositiveInt: z.lazy(() => createElementSchema()).optional(),
    doseNumberString: z.string().optional(),
    _doseNumberString: z.lazy(() => createElementSchema()).optional(),
    seriesDosesPositiveInt: z.number().optional(),
    _seriesDosesPositiveInt: z.lazy(() => createElementSchema()).optional(),
    seriesDosesString: z.string().optional(),
    _seriesDosesString: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
