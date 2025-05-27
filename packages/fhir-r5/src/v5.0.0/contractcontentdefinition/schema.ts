import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createContractContentDefinitionSchema() {
  const baseSchema: z.ZodType<types.ContractContentDefinition> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.lazy(() => createCodeableConceptSchema()),
    subType: z.lazy(() => createCodeableConceptSchema()).optional(),
    publisher: z.lazy(() => createReferenceSchema()).optional(),
    publicationDate: primitives.createDateTimeSchema().optional(),
    _publicationDate: z.lazy(() => createElementSchema()).optional(),
    publicationStatus: primitives.createCodeSchema().optional(),
    _publicationStatus: z.lazy(() => createElementSchema()).optional(),
    copyright: primitives.createMarkdownSchema().optional(),
    _copyright: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
