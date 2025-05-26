import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createSubstanceNucleicAcidSubunitSchema } from "../substancenucleicacidsubunit/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceNucleicAcidSchema() {
  const baseSchema: z.ZodType<types.SubstanceNucleicAcid> = z.object({
    resourceType: z.literal("SubstanceNucleicAcid"),
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
    sequenceType: z.lazy(() => createCodeableConceptSchema()).optional(),
    numberOfSubunits: primitives.createIntegerSchema().optional(),
    _numberOfSubunits: z.lazy(() => createElementSchema()).optional(),
    areaOfHybridisation: primitives.createStringSchema().optional(),
    _areaOfHybridisation: z.lazy(() => createElementSchema()).optional(),
    oligoNucleotideType: z.lazy(() => createCodeableConceptSchema()).optional(),
    subunit: z
      .array(z.lazy(() => createSubstanceNucleicAcidSubunitSchema()))
      .optional(),
  });

  return baseSchema;
}
