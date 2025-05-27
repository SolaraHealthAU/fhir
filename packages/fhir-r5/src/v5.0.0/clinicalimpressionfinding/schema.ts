import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableReferenceSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createClinicalImpressionFindingSchema() {
  const baseSchema: z.ZodType<types.ClinicalImpressionFinding> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    item: z.lazy(() => createCodeableReferenceSchema()).optional(),
    basis: primitives.createStringSchema().optional(),
    _basis: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
