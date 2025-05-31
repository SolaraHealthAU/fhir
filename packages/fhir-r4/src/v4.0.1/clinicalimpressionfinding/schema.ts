import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createClinicalImpressionFindingSchema() {
  return getCachedSchema("ClinicalImpressionFinding", () => {
    const baseSchema: z.ZodType<types.ClinicalImpressionFinding> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        itemCodeableConcept: createCodeableConceptSchema().optional(),
        itemReference: createReferenceSchema().optional(),
        basis: primitives.getStringSchema().optional(),
        _basis: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
