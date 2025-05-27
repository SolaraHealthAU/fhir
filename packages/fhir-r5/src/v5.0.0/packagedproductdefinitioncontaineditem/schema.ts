import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableReferenceSchema,
  createQuantitySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createPackagedProductDefinitionContainedItemSchema() {
  const baseSchema: z.ZodType<types.PackagedProductDefinitionContainedItem> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      item: z.lazy(() => createCodeableReferenceSchema()),
      amount: z.lazy(() => createQuantitySchema()).optional(),
    });

  return baseSchema;
}
