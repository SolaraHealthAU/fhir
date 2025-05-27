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
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      uid: primitives.getIdSchema().optional(),
      _uid: z.lazy(() => createElementSchema()).optional(),
      sopClass: createCodingSchema(),
      number: primitives.getUnsignedIntSchema().optional(),
      _number: z.lazy(() => createElementSchema()).optional(),
      title: primitives.getStringSchema().optional(),
      _title: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
