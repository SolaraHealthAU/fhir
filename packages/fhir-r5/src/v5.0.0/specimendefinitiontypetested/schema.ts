import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.SpecimenDefinitionTypeTested> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    isDerived: primitives.createBooleanSchema().optional(),
    _isDerived: z.lazy(() => createElementSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    preference: primitives.createCodeSchema().optional(),
    _preference: z.lazy(() => createElementSchema()).optional(),
    container: z
      .lazy(() => createSpecimenDefinitionContainerSchema())
      .optional(),
    requirement: primitives.createMarkdownSchema().optional(),
    _requirement: z.lazy(() => createElementSchema()).optional(),
    retentionTime: z.lazy(() => createDurationSchema()).optional(),
    singleUse: primitives.createBooleanSchema().optional(),
    _singleUse: z.lazy(() => createElementSchema()).optional(),
    rejectionCriterion: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    handling: z
      .array(z.lazy(() => createSpecimenDefinitionHandlingSchema()))
      .optional(),
    testingDestination: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
  });

  return baseSchema;
}
