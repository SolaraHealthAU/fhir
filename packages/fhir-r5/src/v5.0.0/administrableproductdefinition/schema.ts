import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createAdministrableProductDefinitionPropertySchema } from "../administrableproductdefinitionproperty/schema";
import { createAdministrableProductDefinitionRouteOfAdministrationSchema } from "../administrableproductdefinitionrouteofadministration/schema";

/* Generated from FHIR JSON Schema */

export function createAdministrableProductDefinitionSchema() {
  const baseSchema: z.ZodType<types.AdministrableProductDefinition> = z.object({
    resourceType: z.literal("AdministrableProductDefinition"),
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
    formOf: z.array(z.lazy(() => createReferenceSchema())).optional(),
    administrableDoseForm: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    unitOfPresentation: z.lazy(() => createCodeableConceptSchema()).optional(),
    producedFrom: z.array(z.lazy(() => createReferenceSchema())).optional(),
    ingredient: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    device: z.lazy(() => createReferenceSchema()).optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    property: z
      .array(z.lazy(() => createAdministrableProductDefinitionPropertySchema()))
      .optional(),
    routeOfAdministration: z.array(
      z.lazy(() =>
        createAdministrableProductDefinitionRouteOfAdministrationSchema(),
      ),
    ),
  });

  return baseSchema;
}
