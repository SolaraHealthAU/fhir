import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createConsentDataSchema() {
  const baseSchema: z.ZodType<types.ConsentData> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    meaning: z
      .enum(["instance", "related", "dependents", "authoredby"])
      .optional(),
    _meaning: z.lazy(() => createElementSchema()).optional(),
    reference: z.lazy(() => createReferenceSchema()),
  });

  return baseSchema;
}
