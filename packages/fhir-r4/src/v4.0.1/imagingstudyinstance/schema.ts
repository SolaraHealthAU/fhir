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

export function createImagingStudyInstanceSchema() {
  return getCachedSchema("ImagingStudyInstance", () => {
    const baseSchema: z.ZodType<types.ImagingStudyInstance> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      uid: primitives.getIdSchema().optional(),
      _uid: createElementSchema().optional(),
      sopClass: createCodingSchema(),
      number: primitives.getUnsignedIntSchema().optional(),
      _number: createElementSchema().optional(),
      title: primitives.getStringSchema().optional(),
      _title: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
