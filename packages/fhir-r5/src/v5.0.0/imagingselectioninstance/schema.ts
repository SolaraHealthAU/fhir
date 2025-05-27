import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodingSchema,
} from "../core/schema";
import { createImagingSelectionImageRegion2DSchema } from "../imagingselectionimageregion2d/schema";
import { createImagingSelectionImageRegion3DSchema } from "../imagingselectionimageregion3d/schema";

/* Generated from FHIR JSON Schema */

export function createImagingSelectionInstanceSchema() {
  const baseSchema: z.ZodType<types.ImagingSelectionInstance> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    uid: primitives.createIdSchema().optional(),
    _uid: z.lazy(() => createElementSchema()).optional(),
    number: primitives.createUnsignedIntSchema().optional(),
    _number: z.lazy(() => createElementSchema()).optional(),
    sopClass: z.lazy(() => createCodingSchema()).optional(),
    subset: z.array(primitives.createStringSchema()).optional(),
    _subset: z.array(z.lazy(() => createElementSchema())).optional(),
    imageRegion2D: z
      .array(z.lazy(() => createImagingSelectionImageRegion2DSchema()))
      .optional(),
    imageRegion3D: z
      .array(z.lazy(() => createImagingSelectionImageRegion3DSchema()))
      .optional(),
  });

  return baseSchema;
}
