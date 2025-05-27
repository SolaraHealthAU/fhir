import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createReferenceSchema,
  createPeriodSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createGroupMemberSchema() {
  return getCachedSchema("GroupMember", () => {
    const baseSchema: z.ZodType<types.GroupMember> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      entity: createReferenceSchema(),
      period: createPeriodSchema().optional(),
      inactive: primitives.getBooleanSchema().optional(),
      _inactive: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
