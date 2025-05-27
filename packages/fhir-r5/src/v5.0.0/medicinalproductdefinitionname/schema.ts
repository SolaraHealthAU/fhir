import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createMedicinalProductDefinitionPartSchema } from "../medicinalproductdefinitionpart/schema";
import { createMedicinalProductDefinitionUsageSchema } from "../medicinalproductdefinitionusage/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductDefinitionNameSchema() {
  const baseSchema: z.ZodType<types.MedicinalProductDefinitionName> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    productName: primitives.createStringSchema().optional(),
    _productName: z.lazy(() => createElementSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    part: z
      .array(z.lazy(() => createMedicinalProductDefinitionPartSchema()))
      .optional(),
    usage: z
      .array(z.lazy(() => createMedicinalProductDefinitionUsageSchema()))
      .optional(),
  });

  return baseSchema;
}
