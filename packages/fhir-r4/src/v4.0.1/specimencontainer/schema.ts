import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createIdentifierSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSpecimenContainerSchema() {
  return getCachedSchema("SpecimenContainer", () => {
    const baseSchema: z.ZodType<types.SpecimenContainer> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      identifier: z.array(createIdentifierSchema()).optional(),
      description: primitives.getStringSchema().optional(),
      _description: createElementSchema().optional(),
      type: createCodeableConceptSchema().optional(),
      capacity: createQuantitySchema().optional(),
      specimenQuantity: createQuantitySchema().optional(),
      additiveCodeableConcept: createCodeableConceptSchema().optional(),
      additiveReference: createReferenceSchema().optional(),
    });

    return baseSchema;
  });
}
