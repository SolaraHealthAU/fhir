import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";
import { createSubstanceSourceMaterialAuthorSchema } from "../substancesourcematerialauthor/schema";
import { createSubstanceSourceMaterialHybridSchema } from "../substancesourcematerialhybrid/schema";
import { createSubstanceSourceMaterialOrganismGeneralSchema } from "../substancesourcematerialorganismgeneral/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceSourceMaterialOrganismSchema() {
  const baseSchema: z.ZodType<types.SubstanceSourceMaterialOrganism> = z.object(
    {
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      family: z.lazy(() => createCodeableConceptSchema()).optional(),
      genus: z.lazy(() => createCodeableConceptSchema()).optional(),
      species: z.lazy(() => createCodeableConceptSchema()).optional(),
      intraspecificType: z.lazy(() => createCodeableConceptSchema()).optional(),
      intraspecificDescription: primitives.createStringSchema().optional(),
      _intraspecificDescription: z.lazy(() => createElementSchema()).optional(),
      author: z
        .array(z.lazy(() => createSubstanceSourceMaterialAuthorSchema()))
        .optional(),
      hybrid: z
        .lazy(() => createSubstanceSourceMaterialHybridSchema())
        .optional(),
      organismGeneral: z
        .lazy(() => createSubstanceSourceMaterialOrganismGeneralSchema())
        .optional(),
    },
  );

  return baseSchema;
}
