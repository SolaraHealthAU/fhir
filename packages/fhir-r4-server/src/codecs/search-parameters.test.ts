import type { CapabilityStatementSearchParam } from '@solarahealth/fhir-r4';
import {
  createNumberParameterSchema,
  createDateParameterSchema,
  createTokenParameterSchema,
  createReferenceParameterSchema,
  createQuantityParameterSchema,
  createSearchParametersSchema,
  preprocessValues,
} from './search-parameters';

describe('createNumberParameterSchema', () => {
  it('should parse a number', () => {
    expect(createNumberParameterSchema().parse('123')).toEqual([
      [
        {
          direction: 'eq',
          value: 123,
          significantFigures: 3,
        },
      ],
    ]);
    expect(createNumberParameterSchema().parse('123.45')).toEqual([
      [
        {
          direction: 'eq',
          value: 123.45,
          significantFigures: 5,
        },
      ],
    ]);
    expect(createNumberParameterSchema().parse('123.45e-1')).toEqual([
      [
        {
          direction: 'eq',
          value: 12.345,
          significantFigures: 5,
        },
      ],
    ]);
    expect(createNumberParameterSchema().parse('1e2')).toEqual([
      [
        {
          direction: 'eq',
          value: 100,
          significantFigures: 1,
        },
      ],
    ]);
    expect(createNumberParameterSchema().parse('lt100')).toEqual([
      [
        {
          direction: 'lt',
          value: 100,
          significantFigures: 3,
        },
      ],
    ]);
    expect(createNumberParameterSchema().parse('gt8e-1')).toEqual([
      [
        {
          direction: 'gt',
          value: 0.8,
          significantFigures: 1,
        },
      ],
    ]);
    expect(createNumberParameterSchema().parse('gt0.8')).toEqual([
      [
        {
          direction: 'gt',
          value: 0.8,
          significantFigures: 1,
        },
      ],
    ]);
  });
});

describe('createDateParameterSchema', () => {
  it('should parse a date', () => {
    expect(createDateParameterSchema().parse('2020-01-01')).toEqual([
      [
        {
          prefix: 'eq',
          date: new Date('2020-01-01'),
          raw: '2020-01-01',
        },
      ],
    ]);

    expect(createDateParameterSchema().parse('2013-01-14')).toEqual([
      [
        {
          prefix: 'eq',
          date: new Date('2013-01-14T00:00:00.000Z'),
          raw: '2013-01-14',
        },
      ],
    ]);

    // → { prefix: 'ne', date: 2013-01-14T10:00:00.000Z, raw: '2013-01-14T10:00Z' }
    expect(createDateParameterSchema().parse('ne2013-01-14T10:00Z')).toEqual([
      [
        {
          prefix: 'ne',
          date: new Date('2013-01-14T10:00:00.000Z'),
          raw: '2013-01-14T10:00Z',
        },
      ],
    ]);

    // // → { prefix: 'lt', date: 2013-01-14T08:00:00.000Z, raw: '2013-01-14T10:00+02:00' }
    expect(createDateParameterSchema().parse('lt2013-01-14T10:00+02:00')).toEqual([
      [
        {
          prefix: 'lt',
          date: new Date('2013-01-14T08:00:00.000Z'),
          raw: '2013-01-14T10:00+02:00',
        },
      ],
    ]);

    expect(createDateParameterSchema().parse('ap2025-04-23T15:30:45')).toEqual([
      [
        {
          prefix: 'ap',
          date: new Date('2025-04-23T05:30:45.000Z'),
          raw: '2025-04-23T15:30:45',
        },
      ],
    ]);
  });
});

describe('createTokenParameterSchema', () => {
  const schema = createTokenParameterSchema();
  test('parses code only', () => {
    expect(schema.parse('ABC')).toEqual([
      [
        {
          codingCodeOrIdentifierValue: 'ABC',
        },
      ],
    ]);
  });

  test('parses system|code', () => {
    expect(schema.parse('http://loinc.org|1234-5')).toEqual([
      [
        {
          codingOrIdentifierSystem: 'http://loinc.org',
          codingCodeOrIdentifierValue: '1234-5',
        },
      ],
    ]);
  });

  test('parses |code (no system)', () => {
    expect(schema.parse('|xyz')).toEqual([
      [
        {
          codingCodeOrIdentifierValue: 'xyz',
        },
      ],
    ]);
  });

  test('parses system| (no code)', () => {
    expect(schema.parse('urn:oid:1.2.3|')).toEqual([
      [
        {
          codingOrIdentifierSystem: 'urn:oid:1.2.3',
        },
      ],
    ]);
  });
});

describe('createReferenceParameterSchema', () => {
  const schema = createReferenceParameterSchema();
  test('parses id only', () => {
    expect(schema.parse('123')).toEqual([[{ id: '123' }]]);
  });

  test('parses Type/id', () => {
    expect(schema.parse('Patient/123')).toEqual([[{ type: 'Patient', id: '123' }]]);
  });

  test('parses absolute URL', () => {
    expect(schema.parse('http://example.com/fhir/Patient/123')).toEqual([
      [{ url: 'http://example.com/fhir/Patient/123' }],
    ]);
  });

  test('parses comma-separated values', () => {
    expect(schema.parse('123,Observation/456')).toEqual([
      [{ id: '123' }, { type: 'Observation', id: '456' }],
    ]);
  });

  test('parses multiple occurrences', () => {
    expect(schema.parse(['123', 'Patient/123'])).toEqual([
      [{ id: '123' }],
      [{ type: 'Patient', id: '123' }],
    ]);
  });
});

describe('createQuantityParameterSchema', () => {
  const schema = createQuantityParameterSchema();
  test('parses value only', () => {
    expect(schema.parse('5.4')).toEqual([[{ prefix: 'eq', value: 5.4, significantFigures: 2 }]]);
  });

  test('parses system and code', () => {
    expect(schema.parse('5.4|http://unitsofmeasure.org|mg')).toEqual([
      [
        {
          prefix: 'eq',
          value: 5.4,
          significantFigures: 2,
          system: 'http://unitsofmeasure.org',
          code: 'mg',
        },
      ],
    ]);
  });

  test('parses exponent and code', () => {
    expect(schema.parse('5.40e-3|http://unitsofmeasure.org|g')).toEqual([
      [
        {
          prefix: 'eq',
          value: 0.0054,
          significantFigures: 3,
          system: 'http://unitsofmeasure.org',
          code: 'g',
        },
      ],
    ]);
  });

  test('parses double pipe (empty system)', () => {
    expect(schema.parse('5.4||mg')).toEqual([
      [
        {
          prefix: 'eq',
          value: 5.4,
          significantFigures: 2,
          code: 'mg',
        },
      ],
    ]);
  });

  test('parses comparator prefix', () => {
    expect(schema.parse('le5.4|http://unitsofmeasure.org|mg')).toEqual([
      [
        {
          prefix: 'le',
          value: 5.4,
          significantFigures: 2,
          system: 'http://unitsofmeasure.org',
          code: 'mg',
        },
      ],
    ]);
  });

  test('parses approximate prefix', () => {
    expect(schema.parse('ap5.4|http://unitsofmeasure.org|mg')).toEqual([
      [
        {
          prefix: 'ap',
          value: 5.4,
          significantFigures: 2,
          system: 'http://unitsofmeasure.org',
          code: 'mg',
        },
      ],
    ]);
  });

  test('parses multiple occurrences', () => {
    expect(schema.parse(['5.4', '5.4|http://unitsofmeasure.org|mg'])).toEqual([
      [{ prefix: 'eq', value: 5.4, significantFigures: 2 }],
      [
        {
          prefix: 'eq',
          value: 5.4,
          significantFigures: 2,
          system: 'http://unitsofmeasure.org',
          code: 'mg',
        },
      ],
    ]);
  });

  test('parses comma-separated values', () => {
    expect(schema.parse('5.4,5.5|http://unitsofmeasure.org|mg')).toEqual([
      [
        { prefix: 'eq', value: 5.4, significantFigures: 2 },
        {
          prefix: 'eq',
          value: 5.5,
          significantFigures: 2,
          system: 'http://unitsofmeasure.org',
          code: 'mg',
        },
      ],
    ]);
  });
});

describe('createSearchParametersSchema (integration)', () => {
  const searchParams = [
    { name: 'value-quantity', type: 'quantity' },
    { name: 'value-date', type: 'date' },
    { name: 'url', type: 'uri' },
    { name: 'given', type: 'string' },
  ] as const satisfies ReadonlyArray<CapabilityStatementSearchParam>;

  const schema = createSearchParametersSchema(searchParams);
  it('parses a mixed query-string object with modifiers', () => {
    const result = schema.parse({
      'value-quantity': 'le5.4|http://unitsofmeasure.org|mg',
      'value-date': '2013-01-14',
      'url:below': 'http://acme.org/fhir/',
      'given:contains': ['eve', 'john'],
    });

    expect(result).toEqual({
      'value-quantity': [
        [
          {
            prefix: 'le',
            value: 5.4,
            significantFigures: 2,
            system: 'http://unitsofmeasure.org',
            code: 'mg',
          },
        ],
      ],
      'value-date': [
        [
          {
            prefix: 'eq',
            date: new Date('2013-01-14T00:00:00.000Z'),
            raw: '2013-01-14',
          },
        ],
      ],
      url: [
        [
          {
            op: 'below',
            value: 'http://acme.org/fhir/',
          },
        ],
      ],
      given: [[{ op: 'contains', value: 'eve' }], [{ op: 'contains', value: 'john' }]],
    });
  });
});

describe('composite (preprocessValues util)', () => {
  it('should preprocess a single string', () => {
    expect(preprocessValues('123')).toEqual([['123']]);
  });

  test('languageParam parses single code string', () => {
    expect(preprocessValues('FR')).toEqual([['FR']]);
  });

  test('languageParam parses multiple occurrences as AND', () => {
    expect(preprocessValues(['FR', 'NL'])).toEqual([['FR'], ['NL']]);
  });

  test('languageParam parses comma-separated values as OR', () => {
    expect(preprocessValues('FR,NL')).toEqual([['FR', 'NL']]);
  });

  test('languageParam parses combined AND/OR correctly', () => {
    expect(preprocessValues(['FR,NL', 'EN'])).toEqual([['FR', 'NL'], ['EN']]);
  });
});
