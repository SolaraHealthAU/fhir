import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createReferenceSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createPatientLinkSchema() {
  return getCachedSchema("PatientLink", () => {
    const baseSchema: z.ZodType<types.PatientLink> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      other: createReferenceSchema(),
      type: z.enum(["replaced-by", "replaces", "refer", "seealso"]),
      _type: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
