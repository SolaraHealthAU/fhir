import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createPermissionActivitySchema() {
  const baseSchema: z.ZodType<types.PermissionActivity> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    actor: z.array(z.lazy(() => createReferenceSchema())).optional(),
    action: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    purpose: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
  });

  return baseSchema;
}
