import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createProcedureFocalDeviceSchema() {
  return getCachedSchema("ProcedureFocalDevice", () => {
    const baseSchema: z.ZodType<types.ProcedureFocalDevice> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      action: createCodeableConceptSchema().optional(),
      manipulated: createReferenceSchema(),
    });

    return baseSchema;
  });
}
