import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createIngredientManufacturerSchema() {
  const baseSchema: z.ZodType<types.IngredientManufacturer> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    role: primitives.createCodeSchema().optional(),
    _role: z.lazy(() => createElementSchema()).optional(),
    manufacturer: z.lazy(() => createReferenceSchema()),
  });

  return baseSchema;
}
