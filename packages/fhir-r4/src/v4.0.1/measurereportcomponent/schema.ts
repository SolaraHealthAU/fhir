import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMeasureReportComponentSchema() {
  return getCachedSchema("MeasureReportComponent", () => {
    const baseSchema: z.ZodType<types.MeasureReportComponent> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      code: createCodeableConceptSchema(),
      value: createCodeableConceptSchema(),
    });

    return baseSchema;
  });
}
