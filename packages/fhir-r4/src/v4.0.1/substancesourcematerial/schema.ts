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
        _implicitRules: createElementSchema().optional(),
        language: primitives.getCodeSchema().optional(),
        _language: createElementSchema().optional(),
        text: createNarrativeSchema().optional(),
        contained: z.array(createResourceListSchema()).optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        sourceMaterialClass: createCodeableConceptSchema().optional(),
        sourceMaterialType: createCodeableConceptSchema().optional(),
        sourceMaterialState: createCodeableConceptSchema().optional(),
        organismId: createIdentifierSchema().optional(),
        organismName: primitives.getStringSchema().optional(),
        _organismName: createElementSchema().optional(),
        parentSubstanceId: z.array(createIdentifierSchema()).optional(),
        parentSubstanceName: z.array(primitives.getStringSchema()).optional(),
        _parentSubstanceName: z.array(createElementSchema()).optional(),
        countryOfOrigin: z.array(createCodeableConceptSchema()).optional(),
        geographicalLocation: z.array(primitives.getStringSchema()).optional(),
        _geographicalLocation: z.array(createElementSchema()).optional(),
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
