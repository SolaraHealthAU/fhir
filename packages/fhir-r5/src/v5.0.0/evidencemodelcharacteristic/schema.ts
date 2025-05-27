import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
} from "../core/schema";
import { createEvidenceVariableSchema } from "../evidencevariable/schema";
import { createEvidenceAttributeEstimateSchema } from "../evidenceattributeestimate/schema";

/* Generated from FHIR JSON Schema */

export function createEvidenceModelCharacteristicSchema() {
  const baseSchema: z.ZodType<types.EvidenceModelCharacteristic> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    code: z.lazy(() => createCodeableConceptSchema()),
    value: z.lazy(() => createQuantitySchema()).optional(),
    variable: z.array(z.lazy(() => createEvidenceVariableSchema())).optional(),
    attributeEstimate: z
      .array(z.lazy(() => createEvidenceAttributeEstimateSchema()))
      .optional(),
  });

  return baseSchema;
}
