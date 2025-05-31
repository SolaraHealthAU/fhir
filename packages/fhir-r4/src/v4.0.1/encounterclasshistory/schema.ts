import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodingSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createEncounterClassHistorySchema() {
  return getCachedSchema("EncounterClassHistory", () => {
    const baseSchema: z.ZodType<types.EncounterClassHistory> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      class: createCodingSchema(),
      period: createPeriodSchema(),
    });

    return baseSchema;
  });
}
