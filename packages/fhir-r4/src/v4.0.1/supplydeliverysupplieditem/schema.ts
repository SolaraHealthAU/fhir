import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createQuantitySchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSupplyDeliverySuppliedItemSchema() {
  const baseSchema: z.ZodType<types.SupplyDeliverySuppliedItem> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    quantity: z.lazy(() => createQuantitySchema()).optional(),
    itemCodeableConcept: z.lazy(() => createCodeableConceptSchema()).optional(),
    itemReference: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
