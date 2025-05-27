import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("SubstanceSourceMaterial", () => {
    const baseSchema: z.ZodType<types.SubstanceSourceMaterial> = z.strictObject(
      {
        resourceType: z.literal("SubstanceSourceMaterial"),
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
        sourceMaterialClass: createCodeableConceptSchema().optional(),
        sourceMaterialType: createCodeableConceptSchema().optional(),
        sourceMaterialState: createCodeableConceptSchema().optional(),
        organismId: z.lazy(() => createIdentifierSchema()).optional(),
        organismName: primitives.getStringSchema().optional(),
        _organismName: z.lazy(() => createElementSchema()).optional(),
        parentSubstanceId: z
          .array(z.lazy(() => createIdentifierSchema()))
          .optional(),
        parentSubstanceName: z.array(primitives.getStringSchema()).optional(),
        _parentSubstanceName: z
          .array(z.lazy(() => createElementSchema()))
          .optional(),
        countryOfOrigin: z.array(createCodeableConceptSchema()).optional(),
        geographicalLocation: z.array(primitives.getStringSchema()).optional(),
        _geographicalLocation: z
          .array(z.lazy(() => createElementSchema()))
          .optional(),
        developmentStage: createCodeableConceptSchema().optional(),
        fractionDescription: z
          .array(createSubstanceSourceMaterialFractionDescriptionSchema())
          .optional(),
        organism: createSubstanceSourceMaterialOrganismSchema().optional(),
        partDescription: z
          .array(createSubstanceSourceMaterialPartDescriptionSchema())
          .optional(),
      },
    );

    return baseSchema;
  });
}
