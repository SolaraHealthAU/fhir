import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createReferenceSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createProdCharacteristicSchema } from "../prodcharacteristic/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductManufacturedSchema() {
  return getCachedSchema("MedicinalProductManufactured", () => {
    const baseSchema: z.ZodType<types.MedicinalProductManufactured> =
      z.strictObject({
        resourceType: z.literal("MedicinalProductManufactured"),
        id: primitives.getIdSchema().optional(),
        meta: createMetaSchema().optional(),
        implicitRules: primitives.getUriSchema().optional(),
        _implicitRules: z.lazy(() => createElementSchema()).optional(),
        language: primitives.getCodeSchema().optional(),
        _language: z.lazy(() => createElementSchema()).optional(),
        text: createNarrativeSchema().optional(),
        contained: z.array(createResourceListSchema()).optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        manufacturedDoseForm: createCodeableConceptSchema(),
        unitOfPresentation: createCodeableConceptSchema().optional(),
        quantity: createQuantitySchema(),
        manufacturer: z.array(createReferenceSchema()).optional(),
        ingredient: z.array(createReferenceSchema()).optional(),
        physicalCharacteristics: createProdCharacteristicSchema().optional(),
        otherCharacteristics: z.array(createCodeableConceptSchema()).optional(),
      });

    return baseSchema;
  });
}
