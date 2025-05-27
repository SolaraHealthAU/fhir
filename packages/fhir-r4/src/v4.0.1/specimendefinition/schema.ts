import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createSpecimenDefinitionTypeTestedSchema } from "../specimendefinitiontypetested/schema";

/* Generated from FHIR JSON Schema */

export function createSpecimenDefinitionSchema() {
  return getCachedSchema("SpecimenDefinition", () => {
    const baseSchema: z.ZodType<types.SpecimenDefinition> = z.strictObject({
      resourceType: z.literal("SpecimenDefinition"),
      id: primitives.getIdSchema().optional(),
      meta: createMetaSchema().optional(),
      implicitRules: primitives.getUriSchema().optional(),
      _implicitRules: z.lazy(() => createElementSchema()).optional(),
      language: primitives.getCodeSchema().optional(),
      _language: z.lazy(() => createElementSchema()).optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      identifier: z.lazy(() => createIdentifierSchema()).optional(),
      typeCollected: createCodeableConceptSchema().optional(),
      patientPreparation: z.array(createCodeableConceptSchema()).optional(),
      timeAspect: primitives.getStringSchema().optional(),
      _timeAspect: z.lazy(() => createElementSchema()).optional(),
      collection: z.array(createCodeableConceptSchema()).optional(),
      typeTested: z
        .array(createSpecimenDefinitionTypeTestedSchema())
        .optional(),
    });

    return baseSchema;
  });
}
