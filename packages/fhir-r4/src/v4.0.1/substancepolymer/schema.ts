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
import { createSubstancePolymerMonomerSetSchema } from "../substancepolymermonomerset/schema";
import { createSubstancePolymerRepeatSchema } from "../substancepolymerrepeat/schema";

/* Generated from FHIR JSON Schema */

export function createSubstancePolymerSchema() {
  return getCachedSchema("SubstancePolymer", () => {
    const baseSchema: z.ZodType<types.SubstancePolymer> = z.strictObject({
      resourceType: z.literal("SubstancePolymer"),
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
      class: createCodeableConceptSchema().optional(),
      geometry: createCodeableConceptSchema().optional(),
      copolymerConnectivity: z.array(createCodeableConceptSchema()).optional(),
      modification: z.array(primitives.getStringSchema()).optional(),
      _modification: z.array(z.lazy(() => createElementSchema())).optional(),
      monomerSet: z.array(createSubstancePolymerMonomerSetSchema()).optional(),
      repeat: z.array(createSubstancePolymerRepeatSchema()).optional(),
    });

    return baseSchema;
  });
}
