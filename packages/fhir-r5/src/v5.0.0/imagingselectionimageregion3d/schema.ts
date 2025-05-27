import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createImagingSelectionImageRegion3DSchema() {
  const baseSchema: z.ZodType<types.ImagingSelectionImageRegion3D> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    regionType: primitives.createCodeSchema().optional(),
    _regionType: z.lazy(() => createElementSchema()).optional(),
    coordinate: z.array(primitives.createDecimalSchema()).optional(),
    _coordinate: z.array(z.lazy(() => createElementSchema())).optional(),
  });

  return baseSchema;
}
