import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createOperationOutcomeIssueSchema } from "../operationoutcomeissue/schema";

/* Generated from FHIR JSON Schema */

export function createOperationOutcomeSchema() {
  return getCachedSchema("OperationOutcome", () => {
    const baseSchema: z.ZodType<types.OperationOutcome> = z.strictObject({
      resourceType: z.literal("OperationOutcome"),
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
      issue: z.array(createOperationOutcomeIssueSchema()),
    });

    return baseSchema;
  });
}
