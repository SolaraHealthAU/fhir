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
import { createSubstanceProteinSubunitSchema } from "../substanceproteinsubunit/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceProteinSchema() {
  return getCachedSchema("SubstanceProtein", () => {
    const baseSchema: z.ZodType<types.SubstanceProtein> = z.strictObject({
      resourceType: z.literal("SubstanceProtein"),
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
      sequenceType: createCodeableConceptSchema().optional(),
      numberOfSubunits: primitives.getIntegerSchema().optional(),
      _numberOfSubunits: z.lazy(() => createElementSchema()).optional(),
      disulfideLinkage: z.array(primitives.getStringSchema()).optional(),
      _disulfideLinkage: z
        .array(z.lazy(() => createElementSchema()))
        .optional(),
      subunit: z.array(createSubstanceProteinSubunitSchema()).optional(),
    });

    return baseSchema;
  });
}
