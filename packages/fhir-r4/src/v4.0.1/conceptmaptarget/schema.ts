import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createConceptMapDependsOnSchema } from "../conceptmapdependson/schema";

/* Generated from FHIR JSON Schema */

export function createConceptMapTargetSchema() {
  return getCachedSchema("ConceptMapTarget", () => {
    const baseSchema: z.ZodType<types.ConceptMapTarget> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      code: primitives.getCodeSchema().optional(),
      _code: createElementSchema().optional(),
      display: primitives.getStringSchema().optional(),
      _display: createElementSchema().optional(),
      equivalence: z
        .enum([
          "relatedto",
          "equivalent",
          "equal",
          "wider",
          "subsumes",
          "narrower",
          "specializes",
          "inexact",
          "unmatched",
          "disjoint",
        ])
        .optional(),
      _equivalence: createElementSchema().optional(),
      comment: primitives.getStringSchema().optional(),
      _comment: createElementSchema().optional(),
      dependsOn: z.array(createConceptMapDependsOnSchema()).optional(),
      product: z.array(createConceptMapDependsOnSchema()).optional(),
    });

    return baseSchema;
  });
}
