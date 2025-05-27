import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSpecimenDefinitionAdditiveSchema() {
  const baseSchema: z.ZodType<types.SpecimenDefinitionAdditive> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    additiveCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    additiveReference: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
