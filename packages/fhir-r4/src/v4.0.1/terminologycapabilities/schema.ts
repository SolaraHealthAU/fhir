import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createContactDetailSchema,
  createUsageContextSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createTerminologyCapabilitiesSoftwareSchema } from "../terminologycapabilitiessoftware/schema";
import { createTerminologyCapabilitiesImplementationSchema } from "../terminologycapabilitiesimplementation/schema";
import { createTerminologyCapabilitiesCodeSystemSchema } from "../terminologycapabilitiescodesystem/schema";
import { createTerminologyCapabilitiesExpansionSchema } from "../terminologycapabilitiesexpansion/schema";
import { createTerminologyCapabilitiesValidateCodeSchema } from "../terminologycapabilitiesvalidatecode/schema";
import { createTerminologyCapabilitiesTranslationSchema } from "../terminologycapabilitiestranslation/schema";
import { createTerminologyCapabilitiesClosureSchema } from "../terminologycapabilitiesclosure/schema";

/* Generated from FHIR JSON Schema */

export function createTerminologyCapabilitiesSchema() {
  const baseSchema: z.ZodType<types.TerminologyCapabilities> = z.object({
    resourceType: z.literal("TerminologyCapabilities"),
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
    url: primitives.createUriSchema().optional(),
    _url: z.lazy(() => createElementSchema()).optional(),
    version: primitives.createStringSchema().optional(),
    _version: z.lazy(() => createElementSchema()).optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    title: primitives.createStringSchema().optional(),
    _title: z.lazy(() => createElementSchema()).optional(),
    status: z.enum(["draft", "active", "retired", "unknown"]),
    _status: z.lazy(() => createElementSchema()).optional(),
    experimental: primitives.createBooleanSchema().optional(),
    _experimental: z.lazy(() => createElementSchema()).optional(),
    date: primitives.createDateTimeSchema(),
    _date: z.lazy(() => createElementSchema()).optional(),
    publisher: primitives.createStringSchema().optional(),
    _publisher: z.lazy(() => createElementSchema()).optional(),
    contact: z.array(z.lazy(() => createContactDetailSchema())).optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    useContext: z.array(z.lazy(() => createUsageContextSchema())).optional(),
    jurisdiction: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    purpose: primitives.createMarkdownSchema().optional(),
    _purpose: z.lazy(() => createElementSchema()).optional(),
    copyright: primitives.createMarkdownSchema().optional(),
    _copyright: z.lazy(() => createElementSchema()).optional(),
    kind: primitives.createCodeSchema(),
    _kind: z.lazy(() => createElementSchema()).optional(),
    software: z
      .lazy(() => createTerminologyCapabilitiesSoftwareSchema())
      .optional(),
    implementation: z
      .lazy(() => createTerminologyCapabilitiesImplementationSchema())
      .optional(),
    lockedDate: primitives.createBooleanSchema().optional(),
    _lockedDate: z.lazy(() => createElementSchema()).optional(),
    codeSystem: z
      .array(z.lazy(() => createTerminologyCapabilitiesCodeSystemSchema()))
      .optional(),
    expansion: z
      .lazy(() => createTerminologyCapabilitiesExpansionSchema())
      .optional(),
    codeSearch: z.enum(["explicit", "all"]).optional(),
    _codeSearch: z.lazy(() => createElementSchema()).optional(),
    validateCode: z
      .lazy(() => createTerminologyCapabilitiesValidateCodeSchema())
      .optional(),
    translation: z
      .lazy(() => createTerminologyCapabilitiesTranslationSchema())
      .optional(),
    closure: z
      .lazy(() => createTerminologyCapabilitiesClosureSchema())
      .optional(),
  });

  return baseSchema;
}
