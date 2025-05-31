import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductAuthorizationProcedureSchema() {
  return getCachedSchema("MedicinalProductAuthorizationProcedure", () => {
    const baseSchema: z.ZodType<types.MedicinalProductAuthorizationProcedure> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        identifier: createIdentifierSchema().optional(),
        type: createCodeableConceptSchema(),
        datePeriod: createPeriodSchema().optional(),
        dateDateTime: z.string().optional(),
        _dateDateTime: createElementSchema().optional(),
        application: z
          .array(createMedicinalProductAuthorizationProcedureSchema())
          .optional(),
      });

    return baseSchema;
  });
}
