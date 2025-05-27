import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createElementSchema,
  createAttachmentSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createAdministrableProductDefinitionPropertySchema() {
  const baseSchema: z.ZodType<types.AdministrableProductDefinitionProperty> =
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
      valueMarkdown: z.string().optional(),
      _valueMarkdown: z.lazy(() => createElementSchema()).optional(),
      valueAttachment: z.lazy(() => createAttachmentSchema()).optional(),
      valueReference: z.lazy(() => createReferenceSchema()).optional(),
      status: z.lazy(() => createCodeableConceptSchema()).optional(),
    });

  return baseSchema;
}
