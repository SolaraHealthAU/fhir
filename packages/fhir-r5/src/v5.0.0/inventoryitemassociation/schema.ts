import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createRatioSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createInventoryItemAssociationSchema() {
  const baseSchema: z.ZodType<types.InventoryItemAssociation> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    associationType: z.lazy(() => createCodeableConceptSchema()),
    relatedItem: z.lazy(() => createReferenceSchema()),
    quantity: z.lazy(() => createRatioSchema()),
  });

  return baseSchema;
}
