import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createQuantitySchema,
} from "../core/schema";
import { createSpecimenDefinitionAdditiveSchema } from "../specimendefinitionadditive/schema";

/* Generated from FHIR JSON Schema */

export function createSpecimenDefinitionContainerSchema() {
  return getCachedSchema("SpecimenDefinitionContainer", () => {
    const baseSchema: z.ZodType<types.SpecimenDefinitionContainer> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        material: createCodeableConceptSchema().optional(),
        type: createCodeableConceptSchema().optional(),
        cap: createCodeableConceptSchema().optional(),
        description: primitives.getStringSchema().optional(),
        _description: createElementSchema().optional(),
        capacity: createQuantitySchema().optional(),
        minimumVolumeQuantity: createQuantitySchema().optional(),
        minimumVolumeString: z.string().optional(),
        _minimumVolumeString: createElementSchema().optional(),
        additive: z.array(createSpecimenDefinitionAdditiveSchema()).optional(),
        preparation: primitives.getStringSchema().optional(),
        _preparation: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
