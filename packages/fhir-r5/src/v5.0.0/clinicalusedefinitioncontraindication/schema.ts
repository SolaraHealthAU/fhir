import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableReferenceSchema,
  createReferenceSchema,
  createExpressionSchema,
} from "../core/schema";
import { createClinicalUseDefinitionOtherTherapySchema } from "../clinicalusedefinitionothertherapy/schema";

/* Generated from FHIR JSON Schema */

export function createClinicalUseDefinitionContraindicationSchema() {
  const baseSchema: z.ZodType<types.ClinicalUseDefinitionContraindication> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      diseaseSymptomProcedure: z
        .lazy(() => createCodeableReferenceSchema())
        .optional(),
      diseaseStatus: z.lazy(() => createCodeableReferenceSchema()).optional(),
      comorbidity: z
        .array(z.lazy(() => createCodeableReferenceSchema()))
        .optional(),
      indication: z.array(z.lazy(() => createReferenceSchema())).optional(),
      applicability: z.lazy(() => createExpressionSchema()).optional(),
      otherTherapy: z
        .array(z.lazy(() => createClinicalUseDefinitionOtherTherapySchema()))
        .optional(),
    });

  return baseSchema;
}
