import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createImplementationGuideGlobalSchema() {
  const baseSchema: z.ZodType<types.ImplementationGuideGlobal> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: primitives.createCodeSchema(),
    _type: z.lazy(() => createElementSchema()).optional(),
    profile: primitives.createCanonicalSchema(),
  });

  return baseSchema;
}
