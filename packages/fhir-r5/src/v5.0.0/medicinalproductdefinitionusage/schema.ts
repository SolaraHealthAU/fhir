import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductDefinitionUsageSchema() {
  const baseSchema: z.ZodType<types.MedicinalProductDefinitionUsage> = z.object(
    {
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      country: z.lazy(() => createCodeableConceptSchema()),
      jurisdiction: z.lazy(() => createCodeableConceptSchema()).optional(),
      language: z.lazy(() => createCodeableConceptSchema()),
    },
  );

  return baseSchema;
}
