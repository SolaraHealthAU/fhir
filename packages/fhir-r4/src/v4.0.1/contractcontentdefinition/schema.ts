import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createContractContentDefinitionSchema() {
  return getCachedSchema("ContractContentDefinition", () => {
    const baseSchema: z.ZodType<types.ContractContentDefinition> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        type: createCodeableConceptSchema(),
        subType: createCodeableConceptSchema().optional(),
        publisher: createReferenceSchema().optional(),
        publicationDate: primitives.getDateTimeSchema().optional(),
        _publicationDate: z.lazy(() => createElementSchema()).optional(),
        publicationStatus: primitives.getCodeSchema(),
        _publicationStatus: z.lazy(() => createElementSchema()).optional(),
        copyright: primitives.getMarkdownSchema().optional(),
        _copyright: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
