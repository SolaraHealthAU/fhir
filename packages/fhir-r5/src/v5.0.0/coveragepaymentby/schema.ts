import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createReferenceSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCoveragePaymentBySchema() {
  const baseSchema: z.ZodType<types.CoveragePaymentBy> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    party: z.lazy(() => createReferenceSchema()),
    responsibility: primitives.createStringSchema().optional(),
    _responsibility: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
