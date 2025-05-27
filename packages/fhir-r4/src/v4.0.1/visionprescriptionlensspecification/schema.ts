import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("VisionPrescriptionLensSpecification", () => {
    const baseSchema: z.ZodType<types.VisionPrescriptionLensSpecification> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        product: createCodeableConceptSchema(),
        eye: z.enum(["right", "left"]),
        _eye: z.lazy(() => createElementSchema()).optional(),
        sphere: primitives.getDecimalSchema().optional(),
        _sphere: z.lazy(() => createElementSchema()).optional(),
        cylinder: primitives.getDecimalSchema().optional(),
        _cylinder: z.lazy(() => createElementSchema()).optional(),
        axis: primitives.getIntegerSchema().optional(),
        _axis: z.lazy(() => createElementSchema()).optional(),
        prism: z.array(createVisionPrescriptionPrismSchema()).optional(),
        add: primitives.getDecimalSchema().optional(),
        _add: z.lazy(() => createElementSchema()).optional(),
        power: primitives.getDecimalSchema().optional(),
        _power: z.lazy(() => createElementSchema()).optional(),
        backCurve: primitives.getDecimalSchema().optional(),
        _backCurve: z.lazy(() => createElementSchema()).optional(),
        diameter: primitives.getDecimalSchema().optional(),
        _diameter: z.lazy(() => createElementSchema()).optional(),
        duration: createQuantitySchema().optional(),
        color: primitives.getStringSchema().optional(),
        _color: z.lazy(() => createElementSchema()).optional(),
        brand: primitives.getStringSchema().optional(),
        _brand: z.lazy(() => createElementSchema()).optional(),
        note: z.array(createAnnotationSchema()).optional(),
      });

    return baseSchema;
  });
}
