import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createCapabilityStatementInteractionSchema } from "../capabilitystatementinteraction/schema";
import { createCapabilityStatementSearchParamSchema } from "../capabilitystatementsearchparam/schema";
import { createCapabilityStatementOperationSchema } from "../capabilitystatementoperation/schema";

/* Generated from FHIR JSON Schema */

export function createCapabilityStatementResourceSchema() {
  const baseSchema: z.ZodType<types.CapabilityStatementResource> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: primitives.createCodeSchema().optional(),
    _type: z.lazy(() => createElementSchema()).optional(),
    profile: primitives.createCanonicalSchema().optional(),
    supportedProfile: z.array(primitives.createCanonicalSchema()).optional(),
    documentation: primitives.createMarkdownSchema().optional(),
    _documentation: z.lazy(() => createElementSchema()).optional(),
    interaction: z
      .array(z.lazy(() => createCapabilityStatementInteractionSchema()))
      .optional(),
    versioning: primitives.createCodeSchema().optional(),
    _versioning: z.lazy(() => createElementSchema()).optional(),
    readHistory: primitives.createBooleanSchema().optional(),
    _readHistory: z.lazy(() => createElementSchema()).optional(),
    updateCreate: primitives.createBooleanSchema().optional(),
    _updateCreate: z.lazy(() => createElementSchema()).optional(),
    conditionalCreate: primitives.createBooleanSchema().optional(),
    _conditionalCreate: z.lazy(() => createElementSchema()).optional(),
    conditionalRead: primitives.createCodeSchema().optional(),
    _conditionalRead: z.lazy(() => createElementSchema()).optional(),
    conditionalUpdate: primitives.createBooleanSchema().optional(),
    _conditionalUpdate: z.lazy(() => createElementSchema()).optional(),
    conditionalPatch: primitives.createBooleanSchema().optional(),
    _conditionalPatch: z.lazy(() => createElementSchema()).optional(),
    conditionalDelete: primitives.createCodeSchema().optional(),
    _conditionalDelete: z.lazy(() => createElementSchema()).optional(),
    referencePolicy: z.array(primitives.createCodeSchema()).optional(),
    _referencePolicy: z.array(z.lazy(() => createElementSchema())).optional(),
    searchInclude: z.array(primitives.createStringSchema()).optional(),
    _searchInclude: z.array(z.lazy(() => createElementSchema())).optional(),
    searchRevInclude: z.array(primitives.createStringSchema()).optional(),
    _searchRevInclude: z.array(z.lazy(() => createElementSchema())).optional(),
    searchParam: z
      .array(z.lazy(() => createCapabilityStatementSearchParamSchema()))
      .optional(),
    operation: z
      .array(z.lazy(() => createCapabilityStatementOperationSchema()))
      .optional(),
  });

  return baseSchema;
}
