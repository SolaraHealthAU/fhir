import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createPackagedProductDefinitionLegalStatusOfSupplySchema() {
  const baseSchema: z.ZodType<types.PackagedProductDefinitionLegalStatusOfSupply> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      code: z.lazy(() => createCodeableConceptSchema()).optional(),
      jurisdiction: z.lazy(() => createCodeableConceptSchema()).optional(),
    });

  return baseSchema;
}
