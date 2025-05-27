import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("Group", () => {
    const baseSchema: z.ZodType<types.Group> = z.strictObject({
      resourceType: z.literal("Group"),
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
      identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
      active: primitives.getBooleanSchema().optional(),
      _active: z.lazy(() => createElementSchema()).optional(),
      type: z.enum([
        "person",
        "animal",
        "practitioner",
        "device",
        "medication",
        "substance",
      ]),
      _type: z.lazy(() => createElementSchema()).optional(),
      actual: primitives.getBooleanSchema(),
      _actual: z.lazy(() => createElementSchema()).optional(),
      code: createCodeableConceptSchema().optional(),
      name: primitives.getStringSchema().optional(),
      _name: z.lazy(() => createElementSchema()).optional(),
      quantity: primitives.getUnsignedIntSchema().optional(),
      _quantity: z.lazy(() => createElementSchema()).optional(),
      managingEntity: createReferenceSchema().optional(),
      characteristic: z.array(createGroupCharacteristicSchema()).optional(),
      member: z.array(createGroupMemberSchema()).optional(),
    });

    return baseSchema;
  });
}
