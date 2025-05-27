import { z } from "zod/v4";
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
    meaning: primitives.createCodeSchema().optional(),
    _meaning: z.lazy(() => createElementSchema()).optional(),
    reference: z.lazy(() => createReferenceSchema()),
  });

  return baseSchema;
}
