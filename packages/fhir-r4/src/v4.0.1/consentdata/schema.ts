import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createConsentDataSchema() {
  return getCachedSchema("ConsentData", () => {
    const baseSchema: z.ZodType<types.ConsentData> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      meaning: z
        .enum(["instance", "related", "dependents", "authoredby"])
        .optional(),
      _meaning: z.lazy(() => createElementSchema()).optional(),
      reference: createReferenceSchema(),
    });

    return baseSchema;
  });
}
