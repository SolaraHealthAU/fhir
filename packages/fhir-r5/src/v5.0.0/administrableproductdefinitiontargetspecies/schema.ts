import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createAdministrableProductDefinitionWithdrawalPeriodSchema } from "../administrableproductdefinitionwithdrawalperiod/schema";

/* Generated from FHIR JSON Schema */

export function createAdministrableProductDefinitionTargetSpeciesSchema() {
  const baseSchema: z.ZodType<types.AdministrableProductDefinitionTargetSpecies> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      code: z.lazy(() => createCodeableConceptSchema()),
      withdrawalPeriod: z
        .array(
          z.lazy(() =>
            createAdministrableProductDefinitionWithdrawalPeriodSchema(),
          ),
        )
        .optional(),
    });

  return baseSchema;
}
