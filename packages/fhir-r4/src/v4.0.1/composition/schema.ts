import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("Composition", () => {
    const baseSchema: z.ZodType<types.Composition> = z.strictObject({
      resourceType: z.literal("Composition"),
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
      identifier: z.lazy(() => createIdentifierSchema()).optional(),
      status: z.enum(["preliminary", "final", "amended", "entered-in-error"]),
      _status: z.lazy(() => createElementSchema()).optional(),
      type: createCodeableConceptSchema(),
      category: z.array(createCodeableConceptSchema()).optional(),
      subject: createReferenceSchema().optional(),
      encounter: createReferenceSchema().optional(),
      date: primitives.getDateTimeSchema(),
      _date: z.lazy(() => createElementSchema()).optional(),
      author: z.array(createReferenceSchema()),
      title: primitives.getStringSchema(),
      _title: z.lazy(() => createElementSchema()).optional(),
      confidentiality: primitives.getCodeSchema().optional(),
      _confidentiality: z.lazy(() => createElementSchema()).optional(),
      attester: z.array(createCompositionAttesterSchema()).optional(),
      custodian: createReferenceSchema().optional(),
      relatesTo: z.array(createCompositionRelatesToSchema()).optional(),
      event: z.array(createCompositionEventSchema()).optional(),
      section: z.array(createCompositionSectionSchema()).optional(),
    });

    return baseSchema;
  });
}
