import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createEncounterStatusHistorySchema() {
  return getCachedSchema("EncounterStatusHistory", () => {
    const baseSchema: z.ZodType<types.EncounterStatusHistory> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      status: z.enum([
        "planned",
        "arrived",
        "triaged",
        "in-progress",
        "onleave",
        "finished",
        "cancelled",
        "entered-in-error",
        "unknown",
      ]),
      _status: createElementSchema().optional(),
      period: createPeriodSchema(),
    });

    return baseSchema;
  });
}
