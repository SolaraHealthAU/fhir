import type { Patient } from "../../src/v4.0.1/patient/types";

export const JsonEdgeCases: Patient = {
  resourceType: "Patient",
  identifier: [
    {
      period: {
        start: "2001-05-06",
      },
      assigner: {
        display: "Acme Healthcare",
      },
      use: "usual",
      system: "urn:oid:1.2.36.146.595.217.0.1",
      value: "12345",
    },
  ],
  managingOrganization: {
    reference: "Organization/1",
  },
  _active: {
    extension: [
      {
        url: "http://example.org/fhir/StructureDefinition/recordStatus",
        valueCode: "archived",
      },
    ],
  },
  name: [
    {
      given: ["Peter", "James"],
      use: "official",
      family: "Chalmers",
    },
    {
      given: ["Jim"],
      use: "usual",
    },
  ],
  extension: [
    {
      url: "http://example.org/fhir/StructureDefinition/patientAvatar",
      valueReference: {
        reference: "#pic1",
        display: "Duck image",
      },
    },
    {
      url: "http://example.org/fhir/StructureDefinition/complexExtensionExample",
      extension: [
        {
          url: "nestedA",
          valueCoding: {
            system: "http://demo.org/id/4",
            code: "AB45",
            extension: [
              {
                url: "http://example.org/fhir/StructureDefinition/extraforcodingWithExt",
                extension: [
                  {
                    url: "extra1",
                    valueString: "extra info",
                  },
                ],
              },
              {
                url: "http://example.org/fhir/StructureDefinition/extraforcodingWithValue",
                valueInteger: 45,
              },
            ],
          },
        },
        {
          url: "nestedB",
          id: "q4",
          extension: [
            {
              url: "nestedB1",
              valueString: "hello",
            },
          ],
        },
      ],
    },
  ],
  modifierExtension: [
    {
      url: "http://example.org/fhir/StructureDefinition/pi",
      valueDecimal: 3.141592653589793,
    },
    {
      url: "http://example.org/fhir/StructureDefinition/max-decimal-precision",
      valueDecimal: 1.0006502214162465,
    },
  ],
  gender: "male",
  birthDate: "1974-12",
  deceasedBoolean: true,
  address: [
    {
      use: "home",
      line: ["534 Erewhon St"],
      city: "PleasantVille",
      state: "Vic",
      postalCode: "3999",
    },
  ],
  maritalStatus: {
    extension: [
      {
        url: "http://example.org/fhir/StructureDefinition/nullFlavor",
        valueCode: "ASKU",
      },
    ],
  },
  multipleBirthInteger: 3,
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <table>\n        <tbody>\n          <tr>\n            <td>Name</td>\n            <td>Peter James <b>Chalmers</b> (&quot;Jim&quot;)</td>\n          </tr>\n          <tr>\n            <td>Address</td>\n            <td>534 Erewhon, Pleasantville, Vic, 3999</td>\n          </tr>\n          <tr>\n            <td>Contacts</td>\n            <td>Home: unknown. Work: (03) 5555 6473</td>\n          </tr>\n          <tr>\n            <td>Id</td>\n            <td>MRN: 12345 (Acme Healthcare)</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>',
  },
  contained: [
    {
      resourceType: "Binary",
      id: "pic1",
      contentType: "image/gif",
      data: "R0lGODlhEwARAPcAAAAAAAAA/+9aAO+1AP/WAP/eAP/eCP/eEP/eGP/nAP/nCP/nEP/nIf/nKf/nUv/nWv/vAP/vCP/vEP/vGP/vIf/vKf/vMf/vOf/vWv/vY//va//vjP/3c//3lP/3nP//tf//vf///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH5BAEAAAEALAAAAAATABEAAAi+AAMIDDCgYMGBCBMSvMCQ4QCFCQcwDBGCA4cLDyEGECDxAoAQHjxwyKhQAMeGIUOSJJjRpIAGDS5wCDly4AALFlYOgHlBwwOSNydM0AmzwYGjBi8IHWoTgQYORg8QIGDAwAKhESI8HIDgwQaRDI1WXXAhK9MBBzZ8/XDxQoUFZC9IiCBh6wEHGz6IbNuwQoSpWxEgyLCXL8O/gAnylNlW6AUEBRIL7Og3KwQIiCXb9HsZQoIEUzUjNEiaNMKAAAA7",
    },
    {
      resourceType: "Organization",
      id: "org3141",
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>Good Health Clinic</p>\n    </div>',
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "2.16.840.1.113883.19.5",
        },
      ],
      name: "Good Health Clinic",
    },
  ],
  contact: [
    {
      name: {
        family: "du Marché",
        _family: {
          extension: [
            {
              url: "http://example.org/fhir/StructureDefinition/qualifier",
              valueString: "VV",
            },
            {
              url: "http://hl7.org/fhir/StructureDefinitioniso-21090#nullFlavor",
              valueCode: "ASKU",
            },
          ],
        },
        _given: [
          {
            id: "a3",
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/qualifier",
                valueCode: "MID",
              },
            ],
          },
        ],
        given: ["Bénédicte", "Denise", "Marie"],
      },
      relationship: [
        {
          coding: [
            {
              system:
                "http://example.org/fhir/CodeSystem/patient-contact-relationship",
              code: "partner",
            },
          ],
        },
      ],
      telecom: [
        {
          system: "phone",
          value: "+33 (237) 998327",
        },
      ],
    },
  ],
  generalPractitioner: [
    {
      reference: "#org3141",
    },
  ],
  telecom: [
    {
      use: "home",
    },
    {
      system: "phone",
      value: "(03) 5555 6473",
      use: "work",
    },
  ],
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
} as const;

export const PatientExampleA: Patient = {
  resourceType: "Patient",
  id: "pat1",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <p>Patient Donald DUCK @ Acme Healthcare, Inc. MR = 654321</p>\n    \n    </div>',
  },
  identifier: [
    {
      use: "usual",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0203",
            code: "MR",
          },
        ],
      },
      system: "urn:oid:0.1.2.3.4.5.6.7",
      value: "654321",
    },
  ],
  active: true,
  name: [
    {
      use: "official",
      family: "Donald",
      given: ["Duck"],
    },
  ],
  gender: "male",
  photo: [
    {
      contentType: "image/gif",
      data: "R0lGODlhEwARAPcAAAAAAAAA/+9aAO+1AP/WAP/eAP/eCP/eEP/eGP/nAP/nCP/nEP/nIf/nKf/nUv/nWv/vAP/vCP/vEP/vGP/vIf/vKf/vMf/vOf/vWv/vY//va//vjP/3c//3lP/3nP//tf//vf///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH5BAEAAAEALAAAAAATABEAAAi+AAMIDDCgYMGBCBMSvMCQ4QCFCQcwDBGCA4cLDyEGECDxAoAQHjxwyKhQAMeGIUOSJJjRpIAGDS5wCDly4AALFlYOgHlBwwOSNydM0AmzwYGjBi8IHWoTgQYORg8QIGDAwAKhESI8HIDgwQaRDI1WXXAhK9MBBzZ8/XDxQoUFZC9IiCBh6wEHGz6IbNuwQoSpWxEgyLCXL8O/gAnylNlW6AUEBRIL7Og3KwQIiCXb9HsZQoIEUzUjNEiaNMKAAAA7",
    },
  ],
  contact: [
    {
      relationship: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0131",
              code: "E",
            },
          ],
        },
      ],
      organization: {
        reference: "Organization/1",
        display: "Walt Disney Corporation",
      },
    },
  ],
  managingOrganization: {
    reference: "Organization/1",
    display: "ACME Healthcare, Inc",
  },
  link: [
    {
      other: {
        reference: "Patient/pat2",
      },
      type: "seealso",
    },
  ],
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
} as const;

export const PatientExampleAnimal: Patient = {
  resourceType: "Patient",
  id: "animal",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <table>\n        \n        <tbody>\n          \n          <tr>\n            \n            <td>Id</td>\n            \n            <td>Kenzi (Dog: Golden Retriever)</td>\n          \n          </tr>\n          \n          <tr>\n            \n            <td>Owner</td>\n            \n            <td>Peter Chalmers, 534 Erewhon, Pleasantville, Vic, 3999</td>\n          \n          </tr>\n          \n          <tr>\n            \n            <td>Contacts</td>\n            \n            <td>Work: (03) 5555 6473</td>\n          \n          </tr>\n          \n          <tr>\n            \n            <td>Id</td>\n            \n            <td>Dog Tag: 1234123 (Maroondah City Council)</td>\n          \n          </tr>\n        \n        </tbody>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/patient-animal",
      extension: [
        {
          url: "species",
          valueCodeableConcept: {
            coding: [
              {
                system: "http://hl7.org/fhir/animal-species",
                code: "canislf",
                display: "Dog",
              },
            ],
          },
        },
        {
          url: "breed",
          valueCodeableConcept: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "58108001",
                display: "Golden retriever",
              },
              {
                system: "http://example.org/fhir/CodeSystem/animal-breed",
                code: "gret",
                display: "Golden Retriever",
              },
            ],
          },
        },
        {
          url: "genderStatus",
          valueCodeableConcept: {
            coding: [
              {
                system: "http://hl7.org/fhir/animal-genderstatus",
                code: "neutered",
              },
            ],
          },
        },
      ],
    },
  ],
  identifier: [
    {
      type: {
        text: "Dog Tag",
      },
      system: "http://www.maroondah.vic.gov.au/AnimalRegFees.aspx",
      value: "1234123",
      period: {
        start: "2010-05-31",
      },
      assigner: {
        display: "Maroondah City Council",
      },
    },
  ],
  active: true,
  name: [
    {
      use: "usual",
      given: ["Kenzi"],
    },
  ],
  gender: "female",
  birthDate: "2010-03-23",
  contact: [
    {
      relationship: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0131",
              code: "C",
            },
          ],
        },
      ],
      name: {
        family: "Chalmers",
        given: ["Peter", "James"],
      },
      telecom: [
        {
          system: "phone",
          value: "(03) 5555 6473",
          use: "work",
        },
      ],
    },
  ],
  managingOrganization: {
    display: "Pete's Vetinary Services",
  },
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
} as const;

export const PatientExampleB: Patient = {
  resourceType: "Patient",
  id: "pat2",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t<p>Patient Donald D DUCK @ Acme Healthcare, Inc. MR = 123456</p>\n\t\t</div>',
  },
  identifier: [
    {
      use: "usual",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0203",
            code: "MR",
          },
        ],
      },
      system: "urn:oid:0.1.2.3.4.5.6.7",
      value: "123456",
    },
  ],
  active: true,
  name: [
    {
      use: "official",
      family: "Donald",
      given: ["Duck", "D"],
    },
  ],
  gender: "other",
  _gender: {
    extension: [
      {
        url: "http://example.org/Profile/administrative-status",
        valueCodeableConcept: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0001",
              code: "A",
              display: "Ambiguous",
            },
          ],
        },
      },
    ],
  },
  photo: [
    {
      contentType: "image/gif",
      data: "R0lGODlhEwARAPcAAAAAAAAA/+9aAO+1AP/WAP/eAP/eCP/eEP/eGP/nAP/nCP/nEP/nIf/nKf/nUv/nWv/vAP/vCP/vEP/vGP/vIf/vKf/vMf/vOf/vWv/vY//va//vjP/3c//3lP/3nP//tf//vf///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH5BAEAAAEALAAAAAATABEAAAi+AAMIDDCgYMGBCBMSvMCQ4QCFCQcwDBGCA4cLDyEGECDxAoAQHjxwyKhQAMeGIUOSJJjRpIAGDS5wCDly4AALFlYOgHlBwwOSNydM0AmzwYGjBi8IHWoTgQYORg8QIGDAwAKhESI8HIDgwQaRDI1WXXAhK9MBBzZ8/XDxQoUFZC9IiCBh6wEHGz6IbNuwQoSpWxEgyLCXL8O/gAnylNlW6AUEBRIL7Og3KwQIiCXb9HsZQoIEUzUjNEiaNMKAAAA7",
    },
  ],
  managingOrganization: {
    reference: "Organization/1",
    display: "ACME Healthcare, Inc",
  },
  link: [
    {
      other: {
        reference: "Patient/pat1",
      },
      type: "seealso",
    },
  ],
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
} as const;

export const PatientExampleC: Patient = {
  resourceType: "Patient",
  id: "pat3",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <p>Patient Simon Notsowell @ Acme Healthcare, Inc. MR = 123457, DECEASED</p>\n    \n    </div>',
  },
  identifier: [
    {
      use: "usual",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0203",
            code: "MR",
          },
        ],
      },
      system: "urn:oid:0.1.2.3.4.5.6.7",
      value: "123457",
    },
  ],
  active: true,
  name: [
    {
      use: "official",
      family: "Notsowell",
      given: ["Simon"],
    },
  ],
  gender: "male",
  birthDate: "1982-01-23",
  deceasedDateTime: "2015-02-14T13:42:00+10:00",
  managingOrganization: {
    reference: "Organization/1",
    display: "ACME Healthcare, Inc",
  },
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
} as const;

export const PatientExampleChinese: Patient = {
  resourceType: "Patient",
  id: "ch-example",
  meta: {
    versionId: "1",
    lastUpdated: "2016-05-16T00:55:52Z",
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <table>\n        <tbody>\n          <tr>\n            <td>名字</td>\n            <td>张无忌</td> </tr>\n          <tr>\n            <td>地址</td>\n            <td>上海市黄埔区马当路190号, 1974年12月25日</td> \n          </tr>\n          <tr>\n            <td>联系方式</td>\n            <td>住宅: 不详。工作: 18337177888</td> \n          </tr>\n          <tr>\n            <td>Id</td>\n            <td>MRN: 3112219680806371X (市卫生局)</td> \n          </tr> \n        </tbody> \n      </table> \n    </div>',
  },
  identifier: [
    {
      use: "usual",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0203",
            code: "MR",
          },
        ],
      },
      system: "urn:oid:1.2.36.146.595.217.0.1",
      value: "3112219680806371X",
      period: {
        start: "2001-05-06",
      },
      assigner: {
        display: "市卫生局",
      },
    },
  ],
  active: true,
  name: [
    {
      use: "official",
      text: "张无忌",
    },
  ],
  telecom: [
    {
      use: "home",
    },
    {
      system: "phone",
      value: "18337177888",
      use: "work",
    },
  ],
  gender: "male",
  birthDate: "1974-12-25",
  deceasedBoolean: false,
  address: [
    {
      use: "home",
      type: "both",
      line: ["马当路190号"],
      city: "上海市",
      district: "黄埔区",
      postalCode: "200000",
      period: {
        start: "1974-12-25",
      },
    },
  ],
  managingOrganization: {
    reference: "Organization/1",
    display: "上海东方医院",
  },
} as const;

export const PatientExampleD: Patient = {
  resourceType: "Patient",
  id: "pat4",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t<p>Patient Sandy Notsowell @ Acme Healthcare, Inc. MR = 123458, DECEASED</p>\n\t\t</div>',
  },
  identifier: [
    {
      use: "usual",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0203",
            code: "MR",
          },
        ],
      },
      system: "urn:oid:0.1.2.3.4.5.6.7",
      value: "123458",
    },
  ],
  active: true,
  name: [
    {
      use: "official",
      family: "Notsowell",
      given: ["Sandy"],
    },
  ],
  gender: "female",
  birthDate: "1982-08-02",
  deceasedBoolean: true,
  managingOrganization: {
    reference: "Organization/1",
    display: "ACME Healthcare, Inc",
  },
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
} as const;

export const PatientExampleDicom: Patient = {
  resourceType: "Patient",
  id: "dicom",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"> Patient MINT_TEST, ID = MINT1234. Age = 56y, Size =\n      1.83m, Weight = 72.58kg </div>',
  },
  extension: [
    {
      url: "http://nema.org/fhir/extensions#0010:1010",
      valueQuantity: {
        value: 56,
        unit: "Y",
      },
    },
    {
      url: "http://nema.org/fhir/extensions#0010:1020",
      valueQuantity: {
        value: 1.83,
        unit: "m",
      },
    },
    {
      url: "http://nema.org/fhir/extensions#0010:1030",
      valueQuantity: {
        value: 72.58,
        unit: "kg",
      },
    },
  ],
  identifier: [
    {
      system: "http://nema.org/examples/patients",
      value: "MINT1234",
    },
  ],
  active: true,
  name: [
    {
      family: "MINT_TEST",
    },
  ],
  gender: "male",
  _gender: {
    extension: [
      {
        url: "http://nema.org/examples/extensions#gender",
        valueCoding: {
          system: "http://nema.org/examples/gender",
          code: "M",
        },
      },
    ],
  },
  managingOrganization: {
    reference: "Organization/1",
  },
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
} as const;

export const PatientExampleF001Pieter: Patient = {
  resourceType: "Patient",
  id: "f001",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f001</p><p><b>identifier</b>: 738472983 (USUAL), ?? (USUAL)</p><p><b>active</b>: true</p><p><b>name</b>: Pieter van de Heuvel </p><p><b>telecom</b>: ph: 0648352638(MOBILE), p.heuvel@gmail.com(HOME)</p><p><b>gender</b>: male</p><p><b>birthDate</b>: 17/11/1944</p><p><b>deceased</b>: false</p><p><b>address</b>: Van Egmondkade 23 Amsterdam 1024 RJ NLD (HOME)</p><p><b>maritalStatus</b>: Getrouwd <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-MaritalStatus code 'M' = 'Married', given as 'Married'})</span></p><p><b>multipleBirth</b>: true</p><h3>Contacts</h3><table><tr><td>-</td><td><b>Relationship</b></td><td><b>Name</b></td><td><b>Telecom</b></td></tr><tr><td>*</td><td>Emergency Contact <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0131 code 'C' = 'Emergency Contact)</span></td><td>Sarah Abels </td><td>ph: 0690383372(MOBILE)</td></tr></table><h3>Communications</h3><table><tr><td>-</td><td><b>Language</b></td><td><b>Preferred</b></td></tr><tr><td>*</td><td>Nederlands <span>(Details : {urn:ietf:bcp:47 code 'nl' = 'Dutch', given as 'Dutch'})</span></td><td>true</td></tr></table><p><b>managingOrganization</b>: <a>Burgers University Medical Centre</a></p></div>",
  },
  identifier: [
    {
      use: "usual",
      system: "urn:oid:2.16.840.1.113883.2.4.6.3",
      value: "738472983",
    },
    {
      use: "usual",
      system: "urn:oid:2.16.840.1.113883.2.4.6.3",
    },
  ],
  active: true,
  name: [
    {
      use: "usual",
      family: "van de Heuvel",
      given: ["Pieter"],
      suffix: ["MSc"],
    },
  ],
  telecom: [
    {
      system: "phone",
      value: "0648352638",
      use: "mobile",
    },
    {
      system: "email",
      value: "p.heuvel@gmail.com",
      use: "home",
    },
  ],
  gender: "male",
  birthDate: "1944-11-17",
  deceasedBoolean: false,
  address: [
    {
      use: "home",
      line: ["Van Egmondkade 23"],
      city: "Amsterdam",
      postalCode: "1024 RJ",
      country: "NLD",
    },
  ],
  maritalStatus: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
        code: "M",
        display: "Married",
      },
    ],
    text: "Getrouwd",
  },
  multipleBirthBoolean: true,
  contact: [
    {
      relationship: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0131",
              code: "C",
            },
          ],
        },
      ],
      name: {
        use: "usual",
        family: "Abels",
        given: ["Sarah"],
      },
      telecom: [
        {
          system: "phone",
          value: "0690383372",
          use: "mobile",
        },
      ],
    },
  ],
  communication: [
    {
      language: {
        coding: [
          {
            system: "urn:ietf:bcp:47",
            code: "nl",
            display: "Dutch",
          },
        ],
        text: "Nederlands",
      },
      preferred: true,
    },
  ],
  managingOrganization: {
    reference: "Organization/f001",
    display: "Burgers University Medical Centre",
  },
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
} as const;

export const PatientExampleIhePcd: Patient = {
  resourceType: "Patient",
  id: "ihe-pcd",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Albert Brooks, Id: AB60001</div>',
  },
  identifier: [
    {
      type: {
        text: "Internal Identifier",
      },
      value: "AB60001",
    },
  ],
  active: true,
  name: [
    {
      family: "BROOKS",
      given: ["ALBERT"],
    },
  ],
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
} as const;

export const PatientExampleInfantFetal: Patient = {
  resourceType: "Patient",
  id: "infant-fetal",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: infant-fetal</p><p><b>identifier</b>: Medical record number = MRN657865757378</p><p><b>gender</b>: male</p><h3>Contacts</h3><table><tr><td>-</td><td><b>Relationship</b></td><td><b>Name</b></td><td><b>Telecom</b></td></tr><tr><td>*</td><td>Mother <span>(Details : {SNOMED CT code '72705000' = 'Mother', given as 'Mother'}; {http://terminology.hl7.org/CodeSystem/v2-0131 code 'N' = 'Next-of-Kin; {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'MTH' = 'mother)</span></td><td>Leia Organa (MAIDEN)</td><td>ph: +31201234567(MOBILE)</td></tr></table></div>",
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName",
      valueString: "Organa",
    },
  ],
  identifier: [
    {
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0203",
            code: "MR",
          },
        ],
      },
      system: "http://coruscanthealth.org/main-hospital/patient-identifier",
      value: "MRN657865757378",
    },
  ],
  gender: "male",
  contact: [
    {
      relationship: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "72705000",
              display: "Mother",
            },
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0131",
              code: "N",
            },
            {
              system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
              code: "MTH",
            },
          ],
        },
      ],
      name: {
        use: "maiden",
        family: "Organa",
        given: ["Leia"],
      },
      telecom: [
        {
          system: "phone",
          value: "+31201234567",
          use: "mobile",
        },
      ],
    },
  ],
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
} as const;

export const PatientExampleInfantMom: Patient = {
  resourceType: "Patient",
  id: "infant-mom",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: infant-mom</p><p><b>name</b>: Leia Solo (OFFICIAL), Leia Organa (MAIDEN)</p><p><b>gender</b>: female</p><p><b>birthDate</b>: 12/10/1995</p><p><b>maritalStatus</b>: Married <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-MaritalStatus code 'M' = 'Married', given as 'Married'})</span></p><p><b>generalPractitioner</b>: <a>Too-Onebee</a></p></div>",
  },
  name: [
    {
      use: "official",
      family: "Solo",
      given: ["Leia"],
    },
    {
      use: "maiden",
      family: "Organa",
      given: ["Leia"],
    },
  ],
  gender: "female",
  birthDate: "1995-10-12",
  maritalStatus: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
        code: "M",
        display: "Married",
      },
    ],
  },
  generalPractitioner: [
    {
      reference: "Practitioner/21B",
      display: "Too-Onebee",
    },
  ],
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
} as const;

export const PatientExampleInfantTwin1: Patient = {
  resourceType: "Patient",
  id: "infant-twin-1",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: infant-twin-1</p><p><b>identifier</b>: Medical record number = MRN7465737865, 7465737865</p><p><b>name</b>: Jaina Solo (OFFICIAL)</p><p><b>gender</b>: female</p><p><b>birthDate</b>: 15/05/2017</p><p><b>multipleBirth</b>: 1</p><h3>Contacts</h3><table><tr><td>-</td><td><b>Relationship</b></td><td><b>Name</b></td><td><b>Telecom</b></td></tr><tr><td>*</td><td>Mother <span>(Details : {SNOMED CT code '72705000' = 'Mother', given as 'Mother'}; {http://terminology.hl7.org/CodeSystem/v2-0131 code 'N' = 'Next-of-Kin; {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'MTH' = 'mother)</span></td><td>Leia Organa (MAIDEN)</td><td>ph: +31201234567(MOBILE)</td></tr></table></div>",
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName",
      valueString: "Organa",
    },
  ],
  identifier: [
    {
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0203",
            code: "MR",
          },
        ],
      },
      system: "http://coruscanthealth.org/main-hospital/patient-identifier",
      value: "MRN7465737865",
    },
    {
      system: "http://new-republic.gov/galactic-citizen-identifier",
      value: "7465737865",
    },
  ],
  name: [
    {
      use: "official",
      family: "Solo",
      given: ["Jaina"],
    },
  ],
  gender: "female",
  birthDate: "2017-05-15",
  _birthDate: {
    extension: [
      {
        url: "http://hl7.org/fhir/StructureDefinition/patient-birthTime",
        valueDateTime: "2017-05-15T17:11:00+01:00",
      },
    ],
  },
  multipleBirthInteger: 1,
  contact: [
    {
      relationship: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "72705000",
              display: "Mother",
            },
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0131",
              code: "N",
            },
            {
              system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
              code: "MTH",
            },
          ],
        },
      ],
      name: {
        use: "maiden",
        family: "Organa",
        given: ["Leia"],
      },
      telecom: [
        {
          system: "phone",
          value: "+31201234567",
          use: "mobile",
        },
      ],
    },
  ],
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
} as const;

export const PatientExampleInfantTwin2: Patient = {
  resourceType: "Patient",
  id: "infant-twin-2",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: infant-twin-2</p><p><b>identifier</b>: Medical record number = MRN7465676978, 7465676978</p><p><b>name</b>: Jacen Solo (OFFICIAL)</p><p><b>gender</b>: male</p><p><b>birthDate</b>: 15/05/2017</p><p><b>multipleBirth</b>: 2</p><h3>Contacts</h3><table><tr><td>-</td><td><b>Relationship</b></td><td><b>Name</b></td><td><b>Telecom</b></td></tr><tr><td>*</td><td>Mother <span>(Details : {SNOMED CT code '72705000' = 'Mother', given as 'Mother'}; {http://terminology.hl7.org/CodeSystem/v2-0131 code 'N' = 'Next-of-Kin; {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'MTH' = 'mother)</span></td><td>Leia Organa (MAIDEN)</td><td>ph: +31201234567(MOBILE)</td></tr></table></div>",
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName",
      valueString: "Organa",
    },
  ],
  identifier: [
    {
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0203",
            code: "MR",
          },
        ],
      },
      system: "http://coruscanthealth.org/main-hospital/patient-identifier",
      value: "MRN7465676978",
    },
    {
      system: "http://new-republic.gov/galactic-citizen-identifier",
      value: "7465676978",
    },
  ],
  name: [
    {
      use: "official",
      family: "Solo",
      given: ["Jacen"],
    },
  ],
  gender: "male",
  birthDate: "2017-05-15",
  _birthDate: {
    extension: [
      {
        url: "http://hl7.org/fhir/StructureDefinition/patient-birthTime",
        valueDateTime: "2017-05-15T17:11:30+01:00",
      },
    ],
  },
  multipleBirthInteger: 2,
  contact: [
    {
      relationship: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "72705000",
              display: "Mother",
            },
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0131",
              code: "N",
            },
            {
              system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
              code: "MTH",
            },
          ],
        },
      ],
      name: {
        use: "maiden",
        family: "Organa",
        given: ["Leia"],
      },
      telecom: [
        {
          system: "phone",
          value: "+31201234567",
          use: "mobile",
        },
      ],
    },
  ],
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
} as const;

export const PatientExampleMom: Patient = {
  resourceType: "Patient",
  id: "mom",
  meta: {
    lastUpdated: "2012-05-29T23:45:32Z",
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: mom</p><p><b>meta</b>: </p><p><b>identifier</b>: Social Security number = 444222222</p><p><b>active</b>: true</p><p><b>name</b>: Eve Everywoman (OFFICIAL)</p><p><b>telecom</b>: ph: 555-555-2003(WORK)</p><p><b>gender</b>: female</p><p><b>birthDate</b>: 31/05/1973</p><p><b>address</b>: 2222 Home Street (HOME)</p><p><b>managingOrganization</b>: <a>Organization/hl7</a></p><h3>Links</h3><table><tr><td>-</td><td><b>Other</b></td><td><b>Type</b></td></tr><tr><td>*</td><td><a>RelatedPerson/newborn-mom</a></td><td>seealso</td></tr></table></div>',
  },
  identifier: [
    {
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0203",
            code: "SS",
          },
        ],
      },
      system: "http://hl7.org/fhir/sid/us-ssn",
      value: "444222222",
    },
  ],
  active: true,
  name: [
    {
      use: "official",
      family: "Everywoman",
      given: ["Eve"],
    },
  ],
  telecom: [
    {
      system: "phone",
      value: "555-555-2003",
      use: "work",
    },
  ],
  gender: "female",
  birthDate: "1973-05-31",
  address: [
    {
      use: "home",
      line: ["2222 Home Street"],
    },
  ],
  managingOrganization: {
    reference: "Organization/hl7",
  },
  link: [
    {
      other: {
        reference: "RelatedPerson/newborn-mom",
      },
      type: "seealso",
    },
  ],
} as const;

export const PatientExampleNewborn: Patient = {
  resourceType: "Patient",
  id: "newborn",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: newborn</p><p><b>gender</b>: male</p><p><b>birthDate</b>: 05/09/2017</p><p><b>multipleBirth</b>: 2</p></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName",
      valueString: "Everywoman",
    },
  ],
  gender: "male",
  birthDate: "2017-09-05",
  _birthDate: {
    extension: [
      {
        url: "http://hl7.org/fhir/StructureDefinition/patient-birthTime",
        valueDateTime: "2017-05-09T17:11:00+01:00",
      },
    ],
  },
  multipleBirthInteger: 2,
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
} as const;

export const PatientExampleProband: Patient = {
  resourceType: "Patient",
  id: "proband",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\n      <p>\n\n        <b>Annie Proband</b>: Female, born 1966-04-04\n      </p>\n\n    </div>',
  },
  identifier: [
    {
      use: "usual",
      type: {
        text: "Computer-Stored Abulatory Records (COSTAR)",
      },
      system: "urn:oid:2.16.840.1.113883.6.117",
      value: "999999999",
      assigner: {
        display: "Boston Massachesetts General Hospital",
      },
    },
  ],
  active: true,
  gender: "female",
  birthDate: "1966-04-04",
  deceasedBoolean: false,
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
} as const;

export const PatientExampleXcda: Patient = {
  resourceType: "Patient",
  id: "xcda",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <p>Henry Levin the 7th</p>\n    \n    </div>',
  },
  identifier: [
    {
      use: "usual",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0203",
            code: "MR",
          },
        ],
      },
      system: "urn:oid:2.16.840.1.113883.19.5",
      value: "12345",
    },
  ],
  active: true,
  name: [
    {
      family: "Levin",
      given: ["Henry"],
    },
  ],
  gender: "male",
  birthDate: "1932-09-24",
  managingOrganization: {
    reference: "Organization/2.16.840.1.113883.19.5",
    display: "Good Health Clinic",
  },
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
} as const;

export const PatientExampleXds: Patient = {
  resourceType: "Patient",
  id: "xds",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <p>Patient John Doe, M, 27-May 1956. ID: 89765a87b</p>\n    \n    </div>',
  },
  identifier: [
    {
      use: "usual",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0203",
            code: "MR",
          },
        ],
      },
      system: "urn:oid:1.2.3.4.5",
      value: "89765a87b",
    },
  ],
  active: true,
  name: [
    {
      family: "Doe",
      given: ["John"],
    },
  ],
  gender: "male",
  birthDate: "1956-05-27",
  address: [
    {
      line: ["100 Main St"],
      city: "Metropolis",
      state: "Il",
      postalCode: "44130",
      country: "USA",
    },
  ],
  managingOrganization: {
    reference: "Organization/2",
  },
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
} as const;

export const PatientExample: Patient = {
  resourceType: "Patient",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t<table>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Name</td>\n\t\t\t\t\t\t<td>Peter James \n              <b>Chalmers</b> (&quot;Jim&quot;)\n            </td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Address</td>\n\t\t\t\t\t\t<td>534 Erewhon, Pleasantville, Vic, 3999</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Contacts</td>\n\t\t\t\t\t\t<td>Home: unknown. Work: (03) 5555 6473</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Id</td>\n\t\t\t\t\t\t<td>MRN: 12345 (Acme Healthcare)</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>',
  },
  identifier: [
    {
      use: "usual",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0203",
            code: "MR",
          },
        ],
      },
      system: "urn:oid:1.2.36.146.595.217.0.1",
      value: "12345",
      period: {
        start: "2001-05-06",
      },
      assigner: {
        display: "Acme Healthcare",
      },
    },
  ],
  active: true,
  name: [
    {
      use: "official",
      family: "Chalmers",
      given: ["Peter", "James"],
    },
    {
      use: "usual",
      given: ["Jim"],
    },
    {
      use: "maiden",
      family: "Windsor",
      given: ["Peter", "James"],
      period: {
        end: "2002",
      },
    },
  ],
  telecom: [
    {
      use: "home",
    },
    {
      system: "phone",
      value: "(03) 5555 6473",
      use: "work",
      rank: 1,
    },
    {
      system: "phone",
      value: "(03) 3410 5613",
      use: "mobile",
      rank: 2,
    },
    {
      system: "phone",
      value: "(03) 5555 8834",
      use: "old",
      period: {
        end: "2014",
      },
    },
  ],
  gender: "male",
  birthDate: "1974-12-25",
  _birthDate: {
    extension: [
      {
        url: "http://hl7.org/fhir/StructureDefinition/patient-birthTime",
        valueDateTime: "1974-12-25T14:35:45-05:00",
      },
    ],
  },
  deceasedBoolean: false,
  address: [
    {
      use: "home",
      type: "both",
      text: "534 Erewhon St PeasantVille, Rainbow, Vic  3999",
      line: ["534 Erewhon St"],
      city: "PleasantVille",
      district: "Rainbow",
      state: "Vic",
      postalCode: "3999",
      period: {
        start: "1974-12-25",
      },
    },
  ],
  contact: [
    {
      relationship: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0131",
              code: "N",
            },
          ],
        },
      ],
      name: {
        family: "du Marché",
        _family: {
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix",
              valueString: "VV",
            },
          ],
        },
        given: ["Bénédicte"],
      },
      telecom: [
        {
          system: "phone",
          value: "+33 (237) 998327",
        },
      ],
      address: {
        use: "home",
        type: "both",
        line: ["534 Erewhon St"],
        city: "PleasantVille",
        district: "Rainbow",
        state: "Vic",
        postalCode: "3999",
        period: {
          start: "1974-12-25",
        },
      },
      gender: "female",
      period: {
        start: "2012",
      },
    },
  ],
  managingOrganization: {
    reference: "Organization/1",
  },
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
} as const;

export const PatientGeneticsExample1: Patient = {
  resourceType: "Patient",
  id: "genetics-example1",
  meta: {
    lastUpdated: "2012-05-29T23:45:32Z",
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Everywoman, Eve. SSN:\n      444222222</div>',
  },
  identifier: [
    {
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0203",
            code: "SS",
          },
        ],
      },
      system: "http://hl7.org/fhir/sid/us-ssn",
      value: "444222222",
    },
  ],
  active: true,
  name: [
    {
      use: "official",
      family: "Everywoman",
      given: ["Eve"],
    },
  ],
  telecom: [
    {
      system: "phone",
      value: "555-555-2003",
      use: "work",
    },
  ],
  gender: "female",
  birthDate: "1973-05-31",
  address: [
    {
      use: "home",
      line: ["2222 Home Street"],
    },
  ],
  managingOrganization: {
    reference: "Organization/hl7",
  },
} as const;

export const PatientGlossyExample: Patient = {
  resourceType: "Patient",
  id: "glossy",
  meta: {
    lastUpdated: "2014-11-13T11:41:00+11:00",
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>Henry Levin the 7th</p>\n      <p>MRN: 123456. Male, 24-Sept 1932</p>\n    </div>',
  },
  extension: [
    {
      url: "http://example.org/StructureDefinition/trials",
      valueCode: "renal",
    },
  ],
  identifier: [
    {
      use: "usual",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0203",
            code: "MR",
          },
        ],
      },
      system: "http://www.goodhealth.org/identifiers/mrn",
      value: "123456",
    },
  ],
  active: true,
  name: [
    {
      family: "Levin",
      given: ["Henry"],
      suffix: ["The 7th"],
    },
  ],
  gender: "male",
  birthDate: "1932-09-24",
  generalPractitioner: [
    {
      reference: "Practitioner/example",
      display: "Dr Adam Careful",
    },
  ],
  managingOrganization: {
    reference: "Organization/2",
    display: "Good Health Clinic",
  },
} as const;
