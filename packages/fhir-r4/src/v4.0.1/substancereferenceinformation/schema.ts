import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createSubstanceReferenceInformationGeneSchema } from "../substancereferenceinformationgene/schema";
import { createSubstanceReferenceInformationGeneElementSchema } from "../substancereferenceinformationgeneelement/schema";
import { createSubstanceReferenceInformationClassificationSchema } from "../substancereferenceinformationclassification/schema";
import { createSubstanceReferenceInformationTargetSchema } from "../substancereferenceinformationtarget/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceReferenceInformationSchema() {
  return getCachedSchema("SubstanceReferenceInformation", () => {
    const baseSchema: z.ZodType<types.SubstanceReferenceInformation> =
      z.strictObject({
        resourceType: z.literal("SubstanceReferenceInformation"),
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
        comment: primitives.getStringSchema().optional(),
        _comment: z.lazy(() => createElementSchema()).optional(),
        gene: z
          .array(createSubstanceReferenceInformationGeneSchema())
          .optional(),
        geneElement: z
          .array(createSubstanceReferenceInformationGeneElementSchema())
          .optional(),
        classification: z
          .array(createSubstanceReferenceInformationClassificationSchema())
          .optional(),
        target: z
          .array(createSubstanceReferenceInformationTargetSchema())
          .optional(),
      });

    return baseSchema;
  });
}
