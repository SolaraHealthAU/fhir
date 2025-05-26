import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createProcedureFocalDeviceSchema() {
  const baseSchema: z.ZodType<types.ProcedureFocalDevice> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    action: z.lazy(() => createCodeableConceptSchema()).optional(),
    manipulated: z.lazy(() => createReferenceSchema()),
  });

  return baseSchema;
}
