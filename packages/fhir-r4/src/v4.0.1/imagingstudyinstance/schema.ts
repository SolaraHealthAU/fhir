import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodingSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createImagingStudyInstanceSchema() {
  const baseSchema: z.ZodType<types.ImagingStudyInstance> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    uid: primitives.createIdSchema().optional(),
    _uid: z.lazy(() => createElementSchema()).optional(),
    sopClass: z.lazy(() => createCodingSchema()),
    number: primitives.createUnsignedIntSchema().optional(),
    _number: z.lazy(() => createElementSchema()).optional(),
    title: primitives.createStringSchema().optional(),
    _title: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
