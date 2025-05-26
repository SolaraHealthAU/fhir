import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createCompositionAttesterSchema } from "../compositionattester/schema";
import { createCompositionRelatesToSchema } from "../compositionrelatesto/schema";
import { createCompositionEventSchema } from "../compositionevent/schema";
import { createCompositionSectionSchema } from "../compositionsection/schema";

/* Generated from FHIR JSON Schema */

export function createCompositionSchema() {
  const baseSchema: z.ZodType<types.Composition> = z.object({
    resourceType: z.literal("Composition"),
    id: primitives.createIdSchema().optional(),
    meta: z.lazy(() => createMetaSchema()).optional(),
    implicitRules: primitives.createUriSchema().optional(),
    _implicitRules: z.lazy(() => createElementSchema()).optional(),
    language: primitives.createCodeSchema().optional(),
    _language: z.lazy(() => createElementSchema()).optional(),
    text: z.lazy(() => createNarrativeSchema()).optional(),
    contained: z.array(z.lazy(() => createResourceListSchema())).optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    identifier: z.lazy(() => createIdentifierSchema()).optional(),
    status: z.enum(["preliminary", "final", "amended", "entered-in-error"]),
    _status: z.lazy(() => createElementSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()),
    category: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    subject: z.lazy(() => createReferenceSchema()).optional(),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    date: primitives.createDateTimeSchema(),
    _date: z.lazy(() => createElementSchema()).optional(),
    author: z.array(z.lazy(() => createReferenceSchema())),
    title: primitives.createStringSchema(),
    _title: z.lazy(() => createElementSchema()).optional(),
    confidentiality: primitives.createCodeSchema().optional(),
    _confidentiality: z.lazy(() => createElementSchema()).optional(),
    attester: z
      .array(z.lazy(() => createCompositionAttesterSchema()))
      .optional(),
    custodian: z.lazy(() => createReferenceSchema()).optional(),
    relatesTo: z
      .array(z.lazy(() => createCompositionRelatesToSchema()))
      .optional(),
    event: z.array(z.lazy(() => createCompositionEventSchema())).optional(),
    section: z.array(z.lazy(() => createCompositionSectionSchema())).optional(),
  });

  return baseSchema;
}
