import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createMoneySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createChargeItemDefinitionPriceComponentSchema() {
  return getCachedSchema("ChargeItemDefinitionPriceComponent", () => {
    const baseSchema: z.ZodType<types.ChargeItemDefinitionPriceComponent> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        type: primitives.getCodeSchema().optional(),
        _type: z.lazy(() => createElementSchema()).optional(),
        code: createCodeableConceptSchema().optional(),
        factor: primitives.getDecimalSchema().optional(),
        _factor: z.lazy(() => createElementSchema()).optional(),
        amount: createMoneySchema().optional(),
      });

    return baseSchema;
  });
}
