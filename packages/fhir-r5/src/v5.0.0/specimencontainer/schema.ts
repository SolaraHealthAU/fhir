import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createReferenceSchema,
  createQuantitySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSpecimenContainerSchema() {
  const baseSchema: z.ZodType<types.SpecimenContainer> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    device: z.lazy(() => createReferenceSchema()),
    location: z.lazy(() => createReferenceSchema()).optional(),
    specimenQuantity: z.lazy(() => createQuantitySchema()).optional(),
  });

  return baseSchema;
}
