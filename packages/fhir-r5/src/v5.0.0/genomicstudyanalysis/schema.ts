import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createReferenceSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createGenomicStudyInputSchema } from "../genomicstudyinput/schema";
import { createGenomicStudyOutputSchema } from "../genomicstudyoutput/schema";
import { createGenomicStudyPerformerSchema } from "../genomicstudyperformer/schema";
import { createGenomicStudyDeviceSchema } from "../genomicstudydevice/schema";

/* Generated from FHIR JSON Schema */

export function createGenomicStudyAnalysisSchema() {
  const baseSchema: z.ZodType<types.GenomicStudyAnalysis> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    methodType: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    changeType: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    genomeBuild: z.lazy(() => createCodeableConceptSchema()).optional(),
    instantiatesCanonical: primitives.createCanonicalSchema().optional(),
    instantiatesUri: primitives.createUriSchema().optional(),
    _instantiatesUri: z.lazy(() => createElementSchema()).optional(),
    title: primitives.createStringSchema().optional(),
    _title: z.lazy(() => createElementSchema()).optional(),
    focus: z.array(z.lazy(() => createReferenceSchema())).optional(),
    specimen: z.array(z.lazy(() => createReferenceSchema())).optional(),
    date: primitives.createDateTimeSchema().optional(),
    _date: z.lazy(() => createElementSchema()).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    protocolPerformed: z.lazy(() => createReferenceSchema()).optional(),
    regionsStudied: z.array(z.lazy(() => createReferenceSchema())).optional(),
    regionsCalled: z.array(z.lazy(() => createReferenceSchema())).optional(),
    input: z.array(z.lazy(() => createGenomicStudyInputSchema())).optional(),
    output: z.array(z.lazy(() => createGenomicStudyOutputSchema())).optional(),
    performer: z
      .array(z.lazy(() => createGenomicStudyPerformerSchema()))
      .optional(),
    device: z.array(z.lazy(() => createGenomicStudyDeviceSchema())).optional(),
  });

  return baseSchema;
}
