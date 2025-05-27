import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createImmunizationProgramEligibilitySchema() {
  const baseSchema: z.ZodType<types.ImmunizationProgramEligibility> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    program: z.lazy(() => createCodeableConceptSchema()),
    programStatus: z.lazy(() => createCodeableConceptSchema()),
  });

  return baseSchema;
}
