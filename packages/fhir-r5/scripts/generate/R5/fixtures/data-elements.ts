import { Entry } from '../data-elements';

export const entry1 = {
  fullUrl: 'http://hl7.org/fhir/StructureDefinition/de-oid.value',
  resource: {
    resourceType: 'StructureDefinition',
    id: 'de-oid.value',
    meta: {
      lastUpdated: '2019-11-01T09:29:23.356+11:00',
    },
    url: 'http://hl7.org/fhir/StructureDefinition/de-oid.value',
    version: '4.0.1',
    name: 'oid.value',
    title: 'oid.value',
    status: 'draft',
    experimental: true,
    date: '2019-11-01T09:29:23+11:00',
    publisher: 'HL7 FHIR Standard',
    contact: [
      {
        telecom: [
          {
            system: 'url',
            value: 'http://hl7.org/fhir',
          },
        ],
      },
    ],
    description: 'Data Element for oid.value',
    purpose:
      'Data Elements are defined for each element to assist in questionnaire construction etc',
    fhirVersion: '4.0.1',
    kind: 'logical',
    abstract: false,
    type: 'oid.value',
    baseDefinition: 'http://hl7.org/fhir/StructureDefinition/Element',
    derivation: 'specialization',
    snapshot: {
      element: [
        {
          id: 'oid.value',
          path: 'oid.value',
          representation: ['xmlAttr'],
          short: 'Primitive value for oid',
          definition: 'Primitive value for oid',
          min: 0,
          max: '1',
          base: {
            path: 'oid.value',
            min: 0,
            max: '1',
          },
          type: [
            {
              extension: [
                {
                  url: 'http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type',
                  valueUrl: 'string',
                },
                {
                  url: 'http://hl7.org/fhir/StructureDefinition/regex',
                  valueString: 'urn:oid:[0-2](\\.(0|[1-9][0-9]*))+',
                },
              ],
              code: 'http://hl7.org/fhirpath/System.String',
            },
          ],
          isModifier: false,
          isSummary: false,
        },
      ],
    },
  },
} satisfies Entry;

export const entry2 = {
  fullUrl: 'http://hl7.org/fhir/StructureDefinition/de-base64Binary.id',
  resource: {
    resourceType: 'StructureDefinition',
    id: 'de-base64Binary.id',
    meta: {
      lastUpdated: '2019-11-01T09:29:23.356+11:00',
    },
    url: 'http://hl7.org/fhir/StructureDefinition/de-base64Binary.id',
    version: '4.0.1',
    name: 'base64Binary.id',
    title: 'base64Binary.id',
    status: 'draft',
    experimental: true,
    date: '2019-11-01T09:29:23+11:00',
    publisher: 'HL7 FHIR Standard',
    contact: [
      {
        telecom: [
          {
            system: 'url',
            value: 'http://hl7.org/fhir',
          },
        ],
      },
    ],
    description: 'Data Element for base64Binary.id',
    purpose:
      'Data Elements are defined for each element to assist in questionnaire construction etc',
    fhirVersion: '4.0.1',
    kind: 'logical',
    abstract: false,
    type: 'base64Binary.id',
    baseDefinition: 'http://hl7.org/fhir/StructureDefinition/Element',
    derivation: 'specialization',
    snapshot: {
      element: [
        {
          id: 'base64Binary.id',
          path: 'base64Binary.id',
          representation: ['xmlAttr'],
          short: 'xml:id (or equivalent in JSON)',
          definition: 'unique id for the element within a resource (for internal references)',
          min: 0,
          max: '1',
          base: {
            path: 'base64Binary.id',
            min: 0,
            max: '1',
          },
          type: [
            {
              extension: [
                {
                  url: 'http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type',
                  valueUrl: 'string',
                },
              ],
              code: 'http://hl7.org/fhirpath/System.String',
            },
          ],
          isModifier: false,
          isSummary: false,
        },
      ],
    },
  },
} satisfies Entry;

export const entry3 = {
  fullUrl: 'http://hl7.org/fhir/StructureDefinition/de-HumanName.use',
  resource: {
    resourceType: 'StructureDefinition',
    id: 'de-HumanName.use',
    meta: {
      lastUpdated: '2019-11-01T09:29:23.356+11:00',
    },
    url: 'http://hl7.org/fhir/StructureDefinition/de-HumanName.use',
    version: '4.0.1',
    name: 'HumanName.use',
    title: 'HumanName.use',
    status: 'draft',
    experimental: true,
    date: '2019-11-01T09:29:23+11:00',
    publisher: 'HL7 FHIR Standard',
    contact: [
      {
        telecom: [
          {
            system: 'url',
            value: 'http://hl7.org/fhir',
          },
        ],
      },
    ],
    description: 'Data Element for HumanName.use',
    purpose:
      'Data Elements are defined for each element to assist in questionnaire construction etc',
    fhirVersion: '4.0.1',
    mapping: [
      {
        identity: 'v2',
        uri: 'http://hl7.org/v2',
        name: 'HL7 v2 Mapping',
      },
      {
        identity: 'rim',
        uri: 'http://hl7.org/v3',
        name: 'RIM Mapping',
      },
      {
        identity: 'servd',
        uri: 'http://www.omg.org/spec/ServD/1.0/',
        name: 'ServD',
      },
    ],
    kind: 'logical',
    abstract: false,
    type: 'HumanName.use',
    baseDefinition: 'http://hl7.org/fhir/StructureDefinition/Element',
    derivation: 'specialization',
    snapshot: {
      element: [
        {
          id: 'HumanName.use',
          path: 'HumanName.use',
          short: 'usual | official | temp | nickname | anonymous | old | maiden',
          definition: 'Identifies the purpose for this name.',
          comment:
            'Applications can assume that a name is current unless it explicitly says that it is temporary or old.',
          requirements:
            'Allows the appropriate name for a particular context of use to be selected from among a set of names.',
          min: 0,
          max: '1',
          base: {
            path: 'HumanName.use',
            min: 0,
            max: '1',
          },
          type: [
            {
              code: 'code',
            },
          ],
          isModifier: true,
          isModifierReason:
            'This is labeled as "Is Modifier" because applications should not mistake a temporary or old name etc.for a current/permanent one',
          isSummary: true,
          binding: {
            extension: [
              {
                url: 'http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName',
                valueString: 'NameUse',
              },
            ],
            strength: 'required',
            description: 'The use of a human name.',
            valueSet: 'http://hl7.org/fhir/ValueSet/name-use|4.0.1',
          },
          mapping: [
            {
              identity: 'v2',
              map: 'XPN.7, but often indicated by which field contains the name',
            },
            {
              identity: 'rim',
              map: 'unique(./use)',
            },
            {
              identity: 'servd',
              map: './NamePurpose',
            },
          ],
        },
      ],
    },
  },
} satisfies Entry;
