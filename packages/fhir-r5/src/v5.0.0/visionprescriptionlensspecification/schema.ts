import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createQuantitySchema,
  createAnnotationSchema,
} from "../core/schema";
import { createVisionPrescriptionPrismSchema } from "../visionprescriptionprism/schema";

/* Generated from FHIR JSON Schema */

export function createVisionPrescriptionLensSpecificationSchema() {
  const baseSchema: z.ZodType<types.VisionPrescriptionLensSpecification> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      product: z.lazy(() => createCodeableConceptSchema()),
      eye: primitives.createCodeSchema().optional(),
      _eye: z.lazy(() => createElementSchema()).optional(),
      sphere: primitives.createDecimalSchema().optional(),
      _sphere: z.lazy(() => createElementSchema()).optional(),
      cylinder: primitives.createDecimalSchema().optional(),
      _cylinder: z.lazy(() => createElementSchema()).optional(),
      axis: primitives.createIntegerSchema().optional(),
      _axis: z.lazy(() => createElementSchema()).optional(),
      prism: z
        .array(z.lazy(() => createVisionPrescriptionPrismSchema()))
        .optional(),
      add: primitives.createDecimalSchema().optional(),
      _add: z.lazy(() => createElementSchema()).optional(),
      power: primitives.createDecimalSchema().optional(),
      _power: z.lazy(() => createElementSchema()).optional(),
      backCurve: primitives.createDecimalSchema().optional(),
      _backCurve: z.lazy(() => createElementSchema()).optional(),
      diameter: primitives.createDecimalSchema().optional(),
      _diameter: z.lazy(() => createElementSchema()).optional(),
      duration: z.lazy(() => createQuantitySchema()).optional(),
      color: primitives.createStringSchema().optional(),
      _color: z.lazy(() => createElementSchema()).optional(),
      brand: primitives.createStringSchema().optional(),
      _brand: z.lazy(() => createElementSchema()).optional(),
      note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    });

  return baseSchema;
}
