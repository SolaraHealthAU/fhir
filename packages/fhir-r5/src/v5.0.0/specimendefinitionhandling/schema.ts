import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createRangeSchema,
  createDurationSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSpecimenDefinitionHandlingSchema() {
  const baseSchema: z.ZodType<types.SpecimenDefinitionHandling> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    temperatureQualifier: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    temperatureRange: z.lazy(() => createRangeSchema()).optional(),
    maxDuration: z.lazy(() => createDurationSchema()).optional(),
    instruction: primitives.createMarkdownSchema().optional(),
    _instruction: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
