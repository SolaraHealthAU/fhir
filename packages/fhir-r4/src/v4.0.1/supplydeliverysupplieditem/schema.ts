import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createQuantitySchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSupplyDeliverySuppliedItemSchema() {
  return getCachedSchema("SupplyDeliverySuppliedItem", () => {
    const baseSchema: z.ZodType<types.SupplyDeliverySuppliedItem> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        quantity: createQuantitySchema().optional(),
        itemCodeableConcept: createCodeableConceptSchema().optional(),
        itemReference: createReferenceSchema().optional(),
      });

    return baseSchema;
  });
}
