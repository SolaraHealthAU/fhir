import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createReferenceSchema,
} from "../core/schema";
import { createProdCharacteristicSchema } from "../prodcharacteristic/schema";
import { createProductShelfLifeSchema } from "../productshelflife/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductPackagedPackageItemSchema() {
  const baseSchema: z.ZodType<types.MedicinalProductPackagedPackageItem> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
      type: z.lazy(() => createCodeableConceptSchema()),
      quantity: z.lazy(() => createQuantitySchema()),
      material: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
      alternateMaterial: z
        .array(z.lazy(() => createCodeableConceptSchema()))
        .optional(),
      device: z.array(z.lazy(() => createReferenceSchema())).optional(),
      manufacturedItem: z
        .array(z.lazy(() => createReferenceSchema()))
        .optional(),
      packageItem: z
        .array(z.lazy(() => createMedicinalProductPackagedPackageItemSchema()))
        .optional(),
      physicalCharacteristics: z
        .lazy(() => createProdCharacteristicSchema())
        .optional(),
      otherCharacteristics: z
        .array(z.lazy(() => createCodeableConceptSchema()))
        .optional(),
      shelfLifeStorage: z
        .array(z.lazy(() => createProductShelfLifeSchema()))
        .optional(),
      manufacturer: z.array(z.lazy(() => createReferenceSchema())).optional(),
    });

  return baseSchema;
}
