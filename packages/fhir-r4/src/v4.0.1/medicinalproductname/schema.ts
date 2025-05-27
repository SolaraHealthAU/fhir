import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createMedicinalProductNamePartSchema } from "../medicinalproductnamepart/schema";
import { createMedicinalProductCountryLanguageSchema } from "../medicinalproductcountrylanguage/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductNameSchema() {
  const baseSchema: z.ZodType<types.MedicinalProductName> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    productName: primitives.createStringSchema(),
    _productName: z.lazy(() => createElementSchema()).optional(),
    namePart: z
      .array(z.lazy(() => createMedicinalProductNamePartSchema()))
      .optional(),
    countryLanguage: z
      .array(z.lazy(() => createMedicinalProductCountryLanguageSchema()))
      .optional(),
  });

  return baseSchema;
}
