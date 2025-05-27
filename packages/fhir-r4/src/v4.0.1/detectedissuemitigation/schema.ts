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

export function createDetectedIssueMitigationSchema() {
  return getCachedSchema("DetectedIssueMitigation", () => {
    const baseSchema: z.ZodType<types.DetectedIssueMitigation> = z.strictObject(
      {
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        action: createCodeableConceptSchema(),
        date: primitives.getDateTimeSchema().optional(),
        _date: z.lazy(() => createElementSchema()).optional(),
        author: createReferenceSchema().optional(),
      },
    );

    return baseSchema;
  });
}
