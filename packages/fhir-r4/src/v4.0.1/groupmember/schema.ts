import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createReferenceSchema,
  createPeriodSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createGroupMemberSchema() {
  const baseSchema: z.ZodType<types.GroupMember> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    entity: z.lazy(() => createReferenceSchema()),
    period: z.lazy(() => createPeriodSchema()).optional(),
    inactive: primitives.createBooleanSchema().optional(),
    _inactive: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
