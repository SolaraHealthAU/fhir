import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTestScriptAssertSchema() {
  return getCachedSchema("TestScriptAssert", () => {
    const baseSchema: z.ZodType<types.TestScriptAssert> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      label: primitives.getStringSchema().optional(),
      _label: z.lazy(() => createElementSchema()).optional(),
      description: primitives.getStringSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      direction: z.enum(["response", "request"]).optional(),
      _direction: z.lazy(() => createElementSchema()).optional(),
      compareToSourceId: primitives.getStringSchema().optional(),
      _compareToSourceId: z.lazy(() => createElementSchema()).optional(),
      compareToSourceExpression: primitives.getStringSchema().optional(),
      _compareToSourceExpression: z
        .lazy(() => createElementSchema())
        .optional(),
      compareToSourcePath: primitives.getStringSchema().optional(),
      _compareToSourcePath: z.lazy(() => createElementSchema()).optional(),
      contentType: primitives.getCodeSchema().optional(),
      _contentType: z.lazy(() => createElementSchema()).optional(),
      expression: primitives.getStringSchema().optional(),
      _expression: z.lazy(() => createElementSchema()).optional(),
      headerField: primitives.getStringSchema().optional(),
      _headerField: z.lazy(() => createElementSchema()).optional(),
      minimumId: primitives.getStringSchema().optional(),
      _minimumId: z.lazy(() => createElementSchema()).optional(),
      navigationLinks: primitives.getBooleanSchema().optional(),
      _navigationLinks: z.lazy(() => createElementSchema()).optional(),
      operator: z
        .enum([
          "equals",
          "notEquals",
          "in",
          "notIn",
          "greaterThan",
          "lessThan",
          "empty",
          "notEmpty",
          "contains",
          "notContains",
          "eval",
        ])
        .optional(),
      _operator: z.lazy(() => createElementSchema()).optional(),
      path: primitives.getStringSchema().optional(),
      _path: z.lazy(() => createElementSchema()).optional(),
      requestMethod: z
        .enum(["delete", "get", "options", "patch", "post", "put", "head"])
        .optional(),
      _requestMethod: z.lazy(() => createElementSchema()).optional(),
      requestURL: primitives.getStringSchema().optional(),
      _requestURL: z.lazy(() => createElementSchema()).optional(),
      resource: primitives.getCodeSchema().optional(),
      _resource: z.lazy(() => createElementSchema()).optional(),
      response: z
        .enum([
          "okay",
          "created",
          "noContent",
          "notModified",
          "bad",
          "forbidden",
          "notFound",
          "methodNotAllowed",
          "conflict",
          "gone",
          "preconditionFailed",
          "unprocessable",
        ])
        .optional(),
      _response: z.lazy(() => createElementSchema()).optional(),
      responseCode: primitives.getStringSchema().optional(),
      _responseCode: z.lazy(() => createElementSchema()).optional(),
      sourceId: primitives.getIdSchema().optional(),
      _sourceId: z.lazy(() => createElementSchema()).optional(),
      validateProfileId: primitives.getIdSchema().optional(),
      _validateProfileId: z.lazy(() => createElementSchema()).optional(),
      value: primitives.getStringSchema().optional(),
      _value: z.lazy(() => createElementSchema()).optional(),
      warningOnly: primitives.getBooleanSchema().optional(),
      _warningOnly: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
