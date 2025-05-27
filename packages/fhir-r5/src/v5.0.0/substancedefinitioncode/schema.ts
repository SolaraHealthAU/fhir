import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createAnnotationSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceDefinitionCodeSchema() {
  const baseSchema: z.ZodType<types.SubstanceDefinitionCode> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
    status: z.lazy(() => createCodeableConceptSchema()).optional(),
    statusDate: primitives.createDateTimeSchema().optional(),
    _statusDate: z.lazy(() => createElementSchema()).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    source: z.array(z.lazy(() => createReferenceSchema())).optional(),
  });

  return baseSchema;
}
