import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceSourceMaterialOrganismGeneralSchema() {
  const baseSchema: z.ZodType<types.SubstanceSourceMaterialOrganismGeneral> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      kingdom: z.lazy(() => createCodeableConceptSchema()).optional(),
      phylum: z.lazy(() => createCodeableConceptSchema()).optional(),
      class: z.lazy(() => createCodeableConceptSchema()).optional(),
      order: z.lazy(() => createCodeableConceptSchema()).optional(),
    });

  return baseSchema;
}
