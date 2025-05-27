import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createIdentifierSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductManufacturingBusinessOperationSchema() {
  const baseSchema: z.ZodType<types.MedicinalProductManufacturingBusinessOperation> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      operationType: z.lazy(() => createCodeableConceptSchema()).optional(),
      authorisationReferenceNumber: z
        .lazy(() => createIdentifierSchema())
        .optional(),
      effectiveDate: primitives.createDateTimeSchema().optional(),
      _effectiveDate: z.lazy(() => createElementSchema()).optional(),
      confidentialityIndicator: z
        .lazy(() => createCodeableConceptSchema())
        .optional(),
      manufacturer: z.array(z.lazy(() => createReferenceSchema())).optional(),
      regulator: z.lazy(() => createReferenceSchema()).optional(),
    });

  return baseSchema;
}
