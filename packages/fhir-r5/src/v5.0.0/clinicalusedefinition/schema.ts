import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createClinicalUseDefinitionContraindicationSchema } from "../clinicalusedefinitioncontraindication/schema";
import { createClinicalUseDefinitionIndicationSchema } from "../clinicalusedefinitionindication/schema";
import { createClinicalUseDefinitionInteractionSchema } from "../clinicalusedefinitioninteraction/schema";
import { createClinicalUseDefinitionUndesirableEffectSchema } from "../clinicalusedefinitionundesirableeffect/schema";
import { createClinicalUseDefinitionWarningSchema } from "../clinicalusedefinitionwarning/schema";

/* Generated from FHIR JSON Schema */

export function createClinicalUseDefinitionSchema() {
  const baseSchema: z.ZodType<types.ClinicalUseDefinition> = z.object({
    resourceType: z.literal("ClinicalUseDefinition"),
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
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    type: primitives.createCodeSchema().optional(),
    _type: z.lazy(() => createElementSchema()).optional(),
    category: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    subject: z.array(z.lazy(() => createReferenceSchema())).optional(),
    status: z.lazy(() => createCodeableConceptSchema()).optional(),
    contraindication: z
      .lazy(() => createClinicalUseDefinitionContraindicationSchema())
      .optional(),
    indication: z
      .lazy(() => createClinicalUseDefinitionIndicationSchema())
      .optional(),
    interaction: z
      .lazy(() => createClinicalUseDefinitionInteractionSchema())
      .optional(),
    population: z.array(z.lazy(() => createReferenceSchema())).optional(),
    library: z.array(primitives.createCanonicalSchema()).optional(),
    undesirableEffect: z
      .lazy(() => createClinicalUseDefinitionUndesirableEffectSchema())
      .optional(),
    warning: z
      .lazy(() => createClinicalUseDefinitionWarningSchema())
      .optional(),
  });

  return baseSchema;
}
