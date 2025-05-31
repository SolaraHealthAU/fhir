import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("SubstanceNucleicAcid", () => {
    const baseSchema: z.ZodType<types.SubstanceNucleicAcid> = z.strictObject({
      resourceType: z.literal("SubstanceNucleicAcid"),
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
      sequenceType: createCodeableConceptSchema().optional(),
      numberOfSubunits: primitives.getIntegerSchema().optional(),
      _numberOfSubunits: createElementSchema().optional(),
      areaOfHybridisation: primitives.getStringSchema().optional(),
      _areaOfHybridisation: createElementSchema().optional(),
      oligoNucleotideType: createCodeableConceptSchema().optional(),
      subunit: z.array(createSubstanceNucleicAcidSubunitSchema()).optional(),
    });

    return baseSchema;
  });
}
