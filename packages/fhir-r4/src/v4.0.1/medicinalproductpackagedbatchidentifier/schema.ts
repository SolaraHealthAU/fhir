import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createIdentifierSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductPackagedBatchIdentifierSchema() {
  return getCachedSchema("MedicinalProductPackagedBatchIdentifier", () => {
    const baseSchema: z.ZodType<types.MedicinalProductPackagedBatchIdentifier> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        outerPackaging: createIdentifierSchema(),
        immediatePackaging: createIdentifierSchema().optional(),
      });

    return baseSchema;
  });
}
