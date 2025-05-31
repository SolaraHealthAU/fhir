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
        _implicitRules: createElementSchema().optional(),
        language: primitives.getCodeSchema().optional(),
        _language: createElementSchema().optional(),
        text: createNarrativeSchema().optional(),
        contained: z.array(createResourceListSchema()).optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        url: primitives.getUriSchema().optional(),
        _url: createElementSchema().optional(),
        version: primitives.getStringSchema().optional(),
        _version: createElementSchema().optional(),
        name: primitives.getStringSchema().optional(),
        _name: createElementSchema().optional(),
        title: primitives.getStringSchema().optional(),
        _title: createElementSchema().optional(),
        status: z.enum(["draft", "active", "retired", "unknown"]),
        _status: createElementSchema().optional(),
        experimental: primitives.getBooleanSchema().optional(),
        _experimental: createElementSchema().optional(),
        date: primitives.getDateTimeSchema(),
        _date: createElementSchema().optional(),
        publisher: primitives.getStringSchema().optional(),
        _publisher: createElementSchema().optional(),
        contact: z.array(createContactDetailSchema()).optional(),
        description: primitives.getMarkdownSchema().optional(),
        _description: createElementSchema().optional(),
        useContext: z.array(createUsageContextSchema()).optional(),
        jurisdiction: z.array(createCodeableConceptSchema()).optional(),
        purpose: primitives.getMarkdownSchema().optional(),
        _purpose: createElementSchema().optional(),
        copyright: primitives.getMarkdownSchema().optional(),
        _copyright: createElementSchema().optional(),
        kind: primitives.getCodeSchema(),
        _kind: createElementSchema().optional(),
        software: createTerminologyCapabilitiesSoftwareSchema().optional(),
        implementation:
          createTerminologyCapabilitiesImplementationSchema().optional(),
        lockedDate: primitives.getBooleanSchema().optional(),
        _lockedDate: createElementSchema().optional(),
        codeSystem: z
          .array(createTerminologyCapabilitiesCodeSystemSchema())
          .optional(),
        expansion: createTerminologyCapabilitiesExpansionSchema().optional(),
        codeSearch: z.enum(["explicit", "all"]).optional(),
        _codeSearch: createElementSchema().optional(),
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
