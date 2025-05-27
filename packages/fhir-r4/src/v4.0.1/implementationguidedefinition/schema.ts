import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema } from "../core/schema";
import { createImplementationGuideGroupingSchema } from "../implementationguidegrouping/schema";
import { createImplementationGuideResourceSchema } from "../implementationguideresource/schema";
import { createImplementationGuidePageSchema } from "../implementationguidepage/schema";
import { createImplementationGuideParameterSchema } from "../implementationguideparameter/schema";
import { createImplementationGuideTemplateSchema } from "../implementationguidetemplate/schema";

/* Generated from FHIR JSON Schema */

export function createImplementationGuideDefinitionSchema() {
  return getCachedSchema("ImplementationGuideDefinition", () => {
    const baseSchema: z.ZodType<types.ImplementationGuideDefinition> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        grouping: z.array(createImplementationGuideGroupingSchema()).optional(),
        resource: z.array(createImplementationGuideResourceSchema()),
        page: createImplementationGuidePageSchema().optional(),
        parameter: z
          .array(createImplementationGuideParameterSchema())
          .optional(),
        template: z.array(createImplementationGuideTemplateSchema()).optional(),
      });

    return baseSchema;
  });
}
