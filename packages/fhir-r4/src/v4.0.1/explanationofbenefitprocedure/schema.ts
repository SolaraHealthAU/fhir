import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createExplanationOfBenefitProcedureSchema() {
  return getCachedSchema("ExplanationOfBenefitProcedure", () => {
    const baseSchema: z.ZodType<types.ExplanationOfBenefitProcedure> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        sequence: primitives.getPositiveIntSchema(),
        _sequence: z.lazy(() => createElementSchema()).optional(),
        type: z.array(createCodeableConceptSchema()).optional(),
        date: primitives.getDateTimeSchema().optional(),
        _date: z.lazy(() => createElementSchema()).optional(),
        procedureCodeableConcept: createCodeableConceptSchema().optional(),
        procedureReference: createReferenceSchema().optional(),
        udi: z.array(createReferenceSchema()).optional(),
      });

    return baseSchema;
  });
}
