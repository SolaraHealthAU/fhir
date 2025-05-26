import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodingSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createEncounterClassHistorySchema() {
  const baseSchema: z.ZodType<types.EncounterClassHistory> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    class: z.lazy(() => createCodingSchema()),
    period: z.lazy(() => createPeriodSchema()),
  });

  return baseSchema;
}
