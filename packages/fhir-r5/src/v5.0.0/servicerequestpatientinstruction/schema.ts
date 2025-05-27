import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createServiceRequestPatientInstructionSchema() {
  const baseSchema: z.ZodType<types.ServiceRequestPatientInstruction> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      instructionMarkdown: z.string().optional(),
      _instructionMarkdown: z.lazy(() => createElementSchema()).optional(),
      instructionReference: z.lazy(() => createReferenceSchema()).optional(),
    });

  return baseSchema;
}
