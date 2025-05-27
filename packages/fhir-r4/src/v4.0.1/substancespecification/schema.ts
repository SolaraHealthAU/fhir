import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("SubstanceSpecification", () => {
    const baseSchema: z.ZodType<types.SubstanceSpecification> = z.strictObject({
      resourceType: z.literal("SubstanceSpecification"),
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
      identifier: z.lazy(() => createIdentifierSchema()).optional(),
      type: createCodeableConceptSchema().optional(),
      status: createCodeableConceptSchema().optional(),
      domain: createCodeableConceptSchema().optional(),
      description: primitives.getStringSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      source: z.array(createReferenceSchema()).optional(),
      comment: primitives.getStringSchema().optional(),
      _comment: z.lazy(() => createElementSchema()).optional(),
      moiety: z.array(createSubstanceSpecificationMoietySchema()).optional(),
      property: z
        .array(createSubstanceSpecificationPropertySchema())
        .optional(),
      referenceInformation: createReferenceSchema().optional(),
      structure: createSubstanceSpecificationStructureSchema().optional(),
      code: z.array(createSubstanceSpecificationCodeSchema()).optional(),
      name: z.array(createSubstanceSpecificationNameSchema()).optional(),
      molecularWeight: z
        .array(createSubstanceSpecificationMolecularWeightSchema())
        .optional(),
      relationship: z
        .array(createSubstanceSpecificationRelationshipSchema())
        .optional(),
      nucleicAcid: createReferenceSchema().optional(),
      polymer: createReferenceSchema().optional(),
      protein: createReferenceSchema().optional(),
      sourceMaterial: createReferenceSchema().optional(),
    });

    return baseSchema;
  });
}
