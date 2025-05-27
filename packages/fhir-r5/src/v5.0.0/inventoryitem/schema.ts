import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createReferenceSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createInventoryItemNameSchema } from "../inventoryitemname/schema";
import { createInventoryItemResponsibleOrganizationSchema } from "../inventoryitemresponsibleorganization/schema";
import { createInventoryItemDescriptionSchema } from "../inventoryitemdescription/schema";
import { createInventoryItemAssociationSchema } from "../inventoryitemassociation/schema";
import { createInventoryItemCharacteristicSchema } from "../inventoryitemcharacteristic/schema";
import { createInventoryItemInstanceSchema } from "../inventoryiteminstance/schema";

/* Generated from FHIR JSON Schema */

export function createInventoryItemSchema() {
  const baseSchema: z.ZodType<types.InventoryItem> = z.object({
    resourceType: z.literal("InventoryItem"),
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
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    category: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    code: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    name: z.array(z.lazy(() => createInventoryItemNameSchema())).optional(),
    responsibleOrganization: z
      .array(z.lazy(() => createInventoryItemResponsibleOrganizationSchema()))
      .optional(),
    description: z
      .lazy(() => createInventoryItemDescriptionSchema())
      .optional(),
    inventoryStatus: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    baseUnit: z.lazy(() => createCodeableConceptSchema()).optional(),
    netContent: z.lazy(() => createQuantitySchema()).optional(),
    association: z
      .array(z.lazy(() => createInventoryItemAssociationSchema()))
      .optional(),
    characteristic: z
      .array(z.lazy(() => createInventoryItemCharacteristicSchema()))
      .optional(),
    instance: z.lazy(() => createInventoryItemInstanceSchema()).optional(),
    productReference: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
