import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductSpecialDesignationSchema() {
  return getCachedSchema("MedicinalProductSpecialDesignation", () => {
    const baseSchema: z.ZodType<types.MedicinalProductSpecialDesignation> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        identifier: z.array(createIdentifierSchema()).optional(),
        type: createCodeableConceptSchema().optional(),
        intendedUse: createCodeableConceptSchema().optional(),
        indicationCodeableConcept: createCodeableConceptSchema().optional(),
        indicationReference: createReferenceSchema().optional(),
        status: createCodeableConceptSchema().optional(),
        date: primitives.getDateTimeSchema().optional(),
        _date: createElementSchema().optional(),
        species: createCodeableConceptSchema().optional(),
      });

    return baseSchema;
  });
}
