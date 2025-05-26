import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createCodeableConceptSchema,
  createIdentifierSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createSubstanceSourceMaterialFractionDescriptionSchema } from "../substancesourcematerialfractiondescription/schema";
import { createSubstanceSourceMaterialOrganismSchema } from "../substancesourcematerialorganism/schema";
import { createSubstanceSourceMaterialPartDescriptionSchema } from "../substancesourcematerialpartdescription/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceSourceMaterialSchema() {
  const baseSchema: z.ZodType<types.SubstanceSourceMaterial> = z.object({
    resourceType: z.literal("SubstanceSourceMaterial"),
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
    sourceMaterialClass: z.lazy(() => createCodeableConceptSchema()).optional(),
    sourceMaterialType: z.lazy(() => createCodeableConceptSchema()).optional(),
    sourceMaterialState: z.lazy(() => createCodeableConceptSchema()).optional(),
    organismId: z.lazy(() => createIdentifierSchema()).optional(),
    organismName: primitives.createStringSchema().optional(),
    _organismName: z.lazy(() => createElementSchema()).optional(),
    parentSubstanceId: z
      .array(z.lazy(() => createIdentifierSchema()))
      .optional(),
    parentSubstanceName: z.array(primitives.createStringSchema()).optional(),
    _parentSubstanceName: z
      .array(z.lazy(() => createElementSchema()))
      .optional(),
    countryOfOrigin: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    geographicalLocation: z.array(primitives.createStringSchema()).optional(),
    _geographicalLocation: z
      .array(z.lazy(() => createElementSchema()))
      .optional(),
    developmentStage: z.lazy(() => createCodeableConceptSchema()).optional(),
    fractionDescription: z
      .array(
        z.lazy(() => createSubstanceSourceMaterialFractionDescriptionSchema()),
      )
      .optional(),
    organism: z
      .lazy(() => createSubstanceSourceMaterialOrganismSchema())
      .optional(),
    partDescription: z
      .array(z.lazy(() => createSubstanceSourceMaterialPartDescriptionSchema()))
      .optional(),
  });

  return baseSchema;
}
