import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceSourceMaterialHybridSchema() {
  const baseSchema: z.ZodType<types.SubstanceSourceMaterialHybrid> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    maternalOrganismId: primitives.createStringSchema().optional(),
    _maternalOrganismId: z.lazy(() => createElementSchema()).optional(),
    maternalOrganismName: primitives.createStringSchema().optional(),
    _maternalOrganismName: z.lazy(() => createElementSchema()).optional(),
    paternalOrganismId: primitives.createStringSchema().optional(),
    _paternalOrganismId: z.lazy(() => createElementSchema()).optional(),
    paternalOrganismName: primitives.createStringSchema().optional(),
    _paternalOrganismName: z.lazy(() => createElementSchema()).optional(),
    hybridType: z.lazy(() => createCodeableConceptSchema()).optional(),
  });

  return baseSchema;
}
