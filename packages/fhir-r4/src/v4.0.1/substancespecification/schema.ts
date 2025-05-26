import { z } from "zod";
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
import { createSubstanceSpecificationMoietySchema } from "../substancespecificationmoiety/schema";
import { createSubstanceSpecificationPropertySchema } from "../substancespecificationproperty/schema";
import { createSubstanceSpecificationStructureSchema } from "../substancespecificationstructure/schema";
import { createSubstanceSpecificationCodeSchema } from "../substancespecificationcode/schema";
import { createSubstanceSpecificationNameSchema } from "../substancespecificationname/schema";
import { createSubstanceSpecificationMolecularWeightSchema } from "../substancespecificationmolecularweight/schema";
import { createSubstanceSpecificationRelationshipSchema } from "../substancespecificationrelationship/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceSpecificationSchema() {
  const baseSchema: z.ZodType<types.SubstanceSpecification> = z.object({
    resourceType: z.literal("SubstanceSpecification"),
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
    identifier: z.lazy(() => createIdentifierSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    status: z.lazy(() => createCodeableConceptSchema()).optional(),
    domain: z.lazy(() => createCodeableConceptSchema()).optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    source: z.array(z.lazy(() => createReferenceSchema())).optional(),
    comment: primitives.createStringSchema().optional(),
    _comment: z.lazy(() => createElementSchema()).optional(),
    moiety: z
      .array(z.lazy(() => createSubstanceSpecificationMoietySchema()))
      .optional(),
    property: z
      .array(z.lazy(() => createSubstanceSpecificationPropertySchema()))
      .optional(),
    referenceInformation: z.lazy(() => createReferenceSchema()).optional(),
    structure: z
      .lazy(() => createSubstanceSpecificationStructureSchema())
      .optional(),
    code: z
      .array(z.lazy(() => createSubstanceSpecificationCodeSchema()))
      .optional(),
    name: z
      .array(z.lazy(() => createSubstanceSpecificationNameSchema()))
      .optional(),
    molecularWeight: z
      .array(z.lazy(() => createSubstanceSpecificationMolecularWeightSchema()))
      .optional(),
    relationship: z
      .array(z.lazy(() => createSubstanceSpecificationRelationshipSchema()))
      .optional(),
    nucleicAcid: z.lazy(() => createReferenceSchema()).optional(),
    polymer: z.lazy(() => createReferenceSchema()).optional(),
    protein: z.lazy(() => createReferenceSchema()).optional(),
    sourceMaterial: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
