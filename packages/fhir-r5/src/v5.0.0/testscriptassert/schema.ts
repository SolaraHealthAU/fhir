import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createTestScriptRequirementSchema } from "../testscriptrequirement/schema";

/* Generated from FHIR JSON Schema */

export function createTestScriptAssertSchema() {
  const baseSchema: z.ZodType<types.TestScriptAssert> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    label: primitives.createStringSchema().optional(),
    _label: z.lazy(() => createElementSchema()).optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    direction: primitives.createCodeSchema().optional(),
    _direction: z.lazy(() => createElementSchema()).optional(),
    compareToSourceId: primitives.createStringSchema().optional(),
    _compareToSourceId: z.lazy(() => createElementSchema()).optional(),
    compareToSourceExpression: primitives.createStringSchema().optional(),
    _compareToSourceExpression: z.lazy(() => createElementSchema()).optional(),
    compareToSourcePath: primitives.createStringSchema().optional(),
    _compareToSourcePath: z.lazy(() => createElementSchema()).optional(),
    contentType: primitives.createCodeSchema().optional(),
    _contentType: z.lazy(() => createElementSchema()).optional(),
    defaultManualCompletion: primitives.createCodeSchema().optional(),
    _defaultManualCompletion: z.lazy(() => createElementSchema()).optional(),
    expression: primitives.createStringSchema().optional(),
    _expression: z.lazy(() => createElementSchema()).optional(),
    headerField: primitives.createStringSchema().optional(),
    _headerField: z.lazy(() => createElementSchema()).optional(),
    minimumId: primitives.createStringSchema().optional(),
    _minimumId: z.lazy(() => createElementSchema()).optional(),
    navigationLinks: primitives.createBooleanSchema().optional(),
    _navigationLinks: z.lazy(() => createElementSchema()).optional(),
    operator: primitives.createCodeSchema().optional(),
    _operator: z.lazy(() => createElementSchema()).optional(),
    path: primitives.createStringSchema().optional(),
    _path: z.lazy(() => createElementSchema()).optional(),
    requestMethod: primitives.createCodeSchema().optional(),
    _requestMethod: z.lazy(() => createElementSchema()).optional(),
    requestURL: primitives.createStringSchema().optional(),
    _requestURL: z.lazy(() => createElementSchema()).optional(),
    resource: primitives.createUriSchema().optional(),
    _resource: z.lazy(() => createElementSchema()).optional(),
    response: primitives.createCodeSchema().optional(),
    _response: z.lazy(() => createElementSchema()).optional(),
    responseCode: primitives.createStringSchema().optional(),
    _responseCode: z.lazy(() => createElementSchema()).optional(),
    sourceId: primitives.createIdSchema().optional(),
    _sourceId: z.lazy(() => createElementSchema()).optional(),
    stopTestOnFail: primitives.createBooleanSchema().optional(),
    _stopTestOnFail: z.lazy(() => createElementSchema()).optional(),
    validateProfileId: primitives.createIdSchema().optional(),
    _validateProfileId: z.lazy(() => createElementSchema()).optional(),
    value: primitives.createStringSchema().optional(),
    _value: z.lazy(() => createElementSchema()).optional(),
    warningOnly: primitives.createBooleanSchema().optional(),
    _warningOnly: z.lazy(() => createElementSchema()).optional(),
    requirement: z
      .array(z.lazy(() => createTestScriptRequirementSchema()))
      .optional(),
  });

  return baseSchema;
}
