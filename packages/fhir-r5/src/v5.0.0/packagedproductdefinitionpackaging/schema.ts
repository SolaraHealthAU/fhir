import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";
import { createProductShelfLifeSchema } from "../productshelflife/schema";
import { createPackagedProductDefinitionPropertySchema } from "../packagedproductdefinitionproperty/schema";
import { createPackagedProductDefinitionContainedItemSchema } from "../packagedproductdefinitioncontaineditem/schema";

/* Generated from FHIR JSON Schema */

export function createPackagedProductDefinitionPackagingSchema() {
  const baseSchema: z.ZodType<types.PackagedProductDefinitionPackaging> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
      type: z.lazy(() => createCodeableConceptSchema()).optional(),
      componentPart: primitives.createBooleanSchema().optional(),
      _componentPart: z.lazy(() => createElementSchema()).optional(),
      quantity: primitives.createIntegerSchema().optional(),
      _quantity: z.lazy(() => createElementSchema()).optional(),
      material: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
      alternateMaterial: z
        .array(z.lazy(() => createCodeableConceptSchema()))
        .optional(),
      shelfLifeStorage: z
        .array(z.lazy(() => createProductShelfLifeSchema()))
        .optional(),
      manufacturer: z.array(z.lazy(() => createReferenceSchema())).optional(),
      property: z
        .array(z.lazy(() => createPackagedProductDefinitionPropertySchema()))
        .optional(),
      containedItem: z
        .array(
          z.lazy(() => createPackagedProductDefinitionContainedItemSchema()),
        )
        .optional(),
      packaging: z
        .array(z.lazy(() => createPackagedProductDefinitionPackagingSchema()))
        .optional(),
    });

  return baseSchema;
}
