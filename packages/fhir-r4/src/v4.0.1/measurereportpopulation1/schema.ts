import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMeasureReportPopulation1Schema() {
  return getCachedSchema("MeasureReportPopulation1", () => {
    const baseSchema: z.ZodType<types.MeasureReportPopulation1> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        code: createCodeableConceptSchema().optional(),
        count: primitives.getIntegerSchema().optional(),
        _count: createElementSchema().optional(),
        subjectResults: createReferenceSchema().optional(),
      });

    return baseSchema;
  });
}
