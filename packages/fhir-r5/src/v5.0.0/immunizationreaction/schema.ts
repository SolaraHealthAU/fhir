import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createImmunizationReactionSchema() {
  const baseSchema: z.ZodType<types.ImmunizationReaction> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    date: primitives.createDateTimeSchema().optional(),
    _date: z.lazy(() => createElementSchema()).optional(),
    manifestation: z.lazy(() => createCodeableReferenceSchema()).optional(),
    reported: primitives.createBooleanSchema().optional(),
    _reported: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
