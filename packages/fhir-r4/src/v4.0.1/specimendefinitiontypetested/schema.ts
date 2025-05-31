import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createDurationSchema,
} from "../core/schema";
import { createSpecimenDefinitionContainerSchema } from "../specimendefinitioncontainer/schema";
import { createSpecimenDefinitionHandlingSchema } from "../specimendefinitionhandling/schema";

/* Generated from FHIR JSON Schema */

export function createSpecimenDefinitionTypeTestedSchema() {
  return getCachedSchema("SpecimenDefinitionTypeTested", () => {
    const baseSchema: z.ZodType<types.SpecimenDefinitionTypeTested> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        isDerived: primitives.getBooleanSchema().optional(),
        _isDerived: createElementSchema().optional(),
        type: createCodeableConceptSchema().optional(),
        preference: z.enum(["preferred", "alternate"]),
        _preference: createElementSchema().optional(),
        container: createSpecimenDefinitionContainerSchema().optional(),
        requirement: primitives.getStringSchema().optional(),
        _requirement: createElementSchema().optional(),
        retentionTime: createDurationSchema().optional(),
        rejectionCriterion: z.array(createCodeableConceptSchema()).optional(),
        handling: z.array(createSpecimenDefinitionHandlingSchema()).optional(),
      });

    return baseSchema;
  });
}
