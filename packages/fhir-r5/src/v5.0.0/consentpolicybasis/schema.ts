import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createReferenceSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createConsentPolicyBasisSchema() {
  const baseSchema: z.ZodType<types.ConsentPolicyBasis> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    reference: z.lazy(() => createReferenceSchema()).optional(),
    url: primitives.createUrlSchema().optional(),
    _url: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
