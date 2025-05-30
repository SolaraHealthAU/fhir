import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createVisionPrescriptionPrismSchema() {
  const baseSchema: z.ZodType<types.VisionPrescriptionPrism> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    amount: primitives.createDecimalSchema().optional(),
    _amount: z.lazy(() => createElementSchema()).optional(),
    base: primitives.createCodeSchema().optional(),
    _base: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
