import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceDefinitionMolecularWeightSchema() {
  const baseSchema: z.ZodType<types.SubstanceDefinitionMolecularWeight> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      method: z.lazy(() => createCodeableConceptSchema()).optional(),
      type: z.lazy(() => createCodeableConceptSchema()).optional(),
      amount: z.lazy(() => createQuantitySchema()),
    });

  return baseSchema;
}
