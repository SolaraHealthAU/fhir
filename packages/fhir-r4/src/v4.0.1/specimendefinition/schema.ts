import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.SpecimenDefinition> = z.object({
    resourceType: z.literal("SpecimenDefinition"),
    id: primitives.createIdSchema().optional(),
    meta: z.lazy(() => createMetaSchema()).optional(),
    implicitRules: primitives.createUriSchema().optional(),
    _implicitRules: z.lazy(() => createElementSchema()).optional(),
    language: primitives.createCodeSchema().optional(),
    _language: z.lazy(() => createElementSchema()).optional(),
    text: z.lazy(() => createNarrativeSchema()).optional(),
    contained: z.array(z.lazy(() => createResourceListSchema())).optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    identifier: z.lazy(() => createIdentifierSchema()).optional(),
    typeCollected: z.lazy(() => createCodeableConceptSchema()).optional(),
    patientPreparation: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    timeAspect: primitives.createStringSchema().optional(),
    _timeAspect: z.lazy(() => createElementSchema()).optional(),
    collection: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    typeTested: z
      .array(z.lazy(() => createSpecimenDefinitionTypeTestedSchema()))
      .optional(),
  });

  return baseSchema;
}
