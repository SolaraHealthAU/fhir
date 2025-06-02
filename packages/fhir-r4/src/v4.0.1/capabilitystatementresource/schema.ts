import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createCapabilityStatementInteractionSchema } from "../capabilitystatementinteraction/schema";
import { createCapabilityStatementSearchParamSchema } from "../capabilitystatementsearchparam/schema";
import { createCapabilityStatementOperationSchema } from "../capabilitystatementoperation/schema";

/* Generated from FHIR JSON Schema */

export function createCapabilityStatementResourceSchema() {
  return getCachedSchema("CapabilityStatementResource", () => {
    const baseSchema: z.ZodType<types.CapabilityStatementResource> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        type: primitives.getCodeSchema().optional(),
        _type: createElementSchema().optional(),
        profile: primitives.getCanonicalSchema().optional(),
        supportedProfile: z.array(primitives.getCanonicalSchema()).optional(),
        documentation: primitives.getMarkdownSchema().optional(),
        _documentation: createElementSchema().optional(),
        interaction: z
          .array(createCapabilityStatementInteractionSchema())
          .optional(),
        versioning: z
          .enum(["no-version", "versioned", "versioned-update"])
          .optional(),
        _versioning: createElementSchema().optional(),
        readHistory: primitives.getBooleanSchema().optional(),
        _readHistory: createElementSchema().optional(),
        updateCreate: primitives.getBooleanSchema().optional(),
        _updateCreate: createElementSchema().optional(),
        conditionalCreate: primitives.getBooleanSchema().optional(),
        _conditionalCreate: createElementSchema().optional(),
        conditionalRead: z
          .enum([
            "not-supported",
            "modified-since",
            "not-match",
            "full-support",
          ])
          .optional(),
        _conditionalRead: createElementSchema().optional(),
        conditionalUpdate: primitives.getBooleanSchema().optional(),
        _conditionalUpdate: createElementSchema().optional(),
        conditionalDelete: z
          .enum(["not-supported", "single", "multiple"])
          .optional(),
        _conditionalDelete: createElementSchema().optional(),
        referencePolicy: z
          .enum(["literal", "logical", "resolves", "enforced", "local"])
          .array()
          .optional(),
        _referencePolicy: z.array(createElementSchema()).optional(),
        searchInclude: z.array(primitives.getStringSchema()).optional(),
        _searchInclude: z.array(createElementSchema()).optional(),
        searchRevInclude: z.array(primitives.getStringSchema()).optional(),
        _searchRevInclude: z.array(createElementSchema()).optional(),
        searchParam: z
          .array(createCapabilityStatementSearchParamSchema())
          .optional(),
        operation: z
          .array(createCapabilityStatementOperationSchema())
          .optional(),
      });

    return baseSchema;
  });
}
