import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createIdentifierSchema,
  createElementSchema,
  createQuantitySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceInstanceSchema() {
  const baseSchema: z.ZodType<types.SubstanceInstance> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    identifier: z.lazy(() => createIdentifierSchema()).optional(),
    expiry: primitives.createDateTimeSchema().optional(),
    _expiry: z.lazy(() => createElementSchema()).optional(),
    quantity: z.lazy(() => createQuantitySchema()).optional(),
  });

  return baseSchema;
}
