import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createRiskEvidenceSynthesisSampleSizeSchema() {
  const baseSchema: z.ZodType<types.RiskEvidenceSynthesisSampleSize> = z.object(
    {
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      description: primitives.createStringSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      numberOfStudies: primitives.createIntegerSchema().optional(),
      _numberOfStudies: z.lazy(() => createElementSchema()).optional(),
      numberOfParticipants: primitives.createIntegerSchema().optional(),
      _numberOfParticipants: z.lazy(() => createElementSchema()).optional(),
    },
  );

  return baseSchema;
}
