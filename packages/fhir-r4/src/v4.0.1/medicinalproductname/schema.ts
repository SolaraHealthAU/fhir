import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createMedicinalProductNamePartSchema } from "../medicinalproductnamepart/schema";
import { createMedicinalProductCountryLanguageSchema } from "../medicinalproductcountrylanguage/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductNameSchema() {
  return getCachedSchema("MedicinalProductName", () => {
    const baseSchema: z.ZodType<types.MedicinalProductName> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      productName: primitives.getStringSchema(),
      _productName: z.lazy(() => createElementSchema()).optional(),
      namePart: z.array(createMedicinalProductNamePartSchema()).optional(),
      countryLanguage: z
        .array(createMedicinalProductCountryLanguageSchema())
        .optional(),
    });

    return baseSchema;
  });
}
