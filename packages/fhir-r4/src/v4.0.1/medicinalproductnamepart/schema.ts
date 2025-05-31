import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodingSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductNamePartSchema() {
  return getCachedSchema("MedicinalProductNamePart", () => {
    const baseSchema: z.ZodType<types.MedicinalProductNamePart> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        part: primitives.getStringSchema().optional(),
        _part: createElementSchema().optional(),
        type: createCodingSchema(),
      });

    return baseSchema;
  });
}
