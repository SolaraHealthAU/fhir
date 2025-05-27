import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSpecimenDefinitionAdditiveSchema() {
  return getCachedSchema("SpecimenDefinitionAdditive", () => {
    const baseSchema: z.ZodType<types.SpecimenDefinitionAdditive> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        additiveCodeableConcept: createCodeableConceptSchema().optional(),
        additiveReference: createReferenceSchema().optional(),
      });

    return baseSchema;
  });
}
