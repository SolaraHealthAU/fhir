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

export function createMeasureReportPopulationSchema() {
  return getCachedSchema("MeasureReportPopulation", () => {
    const baseSchema: z.ZodType<types.MeasureReportPopulation> = z.strictObject(
      {
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        code: createCodeableConceptSchema().optional(),
        count: primitives.getIntegerSchema().optional(),
        _count: z.lazy(() => createElementSchema()).optional(),
        subjectResults: createReferenceSchema().optional(),
      },
    );

    return baseSchema;
  });
}
