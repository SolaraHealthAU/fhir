import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema } from "../core/schema";
import { createChargeItemDefinitionApplicabilitySchema } from "../chargeitemdefinitionapplicability/schema";
import { createMonetaryComponentSchema } from "../monetarycomponent/schema";

/* Generated from FHIR JSON Schema */

export function createChargeItemDefinitionPropertyGroupSchema() {
  const baseSchema: z.ZodType<types.ChargeItemDefinitionPropertyGroup> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      applicability: z
        .array(z.lazy(() => createChargeItemDefinitionApplicabilitySchema()))
        .optional(),
      priceComponent: z
        .array(z.lazy(() => createMonetaryComponentSchema()))
        .optional(),
    });

  return baseSchema;
}
