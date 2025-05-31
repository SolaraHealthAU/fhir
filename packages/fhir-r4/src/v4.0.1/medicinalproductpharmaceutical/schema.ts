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
import { createMedicinalProductPharmaceuticalCharacteristicsSchema } from "../medicinalproductpharmaceuticalcharacteristics/schema";
import { createMedicinalProductPharmaceuticalRouteOfAdministrationSchema } from "../medicinalproductpharmaceuticalrouteofadministration/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductPharmaceuticalSchema() {
  return getCachedSchema("MedicinalProductPharmaceutical", () => {
    const baseSchema: z.ZodType<types.MedicinalProductPharmaceutical> =
      z.strictObject({
        resourceType: z.literal("MedicinalProductPharmaceutical"),
        id: primitives.getIdSchema().optional(),
        meta: createMetaSchema().optional(),
        implicitRules: primitives.getUriSchema().optional(),
        _implicitRules: createElementSchema().optional(),
        language: primitives.getCodeSchema().optional(),
        _language: createElementSchema().optional(),
        text: createNarrativeSchema().optional(),
        contained: z.array(createResourceListSchema()).optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        identifier: z.array(createIdentifierSchema()).optional(),
        administrableDoseForm: createCodeableConceptSchema(),
        unitOfPresentation: createCodeableConceptSchema().optional(),
        ingredient: z.array(createReferenceSchema()).optional(),
        device: z.array(createReferenceSchema()).optional(),
        characteristics: z
          .array(createMedicinalProductPharmaceuticalCharacteristicsSchema())
          .optional(),
        routeOfAdministration: z.array(
          createMedicinalProductPharmaceuticalRouteOfAdministrationSchema(),
        ),
      });

    return baseSchema;
  });
}
