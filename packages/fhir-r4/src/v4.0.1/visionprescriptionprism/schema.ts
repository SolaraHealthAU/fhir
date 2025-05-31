import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createVisionPrescriptionPrismSchema() {
  return getCachedSchema("VisionPrescriptionPrism", () => {
    const baseSchema: z.ZodType<types.VisionPrescriptionPrism> = z.strictObject(
      {
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        amount: primitives.getDecimalSchema().optional(),
        _amount: createElementSchema().optional(),
        base: z.enum(["up", "down", "in", "out"]).optional(),
        _base: createElementSchema().optional(),
      },
    );

    return baseSchema;
  });
}
