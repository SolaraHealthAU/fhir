import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductSpecialDesignationSchema() {
  const baseSchema: z.ZodType<types.MedicinalProductSpecialDesignation> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
      type: z.lazy(() => createCodeableConceptSchema()).optional(),
      intendedUse: z.lazy(() => createCodeableConceptSchema()).optional(),
      indicationCodeableConcept: z
        .lazy(() => createCodeableConceptSchema())
        .optional(),
      indicationReference: z.lazy(() => createReferenceSchema()).optional(),
      status: z.lazy(() => createCodeableConceptSchema()).optional(),
      date: primitives.createDateTimeSchema().optional(),
      _date: z.lazy(() => createElementSchema()).optional(),
      species: z.lazy(() => createCodeableConceptSchema()).optional(),
    });

  return baseSchema;
}
