import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createDurationSchema,
  createRangeSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createRequestGroupRelatedActionSchema() {
  return getCachedSchema("RequestGroupRelatedAction", () => {
    const baseSchema: z.ZodType<types.RequestGroupRelatedAction> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        actionId: primitives.getIdSchema().optional(),
        _actionId: createElementSchema().optional(),
        relationship: primitives.getCodeSchema().optional(),
        _relationship: createElementSchema().optional(),
        offsetDuration: createDurationSchema().optional(),
        offsetRange: createRangeSchema().optional(),
      });

    return baseSchema;
  });
}
