import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.SpecimenContainer> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    capacity: z.lazy(() => createQuantitySchema()).optional(),
    specimenQuantity: z.lazy(() => createQuantitySchema()).optional(),
    additiveCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    additiveReference: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
