import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createQuantitySchema,
  createIdentifierSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createNutritionProductInstanceSchema() {
  const baseSchema: z.ZodType<types.NutritionProductInstance> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    quantity: z.lazy(() => createQuantitySchema()).optional(),
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    lotNumber: primitives.createStringSchema().optional(),
    _lotNumber: z.lazy(() => createElementSchema()).optional(),
    expiry: primitives.createDateTimeSchema().optional(),
    _expiry: z.lazy(() => createElementSchema()).optional(),
    useBy: primitives.createDateTimeSchema().optional(),
    _useBy: z.lazy(() => createElementSchema()).optional(),
    biologicalSourceEvent: z.lazy(() => createIdentifierSchema()).optional(),
  });

  return baseSchema;
}
