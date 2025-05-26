import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.MedicinalProductManufactured> = z.object({
    resourceType: z.literal("MedicinalProductManufactured"),
    id: primitives.createIdSchema().optional(),
    meta: z.lazy(() => createMetaSchema()).optional(),
    implicitRules: primitives.createUriSchema().optional(),
    _implicitRules: z.lazy(() => createElementSchema()).optional(),
    language: primitives.createCodeSchema().optional(),
    _language: z.lazy(() => createElementSchema()).optional(),
    text: z.lazy(() => createNarrativeSchema()).optional(),
    contained: z.array(z.lazy(() => createResourceListSchema())).optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    manufacturedDoseForm: z.lazy(() => createCodeableConceptSchema()),
    unitOfPresentation: z.lazy(() => createCodeableConceptSchema()).optional(),
    quantity: z.lazy(() => createQuantitySchema()),
    manufacturer: z.array(z.lazy(() => createReferenceSchema())).optional(),
    ingredient: z.array(z.lazy(() => createReferenceSchema())).optional(),
    physicalCharacteristics: z
      .lazy(() => createProdCharacteristicSchema())
      .optional(),
    otherCharacteristics: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
  });

  return baseSchema;
}
