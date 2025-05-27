import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createElementSchema,
  createAttachmentSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createPackagedProductDefinitionPropertySchema() {
  const baseSchema: z.ZodType<types.PackagedProductDefinitionProperty> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: z.lazy(() => createCodeableConceptSchema()),
      valueCodeableConcept: z
        .lazy(() => createCodeableConceptSchema())
        .optional(),
      valueQuantity: z.lazy(() => createQuantitySchema()).optional(),
      valueDate: z.string().optional(),
      _valueDate: z.lazy(() => createElementSchema()).optional(),
      valueBoolean: z.boolean().optional(),
      _valueBoolean: z.lazy(() => createElementSchema()).optional(),
      valueAttachment: z.lazy(() => createAttachmentSchema()).optional(),
    });

  return baseSchema;
}
