import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createReferenceSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createEncounterLocationSchema() {
  return getCachedSchema("EncounterLocation", () => {
    const baseSchema: z.ZodType<types.EncounterLocation> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      location: createReferenceSchema(),
      status: z.enum(["planned", "active", "reserved", "completed"]).optional(),
      _status: createElementSchema().optional(),
      physicalType: createCodeableConceptSchema().optional(),
      period: createPeriodSchema().optional(),
    });

    return baseSchema;
  });
}
