import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createReferenceSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createPatientLinkSchema() {
  const baseSchema: z.ZodType<types.PatientLink> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    other: z.lazy(() => createReferenceSchema()),
    type: z.enum(["replaced-by", "replaces", "refer", "seealso"]),
    _type: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
