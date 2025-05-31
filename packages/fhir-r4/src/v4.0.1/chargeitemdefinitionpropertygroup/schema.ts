import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema } from "../core/schema";
import { createChargeItemDefinitionApplicabilitySchema } from "../chargeitemdefinitionapplicability/schema";
import { createChargeItemDefinitionPriceComponentSchema } from "../chargeitemdefinitionpricecomponent/schema";

/* Generated from FHIR JSON Schema */

export function createChargeItemDefinitionPropertyGroupSchema() {
  return getCachedSchema("ChargeItemDefinitionPropertyGroup", () => {
    const baseSchema: z.ZodType<types.ChargeItemDefinitionPropertyGroup> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        applicability: z
          .array(createChargeItemDefinitionApplicabilitySchema())
          .optional(),
        priceComponent: z
          .array(createChargeItemDefinitionPriceComponentSchema())
          .optional(),
      });

    return baseSchema;
  });
}
