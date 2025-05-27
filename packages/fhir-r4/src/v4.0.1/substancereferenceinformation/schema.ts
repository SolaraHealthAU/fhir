import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.SubstanceReferenceInformation> = z.object({
    resourceType: z.literal("SubstanceReferenceInformation"),
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
    comment: primitives.createStringSchema().optional(),
    _comment: z.lazy(() => createElementSchema()).optional(),
    gene: z
      .array(z.lazy(() => createSubstanceReferenceInformationGeneSchema()))
      .optional(),
    geneElement: z
      .array(
        z.lazy(() => createSubstanceReferenceInformationGeneElementSchema()),
      )
      .optional(),
    classification: z
      .array(
        z.lazy(() => createSubstanceReferenceInformationClassificationSchema()),
      )
      .optional(),
    target: z
      .array(z.lazy(() => createSubstanceReferenceInformationTargetSchema()))
      .optional(),
  });

  return baseSchema;
}
