import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
  createAgeSchema,
  createRangeSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createProcedurePerformerSchema } from "../procedureperformer/schema";
import { createProcedureFocalDeviceSchema } from "../procedurefocaldevice/schema";

/* Generated from FHIR JSON Schema */

export function createProcedureSchema() {
  return getCachedSchema("Procedure", () => {
    const baseSchema: z.ZodType<types.Procedure> = z.strictObject({
      resourceType: z.literal("Procedure"),
      id: primitives.getIdSchema().optional(),
      meta: createMetaSchema().optional(),
      implicitRules: primitives.getUriSchema().optional(),
      _implicitRules: z.lazy(() => createElementSchema()).optional(),
      language: primitives.getCodeSchema().optional(),
      _language: z.lazy(() => createElementSchema()).optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
      instantiatesCanonical: z
        .array(primitives.getCanonicalSchema())
        .optional(),
      instantiatesUri: z.array(primitives.getUriSchema()).optional(),
      _instantiatesUri: z.array(z.lazy(() => createElementSchema())).optional(),
      basedOn: z.array(createReferenceSchema()).optional(),
      partOf: z.array(createReferenceSchema()).optional(),
      status: primitives.getCodeSchema(),
      _status: z.lazy(() => createElementSchema()).optional(),
      statusReason: createCodeableConceptSchema().optional(),
      category: createCodeableConceptSchema().optional(),
      code: createCodeableConceptSchema().optional(),
      subject: createReferenceSchema(),
      encounter: createReferenceSchema().optional(),
      performedDateTime: z.string().optional(),
      _performedDateTime: z.lazy(() => createElementSchema()).optional(),
      performedPeriod: createPeriodSchema().optional(),
      performedString: z.string().optional(),
      _performedString: z.lazy(() => createElementSchema()).optional(),
      performedAge: createAgeSchema().optional(),
      performedRange: createRangeSchema().optional(),
      recorder: createReferenceSchema().optional(),
      asserter: createReferenceSchema().optional(),
      performer: z.array(createProcedurePerformerSchema()).optional(),
      location: createReferenceSchema().optional(),
      reasonCode: z.array(createCodeableConceptSchema()).optional(),
      reasonReference: z.array(createReferenceSchema()).optional(),
      bodySite: z.array(createCodeableConceptSchema()).optional(),
      outcome: createCodeableConceptSchema().optional(),
      report: z.array(createReferenceSchema()).optional(),
      complication: z.array(createCodeableConceptSchema()).optional(),
      complicationDetail: z.array(createReferenceSchema()).optional(),
      followUp: z.array(createCodeableConceptSchema()).optional(),
      note: z.array(createAnnotationSchema()).optional(),
      focalDevice: z.array(createProcedureFocalDeviceSchema()).optional(),
      usedReference: z.array(createReferenceSchema()).optional(),
      usedCode: z.array(createCodeableConceptSchema()).optional(),
    });

    return baseSchema;
  });
}
