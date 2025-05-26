import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodingSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductNamePartSchema() {
  const baseSchema: z.ZodType<types.MedicinalProductNamePart> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    part: primitives.createStringSchema().optional(),
    _part: z.lazy(() => createElementSchema()).optional(),
    type: z.lazy(() => createCodingSchema()),
  });

  return baseSchema;
}
