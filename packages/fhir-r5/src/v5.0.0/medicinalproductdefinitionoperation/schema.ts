import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableReferenceSchema,
  createPeriodSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductDefinitionOperationSchema() {
  const baseSchema: z.ZodType<types.MedicinalProductDefinitionOperation> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: z.lazy(() => createCodeableReferenceSchema()).optional(),
      effectiveDate: z.lazy(() => createPeriodSchema()).optional(),
      organization: z.array(z.lazy(() => createReferenceSchema())).optional(),
      confidentialityIndicator: z
        .lazy(() => createCodeableConceptSchema())
        .optional(),
    });

  return baseSchema;
}
