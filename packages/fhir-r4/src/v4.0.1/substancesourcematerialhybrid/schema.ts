import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceSourceMaterialHybridSchema() {
  return getCachedSchema("SubstanceSourceMaterialHybrid", () => {
    const baseSchema: z.ZodType<types.SubstanceSourceMaterialHybrid> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        maternalOrganismId: primitives.getStringSchema().optional(),
        _maternalOrganismId: z.lazy(() => createElementSchema()).optional(),
        maternalOrganismName: primitives.getStringSchema().optional(),
        _maternalOrganismName: z.lazy(() => createElementSchema()).optional(),
        paternalOrganismId: primitives.getStringSchema().optional(),
        _paternalOrganismId: z.lazy(() => createElementSchema()).optional(),
        paternalOrganismName: primitives.getStringSchema().optional(),
        _paternalOrganismName: z.lazy(() => createElementSchema()).optional(),
        hybridType: createCodeableConceptSchema().optional(),
      });

    return baseSchema;
  });
}
