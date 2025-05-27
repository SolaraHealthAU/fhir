import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createReferenceSchema,
  createPeriodSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createPermissionJustificationSchema } from "../permissionjustification/schema";
import { createPermissionRuleSchema } from "../permissionrule/schema";

/* Generated from FHIR JSON Schema */

export function createPermissionSchema() {
  const baseSchema: z.ZodType<types.Permission> = z.object({
    resourceType: z.literal("Permission"),
    id: primitives.createIdSchema().optional(),
    meta: z.lazy(() => createMetaSchema()).optional(),
    implicitRules: primitives.createUriSchema().optional(),
    _implicitRules: z.lazy(() => createElementSchema()).optional(),
    language: primitives.createCodeSchema().optional(),
    _language: z.lazy(() => createElementSchema()).optional(),
    text: z.lazy(() => createNarrativeSchema()).optional(),
    contained: z.array(z.lazy(() => createResourceListSchema())).optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    asserter: z.lazy(() => createReferenceSchema()).optional(),
    date: z.array(primitives.createDateTimeSchema()).optional(),
    _date: z.array(z.lazy(() => createElementSchema())).optional(),
    validity: z.lazy(() => createPeriodSchema()).optional(),
    justification: z
      .lazy(() => createPermissionJustificationSchema())
      .optional(),
    combining: primitives.createCodeSchema().optional(),
    _combining: z.lazy(() => createElementSchema()).optional(),
    rule: z.array(z.lazy(() => createPermissionRuleSchema())).optional(),
  });

  return baseSchema;
}
