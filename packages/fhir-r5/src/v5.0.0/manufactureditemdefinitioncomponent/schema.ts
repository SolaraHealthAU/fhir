import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
} from "../core/schema";
import { createManufacturedItemDefinitionConstituentSchema } from "../manufactureditemdefinitionconstituent/schema";
import { createManufacturedItemDefinitionPropertySchema } from "../manufactureditemdefinitionproperty/schema";

/* Generated from FHIR JSON Schema */

export function createManufacturedItemDefinitionComponentSchema() {
  const baseSchema: z.ZodType<types.ManufacturedItemDefinitionComponent> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: z.lazy(() => createCodeableConceptSchema()),
      function: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
      amount: z.array(z.lazy(() => createQuantitySchema())).optional(),
      constituent: z
        .array(
          z.lazy(() => createManufacturedItemDefinitionConstituentSchema()),
        )
        .optional(),
      property: z
        .array(z.lazy(() => createManufacturedItemDefinitionPropertySchema()))
        .optional(),
      component: z
        .array(z.lazy(() => createManufacturedItemDefinitionComponentSchema()))
        .optional(),
    });

  return baseSchema;
}
