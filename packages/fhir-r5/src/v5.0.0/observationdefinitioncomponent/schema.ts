import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createCodingSchema,
} from "../core/schema";
import { createObservationDefinitionQualifiedValueSchema } from "../observationdefinitionqualifiedvalue/schema";

/* Generated from FHIR JSON Schema */

export function createObservationDefinitionComponentSchema() {
  const baseSchema: z.ZodType<types.ObservationDefinitionComponent> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    code: z.lazy(() => createCodeableConceptSchema()),
    permittedDataType: z.array(primitives.createCodeSchema()).optional(),
    _permittedDataType: z.array(z.lazy(() => createElementSchema())).optional(),
    permittedUnit: z.array(z.lazy(() => createCodingSchema())).optional(),
    qualifiedValue: z
      .array(z.lazy(() => createObservationDefinitionQualifiedValueSchema()))
      .optional(),
  });

  return baseSchema;
}
