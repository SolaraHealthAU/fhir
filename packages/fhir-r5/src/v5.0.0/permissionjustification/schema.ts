import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createPermissionJustificationSchema() {
  const baseSchema: z.ZodType<types.PermissionJustification> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    basis: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    evidence: z.array(z.lazy(() => createReferenceSchema())).optional(),
  });

  return baseSchema;
}
