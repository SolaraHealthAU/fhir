import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("MedicinalProductPackagedPackageItem", () => {
    const baseSchema: z.ZodType<types.MedicinalProductPackagedPackageItem> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
        type: createCodeableConceptSchema(),
        quantity: createQuantitySchema(),
        material: z.array(createCodeableConceptSchema()).optional(),
        alternateMaterial: z.array(createCodeableConceptSchema()).optional(),
        device: z.array(createReferenceSchema()).optional(),
        manufacturedItem: z.array(createReferenceSchema()).optional(),
        packageItem: z
          .array(createMedicinalProductPackagedPackageItemSchema())
          .optional(),
        physicalCharacteristics: createProdCharacteristicSchema().optional(),
        otherCharacteristics: z.array(createCodeableConceptSchema()).optional(),
        shelfLifeStorage: z.array(createProductShelfLifeSchema()).optional(),
        manufacturer: z.array(createReferenceSchema()).optional(),
      });

    return baseSchema;
  });
}
