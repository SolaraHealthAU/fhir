import { z } from 'zod';
import type { CapabilityStatementSearchParam } from '@solarahealth/fhir-r4';

/**
 * Create a Zod schema for a FHIR "_sort" parameter.
 *
 * Supported forms:
 *  - `field`
 *  - `-field`
 */
export function createSortParameterSchema() {
  return z
    .string()
    .optional()
    .transform((sortParam) => {
      if (!sortParam) {
        return [];
      }
      return sortParam.split(',').map((fieldSpec) => {
        const trimmed = fieldSpec.trim();
        if (trimmed.startsWith('-')) {
          return { direction: 'desc', field: trimmed.substring(1) };
        } else {
          return { direction: 'asc', field: trimmed };
        }
      });
    });
}
export type SortParameter = z.infer<ReturnType<typeof createSortParameterSchema>>;

/**
 * Create a Zod schema for a FHIR "_count" parameter.
 *
 * Supported forms:
 *  - `count`
 */
export function createCountParameterSchema() {
  return z.preprocess((value) => {
    if (typeof value === 'string') {
      return parseInt(value, 10);
    }
  }, z.number().int().positive().optional());
}
export type CountParameter = z.infer<ReturnType<typeof createCountParameterSchema>>;

/**
 * Create a Zod schema for a FHIR "_id" parameter.
 *
 * Supported forms:
 *  - `id`
 */
export function createIdParameterSchema() {
  return z
    .union([z.string().array(), z.string()])
    .optional()
    .transform((val) => {
      if (val === undefined) {
        return undefined;
      }
      return (() => {
        if (typeof val === 'string') {
          return [val];
        }
        return val;
      })().filter((t) => t.trim() !== '');
    });
}
export type IdParameter = z.infer<ReturnType<typeof createIdParameterSchema>>;

/**
 * Preprocess the values of a parameter to ensure they are an array of strings,
 * and each string is a comma-separated list of values.
 * @param val The value to preprocess.
 * @returns An array of arrays of strings, ready for the codec to pass the field values
 */
export const preprocessValues = (val: string | string[]) => {
  if (typeof val === 'string') {
    // single occurrence → wrap in outer array, split on commas
    return [val.split(',').map((s) => s.trim())];
  }
  if (Array.isArray(val)) {
    // multiple occurrences → for each, split on commas
    return val.map((item) => item.split(',').map((s) => s.trim()));
  }
  // missing or unexpected type → empty array
  return [];
};

const numberOps = ['lt', 'le', 'gt', 'ge', 'ne'] as const;
type NumberOp = (typeof numberOps)[number] | 'eq';

export type NumberParameterValue = {
  direction: NumberOp;
  value: number;
  significantFigures: number;
};

/**
 * Create a Zod schema for a FHIR "number" parameter.
 *
 * Supported forms:
 *  - `number`
 */
export function createNumberValueSchema() {
  return z
    .string()
    .regex(new RegExp(`^(?:${numberOps.join('|')})?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?$`, 'i'), {
      message: 'Invalid comparison+number format',
    })
    .transform((raw): NumberParameterValue => {
      // 1) extract prefix if any
      const opMatch = raw.match(/^(lt|le|gt|ge|ne)/i);
      const direction = opMatch ? (opMatch[1].toLowerCase() as NumberOp) : 'eq';

      // 2) strip prefix, split off exponent
      const numStr = opMatch ? raw.slice(opMatch[1].length) : raw;
      const [mantissaPart] = numStr.split(/e/i);

      // 3) parse value normally
      const value = parseFloat(numStr);

      // 4) count significant figures:
      //    - remove the decimal point
      //    - strip leading zeros (they don't count)
      const digits = mantissaPart.replace('.', '').replace(/^0+/, '');
      const significantFigures = digits.length;

      return { direction, value, significantFigures };
    });
}

/**
 * A number parameter schema.
 *
 * @example
 * ```
 * const schema = createNumberParameterSchema();
 * const result = schema.parse('123');
 * console.log(result); // { direction: 'eq', value: 123, significantFigures: 3 }
 * ```
 */
export function createNumberParameterSchema() {
  return z.preprocess((val: unknown) => {
    if (typeof val === 'string' || Array.isArray(val)) {
      return preprocessValues(val);
    }
    return [];
  }, createNumberValueSchema().array().array());
}
export type NumberParameter = z.infer<ReturnType<typeof createNumberParameterSchema>>;

const dateOps = ['eq', 'ne', 'lt', 'gt', 'ge', 'le', 'sa', 'eb', 'ap'] as const;
export type DateOp = (typeof dateOps)[number];

export type DateParameterValue = { prefix: DateOp; date: Date; raw: string };

export function createDateValueSchema() {
  const DATE_PARAM_RE = new RegExp(
    `^(?:${dateOps.join('|')})?` +
      `\\d{4}-\\d{2}-\\d{2}` +
      `(?:T\\d{2}:\\d{2}(?::\\d{2})?(?:Z|[+\\-]\\d{2}:\\d{2})?)?$`,
    'i',
  );

  return z
    .string()
    .regex(DATE_PARAM_RE, { message: 'Invalid FHIR date parameter' })
    .transform((raw): DateParameterValue => {
      // 1) pull off the prefix (if any)
      const match = raw.match(/^(eq|ne|lt|gt|ge|le|sa|eb|ap)?(.+)$/i)!;
      const prefix = (match[1]?.toLowerCase() as DateOp) ?? 'eq';
      const datePortion = match[2];

      // 2) parse into a JS Date
      const date = new Date(datePortion);
      if (isNaN(date.getTime())) {
        throw new Error(`Unable to parse date "${datePortion}"`);
      }

      return { prefix, date, raw: datePortion };
    });
}

/**
 * A date parameter schema.
 *
 * @example
 * ```
 * const schema = createDateParameterSchema();
 * const result = schema.parse('2020-01-01');
 * console.log(result); // { prefix: 'eq', date: new Date('2020-01-01'), raw: '2020-01-01' }
 * ```
 */
export function createDateParameterSchema() {
  return z.preprocess((val: unknown) => {
    if (typeof val === 'string' || Array.isArray(val)) {
      return preprocessValues(val);
    }
  }, createDateValueSchema().array().array());
}
export type DateParameter = z.infer<ReturnType<typeof createDateParameterSchema>>;

/**
 * The result of parsing a token parameter.
 */
export type TokenParameterValue = {
  /** The "system" (URI) portion, if provided */
  codingOrIdentifierSystem?: string;
  /** The "code" or identifier value portion, if provided */
  codingCodeOrIdentifierValue?: string;
};

export function createTokenValueSchema() {
  return (
    z
      .string()
      // allow an optional system before '|', and an optional code after
      .regex(/^([^|]*)(\|([^|]*))?$/, { message: 'Invalid token parameter format' })
      // ensure at least one of system or code is non-empty
      .refine(
        (raw) => {
          const idx = raw.indexOf('|');
          if (idx === -1) {
            return raw.trim().length > 0;
          }
          const system = raw.slice(0, idx).trim();
          const code = raw.slice(idx + 1).trim();
          return !!(system || code);
        },
        { message: 'Must provide at least a system or a code' },
      )
      .transform((raw): TokenParameterValue => {
        const str = raw.trim();
        const idx = str.indexOf('|');

        // no '|' → entire string is the code/value
        if (idx === -1) {
          return { codingCodeOrIdentifierValue: str };
        }

        // split into [ system, code ]
        const systemPart = str.slice(0, idx).trim() || undefined;
        const codePart = str.slice(idx + 1).trim() || undefined;

        return {
          codingOrIdentifierSystem: systemPart,
          codingCodeOrIdentifierValue: codePart,
        };
      })
  );
}

/**
 * Create a Zod schema for a FHIR "token" parameter.
 *
 * Supported forms:
 *  - `code`
 *  - `system|code`
 *  - `|code`       (no system)
 *  - `system|`     (no code)
 */
export function createTokenParameterSchema() {
  return z.preprocess((val: unknown) => {
    if (typeof val === 'string' || Array.isArray(val)) {
      return preprocessValues(val);
    }
  }, createTokenValueSchema().array().array());
}
export type TokenParameter = z.infer<ReturnType<typeof createTokenParameterSchema>>;

/**
 * The result of parsing a reference parameter.
 */
export type ReferenceParameterValue =
  | { id: string; type?: undefined }
  | { id: string; type: string }
  | { url: string };

export function createReferenceValueSchema() {
  return z
    .string()
    .refine(
      (raw) => {
        const s = raw.trim();
        // absolute URL?
        if (/[A-Za-z][A-Za-z0-9+.-]*:\/\/\S+/.test(s)) return true;
        // no slash → simple id
        if (!s.includes('/')) return s.length > 0;
        // exactly one slash → Type/id
        const parts = s.split('/');
        return parts.length === 2 && parts[0].length > 0 && parts[1].length > 0;
      },
      { message: 'Invalid reference parameter format' },
    )
    .transform((raw): ReferenceParameterValue => {
      const s = raw.trim();
      // URL case
      if (/[A-Za-z][A-Za-z0-9+.-]*:\/\/\S+/.test(s)) {
        return { url: s };
      }
      // Type/id case
      if (s.includes('/')) {
        const [type, id] = s.split('/');
        return { type, id };
      }
      // id-only case
      return { id: s };
    });
}

/**
 * Create a Zod schema for a FHIR "reference" parameter.
 *
 * Supported forms:
 *  - `id`
 *  - `Type/id`
 *  - absolute URL (contains `://`)
 */
export function createReferenceParameterSchema() {
  return z.preprocess(
    (val: unknown) => {
      if (typeof val === 'string' || Array.isArray(val)) {
        return preprocessValues(val);
      }
      return [];
    },
    z.array(z.array(createReferenceValueSchema())),
  );
}
export type ReferenceParameter = z.infer<ReturnType<typeof createReferenceParameterSchema>>;

const quantityOps = ['lt', 'le', 'gt', 'ge', 'ne', 'sa', 'eb', 'ap'] as const;
type QuantityOp = (typeof quantityOps)[number] | 'eq';

export type QuantityParameterValue = {
  prefix: QuantityOp;
  value: number;
  significantFigures: number;
  system?: string;
  code?: string;
};

export function createQuantityValueSchema() {
  return z
    .string()
    .regex(
      new RegExp(
        `^(?:${quantityOps.join('|')})?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?` +
          `(?:\\|[^|]*)?(?:\\|[^|]*)?$`,
        'i',
      ),
      { message: 'Invalid quantity parameter format' },
    )
    .transform((raw): QuantityParameterValue => {
      const str = raw.trim();
      const parts = str.split('|');
      const prefixNum = parts[0];
      const systemPart = parts[1]?.trim() || undefined;
      const codePart = parts[2]?.trim() || undefined;

      // 1) extract prefix if any
      const opMatch = prefixNum.match(/^(lt|le|gt|ge|ne|sa|eb|ap)/i);
      const prefix = opMatch ? (opMatch[1].toLowerCase() as QuantityOp) : 'eq';

      // 2) strip prefix, split off exponent
      const numStr = opMatch ? prefixNum.slice(opMatch[1].length) : prefixNum;
      const [mantissaPart] = numStr.split(/e/i);

      // 3) parse value
      const value = parseFloat(numStr);

      // 4) count significant figures
      const digits = mantissaPart.replace('.', '').replace(/^0+/, '');
      const significantFigures = digits.length;

      return {
        prefix,
        value,
        significantFigures,
        system: systemPart,
        code: codePart,
      };
    });
}

/**
 * Create a Zod schema for a FHIR "quantity" parameter.
 *
 * Syntax: [prefix][number]|[system]|[code]
 */
export function createQuantityParameterSchema() {
  return z.preprocess(
    (val: unknown) => {
      if (typeof val === 'string' || Array.isArray(val)) {
        return preprocessValues(val);
      }
      return [];
    },
    z.array(z.array(createQuantityValueSchema())),
  );
}
export type QuantityParameter = z.infer<ReturnType<typeof createQuantityParameterSchema>>;

const stringOps = ['contains', 'exact'] as const;
type StringOp = (typeof stringOps)[number] | 'startsWith';

const uriOps = ['above', 'below'] as const;
type UriOp = (typeof uriOps)[number] | 'eq';

/** codec for a *single* "string" value (with modifier baked in) */
function createStringValueSchema(op: StringOp) {
  return z.string().transform((v) => ({ op, value: v }));
}
export type StringParameterValue = { op: StringOp; value: string };

/** codec for a *single* "uri" value (with modifier baked in) */
function createUriValueSchema(op: UriOp) {
  return z.string().transform((v) => ({ op, value: v }));
}
export type UriParameterValue = { op: UriOp; value: string };

/**  Wrap a *single-value* codec into the double-array shape T[][]   */
export function wrapAsMatrix<S extends z.ZodTypeAny>(single: S) {
  return z.preprocess(
    (val) => (typeof val === 'string' || Array.isArray(val) ? preprocessValues(val) : []),
    z.array(z.array(single)),
  );
}

/**
 * Factory: given the array the server advertised in its CapabilityStatement,
 * build one Zod schema that parses/validates the *whole* query-string object.
 */
function createBaseSearchParametersSchema(
  params: ReadonlyArray<CapabilityStatementSearchParam>,
): z.ZodType<Record<string, unknown>> {
  // Build a map <param-name-with-modifier, codec>
  // Using z.ZodType<unknown> for better type safety than <any>
  const codecMap: Record<string, z.ZodType<unknown>> = {};

  const specialValues = ['_count', '_sort', '_id'];

  for (const sp of params) {
    if (sp.name == null || specialValues.includes(sp.name)) {
      continue;
    }
    switch (sp.type) {
      case 'number':
        codecMap[sp.name] = createNumberParameterSchema();
        break;
      case 'date':
        codecMap[sp.name] = createDateParameterSchema();
        break;
      case 'token':
        codecMap[sp.name] = createTokenParameterSchema();
        break;
      case 'reference':
        codecMap[sp.name] = createReferenceParameterSchema();
        break;
      case 'quantity':
        codecMap[sp.name] = createQuantityParameterSchema();
        break;
      case 'string':
        // Add entries for the base name and each modifier
        codecMap[sp.name] = wrapAsMatrix(createStringValueSchema('startsWith'));
        codecMap[`${sp.name}:contains`] = wrapAsMatrix(createStringValueSchema('contains'));
        codecMap[`${sp.name}:exact`] = wrapAsMatrix(createStringValueSchema('exact'));
        break;
      case 'uri':
        // Add entries for the base name and each modifier
        codecMap[sp.name] = wrapAsMatrix(createUriValueSchema('eq'));
        codecMap[`${sp.name}:above`] = wrapAsMatrix(createUriValueSchema('above'));
        codecMap[`${sp.name}:below`] = wrapAsMatrix(createUriValueSchema('below'));
        break;
      default:
        // "special" or any unknown type – accept raw strings but keep shape T[][]
        codecMap[sp.name] = wrapAsMatrix(z.string());
        break;
    }
  }

  // Add special-case codecs for the three special parameters
  for (const sp of params) {
    switch (sp.name) {
      case '_count':
        codecMap[sp.name] = createCountParameterSchema();
        break;
      case '_sort':
        codecMap[sp.name] = createSortParameterSchema();
        break;
      case '_id':
        codecMap[sp.name] = createIdParameterSchema();
        break;
      default:
        break;
    }
  }
  return z.record(z.union([z.string(), z.array(z.string())])).transform((raw, ctx) => {
    const out: Record<string, unknown> = {};

    for (const [rawKey, rawVal] of Object.entries(raw)) {
      // ── 1) find codec by *exact* key (incl. modifier) ──────────────────────
      const codec = codecMap[rawKey];
      if (!codec) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: [rawKey],
          message: `Parameter or modifier "${rawKey}" is not supported`,
        });
        continue;
      }

      // ── 2) run the codec ───────────────────────────────────────────────────
      const parsed = codec.safeParse(rawVal);
      if (!parsed.success) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: [rawKey],
          message: parsed.error.errors.map((e) => e.message).join('; '),
        });
        continue;
      }

      // ── 3) store under the *base* name (collapse modifiers) ────────────────
      const [base] = rawKey.split(':', 1);
      const data = parsed.data as unknown[][]; // always T[][]

      if (out[base]) {
        // append additional AND-groups from another occurrence
        (out[base] as unknown[][]).push(...data);
      } else {
        out[base] = data;
      }
    }

    return out;
  });
}

/* ———————————————————————————————————————————————————————————————
   Catch-all for types we haven't built a dedicated codec for yet
———————————————————————————————————————————————————————————————*/
export type SpecialParameterValue = unknown;

export type CodecOutput<T extends string | undefined> =
  /* FHIR standard search-types */
  T extends 'number'
    ? NumberParameterValue[][]
    : T extends 'date'
      ? DateParameterValue[][]
      : T extends 'token'
        ? TokenParameterValue[][]
        : T extends 'reference'
          ? ReferenceParameterValue[][]
          : T extends 'quantity'
            ? QuantityParameterValue[][]
            : T extends 'string'
              ? StringParameterValue[][]
              : T extends 'uri'
                ? UriParameterValue[][]
                : /* anything else (e.g. "special") */
                  SpecialParameterValue[][];

/** generic "column" helpers */
type GetName<T> = T extends { name: infer N } ? N : never;
type GetType<T> = T extends { type: infer U } ? U : never;

/** Given the CapabilityStatement array, derive the *output* object type */
export type ParamsToShape<Arr extends readonly CapabilityStatementSearchParam[]> = {
  [P in Arr[number] as Extract<GetName<P>, string>]?:
    | (Extract<GetName<P>, string> extends '_id' // name-based override for the three specials
        ? IdParameter
        : Extract<GetName<P>, string> extends '_sort'
          ? SortParameter
          : Extract<GetName<P>, string> extends '_count'
            ? CountParameter
            : CodecOutput<Extract<GetType<P>, string>>)
    | undefined;
};

type SupportedType = 'number' | 'date' | 'token' | 'reference' | 'quantity' | 'string' | 'uri';

/* overload #1: you pass a *precise* const-array → strong result type */
export function createSearchParametersSchema<
  Params extends readonly {
    name: string;
    type?: SupportedType;
  }[],
>(params: Params): z.ZodType<ParamsToShape<Params>>;

/* overload #2: you pass *anything else* (e.g. already-typed list)       */
export function createSearchParametersSchema(
  params: ReadonlyArray<CapabilityStatementSearchParam>,
): z.ZodType<Record<string, unknown>>;
export function createSearchParametersSchema(
  params: ReadonlyArray<CapabilityStatementSearchParam>,
): z.ZodType<Record<string, unknown>> {
  const schema = createBaseSearchParametersSchema(params);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return schema as z.ZodType<any>; // single runtime copy
}

type CardinalityOpts = { multipleAnd: boolean; multipleOr: boolean };

export function createSearchParameterCardinalityRefinement<K extends string>(
  key: K,
  options: CardinalityOpts,
): [
  // we accept *any* object shape here (so TS won't complain that `key` is optional)
  (obj: Record<string, unknown>) => boolean,
  { path: [K]; message: string },
] {
  return [
    (obj) => {
      // grab it out of the record (might be `undefined`)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const val = (obj as any)[key];
      // no value or explicitly `undefined` → OK
      if (val == null) return true;
      // must be [][]
      if (!Array.isArray(val)) return false;
      const andGroups = val as unknown[];
      // enforce single-AND
      if (!options.multipleAnd && andGroups.length > 1) {
        return false;
      }
      // enforce single-OR in each group
      if (!options.multipleOr) {
        for (const orGroup of andGroups) {
          if (Array.isArray(orGroup) && orGroup.length > 1) {
            return false;
          }
        }
      }
      return true;
    },
    {
      path: [key],
      message:
        !options.multipleAnd && !options.multipleOr
          ? `${key} must have exactly one AND group with exactly one OR value`
          : !options.multipleAnd
            ? `${key} must have at most one AND group`
            : `${key} must have at most one OR value per AND group`,
    },
  ];
}
