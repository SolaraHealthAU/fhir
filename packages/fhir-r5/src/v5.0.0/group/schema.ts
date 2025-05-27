import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createGroupCharacteristicSchema } from "../groupcharacteristic/schema";
import { createGroupMemberSchema } from "../groupmember/schema";

/* Generated from FHIR JSON Schema */

export function createGroupSchema() {
  const baseSchema: z.ZodType<types.Group> = z.object({
    resourceType: z.literal("Group"),
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
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    active: primitives.createBooleanSchema().optional(),
    _active: z.lazy(() => createElementSchema()).optional(),
    type: primitives.createCodeSchema().optional(),
    _type: z.lazy(() => createElementSchema()).optional(),
    membership: primitives.createCodeSchema().optional(),
    _membership: z.lazy(() => createElementSchema()).optional(),
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    quantity: primitives.createUnsignedIntSchema().optional(),
    _quantity: z.lazy(() => createElementSchema()).optional(),
    managingEntity: z.lazy(() => createReferenceSchema()).optional(),
    characteristic: z
      .array(z.lazy(() => createGroupCharacteristicSchema()))
      .optional(),
    member: z.array(z.lazy(() => createGroupMemberSchema())).optional(),
  });

  return baseSchema;
}
