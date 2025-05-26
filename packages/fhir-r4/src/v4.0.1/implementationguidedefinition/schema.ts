import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema } from "../core/schema";
import { createImplementationGuideGroupingSchema } from "../implementationguidegrouping/schema";
import { createImplementationGuideResourceSchema } from "../implementationguideresource/schema";
import { createImplementationGuidePageSchema } from "../implementationguidepage/schema";
import { createImplementationGuideParameterSchema } from "../implementationguideparameter/schema";
import { createImplementationGuideTemplateSchema } from "../implementationguidetemplate/schema";

/* Generated from FHIR JSON Schema */

export function createImplementationGuideDefinitionSchema() {
  const baseSchema: z.ZodType<types.ImplementationGuideDefinition> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    grouping: z
      .array(z.lazy(() => createImplementationGuideGroupingSchema()))
      .optional(),
    resource: z.array(z.lazy(() => createImplementationGuideResourceSchema())),
    page: z.lazy(() => createImplementationGuidePageSchema()).optional(),
    parameter: z
      .array(z.lazy(() => createImplementationGuideParameterSchema()))
      .optional(),
    template: z
      .array(z.lazy(() => createImplementationGuideTemplateSchema()))
      .optional(),
  });

  return baseSchema;
}
