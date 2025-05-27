import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMessageHeaderDestinationSchema() {
  return getCachedSchema("MessageHeaderDestination", () => {
    const baseSchema: z.ZodType<types.MessageHeaderDestination> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        name: primitives.getStringSchema().optional(),
        _name: z.lazy(() => createElementSchema()).optional(),
        target: createReferenceSchema().optional(),
        endpoint: primitives.getUrlSchema(),
        _endpoint: z.lazy(() => createElementSchema()).optional(),
        receiver: createReferenceSchema().optional(),
      });

    return baseSchema;
  });
}
