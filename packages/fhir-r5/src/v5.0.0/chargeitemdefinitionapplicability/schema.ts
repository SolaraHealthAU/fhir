import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createExpressionSchema,
  createPeriodSchema,
  createRelatedArtifactSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createChargeItemDefinitionApplicabilitySchema() {
  const baseSchema: z.ZodType<types.ChargeItemDefinitionApplicability> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      condition: z.lazy(() => createExpressionSchema()).optional(),
      effectivePeriod: z.lazy(() => createPeriodSchema()).optional(),
      relatedArtifact: z.lazy(() => createRelatedArtifactSchema()).optional(),
    });

  return baseSchema;
}
