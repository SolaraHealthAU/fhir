import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("TerminologyCapabilities", () => {
    const baseSchema: z.ZodType<types.TerminologyCapabilities> = z.strictObject(
      {
        resourceType: z.literal("TerminologyCapabilities"),
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
        url: primitives.getUriSchema().optional(),
        _url: z.lazy(() => createElementSchema()).optional(),
        version: primitives.getStringSchema().optional(),
        _version: z.lazy(() => createElementSchema()).optional(),
        name: primitives.getStringSchema().optional(),
        _name: z.lazy(() => createElementSchema()).optional(),
        title: primitives.getStringSchema().optional(),
        _title: z.lazy(() => createElementSchema()).optional(),
        status: z.enum(["draft", "active", "retired", "unknown"]),
        _status: z.lazy(() => createElementSchema()).optional(),
        experimental: primitives.getBooleanSchema().optional(),
        _experimental: z.lazy(() => createElementSchema()).optional(),
        date: primitives.getDateTimeSchema(),
        _date: z.lazy(() => createElementSchema()).optional(),
        publisher: primitives.getStringSchema().optional(),
        _publisher: z.lazy(() => createElementSchema()).optional(),
        contact: z.array(createContactDetailSchema()).optional(),
        description: primitives.getMarkdownSchema().optional(),
        _description: z.lazy(() => createElementSchema()).optional(),
        useContext: z.array(createUsageContextSchema()).optional(),
        jurisdiction: z.array(createCodeableConceptSchema()).optional(),
        purpose: primitives.getMarkdownSchema().optional(),
        _purpose: z.lazy(() => createElementSchema()).optional(),
        copyright: primitives.getMarkdownSchema().optional(),
        _copyright: z.lazy(() => createElementSchema()).optional(),
        kind: primitives.getCodeSchema(),
        _kind: z.lazy(() => createElementSchema()).optional(),
        software: createTerminologyCapabilitiesSoftwareSchema().optional(),
        implementation:
          createTerminologyCapabilitiesImplementationSchema().optional(),
        lockedDate: primitives.getBooleanSchema().optional(),
        _lockedDate: z.lazy(() => createElementSchema()).optional(),
        codeSystem: z
          .array(createTerminologyCapabilitiesCodeSystemSchema())
          .optional(),
        expansion: createTerminologyCapabilitiesExpansionSchema().optional(),
        codeSearch: z.enum(["explicit", "all"]).optional(),
        _codeSearch: z.lazy(() => createElementSchema()).optional(),
        validateCode:
          createTerminologyCapabilitiesValidateCodeSchema().optional(),
        translation:
          createTerminologyCapabilitiesTranslationSchema().optional(),
        closure: createTerminologyCapabilitiesClosureSchema().optional(),
      },
    );

    return baseSchema;
  });
}
