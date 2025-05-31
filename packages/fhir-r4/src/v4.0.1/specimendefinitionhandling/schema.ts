import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createRangeSchema,
  createDurationSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSpecimenDefinitionHandlingSchema() {
  return getCachedSchema("SpecimenDefinitionHandling", () => {
    const baseSchema: z.ZodType<types.SpecimenDefinitionHandling> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        temperatureQualifier: createCodeableConceptSchema().optional(),
        temperatureRange: createRangeSchema().optional(),
        maxDuration: createDurationSchema().optional(),
        instruction: primitives.getStringSchema().optional(),
        _instruction: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
