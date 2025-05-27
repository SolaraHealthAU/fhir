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
import { createMedicinalProductPharmaceuticalCharacteristicsSchema } from "../medicinalproductpharmaceuticalcharacteristics/schema";
import { createMedicinalProductPharmaceuticalRouteOfAdministrationSchema } from "../medicinalproductpharmaceuticalrouteofadministration/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductPharmaceuticalSchema() {
  const baseSchema: z.ZodType<types.MedicinalProductPharmaceutical> = z.object({
    resourceType: z.literal("MedicinalProductPharmaceutical"),
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
    administrableDoseForm: z.lazy(() => createCodeableConceptSchema()),
    unitOfPresentation: z.lazy(() => createCodeableConceptSchema()).optional(),
    ingredient: z.array(z.lazy(() => createReferenceSchema())).optional(),
    device: z.array(z.lazy(() => createReferenceSchema())).optional(),
    characteristics: z
      .array(
        z.lazy(() =>
          createMedicinalProductPharmaceuticalCharacteristicsSchema(),
        ),
      )
      .optional(),
    routeOfAdministration: z.array(
      z.lazy(() =>
        createMedicinalProductPharmaceuticalRouteOfAdministrationSchema(),
      ),
    ),
  });

  return baseSchema;
}
