import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTestReportParticipantSchema() {
  return getCachedSchema("TestReportParticipant", () => {
    const baseSchema: z.ZodType<types.TestReportParticipant> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: z.enum(["test-engine", "client", "server"]),
      _type: z.lazy(() => createElementSchema()).optional(),
      uri: primitives.getUriSchema(),
      _uri: z.lazy(() => createElementSchema()).optional(),
      display: primitives.getStringSchema().optional(),
      _display: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
