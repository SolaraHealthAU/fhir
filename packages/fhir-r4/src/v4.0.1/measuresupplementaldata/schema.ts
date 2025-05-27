import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createExpressionSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMeasureSupplementalDataSchema() {
  return getCachedSchema("MeasureSupplementalData", () => {
    const baseSchema: z.ZodType<types.MeasureSupplementalData> = z.strictObject(
      {
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        code: createCodeableConceptSchema().optional(),
        usage: z.array(createCodeableConceptSchema()).optional(),
        description: primitives.getStringSchema().optional(),
        _description: z.lazy(() => createElementSchema()).optional(),
        criteria: createExpressionSchema(),
      },
    );

    return baseSchema;
  });
}
