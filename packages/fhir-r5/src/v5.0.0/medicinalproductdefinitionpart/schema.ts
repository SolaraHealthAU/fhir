import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductDefinitionPartSchema() {
  const baseSchema: z.ZodType<types.MedicinalProductDefinitionPart> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    part: primitives.createStringSchema().optional(),
    _part: z.lazy(() => createElementSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()),
  });

  return baseSchema;
}
