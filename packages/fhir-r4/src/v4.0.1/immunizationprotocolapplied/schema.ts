import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createImmunizationProtocolAppliedSchema() {
  return getCachedSchema("ImmunizationProtocolApplied", () => {
    const baseSchema: z.ZodType<types.ImmunizationProtocolApplied> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        series: primitives.getStringSchema().optional(),
        _series: z.lazy(() => createElementSchema()).optional(),
        authority: createReferenceSchema().optional(),
        targetDisease: z.array(createCodeableConceptSchema()).optional(),
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
  });
}
