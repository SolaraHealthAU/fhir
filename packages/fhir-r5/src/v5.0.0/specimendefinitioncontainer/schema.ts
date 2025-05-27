import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createQuantitySchema,
} from "../core/schema";
import { createSpecimenDefinitionAdditiveSchema } from "../specimendefinitionadditive/schema";

/* Generated from FHIR JSON Schema */

export function createSpecimenDefinitionContainerSchema() {
  const baseSchema: z.ZodType<types.SpecimenDefinitionContainer> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    material: z.lazy(() => createCodeableConceptSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    cap: z.lazy(() => createCodeableConceptSchema()).optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    capacity: z.lazy(() => createQuantitySchema()).optional(),
    minimumVolumeQuantity: z.lazy(() => createQuantitySchema()).optional(),
    minimumVolumeString: z.string().optional(),
    _minimumVolumeString: z.lazy(() => createElementSchema()).optional(),
    additive: z
      .array(z.lazy(() => createSpecimenDefinitionAdditiveSchema()))
      .optional(),
    preparation: primitives.createMarkdownSchema().optional(),
    _preparation: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
