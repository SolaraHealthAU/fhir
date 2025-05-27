import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createDurationSchema,
  createRangeSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createRequestOrchestrationRelatedActionSchema() {
  const baseSchema: z.ZodType<types.RequestOrchestrationRelatedAction> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      targetId: primitives.createIdSchema().optional(),
      _targetId: z.lazy(() => createElementSchema()).optional(),
      relationship: primitives.createCodeSchema().optional(),
      _relationship: z.lazy(() => createElementSchema()).optional(),
      endRelationship: primitives.createCodeSchema().optional(),
      _endRelationship: z.lazy(() => createElementSchema()).optional(),
      offsetDuration: z.lazy(() => createDurationSchema()).optional(),
      offsetRange: z.lazy(() => createRangeSchema()).optional(),
    });

  return baseSchema;
}
