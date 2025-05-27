import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableReferenceSchema,
  createRangeSchema,
  createElementSchema,
  createReferenceSchema,
  createExpressionSchema,
} from "../core/schema";
import { createClinicalUseDefinitionOtherTherapySchema } from "../clinicalusedefinitionothertherapy/schema";

/* Generated from FHIR JSON Schema */

export function createClinicalUseDefinitionIndicationSchema() {
  const baseSchema: z.ZodType<types.ClinicalUseDefinitionIndication> = z.object(
    {
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
      intendedEffect: z.lazy(() => createCodeableReferenceSchema()).optional(),
      durationRange: z.lazy(() => createRangeSchema()).optional(),
      durationString: z.string().optional(),
      _durationString: z.lazy(() => createElementSchema()).optional(),
      undesirableEffect: z
        .array(z.lazy(() => createReferenceSchema()))
        .optional(),
      applicability: z.lazy(() => createExpressionSchema()).optional(),
      otherTherapy: z
        .array(z.lazy(() => createClinicalUseDefinitionOtherTherapySchema()))
        .optional(),
    },
  );

  return baseSchema;
}
