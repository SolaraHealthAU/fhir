import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createIdentifierSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductManufacturingBusinessOperationSchema() {
  return getCachedSchema(
    "MedicinalProductManufacturingBusinessOperation",
    () => {
      const baseSchema: z.ZodType<types.MedicinalProductManufacturingBusinessOperation> =
        z.strictObject({
          id: primitives.getStringSchema().optional(),
          extension: z.array(createExtensionSchema()).optional(),
          modifierExtension: z.array(createExtensionSchema()).optional(),
          operationType: createCodeableConceptSchema().optional(),
          authorisationReferenceNumber: createIdentifierSchema().optional(),
          effectiveDate: primitives.getDateTimeSchema().optional(),
          _effectiveDate: createElementSchema().optional(),
          confidentialityIndicator: createCodeableConceptSchema().optional(),
          manufacturer: z.array(createReferenceSchema()).optional(),
          regulator: createReferenceSchema().optional(),
        });

      return baseSchema;
    },
  );
}
