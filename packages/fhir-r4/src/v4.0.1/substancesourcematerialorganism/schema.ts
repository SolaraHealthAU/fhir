import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("SubstanceSourceMaterialOrganism", () => {
    const baseSchema: z.ZodType<types.SubstanceSourceMaterialOrganism> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        family: createCodeableConceptSchema().optional(),
        genus: createCodeableConceptSchema().optional(),
        species: createCodeableConceptSchema().optional(),
        intraspecificType: createCodeableConceptSchema().optional(),
        intraspecificDescription: primitives.getStringSchema().optional(),
        _intraspecificDescription: z
          .lazy(() => createElementSchema())
          .optional(),
        author: z.array(createSubstanceSourceMaterialAuthorSchema()).optional(),
        hybrid: createSubstanceSourceMaterialHybridSchema().optional(),
        organismGeneral:
          createSubstanceSourceMaterialOrganismGeneralSchema().optional(),
      });

    return baseSchema;
  });
}
