import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodingSchema,
  createPeriodSchema,
  createExpressionSchema,
} from "../core/schema";
import { createPermissionResourceSchema } from "../permissionresource/schema";

/* Generated from FHIR JSON Schema */

export function createPermissionDataSchema() {
  const baseSchema: z.ZodType<types.PermissionData> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    resource: z
      .array(z.lazy(() => createPermissionResourceSchema()))
      .optional(),
    security: z.array(z.lazy(() => createCodingSchema())).optional(),
    period: z.array(z.lazy(() => createPeriodSchema())).optional(),
    expression: z.lazy(() => createExpressionSchema()).optional(),
  });

  return baseSchema;
}
