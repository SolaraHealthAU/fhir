import { z } from 'zod';

export interface JSONSchemaDraft06 {
  // Basic metadata
  $id?: string;
  $schema?: string;
  $ref?: string;
  $comment?: string;
  title?: string;
  description?: string;
  default?: unknown;
  readOnly?: boolean;
  examples?: unknown[];

  // Numeric validation
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: boolean;
  minimum?: number;
  exclusiveMinimum?: boolean;

  // String validation
  maxLength?: number;
  minLength?: number;
  pattern?: string;

  // Array validation
  items?: JSONSchemaDraft06 | JSONSchemaDraft06[];
  additionalItems?: boolean | JSONSchemaDraft06;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  contains?: JSONSchemaDraft06;

  // Object validation
  maxProperties?: number;
  minProperties?: number;
  required?: string[];
  additionalProperties?: boolean | JSONSchemaDraft06;
  definitions?: Record<string, JSONSchemaDraft06>;
  properties?: Record<string, JSONSchemaDraft06>;
  patternProperties?: Record<string, JSONSchemaDraft06>;
  dependencies?: Record<string, JSONSchemaDraft06 | string[]>;
  propertyNames?: JSONSchemaDraft06;

  // Enum, const, and type
  enum?: unknown[];
  const?: unknown;
  type?: string | string[];
  format?: string;

  // Logical operators
  allOf?: JSONSchemaDraft06[];
  anyOf?: JSONSchemaDraft06[];
  oneOf?: JSONSchemaDraft06[];
  not?: JSONSchemaDraft06;
}

export function createJsonSchemaDraft06Schema() {
  const baseSchema = z.object({
    // Basic metadata
    $id: z.string().optional(),
    $schema: z.string().optional(),
    $ref: z.string().optional(),
    $comment: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    default: z.unknown().optional(),
    readOnly: z.boolean().optional(),
    examples: z.array(z.unknown()).optional(),

    // Numeric validation
    multipleOf: z.number().positive().optional(),
    maximum: z.number().optional(),
    exclusiveMaximum: z.boolean().optional(),
    minimum: z.number().optional(),
    exclusiveMinimum: z.boolean().optional(),

    // String validation
    maxLength: z.number().int().min(0).optional(),
    minLength: z.number().int().min(0).optional(),
    pattern: z.string().optional(),

    // Array validation

    maxItems: z.number().int().min(0).optional(),
    minItems: z.number().int().min(0).optional(),
    uniqueItems: z.boolean().optional(),

    // Object validation
    maxProperties: z.number().int().min(0).optional(),
    minProperties: z.number().int().min(0).optional(),
    required: z.array(z.string()).optional(),

    // Enum, const, and type
    enum: z.array(z.unknown()).optional(),
    const: z.unknown().optional(),
    type: z.union([z.string(), z.array(z.string())]).optional(),
    format: z.string().optional(),

    // Logical operators
  });

  const finalSchema: z.ZodType<JSONSchemaDraft06> = baseSchema.extend({
    allOf: z.array(z.lazy(() => finalSchema)).optional(),
    anyOf: z.array(z.lazy(() => finalSchema)).optional(),
    oneOf: z.array(z.lazy(() => finalSchema)).optional(),
    not: z.lazy(() => finalSchema).optional(),
    additionalProperties: z.union([z.boolean(), z.lazy(() => finalSchema)]).optional(),
    definitions: z.record(z.lazy(() => finalSchema)).optional(),
    properties: z.record(z.lazy(() => finalSchema)).optional(),
    patternProperties: z.record(z.lazy(() => finalSchema)).optional(),
    dependencies: z.record(z.union([z.lazy(() => finalSchema), z.array(z.string())])).optional(),
    propertyNames: z.lazy(() => finalSchema).optional(),

    contains: z.lazy(() => finalSchema).optional(),
    items: z.union([z.lazy(() => finalSchema), z.array(z.lazy(() => finalSchema))]).optional(),
    additionalItems: z.union([z.boolean(), z.lazy(() => finalSchema)]).optional(),
  });

  return finalSchema;
}
