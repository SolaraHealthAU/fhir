import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createEvidenceVariableCharacteristicSchema } from "../evidencevariablecharacteristic/schema";

/* Generated from FHIR JSON Schema */

export function createEvidenceVariableDefinitionByCombinationSchema() {
  const baseSchema: z.ZodType<types.EvidenceVariableDefinitionByCombination> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      code: primitives.createCodeSchema().optional(),
      _code: z.lazy(() => createElementSchema()).optional(),
      threshold: primitives.createPositiveIntSchema().optional(),
      _threshold: z.lazy(() => createElementSchema()).optional(),
      characteristic: z.array(
        z.lazy(() => createEvidenceVariableCharacteristicSchema()),
      ),
    });

  return baseSchema;
}
