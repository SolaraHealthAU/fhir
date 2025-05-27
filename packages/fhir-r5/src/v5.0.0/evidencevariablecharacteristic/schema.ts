import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createAnnotationSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createExpressionSchema,
  createQuantitySchema,
  createRangeSchema,
} from "../core/schema";
import { createEvidenceVariableDefinitionByTypeAndValueSchema } from "../evidencevariabledefinitionbytypeandvalue/schema";
import { createEvidenceVariableDefinitionByCombinationSchema } from "../evidencevariabledefinitionbycombination/schema";
import { createEvidenceVariableTimeFromEventSchema } from "../evidencevariabletimefromevent/schema";

/* Generated from FHIR JSON Schema */

export function createEvidenceVariableCharacteristicSchema() {
  const baseSchema: z.ZodType<types.EvidenceVariableCharacteristic> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    linkId: primitives.createIdSchema().optional(),
    _linkId: z.lazy(() => createElementSchema()).optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    exclude: primitives.createBooleanSchema().optional(),
    _exclude: z.lazy(() => createElementSchema()).optional(),
    definitionReference: z.lazy(() => createReferenceSchema()).optional(),
    definitionCanonical: primitives.createCanonicalSchema().optional(),
    definitionCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    definitionExpression: z.lazy(() => createExpressionSchema()).optional(),
    definitionId: primitives.createIdSchema().optional(),
    _definitionId: z.lazy(() => createElementSchema()).optional(),
    definitionByTypeAndValue: z
      .lazy(() => createEvidenceVariableDefinitionByTypeAndValueSchema())
      .optional(),
    definitionByCombination: z
      .lazy(() => createEvidenceVariableDefinitionByCombinationSchema())
      .optional(),
    instancesQuantity: z.lazy(() => createQuantitySchema()).optional(),
    instancesRange: z.lazy(() => createRangeSchema()).optional(),
    durationQuantity: z.lazy(() => createQuantitySchema()).optional(),
    durationRange: z.lazy(() => createRangeSchema()).optional(),
    timeFromEvent: z
      .array(z.lazy(() => createEvidenceVariableTimeFromEventSchema()))
      .optional(),
  });

  return baseSchema;
}
