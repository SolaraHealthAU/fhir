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
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createSubstanceDefinitionMoietySchema } from "../substancedefinitionmoiety/schema";
import { createSubstanceDefinitionCharacterizationSchema } from "../substancedefinitioncharacterization/schema";
import { createSubstanceDefinitionPropertySchema } from "../substancedefinitionproperty/schema";
import { createSubstanceDefinitionMolecularWeightSchema } from "../substancedefinitionmolecularweight/schema";
import { createSubstanceDefinitionStructureSchema } from "../substancedefinitionstructure/schema";
import { createSubstanceDefinitionCodeSchema } from "../substancedefinitioncode/schema";
import { createSubstanceDefinitionNameSchema } from "../substancedefinitionname/schema";
import { createSubstanceDefinitionRelationshipSchema } from "../substancedefinitionrelationship/schema";
import { createSubstanceDefinitionSourceMaterialSchema } from "../substancedefinitionsourcematerial/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceDefinitionSchema() {
  const baseSchema: z.ZodType<types.SubstanceDefinition> = z.object({
    resourceType: z.literal("SubstanceDefinition"),
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
    version: primitives.createStringSchema().optional(),
    _version: z.lazy(() => createElementSchema()).optional(),
    status: z.lazy(() => createCodeableConceptSchema()).optional(),
    classification: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    domain: z.lazy(() => createCodeableConceptSchema()).optional(),
    grade: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    informationSource: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    manufacturer: z.array(z.lazy(() => createReferenceSchema())).optional(),
    supplier: z.array(z.lazy(() => createReferenceSchema())).optional(),
    moiety: z
      .array(z.lazy(() => createSubstanceDefinitionMoietySchema()))
      .optional(),
    characterization: z
      .array(z.lazy(() => createSubstanceDefinitionCharacterizationSchema()))
      .optional(),
    property: z
      .array(z.lazy(() => createSubstanceDefinitionPropertySchema()))
      .optional(),
    referenceInformation: z.lazy(() => createReferenceSchema()).optional(),
    molecularWeight: z
      .array(z.lazy(() => createSubstanceDefinitionMolecularWeightSchema()))
      .optional(),
    structure: z
      .lazy(() => createSubstanceDefinitionStructureSchema())
      .optional(),
    code: z
      .array(z.lazy(() => createSubstanceDefinitionCodeSchema()))
      .optional(),
    name: z
      .array(z.lazy(() => createSubstanceDefinitionNameSchema()))
      .optional(),
    relationship: z
      .array(z.lazy(() => createSubstanceDefinitionRelationshipSchema()))
      .optional(),
    nucleicAcid: z.lazy(() => createReferenceSchema()).optional(),
    polymer: z.lazy(() => createReferenceSchema()).optional(),
    protein: z.lazy(() => createReferenceSchema()).optional(),
    sourceMaterial: z
      .lazy(() => createSubstanceDefinitionSourceMaterialSchema())
      .optional(),
  });

  return baseSchema;
}
