import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createMoneySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createChargeItemDefinitionPriceComponentSchema() {
  const baseSchema: z.ZodType<types.ChargeItemDefinitionPriceComponent> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: primitives.createCodeSchema().optional(),
      _type: z.lazy(() => createElementSchema()).optional(),
      code: z.lazy(() => createCodeableConceptSchema()).optional(),
      factor: primitives.createDecimalSchema().optional(),
      _factor: z.lazy(() => createElementSchema()).optional(),
      amount: z.lazy(() => createMoneySchema()).optional(),
    });

  return baseSchema;
}
