import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createIdentifierSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createInventoryItemInstanceSchema() {
  const baseSchema: z.ZodType<types.InventoryItemInstance> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    lotNumber: primitives.createStringSchema().optional(),
    _lotNumber: z.lazy(() => createElementSchema()).optional(),
    expiry: primitives.createDateTimeSchema().optional(),
    _expiry: z.lazy(() => createElementSchema()).optional(),
    subject: z.lazy(() => createReferenceSchema()).optional(),
    location: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
