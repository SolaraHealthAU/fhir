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
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        series: primitives.getStringSchema().optional(),
        _series: createElementSchema().optional(),
        authority: createReferenceSchema().optional(),
        targetDisease: z.array(createCodeableConceptSchema()).optional(),
        doseNumberPositiveInt: z.number().optional(),
        _doseNumberPositiveInt: createElementSchema().optional(),
        doseNumberString: z.string().optional(),
        _doseNumberString: createElementSchema().optional(),
        seriesDosesPositiveInt: z.number().optional(),
        _seriesDosesPositiveInt: createElementSchema().optional(),
        seriesDosesString: z.string().optional(),
        _seriesDosesString: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
