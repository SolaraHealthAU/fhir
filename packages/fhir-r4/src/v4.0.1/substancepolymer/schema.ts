import { z } from "zod/v4";
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
import { createSubstancePolymerMonomerSetSchema } from "../substancepolymermonomerset/schema";
import { createSubstancePolymerRepeatSchema } from "../substancepolymerrepeat/schema";

/* Generated from FHIR JSON Schema */

export function createSubstancePolymerSchema() {
  const baseSchema: z.ZodType<types.SubstancePolymer> = z.object({
    resourceType: z.literal("SubstancePolymer"),
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
    class: z.lazy(() => createCodeableConceptSchema()).optional(),
    geometry: z.lazy(() => createCodeableConceptSchema()).optional(),
    copolymerConnectivity: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    modification: z.array(primitives.createStringSchema()).optional(),
    _modification: z.array(z.lazy(() => createElementSchema())).optional(),
    monomerSet: z
      .array(z.lazy(() => createSubstancePolymerMonomerSetSchema()))
      .optional(),
    repeat: z
      .array(z.lazy(() => createSubstancePolymerRepeatSchema()))
      .optional(),
  });

  return baseSchema;
}
