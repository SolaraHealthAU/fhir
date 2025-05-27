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
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      code: primitives.getCodeSchema().optional(),
      _code: z.lazy(() => createElementSchema()).optional(),
      display: primitives.getStringSchema().optional(),
      _display: z.lazy(() => createElementSchema()).optional(),
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
      _equivalence: z.lazy(() => createElementSchema()).optional(),
      comment: primitives.getStringSchema().optional(),
      _comment: z.lazy(() => createElementSchema()).optional(),
      dependsOn: z.array(createConceptMapDependsOnSchema()).optional(),
      product: z.array(createConceptMapDependsOnSchema()).optional(),
    });

    return baseSchema;
  });
}
