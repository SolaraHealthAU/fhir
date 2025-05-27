import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createGenomicStudyDeviceSchema() {
  const baseSchema: z.ZodType<types.GenomicStudyDevice> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    device: z.lazy(() => createReferenceSchema()).optional(),
    function: z.lazy(() => createCodeableConceptSchema()).optional(),
  });

  return baseSchema;
}
