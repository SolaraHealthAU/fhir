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
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        product: createCodeableConceptSchema(),
        eye: z.enum(["right", "left"]),
        _eye: createElementSchema().optional(),
        sphere: primitives.getDecimalSchema().optional(),
        _sphere: createElementSchema().optional(),
        cylinder: primitives.getDecimalSchema().optional(),
        _cylinder: createElementSchema().optional(),
        axis: primitives.getIntegerSchema().optional(),
        _axis: createElementSchema().optional(),
        prism: z.array(createVisionPrescriptionPrismSchema()).optional(),
        add: primitives.getDecimalSchema().optional(),
        _add: createElementSchema().optional(),
        power: primitives.getDecimalSchema().optional(),
        _power: createElementSchema().optional(),
        backCurve: primitives.getDecimalSchema().optional(),
        _backCurve: createElementSchema().optional(),
        diameter: primitives.getDecimalSchema().optional(),
        _diameter: createElementSchema().optional(),
        duration: createQuantitySchema().optional(),
        color: primitives.getStringSchema().optional(),
        _color: createElementSchema().optional(),
        brand: primitives.getStringSchema().optional(),
        _brand: createElementSchema().optional(),
        note: z.array(createAnnotationSchema()).optional(),
      });

    return baseSchema;
  });
}
