// Primitives schema header file

import { z } from "zod";

export function createBase64BinarySchema(): Base64BinarySchema {
  return z.string().base64();
}

export type Base64BinarySchema = z.ZodString;

export function createBooleanSchema(): BooleanSchema {
  return z.boolean();
}

export type BooleanSchema = z.ZodBoolean;

export function createCanonicalSchema(): CanonicalSchema {
  return z.string();
}

export type CanonicalSchema = z.ZodString;

export function createCodeSchema(): CodeSchema {
  return z.string().regex(/^[^\s]+(\s[^\s]+)*$/);
}

export type CodeSchema = z.ZodString;

export function createDateSchema(): DateSchema {
  return z
    .string()
    .regex(
      /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?$/
    );
}

export type DateSchema = z.ZodString;

export function createDateTimeSchema(): DateTimeSchema {
  return z
    .string()
    .regex(
      /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?$/
    );
}

export type DateTimeSchema = z.ZodString;

export function createDecimalSchema(): DecimalSchema {
  return z.number();
}

export type DecimalSchema = z.ZodNumber;

export function createIdSchema(): IdSchema {
  return z.string().regex(/^[A-Za-z0-9\-.]{1,64}$/);
}

export type IdSchema = z.ZodString;

export function createInstantSchema(): InstantSchema {
  return z
    .string()
    .regex(
      /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))$/
    );
}

export type InstantSchema = z.ZodString;

export function createIntegerSchema(): IntegerSchema {
  return z.number().int();
}

export type IntegerSchema = z.ZodNumber;

export function createMarkdownSchema(): MarkdownSchema {
  return z.string();
}

export type MarkdownSchema = z.ZodString;

export function createOidSchema(): OidSchema {
  return z.string().regex(/^urn:oid:[0-2](\.(0|[1-9][0-9]*))+$/);
}

export type OidSchema = z.ZodString;

export function createPositiveIntSchema(): PositiveIntSchema {
  return z.number().int().positive();
}

export type PositiveIntSchema = z.ZodNumber;

export function createStringSchema(): StringSchema {
  return z.string();
}

export type StringSchema = z.ZodString;

export function createTimeSchema(): TimeSchema {
  return z
    .string()
    .regex(/^([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?$/);
}

export type TimeSchema = z.ZodString;

export function createUnsignedIntSchema(): UnsignedIntSchema {
  return z.number().int().min(0);
}

export type UnsignedIntSchema = z.ZodNumber;

export function createUriSchema(): UriSchema {
  return z.string().regex(/^\S*$/);
}

export type UriSchema = z.ZodString;

export function createUrlSchema(): UrlSchema {
  return z.string().url();
}

export type UrlSchema = z.ZodString;

export function createUuidSchema(): UuidSchema {
  return z.string().regex(/^urn:uuid:.+$/);
}

export type UuidSchema = z.ZodString;

export function createXhtmlSchema(): XhtmlSchema {
  return z.string();
}

export type XhtmlSchema = z.ZodString;
