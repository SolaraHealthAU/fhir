import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceSourceMaterialAuthorSchema() {
  const baseSchema: z.ZodType<types.SubstanceSourceMaterialAuthor> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    authorType: z.lazy(() => createCodeableConceptSchema()).optional(),
    authorDescription: primitives.createStringSchema().optional(),
    _authorDescription: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
