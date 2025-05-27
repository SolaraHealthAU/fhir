import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableReferenceSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createClaimBodySiteSchema() {
  const baseSchema: z.ZodType<types.ClaimBodySite> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    site: z.array(z.lazy(() => createCodeableReferenceSchema())),
    subSite: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
  });

  return baseSchema;
}
