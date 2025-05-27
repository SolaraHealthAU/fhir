import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createIdentifierSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductPackagedBatchIdentifierSchema() {
  const baseSchema: z.ZodType<types.MedicinalProductPackagedBatchIdentifier> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      outerPackaging: z.lazy(() => createIdentifierSchema()),
      immediatePackaging: z.lazy(() => createIdentifierSchema()).optional(),
    });

  return baseSchema;
}
