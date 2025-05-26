import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTerminologyCapabilitiesParameterSchema() {
  const baseSchema: z.ZodType<types.TerminologyCapabilitiesParameter> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      name: primitives.createCodeSchema().optional(),
      _name: z.lazy(() => createElementSchema()).optional(),
      documentation: primitives.createStringSchema().optional(),
      _documentation: z.lazy(() => createElementSchema()).optional(),
    });

  return baseSchema;
}
