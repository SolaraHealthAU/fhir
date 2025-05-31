import type { Bundle } from "../../src/v4.0.1/bundle/types";

export const BundleExample: Bundle = {
  resourceType: "Bundle",
  id: "bundle-example",
  meta: {
    lastUpdated: "2014-08-18T01:43:30Z",
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
  type: "searchset",
  total: 3,
  link: [
    {
      relation: "self",
      url: "https://example.com/base/MedicationRequest?patient=347&_include=MedicationRequest.medication&_count=2",
    },
    {
      relation: "next",
      url: "https://example.com/base/MedicationRequest?patient=347&searchId=ff15fd40-ff71-4b48-b366-09c706bed9d0&page=2",
    },
  ],
  entry: [
    {
      fullUrl: "https://example.com/base/MedicationRequest/3123",
      resource: {
        resourceType: "MedicationRequest",
        id: "3123",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 3123</p><p><b>status</b>: unknown</p><p><b>intent</b>: order</p><p><b>medication</b>: <a>Medication/example</a></p><p><b>subject</b>: <a>Patient/347</a></p></div>',
        },
        status: "unknown",
        intent: "order",
        medicationReference: {
          reference: "Medication/example",
        },
        subject: {
          reference: "Patient/347",
        },
      },
      search: {
        mode: "match",
        score: 1,
      },
    },
    {
      fullUrl: "https://example.com/base/Medication/example",
      resource: {
        resourceType: "Medication",
        id: "example",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p></div>',
        },
      },
      search: {
        mode: "include",
      },
    },
  ],
} as const;

export const BundleReferences: Bundle = {
  resourceType: "Bundle",
  id: "bundle-references",
  type: "collection",
  entry: [
    {
      fullUrl: "http://example.org/fhir/Patient/23",
      resource: {
        resourceType: "Patient",
        id: "23",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 23</p><p><b>identifier</b>: 1234567</p></div>',
        },
        identifier: [
          {
            system: "http://example.org/ids",
            value: "1234567",
          },
        ],
      },
    },
    {
      fullUrl: "urn:uuid:04121321-4af5-424c-a0e1-ed3aab1c349d",
      resource: {
        resourceType: "Patient",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p></div>',
        },
      },
    },
    {
      fullUrl: "http://example.org/fhir/Observation/123",
      resource: {
        resourceType: "Observation",
        id: "123",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 123</p><p><b>status</b>: final</p><p><b>code</b>: Glucose [Moles/volume] in Blood <span>(Details : {LOINC code '15074-8' = 'Glucose [Moles/volume] in Blood', given as 'Glucose [Moles/volume] in Blood'})</span></p><p><b>subject</b>: <a>Patient/23</a></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "15074-8",
              display: "Glucose [Moles/volume] in Blood",
            },
          ],
        },
        subject: {
          reference: "Patient/23",
        },
      },
    },
    {
      fullUrl: "http://example.org/fhir/Observation/124",
      resource: {
        resourceType: "Observation",
        id: "124",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 124</p><p><b>status</b>: final</p><p><b>code</b>: Glucose [Moles/volume] in Blood <span>(Details : {LOINC code '15074-8' = 'Glucose [Moles/volume] in Blood', given as 'Glucose [Moles/volume] in Blood'})</span></p><p><b>subject</b>: <a>http://example.org/fhir/Patient/23</a></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "15074-8",
              display: "Glucose [Moles/volume] in Blood",
            },
          ],
        },
        subject: {
          reference: "http://example.org/fhir/Patient/23",
        },
      },
    },
    {
      fullUrl: "http://example.org/fhir/Observation/12",
      resource: {
        resourceType: "Observation",
        id: "12",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 12</p><p><b>status</b>: final</p><p><b>code</b>: Glucose [Moles/volume] in Blood <span>(Details : {LOINC code '15074-8' = 'Glucose [Moles/volume] in Blood', given as 'Glucose [Moles/volume] in Blood'})</span></p><p><b>subject</b>: <a>urn:uuid:04121321-4af5-424c-a0e1-ed3aab1c349d</a></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "15074-8",
              display: "Glucose [Moles/volume] in Blood",
            },
          ],
        },
        subject: {
          reference: "urn:uuid:04121321-4af5-424c-a0e1-ed3aab1c349d",
        },
      },
    },
    {
      fullUrl: "http://example.org/fhir/Observation/14",
      resource: {
        resourceType: "Observation",
        id: "14",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 14</p><p><b>status</b>: final</p><p><b>code</b>: Glucose [Moles/volume] in Blood <span>(Details : {LOINC code '15074-8' = 'Glucose [Moles/volume] in Blood', given as 'Glucose [Moles/volume] in Blood'})</span></p><p><b>subject</b>: <a>http://example.org/fhir-2/Patient/1</a></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "15074-8",
              display: "Glucose [Moles/volume] in Blood",
            },
          ],
        },
        subject: {
          reference: "http://example.org/fhir-2/Patient/1",
        },
      },
    },
    {
      fullUrl: "http://example.org/fhir-2/Observation/14",
      resource: {
        resourceType: "Observation",
        id: "14",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 14</p><p><b>status</b>: final</p><p><b>code</b>: Glucose [Moles/volume] in Blood <span>(Details : {LOINC code '15074-8' = 'Glucose [Moles/volume] in Blood', given as 'Glucose [Moles/volume] in Blood'})</span></p><p><b>subject</b>: <a>Patient/23</a></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "15074-8",
              display: "Glucose [Moles/volume] in Blood",
            },
          ],
        },
        subject: {
          reference: "Patient/23",
        },
      },
    },
    {
      fullUrl: "http://example.org/fhir/Patient/45",
      resource: {
        resourceType: "Patient",
        id: "45",
        meta: {
          versionId: "1",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 45</p><p><b>meta</b>: </p><p><b>name</b>: Name 1</p></div>',
        },
        name: [
          {
            text: "Name 1",
          },
        ],
      },
    },
    {
      fullUrl: "http://example.org/fhir/Patient/45",
      resource: {
        resourceType: "Patient",
        id: "45",
        meta: {
          versionId: "2",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 45</p><p><b>meta</b>: </p><p><b>name</b>: Name 2</p></div>',
        },
        name: [
          {
            text: "Name 2",
          },
        ],
      },
    },
    {
      fullUrl: "http://example.org/fhir/Observation/47",
      resource: {
        resourceType: "Observation",
        id: "47",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 47</p><p><b>status</b>: final</p><p><b>code</b>: Glucose [Moles/volume] in Blood <span>(Details : {LOINC code '15074-8' = 'Glucose [Moles/volume] in Blood', given as 'Glucose [Moles/volume] in Blood'})</span></p><p><b>subject</b>: <a>Patient/45/_history/2</a></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "15074-8",
              display: "Glucose [Moles/volume] in Blood",
            },
          ],
        },
        subject: {
          reference: "Patient/45/_history/2",
        },
      },
    },
    {
      fullUrl: "http://example.org/fhir/Observation/48",
      resource: {
        resourceType: "Observation",
        id: "48",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 48</p><p><b>status</b>: final</p><p><b>code</b>: Glucose [Moles/volume] in Blood <span>(Details : {LOINC code '15074-8' = 'Glucose [Moles/volume] in Blood', given as 'Glucose [Moles/volume] in Blood'})</span></p><p><b>subject</b>: </p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "15074-8",
              display: "Glucose [Moles/volume] in Blood",
            },
          ],
        },
        subject: {
          identifier: {
            system: "http://example.org/ids",
            value: "1234567",
          },
        },
      },
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

export const BundleRequestMedsallergies: Bundle = {
  resourceType: "Bundle",
  id: "bundle-request-medsallergies",
  type: "batch",
  entry: [
    {
      request: {
        method: "GET",
        url: "/Patient/example",
      },
    },
    {
      request: {
        method: "GET",
        url: "/MedicationStatement?patient=example&_list=$current-medications",
      },
    },
    {
      request: {
        method: "GET",
        url: "/AllergyIntolerance?patient=example&_list=$current-allergies",
      },
    },
    {
      request: {
        method: "GET",
        url: "/Condition?patient=example&_list=$current-problems",
      },
    },
    {
      request: {
        method: "GET",
        url: "/MedicationStatement?patient=example&notgiven:not=true",
      },
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

export const BundleRequestSimplesummary: Bundle = {
  resourceType: "Bundle",
  id: "bundle-request-simplesummary",
  type: "batch",
  entry: [
    {
      request: {
        method: "GET",
        url: "/Patient/example",
      },
    },
    {
      request: {
        method: "GET",
        url: "/Condition?patient=example",
      },
    },
    {
      request: {
        method: "GET",
        url: "/MedicationStatement?patient=example",
      },
    },
    {
      request: {
        method: "GET",
        url: "/Observation?patient=example&code=http://loinc.org|55284-4&date=ge2015-01-01",
      },
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

export const BundleResponseMedsallergies: Bundle = {
  resourceType: "Bundle",
  id: "bundle-response-medsallergies",
  type: "batch-response",
  entry: [
    {
      resource: {
        resourceType: "Patient",
        id: "example",
        meta: {
          versionId: "1",
          lastUpdated: "2018-11-12T03:35:20.715Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n                        <table>\n                            <tbody>\n                                <tr>\n                                    <td>Name</td>\n                                    <td>Peter James \n                                        <b>Chalmers</b> (&quot;Jim&quot;)\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>Address</td>\n                                    <td>534 Erewhon, Pleasantville, Vic, 3999</td>\n                                </tr>\n                                <tr>\n                                    <td>Contacts</td>\n                                    <td>Home: unknown. Work: (03) 5555 6473</td>\n                                </tr>\n                                <tr>\n                                    <td>Id</td>\n                                    <td>MRN: 12345 (Acme Healthcare)</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>',
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
      },
      response: {
        status: "200",
        etag: "W/1",
        lastModified: "2018-11-12T03:35:20.717Z",
      },
    },
    {
      resource: {
        resourceType: "Bundle",
        id: "5bdf95d0-24a6-4024-95f5-d546fb479b",
        meta: {
          lastUpdated: "2018-11-12T05:42:16.086Z",
        },
        type: "searchset",
        total: 0,
        link: [
          {
            relation: "self",
            url: "http://local.fhir.org:960/r4/MedicationStatement?_format=application/fhir+xml&search-id=804eee4a-0a54-4414-9c07-169952f929&&patient=example&_list=%24current%2Dmedications&_sort=_id",
          },
        ],
      },
      response: {
        status: "200",
        etag: "W/1",
        lastModified: "2018-11-12T03:35:20.717Z",
      },
    },
    {
      resource: {
        resourceType: "Bundle",
        id: "0c11a91c-3638-4d58-8cf1-40e60f43c6",
        meta: {
          lastUpdated: "2018-11-12T05:42:16.209Z",
        },
        type: "searchset",
        total: 0,
        link: [
          {
            relation: "self",
            url: "http://local.fhir.org:960/r4/AllergyIntolerance?_format=application/fhir+xml&search-id=b1981f8a-4139-4db6-923d-77d764c990&&patient=example&_list=%24current%2Dallergies&_sort=_id",
          },
        ],
      },
      response: {
        status: "200",
        etag: "W/1",
        lastModified: "2018-11-12T03:35:20.717Z",
      },
    },
    {
      resource: {
        resourceType: "Bundle",
        id: "19f0fa29-f8fe-4b07-b035-f488893f06",
        meta: {
          lastUpdated: "2018-11-12T05:42:16.279Z",
        },
        type: "searchset",
        total: 0,
        link: [
          {
            relation: "self",
            url: "http://local.fhir.org:960/r4/Condition?_format=application/fhir+xml&search-id=4d097c43-54aa-4157-b500-be22208dd0&&patient=example&_list=%24current%2Dproblems&_sort=_id",
          },
        ],
      },
      response: {
        status: "200",
        etag: "W/1",
        lastModified: "2018-11-12T03:35:20.717Z",
      },
    },
    {
      resource: {
        resourceType: "Bundle",
        id: "dff8ab42-33f9-42ec-88c5-83d3f05323",
        meta: {
          lastUpdated: "2018-11-12T05:42:16.351Z",
        },
        type: "searchset",
        total: 0,
        link: [
          {
            relation: "self",
            url: "http://local.fhir.org:960/r4/MedicationStatement?_format=application/fhir+xml&search-id=31d4af75-cdcf-4f85-9666-4bafadebb5&&patient=example&_sort=_id",
          },
        ],
      },
      response: {
        status: "200",
        etag: "W/1",
        lastModified: "2018-11-12T03:35:20.717Z",
      },
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

export const BundleResponseSimplesummary: Bundle = {
  resourceType: "Bundle",
  id: "bundle-response-simplesummary",
  type: "batch-response",
  entry: [
    {
      resource: {
        resourceType: "Patient",
        id: "example",
        meta: {
          versionId: "1",
          lastUpdated: "2018-11-12T03:35:20.715Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n                        <table>\n                            <tbody>\n                                <tr>\n                                    <td>Name</td>\n                                    <td>Peter James \n                                        <b>Chalmers</b> (&quot;Jim&quot;)\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>Address</td>\n                                    <td>534 Erewhon, Pleasantville, Vic, 3999</td>\n                                </tr>\n                                <tr>\n                                    <td>Contacts</td>\n                                    <td>Home: unknown. Work: (03) 5555 6473</td>\n                                </tr>\n                                <tr>\n                                    <td>Id</td>\n                                    <td>MRN: 12345 (Acme Healthcare)</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>',
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
      },
      response: {
        status: "200",
        etag: "W/1",
        lastModified: "2018-11-12T03:35:20.717Z",
      },
    },
    {
      resource: {
        resourceType: "Bundle",
        id: "2c2fb771-6c4b-4df8-89b2-47a1178e7c",
        meta: {
          lastUpdated: "2018-11-12T05:42:49.445Z",
        },
        type: "searchset",
        total: 4,
        link: [
          {
            relation: "self",
            url: "http://local.fhir.org:960/r4/Condition?_format=application/fhir+xml&search-id=36aac5c3-a9f6-4c3a-bf94-24d32ed604&&patient=example&_sort=_id",
          },
        ],
        entry: [
          {
            fullUrl: "http://local.fhir.org:960/r4/Condition/example",
            resource: {
              resourceType: "Condition",
              id: "example",
              meta: {
                versionId: "1",
                lastUpdated: "2018-11-12T03:34:46.552Z",
              },
              text: {
                status: "generated",
                div: '<div xmlns="http://www.w3.org/1999/xhtml">Severe burn of left ear (Date: 24-May 2012)</div>',
              },
              clinicalStatus: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/condition-clinical",
                    code: "active",
                  },
                ],
              },
              verificationStatus: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/condition-ver-status",
                    code: "confirmed",
                  },
                ],
              },
              category: [
                {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/condition-category",
                      code: "encounter-diagnosis",
                      display: "Encounter Diagnosis",
                    },
                    {
                      system: "http://snomed.info/sct",
                      code: "439401001",
                      display: "Diagnosis",
                    },
                  ],
                },
              ],
              severity: {
                coding: [
                  {
                    system: "http://snomed.info/sct",
                    code: "24484000",
                    display: "Severe",
                  },
                ],
              },
              code: {
                coding: [
                  {
                    system: "http://snomed.info/sct",
                    code: "39065001",
                    display: "Burn of ear",
                  },
                ],
                text: "Burnt Ear",
              },
              bodySite: [
                {
                  coding: [
                    {
                      system: "http://snomed.info/sct",
                      code: "49521004",
                      display: "Left external ear structure",
                    },
                  ],
                  text: "Left Ear",
                },
              ],
              subject: {
                reference: "Patient/example",
              },
              onsetDateTime: "2012-05-24",
            },
            search: {
              mode: "match",
            },
          },
          {
            fullUrl: "http://local.fhir.org:960/r4/Condition/example2",
            resource: {
              resourceType: "Condition",
              id: "example2",
              meta: {
                versionId: "1",
                lastUpdated: "2018-11-12T03:34:46.626Z",
              },
              text: {
                status: "generated",
                div: '<div xmlns="http://www.w3.org/1999/xhtml">Mild Asthma (Date: 12-Nov 2012)</div>',
              },
              clinicalStatus: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/condition-clinical",
                    code: "active",
                  },
                ],
              },
              verificationStatus: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/condition-ver-status",
                    code: "confirmed",
                  },
                ],
              },
              category: [
                {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/condition-category",
                      code: "problem-list-item",
                      display: "Problem List Item",
                    },
                  ],
                },
              ],
              severity: {
                coding: [
                  {
                    system: "http://snomed.info/sct",
                    code: "255604002",
                    display: "Mild",
                  },
                ],
              },
              code: {
                text: "Asthma",
              },
              subject: {
                reference: "Patient/example",
              },
              onsetString: "approximately November 2012",
            },
            search: {
              mode: "match",
            },
          },
          {
            fullUrl: "http://local.fhir.org:960/r4/Condition/family-history",
            resource: {
              resourceType: "Condition",
              id: "family-history",
              meta: {
                versionId: "1",
                lastUpdated: "2018-11-12T03:34:47.274Z",
              },
              text: {
                status: "generated",
                div: '<div xmlns="http://www.w3.org/1999/xhtml">Family history of cancer of colon</div>',
              },
              clinicalStatus: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/condition-clinical",
                    code: "active",
                  },
                ],
              },
              category: [
                {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/condition-category",
                      code: "problem-list-item",
                      display: "Problem List Item",
                    },
                  ],
                },
              ],
              code: {
                coding: [
                  {
                    system: "http://snomed.info/sct",
                    code: "312824007",
                    display: "Family history of cancer of colon",
                  },
                ],
              },
              subject: {
                reference: "Patient/example",
              },
            },
            search: {
              mode: "match",
            },
          },
          {
            fullUrl: "http://local.fhir.org:960/r4/Condition/stroke",
            resource: {
              resourceType: "Condition",
              id: "stroke",
              meta: {
                versionId: "1",
                lastUpdated: "2018-11-12T03:34:47.337Z",
              },
              text: {
                status: "generated",
                div: '<div xmlns="http://www.w3.org/1999/xhtml">Ischemic stroke, July 18, 2010</div>',
              },
              clinicalStatus: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/condition-clinical",
                    code: "active",
                  },
                ],
              },
              verificationStatus: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/condition-ver-status",
                    code: "confirmed",
                  },
                ],
              },
              category: [
                {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/condition-category",
                      code: "encounter-diagnosis",
                      display: "Encounter Diagnosis",
                    },
                  ],
                },
              ],
              code: {
                coding: [
                  {
                    system: "http://snomed.info/sct",
                    code: "422504002",
                    display: "Ischemic stroke (disorder)",
                  },
                ],
                text: "Stroke",
              },
              subject: {
                reference: "Patient/example",
              },
              onsetDateTime: "2010-07-18",
            },
            search: {
              mode: "match",
            },
          },
        ],
      },
      response: {
        status: "200",
        etag: "W/1",
        lastModified: "2018-11-12T03:35:20.717Z",
      },
    },
    {
      resource: {
        resourceType: "Bundle",
        id: "86846953-60dd-47ba-b37a-7e7d7e3312",
        meta: {
          lastUpdated: "2018-11-12T05:42:49.476Z",
        },
        type: "searchset",
        total: 0,
        link: [
          {
            relation: "self",
            url: "http://local.fhir.org:960/r4/MedicationStatement?_format=application/fhir+xml&search-id=0f08b401-5120-4444-9a83-3fd21d33df&&patient=example&_sort=_id",
          },
        ],
      },
      response: {
        status: "200",
        etag: "W/1",
        lastModified: "2018-11-12T03:35:20.717Z",
      },
    },
    {
      resource: {
        resourceType: "Bundle",
        id: "4bafe9c4-ba53-4d7b-89d0-d92ee0859a",
        meta: {
          lastUpdated: "2018-11-12T05:42:49.498Z",
        },
        type: "searchset",
        total: 0,
        link: [
          {
            relation: "self",
            url: "http://local.fhir.org:960/r4/Observation?_format=application/fhir+xml&search-id=50df0414-1375-48a4-ba1e-66f580360a&&patient=example&code=http%3A//loinc.org%7C55284%2D4&date=ge2015%2D01%2D01&_sort=_id",
          },
        ],
      },
      response: {
        status: "200",
        etag: "W/1",
        lastModified: "2018-11-12T03:35:20.717Z",
      },
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

export const BundleResponse: Bundle = {
  resourceType: "Bundle",
  id: "bundle-response",
  meta: {
    lastUpdated: "2014-08-18T01:43:33Z",
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
  type: "transaction-response",
  entry: [
    {
      fullUrl: "http://example.org/fhir/Patient/12423",
      resource: {
        resourceType: "Patient",
        id: "12423",
        meta: {
          versionId: "1",
          lastUpdated: "2014-08-18T01:43:31Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Some narrative</div>',
        },
        active: true,
        name: [
          {
            use: "official",
            family: "Chalmers",
            given: ["Peter", "James"],
          },
        ],
        gender: "male",
        birthDate: "1974-12-25",
      },
      response: {
        status: "201 Created",
        location: "Patient/12423/_history/1",
        etag: 'W/"1"',
        lastModified: "2014-08-18T01:43:33Z",
        outcome: {
          resourceType: "OperationOutcome",
          issue: [
            {
              severity: "warning",
              code: "not-found",
              details: {
                text: "The Managing organization was not known and was deleted",
              },
              expression: ["Patient.managingOrganization"],
            },
          ],
        },
      },
    },
    {
      response: {
        status: "200 OK",
      },
    },
    {
      response: {
        status: "200 OK",
        location: "Patient/123/_history/4",
        etag: 'W/"4"',
      },
    },
    {
      response: {
        status: "201 Created",
        location: "Patient/12424/_history/1",
        etag: 'W/"1"',
      },
    },
    {
      response: {
        status: "200 ok",
        location: "Patient/123a/_history/3",
        etag: 'W/"3"',
      },
    },
    {
      response: {
        status: "202 Accepted",
      },
    },
    {
      response: {
        status: "DELETE",
      },
    },
    {
      fullUrl: "urn:uuid:7f9724ed-ef8d-4434-aacb-41869db83233",
      resource: {
        resourceType: "Parameters",
        parameter: [
          {
            name: "name",
            valueString: "LOINC",
          },
        ],
      },
      response: {
        status: "200 ok",
      },
    },
    {
      fullUrl: "urn:uuid:e7bcef8e-5ef9-4d2b-87d5-b42b1eec9125",
      resource: {
        resourceType: "Bundle",
        id: "fb6ed6cb-324e-4588-87cd-0c92c68986ca",
        type: "searchset",
      },
      response: {
        status: "200 OK",
      },
    },
    {
      response: {
        status: "304 Not Modified",
      },
    },
  ],
} as const;

export const BundleSearchWarning: Bundle = {
  resourceType: "Bundle",
  id: "bundle-search-warning",
  meta: {
    lastUpdated: "2017-03-14T08:23:30+11:00",
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
  type: "searchset",
  total: 0,
  link: [
    {
      relation: "self",
      url: "https://example.org/fhir/Observation?patient.identifier=http://example.com/fhir/identifier/mrn|123456",
    },
  ],
  entry: [
    {
      resource: {
        resourceType: "OperationOutcome",
        id: "warning",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">There is no matching patient for MRN 123456</div>',
        },
        issue: [
          {
            severity: "warning",
            code: "not-found",
            details: {
              text: "There is no matching patient for MRN 123456",
            },
          },
        ],
      },
      search: {
        mode: "outcome",
      },
    },
  ],
} as const;

export const BundleTransaction: Bundle = {
  resourceType: "Bundle",
  id: "bundle-transaction",
  meta: {
    lastUpdated: "2014-08-18T01:43:30Z",
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
  type: "transaction",
  entry: [
    {
      fullUrl: "urn:uuid:61ebe359-bfdc-4613-8bf2-c5e300945f0a",
      resource: {
        resourceType: "Patient",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Some narrative</div>',
        },
        active: true,
        name: [
          {
            use: "official",
            family: "Chalmers",
            given: ["Peter", "James"],
          },
        ],
        gender: "male",
        birthDate: "1974-12-25",
      },
      request: {
        method: "POST",
        url: "Patient",
      },
    },
    {
      fullUrl: "urn:uuid:88f151c0-a954-468a-88bd-5ae15c08e059",
      resource: {
        resourceType: "Patient",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Some narrative</div>',
        },
        identifier: [
          {
            system: "http:/example.org/fhir/ids",
            value: "234234",
          },
        ],
        active: true,
        name: [
          {
            use: "official",
            family: "Chalmers",
            given: ["Peter", "James"],
          },
        ],
        gender: "male",
        birthDate: "1974-12-25",
      },
      request: {
        method: "POST",
        url: "Patient",
        ifNoneExist: "identifier=http:/example.org/fhir/ids|234234",
      },
    },
    {
      fullUrl: "http://example.org/fhir/Patient/123",
      resource: {
        resourceType: "Patient",
        id: "123",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Some narrative</div>',
        },
        active: true,
        name: [
          {
            use: "official",
            family: "Chalmers",
            given: ["Peter", "James"],
          },
        ],
        gender: "male",
        birthDate: "1974-12-25",
      },
      request: {
        method: "PUT",
        url: "Patient/123",
      },
    },
    {
      fullUrl: "urn:uuid:74891afc-ed52-42a2-bcd7-f13d9b60f096",
      resource: {
        resourceType: "Patient",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Some narrative</div>',
        },
        identifier: [
          {
            system: "http:/example.org/fhir/ids",
            value: "456456",
          },
        ],
        active: true,
        name: [
          {
            use: "official",
            family: "Chalmers",
            given: ["Peter", "James"],
          },
        ],
        gender: "male",
        birthDate: "1974-12-25",
      },
      request: {
        method: "PUT",
        url: "Patient?identifier=http:/example.org/fhir/ids|456456",
      },
    },
    {
      fullUrl: "http://example.org/fhir/Patient/123a",
      resource: {
        resourceType: "Patient",
        id: "123a",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Some narrative</div>',
        },
        active: true,
        name: [
          {
            use: "official",
            family: "Chalmers",
            given: ["Peter", "James"],
          },
        ],
        gender: "male",
        birthDate: "1974-12-25",
      },
      request: {
        method: "PUT",
        url: "Patient/123a",
        ifMatch: 'W/"2"',
      },
    },
    {
      request: {
        method: "DELETE",
        url: "Patient/234",
      },
    },
    {
      request: {
        method: "DELETE",
        url: "Patient?identifier=123456",
      },
    },
    {
      fullUrl: "urn:uuid:79378cb8-8f58-48e8-a5e8-60ac2755b674",
      resource: {
        resourceType: "Parameters",
        parameter: [
          {
            name: "coding",
            valueCoding: {
              system: "http://loinc.org",
              code: "1963-8",
            },
          },
        ],
      },
      request: {
        method: "POST",
        url: "ValueSet/$lookup",
      },
    },
    {
      request: {
        method: "GET",
        url: "Patient?name=peter",
      },
    },
    {
      request: {
        method: "GET",
        url: "Patient/12334",
        ifNoneMatch: 'W/"4"',
        ifModifiedSince: "2015-08-31T08:14:33+10:00",
      },
    },
  ],
} as const;

export const DiagnosticreportExampleF001Bloodexam: Bundle = {
  resourceType: "Bundle",
  id: "f001",
  type: "collection",
  entry: [
    {
      fullUrl: "https://example.com/base/DiagnosticReport/f001",
      resource: {
        resourceType: "DiagnosticReport",
        id: "f001",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f001</p><p><b>identifier</b>: nr1239044 (OFFICIAL)</p><p><b>basedOn</b>: <a>ServiceRequest/req</a></p><p><b>status</b>: final</p><p><b>category</b>: Haematology test <span>(Details : {SNOMED CT code '252275004' = 'Haematology test', given as 'Haematology test'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'HM' = 'Hematology)</span></p><p><b>code</b>: Complete blood count (hemogram) panel - Blood by Automated count <span>(Details : {LOINC code '58410-2' = 'Complete blood count (hemogram) panel - Blood by Automated count', given as 'Complete blood count (hemogram) panel - Blood by Automated count'})</span></p><p><b>subject</b>: <a>P. van den Heuvel</a></p><p><b>issued</b>: 15/05/2013 7:32:52 PM</p><p><b>performer</b>: <a>Burgers University Medical Centre</a></p><p><b>result</b>: </p><ul><li><a>Observation/f001</a></li><li><a>Observation/f002</a></li><li><a>Observation/f003</a></li><li><a>Observation/f004</a></li><li><a>Observation/f005</a></li></ul><p><b>conclusion</b>: Core lab</p></div>",
        },
        identifier: [
          {
            use: "official",
            system: "http://www.bmc.nl/zorgportal/identifiers/reports",
            value: "nr1239044",
          },
        ],
        basedOn: [
          {
            reference: "ServiceRequest/req",
          },
        ],
        status: "final",
        category: [
          {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "252275004",
                display: "Haematology test",
              },
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0074",
                code: "HM",
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "58410-2",
              display:
                "Complete blood count (hemogram) panel - Blood by Automated count",
            },
          ],
        },
        subject: {
          reference: "Patient/f001",
          display: "P. van den Heuvel",
        },
        issued: "2013-05-15T19:32:52+01:00",
        performer: [
          {
            reference: "Organization/f001",
            display: "Burgers University Medical Centre",
          },
        ],
        result: [
          {
            reference: "Observation/f001",
          },
          {
            reference: "Observation/f002",
          },
          {
            reference: "Observation/f003",
          },
          {
            reference: "Observation/f004",
          },
          {
            reference: "Observation/f005",
          },
        ],
        conclusion: "Core lab",
      },
    },
    {
      fullUrl: "https://example.com/base/ServiceRequest/req",
      resource: {
        resourceType: "ServiceRequest",
        id: "req",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: req</p><p><b>identifier</b>: L2381</p><p><b>status</b>: active</p><p><b>intent</b>: original-order</p><p><b>code</b>: Complete blood count (hemogram) panel - Blood by Automated count <span>(Details : {LOINC code '58410-2' = 'Complete blood count (hemogram) panel - Blood by Automated count', given as 'Complete blood count (hemogram) panel - Blood by Automated count'})</span></p><p><b>subject</b>: <a>P. van den Heuvel</a></p><p><b>encounter</b>: <a>Encounter/f001</a></p><p><b>requester</b>: <a>E.van den Broek</a></p><p><b>note</b>: patient almost fainted during procedure</p></div>",
        },
        extension: [
          {
            url: "http://example.org/bodysitecode",
            valueCodeableConcept: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "14975008",
                  display: "Forearm structure",
                },
              ],
            },
          },
        ],
        identifier: [
          {
            system: "http://www.bmc.nl/zorgportal/identifiers/labresults",
            value: "L2381",
          },
        ],
        status: "active",
        intent: "original-order",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "58410-2",
              display:
                "Complete blood count (hemogram) panel - Blood by Automated count",
            },
          ],
        },
        subject: {
          reference: "Patient/f001",
          display: "P. van den Heuvel",
        },
        encounter: {
          reference: "Encounter/f001",
        },
        requester: {
          reference: "Practitioner/f001",
          display: "E.van den Broek",
        },
        note: [
          {
            text: "patient almost fainted during procedure",
          },
        ],
      },
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

export const DiagnosticreportExampleF202Bloodculture: Bundle = {
  resourceType: "Bundle",
  id: "f202",
  type: "collection",
  entry: [
    {
      fullUrl: "https://example.com/base/DiagnosticReport/f202",
      resource: {
        resourceType: "DiagnosticReport",
        id: "f202",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f202</p><p><b>basedOn</b>: <a>ServiceRequest/req</a></p><p><b>status</b>: final</p><p><b>category</b>: Laboratory test <span>(Details : {SNOMED CT code '15220000' = 'Laboratory test', given as 'Laboratory test'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'LAB' = 'Laboratory)</span></p><p><b>code</b>: Blood culture for bacteria, including anaerobic screen <span>(Details : {SNOMED CT code '104177005' = 'Blood culture for bacteria, including anaerobic screen', given as 'Blood culture for bacteria, including anaerobic screen'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>issued</b>: 11/03/2013 10:28:00 AM</p><p><b>performer</b>: <a>AUMC</a></p><p><b>result</b>: <a>Results for staphylococcus analysis on Roel's blood culture</a></p><p><b>conclusion</b>: Blood culture tested positive on staphylococcus aureus</p><p><b>conclusionCode</b>: Bacteremia due to staphylococcus <span>(Details : {SNOMED CT code '428763004' = 'Bacteremia due to Staphylococcus aureus', given as 'Bacteremia due to staphylococcus'})</span></p></div>",
        },
        basedOn: [
          {
            reference: "ServiceRequest/req",
          },
        ],
        status: "final",
        category: [
          {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "15220000",
                display: "Laboratory test",
              },
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0074",
                code: "LAB",
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "104177005",
              display: "Blood culture for bacteria, including anaerobic screen",
            },
          ],
        },
        subject: {
          reference: "Patient/f201",
          display: "Roel",
        },
        issued: "2013-03-11T10:28:00+01:00",
        performer: [
          {
            reference: "Organization/f201",
            display: "AUMC",
          },
        ],
        result: [
          {
            reference: "Observation/f206",
            display:
              "Results for staphylococcus analysis on Roel's blood culture",
          },
        ],
        conclusion: "Blood culture tested positive on staphylococcus aureus",
        conclusionCode: [
          {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "428763004",
                display: "Bacteremia due to staphylococcus",
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: "https://example.com/base/ServiceRequest/req",
      resource: {
        resourceType: "ServiceRequest",
        id: "req",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: req</p><p><b>status</b>: active</p><p><b>intent</b>: original-order</p><p><b>code</b>: Blood culture for bacteria, including anaerobic screen <span>(Details : {SNOMED CT code '104177005' = 'Blood culture for bacteria, including anaerobic screen', given as 'Blood culture for bacteria, including anaerobic screen'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>encounter</b>: <a>Roel's encounter on March elevanth 2013</a></p><p><b>requester</b>: <a>Dokter Bronsig</a></p></div>",
        },
        status: "active",
        intent: "original-order",
        code: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "104177005",
              display: "Blood culture for bacteria, including anaerobic screen",
            },
          ],
        },
        subject: {
          reference: "Patient/f201",
          display: "Roel",
        },
        encounter: {
          reference: "Encounter/f203",
          display: "Roel's encounter on March elevanth 2013",
        },
        requester: {
          reference: "Practitioner/f201",
          display: "Dokter Bronsig",
        },
      },
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

export const DiagnosticreportExampleLipids: Bundle = {
  resourceType: "Bundle",
  id: "lipids",
  type: "collection",
  entry: [
    {
      fullUrl: "https://example.com/base/DiagnosticReport/lipids",
      resource: {
        resourceType: "DiagnosticReport",
        id: "lipids",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t\t\t\t<h3>Lipid Report for Wile. E. COYOTE (MRN: 23453) issued 3-Mar 2009 14:26</h3>\n\t\t\t\t\t\t<pre>\nTest                  Units       Value       Reference Range\nCholesterol           mmol/L      6.3         &lt;4.5\nTriglyceride          mmol/L      1.3         &lt;2.0\nHDL Cholesterol       mmol/L      1.3         &gt;1.5\nLDL Chol. (calc)      mmol/L      4.2         &lt;3.0\n      </pre>\n\t\t\t\t\t\t<p>Acme Laboratory, Inc signed: Dr Pete Pathologist</p>\n\t\t\t\t\t</div>',
        },
        identifier: [
          {
            system: "http://acme.com/lab/reports",
            value: "5234342",
          },
        ],
        status: "final",
        category: [
          {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0074",
                code: "HM",
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "24331-1",
              display: "Lipid 1996 panel - Serum or Plasma",
            },
          ],
          text: "Lipid Panel",
        },
        subject: {
          reference: "Patient/pat2",
        },
        effectiveDateTime: "2011-03-04T08:30:00+11:00",
        issued: "2013-01-27T11:45:33+11:00",
        performer: [
          {
            reference: "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
            display: "Acme Laboratory, Inc",
          },
        ],
        result: [
          {
            id: "1",
            reference: "Observation/cholesterol",
          },
          {
            id: "2",
            reference: "Observation/triglyceride",
          },
          {
            id: "3",
            reference: "Observation/hdlcholesterol",
          },
          {
            id: "4",
            reference: "Observation/ldlcholesterol",
          },
        ],
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/cholesterol",
      resource: {
        resourceType: "Observation",
        id: "cholesterol",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: cholesterol</p><p><b>status</b>: final</p><p><b>code</b>: Cholesterol <span>(Details : {LOINC code '35200-5' = 'Cholesterol [Mass or Moles/volume] in Serum or Plasma', given as 'Cholesterol [Moles/​volume] in Serum or Plasma'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 6.3 mmol/L<span> (Details: UCUM code mmol/L = 'mmol/L')</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>High</b></td></tr><tr><td>*</td><td>4.5 mmol/L<span> (Details: UCUM code mmol/L = 'mmol/L')</span></td></tr></table></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "35200-5",
              display: "Cholesterol [Moles/​volume] in Serum or Plasma",
            },
          ],
          text: "Cholesterol",
        },
        subject: {
          reference: "Patient/pat2",
        },
        performer: [
          {
            reference: "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
            display: "Acme Laboratory, Inc",
          },
        ],
        valueQuantity: {
          value: 6.3,
          unit: "mmol/L",
          system: "http://unitsofmeasure.org",
          code: "mmol/L",
        },
        referenceRange: [
          {
            high: {
              value: 4.5,
              unit: "mmol/L",
              system: "http://unitsofmeasure.org",
              code: "mmol/L",
            },
          },
        ],
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/triglyceride",
      resource: {
        resourceType: "Observation",
        id: "triglyceride",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: triglyceride</p><p><b>status</b>: final</p><p><b>code</b>: Triglyceride <span>(Details : {LOINC code '35217-9' = 'Triglyceride [Mass or Moles/volume] in Serum or Plasma', given as 'Triglyceride [Moles/​volume] in Serum or Plasma'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 1.3 mmol/L<span> (Details: UCUM code mmol/L = 'mmol/L')</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>High</b></td></tr><tr><td>*</td><td>2.0 mmol/L<span> (Details: UCUM code mmol/L = 'mmol/L')</span></td></tr></table></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "35217-9",
              display: "Triglyceride [Moles/​volume] in Serum or Plasma",
            },
          ],
          text: "Triglyceride",
        },
        subject: {
          reference: "Patient/pat2",
        },
        performer: [
          {
            reference: "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
            display: "Acme Laboratory, Inc",
          },
        ],
        valueQuantity: {
          value: 1.3,
          unit: "mmol/L",
          system: "http://unitsofmeasure.org",
          code: "mmol/L",
        },
        referenceRange: [
          {
            high: {
              value: 2,
              unit: "mmol/L",
              system: "http://unitsofmeasure.org",
              code: "mmol/L",
            },
          },
        ],
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/hdlcholesterol",
      resource: {
        resourceType: "Observation",
        id: "hdlcholesterol",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: hdlcholesterol</p><p><b>status</b>: final</p><p><b>code</b>: Cholesterol in HDL <span>(Details : {LOINC code '2085-9' = 'Cholesterol in HDL [Mass/volume] in Serum or Plasma', given as 'HDL Cholesterol'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 1.3 mmol/L<span> (Details: UCUM code mmol/L = 'mmol/L')</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td></tr><tr><td>*</td><td>1.5 mmol/L<span> (Details: UCUM code mmol/L = 'mmol/L')</span></td></tr></table></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "2085-9",
              display: "HDL Cholesterol",
            },
          ],
          text: "Cholesterol in HDL",
        },
        subject: {
          reference: "Patient/pat2",
        },
        performer: [
          {
            reference: "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
            display: "Acme Laboratory, Inc",
          },
        ],
        valueQuantity: {
          value: 1.3,
          unit: "mmol/L",
          system: "http://unitsofmeasure.org",
          code: "mmol/L",
        },
        referenceRange: [
          {
            low: {
              value: 1.5,
              unit: "mmol/L",
              system: "http://unitsofmeasure.org",
              code: "mmol/L",
            },
          },
        ],
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/ldlcholesterol",
      resource: {
        resourceType: "Observation",
        id: "ldlcholesterol",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: ldlcholesterol</p><p><b>status</b>: final</p><p><b>code</b>: LDL Chol. (Calc) <span>(Details : {LOINC code '13457-7' = 'Cholesterol in LDL [Mass/volume] in Serum or Plasma by calculation', given as 'Cholesterol in LDL [Mass/volume] in Serum or Plasma by calculation'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 4.6 mmol/L<span> (Details: UCUM code mmol/L = 'mmol/L')</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>High</b></td></tr><tr><td>*</td><td>3.0 mmol/L<span> (Details: UCUM code mmol/L = 'mmol/L')</span></td></tr></table></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "13457-7",
              display:
                "Cholesterol in LDL [Mass/volume] in Serum or Plasma by calculation",
            },
          ],
          text: "LDL Chol. (Calc)",
        },
        subject: {
          reference: "Patient/pat2",
        },
        performer: [
          {
            reference: "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
            display: "Acme Laboratory, Inc",
          },
        ],
        valueQuantity: {
          value: 4.6,
          unit: "mmol/L",
          system: "http://unitsofmeasure.org",
          code: "mmol/L",
        },
        referenceRange: [
          {
            high: {
              value: 3,
              unit: "mmol/L",
              system: "http://unitsofmeasure.org",
              code: "mmol/L",
            },
          },
        ],
      },
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

export const DiagnosticreportExampleLri: Bundle = {
  resourceType: "Bundle",
  id: "lri-example",
  meta: {
    versionId: "1",
    lastUpdated: "2017-06-27T00:52:51Z",
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
  type: "collection",
  entry: [
    {
      fullUrl: "http://test.fhir.org/r4/DiagnosticReport/lri-example",
      resource: {
        resourceType: "DiagnosticReport",
        id: "lri-example",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: lri-example</p><p><b>identifier</b>: Placer Identifier = RP723234, Filler Identifier = 250401, Group = RFP 123456</p><p><b>basedOn</b>: <a>ServiceRequest/example</a></p><p><b>status</b>: final</p><p><b>category</b>: Laboratory <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0074 code 'LAB' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span></p><p><b>code</b>: Aerobic Respiratory Culture, Sputum <span>(Details : {LOINC code '624-7' = 'Bacteria identified in Sputum by Respiratory culture', given as 'Bacteria Spt Resp Cul'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 15/08/2016</p><p><b>issued</b>: 18/08/2016 6:14:35 PM</p><p><b>performer</b>: <a>Organization/example</a></p><p><b>specimen</b>: <a>Specimen/example</a></p><p><b>result</b>: </p><ul><li><a>Normal Flora</a></li><li><a>Klebsiella pneumoniae</a></li><li><a>Staphlyococcuc aureus</a></li><li><a>Many WBCs</a></li><li><a>Moderate Gram Positive Rods</a></li><li><a>Moderate Gram Positive Cocci in Chains</a></li><li><a>Many Gram Negative Rods</a></li></ul></div>",
        },
        identifier: [
          {
            type: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                  code: "PLAC",
                  display: "Placer Identifier",
                },
              ],
            },
            system: "https://acme.org/identifiers",
            value: "RP723234",
          },
          {
            type: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                  code: "FILL",
                  display: "Filler Identifier",
                },
              ],
            },
            system: "https://acme.org/identifiers",
            value: "250401",
          },
          {
            type: {
              coding: [
                {
                  system: "https://acme.org/identifiers",
                  code: "GRP",
                  display: "Group",
                },
              ],
            },
            system: "https://acme.org/identifiers",
            value: "RFP 123456",
          },
        ],
        basedOn: [
          {
            reference: "ServiceRequest/example",
          },
        ],
        status: "final",
        category: [
          {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0074",
                code: "LAB",
                display: "Laboratory",
              },
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0074",
                code: "MB",
                display: "microbiology",
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "624-7",
              display: "Bacteria Spt Resp Cul",
            },
          ],
          text: "Aerobic Respiratory Culture, Sputum",
        },
        subject: {
          reference: "Patient/example",
        },
        effectiveDateTime: "2016-08-15",
        issued: "2016-08-18T18:14:35Z",
        performer: [
          {
            reference: "Organization/example",
          },
        ],
        specimen: [
          {
            reference: "Specimen/example",
          },
        ],
        result: [
          {
            reference: "Observation/organism1",
            display: "Normal Flora",
          },
          {
            reference: "Observation/organism2",
            display: "Klebsiella pneumoniae",
          },
          {
            reference: "Observation/organism3",
            display: "Staphlyococcuc aureus",
          },
          {
            reference: "Observation/gramstain1",
            display: "Many WBCs",
          },
          {
            reference: "Observation/gramstain2",
            display: "Moderate Gram Positive Rods",
          },
          {
            reference: "Observation/gramstain3",
            display: "Moderate Gram Positive Cocci in Chains",
          },
          {
            reference: "Observation/gramstain4",
            display: "Many Gram Negative Rods",
          },
        ],
      },
    },
    {
      fullUrl: "http://test.fhir.org/r4/Observation/lri-gramstain1",
      resource: {
        resourceType: "Observation",
        id: "gramstain1",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: gramstain1</p><p><b>identifier</b>: gramstain1</p><p><b>status</b>: final</p><p><b>category</b>: Micro <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span>, Result <span>(Details : {urn:oid:2.16.840.1.113883.9.195.4.61 code 'RSLT' = 'RSLT', given as 'Result'})</span></p><p><b>code</b>: Gram Stain <span>(Details : {LOINC code '664-3' = 'Microscopic observation [Identifier] in Unspecified specimen by Gram stain', given as 'Gram Stn XXX'}; {https://acme.org/codes code 'GMST' = 'GMST', given as 'Gram Stain'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/08/2016</p><p><b>issued</b>: 18/08/2016 11:06:32 PM</p><p><b>performer</b>: <a>Organization/example</a></p><blockquote><p><b>component</b></p><p><b>code</b>: Gram Stain <span>(Details : {LOINC code '664-3' = 'Microscopic observation [Identifier] in Unspecified specimen by Gram stain', given as 'Gram Stn XXX'})</span></p><p><b>value</b>: Many <span>(Details : {https://acme.org/codes code 'MNY' = 'MNY', given as 'Many'})</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Gram Stain <span>(Details : {LOINC code '664-3' = 'Microscopic observation [Identifier] in Unspecified specimen by Gram stain', given as 'Gram Stn XXX'})</span></p><p><b>value</b>: WBCS <span>(Details : {https://acme.org/codes code 'WBCS' = 'WBCS', given as 'WBCS'})</span></p></blockquote></div>",
        },
        identifier: [
          {
            system: "https://acme.org/identifiers",
            value: "gramstain1",
          },
        ],
        status: "final",
        category: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/observation-category",
                code: "laboratory",
                display: "Laboratory",
              },
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0074",
                code: "MB",
                display: "microbiology",
              },
            ],
            text: "Micro",
          },
          {
            coding: [
              {
                system: "urn:oid:2.16.840.1.113883.9.195.4.61",
                code: "RSLT",
                display: "Result",
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "664-3",
              display: "Gram Stn XXX",
            },
            {
              system: "https://acme.org/codes",
              code: "GMST",
              display: "Gram Stain",
            },
          ],
          text: "Gram Stain",
        },
        subject: {
          reference: "Patient/example",
        },
        effectiveDateTime: "2016-08-18",
        issued: "2016-08-18T23:06:32Z",
        performer: [
          {
            reference: "Organization/example",
          },
        ],
        component: [
          {
            code: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "664-3",
                  display: "Gram Stn XXX",
                },
              ],
              text: "Gram Stain",
            },
            valueCodeableConcept: {
              coding: [
                {
                  system: "https://acme.org/codes",
                  code: "MNY",
                  display: "Many",
                },
              ],
              text: "Many",
            },
          },
          {
            code: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "664-3",
                  display: "Gram Stn XXX",
                },
              ],
              text: "Gram Stain",
            },
            valueCodeableConcept: {
              coding: [
                {
                  system: "https://acme.org/codes",
                  code: "WBCS",
                  display: "WBCS",
                },
              ],
              text: "WBCS",
            },
          },
        ],
      },
    },
    {
      fullUrl: "http://test.fhir.org/r4/Observation/lri-gramstain2",
      resource: {
        resourceType: "Observation",
        id: "gramstain2",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: gramstain2</p><p><b>identifier</b>: gramstain2</p><p><b>status</b>: final</p><p><b>category</b>: Micro <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span>, Result <span>(Details : {urn:oid:2.16.840.1.113883.9.195.4.61 code 'RSLT' = 'RSLT', given as 'Result'})</span></p><p><b>code</b>: Gram Stain <span>(Details : {LOINC code '664-3' = 'Microscopic observation [Identifier] in Unspecified specimen by Gram stain', given as 'Gram Stn XXX'}; {https://acme.org/codes code 'GMST' = 'GMST', given as 'Gram Stain'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/08/2016</p><p><b>issued</b>: 18/08/2016 11:06:32 PM</p><p><b>performer</b>: <a>Organization/example</a></p><blockquote><p><b>component</b></p><p><b>code</b>: Gram Stain <span>(Details : {LOINC code '664-3' = 'Microscopic observation [Identifier] in Unspecified specimen by Gram stain', given as 'Gram Stn XXX'})</span></p><p><b>value</b>: Moderate <span>(Details : {https://acme.org/codes code 'MOD' = 'MOD', given as 'Moderate'})</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Gram Stain <span>(Details : {LOINC code '664-3' = 'Microscopic observation [Identifier] in Unspecified specimen by Gram stain', given as 'Gram Stn XXX'})</span></p><p><b>value</b>: Gram Positive Rods <span>(Details : {https://acme.org/codes code 'GPR' = 'GPR', given as 'Moderate'})</span></p></blockquote></div>",
        },
        identifier: [
          {
            system: "https://acme.org/identifiers",
            value: "gramstain2",
          },
        ],
        status: "final",
        category: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/observation-category",
                code: "laboratory",
                display: "Laboratory",
              },
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0074",
                code: "MB",
                display: "microbiology",
              },
            ],
            text: "Micro",
          },
          {
            coding: [
              {
                system: "urn:oid:2.16.840.1.113883.9.195.4.61",
                code: "RSLT",
                display: "Result",
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "664-3",
              display: "Gram Stn XXX",
            },
            {
              system: "https://acme.org/codes",
              code: "GMST",
              display: "Gram Stain",
            },
          ],
          text: "Gram Stain",
        },
        subject: {
          reference: "Patient/example",
        },
        effectiveDateTime: "2016-08-18",
        issued: "2016-08-18T23:06:32Z",
        performer: [
          {
            reference: "Organization/example",
          },
        ],
        component: [
          {
            code: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "664-3",
                  display: "Gram Stn XXX",
                },
              ],
              text: "Gram Stain",
            },
            valueCodeableConcept: {
              coding: [
                {
                  system: "https://acme.org/codes",
                  code: "MOD",
                  display: "Moderate",
                },
              ],
              text: "Moderate",
            },
          },
          {
            code: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "664-3",
                  display: "Gram Stn XXX",
                },
              ],
              text: "Gram Stain",
            },
            valueCodeableConcept: {
              coding: [
                {
                  system: "https://acme.org/codes",
                  code: "GPR",
                  display: "Moderate",
                },
              ],
              text: "Gram Positive Rods",
            },
          },
        ],
      },
    },
    {
      fullUrl: "http://test.fhir.org/r4/Observation/lri-gramstain3",
      resource: {
        resourceType: "Observation",
        id: "gramstain3",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: gramstain3</p><p><b>identifier</b>: gramstain3</p><p><b>status</b>: final</p><p><b>category</b>: Micro <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span>, Result <span>(Details : {urn:oid:2.16.840.1.113883.9.195.4.61 code 'RSLT' = 'RSLT', given as 'Result'})</span></p><p><b>code</b>: Gram Stain <span>(Details : {LOINC code '664-3' = 'Microscopic observation [Identifier] in Unspecified specimen by Gram stain', given as 'Gram Stn XXX'}; {https://acme.org/codes code 'GMST' = 'GMST', given as 'Gram Stain'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/08/2016</p><p><b>issued</b>: 18/08/2016 11:06:32 PM</p><p><b>performer</b>: <a>Organization/example</a></p><blockquote><p><b>component</b></p><p><b>code</b>: Gram Stain <span>(Details : {LOINC code '664-3' = 'Microscopic observation [Identifier] in Unspecified specimen by Gram stain', given as 'Gram Stn XXX'})</span></p><p><b>value</b>: Moderate <span>(Details : {https://acme.org/codes code 'MOD' = 'MOD', given as 'Moderate'})</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Gram Stain <span>(Details : {LOINC code '664-3' = 'Microscopic observation [Identifier] in Unspecified specimen by Gram stain', given as 'Gram Stn XXX'})</span></p><p><b>value</b>: Gram Positive Cocci in Chains <span>(Details : {https://acme.org/codes code 'GPCCH' = 'GPCCH', given as 'Gram Positive Cocci in Chains'})</span></p></blockquote></div>",
        },
        identifier: [
          {
            system: "https://acme.org/identifiers",
            value: "gramstain3",
          },
        ],
        status: "final",
        category: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/observation-category",
                code: "laboratory",
                display: "Laboratory",
              },
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0074",
                code: "MB",
                display: "microbiology",
              },
            ],
            text: "Micro",
          },
          {
            coding: [
              {
                system: "urn:oid:2.16.840.1.113883.9.195.4.61",
                code: "RSLT",
                display: "Result",
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "664-3",
              display: "Gram Stn XXX",
            },
            {
              system: "https://acme.org/codes",
              code: "GMST",
              display: "Gram Stain",
            },
          ],
          text: "Gram Stain",
        },
        subject: {
          reference: "Patient/example",
        },
        effectiveDateTime: "2016-08-18",
        issued: "2016-08-18T23:06:32Z",
        performer: [
          {
            reference: "Organization/example",
          },
        ],
        component: [
          {
            code: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "664-3",
                  display: "Gram Stn XXX",
                },
              ],
              text: "Gram Stain",
            },
            valueCodeableConcept: {
              coding: [
                {
                  system: "https://acme.org/codes",
                  code: "MOD",
                  display: "Moderate",
                },
              ],
              text: "Moderate",
            },
          },
          {
            code: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "664-3",
                  display: "Gram Stn XXX",
                },
              ],
              text: "Gram Stain",
            },
            valueCodeableConcept: {
              coding: [
                {
                  system: "https://acme.org/codes",
                  code: "GPCCH",
                  display: "Gram Positive Cocci in Chains",
                },
              ],
              text: "Gram Positive Cocci in Chains",
            },
          },
        ],
      },
    },
    {
      fullUrl: "http://test.fhir.org/r4/Observation/lri-gramstain4",
      resource: {
        resourceType: "Observation",
        id: "gramstain4",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: gramstain4</p><p><b>identifier</b>: gramstain4</p><p><b>status</b>: final</p><p><b>category</b>: Micro <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span>, Result <span>(Details : {urn:oid:2.16.840.1.113883.9.195.4.61 code 'RSLT' = 'RSLT', given as 'Result'})</span></p><p><b>code</b>: Gram Stain <span>(Details : {LOINC code '664-3' = 'Microscopic observation [Identifier] in Unspecified specimen by Gram stain', given as 'Gram Stn XXX'}; {https://acme.org/codes code 'GMST' = 'GMST', given as 'Gram Stain'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/08/2016</p><p><b>issued</b>: 18/08/2016 11:06:32 PM</p><p><b>performer</b>: <a>Organization/example</a></p><blockquote><p><b>component</b></p><p><b>code</b>: Gram Stain <span>(Details : {LOINC code '664-3' = 'Microscopic observation [Identifier] in Unspecified specimen by Gram stain', given as 'Gram Stn XXX'})</span></p><p><b>value</b>: Many <span>(Details : {https://acme.org/codes code 'MNY' = 'MNY', given as 'Many'})</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Gram Stain <span>(Details : {LOINC code '664-3' = 'Microscopic observation [Identifier] in Unspecified specimen by Gram stain', given as 'Gram Stn XXX'})</span></p><p><b>value</b>: Gram Negative Rods <span>(Details : {https://acme.org/codes code 'GNR' = 'GNR', given as 'Gram Negative Rods'})</span></p></blockquote></div>",
        },
        identifier: [
          {
            system: "https://acme.org/identifiers",
            value: "gramstain4",
          },
        ],
        status: "final",
        category: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/observation-category",
                code: "laboratory",
                display: "Laboratory",
              },
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0074",
                code: "MB",
                display: "microbiology",
              },
            ],
            text: "Micro",
          },
          {
            coding: [
              {
                system: "urn:oid:2.16.840.1.113883.9.195.4.61",
                code: "RSLT",
                display: "Result",
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "664-3",
              display: "Gram Stn XXX",
            },
            {
              system: "https://acme.org/codes",
              code: "GMST",
              display: "Gram Stain",
            },
          ],
          text: "Gram Stain",
        },
        subject: {
          reference: "Patient/example",
        },
        effectiveDateTime: "2016-08-18",
        issued: "2016-08-18T23:06:32Z",
        performer: [
          {
            reference: "Organization/example",
          },
        ],
        component: [
          {
            code: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "664-3",
                  display: "Gram Stn XXX",
                },
              ],
              text: "Gram Stain",
            },
            valueCodeableConcept: {
              coding: [
                {
                  system: "https://acme.org/codes",
                  code: "MNY",
                  display: "Many",
                },
              ],
              text: "Many",
            },
          },
          {
            code: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "664-3",
                  display: "Gram Stn XXX",
                },
              ],
              text: "Gram Stain",
            },
            valueCodeableConcept: {
              coding: [
                {
                  system: "https://acme.org/codes",
                  code: "GNR",
                  display: "Gram Negative Rods",
                },
              ],
              text: "Gram Negative Rods",
            },
          },
        ],
      },
    },
    {
      fullUrl: "http://test.fhir.org/r4/Observation/lri-growth1",
      resource: {
        resourceType: "Observation",
        id: "growth1",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: growth1</p><p><b>identifier</b>: growth1</p><p><b>status</b>: final</p><p><b>category</b>: Micro <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span>, Result <span>(Details : {urn:oid:2.16.840.1.113883.9.195.4.61 code 'RSLT' = 'RSLT', given as 'Result'})</span></p><p><b>code</b>: Aerobic Respiratory Culture, Sputum <span>(Details : {LOINC code '624-7' = 'Bacteria identified in Sputum by Respiratory culture', given as 'Bacteria Spt Resp Cul'}; {https://acme.org/codes code 'GROWTH' = 'GROWTH', given as 'Growth'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/08/2016</p><p><b>issued</b>: 18/08/2016 11:06:32 PM</p><p><b>performer</b>: <a>Organization/example</a></p><p><b>value</b>: Moderate Growth <span>(Details : {SNOMED CT code '263812008' = 'Moderate growth', given as 'Moderate Growth'})</span></p></div>",
        },
        identifier: [
          {
            system: "https://acme.org/identifiers",
            value: "growth1",
          },
        ],
        status: "final",
        category: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/observation-category",
                code: "laboratory",
                display: "Laboratory",
              },
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0074",
                code: "MB",
                display: "microbiology",
              },
            ],
            text: "Micro",
          },
          {
            coding: [
              {
                system: "urn:oid:2.16.840.1.113883.9.195.4.61",
                code: "RSLT",
                display: "Result",
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "624-7",
              display: "Bacteria Spt Resp Cul",
            },
            {
              system: "https://acme.org/codes",
              code: "GROWTH",
              display: "Growth",
            },
          ],
          text: "Aerobic Respiratory Culture, Sputum",
        },
        subject: {
          reference: "Patient/example",
        },
        effectiveDateTime: "2016-08-18",
        issued: "2016-08-18T23:06:32Z",
        performer: [
          {
            reference: "Organization/example",
          },
        ],
        valueCodeableConcept: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "263812008",
              display: "Moderate Growth",
            },
          ],
          text: "Moderate Growth",
        },
      },
    },
    {
      fullUrl: "http://test.fhir.org/r4/Observation/lri-growth2",
      resource: {
        resourceType: "Observation",
        id: "growth2",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: growth2</p><p><b>identifier</b>: growth2</p><p><b>status</b>: final</p><p><b>category</b>: Micro <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span>, Result <span>(Details : {urn:oid:2.16.840.1.113883.9.195.4.61 code 'RSLT' = 'RSLT', given as 'Result'})</span></p><p><b>code</b>: Aerobic Respiratory Culture, Sputum <span>(Details : {LOINC code '624-7' = 'Bacteria identified in Sputum by Respiratory culture', given as 'Bacteria Spt Resp Cul'}; {https://acme.org/codes code 'GROWTH' = 'GROWTH', given as 'Growth'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/08/2016</p><p><b>issued</b>: 18/08/2016 11:06:32 PM</p><p><b>performer</b>: <a>Organization/example</a></p><p><b>value</b>: Heavy growth <span>(Details : {SNOMED CT code '263776006' = 'Heavy growth', given as 'Heavy growth'})</span></p></div>",
        },
        identifier: [
          {
            system: "https://acme.org/identifiers",
            value: "growth2",
          },
        ],
        status: "final",
        category: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/observation-category",
                code: "laboratory",
                display: "Laboratory",
              },
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0074",
                code: "MB",
                display: "microbiology",
              },
            ],
            text: "Micro",
          },
          {
            coding: [
              {
                system: "urn:oid:2.16.840.1.113883.9.195.4.61",
                code: "RSLT",
                display: "Result",
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "624-7",
              display: "Bacteria Spt Resp Cul",
            },
            {
              system: "https://acme.org/codes",
              code: "GROWTH",
              display: "Growth",
            },
          ],
          text: "Aerobic Respiratory Culture, Sputum",
        },
        subject: {
          reference: "Patient/example",
        },
        effectiveDateTime: "2016-08-18",
        issued: "2016-08-18T23:06:32Z",
        performer: [
          {
            reference: "Organization/example",
          },
        ],
        valueCodeableConcept: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "263776006",
              display: "Heavy growth",
            },
          ],
          text: "Heavy growth",
        },
      },
    },
    {
      fullUrl: "http://test.fhir.org/r4/Observation/lri-growth3",
      resource: {
        resourceType: "Observation",
        id: "growth3",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: growth3</p><p><b>identifier</b>: growth3</p><p><b>status</b>: final</p><p><b>category</b>: Micro <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span>, Result <span>(Details : {urn:oid:2.16.840.1.113883.9.195.4.61 code 'RSLT' = 'RSLT', given as 'Result'})</span></p><p><b>code</b>: Aerobic Respiratory Culture, Sputum <span>(Details : {LOINC code '624-7' = 'Bacteria identified in Sputum by Respiratory culture', given as 'Bacteria Spt Resp Cul'}; {https://acme.org/codes code 'GROWTH' = 'GROWTH', given as 'Growth'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/08/2016</p><p><b>issued</b>: 18/08/2016 11:06:32 PM</p><p><b>performer</b>: <a>Organization/example</a></p><p><b>value</b>: Heavy growth <span>(Details : {SNOMED CT code '263776006' = 'Heavy growth', given as 'Heavy growth'})</span></p></div>",
        },
        identifier: [
          {
            system: "https://acme.org/identifiers",
            value: "growth3",
          },
        ],
        status: "final",
        category: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/observation-category",
                code: "laboratory",
                display: "Laboratory",
              },
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0074",
                code: "MB",
                display: "microbiology",
              },
            ],
            text: "Micro",
          },
          {
            coding: [
              {
                system: "urn:oid:2.16.840.1.113883.9.195.4.61",
                code: "RSLT",
                display: "Result",
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "624-7",
              display: "Bacteria Spt Resp Cul",
            },
            {
              system: "https://acme.org/codes",
              code: "GROWTH",
              display: "Growth",
            },
          ],
          text: "Aerobic Respiratory Culture, Sputum",
        },
        subject: {
          reference: "Patient/example",
        },
        effectiveDateTime: "2016-08-18",
        issued: "2016-08-18T23:06:32Z",
        performer: [
          {
            reference: "Organization/example",
          },
        ],
        valueCodeableConcept: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "263776006",
              display: "Heavy growth",
            },
          ],
          text: "Heavy growth",
        },
      },
    },
    {
      fullUrl: "http://test.fhir.org/r4/Observation/lri-org2-amp",
      resource: {
        resourceType: "Observation",
        id: "org2-amp",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: org2-amp</p><p><b>identifier</b>: org2-amp</p><p><b>status</b>: final</p><p><b>category</b>: Micro <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span>, Result <span>(Details : {urn:oid:2.16.840.1.113883.9.195.4.61 code 'RSLT' = 'RSLT', given as 'Result'})</span></p><p><b>code</b>: Ampicilin MIC <span>(Details : {LOINC code '28-1' = 'Ampicillin [Susceptibility] by Minimum inhibitory concentration (MIC)', given as 'Ampicilin Islt MIC'}; {https://acme.org/codes code 'AMPMIC' = 'AMPMIC', given as 'Ampicilin MIC'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/08/2016</p><p><b>issued</b>: 18/08/2016 11:06:32 PM</p><p><b>performer</b>: <a>Organization/example</a></p><p><b>value</b>: &lt;0.06 ug/ml<span> (Details: UCUM code ug/mL = 'ug/mL')</span></p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible', given as 'Susceptible'})</span></p></div>",
        },
        identifier: [
          {
            system: "https://acme.org/identifiers",
            value: "org2-amp",
          },
        ],
        status: "final",
        category: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/observation-category",
                code: "laboratory",
                display: "Laboratory",
              },
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0074",
                code: "MB",
                display: "microbiology",
              },
            ],
            text: "Micro",
          },
          {
            coding: [
              {
                system: "urn:oid:2.16.840.1.113883.9.195.4.61",
                code: "RSLT",
                display: "Result",
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "28-1",
              display: "Ampicilin Islt MIC",
            },
            {
              system: "https://acme.org/codes",
              code: "AMPMIC",
              display: "Ampicilin MIC",
            },
          ],
          text: "Ampicilin MIC",
        },
        subject: {
          reference: "Patient/example",
        },
        effectiveDateTime: "2016-08-18",
        issued: "2016-08-18T23:06:32Z",
        performer: [
          {
            reference: "Organization/example",
          },
        ],
        valueQuantity: {
          value: 0.06,
          comparator: "<",
          unit: "ug/ml",
          system: "http://unitsofmeasure.org",
          code: "ug/mL",
        },
        interpretation: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                code: "S",
                display: "Susceptible",
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: "http://test.fhir.org/r4/Observation/lri-org2-cip",
      resource: {
        resourceType: "Observation",
        id: "org2-cip",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: org2-cip</p><p><b>identifier</b>: org2-cip</p><p><b>status</b>: final</p><p><b>category</b>: Micro <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span>, Result <span>(Details : {urn:oid:2.16.840.1.113883.9.195.4.61 code 'RSLT' = 'RSLT', given as 'Result'})</span></p><p><b>code</b>: Ciprofloxacin MIC <span>(Details : {LOINC code '185-9' = 'Ciprofloxacin [Susceptibility] by Minimum inhibitory concentration (MIC)', given as 'Ciprofloxacin Islt MIC'}; {https://acme.org/codes code 'CIPMIC' = 'CIPMIC', given as 'Ciprofloxacin MIC'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/08/2016</p><p><b>issued</b>: 18/08/2016 11:06:32 PM</p><p><b>performer</b>: <a>Organization/example</a></p><p><b>value</b>: &lt;0.05 ug/ml<span> (Details: UCUM code ug/mL = 'ug/mL')</span></p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible', given as 'Susceptible'})</span></p></div>",
        },
        identifier: [
          {
            system: "https://acme.org/identifiers",
            value: "org2-cip",
          },
        ],
        status: "final",
        category: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/observation-category",
                code: "laboratory",
                display: "Laboratory",
              },
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0074",
                code: "MB",
                display: "microbiology",
              },
            ],
            text: "Micro",
          },
          {
            coding: [
              {
                system: "urn:oid:2.16.840.1.113883.9.195.4.61",
                code: "RSLT",
                display: "Result",
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "185-9",
              display: "Ciprofloxacin Islt MIC",
            },
            {
              system: "https://acme.org/codes",
              code: "CIPMIC",
              display: "Ciprofloxacin MIC",
            },
          ],
          text: "Ciprofloxacin MIC",
        },
        subject: {
          reference: "Patient/example",
        },
        effectiveDateTime: "2016-08-18",
        issued: "2016-08-18T23:06:32Z",
        performer: [
          {
            reference: "Organization/example",
          },
        ],
        valueQuantity: {
          value: 0.05,
          comparator: "<",
          unit: "ug/ml",
          system: "http://unitsofmeasure.org",
          code: "ug/mL",
        },
        interpretation: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                code: "S",
                display: "Susceptible",
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: "http://test.fhir.org/r4/Observation/lri-org2-gent",
      resource: {
        resourceType: "Observation",
        id: "org2-gent",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: org2-gent</p><p><b>identifier</b>: org2-gent</p><p><b>status</b>: final</p><p><b>category</b>: Micro <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span>, Result <span>(Details : {urn:oid:2.16.840.1.113883.9.195.4.61 code 'RSLT' = 'RSLT', given as 'Result'})</span></p><p><b>code</b>: Gentamicin MIC <span>(Details : {LOINC code '267-5' = 'Gentamicin [Susceptibility] by Minimum inhibitory concentration (MIC)', given as 'Gentamicin Islt MIC'}; {https://acme.org/codes code 'CIPMIC' = 'CIPMIC', given as 'Gentamicin MIC'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/08/2016</p><p><b>issued</b>: 18/08/2016 11:06:32 PM</p><p><b>performer</b>: <a>Organization/example</a></p><p><b>value</b>: &lt;0.05 ug/ml<span> (Details: UCUM code ug/mL = 'ug/mL')</span></p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible', given as 'Susceptible'})</span></p></div>",
        },
        identifier: [
          {
            system: "https://acme.org/identifiers",
            value: "org2-gent",
          },
        ],
        status: "final",
        category: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/observation-category",
                code: "laboratory",
                display: "Laboratory",
              },
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0074",
                code: "MB",
                display: "microbiology",
              },
            ],
            text: "Micro",
          },
          {
            coding: [
              {
                system: "urn:oid:2.16.840.1.113883.9.195.4.61",
                code: "RSLT",
                display: "Result",
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "267-5",
              display: "Gentamicin Islt MIC",
            },
            {
              system: "https://acme.org/codes",
              code: "CIPMIC",
              display: "Gentamicin MIC",
            },
          ],
          text: "Gentamicin MIC",
        },
        subject: {
          reference: "Patient/example",
        },
        effectiveDateTime: "2016-08-18",
        issued: "2016-08-18T23:06:32Z",
        performer: [
          {
            reference: "Organization/example",
          },
        ],
        valueQuantity: {
          value: 0.05,
          comparator: "<",
          unit: "ug/ml",
          system: "http://unitsofmeasure.org",
          code: "ug/mL",
        },
        interpretation: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                code: "S",
                display: "Susceptible",
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: "http://test.fhir.org/r4/Observation/lri-org3-amp",
      resource: {
        resourceType: "Observation",
        id: "org3-amp",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: org3-amp</p><p><b>identifier</b>: org3-amp</p><p><b>status</b>: final</p><p><b>category</b>: Micro <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span>, Result <span>(Details : {urn:oid:2.16.840.1.113883.9.195.4.61 code 'RSLT' = 'RSLT', given as 'Result'})</span></p><p><b>code</b>: Ampicilin MIC <span>(Details : {LOINC code '28-1' = 'Ampicillin [Susceptibility] by Minimum inhibitory concentration (MIC)', given as 'Ampicilin Islt MIC'}; {https://acme.org/codes code 'AMPMIC' = 'AMPMIC', given as 'Ampicilin MIC'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/08/2016</p><p><b>issued</b>: 18/08/2016 11:06:32 PM</p><p><b>performer</b>: <a>Organization/example</a></p><p><b>value</b>: &lt;0.06 ug/ml<span> (Details: UCUM code ug/mL = 'ug/mL')</span></p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible', given as 'Susceptible'})</span></p></div>",
        },
        identifier: [
          {
            system: "https://acme.org/identifiers",
            value: "org3-amp",
          },
        ],
        status: "final",
        category: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/observation-category",
                code: "laboratory",
                display: "Laboratory",
              },
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0074",
                code: "MB",
                display: "microbiology",
              },
            ],
            text: "Micro",
          },
          {
            coding: [
              {
                system: "urn:oid:2.16.840.1.113883.9.195.4.61",
                code: "RSLT",
                display: "Result",
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "28-1",
              display: "Ampicilin Islt MIC",
            },
            {
              system: "https://acme.org/codes",
              code: "AMPMIC",
              display: "Ampicilin MIC",
            },
          ],
          text: "Ampicilin MIC",
        },
        subject: {
          reference: "Patient/example",
        },
        effectiveDateTime: "2016-08-18",
        issued: "2016-08-18T23:06:32Z",
        performer: [
          {
            reference: "Organization/example",
          },
        ],
        valueQuantity: {
          value: 0.06,
          comparator: "<",
          unit: "ug/ml",
          system: "http://unitsofmeasure.org",
          code: "ug/mL",
        },
        interpretation: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                code: "S",
                display: "Susceptible",
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: "http://test.fhir.org/r4/Observation/lri-org3-cip",
      resource: {
        resourceType: "Observation",
        id: "org3-cip",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: org3-cip</p><p><b>identifier</b>: org3-cip</p><p><b>status</b>: final</p><p><b>category</b>: Micro <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span>, Result <span>(Details : {urn:oid:2.16.840.1.113883.9.195.4.61 code 'RSLT' = 'RSLT', given as 'Result'})</span></p><p><b>code</b>: Ciprofloxacin MIC <span>(Details : {LOINC code '185-9' = 'Ciprofloxacin [Susceptibility] by Minimum inhibitory concentration (MIC)', given as 'Ciprofloxacin Islt MIC'}; {https://acme.org/codes code 'CIPMIC' = 'CIPMIC', given as 'Ciprofloxacin MIC'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/08/2016</p><p><b>issued</b>: 18/08/2016 11:06:32 PM</p><p><b>performer</b>: <a>Organization/example</a></p><p><b>value</b>: &lt;0.05 ug/ml<span> (Details: UCUM code ug/mL = 'ug/mL')</span></p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible', given as 'Susceptible'})</span></p></div>",
        },
        identifier: [
          {
            system: "https://acme.org/identifiers",
            value: "org3-cip",
          },
        ],
        status: "final",
        category: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/observation-category",
                code: "laboratory",
                display: "Laboratory",
              },
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0074",
                code: "MB",
                display: "microbiology",
              },
            ],
            text: "Micro",
          },
          {
            coding: [
              {
                system: "urn:oid:2.16.840.1.113883.9.195.4.61",
                code: "RSLT",
                display: "Result",
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "185-9",
              display: "Ciprofloxacin Islt MIC",
            },
            {
              system: "https://acme.org/codes",
              code: "CIPMIC",
              display: "Ciprofloxacin MIC",
            },
          ],
          text: "Ciprofloxacin MIC",
        },
        subject: {
          reference: "Patient/example",
        },
        effectiveDateTime: "2016-08-18",
        issued: "2016-08-18T23:06:32Z",
        performer: [
          {
            reference: "Organization/example",
          },
        ],
        valueQuantity: {
          value: 0.05,
          comparator: "<",
          unit: "ug/ml",
          system: "http://unitsofmeasure.org",
          code: "ug/mL",
        },
        interpretation: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                code: "S",
                display: "Susceptible",
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: "http://test.fhir.org/r4/Observation/lri-org3-gent",
      resource: {
        resourceType: "Observation",
        id: "org3-gent",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: org3-gent</p><p><b>identifier</b>: org3-gent</p><p><b>status</b>: final</p><p><b>category</b>: Micro <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span></p><p><b>code</b>: Gentamicin MIC <span>(Details : {LOINC code '267-5' = 'Gentamicin [Susceptibility] by Minimum inhibitory concentration (MIC)', given as 'Gentamicin Islt MIC'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/08/2016</p><p><b>issued</b>: 18/08/2016 11:06:32 PM</p><p><b>performer</b>: <a>Organization/example</a></p><p><b>value</b>: &lt;0.05 ug/ml<span> (Details: UCUM code ug/mL = 'ug/mL')</span></p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible', given as 'Susceptible'})</span></p></div>",
        },
        identifier: [
          {
            system: "https://acme.org/identifiers",
            value: "org3-gent",
          },
        ],
        status: "final",
        category: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/observation-category",
                code: "laboratory",
                display: "Laboratory",
              },
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0074",
                code: "MB",
                display: "microbiology",
              },
            ],
            text: "Micro",
          },
        ],
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "267-5",
              display: "Gentamicin Islt MIC",
            },
          ],
          text: "Gentamicin MIC",
        },
        subject: {
          reference: "Patient/example",
        },
        effectiveDateTime: "2016-08-18",
        issued: "2016-08-18T23:06:32Z",
        performer: [
          {
            reference: "Organization/example",
          },
        ],
        valueQuantity: {
          value: 0.05,
          comparator: "<",
          unit: "ug/ml",
          system: "http://unitsofmeasure.org",
          code: "ug/mL",
        },
        interpretation: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                code: "S",
                display: "Susceptible",
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: "http://test.fhir.org/r4/Observation/lri-organism1",
      resource: {
        resourceType: "Observation",
        id: "organism1",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: organism1</p><p><b>identifier</b>: organism1</p><p><b>status</b>: final</p><p><b>category</b>: Micro <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span>, Result <span>(Details : {urn:oid:2.16.840.1.113883.9.195.4.61 code 'RSLT' = 'RSLT', given as 'Result'})</span></p><p><b>code</b>: Aerobic Respiratory Culture, Sputum <span>(Details : {LOINC code '624-7' = 'Bacteria identified in Sputum by Respiratory culture', given as 'Bacteria Spt Resp Cul'}; {https://acme.org/codes code 'CULTID' = 'CULTID', given as 'Culture ID'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/08/2016</p><p><b>issued</b>: 18/08/2016 11:06:32 PM</p><p><b>performer</b>: <a>Organization/example</a></p><p><b>value</b>: Normal flora <span>(Details : {SNOMED CT code '23506009' = 'Normal flora', given as 'Normal flora'})</span></p><p><b>hasMember</b>: <a>Moderate growth</a></p></div>",
        },
        identifier: [
          {
            system: "https://acme.org/identifiers",
            value: "organism1",
          },
        ],
        status: "final",
        category: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/observation-category",
                code: "laboratory",
                display: "Laboratory",
              },
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0074",
                code: "MB",
                display: "microbiology",
              },
            ],
            text: "Micro",
          },
          {
            coding: [
              {
                system: "urn:oid:2.16.840.1.113883.9.195.4.61",
                code: "RSLT",
                display: "Result",
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "624-7",
              display: "Bacteria Spt Resp Cul",
            },
            {
              system: "https://acme.org/codes",
              code: "CULTID",
              display: "Culture ID",
            },
          ],
          text: "Aerobic Respiratory Culture, Sputum",
        },
        subject: {
          reference: "Patient/example",
        },
        effectiveDateTime: "2016-08-18",
        issued: "2016-08-18T23:06:32Z",
        performer: [
          {
            reference: "Organization/example",
          },
        ],
        valueCodeableConcept: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "23506009",
              display: "Normal flora",
            },
          ],
          text: "Normal flora",
        },
        hasMember: [
          {
            reference: "Observation/growth1",
            display: "Moderate growth",
          },
        ],
      },
    },
    {
      fullUrl: "http://test.fhir.org/r4/Observation/lri-organism2",
      resource: {
        resourceType: "Observation",
        id: "organism2",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: organism2</p><p><b>identifier</b>: organism2</p><p><b>status</b>: final</p><p><b>category</b>: Micro <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span>, Result <span>(Details : {urn:oid:2.16.840.1.113883.9.195.4.61 code 'RSLT' = 'RSLT', given as 'Result'})</span></p><p><b>code</b>: Aerobic Respiratory Culture, Sputum <span>(Details : {LOINC code '624-7' = 'Bacteria identified in Sputum by Respiratory culture', given as 'Bacteria Spt Resp Cul'}; {https://acme.org/codes code 'CULTID' = 'CULTID', given as 'Culture ID'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/08/2016</p><p><b>issued</b>: 18/08/2016 11:06:32 PM</p><p><b>performer</b>: <a>Organization/example</a></p><p><b>value</b>: Klebsiella pneumonia <span>(Details : {SNOMED CT code '56415008' = 'Klebsiella pneumoniae', given as 'Klebsiella pneumonia'})</span></p><p><b>hasMember</b>: </p><ul><li><a>Heavy growth</a></li><li><a>Ampicillin MIC - Susceptible</a></li><li><a>Ciprofloxacin MIC - Susceptible</a></li><li><a>Gentamicin MIC  - Susceptible</a></li></ul></div>",
        },
        identifier: [
          {
            system: "https://acme.org/identifiers",
            value: "organism2",
          },
        ],
        status: "final",
        category: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/observation-category",
                code: "laboratory",
                display: "Laboratory",
              },
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0074",
                code: "MB",
                display: "microbiology",
              },
            ],
            text: "Micro",
          },
          {
            coding: [
              {
                system: "urn:oid:2.16.840.1.113883.9.195.4.61",
                code: "RSLT",
                display: "Result",
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "624-7",
              display: "Bacteria Spt Resp Cul",
            },
            {
              system: "https://acme.org/codes",
              code: "CULTID",
              display: "Culture ID",
            },
          ],
          text: "Aerobic Respiratory Culture, Sputum",
        },
        subject: {
          reference: "Patient/example",
        },
        effectiveDateTime: "2016-08-18",
        issued: "2016-08-18T23:06:32Z",
        performer: [
          {
            reference: "Organization/example",
          },
        ],
        valueCodeableConcept: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "56415008",
              display: "Klebsiella pneumonia",
            },
          ],
          text: "Klebsiella pneumonia",
        },
        hasMember: [
          {
            reference: "Observation/growth2",
            display: "Heavy growth",
          },
          {
            reference: "Observation/org2-amp",
            display: "Ampicillin MIC - Susceptible",
          },
          {
            reference: "Observation/org2-cip",
            display: "Ciprofloxacin MIC - Susceptible",
          },
          {
            reference: "Observation/org2-gent",
            display: "Gentamicin MIC  - Susceptible",
          },
        ],
      },
    },
    {
      fullUrl: "http://test.fhir.org/r4/Observation/lri-organism3",
      resource: {
        resourceType: "Observation",
        id: "organism3",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: organism3</p><p><b>identifier</b>: organism3</p><p><b>status</b>: final</p><p><b>category</b>: Micro <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span>, Result <span>(Details : {urn:oid:2.16.840.1.113883.9.195.4.61 code 'RSLT' = 'RSLT', given as 'Result'})</span></p><p><b>code</b>: Aerobic Respiratory Culture, Sputum <span>(Details : {LOINC code '624-7' = 'Bacteria identified in Sputum by Respiratory culture', given as 'Bacteria Spt Resp Cul'}; {https://acme.org/codes code 'CULTID' = 'CULTID', given as 'Culture ID'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/08/2016</p><p><b>issued</b>: 18/08/2016 11:06:32 PM</p><p><b>performer</b>: <a>Organization/example</a></p><p><b>value</b>: Staphlyococcuc aureus <span>(Details : {SNOMED CT code '3092008' = 'Staphylococcus aureus', given as 'Staphlyococcuc aureus'})</span></p><p><b>hasMember</b>: </p><ul><li><a>Heavy growth</a></li><li><a>Ampicillin MIC - Susceptible</a></li><li><a>Ciprofloxacin MIC - Susceptible</a></li><li><a>Gentamicin MIC  - Susceptible</a></li></ul></div>",
        },
        identifier: [
          {
            system: "https://acme.org/identifiers",
            value: "organism3",
          },
        ],
        status: "final",
        category: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/observation-category",
                code: "laboratory",
                display: "Laboratory",
              },
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0074",
                code: "MB",
                display: "microbiology",
              },
            ],
            text: "Micro",
          },
          {
            coding: [
              {
                system: "urn:oid:2.16.840.1.113883.9.195.4.61",
                code: "RSLT",
                display: "Result",
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "624-7",
              display: "Bacteria Spt Resp Cul",
            },
            {
              system: "https://acme.org/codes",
              code: "CULTID",
              display: "Culture ID",
            },
          ],
          text: "Aerobic Respiratory Culture, Sputum",
        },
        subject: {
          reference: "Patient/example",
        },
        effectiveDateTime: "2016-08-18",
        issued: "2016-08-18T23:06:32Z",
        performer: [
          {
            reference: "Organization/example",
          },
        ],
        valueCodeableConcept: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "3092008",
              display: "Staphlyococcuc aureus",
            },
          ],
          text: "Staphlyococcuc aureus",
        },
        hasMember: [
          {
            reference: "Observation/growth3",
            display: "Heavy growth",
          },
          {
            reference: "Observation/org3-amp",
            display: "Ampicillin MIC - Susceptible",
          },
          {
            reference: "Observation/org3-cip",
            display: "Ciprofloxacin MIC - Susceptible",
          },
          {
            reference: "Observation/org3-gent",
            display: "Gentamicin MIC  - Susceptible",
          },
        ],
      },
    },
  ],
} as const;

export const DiagnosticreportGeneticsComprehensiveBoneMarrowReport: Bundle = {
  resourceType: "Bundle",
  id: "report",
  type: "collection",
  entry: [
    {
      fullUrl: "https://example.com/base/DiagnosticReport/report",
      resource: {
        resourceType: "DiagnosticReport",
        id: "report",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: report</p><p><b>status</b>: final</p><p><b>code</b>: comprehensive bone marrow report <span>(Details )</span></p><p><b>subject</b>: <a>Everywoman, Eve A, MRN: 123456789</a></p><p><b>effective</b>: 02/01/2015 1:20:10 PM</p><p><b>issued</b>: 06/01/2015 1:20:10 PM</p><p><b>performer</b>: <a>Molecular Diagnostic Laboratory</a></p><p><b>specimen</b>: <a>Bone marrow ID: MLD45-Z4-1234</a></p><p><b>result</b>: </p><ul><li><a>Observation/o1</a></li><li><a>Observation/o2</a></li><li><a>Observation/o3</a></li><li><a>Observation/o4</a></li><li><a>Observation/o5</a></li><li><a>Observation/o6</a></li><li><a>Observation/o7</a></li><li><a>Observation/o8</a></li><li><a>Observation/o9</a></li><li><a>Observation/o10</a></li><li><a>Observation/o11</a></li><li><a>Observation/o12</a></li><li><a>Observation/o13</a></li></ul></div>',
        },
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/DiagnosticReport-geneticsAssessedCondition",
            valueReference: {
              reference: "Condition/c1",
            },
          },
        ],
        status: "final",
        code: {
          text: "comprehensive bone marrow report",
        },
        subject: {
          reference: "Patient/genetics-example1",
          display: "Everywoman, Eve A, MRN: 123456789",
        },
        effectiveDateTime: "2015-01-02T13:20:10+01:00",
        issued: "2015-01-06T13:20:10+01:00",
        performer: [
          {
            reference: "Practitioner/genetics-example1",
            display: "Molecular Diagnostic Laboratory",
          },
        ],
        specimen: [
          {
            reference: "Specimen/genetics-example1",
            display: "Bone marrow ID: MLD45-Z4-1234",
          },
        ],
        result: [
          {
            reference: "Observation/o1",
          },
          {
            reference: "Observation/o2",
          },
          {
            reference: "Observation/o3",
          },
          {
            reference: "Observation/o4",
          },
          {
            reference: "Observation/o5",
          },
          {
            reference: "Observation/o6",
          },
          {
            reference: "Observation/o7",
          },
          {
            reference: "Observation/o8",
          },
          {
            reference: "Observation/o9",
          },
          {
            reference: "Observation/o10",
          },
          {
            reference: "Observation/o11",
          },
          {
            reference: "Observation/o12",
          },
          {
            reference: "Observation/o13",
          },
        ],
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/o1",
      resource: {
        resourceType: "Observation",
        id: "o1",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o1</p><p><b>status</b>: final</p><p><b>code</b>: Leukocytes [#/volume] in Blood <span>(Details : {LOINC code '26464-8' = 'Leukocytes [#/volume] in Blood', given as 'Leukocytes [#/volume] in Blood'})</span></p><p><b>value</b>: 31.9 K/ul</p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "26464-8",
              display: "Leukocytes [#/volume] in Blood",
            },
          ],
        },
        valueQuantity: {
          value: 31.9,
          unit: "K/ul",
        },
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/o2",
      resource: {
        resourceType: "Observation",
        id: "o2",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o2</p><p><b>status</b>: final</p><p><b>code</b>: Hematocrit [Volume Fraction] of Blood <span>(Details : {LOINC code '20570-8' = 'Hematocrit [Volume Fraction] of Blood', given as 'Hematocrit [Volume Fraction] of Blood'})</span></p><p><b>value</b>: 27 %</p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "20570-8",
              display: "Hematocrit [Volume Fraction] of Blood",
            },
          ],
        },
        valueQuantity: {
          value: 27,
          unit: "%",
        },
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/o3",
      resource: {
        resourceType: "Observation",
        id: "o3",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o3</p><p><b>status</b>: final</p><p><b>code</b>: Platelets [#/volume] in Blood <span>(Details : {LOINC code '26515-7' = 'Platelets [#/volume] in Blood', given as 'Platelets [#/volume] in Blood'})</span></p><p><b>value</b>: 84 K/ul</p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "26515-7",
              display: "Platelets [#/volume] in Blood",
            },
          ],
        },
        valueQuantity: {
          value: 84,
          unit: "K/ul",
        },
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/o4",
      resource: {
        resourceType: "Observation",
        id: "o4",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o4</p><p><b>status</b>: final</p><p><b>code</b>: NPM1 gene mutations found [Identifier] in Bone marrow by Molecular genetics method Nominal <span>(Details : {LOINC code '75034-9' = 'NPM1 gene mutations found [Identifier] in Bone marrow by Molecular genetics method Nominal', given as 'NPM1 gene mutations found [Identifier] in Bone marrow by Molecular genetics method Nominal'})</span></p><p><b>value</b>: Positive <span>(Details : {SNOMED CT code '10828004' = 'Positive', given as 'Positive'})</span></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "75034-9",
              display:
                "NPM1 gene mutations found [Identifier] in Bone marrow by Molecular genetics method Nominal",
            },
          ],
        },
        valueCodeableConcept: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "10828004",
              display: "Positive",
            },
          ],
        },
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/o5",
      resource: {
        resourceType: "Observation",
        id: "o5",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o5</p><p><b>status</b>: final</p><p><b>code</b>: FLT3 gene mutation analysis in Bone marrow by Molecular genetics method Narrative <span>(Details : {LOINC code '54447-8' = 'FLT3 gene mutation analysis in Bone marrow by Molecular genetics method Narrative', given as 'FLT3 gene mutation analysis in Bone marrow by Molecular genetics method Narrative'})</span></p><p><b>value</b>: Negative <span>(Details : {SNOMED CT code '260385009' = 'Negative', given as 'Negative'})</span></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "54447-8",
              display:
                "FLT3 gene mutation analysis in Bone marrow by Molecular genetics method Narrative",
            },
          ],
        },
        valueCodeableConcept: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "260385009",
              display: "Negative",
            },
          ],
        },
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/o6",
      resource: {
        resourceType: "Observation",
        id: "o6",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o6</p><p><b>status</b>: final</p><p><b>code</b>: KIT gene mutation analysis in Bone marrow by Molecular genetics method Narrative <span>(Details : {LOINC code '55201-8' = 'KIT gene mutation analysis in Blood or Tissue by Molecular genetics method Narrative', given as 'KIT gene mutation analysis in Bone marrow by Molecular genetics method Narrative'})</span></p><p><b>value</b>: Negative <span>(Details : {SNOMED CT code '260385009' = 'Negative', given as 'Negative'})</span></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "55201-8",
              display:
                "KIT gene mutation analysis in Bone marrow by Molecular genetics method Narrative",
            },
          ],
        },
        valueCodeableConcept: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "260385009",
              display: "Negative",
            },
          ],
        },
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/o7",
      resource: {
        resourceType: "Observation",
        id: "o7",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o7</p><p><b>status</b>: final</p><p><b>code</b>: Myeloblasts [#/volume] in Blood <span>(Details : {LOINC code '30444-4' = 'Myeloblasts [#/volume] in Blood', given as 'Myeloblasts [#/volume] in Blood'})</span></p><p><b>value</b>: Positive <span>(Details : {SNOMED CT code '10828004' = 'Positive', given as 'Positive'})</span></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "30444-4",
              display: "Myeloblasts [#/volume] in Blood",
            },
          ],
        },
        valueCodeableConcept: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "10828004",
              display: "Positive",
            },
          ],
        },
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/o8",
      resource: {
        resourceType: "Observation",
        id: "o8",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o8</p><p><b>status</b>: final</p><p><b>code</b>: CD4 Ag [Presence] in Tissue by Immune stain <span>(Details : {LOINC code '47016-1' = 'CD4 Ag [Presence] in Tissue by Immune stain', given as 'CD4 Ag [Presence] in Tissue by Immune stain'})</span></p><p><b>value</b>: Positive <span>(Details : {SNOMED CT code '10828004' = 'Positive', given as 'Positive'})</span></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "47016-1",
              display: "CD4 Ag [Presence] in Tissue by Immune stain",
            },
          ],
        },
        valueCodeableConcept: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "10828004",
              display: "Positive",
            },
          ],
        },
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/o9",
      resource: {
        resourceType: "Observation",
        id: "o9",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o9</p><p><b>status</b>: final</p><p><b>code</b>: CD13 Ag [Presence] in Tissue by Immune stain <span>(Details : {LOINC code '49464-1' = 'CD13 Ag [Presence] in Tissue by Immune stain', given as 'CD13 Ag [Presence] in Tissue by Immune stain'})</span></p><p><b>value</b>: Positive <span>(Details : {SNOMED CT code '10828004' = 'Positive', given as 'Positive'})</span></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "49464-1",
              display: "CD13 Ag [Presence] in Tissue by Immune stain",
            },
          ],
        },
        valueCodeableConcept: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "10828004",
              display: "Positive",
            },
          ],
        },
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/o10",
      resource: {
        resourceType: "Observation",
        id: "o10",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o10</p><p><b>status</b>: final</p><p><b>code</b>: CD2 Ag [Presence] in Tissue by Immune stain <span>(Details : {LOINC code '49466-6' = 'CD2 Ag [Presence] in Tissue by Immune stain', given as 'CD2 Ag [Presence] in Tissue by Immune stain'})</span></p><p><b>value</b>: Negative <span>(Details : {SNOMED CT code '260385009' = 'Negative', given as 'Negative'})</span></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "49466-6",
              display: "CD2 Ag [Presence] in Tissue by Immune stain",
            },
          ],
        },
        valueCodeableConcept: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "260385009",
              display: "Negative",
            },
          ],
        },
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/o11",
      resource: {
        resourceType: "Observation",
        id: "o11",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o11</p><p><b>status</b>: final</p><p><b>code</b>: Karyotype [Identifier] in Bone marrow Nominal <span>(Details : {LOINC code '33893-9' = 'Karyotype [Identifier] in Bone marrow Nominal', given as 'Karyotype [Identifier] in Bone marrow Nominal'})</span></p><p><b>value</b>: 46,XX[20] <span>(Details )</span></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "33893-9",
              display: "Karyotype [Identifier] in Bone marrow Nominal",
            },
          ],
        },
        valueCodeableConcept: {
          text: "46,XX[20]",
        },
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/o12",
      resource: {
        resourceType: "Observation",
        id: "o12",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o12</p><p><b>status</b>: final</p><p><b>code</b>: MDS-associated genetic abnormalities <span>(Details )</span></p><p><b>value</b>: Negative <span>(Details : {SNOMED CT code '260385009' = 'Negative', given as 'Negative'})</span></p></div>",
        },
        status: "final",
        code: {
          text: "MDS-associated genetic abnormalities",
        },
        valueCodeableConcept: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "260385009",
              display: "Negative",
            },
          ],
        },
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/o13",
      resource: {
        resourceType: "Observation",
        id: "o13",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o13</p><p><b>status</b>: final</p><p><b>code</b>: AML-associated genetic abnormalities <span>(Details )</span></p><p><b>value</b>: Negative <span>(Details : {SNOMED CT code '260385009' = 'Negative', given as 'Negative'})</span></p></div>",
        },
        status: "final",
        code: {
          text: "AML-associated genetic abnormalities",
        },
        valueCodeableConcept: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "260385009",
              display: "Negative",
            },
          ],
        },
      },
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

export const DiagnosticreportGeneticsExample2Familyhistory: Bundle = {
  resourceType: "Bundle",
  id: "dg2",
  type: "collection",
  entry: [
    {
      fullUrl: "https://example.com/base/DiagnosticReport/dg2",
      resource: {
        resourceType: "DiagnosticReport",
        id: "dg2",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t\t\t\t<h3>Genetic test Report for Marry Chalmers (MRN: 12345) </h3>\n\t\t\t\t\t\t<pre>\n              Gene                DNAVariation       Status        Interpretation\n              BRCA1                                 Negative\n              BRCA2                 185delAG        Positive         Pathogenic\n          </pre>\n\t\t\t\t\t\t<p> Method: BRACAnalysis CDx Offered by Myriad Genetic Laboratories, Inc </p>\n\t\t\t\t\t\t<p> Issued: 2015-05-26T15:30:10+01:00</p>\n\t\t\t\t\t\t<p> FamilyMemeberHistory: Mother </p>\n\t\t\t\t\t\t<pre>\n              Gene                 DNAVariation      Status\n              BRCA2                 185delAG        Positive\n          </pre>\n\t\t\t\t\t\t<p> Method: BRACAnalysis CDx Offered by Myriad Genetic Laboratories, Inc </p>\n\t\t\t\t\t</div>',
        },
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/DiagnosticReport-geneticsFamilyMemberHistory",
            valueReference: {
              reference: "FamilyMemberHistory/f1-genetics",
            },
          },
        ],
        status: "final",
        category: [
          {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "15220000",
                display: "Laboratory test",
              },
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0074",
                code: "LAB",
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "55233-1",
              display: "Genetic analysis master panel",
            },
          ],
        },
        subject: {
          reference: "Patient/example",
          display: "Peter James Chalmers(MRN: 12345)",
        },
        effectiveDateTime: "2015-05-26T15:30:10+01:00",
        issued: "2014-05-16T10:28:00+01:00",
        performer: [
          {
            reference: "Practitioner/genetics-example2",
            display: "Molecular Diagnostic Laboratory",
          },
        ],
        specimen: [
          {
            reference: "Specimen/genetics-example2",
            display: "Molecular Specimen ID: MLD45-Z4-1234",
          },
        ],
        result: [
          {
            reference: "Observation/ob-genetics-3-1",
            display: "Genetic analysis for BRAC -1",
          },
          {
            reference: "Observation/ob-genetics-3-2",
            display: "Genetic analysis for BRAC -2",
          },
        ],
      },
    },
    {
      fullUrl: "https://example.com/base/FamilyMemberHistory/f1-genetics",
      resource: {
        resourceType: "FamilyMemberHistory",
        id: "f1-genetics",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f1-genetics</p><p><b>status</b>: completed</p><p><b>patient</b>: <a>Patient/example</a></p><p><b>relationship</b>: Mother <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'MTH' = 'mother', given as 'Mother'})</span></p></div>",
        },
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/family-member-history-genetics-observation",
            valueReference: {
              reference: "Observation/dgf1",
            },
          },
        ],
        status: "completed",
        patient: {
          reference: "Patient/example",
        },
        relationship: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
              code: "MTH",
              display: "Mother",
            },
          ],
        },
      },
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

export const DiagnosticreportHlaGeneticsResultsExample: Bundle = {
  resourceType: "Bundle",
  id: "hla-1",
  type: "transaction",
  entry: [
    {
      fullUrl: "urn:uuid:b0a4b18e-94e7-4b1b-8031-c7ae4bdd8db9",
      resource: {
        resourceType: "DiagnosticReport",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t\t\t\t<h3>HLA-A,-B,-C genotyping report for Mary Chalmers (MRN:12345)</h3>\n\t\t\t\t\t\t<pre>\n  LOCUS   ALLELE 1            ALLELE 2\n  HLA-A   HLA-A:01:01G        HLA-A*01:02\n  HLA-B   HLA-B*15:01:01G     HLA-B*57:01:01G\n  HLA-C   HLA-C*01:02:01G     HLA-C*03:04:01G\n                </pre>\n\t\t\t\t\t\t<p>Allele assignments based on IMGT/HLA 3.23</p>\n\t\t\t\t\t\t<p>Effective date: 2015-12-15</p>\n\t\t\t\t\t\t<p>Method: Sequencing of exons 2 and 3 of HLA Class I genes</p>\n\t\t\t\t\t\t<p>Lab: aTypingLab Inc</p>\n\t\t\t\t\t\t<p>Note: Please refer the <a href="genomics.html#hla">implementation guide </a> for more explanation on this\n                carefully organized bundle example.</p>\n\t\t\t\t\t\t<pre>\n  Bob Milius - NMDP - 2016-12-01\n\n  Transaction bundle that creates and links:\n  + DiagnosticReport summarizing genotyping for HLA-A,-B,-C typing of patient(donor)\n  + Obervations for each genotype\n  + Observations for each allele\n  + Sequences for exons 2 and 3 for HLA-A,-B, -C\n\n  The endpoints of the following resources are hardcoded into this transaction bundle\n  because these are presumed to already exist when developing the DiagnosticRequest\n  which was to generate this report bundle:\n\n  Patient/119 (potential donor)\n  Specimen/120 (buccal swab)\n  Organization/68  (typing lab)\n  ServiceRequest/123  (report is based on this request)\n                </pre>\n\t\t\t\t\t</div>',
        },
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/hla-genotyping-results-allele-database",
            valueCodeableConcept: {
              coding: [
                {
                  system: "http://www.ebi.ac.uk/ipd/imgt/hla",
                  version: "3.23",
                },
              ],
              text: "IMGT/HLA 3.23",
            },
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/hla-genotyping-results-glstring",
            extension: [
              {
                url: "text",
                valueString:
                  "HLA-A:01:01G+HLA-A*01:02^HLA-B*15:01:01:01+HLA-B*57:01:01^HLA-C*01:02:01+HLA-C*03:04:01:01",
              },
              {
                url: "uri",
                valueUri:
                  "https://gl.nmdp.org/imgt-hla/3.23.0/multilocus-unphased-genotype/i",
              },
            ],
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/hla-genotyping-results-method",
            valueCodeableConcept: {
              coding: [
                {
                  system: "http://www.ncbi.nlm.nih.gov/gtr/",
                  code: "GTR000000000.0",
                },
              ],
              text: "Next Generation Sequencing of exons 2 and 3 of HLA Class I genes",
            },
          },
        ],
        basedOn: [
          {
            reference: "ServiceRequest/123",
          },
        ],
        status: "final",
        category: [
          {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0074",
                code: "GE",
                display: "Genetics",
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "13303-3",
              display: "HLA-A+​B+​C (class I) [Type]",
            },
          ],
        },
        subject: {
          reference: "Patient/119",
          display: "Mary Chalmers",
        },
        effectiveDateTime: "2016-12-15",
        issued: "2016-12-15T14:15:30-06:00",
        performer: [
          {
            reference: "Organization/68",
            display: "aTypingLab Inc",
          },
        ],
        specimen: [
          {
            reference: "Specimen/67",
            display: "buccal swab from Mary Chalmers",
          },
        ],
        result: [
          {
            reference: "urn:uuid:49a86246-4004-42eb-9bdc-f542f93f9228",
            display: "HLA-A: HLA-A:01:01G+HLA-A*01:02",
          },
          {
            reference: "urn:uuid:60613a43-c4cb-4502-b3e2-cf9215feaa70",
            display: "HLA-B: HLA-B*15:01:01G+HLA-B*57:01:01G",
          },
          {
            reference: "urn:uuid:0e0a780e-4486-4cd0-bfae-7243c579f208",
            display: "HLA-C: HLA-C*01:02:01G+HLA-C*03:04:01G",
          },
        ],
      },
      request: {
        method: "POST",
        url: "DiagnosticReport",
      },
    },
    {
      fullUrl: "urn:uuid:8200dab6-18a2-4550-b913-a7db480c0804",
      resource: {
        resourceType: "MolecularSequence",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t\t\t\t<pre>&quot;HLA-A*01:01:01:01, exon 2&quot;</pre>\n\t\t\t\t\t</div>',
        },
        type: "dna",
        coordinateSystem: 0,
        patient: {
          reference: "Patient/119",
          display: "Mary Chalmers",
        },
        specimen: {
          reference: "Specimen/120",
          display: "buccal swab from Mary Chalmers",
        },
        referenceSeq: {
          referenceSeqId: {
            coding: [
              {
                system: "http://www.ebi.ac.uk/ipd/imgt/hla",
                version: "3.23",
                code: "HLA00001",
              },
            ],
            text: "HLA-A*01:01:01:01",
          },
          windowStart: 503,
          windowEnd: 773,
        },
        observedSeq:
          "GCTCCCACTCCATGAGGTATTTCTTCACATCCGTGTCCCGGCCCGGCCGCGGGGAGCCCCGCTTCATCGCCGTGGGCTACGTGGACGACACGCAGTTCGTGCGGTTCGACAGCGACGCCGCGAGCCAGAAGATGGAGCCGCGGGCGCCGTGGATAGAGCAGGAGGGGCCGGAGTATTGGGACCAGGAGACACGGAATATGAAGGCCCACTCACAGACTGACCGAGCGAACCTGGGGACCCTGCGCGGCTACTACAACCAGAGCGAGGACG",
      },
      request: {
        method: "POST",
        url: "MolecularSequence",
      },
    },
    {
      fullUrl: "urn:uuid:7c393185-f15c-45bc-a714-c0fdbea32675",
      resource: {
        resourceType: "MolecularSequence",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t\t\t\t<pre>&quot;HLA-A*01:01:01:01, exon 3&quot;</pre>\n\t\t\t\t\t</div>',
        },
        type: "dna",
        coordinateSystem: 0,
        patient: {
          reference: "Patient/119",
          display: "Mary Chalmers",
        },
        specimen: {
          reference: "Specimen/120",
          display: "buccal swab from Mary Chalmers",
        },
        referenceSeq: {
          referenceSeqId: {
            coding: [
              {
                system: "http://www.ebi.ac.uk/ipd/imgt/hla",
                version: "3.23",
                code: "HLA00001",
              },
            ],
            text: "HLA-A*01:01:01:01",
          },
          windowStart: 1014,
          windowEnd: 1290,
        },
        observedSeq:
          "GTTCTCACACCATCCAGATAATGTATGGCTGCGACGTGGGGCCGGACGGGCGCTTCCTCCGCGGGTACCGGCAGGACGCCTACGACGGCAAGGATTACATCGCCCTGAACGAGGACCTGCGCTCTTGGACCGCGGCGGACATGGCAGCTCAGATCACCAAGCGCAAGTGGGAGGCGGTCCATGCGGCGGAGCAGCGGAGAGTCTACCTGGAGGGCCGGTGCGTGGACGGGCTCCGCAGATACCTGGAGAACGGGAAGGAGACGCTGCAGCGCACGG",
      },
      request: {
        method: "POST",
        url: "MolecularSequence",
      },
    },
    {
      fullUrl: "urn:uuid:65c85f14-c3a0-4b72-818f-820e04fcc621",
      resource: {
        resourceType: "MolecularSequence",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t\t\t\t<pre>&quot;HLA-A*01:02, exon 2&quot;</pre>\n\t\t\t\t\t</div>',
        },
        type: "dna",
        coordinateSystem: 0,
        patient: {
          reference: "Patient/119",
          display: "Mary Chalmers",
        },
        specimen: {
          reference: "Specimen/120",
          display: "buccal swab from Mary Chalmers",
        },
        referenceSeq: {
          referenceSeqId: {
            coding: [
              {
                system: "http://www.ebi.ac.uk/ipd/imgt/hla",
                version: "3.23",
                code: "HLA00002",
              },
            ],
            text: "HLA-A*01:02",
          },
          windowStart: 503,
          windowEnd: 773,
        },
        observedSeq:
          "GCTCCCACTCCATGAGGTATTTCTCCACATCCGTGTCCCGGCCCGGCAGTGGAGAGCCCCGCTTCATCGCAGTGGGCTACGTGGACGACACGCAGTTCGTGCGGTTCGACAGCGACGCCGCGAGCCAGAAGATGGAGCCGCGGGCGCCGTGGATAGAGCAGGAGGGGCCGGAGTATTGGGACCAGGAGACACGGAATATGAAGGCCCACTCACAGACTGACCGAGCGAACCTGGGGACCCTGCGCGGCTACTACAACCAGAGCGAGGACG",
      },
      request: {
        method: "POST",
        url: "MolecularSequence",
      },
    },
    {
      fullUrl: "urn:uuid:fbba9fe7-0ece-4ec1-9233-a437a8d242a0",
      resource: {
        resourceType: "MolecularSequence",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t\t\t\t<pre>&quot;HLA-A*01:02, exon 3&quot;</pre>\n\t\t\t\t\t</div>',
        },
        type: "dna",
        coordinateSystem: 0,
        patient: {
          reference: "Patient/119",
          display: "Mary Chalmers",
        },
        specimen: {
          reference: "Specimen/120",
          display: "buccal swab from Mary Chalmers",
        },
        referenceSeq: {
          referenceSeqId: {
            coding: [
              {
                system: "http://www.ebi.ac.uk/ipd/imgt/hla",
                version: "3.23",
                code: "HLA00002",
              },
            ],
            text: "HLA-A*01:02",
          },
          windowStart: 1014,
          windowEnd: 1290,
        },
        observedSeq:
          "GTTCTCACACCATCCAGATAATGTATGGCTGCGACGTGGGGCCGGACGGGCGCTTCCTCCGCGGGTACCGGCAGGACGCCTACGACGGCAAGGATTACATCGCCCTGAACGAGGACCTGCGCTCTTGGACCGCGGCGGACATGGCAGCTCAGATCACCAAGCGCAAGTGGGAGGCGGTCCATGCGGCGGAGCAGCGGAGAGTCTACCTGGAGGGCCGGTGCGTGGACGGGCTCCGCAGATACCTGGAGAACGGGAAGGAGACGCTGCAGCGCACGG",
      },
      request: {
        method: "POST",
        url: "MolecularSequence",
      },
    },
    {
      fullUrl: "urn:uuid:cbabf93e-1b4b-46f2-ba1e-d84862670670",
      resource: {
        resourceType: "MolecularSequence",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t\t\t\t<pre>&quot;HLA-B*15:01:01:01, exon 2&quot;</pre>\n\t\t\t\t\t</div>',
        },
        type: "dna",
        coordinateSystem: 0,
        patient: {
          reference: "Patient/119",
          display: "Mary Chalmers",
        },
        specimen: {
          reference: "Specimen/120",
          display: "buccal swab from Mary Chalmers",
        },
        referenceSeq: {
          referenceSeqId: {
            coding: [
              {
                system: "http://www.ebi.ac.uk/ipd/imgt/hla",
                version: "3.23",
                code: "HLA00162",
              },
            ],
            text: "HLA-B*15:01:01:01",
          },
          windowStart: 486,
          windowEnd: 756,
        },
        observedSeq:
          "GCTCCCACTCCATGAGGTATTTCTACACCGCCATGTCCCGGCCCGGCCGCGGGGAGCCCCGCTTCATCGCAGTGGGCTACGTGGACGACACCCAGTTCGTGAGGTTCGACAGCGACGCCGCGAGTCCGAGGATGGCGCCCCGGGCGCCATGGATAGAGCAGGAGGGGCCGGAGTATTGGGACCGGGAGACACAGATCTCCAAGACCAACACACAGACTTACCGAGAGAGCCTGCGGAACCTGCGCGGCTACTACAACCAGAGCGAGGCCG",
      },
      request: {
        method: "POST",
        url: "MolecularSequence",
      },
    },
    {
      fullUrl: "urn:uuid:c233ad3d-1572-48d6-93da-0a583535e138",
      resource: {
        resourceType: "MolecularSequence",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t\t\t\t<pre>&quot;HLA-B*15:01:01:01, exon 3&quot;</pre>\n\t\t\t\t\t</div>',
        },
        type: "dna",
        coordinateSystem: 0,
        patient: {
          reference: "Patient/119",
          display: "Mary Chalmers",
        },
        specimen: {
          reference: "Specimen/120",
          display: "buccal swab from Mary Chalmers",
        },
        referenceSeq: {
          referenceSeqId: {
            coding: [
              {
                system: "http://www.ebi.ac.uk/ipd/imgt/hla",
                version: "3.23",
                code: "HLA00162",
              },
            ],
            text: "HLA-B*15:01:01:01",
          },
          windowStart: 1001,
          windowEnd: 1277,
        },
        observedSeq:
          "GGTCTCACACCCTCCAGAGGATGTACGGCTGCGACGTGGGGCCGGACGGGCGCCTCCTCCGCGGGCATGACCAGTCCGCCTACGACGGCAAGGATTACATCGCCCTGAACGAGGACCTGAGCTCCTGGACCGCGGCGGACACGGCGGCTCAGATCACCCAGCGCAAGTGGGAGGCGGCCCGTGAGGCGGAGCAGTGGAGAGCCTACCTGGAGGGCCTGTGCGTGGAGTGGCTCCGCAGATACCTGGAGAACGGGAAGGAGACGCTGCAGCGCGCGG",
      },
      request: {
        method: "POST",
        url: "MolecularSequence",
      },
    },
    {
      fullUrl: "urn:uuid:05fa52d7-5c67-460a-8722-d3460b24d6fe",
      resource: {
        resourceType: "MolecularSequence",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t\t\t\t<pre>&quot;HLA-B*57:01:01, exon 2&quot;</pre>\n\t\t\t\t\t</div>',
        },
        type: "dna",
        coordinateSystem: 0,
        patient: {
          reference: "Patient/119",
          display: "Mary Chalmers",
        },
        specimen: {
          reference: "Specimen/120",
          display: "buccal swab from Mary Chalmers",
        },
        referenceSeq: {
          referenceSeqId: {
            coding: [
              {
                system: "http://www.ebi.ac.uk/ipd/imgt/hla",
                version: "3.23",
                code: "HLA00381",
              },
            ],
            text: "HLA-B*57:01:01",
          },
          windowStart: 485,
          windowEnd: 755,
        },
        observedSeq:
          "GCTCCCACTCCATGAGGTATTTCTACACCGCCATGTCCCGGCCCGGCCGCGGGGAGCCCCGCTTCATCGCAGTGGGCTACGTGGACGACACCCAGTTCGTGAGGTTCGACAGCGACGCCGCGAGTCCGAGGATGGCGCCCCGGGCGCCATGGATAGAGCAGGAGGGGCCGGAGTATTGGGACGGGGAGACACGGAACATGAAGGCCTCCGCGCAGACTTACCGAGAGAACCTGCGGATCGCGCTCCGCTACTACAACCAGAGCGAGGCCG",
      },
      request: {
        method: "POST",
        url: "MolecularSequence",
      },
    },
    {
      fullUrl: "urn:uuid:db69e549-6267-4777-b4b9-8813f3329309",
      resource: {
        resourceType: "MolecularSequence",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t\t\t\t<pre>&quot;HLA-B*57:01:01, exon 3&quot;</pre>\n\t\t\t\t\t</div>',
        },
        type: "dna",
        coordinateSystem: 0,
        patient: {
          reference: "Patient/119",
          display: "Mary Chalmers",
        },
        specimen: {
          reference: "Specimen/120",
          display: "buccal swab from Mary Chalmers",
        },
        referenceSeq: {
          referenceSeqId: {
            coding: [
              {
                system: "http://www.ebi.ac.uk/ipd/imgt/hla",
                version: "3.23",
                code: "HLA00381",
              },
            ],
            text: "HLA-B*57:01:01",
          },
          windowStart: 1001,
          windowEnd: 1277,
        },
        observedSeq:
          "GGTCTCACATCATCCAGGTGATGTATGGCTGCGACGTGGGGCCGGACGGGCGCCTCCTCCGCGGGCATGACCAGTCCGCCTACGACGGCAAGGATTACATCGCCCTGAACGAGGACCTGAGCTCCTGGACCGCGGCGGACACGGCGGCTCAGATCACCCAGCGCAAGTGGGAGGCGGCCCGTGTGGCGGAGCAGCTGAGAGCCTACCTGGAGGGCCTGTGCGTGGAGTGGCTCCGCAGATACCTGGAGAACGGGAAGGAGACGCTGCAGCGCGCGG",
      },
      request: {
        method: "POST",
        url: "MolecularSequence",
      },
    },
    {
      fullUrl: "urn:uuid:bb55c2bc-5ad2-4bc1-8ff3-c407d06b12d0",
      resource: {
        resourceType: "MolecularSequence",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t\t\t\t<pre>&quot;HLA-C*01:02:01, exon 2&quot;</pre>\n\t\t\t\t\t</div>',
        },
        type: "dna",
        coordinateSystem: 0,
        patient: {
          reference: "Patient/119",
          display: "Mary Chalmers",
        },
        specimen: {
          reference: "Specimen/120",
          display: "buccal swab from Mary Chalmers",
        },
        referenceSeq: {
          referenceSeqId: {
            coding: [
              {
                system: "http://www.ebi.ac.uk/ipd/imgt/hla",
                version: "3.23",
                code: "HLA00401",
              },
            ],
            text: "HLA-C*01:02:01",
          },
          windowStart: 486,
          windowEnd: 756,
        },
        observedSeq:
          "GCTCCCACTCCATGAAGTATTTCTTCACATCCGTGTCCCGGCCTGGCCGCGGAGAGCCCCGCTTCATCTCAGTGGGCTACGTGGACGACACGCAGTTCGTGCGGTTCGACAGCGACGCCGCGAGTCCGAGAGGGGAGCCGCGGGCGCCGTGGGTGGAGCAGGAGGGGCCGGAGTATTGGGACCGGGAGACACAGAAGTACAAGCGCCAGGCACAGACTGACCGAGTGAGCCTGCGGAACCTGCGCGGCTACTACAACCAGAGCGAGGCCG",
      },
      request: {
        method: "POST",
        url: "MolecularSequence",
      },
    },
    {
      fullUrl: "urn:uuid:46938bb2-0486-4e87-bfd3-89aab2d5e22f",
      resource: {
        resourceType: "MolecularSequence",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t\t\t\t<pre>&quot;HLA-C*01:02:01, exon 3&quot;</pre>\n\t\t\t\t\t</div>',
        },
        type: "dna",
        coordinateSystem: 0,
        patient: {
          reference: "Patient/119",
          display: "Mary Chalmers",
        },
        specimen: {
          reference: "Specimen/120",
          display: "buccal swab from Mary Chalmers",
        },
        referenceSeq: {
          referenceSeqId: {
            coding: [
              {
                system: "http://www.ebi.ac.uk/ipd/imgt/hla",
                version: "3.23",
                code: "HLA00401",
              },
            ],
            text: "HLA-C*01:02:01",
          },
          windowStart: 1002,
          windowEnd: 1278,
        },
        observedSeq:
          "GGTCTCACACCCTCCAGTGGATGTGTGGCTGCGACCTGGGGCCCGACGGGCGCCTCCTCCGCGGGTATGACCAGTACGCCTACGACGGCAAGGATTACATCGCCCTGAACGAGGACCTGCGCTCCTGGACCGCCGCGGACACCGCGGCTCAGATCACCCAGCGCAAGTGGGAGGCGGCCCGTGAGGCGGAGCAGCGGAGAGCCTACCTGGAGGGCACGTGCGTGGAGTGGCTCCGCAGATACCTGGAGAACGGGAAGGAGACGCTGCAGCGCGCGG",
      },
      request: {
        method: "POST",
        url: "MolecularSequence",
      },
    },
    {
      fullUrl: "urn:uuid:2ae2ff34-279e-43c2-9018-b054fd3fc1ce",
      resource: {
        resourceType: "MolecularSequence",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t\t\t\t<pre>&quot;HLA-C*03:04:01:01, exon 2&quot;</pre>\n\t\t\t\t\t</div>',
        },
        type: "dna",
        coordinateSystem: 0,
        patient: {
          reference: "Patient/119",
          display: "Mary Chalmers",
        },
        specimen: {
          reference: "Specimen/120",
          display: "buccal swab from Mary Chalmers",
        },
        referenceSeq: {
          referenceSeqId: {
            coding: [
              {
                system: "http://www.ebi.ac.uk/ipd/imgt/hla",
                version: "3.23",
                code: "HLA00413",
              },
            ],
            text: "HLA-C*03:04:01:01",
          },
          windowStart: 486,
          windowEnd: 756,
        },
        observedSeq:
          "GCTCCCACTCCATGAGGTATTTCTACACCGCTGTGTCCCGGCCCGGCCGCGGGGAGCCCCACTTCATCGCAGTGGGCTACGTGGACGACACGCAGTTCGTGCGGTTCGACAGCGACGCCGCGAGTCCGAGAGGGGAGCCGCGGGCGCCGTGGGTGGAGCAGGAGGGGCCGGAGTATTGGGACCGGGAGACACAGAAGTACAAGCGCCAGGCACAGACTGACCGAGTGAGCCTGCGGAACCTGCGCGGCTACTACAACCAGAGCGAGGCCG",
      },
      request: {
        method: "POST",
        url: "MolecularSequence",
      },
    },
    {
      fullUrl: "urn:uuid:19153ef1-68c6-47a2-9676-c4eefbd39af9",
      resource: {
        resourceType: "MolecularSequence",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t\t\t\t<pre>&quot;HLA-C*03:04:01:01, exon 3&quot;</pre>\n\t\t\t\t\t</div>',
        },
        type: "dna",
        coordinateSystem: 0,
        patient: {
          reference: "Patient/119",
          display: "Mary Chalmers",
        },
        specimen: {
          reference: "Specimen/120",
          display: "buccal swab from Mary Chalmers",
        },
        referenceSeq: {
          referenceSeqId: {
            coding: [
              {
                system: "http://www.ebi.ac.uk/ipd/imgt/hla",
                version: "3.23",
                code: "HLA00413",
              },
            ],
            text: "HLA-C*03:04:01:01",
          },
          windowStart: 1001,
          windowEnd: 1277,
        },
        observedSeq:
          "GGTCTCACATCATCCAGAGGATGTATGGCTGCGACGTGGGGCCCGACGGGCGCCTCCTCCGCGGGTATGACCAGTACGCCTACGACGGCAAGGATTACATCGCCCTGAACGAGGATCTGCGCTCCTGGACCGCCGCGGACACGGCGGCTCAGATCACCCAGCGCAAGTGGGAGGCGGCCCGTGAGGCGGAGCAGCTGAGAGCCTACCTGGAGGGCCTGTGCGTGGAGTGGCTCCGCAGATACCTGAAGAATGGGAAGGAGACGCTGCAGCGCGCGG",
      },
      request: {
        method: "POST",
        url: "MolecularSequence",
      },
    },
    {
      fullUrl: "urn:uuid:b7765bbf-df40-486a-9f2f-404309643de6",
      resource: {
        resourceType: "Observation",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t\t\t\t<pre>HLA-A:01:01:01G</pre>\n\t\t\t\t\t</div>',
        },
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/observation-geneticsGene",
            valueCodeableConcept: {
              coding: [
                {
                  system: "http://www.genenames.org",
                  code: "HGNC:4931",
                  display: "HLA-A",
                },
              ],
            },
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/observation-geneticsGenomicSourceClass",
            valueCodeableConcept: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "LA6683-2",
                  display: "germline",
                },
              ],
            },
          },
        ],
        status: "final",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "57290-9",
              display: "HLA-A [Type] by High resolution",
            },
          ],
        },
        subject: {
          reference: "Patient/119",
          display: "Mary Chalmers",
        },
        effectiveDateTime: "2016-12-15",
        specimen: {
          reference: "Specimen/120",
          display: "buccal swab from Mary Chalmers",
        },
        derivedFrom: [
          {
            reference: "urn:uuid:8200dab6-18a2-4550-b913-a7db480c0804",
            display: "HLA-A*01:01:01:01, exon 2",
          },
          {
            reference: "urn:uuid:7c393185-f15c-45bc-a714-c0fdbea32675",
            display: "HLA-A*01:01:01:01, exon 3",
          },
        ],
      },
      request: {
        method: "POST",
        url: "Observation",
      },
    },
    {
      fullUrl: "urn:uuid:d98d92a7-0e86-4ae5-b036-b7e1bba6ec32",
      resource: {
        resourceType: "Observation",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t\t\t\t<pre>HLA-A*01:02</pre>\n\t\t\t\t\t</div>',
        },
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/observation-geneticsGene",
            valueCodeableConcept: {
              coding: [
                {
                  system: "http://www.genenames.org",
                  code: "HGNC:4931",
                  display: "HLA-A",
                },
              ],
            },
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/observation-geneticsGenomicSourceClass",
            valueCodeableConcept: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "LA6683-2",
                  display: "germline",
                },
              ],
            },
          },
        ],
        status: "final",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "57290-9",
              display: "HLA-A [Type] by High resolution",
            },
          ],
        },
        subject: {
          reference: "Patient/119",
          display: "Mary Chalmers",
        },
        effectiveDateTime: "2016-12-15",
        specimen: {
          reference: "Specimen/120",
          display: "buccal swab from Mary Chalmers",
        },
        derivedFrom: [
          {
            reference: "urn:uuid:65c85f14-c3a0-4b72-818f-820e04fcc621",
            display: "HLA-A*01:02, exon 2",
          },
          {
            reference: "urn:uuid:fbba9fe7-0ece-4ec1-9233-a437a8d242a0",
            display: "HLA-A*01:02, exon 3",
          },
        ],
      },
      request: {
        method: "POST",
        url: "Observation",
      },
    },
    {
      fullUrl: "urn:uuid:49a86246-4004-42eb-9bdc-f542f93f9228",
      resource: {
        resourceType: "Observation",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t\t\t\t<pre>HLA-A:01:01G+HLA-A*01:02</pre>\n\t\t\t\t\t</div>',
        },
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/observation-geneticsGene",
            valueCodeableConcept: {
              coding: [
                {
                  system: "http://www.genenames.org",
                  code: "HGNC:4931",
                  display: "HLA-A",
                },
              ],
            },
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/observation-geneticsGenomicSourceClass",
            valueCodeableConcept: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "LA6683-2",
                  display: "germline",
                },
              ],
            },
          },
        ],
        status: "final",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "57290-9",
              display: "HLA-A [Type] by High resolution",
            },
          ],
        },
        subject: {
          reference: "Patient/119",
          display: "Mary Chalmers",
        },
        effectiveDateTime: "2016-12-15",
        specimen: {
          reference: "Specimen/120",
          display: "buccal swab from Mary Chalmers",
        },
        derivedFrom: [
          {
            reference: "urn:uuid:b7765bbf-df40-486a-9f2f-404309643de6",
            display: "HLA-A*01:01:01G, exons 2 and 3",
          },
          {
            reference: "urn:uuid:d98d92a7-0e86-4ae5-b036-b7e1bba6ec32",
            display: "HLA-A*01:02, exons 2 and 3",
          },
        ],
      },
      request: {
        method: "POST",
        url: "Observation",
      },
    },
    {
      fullUrl: "urn:uuid:e2092243-2970-49d2-a90f-b90d1d49715a",
      resource: {
        resourceType: "Observation",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t\t\t\t<pre>HLA-B*15:01:01G</pre>\n\t\t\t\t\t</div>',
        },
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/observation-geneticsGene",
            valueCodeableConcept: {
              coding: [
                {
                  system: "http://www.genenames.org",
                  code: "HGNC:4932",
                  display: "HLA-B",
                },
              ],
            },
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/observation-geneticsGenomicSourceClass",
            valueCodeableConcept: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "LA6683-2",
                  display: "germline",
                },
              ],
            },
          },
        ],
        status: "final",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "57291-7",
              display: "HLA-B [Type] by High resolution",
            },
          ],
        },
        subject: {
          reference: "Patient/119",
          display: "Mary Chalmers",
        },
        effectiveDateTime: "2016-12-15",
        specimen: {
          reference: "Specimen/120",
          display: "buccal swab from Mary Chalmers",
        },
        derivedFrom: [
          {
            reference: "urn:uuid:cbabf93e-1b4b-46f2-ba1e-d84862670670",
            display: "HLA-B*15:01:01:01, exon 2",
          },
          {
            reference: "urn:uuid:c233ad3d-1572-48d6-93da-0a583535e138",
            display: "HLA-B*15:01:01:01, exon 3",
          },
        ],
      },
      request: {
        method: "POST",
        url: "Observation",
      },
    },
    {
      fullUrl: "urn:uuid:792be53e-d4fb-4887-a367-815ef6c706e5",
      resource: {
        resourceType: "Observation",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t\t\t\t<pre>HLA-B*57:01:01G</pre>\n\t\t\t\t\t</div>',
        },
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/observation-geneticsGene",
            valueCodeableConcept: {
              coding: [
                {
                  system: "http://www.genenames.org",
                  code: "HGNC:4932",
                  display: "HLA-B",
                },
              ],
            },
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/observation-geneticsGenomicSourceClass",
            valueCodeableConcept: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "LA6683-2",
                  display: "germline",
                },
              ],
            },
          },
        ],
        status: "final",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "57291-7",
              display: "HLA-B [Type] by High resolution",
            },
          ],
        },
        subject: {
          reference: "Patient/119",
          display: "Mary Chalmers",
        },
        effectiveDateTime: "2016-12-15",
        specimen: {
          reference: "Specimen/120",
          display: "buccal swab from Mary Chalmers",
        },
        derivedFrom: [
          {
            reference: "urn:uuid:05fa52d7-5c67-460a-8722-d3460b24d6fe",
            display: "HLA-B*57:01:01, exon 2",
          },
          {
            reference: "urn:uuid:db69e549-6267-4777-b4b9-8813f3329309",
            display: "HLA-B*57:01:01, exon 3",
          },
        ],
      },
      request: {
        method: "POST",
        url: "Observation",
      },
    },
    {
      fullUrl: "urn:uuid:60613a43-c4cb-4502-b3e2-cf9215feaa70",
      resource: {
        resourceType: "Observation",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t\t\t\t<pre>HLA-B*15:01:01G+HLA-B*57:01:01G</pre>\n\t\t\t\t\t</div>',
        },
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/observation-geneticsGene",
            valueCodeableConcept: {
              coding: [
                {
                  system: "http://www.genenames.org",
                  code: "HGNC:4932",
                  display: "HLA-B",
                },
              ],
            },
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/observation-geneticsGenomicSourceClass",
            valueCodeableConcept: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "LA6683-2",
                  display: "germline",
                },
              ],
            },
          },
        ],
        status: "final",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "57291-7",
              display: "HLA-B [Type] by High resolution",
            },
          ],
        },
        subject: {
          reference: "Patient/119",
          display: "Mary Chalmers",
        },
        effectiveDateTime: "2016-12-15",
        specimen: {
          reference: "Specimen/120",
          display: "buccal swab from Mary Chalmers",
        },
        derivedFrom: [
          {
            reference: "urn:uuid:e2092243-2970-49d2-a90f-b90d1d49715a",
            display: "HLA-B*15:01:01G, exons 2 and 3",
          },
          {
            reference: "urn:uuid:792be53e-d4fb-4887-a367-815ef6c706e5",
            display: "HLA-B*57:01:01G, exons 2 and 3",
          },
        ],
      },
      request: {
        method: "POST",
        url: "Observation",
      },
    },
    {
      fullUrl: "urn:uuid:709c5315-9403-4867-9d82-0b953836665f",
      resource: {
        resourceType: "Observation",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t\t\t\t<pre>HLA-C*01:02:01</pre>\n\t\t\t\t\t</div>',
        },
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/observation-geneticsGene",
            valueCodeableConcept: {
              coding: [
                {
                  system: "http://www.genenames.org",
                  code: "HGNC:4933",
                  display: "HLA-C",
                },
              ],
            },
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/observation-geneticsGenomicSourceClass",
            valueCodeableConcept: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "LA6683-2",
                  display: "germline",
                },
              ],
            },
          },
        ],
        status: "final",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "77636-9",
              display: "HLA-C [Type] by High resolution",
            },
          ],
        },
        subject: {
          reference: "Patient/119",
          display: "Mary Chalmers",
        },
        effectiveDateTime: "2016-12-15",
        specimen: {
          reference: "Specimen/120",
          display: "buccal swab from Mary Chalmers",
        },
        derivedFrom: [
          {
            reference: "urn:uuid:bb55c2bc-5ad2-4bc1-8ff3-c407d06b12d0",
            display: "HLA-C*01:02:01, exon 2",
          },
          {
            reference: "urn:uuid:46938bb2-0486-4e87-bfd3-89aab2d5e22f",
            display: "HLA-C*01:02:01, exon 3",
          },
        ],
      },
      request: {
        method: "POST",
        url: "Observation",
      },
    },
    {
      fullUrl: "urn:uuid:8b2aa21c-1426-4717-8ab0-a84d83df7d47",
      resource: {
        resourceType: "Observation",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t\t\t\t<pre>HLA-C*03:04:01:01</pre>\n\t\t\t\t\t</div>',
        },
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/observation-geneticsGene",
            valueCodeableConcept: {
              coding: [
                {
                  system: "http://www.genenames.org",
                  code: "HGNC:4933",
                  display: "HLA-C",
                },
              ],
            },
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/observation-geneticsGenomicSourceClass",
            valueCodeableConcept: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "LA6683-2",
                  display: "germline",
                },
              ],
            },
          },
        ],
        status: "final",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "77636-9",
              display: "HLA-C [Type] by High resolution",
            },
          ],
        },
        subject: {
          reference: "Patient/119",
          display: "Mary Chalmers",
        },
        effectiveDateTime: "2016-12-15",
        specimen: {
          reference: "Specimen/120",
          display: "buccal swab from Mary Chalmers",
        },
        derivedFrom: [
          {
            reference: "urn:uuid:2ae2ff34-279e-43c2-9018-b054fd3fc1ce",
            display: "HLA-C*03:04:01:01, exon 2",
          },
          {
            reference: "urn:uuid:19153ef1-68c6-47a2-9676-c4eefbd39af9",
            display: "HLA-C*03:04:01:01, exon 3",
          },
        ],
      },
      request: {
        method: "POST",
        url: "Observation",
      },
    },
    {
      fullUrl: "urn:uuid:0e0a780e-4486-4cd0-bfae-7243c579f208",
      resource: {
        resourceType: "Observation",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t\t\t\t<pre>HLA-C*01:02:01G+HLA-C*03:04:01G</pre>\n\t\t\t\t\t</div>',
        },
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/observation-geneticsGene",
            valueCodeableConcept: {
              coding: [
                {
                  system: "http://www.genenames.org",
                  code: "HGNC:4933",
                  display: "HLA-C",
                },
              ],
            },
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/observation-geneticsGenomicSourceClass",
            valueCodeableConcept: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "LA6683-2",
                  display: "germline",
                },
              ],
            },
          },
        ],
        status: "final",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "77636-9",
              display: "HLA-C [Type] by High resolution",
            },
          ],
        },
        subject: {
          reference: "Patient/119",
          display: "Mary Chalmers",
        },
        effectiveDateTime: "2016-12-15",
        specimen: {
          reference: "Specimen/120",
          display: "buccal swab from Mary Chalmers",
        },
        derivedFrom: [
          {
            reference: "urn:uuid:709c5315-9403-4867-9d82-0b953836665f",
            display: "HLA-C*01:02:01G, exons 2 and 3",
          },
          {
            reference: "urn:uuid:8b2aa21c-1426-4717-8ab0-a84d83df7d47",
            display: "HLA-C*03:04:01G, exons 2 and 3",
          },
        ],
      },
      request: {
        method: "POST",
        url: "Observation",
      },
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

export const DiagnosticreportMicro1: Bundle = {
  resourceType: "Bundle",
  id: "micro",
  type: "collection",
  entry: [
    {
      fullUrl: "https://example.com/base/DiagnosticReport/micro",
      resource: {
        resourceType: "DiagnosticReport",
        id: "micro",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: micro</p><p><b>identifier</b>: 290741144</p><p><b>basedOn</b>: <a>ServiceRequest/req</a></p><p><b>status</b>: final</p><p><b>category</b>: Microbiology <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology)</span></p><p><b>code</b>: Culture, MRSA <span>(Details : {LOINC code '632-0' = 'Bacteria identified in Wound by Aerobe culture)</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>issued</b>: 10/08/2009 8:25:44 AM</p><p><b>performer</b>: Todd Ashby</p><p><b>result</b>: <a>Observation/org1</a></p></div>",
        },
        identifier: [
          {
            system: "http://hnam.org/identifiers/orders",
            value: "290741144",
          },
        ],
        basedOn: [
          {
            reference: "ServiceRequest/req",
          },
        ],
        status: "final",
        category: [
          {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0074",
                code: "MB",
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "632-0",
            },
          ],
          text: "Culture, MRSA",
        },
        subject: {
          reference: "Patient/example",
        },
        issued: "2009-08-10T08:25:44+10:00",
        performer: [
          {
            display: "Todd Ashby",
          },
        ],
        result: [
          {
            reference: "Observation/org1",
          },
        ],
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/obx1-4",
      resource: {
        resourceType: "Observation",
        id: "obx1-4",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx1-4</p><p><b>status</b>: final</p><p><b>code</b>: ORGANISM <span>(Details : {http://acme.org/lab/codes/tests code 'ORGANISM' = 'ORGANISM)</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: Staphylococcus aureus <span>(Details : {http://acme.org/lab/codes/organisms code 'Staaur' = 'Staaur)</span></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://acme.org/lab/codes/tests",
              code: "ORGANISM",
            },
          ],
        },
        subject: {
          reference: "Patient/example",
        },
        performer: [
          {
            display: "Todd Ashby",
          },
        ],
        valueCodeableConcept: {
          coding: [
            {
              system: "http://acme.org/lab/codes/organisms",
              code: "Staaur",
            },
          ],
          text: "Staphylococcus aureus",
        },
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/obx1-5",
      resource: {
        resourceType: "Observation",
        id: "obx1-5",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx1-5</p><p><b>status</b>: final</p><p><b>code</b>: CULTPOSNEG <span>(Details : {http://acme.org/lab/codes/tests code 'CULTPOSNEG' = 'CULTPOSNEG)</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: POS <span>(Details : {http://acme.org/lab/codes/flags code 'POS' = 'POS)</span></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://acme.org/lab/codes/tests",
              code: "CULTPOSNEG",
            },
          ],
        },
        subject: {
          reference: "Patient/example",
        },
        performer: [
          {
            display: "Todd Ashby",
          },
        ],
        valueCodeableConcept: {
          coding: [
            {
              system: "http://acme.org/lab/codes/flags",
              code: "POS",
            },
          ],
        },
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/obx2-1",
      resource: {
        resourceType: "Observation",
        id: "obx2-1",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-1</p><p><b>status</b>: final</p><p><b>code</b>: Ampicillin <span>(Details : {http://acme.org/lab/codes/tests code '60504' = '60504', given as 'Ampicillin'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>interpretation</b>: Resistant <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'R' = 'Resistant)</span></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://acme.org/lab/codes/tests",
              code: "60504",
              display: "Ampicillin",
            },
          ],
        },
        subject: {
          reference: "Patient/example",
        },
        performer: [
          {
            display: "Todd Ashby",
          },
        ],
        interpretation: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                code: "R",
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/obx2-2",
      resource: {
        resourceType: "Observation",
        id: "obx2-2",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-2</p><p><b>status</b>: final</p><p><b>code</b>: Cefazolin <span>(Details : {http://acme.org/lab/codes/tests code '60512' = '60512', given as 'Cefazolin'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: &lt;=2</p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible)</span></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://acme.org/lab/codes/tests",
              code: "60512",
              display: "Cefazolin",
            },
          ],
        },
        subject: {
          reference: "Patient/example",
        },
        performer: [
          {
            display: "Todd Ashby",
          },
        ],
        valueQuantity: {
          value: 2,
          comparator: "<=",
        },
        interpretation: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                code: "S",
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/obx2-4",
      resource: {
        resourceType: "Observation",
        id: "obx2-4",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-4</p><p><b>status</b>: final</p><p><b>code</b>: Cefoxitin <span>(Details : {http://acme.org/lab/codes/tests code '60516' = '60516', given as 'Cefoxitin'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: &lt;=4</p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible)</span></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://acme.org/lab/codes/tests",
              code: "60516",
              display: "Cefoxitin",
            },
          ],
        },
        subject: {
          reference: "Patient/example",
        },
        performer: [
          {
            display: "Todd Ashby",
          },
        ],
        valueQuantity: {
          value: 4,
          comparator: "<=",
        },
        interpretation: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                code: "S",
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/obx2-6",
      resource: {
        resourceType: "Observation",
        id: "obx2-6",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-6</p><p><b>status</b>: final</p><p><b>code</b>: Clindamycin <span>(Details : {http://acme.org/lab/codes/tests code '60527' = '60527', given as 'Clindamycin'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: &gt;=0.5</p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible)</span></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://acme.org/lab/codes/tests",
              code: "60527",
              display: "Clindamycin",
            },
          ],
        },
        subject: {
          reference: "Patient/example",
        },
        performer: [
          {
            display: "Todd Ashby",
          },
        ],
        valueQuantity: {
          value: 0.5,
          comparator: ">=",
        },
        interpretation: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                code: "S",
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/obx2-8",
      resource: {
        resourceType: "Observation",
        id: "obx2-8",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-8</p><p><b>status</b>: final</p><p><b>code</b>: Daptomycin <span>(Details : {http://acme.org/lab/codes/tests code '61203' = '61203', given as 'Daptomycin'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: &gt;=1</p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible)</span></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://acme.org/lab/codes/tests",
              code: "61203",
              display: "Daptomycin",
            },
          ],
        },
        subject: {
          reference: "Patient/example",
        },
        performer: [
          {
            display: "Todd Ashby",
          },
        ],
        valueQuantity: {
          value: 1,
          comparator: ">=",
        },
        interpretation: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                code: "S",
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/obx2-10",
      resource: {
        resourceType: "Observation",
        id: "obx2-10",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-10</p><p><b>status</b>: final</p><p><b>code</b>: Doxycycline <span>(Details : {http://acme.org/lab/codes/tests code '60532' = '60532', given as 'Doxycycline'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: &lt;=0.5</p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible)</span></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://acme.org/lab/codes/tests",
              code: "60532",
              display: "Doxycycline",
            },
          ],
        },
        subject: {
          reference: "Patient/example",
        },
        performer: [
          {
            display: "Todd Ashby",
          },
        ],
        valueQuantity: {
          value: 0.5,
          comparator: "<=",
        },
        interpretation: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                code: "S",
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/obx2-12",
      resource: {
        resourceType: "Observation",
        id: "obx2-12",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-12</p><p><b>status</b>: final</p><p><b>code</b>: Erythromycin <span>(Details : {http://acme.org/lab/codes/tests code '60533' = '60533', given as 'Erythromycin'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: &gt;=8</p><p><b>interpretation</b>: Resistant <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'R' = 'Resistant)</span></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://acme.org/lab/codes/tests",
              code: "60533",
              display: "Erythromycin",
            },
          ],
        },
        subject: {
          reference: "Patient/example",
        },
        performer: [
          {
            display: "Todd Ashby",
          },
        ],
        valueQuantity: {
          value: 8,
          comparator: ">=",
        },
        interpretation: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                code: "R",
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/obx2-14",
      resource: {
        resourceType: "Observation",
        id: "obx2-14",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-14</p><p><b>status</b>: final</p><p><b>code</b>: Gentamicin <span>(Details : {http://acme.org/lab/codes/tests code '60536' = '60536', given as 'Gentamicin'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: &lt;=2</p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible)</span></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://acme.org/lab/codes/tests",
              code: "60536",
              display: "Gentamicin",
            },
          ],
        },
        subject: {
          reference: "Patient/example",
        },
        performer: [
          {
            display: "Todd Ashby",
          },
        ],
        valueQuantity: {
          value: 2,
          comparator: "<=",
        },
        interpretation: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                code: "S",
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/obx2-16",
      resource: {
        resourceType: "Observation",
        id: "obx2-16",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-16</p><p><b>status</b>: final</p><p><b>code</b>: Levofloxacin <span>(Details : {http://acme.org/lab/codes/tests code '61007' = '61007', given as 'Levofloxacin'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: &lt;=0.5</p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible)</span></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://acme.org/lab/codes/tests",
              code: "61007",
              display: "Levofloxacin",
            },
          ],
        },
        subject: {
          reference: "Patient/example",
        },
        performer: [
          {
            display: "Todd Ashby",
          },
        ],
        valueQuantity: {
          value: 0.5,
          comparator: "<=",
        },
        interpretation: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                code: "S",
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/obx2-18",
      resource: {
        resourceType: "Observation",
        id: "obx2-18",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-18</p><p><b>status</b>: final</p><p><b>code</b>: Linezolid <span>(Details : {http://acme.org/lab/codes/tests code '60699' = '60699', given as 'Linezolid'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: 4</p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible)</span></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://acme.org/lab/codes/tests",
              code: "60699",
              display: "Linezolid",
            },
          ],
        },
        subject: {
          reference: "Patient/example",
        },
        performer: [
          {
            display: "Todd Ashby",
          },
        ],
        valueQuantity: {
          value: 4,
        },
        interpretation: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                code: "S",
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/obx2-20",
      resource: {
        resourceType: "Observation",
        id: "obx2-20",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-20</p><p><b>status</b>: final</p><p><b>code</b>: Moxifloxacin <span>(Details : {http://acme.org/lab/codes/tests code '61204' = '61204', given as 'Moxifloxacin'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: &lt;=0.5</p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible)</span></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://acme.org/lab/codes/tests",
              code: "61204",
              display: "Moxifloxacin",
            },
          ],
        },
        subject: {
          reference: "Patient/example",
        },
        performer: [
          {
            display: "Todd Ashby",
          },
        ],
        valueQuantity: {
          value: 0.5,
          comparator: "<=",
        },
        interpretation: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                code: "S",
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/obx2-22",
      resource: {
        resourceType: "Observation",
        id: "obx2-22",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-22</p><p><b>status</b>: final</p><p><b>code</b>: Oxacillin <span>(Details : {http://acme.org/lab/codes/tests code '60551' = '60551', given as 'Oxacillin'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: 0.5</p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible)</span></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://acme.org/lab/codes/tests",
              code: "60551",
              display: "Oxacillin",
            },
          ],
        },
        subject: {
          reference: "Patient/example",
        },
        performer: [
          {
            display: "Todd Ashby",
          },
        ],
        valueQuantity: {
          value: 0.5,
        },
        interpretation: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                code: "S",
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/obx2-24",
      resource: {
        resourceType: "Observation",
        id: "obx2-24",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-24</p><p><b>status</b>: final</p><p><b>code</b>: Penicillin <span>(Details : {http://acme.org/lab/codes/tests code '60552' = '60552', given as 'Penicillin'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: &gt;=2</p><p><b>interpretation</b>: Resistant <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'R' = 'Resistant)</span></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://acme.org/lab/codes/tests",
              code: "60552",
              display: "Penicillin",
            },
          ],
        },
        subject: {
          reference: "Patient/example",
        },
        performer: [
          {
            display: "Todd Ashby",
          },
        ],
        valueQuantity: {
          value: 2,
          comparator: ">=",
        },
        interpretation: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                code: "R",
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/obx2-26",
      resource: {
        resourceType: "Observation",
        id: "obx2-26",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-26</p><p><b>status</b>: final</p><p><b>code</b>: Quinupristin/Dalfopristin <span>(Details : {http://acme.org/lab/codes/tests code '60697' = '60697', given as 'Quinupristin/Dalfopristin'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: 0.5</p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible)</span></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://acme.org/lab/codes/tests",
              code: "60697",
              display: "Quinupristin/Dalfopristin",
            },
          ],
        },
        subject: {
          reference: "Patient/example",
        },
        performer: [
          {
            display: "Todd Ashby",
          },
        ],
        valueQuantity: {
          value: 0.5,
        },
        interpretation: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                code: "S",
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/obx2-28",
      resource: {
        resourceType: "Observation",
        id: "obx2-28",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-28</p><p><b>status</b>: final</p><p><b>code</b>: Rifampin <span>(Details : {http://acme.org/lab/codes/tests code '60555' = '60555', given as 'Rifampin'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: &lt;=0.5</p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible)</span></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://acme.org/lab/codes/tests",
              code: "60555",
              display: "Rifampin",
            },
          ],
        },
        subject: {
          reference: "Patient/example",
        },
        performer: [
          {
            display: "Todd Ashby",
          },
        ],
        valueQuantity: {
          value: 0.5,
          comparator: "<=",
        },
        interpretation: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                code: "S",
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/obx2-30",
      resource: {
        resourceType: "Observation",
        id: "obx2-30",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-30</p><p><b>status</b>: final</p><p><b>code</b>: Tetracycline <span>(Details : {http://acme.org/lab/codes/tests code '60558' = '60558', given as 'Tetracycline'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: &lt;=0.5</p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible)</span></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://acme.org/lab/codes/tests",
              code: "60558",
              display: "Tetracycline",
            },
          ],
        },
        subject: {
          reference: "Patient/example",
        },
        performer: [
          {
            display: "Todd Ashby",
          },
        ],
        valueQuantity: {
          value: 0.5,
          comparator: "<=",
        },
        interpretation: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                code: "S",
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/obx2-32",
      resource: {
        resourceType: "Observation",
        id: "obx2-32",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-32</p><p><b>status</b>: final</p><p><b>code</b>: Trimethoprim/Sulfamethoxazole <span>(Details : {http://acme.org/lab/codes/tests code '60561' = '60561', given as 'Trimethoprim/Sulfamethoxazole'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: &lt;=0.0526</p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible)</span></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://acme.org/lab/codes/tests",
              code: "60561",
              display: "Trimethoprim/Sulfamethoxazole",
            },
          ],
        },
        subject: {
          reference: "Patient/example",
        },
        performer: [
          {
            display: "Todd Ashby",
          },
        ],
        valueQuantity: {
          value: 0.0526,
          comparator: "<=",
        },
        interpretation: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                code: "S",
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/obx2-34",
      resource: {
        resourceType: "Observation",
        id: "obx2-34",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-34</p><p><b>status</b>: final</p><p><b>code</b>: Vancomycin <span>(Details : {http://acme.org/lab/codes/tests code '60563' = '60563', given as 'Vancomycin'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: 1</p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible)</span></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://acme.org/lab/codes/tests",
              code: "60563",
              display: "Vancomycin",
            },
          ],
        },
        subject: {
          reference: "Patient/example",
        },
        performer: [
          {
            display: "Todd Ashby",
          },
        ],
        valueQuantity: {
          value: 1,
        },
        interpretation: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                code: "S",
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/nte-1",
      resource: {
        resourceType: "Observation",
        id: "nte-1",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: nte-1</p><p><b>status</b>: final</p><p><b>code</b>: D-Test <span>(Details : {http://acme.org/lab/codes/tests code '2099930' = '2099930', given as 'D-Test'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: D-Test:  Negative - This isolate does not demonstrate inducible clindamycin resistance in vitro.</p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://acme.org/lab/codes/tests",
              code: "2099930",
              display: "D-Test",
            },
          ],
        },
        subject: {
          reference: "Patient/example",
        },
        performer: [
          {
            display: "Todd Ashby",
          },
        ],
        valueString:
          "D-Test:  Negative - This isolate does not demonstrate inducible clindamycin resistance in vitro.",
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/obx3-1",
      resource: {
        resourceType: "Observation",
        id: "obx3-1",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx3-1</p><p><b>status</b>: final</p><p><b>code</b>: Oxacillin <span>(Details : {http://acme.org/lab/codes/tests code '60036' = '60036', given as 'Oxacillin'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible)</span></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://acme.org/lab/codes/tests",
              code: "60036",
              display: "Oxacillin",
            },
          ],
        },
        subject: {
          reference: "Patient/example",
        },
        performer: [
          {
            display: "Todd Ashby",
          },
        ],
        interpretation: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                code: "S",
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/obr-2",
      resource: {
        resourceType: "Observation",
        id: "obr-2",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obr-2</p><p><b>status</b>: final</p><p><b>code</b>: Susceptibility - Automated broth dilution (Billed) <span>(Details : {http://acme.org/lab/codes/panels code '60790' = '60790', given as 'Susceptibility - Automated broth dilution (Billed)'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>hasMember</b>: </p><ul><li><a>Observation/obx2-1</a></li><li><a>Observation/obx2-2</a></li><li><a>Observation/obx2-4</a></li><li><a>Observation/obx2-6</a></li><li><a>Observation/obx2-8</a></li><li><a>Observation/obx2-10</a></li><li><a>Observation/obx2-12</a></li><li><a>Observation/obx2-14</a></li><li><a>Observation/obx2-16</a></li><li><a>Observation/obx2-18</a></li><li><a>Observation/obx2-20</a></li><li><a>Observation/obx2-22</a></li><li><a>Observation/obx2-24</a></li><li><a>Observation/obx2-26</a></li><li><a>Observation/obx2-28</a></li><li><a>Observation/obx2-30</a></li><li><a>Observation/obx2-32</a></li><li><a>Observation/obx2-34</a></li><li><a>Observation/nte-1</a></li></ul></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://acme.org/lab/codes/panels",
              code: "60790",
              display: "Susceptibility - Automated broth dilution (Billed)",
            },
          ],
        },
        subject: {
          reference: "Patient/example",
        },
        performer: [
          {
            display: "Todd Ashby",
          },
        ],
        hasMember: [
          {
            reference: "Observation/obx2-1",
          },
          {
            reference: "Observation/obx2-2",
          },
          {
            reference: "Observation/obx2-4",
          },
          {
            reference: "Observation/obx2-6",
          },
          {
            reference: "Observation/obx2-8",
          },
          {
            reference: "Observation/obx2-10",
          },
          {
            reference: "Observation/obx2-12",
          },
          {
            reference: "Observation/obx2-14",
          },
          {
            reference: "Observation/obx2-16",
          },
          {
            reference: "Observation/obx2-18",
          },
          {
            reference: "Observation/obx2-20",
          },
          {
            reference: "Observation/obx2-22",
          },
          {
            reference: "Observation/obx2-24",
          },
          {
            reference: "Observation/obx2-26",
          },
          {
            reference: "Observation/obx2-28",
          },
          {
            reference: "Observation/obx2-30",
          },
          {
            reference: "Observation/obx2-32",
          },
          {
            reference: "Observation/obx2-34",
          },
          {
            reference: "Observation/nte-1",
          },
        ],
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/obr-3",
      resource: {
        resourceType: "Observation",
        id: "obr-3",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obr-3</p><p><b>status</b>: final</p><p><b>code</b>: Susceptibility - Disk diffusion (Billed) <span>(Details : {http://acme.org/lab/codes/panels code '60418' = '60418', given as 'Susceptibility - Disk diffusion (Billed)'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>hasMember</b>: <a>Observation/obx3-1</a></p></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://acme.org/lab/codes/panels",
              code: "60418",
              display: "Susceptibility - Disk diffusion (Billed)",
            },
          ],
        },
        subject: {
          reference: "Patient/example",
        },
        hasMember: [
          {
            reference: "Observation/obx3-1",
          },
        ],
      },
    },
    {
      fullUrl: "https://example.com/base/Observation/org1",
      resource: {
        resourceType: "Observation",
        id: "org1",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: org1</p><p><b>status</b>: final</p><p><b>code</b>: Staphylococcus aureus Panel <span>(Details : {http://acme.org/lab/codes/organisms code 'Staaur' = 'Staaur)</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>hasMember</b>: </p><ul><li><a>Observation/obx1-4</a></li><li><a>Observation/obx1-5</a></li><li><a>Observation/obr-2</a></li><li><a>Observation/obr-3</a></li></ul></div>",
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://acme.org/lab/codes/organisms",
              code: "Staaur",
            },
          ],
          text: "Staphylococcus aureus Panel",
        },
        subject: {
          reference: "Patient/example",
        },
        hasMember: [
          {
            reference: "Observation/obx1-4",
          },
          {
            reference: "Observation/obx1-5",
          },
          {
            reference: "Observation/obr-2",
          },
          {
            reference: "Observation/obr-3",
          },
        ],
      },
    },
    {
      fullUrl: "https://example.com/base/ServiceRequest/req",
      resource: {
        resourceType: "ServiceRequest",
        id: "req",
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: req</p><p><b>identifier</b>: 255337816</p><p><b>status</b>: active</p><p><b>intent</b>: original-order</p><p><b>code</b>: Culture, MRSA <span>(Details : {LOINC code '632-0' = 'Bacteria identified in Wound by Aerobe culture)</span></p><p><b>subject</b>: <a>Patient/example</a></p></div>",
        },
        identifier: [
          {
            value: "255337816",
          },
        ],
        status: "active",
        intent: "original-order",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "632-0",
            },
          ],
          text: "Culture, MRSA",
        },
        subject: {
          reference: "Patient/example",
        },
      },
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

export const DocumentExampleDischargesummary: Bundle = {
  resourceType: "Bundle",
  id: "father",
  meta: {
    lastUpdated: "2013-05-28T22:12:21Z",
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
  identifier: {
    system: "urn:ietf:rfc:3986",
    value: "urn:uuid:0c3151bd-1cbf-4d64-b04d-cd9187a4c6e0",
  },
  type: "document",
  timestamp: "2013-05-28T22:12:21Z",
  entry: [
    {
      fullUrl:
        "http://fhir.healthintersections.com.au/open/Composition/180f219f-97a8-486d-99d9-ed631fe4fc57",
      resource: {
        resourceType: "Composition",
        id: "180f219f-97a8-486d-99d9-ed631fe4fc57",
        meta: {
          lastUpdated: "2013-05-28T22:12:21Z",
        },
        text: {
          status: "generated",
          div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 180f219f-97a8-486d-99d9-ed631fe4fc57</p><p><b>meta</b>: </p><p><b>status</b>: final</p><p><b>type</b>: Discharge Summary from Responsible Clinician <span>(Details : {LOINC code '28655-9' = 'Physician attending Discharge summary)</span></p><p><b>encounter</b>: <a>http://fhir.healthintersections.com.au/open/Encounter/doc-example</a></p><p><b>date</b>: 01/02/2013 12:30:02 PM</p><p><b>author</b>: <a>Doctor Dave</a></p><p><b>title</b>: Discharge Summary</p><p><b>confidentiality</b>: N</p></div>",
        },
        status: "final",
        type: {
          coding: [
            {
              system: "http://loinc.org",
              code: "28655-9",
            },
          ],
          text: "Discharge Summary from Responsible Clinician",
        },
        subject: {
          reference: "http://fhir.healthintersections.com.au/open/Patient/d1",
          display: "Eve Everywoman",
        },
        encounter: {
          reference:
            "http://fhir.healthintersections.com.au/open/Encounter/doc-example",
        },
        date: "2013-02-01T12:30:02Z",
        author: [
          {
            reference: "Practitioner/example",
            display: "Doctor Dave",
          },
        ],
        title: "Discharge Summary",
        confidentiality: "N",
        section: [
          {
            title: "Reason for admission",
            code: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "29299-5",
                  display: "Reason for visit Narrative",
                },
              ],
            },
            text: {
              status: "additional",
              div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\n              <table>\n\n                <thead>\n\n                  <tr>\n\n                    <td>Details</td>\n\n                    <td/>\n\n                  </tr>\n\n                </thead>\n\n                <tbody>\n\n                  <tr>\n\n                    <td>Acute Asthmatic attack. Was wheezing for days prior to admission.</td>\n\n                    <td/>\n\n                  </tr>\n\n                </tbody>\n\n              </table>\n\n            </div>',
            },
            entry: [
              {
                reference: "urn:uuid:541a72a8-df75-4484-ac89-ac4923f03b81",
              },
            ],
          },
          {
            title: "Medications on Discharge",
            code: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "10183-2",
                  display: "Hospital discharge medications Narrative",
                },
              ],
            },
            text: {
              status: "additional",
              div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\n              <table>\n\n                <thead>\n\n                  <tr>\n\n                    <td>Medication</td>\n\n                    <td>Last Change</td>\n\n                    <td>Last ChangeReason</td>\n\n                  </tr>\n\n                </thead>\n\n                <tbody>\n\n                  <tr>\n\n                    <td>Theophylline 200mg BD after meals</td>\n\n                    <td>continued</td>\n\n                  </tr>\n\n                  <tr>\n\n                    <td>Ventolin Inhaler</td>\n\n                    <td>stopped</td>\n\n                    <td>Getting side effect of tremor</td>\n\n                  </tr>\n\n                </tbody>\n\n              </table>\n\n            </div>',
            },
            mode: "working",
            entry: [
              {
                reference: "urn:uuid:124a6916-5d84-4b8c-b250-10cefb8e6e86",
              },
              {
                reference: "urn:uuid:673f8db5-0ffd-4395-9657-6da00420bbc1",
              },
            ],
          },
          {
            title: "Known allergies",
            code: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "48765-2",
                  display: "Allergies and adverse reactions Document",
                },
              ],
            },
            text: {
              status: "additional",
              div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\n              <table>\n\n                <thead>\n\n                  <tr>\n\n                    <td>Allergen</td>\n\n                    <td>Reaction</td>\n\n                  </tr>\n\n                </thead>\n\n                <tbody>\n\n                  <tr>\n\n                    <td>Doxycycline</td>\n\n                    <td>Hives</td>\n\n                  </tr>\n\n                </tbody>\n\n              </table>\n\n            </div>',
            },
            entry: [
              {
                reference: "urn:uuid:47600e0f-b6b5-4308-84b5-5dec157f7637",
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl:
        "http://fhir.healthintersections.com.au/open/Practitioner/example",
      resource: {
        resourceType: "Practitioner",
        id: "example",
        meta: {
          lastUpdated: "2013-05-05T16:13:03Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\n            <p>Dr Adam Careful</p>\n\n          </div>',
        },
        identifier: [
          {
            system: "http://www.acme.org/practitioners",
            value: "23",
          },
        ],
        name: [
          {
            family: "Careful",
            given: ["Adam"],
            prefix: ["Dr"],
          },
        ],
      },
    },
    {
      fullUrl: "http://fhir.healthintersections.com.au/open/Patient/d1",
      resource: {
        resourceType: "Patient",
        id: "d1",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\n            <h1>Eve Everywoman</h1>\n\n          </div>',
        },
        active: true,
        name: [
          {
            text: "Eve Everywoman",
            family: "Everywoman1",
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
        birthDate: "1955-01-06",
        address: [
          {
            use: "home",
            line: ["2222 Home Street"],
          },
        ],
      },
    },
    {
      fullUrl:
        "http://fhir.healthintersections.com.au/open/Encounter/doc-example",
      resource: {
        resourceType: "Encounter",
        id: "doc-example",
        meta: {
          lastUpdated: "2013-05-05T16:13:03Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml"> Admitted to Orthopedics Service,\n                        Middlemore Hospital between Jan 20 and Feb ist 2013 </div>',
        },
        identifier: [
          {
            value: "S100",
          },
        ],
        status: "finished",
        class: {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          code: "IMP",
          display: "inpatient encounter",
        },
        type: [
          {
            text: "Orthopedic Admission",
          },
        ],
        subject: {
          reference: "Patient/d1",
        },
        period: {
          start: "2013-01-20T12:30:02Z",
          end: "2013-02-01T12:30:02Z",
        },
        hospitalization: {
          dischargeDisposition: {
            text: "Discharged to care of GP",
          },
        },
      },
    },
    {
      fullUrl: "urn:uuid:541a72a8-df75-4484-ac89-ac4923f03b81",
      resource: {
        resourceType: "Observation",
        meta: {
          lastUpdated: "2013-05-05T16:13:03Z",
        },
        text: {
          status: "additional",
          div: '<div xmlns="http://www.w3.org/1999/xhtml"> Acute Asthmatic attack. Was wheezing\n                        for days prior to admission. </div>',
        },
        status: "final",
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "46241-6",
            },
          ],
          text: "Reason for admission",
        },
        subject: {
          reference: "http://fhir.healthintersections.com.au/open/Patient/d1",
          display: "Eve Everywoman",
        },
        encounter: {
          reference:
            "http://fhir.healthintersections.com.au/open/Encounter/doc-example",
        },
        valueString:
          "Acute Asthmatic attack. Was wheezing for days prior to admission.",
      },
    },
    {
      fullUrl: "urn:uuid:124a6916-5d84-4b8c-b250-10cefb8e6e86",
      resource: {
        resourceType: "MedicationRequest",
        meta: {
          lastUpdated: "2013-05-05T16:13:03Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\n            <p>Theophylline 200mg twice a day</p>\n\n          </div>',
        },
        status: "unknown",
        intent: "order",
        medicationCodeableConcept: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "66493003",
            },
          ],
          text: "Theophylline 200mg",
        },
        subject: {
          reference: "http://fhir.healthintersections.com.au/open/Patient/d1",
          display: "Peter Patient",
        },
        requester: {
          reference: "Practitioner/example",
          display: "Peter Practitioner",
        },
        reasonCode: [
          {
            text: "Management of Asthma",
          },
        ],
        dosageInstruction: [
          {
            additionalInstruction: [
              {
                text: "Take with Food",
              },
            ],
            timing: {
              repeat: {
                frequency: 2,
                period: 1,
                periodUnit: "d",
              },
            },
            route: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "394899003",
                  display: "oral administration of treatment",
                },
              ],
            },
            doseAndRate: [
              {
                type: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                      code: "ordered",
                      display: "Ordered",
                    },
                  ],
                },
                doseQuantity: {
                  value: 1,
                  unit: "tablet",
                  system: "http://unitsofmeasure.org",
                  code: "tbl",
                },
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: "urn:uuid:673f8db5-0ffd-4395-9657-6da00420bbc1",
      resource: {
        resourceType: "MedicationStatement",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\n            <p>Ventolin inhaler discontinued</p>\n\n          </div>',
        },
        status: "active",
        statusReason: [
          {
            text: "Management of Asthma",
          },
        ],
        medicationCodeableConcept: {
          text: "Ventolin Inhaler",
        },
        subject: {
          reference: "http://fhir.healthintersections.com.au/open/Patient/d1",
          display: "Peter Patient",
        },
        dateAsserted: "2013-05-05T16:13:03Z",
      },
    },
    {
      fullUrl: "urn:uuid:47600e0f-b6b5-4308-84b5-5dec157f7637",
      resource: {
        resourceType: "AllergyIntolerance",
        meta: {
          lastUpdated: "2013-05-05T16:13:03Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Sensitivity to Doxycycline :\n                        Hives</div>',
        },
        clinicalStatus: {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
              code: "active",
              display: "Active",
            },
          ],
        },
        verificationStatus: {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
              code: "confirmed",
              display: "Confirmed",
            },
          ],
        },
        type: "allergy",
        criticality: "high",
        code: {
          text: "Doxycycline",
        },
        patient: {
          reference: "http://fhir.healthintersections.com.au/open/Patient/d1",
          display: "Eve Everywoman",
        },
        recordedDate: "2012-09-17",
        reaction: [
          {
            manifestation: [
              {
                coding: [
                  {
                    system: "http://example.org/system",
                    code: "xxx",
                    display: "Hives",
                  },
                ],
                text: "Hives",
              },
            ],
          },
        ],
      },
    },
  ],
  signature: {
    type: [
      {
        system: "urn:iso-astm:E1762-95:2013",
        code: "1.2.840.10065.1.12.1.1",
        display: "Author's Signature",
      },
    ],
    when: "2015-08-31T07:42:33+10:00",
    who: {
      reference: "Device/software",
    },
    onBehalfOf: {
      reference: "Organization/example",
    },
    sigFormat: "image/jpg",
    data: "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",
  },
} as const;

export const EndpointExamplesGeneralTemplate: Bundle = {
  resourceType: "Bundle",
  id: "b0a5e4277-83c4-4adb-87e2-e3efe3369b6f",
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
  type: "collection",
  entry: [
    {
      fullUrl: "http://hl7.org/fhir/Endpoint/71",
      resource: {
        resourceType: "Endpoint",
        id: "71",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n              CarePlan repository, CarePlan<br/>\n              Address: https://sqlonfhir-dstu2.azurewebsites.net/fhir</div>',
        },
        status: "active",
        connectionType: {
          system:
            "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
          code: "hl7-fhir-rest",
        },
        name: "CarePlan repository",
        managingOrganization: {
          display: "Telstra Health",
        },
        payloadType: [
          {
            coding: [
              {
                code: "CarePlan",
              },
            ],
          },
        ],
        payloadMimeType: ["application/fhir+xml"],
        address: "https://sqlonfhir-dstu2.azurewebsites.net/fhir",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Endpoint/72",
      resource: {
        resourceType: "Endpoint",
        id: "72",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n              Questionnaire Destination, QuestionnaireResponse<br/>\n              Address: https://sqlonfhir-dstu2.azurewebsites.net/fhir</div>',
        },
        status: "active",
        connectionType: {
          system:
            "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
          code: "hl7-fhir-rest",
        },
        name: "Questionnaire Destination",
        managingOrganization: {
          display: "Telstra Health",
        },
        payloadType: [
          {
            coding: [
              {
                code: "QuestionnaireResponse",
              },
            ],
          },
        ],
        payloadMimeType: ["application/fhir+xml"],
        address: "https://sqlonfhir-dstu2.azurewebsites.net/fhir",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Endpoint/73",
      resource: {
        resourceType: "Endpoint",
        id: "73",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n              Referral Requests, ServiceRequest<br/>\n              Address: https://sqlonfhir-dstu2.azurewebsites.net/fhir</div>',
        },
        status: "active",
        connectionType: {
          system:
            "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
          code: "hl7-fhir-rest",
        },
        name: "Referral Requests",
        managingOrganization: {
          display: "Telstra Health",
        },
        payloadType: [
          {
            coding: [
              {
                code: "ServiceRequest",
              },
            ],
          },
        ],
        payloadMimeType: ["application/fhir+xml"],
        address: "https://sqlonfhir-dstu2.azurewebsites.net/fhir",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Endpoint/74",
      resource: {
        resourceType: "Endpoint",
        id: "74",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n              Referral Requests, ServiceRequest QuestionnaireResponse<br/>\n              Address: https://open.epic.com/Interface/FHIR</div>',
        },
        status: "active",
        connectionType: {
          system:
            "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
          code: "hl7-fhir-rest",
        },
        name: "Referral Requests",
        managingOrganization: {
          display: "Epic demo organization",
        },
        payloadType: [
          {
            coding: [
              {
                code: "ServiceRequest QuestionnaireResponse",
              },
            ],
          },
        ],
        payloadMimeType: ["application/fhir+json"],
        address: "https://open.epic.com/Interface/FHIR",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Endpoint/75",
      resource: {
        resourceType: "Endpoint",
        id: "75",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n              Subscription receiver, ServiceRequest<br/>\n              Address: mailto:subscriptions@example.org</div>',
        },
        status: "active",
        connectionType: {
          system:
            "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
          code: "secure-email",
        },
        name: "Subscription receiver",
        managingOrganization: {
          display: "Telstra Health",
        },
        payloadType: [
          {
            coding: [
              {
                code: "ServiceRequest",
              },
            ],
          },
        ],
        payloadMimeType: ["application/fhir+xml"],
        address: "mailto:subscriptions@example.org",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Endpoint/76",
      resource: {
        resourceType: "Endpoint",
        id: "76",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n              valid usecase?, CDA-EventSummary<br/>\n              Address: https://sqlonfhir-dstu2.azurewebsites.net/fhir</div>',
        },
        status: "active",
        connectionType: {
          system:
            "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
          code: "hl7-fhir-msg",
        },
        name: "valid usecase?",
        managingOrganization: {
          display: "Telstra Health",
        },
        payloadType: [
          {
            coding: [
              {
                code: "CDA-EventSummary",
              },
            ],
          },
        ],
        payloadMimeType: ["application/pdf"],
        address: "https://sqlonfhir-dstu2.azurewebsites.net/fhir",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Endpoint/77",
      resource: {
        resourceType: "Endpoint",
        id: "77",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n              v2 referral Requests, REF-I12<br/>\n              Address: 127.0.0.1</div>',
        },
        status: "active",
        connectionType: {
          system:
            "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
          code: "hl7v2-mllp",
        },
        name: "v2 referral Requests",
        managingOrganization: {
          display: "Epic demo organization",
        },
        payloadType: [
          {
            coding: [
              {
                code: "REF-I12",
              },
            ],
          },
        ],
        payloadMimeType: ["application/hl7-v2"],
        address: "127.0.0.1",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Endpoint/78",
      resource: {
        resourceType: "Endpoint",
        id: "78",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n              xds event summaries, CDA-EventSummary<br/>\n              Address: https://open.epic.com/Interface/XDS.b</div>',
        },
        status: "active",
        connectionType: {
          system:
            "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
          code: "ihe-xds",
        },
        name: "xds event summaries",
        managingOrganization: {
          display: "Epic demo organization",
        },
        payloadType: [
          {
            coding: [
              {
                code: "CDA-EventSummary",
              },
            ],
          },
        ],
        payloadMimeType: ["application/hl7-sda+xml; variant=XDA/XDS"],
        address: "https://open.epic.com/Interface/XDS.b",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Endpoint/79",
      resource: {
        resourceType: "Endpoint",
        id: "79",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n              Enterprise Image Archive, varies (application/dicom, application/dicom+xml, image/jpeg, and many more)<br/>\n              Address: https://pacs.hospital.org/dicomweb</div>',
        },
        status: "active",
        connectionType: {
          system:
            "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
          code: "dicom-wado-rs",
        },
        name: "Enterprise Image Archive",
        managingOrganization: {
          display: "Multi-site Co.",
        },
        payloadType: [
          {
            coding: [
              {
                code: "varies (application/dicom, application/dicom+xml, image/jpeg, and many more)",
              },
            ],
          },
        ],
        payloadMimeType: ["application/dicom; variant=DICOM WADO-RS"],
        address: "https://pacs.hospital.org/dicomweb",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Endpoint/80",
      resource: {
        resourceType: "Endpoint",
        id: "80",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n              Enterprise Image Archive, varies (application/dicom, application/dicom+xml, image/jpeg, and many more)<br/>\n              Address: https://pacs.hospital.org/dicomweb</div>',
        },
        status: "active",
        connectionType: {
          system:
            "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
          code: "dicom-qido-rs",
        },
        name: "Enterprise Image Archive",
        managingOrganization: {
          display: "Multi-site Co.",
        },
        payloadType: [
          {
            coding: [
              {
                code: "varies (application/dicom, application/dicom+xml, image/jpeg, and many more)",
              },
            ],
          },
        ],
        payloadMimeType: ["application/dicom; variant=DICOM QIDO-RS"],
        address: "https://pacs.hospital.org/dicomweb",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Endpoint/81",
      resource: {
        resourceType: "Endpoint",
        id: "81",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n              Enterprise Image Archive, varies (application/dicom, application/dicom+xml, image/jpeg, and many more)<br/>\n              Address: https://pacs.hospital.org/dicomweb</div>',
        },
        status: "active",
        connectionType: {
          system:
            "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
          code: "dicom-stow-rs",
        },
        name: "Enterprise Image Archive",
        managingOrganization: {
          display: "Multi-site Co.",
        },
        payloadType: [
          {
            coding: [
              {
                code: "varies (application/dicom, application/dicom+xml, image/jpeg, and many more)",
              },
            ],
          },
        ],
        payloadMimeType: ["application/dicom; variant=DICOM STOW-RS"],
        address: "https://pacs.hospital.org/dicomweb",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Endpoint/82",
      resource: {
        resourceType: "Endpoint",
        id: "82",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n              Enterprise Image Archive, varies (application/dicom, application/dicom+xml, image/jpeg, and many more)<br/>\n              Address: https://pacs.hospital.org/dicomweb</div>',
        },
        status: "active",
        connectionType: {
          system:
            "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
          code: "dicom-stow-rs",
        },
        name: "Enterprise Image Archive",
        managingOrganization: {
          display: "Multi-site Co.",
        },
        payloadType: [
          {
            coding: [
              {
                code: "varies (application/dicom, application/dicom+xml, image/jpeg, and many more)",
              },
            ],
          },
        ],
        payloadMimeType: ["application/dicom; variant=DICOM STOW-RS"],
        address: "https://pacs.hospital.org/dicomweb",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Endpoint/83",
      resource: {
        resourceType: "Endpoint",
        id: "83",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n              Enterprise Image Archive, varies (application/dicom, application/dicom+xml, image/jpeg, and many more)<br/>\n              Address: https://pacs.hospital.org/wadoUri</div>',
        },
        status: "active",
        connectionType: {
          system:
            "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
          code: "dicom-wado-uri",
        },
        name: "Enterprise Image Archive",
        managingOrganization: {
          display: "Multi-site Co.",
        },
        payloadType: [
          {
            coding: [
              {
                code: "varies (application/dicom, application/dicom+xml, image/jpeg, and many more)",
              },
            ],
          },
        ],
        payloadMimeType: ["application/dicom; variant=DICOM WADO-URI"],
        address: "https://pacs.hospital.org/wadoUri",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Endpoint/84",
      resource: {
        resourceType: "Endpoint",
        id: "84",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n              Enterprise Image Archive, varies (application/dicom, application/dicom+xml, image/jpeg, and many more)<br/>\n              Address: https://pacs.hospital.org/IHEInvokeImageDisplay</div>',
        },
        status: "active",
        connectionType: {
          system:
            "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
          code: "ihe-iid",
        },
        name: "Enterprise Image Archive",
        managingOrganization: {
          display: "Multi-site Co.",
        },
        payloadType: [
          {
            coding: [
              {
                code: "varies (application/dicom, application/dicom+xml, image/jpeg, and many more)",
              },
            ],
          },
        ],
        payloadMimeType: ["application/dicom; variant=IHE IID"],
        address: "https://pacs.hospital.org/IHEInvokeImageDisplay",
      },
    },
  ],
} as const;

export const ExternalResources: Bundle = {
  resourceType: "Bundle",
  id: "externals",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
  type: "collection",
  entry: [
    {
      link: [
        {
          relation: "via",
          url: "ftp://ftp.ihe.net/TF_Implementation_Material/fhir/CodeSystem/IHE.formatcode.codesystem.xml",
        },
      ],
      fullUrl: "http://hl7.org/fhir/CodeSystem/IHE.formatcode.cs",
      resource: {
        resourceType: "CodeSystem",
        id: "IHE.formatcode.cs",
        text: {
          status: "additional",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\tThe IHE FormatCode code set is defined to be the set of <a href="http://wiki.ihe.net/index.php?title=IHE_Format_Codes">FormatCode(s) defined by IHE</a>. \n\tThis code set additionally includes format codes <a href="http://wiki.hl7.org/index.php?title=CDA_Format_Codes_for_IHE_XDS">defined by the HL7 CDA</a>. \n\tThe set was listed in HITSP C80 Table 2-153 Format Code Value Set Definition.   \n\tThe use of the FormatCode specifies the technical format of the document. \n\tThe FormatCode is a further specialization more detailed than the mime-type. \n\tThe FormatCode provides sufficient information to allow any potential document consumer to know if it can process and/or display by identifying a document encoding, structure and template. \n\tThe actual list of codes is intended to be extensible.\n\t</div>',
        },
        url: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
        identifier: [
          {
            system: "urn:ietf:rfc:3986",
            value: "urn:oid:1.3.6.1.4.1.19376.1.2.3",
          },
        ],
        name: "IHE.FormatCode.cs",
        title: "IHE Format Code set for use with Document Sharing",
        status: "active",
        experimental: false,
        date: "2018-01-28",
        publisher: "IHE",
        contact: [
          {
            name: "IHE",
            telecom: [
              {
                system: "url",
                value: "http://ihe.net",
              },
            ],
          },
          {
            name: "John Moehrke",
            telecom: [
              {
                system: "email",
                value: "JohnMoehrke@gmail.com",
              },
            ],
          },
        ],
        description:
          "The IHE FormatCode code set is defined to be the set of FormatCode(s) defined by IHE http://wiki.ihe.net/index.php?title=IHE_Format_Codes. This code set additionally includes format codes defined by the HL7 CDA http://wiki.hl7.org/index.php?title=CDA_Format_Codes_for_IHE_XDS. The set was listed in HITSP C80 Table 2-153 Format Code Value Set Definition. The use of the FormatCode specifies the technical format of the document. The FormatCode is a further specialization more detailed than the mime-type. The FormatCode provides sufficient information to allow any potential document consumer to know if it can process and/or display by identifying a document encoding, structure and template. The actual list of codes is intended to be extensible. ",
        copyright: "IHE http://www.ihe.net/Governance/#Intellectual_Property",
        caseSensitive: true,
        content: "complete",
        concept: [
          {
            code: "urn:ihe:pcc:xphr:2007",
            display:
              "Personal Health Records. Also known as HL7 CCD and HITSP C32",
          },
          {
            code: "urn:ihe:pcc:aps:2007",
            display: "IHE Antepartum Summary",
          },
          {
            code: "urn:ihe:pcc:xds-ms:2007",
            display: "XDS Medical Summaries",
          },
          {
            code: "urn:ihe:pcc:edr:2007",
            display: "Emergency Department Referral (EDR)",
          },
          {
            code: "urn:ihe:pcc:edes:2007",
            display: "Emergency Department Encounter Summary (EDES)",
          },
          {
            code: "urn:ihe:pcc:apr:handp:2008",
            display: "Antepartum Record (APR) - History and Physical",
          },
          {
            code: "urn:ihe:pcc:apr:lab:2008",
            display: "Antepartum Record (APR) - Laboratory",
          },
          {
            code: "urn:ihe:pcc:apr:edu:2008",
            display: "Antepartum Record (APR) - Education",
          },
          {
            code: "urn:ihe:pcc:crc:2008",
            display: "Cancer Registry Content (CRC)",
          },
          {
            code: "urn:ihe:pcc:cm:2008",
            display: "Care Management (CM)",
          },
          {
            code: "urn:ihe:pcc:ic:2008",
            display: "Immunization Content (IC)",
          },
          {
            code: "urn:ihe:pcc:tn:2007",
            display: "PCC TN",
          },
          {
            code: "urn:ihe:pcc:nn:2007",
            display: "PCC NN",
          },
          {
            code: "urn:ihe:pcc:ctn:2007",
            display: "PCC CTN",
          },
          {
            code: "urn:ihe:pcc:edpn:2007",
            display: "PCC EDPN",
          },
          {
            code: "urn:ihe:pcc:hp:2008",
            display: "PCC HP",
          },
          {
            code: "urn:ihe:pcc:ldhp:2009",
            display: "PCC LDHP",
          },
          {
            code: "urn:ihe:pcc:lds:2009",
            display: "PCC LDS",
          },
          {
            code: "urn:ihe:pcc:mds:2009",
            display: "PCC MDS",
          },
          {
            code: "urn:ihe:pcc:nds:2010",
            display: "PCC NDS",
          },
          {
            code: "urn:ihe:pcc:ppvs:2010",
            display: "PCC PPVS",
          },
          {
            code: "urn:ihe:pcc:trs:2011",
            display: "PCC TRS",
          },
          {
            code: "urn:ihe:pcc:ets:2011",
            display: "PCC ETS",
          },
          {
            code: "urn:ihe:pcc:its:2011",
            display: "PCC ITS",
          },
          {
            code: "urn:ihe:pcc:ript:2017",
            display: "Routine Interfacility Patient Transport (RIPT)",
          },
          {
            code: "urn:ihe:iti:bppc:2007",
            display: "Basic Patient Privacy Consents",
          },
          {
            code: "urn:ihe:iti:bppc-sd:2007",
            display: "Basic Patient Privacy Consents with Scanned Document",
          },
          {
            code: "urn:ihe:iti:xds-sd:pdf:2008",
            display: "PDF embedded in CDA per XDS-SD profile",
          },
          {
            code: "urn:ihe:iti:xds-sd:text:2008",
            display: "Text embedded in CDA per XDS-SD profile",
          },
          {
            code: "urn:ihe:iti:xdw:2011:workflowDoc",
            display: "XDW Workflow Document",
          },
          {
            code: "urn:ihe:iti:dsg:detached:2014",
            display: "DSG Detached Document",
          },
          {
            code: "urn:ihe:iti:dsg:enveloping:2014",
            display: "DSG Enveloping Document",
          },
          {
            code: "urn:ihe:iti:appc:2016:consent",
            display: "Advanced Patient Privacy Consents",
          },
          {
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
            definition:
              "Code to be used when the mimeType is sufficient to understanding the technical format. May be used when no more specific FormatCode is available and the mimeType is sufficient to identify the technical format",
          },
          {
            code: "urn:ihe:lab:xd-lab:2008",
            display: "CDA Laboratory Report",
          },
          {
            code: "urn:ihe:rad:TEXT",
            display: "Radiology XDS-I Text",
          },
          {
            code: "urn:ihe:rad:PDF",
            display: "Radiology XDS-I PDF",
          },
          {
            code: "urn:ihe:rad:CDA:ImagingReportStructuredHeadings:2013",
            display: "Radiology XDS-I Structured CDA",
          },
          {
            code: "urn:ihe:card:imaging:2011",
            display: "Cardiac Imaging Report",
          },
          {
            code: "urn:ihe:card:CRC:2012",
            display: "Cardiology CRC",
          },
          {
            code: "urn:ihe:card:EPRC-IE:2014",
            display: "Cardiology EPRC-IE",
          },
          {
            code: "urn:ihe:dent:TEXT",
            display: "Dental Text",
          },
          {
            code: "urn:ihe:dent:PDF",
            display: "Dental PDF",
          },
          {
            code: "urn:ihe:dent:CDA:ImagingReportStructuredHeadings:2013",
            display: "Dental CDA",
          },
          {
            code: "urn:ihe:pat:apsr:all:2010",
            display: "Anatomic Pathology Structured Report All",
          },
          {
            code: "urn:ihe:pat:apsr:cancer:all:2010",
            display: "Anatomic Pathology Structured Report Cancer All",
          },
          {
            code: "urn:ihe:pat:apsr:cancer:breast:2010",
            display: "Anatomic Pathology Structured Report Cancer Breast",
          },
          {
            code: "urn:ihe:pat:apsr:cancer:colon:2010",
            display: "Anatomic Pathology Structured Report Cancer Colon",
          },
          {
            code: "urn:ihe:pat:apsr:cancer:prostate:2010",
            display: "Anatomic Pathology Structured Report Cancer Prostate",
          },
          {
            code: "urn:ihe:pat:apsr:cancer:thyroid:2010",
            display: "Anatomic Pathology Structured Report Cancer Thyroid",
          },
          {
            code: "urn:ihe:pat:apsr:cancer:lung:2010",
            display: "Anatomic Pathology Structured Report Cancer Lung",
          },
          {
            code: "urn:ihe:pat:apsr:cancer:skin:2010",
            display: "Anatomic Pathology Structured Report Cancer Skin",
          },
          {
            code: "urn:ihe:pat:apsr:cancer:kidney:2010",
            display: "Anatomic Pathology Structured Report Cancer Kidney",
          },
          {
            code: "urn:ihe:pat:apsr:cancer:cervix:2010",
            display: "Anatomic Pathology Structured Report Cancer Cervix",
          },
          {
            code: "urn:ihe:pat:apsr:cancer:endometrium:2010",
            display: "Anatomic Pathology Structured Report Cancer Endometrium",
          },
          {
            code: "urn:ihe:pat:apsr:cancer:ovary:2010",
            display: "Anatomic Pathology Structured Report Cancer Ovary",
          },
          {
            code: "urn:ihe:pat:apsr:cancer:esophagus:2010",
            display: "Anatomic Pathology Structured Report Cancer Esophagus",
          },
          {
            code: "urn:ihe:pat:apsr:cancer:stomach:2010",
            display: "Anatomic Pathology Structured Report Cancer Stomach",
          },
          {
            code: "urn:ihe:pat:apsr:cancer:liver:2010",
            display: "Anatomic Pathology Structured Report Cancer Liver",
          },
          {
            code: "urn:ihe:pat:apsr:cancer:pancreas:2010",
            display: "Anatomic Pathology Structured Report Cancer Pancreas",
          },
          {
            code: "urn:ihe:pat:apsr:cancer:testis:2010",
            display: "Anatomic Pathology Structured Report Cancer Testis",
          },
          {
            code: "urn:ihe:pat:apsr:cancer:urinary_bladder:2010",
            display:
              "Anatomic Pathology Structured Report Cancer Urinary Bladder",
          },
          {
            code: "urn:ihe:pat:apsr:cancer:lip_oral_cavity:2010",
            display:
              "Anatomic Pathology Structured Report Cancer Lip Oral Cavity",
          },
          {
            code: "urn:ihe:pat:apsr:cancer:pharynx:2010",
            display: "Anatomic Pathology Structured Report Cancer Pharynx",
          },
          {
            code: "urn:ihe:pat:apsr:cancer:salivary_gland:2010",
            display:
              "Anatomic Pathology Structured Report Cancer Salivary Gland",
          },
          {
            code: "urn:ihe:pat:apsr:cancer:larynx:2010",
            display: "Anatomic Pathology Structured Report Cancer Larynx",
          },
          {
            code: "urn:ihe:pharm:pre:2010",
            display: "Pharmacy Pre",
          },
          {
            code: "urn:ihe:pharm:padv:2010",
            display: "Pharmacy PADV",
          },
          {
            code: "urn:ihe:pharm:dis:2010",
            display: "Pharmacy DIS",
          },
          {
            code: "urn:ihe:pharm:pml:2013",
            display: "Pharmacy PML",
          },
          {
            code: "urn:hl7-org:sdwg:ccda-structuredBody:1.1",
            display:
              "For documents following C-CDA 1.1 constraints using a structured body.",
          },
          {
            code: "urn:hl7-org:sdwg:ccda-nonXMLBody:1.1",
            display:
              "For documents following C-CDA 1.1 constraints using a non structured body.",
          },
          {
            code: "urn:hl7-org:sdwg:ccda-structuredBody:2.1",
            display:
              "For documents following C-CDA 2.1 constraints using a structured body.",
          },
          {
            code: "urn:hl7-org:sdwg:ccda-nonXMLBody:2.1",
            display:
              "For documents following C-CDA 2.1 constraints using a non structured body.",
          },
        ],
      },
    },
    {
      link: [
        {
          relation: "via",
          url: "http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_CID_29.html",
        },
      ],
      fullUrl: "http://hl7.org/fhir/ValueSet/dicom-cid-29-AcquisitionModality",
      resource: {
        resourceType: "ValueSet",
        id: "dicom-cid-29-AcquisitionModality",
        url: "http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_CID_29.html",
        identifier: [
          {
            system: "urn:ietf:rfc:3986",
            value: "urn:oid:1.2.840.10008.6.1.19",
          },
        ],
        version: "20121129",
        name: "AcquisitionModality",
        status: "active",
        experimental: false,
        date: "2018-02-15",
        publisher: "NEMA MITA DICOM",
        description: "Transitive closure of CID 29 AcquisitionModality",
        copyright: "© 2018 NEMA",
        compose: {
          include: [
            {
              system: "http://dicom.nema.org/resources/ontology/DCM",
              concept: [
                {
                  code: "OPV",
                  display: "Ophthalmic Visual Field",
                },
                {
                  code: "DX",
                  display: "Digital Radiography",
                },
                {
                  code: "OPT",
                  display: "Ophthalmic Tomography",
                },
                {
                  code: "BMD",
                  display: "Bone Mineral Densitometry",
                },
                {
                  code: "MG",
                  display: "Mammography",
                },
                {
                  code: "SM",
                  display: "Slide Microscopy",
                },
                {
                  code: "US",
                  display: "Ultrasound",
                },
                {
                  code: "OP",
                  display: "Ophthalmic Photography",
                },
                {
                  code: "IVOCT",
                  display: "Intravascular Optical Coherence Tomography",
                },
                {
                  code: "MR",
                  display: "Magnetic Resonance",
                },
                {
                  code: "ECG",
                  display: "Electrocardiography",
                },
                {
                  code: "GM",
                  display: "General Microscopy",
                },
                {
                  code: "IO",
                  display: "Intra-oral Radiography",
                },
                {
                  code: "XA",
                  display: "X-Ray Angiography",
                },
                {
                  code: "XC",
                  display: "External-camera Photography",
                },
                {
                  code: "VA",
                  display: "Visual Acuity",
                },
                {
                  code: "IVUS",
                  display: "Intravascular Ultrasound",
                },
                {
                  code: "CR",
                  display: "Computed Radiography",
                },
                {
                  code: "ES",
                  display: "Endoscopy",
                },
                {
                  code: "AR",
                  display: "Autorefraction",
                },
                {
                  code: "CT",
                  display: "Computed Tomography",
                },
                {
                  code: "OSS",
                  display: "Optical Surface Scanner",
                },
                {
                  code: "LEN",
                  display: "Lensometry",
                },
                {
                  code: "RG",
                  display: "Radiographic imaging",
                },
                {
                  code: "RF",
                  display: "Radiofluoroscopy",
                },
                {
                  code: "KER",
                  display: "Keratometry",
                },
                {
                  code: "HD",
                  display: "Hemodynamic Waveform",
                },
                {
                  code: "OAM",
                  display: "Ophthalmic Axial Measurements",
                },
                {
                  code: "NM",
                  display: "Nuclear Medicine",
                },
                {
                  code: "OCT",
                  display: "Optical Coherence Tomography",
                },
                {
                  code: "BDUS",
                  display: "Ultrasound Bone Densitometry",
                },
                {
                  code: "PT",
                  display: "Positron emission tomography",
                },
                {
                  code: "EPS",
                  display: "Cardiac Electrophysiology",
                },
                {
                  code: "PX",
                  display: "Panoramic X-Ray",
                },
                {
                  code: "SRF",
                  display: "Subjective Refraction",
                },
                {
                  code: "OPM",
                  display: "Ophthalmic Mapping",
                },
                {
                  code: "OPR",
                  display: "Ophthalmic Refraction",
                },
              ],
            },
          ],
        },
      },
    },
  ],
} as const;

export const LocationExamplesGeneral: Bundle = {
  resourceType: "Bundle",
  id: "3ad0687e-f477-468c-afd5-fcc2bf897819",
  type: "collection",
  entry: [
    {
      fullUrl: "http://hl7.org/fhir/Location/2",
      resource: {
        resourceType: "Location",
        id: "2",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">USS Enterprise</div>',
        },
        status: "active",
        name: "USSS Enterprise-D",
        mode: "instance",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Location/3",
      resource: {
        resourceType: "Location",
        id: "3",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">USSS Enterprise-D Sickbay</div>',
        },
        status: "active",
        name: "USSS Enterprise-D Sickbay",
        mode: "instance",
        partOf: {
          reference: "Location/2",
          display: "USS Enterprise",
        },
      },
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

export const MessageRequestLink: Bundle = {
  resourceType: "Bundle",
  id: "10bb101f-a121-4264-a920-67be9cb82c74",
  type: "message",
  timestamp: "2015-07-14T11:15:33+10:00",
  entry: [
    {
      fullUrl: "urn:uuid:267b18ce-3d37-4581-9baa-6fada338038b",
      resource: {
        resourceType: "MessageHeader",
        id: "267b18ce-3d37-4581-9baa-6fada338038b",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n             \n            <p>This message is a request to link Patient records 654321 (Patient Donald DUCK @ Acme Healthcare, Inc) and 123456 (Patient Donald D DUCK @ Acme Healthcare, Inc)</p>\n           \n          </div>',
        },
        eventCoding: {
          system: "http://example.org/fhir/message-events",
          code: "patient-link",
        },
        source: {
          endpoint: "http://example.org/clients/ehr-lite",
        },
        responsible: {
          reference: "http://acme.com/ehr/fhir/Practitioner/2323-33-4",
        },
        focus: [
          {
            reference: "http://acme.com/ehr/fhir/Patient/pat1",
          },
          {
            reference: "http://acme.com/ehr/fhir/Patient/pat12",
          },
        ],
      },
    },
    {
      fullUrl: "http://acme.com/ehr/fhir/Patient/pat1",
      resource: {
        resourceType: "Patient",
        id: "pat1",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n            \n            <p>Patient Donald DUCK @ Acme Healthcare, Inc. MR = 654321</p>\n          \n          </div>',
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
        contact: [
          {
            relationship: [
              {
                coding: [
                  {
                    system:
                      "http://example.org/fhir/CodeSystem/patient-contact-relationship",
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
      },
    },
    {
      fullUrl: "http://acme.com/ehr/fhir/Patient/pat12",
      resource: {
        resourceType: "Patient",
        id: "pat2",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n            \n            <p>Patient Donald D DUCK @ Acme Healthcare, Inc. MR = 123456</p>\n          \n          </div>',
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
        managingOrganization: {
          reference: "Organization/1",
          display: "ACME Healthcare, Inc",
        },
      },
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

export const MessageResponseLink: Bundle = {
  resourceType: "Bundle",
  id: "3a0707d3-549e-4467-b8b8-5a2ab3800efe",
  type: "message",
  timestamp: "2015-07-14T11:15:33+10:00",
  entry: [
    {
      fullUrl: "urn:uuid:d9d296d8-5afd-42e1-a0ce-3344e0e003ed",
      resource: {
        resourceType: "MessageHeader",
        id: "caf609cf-c3a7-4be3-a3aa-356b9bb69d4f",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n             \n            <p>This message is a request to link Patient records 654321 (Patient Donald DUCK @ Acme Healthcare, Inc) and 123456 (Patient Donald D DUCK @ Acme Healthcare, Inc)</p>\n           \n          </div>',
        },
        eventCoding: {
          system: "http://example.org/fhir/message-events",
          code: "patient-link",
        },
        source: {
          endpoint: "http://acme.com/ehr/fhir",
        },
        response: {
          identifier: "efdd254b-0e09-4164-883e-35cf3871715f",
          code: "ok",
          details: {
            reference: "OperationOutcome/03f9aa7d-b395-47b9-84e0-053678b6e4e3",
          },
        },
        focus: [
          {
            reference: "http://acme.com/ehr/fhir/Patient/pat1",
          },
          {
            reference: "http://acme.com/ehr/fhir/Patient/pat12",
          },
        ],
      },
    },
    {
      fullUrl: "urn:uuid:03f9aa7d-b395-47b9-84e0-053678b6e4e3",
      resource: {
        resourceType: "OperationOutcome",
        id: "03f9aa7d-b395-47b9-84e0-053678b6e4e3",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n            MPI approval rating: 80%\n          </div>',
        },
        issue: [
          {
            severity: "information",
            code: "informational",
            details: {
              text: "MPI approval rating: 80%",
            },
          },
        ],
      },
    },
    {
      fullUrl: "http://acme.com/ehr/fhir/Patient/pat1",
      resource: {
        resourceType: "Patient",
        id: "pat1",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n            \n            <p>Patient Donald DUCK @ Acme Healthcare, Inc. MR = 654321</p>\n          \n          </div>',
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
        contact: [
          {
            relationship: [
              {
                coding: [
                  {
                    system:
                      "http://example.org/fhir/CodeSystem/patient-contact-relationship",
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
      },
    },
    {
      fullUrl: "http://acme.com/ehr/fhir/Patient/pat12",
      resource: {
        resourceType: "Patient",
        id: "pat2",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n            \n            <p>Patient Donald D DUCK @ Acme Healthcare, Inc. MR = 123456</p>\n          \n          </div>',
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
      },
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

export const PatientExamplesGeneral: Bundle = {
  resourceType: "Bundle",
  id: "b248b1b2-1686-4b94-9936-37d7a5f94b51",
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
  type: "collection",
  entry: [
    {
      fullUrl: "http://hl7.org/fhir/Patient/1",
      resource: {
        resourceType: "Patient",
        id: "1",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Everywoman, Eve. SSN:\n            444222222</div>',
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
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Patient/2",
      resource: {
        resourceType: "Patient",
        id: "2",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Everyman, Adam. SSN:\n            444333333</div>',
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
            value: "444333333",
          },
        ],
        active: true,
        name: [
          {
            use: "official",
            family: "Everyman",
            given: ["Adam"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-2004",
            use: "work",
          },
        ],
        gender: "male",
        address: [
          {
            use: "home",
            line: ["2222 Home Street"],
          },
        ],
        managingOrganization: {
          reference: "Organization/hl7",
        },
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Patient/3",
      resource: {
        resourceType: "Patient",
        id: "3",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Kidd, Kari. SSN:\n            444555555</div>',
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
            value: "444555555",
          },
        ],
        active: true,
        name: [
          {
            use: "official",
            family: "Kidd",
            given: ["Kari"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-2005",
            use: "work",
          },
        ],
        gender: "female",
        address: [
          {
            use: "home",
            line: ["2222 Home Street"],
          },
        ],
        managingOrganization: {
          reference: "Organization/hl7",
        },
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Patient/4",
      resource: {
        resourceType: "Patient",
        id: "4",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Nuclear, Nancy. SSN:\n            444114567</div>',
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
            value: "444114567",
          },
        ],
        active: true,
        name: [
          {
            use: "official",
            family: "Nuclear",
            given: ["Nancy"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-5001",
            use: "work",
          },
        ],
        gender: "female",
        address: [
          {
            use: "home",
            line: ["6666 Home Street"],
          },
        ],
        managingOrganization: {
          reference: "Organization/hl7",
        },
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Patient/5",
      resource: {
        resourceType: "Patient",
        id: "5",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Nuclear, Neville. SSN:\n            444111234</div>',
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
            value: "444111234",
          },
        ],
        active: true,
        name: [
          {
            use: "official",
            family: "Nuclear",
            given: ["Neville"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-5001",
            use: "work",
          },
        ],
        gender: "male",
        address: [
          {
            use: "home",
            line: ["6666 Home Street"],
          },
        ],
        managingOrganization: {
          reference: "Organization/hl7",
        },
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Patient/6",
      resource: {
        resourceType: "Patient",
        id: "6",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Nuclear, Ned. SSN:\n            444113456</div>',
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
            value: "444113456",
          },
        ],
        active: true,
        name: [
          {
            use: "official",
            family: "Nuclear",
            given: ["Ned"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-5001",
            use: "work",
          },
        ],
        gender: "male",
        address: [
          {
            use: "home",
            line: ["6666 Home Street"],
          },
        ],
        managingOrganization: {
          reference: "Organization/hl7",
        },
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Patient/7",
      resource: {
        resourceType: "Patient",
        id: "7",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Nuclear, Nelda. SSN:\n            444112345</div>',
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
            value: "444112345",
          },
        ],
        active: true,
        name: [
          {
            use: "official",
            family: "Nuclear",
            given: ["Nelda"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-5001",
            use: "work",
          },
        ],
        gender: "female",
        address: [
          {
            use: "home",
            line: ["6666 Home Street"],
          },
        ],
        managingOrganization: {
          reference: "Organization/hl7",
        },
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Patient/8",
      resource: {
        resourceType: "Patient",
        id: "8",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Mum, Martha. SSN:\n            444666666</div>',
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
            value: "444666666",
          },
        ],
        active: true,
        name: [
          {
            use: "official",
            family: "Mum",
            given: ["Martha"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-2006",
            use: "work",
          },
        ],
        gender: "female",
        address: [
          {
            use: "home",
            line: ["4444 Home Street"],
          },
        ],
        managingOrganization: {
          reference: "Organization/hl7",
        },
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Patient/9",
      resource: {
        resourceType: "Patient",
        id: "9",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Sons, Stuart. SSN:\n            444777777</div>',
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
            value: "444777777",
          },
        ],
        active: true,
        name: [
          {
            use: "official",
            family: "Sons",
            given: ["Stuart"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-2007",
            use: "work",
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
                    system: "http://example.org/fhir/v2/administrative-status",
                    code: "FTM",
                    display: "female-to-male",
                  },
                ],
              },
            },
          ],
        },
        deceasedDateTime: "2002-08-24",
        address: [
          {
            use: "home",
            line: ["4444 Home Street"],
          },
        ],
        managingOrganization: {
          reference: "Organization/hl7",
        },
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Patient/10",
      resource: {
        resourceType: "Patient",
        id: "10",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Betterhalf, Boris. SSN:\n            444888888</div>',
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
            value: "444888888",
          },
        ],
        active: true,
        name: [
          {
            use: "official",
            family: "Betterhalf",
            given: ["Boris"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-2008",
            use: "work",
          },
        ],
        gender: "male",
        address: [
          {
            use: "home",
            line: ["2222 Home Street"],
          },
        ],
        managingOrganization: {
          reference: "Organization/hl7",
        },
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Patient/11",
      resource: {
        resourceType: "Patient",
        id: "11",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Relative, Ralph. SSN:\n            444999999</div>',
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
            value: "444999999",
          },
        ],
        active: true,
        name: [
          {
            use: "official",
            family: "Relative",
            given: ["Ralph"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-2009",
            use: "work",
          },
        ],
        gender: "male",
        address: [
          {
            use: "home",
            line: ["4444 Home Street"],
          },
        ],
        managingOrganization: {
          reference: "Organization/hl7",
        },
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Patient/12",
      resource: {
        resourceType: "Patient",
        id: "12",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Contact, Carrie. SSN:\n            555222222</div>',
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
            value: "555222222",
          },
        ],
        active: true,
        name: [
          {
            use: "official",
            family: "Contact",
            given: ["Carrie"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-2010",
            use: "work",
          },
        ],
        gender: "female",
        address: [
          {
            use: "home",
            line: ["5555 Home Street"],
          },
        ],
        managingOrganization: {
          reference: "Organization/hl7",
        },
      },
    },
  ],
} as const;

export const PractitionerExamplesGeneral: Bundle = {
  resourceType: "Bundle",
  id: "3ad0687e-f477-468c-afd5-fcc2bf897809",
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
  type: "collection",
  entry: [
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/1",
      resource: {
        resourceType: "Practitioner",
        id: "1",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Dr. Beverly Crusher</div>',
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
            value: "333333333",
          },
          {
            type: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                  code: "NPI",
                },
              ],
            },
            system: "http://hl7.org/fhir/sid/us-npi",
            value: "1122334499",
          },
          {
            type: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                  code: "DEA",
                },
              ],
            },
            system: "https://www.deanumber.com/",
            value: "F91234567-001AB",
          },
        ],
        name: [
          {
            family: "Beverly",
            given: ["Crusher"],
            prefix: ["Dr"],
          },
        ],
        gender: "female",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/13",
      resource: {
        resourceType: "Practitioner",
        id: "13",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Seven, Henry. SSN:\n            333333333</div>',
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
            value: "333333333",
          },
        ],
        name: [
          {
            use: "official",
            family: "Seven",
            given: ["Henry"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1002",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1002 Healthcare Drive"],
          },
        ],
        gender: "male",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/14",
      resource: {
        resourceType: "Practitioner",
        id: "14",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Assigned, Amanda. SSN:\n            33344444</div>',
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
            value: "33344444",
          },
        ],
        name: [
          {
            use: "official",
            family: "Assigned",
            given: ["Amanda"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1021",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1020 Healthcare Drive"],
          },
        ],
        gender: "female",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/15",
      resource: {
        resourceType: "Practitioner",
        id: "15",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Hippocrates, Harold. SSN:\n            444444444</div>',
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
            value: "444444444",
          },
        ],
        name: [
          {
            use: "official",
            family: "Hippocrates",
            given: ["Harold"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1003",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1003 Healthcare Drive"],
          },
        ],
        gender: "male",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/16",
      resource: {
        resourceType: "Practitioner",
        id: "16",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Primary, Patricia. SSN:\n            555555555</div>',
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
            value: "555555555",
          },
        ],
        name: [
          {
            use: "official",
            family: "Primary",
            given: ["Patricia"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1004",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1004 Healthcare Drive"],
          },
        ],
        gender: "female",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/17",
      resource: {
        resourceType: "Practitioner",
        id: "17",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Admit, Alan. SSN:\n            666666666</div>',
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
            value: "666666666",
          },
        ],
        name: [
          {
            use: "official",
            family: "Admit",
            given: ["Alan"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1005",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1005 Healthcare Drive"],
          },
        ],
        gender: "male",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/18",
      resource: {
        resourceType: "Practitioner",
        id: "18",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Attend, Aaron. SSN:\n            777777777</div>',
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
            value: "777777777",
          },
        ],
        name: [
          {
            use: "official",
            family: "Attend",
            given: ["Aaron"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1006",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1006 Healthcare Drive"],
          },
        ],
        gender: "male",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/19",
      resource: {
        resourceType: "Practitioner",
        id: "19",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Sender, Sam. SSN:\n            888888888</div>',
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
            value: "888888888",
          },
        ],
        name: [
          {
            use: "official",
            family: "Sender",
            given: ["Sam"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1007",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1007 Healthcare Drive"],
          },
        ],
        gender: "male",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/20",
      resource: {
        resourceType: "Practitioner",
        id: "20",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Intern, Irving. SSN:\n            888222222</div>',
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
            value: "888222222",
          },
        ],
        name: [
          {
            use: "official",
            family: "Intern",
            given: ["Irving"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1022",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1021 Healthcare Drive"],
          },
        ],
        gender: "male",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/21",
      resource: {
        resourceType: "Practitioner",
        id: "21",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Resident, Rachel. SSN:\n            888333333</div>',
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
            value: "888333333",
          },
        ],
        name: [
          {
            use: "official",
            family: "Resident",
            given: ["Rachel"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1023",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1022 Healthcare Drive"],
          },
        ],
        gender: "female",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/22",
      resource: {
        resourceType: "Practitioner",
        id: "22",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Leader, Linda. SSN:\n            888444444</div>',
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
            value: "888444444",
          },
        ],
        name: [
          {
            use: "official",
            family: "Leader",
            given: ["Linda"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1024",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1023 Healthcare Drive"],
          },
        ],
        gender: "female",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/23",
      resource: {
        resourceType: "Practitioner",
        id: "23",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Verify, Virgil. SSN:\n            999999999</div>',
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
            value: "999999999",
          },
        ],
        name: [
          {
            use: "official",
            family: "Verify",
            given: ["Virgil"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1008",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1008 Healthcare Drive"],
          },
        ],
        gender: "male",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/24",
      resource: {
        resourceType: "Practitioner",
        id: "24",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Specialize, Sara. SSN:\n            222333333</div>',
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
            value: "222333333",
          },
        ],
        name: [
          {
            use: "official",
            family: "Specialize",
            given: ["Sara"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1009",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1009 Healthcare Drive"],
          },
        ],
        gender: "female",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/25",
      resource: {
        resourceType: "Practitioner",
        id: "25",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Reaction, Ramsey. SSN:\n            222223333</div>',
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
            value: "222223333",
          },
        ],
        name: [
          {
            use: "official",
            family: "Reaction",
            given: ["Ramsey"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1025",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1024 Healthcare Drive"],
          },
        ],
        gender: "male",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/26",
      resource: {
        resourceType: "Practitioner",
        id: "26",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Sleeper, Sally. SSN:\n            222666666</div>',
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
            value: "222666666",
          },
        ],
        name: [
          {
            use: "official",
            family: "Sleeper",
            given: ["Sally"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1012",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1012 Healthcare Drive"],
          },
        ],
        gender: "female",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/27",
      resource: {
        resourceType: "Practitioner",
        id: "27",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Pump, Patrick. SSN:\n            222334444</div>',
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
            value: "222334444",
          },
        ],
        name: [
          {
            use: "official",
            family: "Pump",
            given: ["Patrick"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1027",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1025 Healthcare Drive"],
          },
        ],
        gender: "male",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/28",
      resource: {
        resourceType: "Practitioner",
        id: "28",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Valve, Vera. SSN:\n            222335555</div>',
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
            value: "222335555",
          },
        ],
        name: [
          {
            use: "official",
            family: "Valve",
            given: ["Vera"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1028",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1026 Healthcare Drive"],
          },
        ],
        gender: "female",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/29",
      resource: {
        resourceType: "Practitioner",
        id: "29",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Scratch, Sophie. SSN:\n            222336666</div>',
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
            value: "222336666",
          },
        ],
        name: [
          {
            use: "official",
            family: "Scratch",
            given: ["Sophie"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1029",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1027 Healthcare Drive"],
          },
        ],
        gender: "female",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/30",
      resource: {
        resourceType: "Practitioner",
        id: "30",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Emergency, Eric. SSN:\n            222337777</div>',
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
            value: "222337777",
          },
        ],
        name: [
          {
            use: "official",
            family: "Emergency",
            given: ["Eric"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1030",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1028 Healthcare Drive"],
          },
        ],
        gender: "male",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/31",
      resource: {
        resourceType: "Practitioner",
        id: "31",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Hormone, Horace. SSN:\n            222338888</div>',
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
            value: "222338888",
          },
        ],
        name: [
          {
            use: "official",
            family: "Hormone",
            given: ["Horace"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1031",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1029 Healthcare Drive"],
          },
        ],
        gender: "male",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/32",
      resource: {
        resourceType: "Practitioner",
        id: "32",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Family, Fay. SSN:\n            222339999</div>',
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
            value: "222339999",
          },
        ],
        name: [
          {
            use: "official",
            family: "Family",
            given: ["Fay"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1032",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1030 Healthcare Drive"],
          },
        ],
        gender: "female",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/33",
      resource: {
        resourceType: "Practitioner",
        id: "33",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Tum, Tony. SSN:\n            222442222</div>',
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
            value: "222442222",
          },
        ],
        name: [
          {
            use: "official",
            family: "Tum",
            given: ["Tony"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1033",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1031 Healthcare Drive"],
          },
        ],
        gender: "male",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/34",
      resource: {
        resourceType: "Practitioner",
        id: "34",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Sage, Stanley. SSN:\n            222443333</div>',
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
            value: "222443333",
          },
        ],
        name: [
          {
            use: "official",
            family: "Sage",
            given: ["Stanley"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1034",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1032 Healthcare Drive"],
          },
        ],
        gender: "male",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/35",
      resource: {
        resourceType: "Practitioner",
        id: "35",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Bleeder, Boris. SSN:\n            222443344</div>',
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
            value: "222443344",
          },
        ],
        name: [
          {
            use: "official",
            family: "Bleeder",
            given: ["Boris"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1035",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1033 Healthcare Drive"],
          },
        ],
        gender: "male",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/36",
      resource: {
        resourceType: "Practitioner",
        id: "36",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Pasteur, Paula. SSN:\n            222445555</div>',
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
            value: "222445555",
          },
        ],
        name: [
          {
            use: "official",
            family: "Pasteur",
            given: ["Paula"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1036",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1034 Healthcare Drive"],
          },
        ],
        gender: "female",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/37",
      resource: {
        resourceType: "Practitioner",
        id: "37",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Osler, Otto. SSN:\n            222446666</div>',
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
            value: "222446666",
          },
        ],
        name: [
          {
            use: "official",
            family: "Osler",
            given: ["Otto"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1037",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1035 Healthcare Drive"],
          },
        ],
        gender: "male",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/38",
      resource: {
        resourceType: "Practitioner",
        id: "38",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Renal, Rory. SSN:\n            222447777</div>',
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
            value: "222447777",
          },
        ],
        name: [
          {
            use: "official",
            family: "Renal",
            given: ["Rory"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1038",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1036 Healthcare Drive"],
          },
        ],
        gender: "male",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/39",
      resource: {
        resourceType: "Practitioner",
        id: "39",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Brain, Barry. SSN:\n            222448888</div>',
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
            value: "222448888",
          },
        ],
        name: [
          {
            use: "official",
            family: "Brain",
            given: ["Barry"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1039",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1037 Healthcare Drive"],
          },
        ],
        gender: "male",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/40",
      resource: {
        resourceType: "Practitioner",
        id: "40",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Cranium, Carol. SSN:\n            222449999</div>',
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
            value: "222449999",
          },
        ],
        name: [
          {
            use: "official",
            family: "Cranium",
            given: ["Carol"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1040",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1038 Healthcare Drive"],
          },
        ],
        gender: "female",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/41",
      resource: {
        resourceType: "Practitioner",
        id: "41",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Fem, Flora. SSN:\n            222552222</div>',
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
            value: "222552222",
          },
        ],
        name: [
          {
            use: "official",
            family: "Fem",
            given: ["Flora"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1041",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1039 Healthcare Drive"],
          },
        ],
        gender: "female",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/42",
      resource: {
        resourceType: "Practitioner",
        id: "42",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Tumor, Trudy. SSN:\n            222553333</div>',
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
            value: "222553333",
          },
        ],
        name: [
          {
            use: "official",
            family: "Tumor",
            given: ["Trudy"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-2003",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1040 Healthcare Drive"],
          },
        ],
        gender: "female",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/43",
      resource: {
        resourceType: "Practitioner",
        id: "43",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Vision, Victor. SSN:\n            222554444</div>',
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
            value: "222554444",
          },
        ],
        name: [
          {
            use: "official",
            family: "Vision",
            given: ["Victor"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1043",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1041 Healthcare Drive"],
          },
        ],
        gender: "male",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/44",
      resource: {
        resourceType: "Practitioner",
        id: "44",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Carpenter, Calvin. SSN:\n            222555545</div>',
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
            value: "222555545",
          },
        ],
        name: [
          {
            use: "official",
            family: "Carpenter",
            given: ["Calvin"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1044",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1042 Healthcare Drive"],
          },
        ],
        gender: "male",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/45",
      resource: {
        resourceType: "Practitioner",
        id: "45",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Rhino, Rick. SSN:\n            222556666</div>',
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
            value: "222556666",
          },
        ],
        name: [
          {
            use: "official",
            family: "Rhino",
            given: ["Rick"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1045",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1043 Healthcare Drive"],
          },
        ],
        gender: "male",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/46",
      resource: {
        resourceType: "Practitioner",
        id: "46",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Slide, Stan. SSN:\n            222444444</div>',
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
            value: "222444444",
          },
        ],
        name: [
          {
            use: "official",
            family: "Slide",
            given: ["Stan"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1010",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1010 Healthcare Drive"],
          },
        ],
        gender: "male",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/47",
      resource: {
        resourceType: "Practitioner",
        id: "47",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Kidder, Karen. SSN:\n            222557777</div>',
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
            value: "222557777",
          },
        ],
        name: [
          {
            use: "official",
            family: "Kidder",
            given: ["Karen"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1046",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1044 Healthcare Drive"],
          },
        ],
        gender: "female",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/48",
      resource: {
        resourceType: "Practitioner",
        id: "48",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Hollywood, Heddie. SSN:\n            222558888</div>',
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
            value: "222558888",
          },
        ],
        name: [
          {
            use: "official",
            family: "Hollywood",
            given: ["Heddie"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1047",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1045 Healthcare Drive"],
          },
        ],
        gender: "female",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/49",
      resource: {
        resourceType: "Practitioner",
        id: "49",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Shrink, Serena. SSN:\n            222559999</div>',
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
            value: "222559999",
          },
        ],
        name: [
          {
            use: "official",
            family: "Shrink",
            given: ["Serena"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1048",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1046 Healthcare Drive"],
          },
        ],
        gender: "female",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/50",
      resource: {
        resourceType: "Practitioner",
        id: "50",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Puffer, Penny. SSN:\n            222662222</div>',
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
            value: "222662222",
          },
        ],
        name: [
          {
            use: "official",
            family: "Puffer",
            given: ["Penny"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1049",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1047 Healthcare Drive"],
          },
        ],
        gender: "female",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/51",
      resource: {
        resourceType: "Practitioner",
        id: "51",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Curie, Christine. SSN:\n            222555555</div>',
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
            value: "222555555",
          },
        ],
        name: [
          {
            use: "official",
            family: "Curie",
            given: ["Christine"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1011",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1011 Healthcare Drive"],
          },
        ],
        gender: "female",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/52",
      resource: {
        resourceType: "Practitioner",
        id: "52",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Joint, Jeffrey. SSN:\n            222663333</div>',
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
            value: "222663333",
          },
        ],
        name: [
          {
            use: "official",
            family: "Joint",
            given: ["Jeffrey"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1050",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1048 Healthcare Drive"],
          },
        ],
        gender: "male",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/53",
      resource: {
        resourceType: "Practitioner",
        id: "53",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Cutter, Carl. SSN:\n            222777777</div>',
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
            value: "222777777",
          },
        ],
        name: [
          {
            use: "official",
            family: "Cutter",
            given: ["Carl"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1013",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1013 Healthcare Drive"],
          },
        ],
        gender: "male",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/54",
      resource: {
        resourceType: "Practitioner",
        id: "54",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Plumber, Peter. SSN:\n            222664444</div>',
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
            value: "222664444",
          },
        ],
        name: [
          {
            use: "official",
            family: "Plumber",
            given: ["Peter"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1051",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1049 Healthcare Drive"],
          },
        ],
        gender: "male",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/55",
      resource: {
        resourceType: "Practitioner",
        id: "55",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Helper, Horace. SSN:\n            222665555</div>',
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
            value: "222665555",
          },
        ],
        name: [
          {
            use: "official",
            family: "Helper",
            given: ["Horace"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1052",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1050 Healthcare Drive"],
          },
        ],
        gender: "male",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/56",
      resource: {
        resourceType: "Practitioner",
        id: "56",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Nightingale, Nancy. SSN:\n            222888888</div>',
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
            value: "222888888",
          },
        ],
        name: [
          {
            use: "official",
            family: "Nightingale",
            given: ["Nancy"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1014",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1014 Healthcare Drive"],
          },
        ],
        gender: "female",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/57",
      resource: {
        resourceType: "Practitioner",
        id: "57",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Barton, Clarence. SSN:\n            222999999</div>',
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
            value: "222999999",
          },
        ],
        name: [
          {
            use: "official",
            family: "Barton",
            given: ["Clarence"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1015",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1015 Healthcare Drive"],
          },
        ],
        gender: "male",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/58",
      resource: {
        resourceType: "Practitioner",
        id: "58",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Bender, Bob. SSN:\n            222666666</div>',
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
            value: "222666666",
          },
        ],
        name: [
          {
            use: "official",
            family: "Bender",
            given: ["Bob"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1053",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1051 Healthcare Drive"],
          },
        ],
        gender: "male",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/59",
      resource: {
        resourceType: "Practitioner",
        id: "59",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Chopper, Charlie. SSN:\n            222667777</div>',
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
            value: "222667777",
          },
        ],
        name: [
          {
            use: "official",
            family: "Chopper",
            given: ["Charlie"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1054",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1052 Healthcare Drive"],
          },
        ],
        gender: "male",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/60",
      resource: {
        resourceType: "Practitioner",
        id: "60",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Brace, Ben. SSN:\n            222668888</div>',
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
            value: "222668888",
          },
        ],
        name: [
          {
            use: "official",
            family: "Brace",
            given: ["Ben"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1055",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1053 Healthcare Drive"],
          },
        ],
        gender: "male",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/61",
      resource: {
        resourceType: "Practitioner",
        id: "61",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Specs, Sylvia. SSN:\n            222669999</div>',
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
            value: "222669999",
          },
        ],
        name: [
          {
            use: "official",
            family: "Specs",
            given: ["Sylvia"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1056",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1054 Healthcare Drive"],
          },
        ],
        gender: "female",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/62",
      resource: {
        resourceType: "Practitioner",
        id: "62",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Script, Susan. SSN:\n            333222222</div>',
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
            value: "333222222",
          },
        ],
        name: [
          {
            use: "official",
            family: "Script",
            given: ["Susan"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1016",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1016 Healthcare Drive"],
          },
        ],
        gender: "female",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/63",
      resource: {
        resourceType: "Practitioner",
        id: "63",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Bunion, Paul. SSN:\n            222772222</div>',
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
            value: "222772222",
          },
        ],
        name: [
          {
            use: "official",
            family: "Bunion",
            given: ["Paul"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1057",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1055 Healthcare Drive"],
          },
        ],
        gender: "male",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/64",
      resource: {
        resourceType: "Practitioner",
        id: "64",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Listener, Larry. SSN:\n            222773333</div>',
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
            value: "222773333",
          },
        ],
        name: [
          {
            use: "official",
            family: "Listener",
            given: ["Larry"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1058",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1056 Healthcare Drive"],
          },
        ],
        gender: "male",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/65",
      resource: {
        resourceType: "Practitioner",
        id: "65",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Beaker, Bill. SSN:\n            333444444</div>',
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
            value: "333444444",
          },
        ],
        name: [
          {
            use: "official",
            family: "Beaker",
            given: ["Bill"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1017",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1017 Healthcare Drive"],
          },
        ],
        gender: "male",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/66",
      resource: {
        resourceType: "Practitioner",
        id: "66",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Chow, Connie. SSN:\n            333555555</div>',
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
            value: "333555555",
          },
        ],
        name: [
          {
            use: "official",
            family: "Chow",
            given: ["Connie"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1018",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1018 Healthcare Drive"],
          },
        ],
        gender: "female",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/67",
      resource: {
        resourceType: "Practitioner",
        id: "67",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">teHelper. SSN: 000111111</div>',
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
            value: "000111111",
          },
        ],
        name: [
          {
            use: "official",
            family: "Helper",
            given: ["Helen"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1019",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1019 Healthcare Drive"],
          },
        ],
        gender: "female",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/68",
      resource: {
        resourceType: "Practitioner",
        id: "68",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Player, Pamela. SSN:\n            222776666</div>',
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
            value: "222776666",
          },
        ],
        name: [
          {
            use: "official",
            family: "Player",
            given: ["Pamela"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1059",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1057 Healthcare Drive"],
          },
        ],
        gender: "female",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/69",
      resource: {
        resourceType: "Practitioner",
        id: "69",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Stretcher, Seth. SSN:\n            222778888</div>',
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
            value: "222778888",
          },
        ],
        name: [
          {
            use: "official",
            family: "Stretcher",
            given: ["Seth"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1060",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1058 Healthcare Drive"],
          },
        ],
        gender: "male",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/Practitioner/70",
      resource: {
        resourceType: "Practitioner",
        id: "70",
        meta: {
          lastUpdated: "2012-05-29T23:45:32Z",
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Enter Ellen, ElleSSN:\n            333777777</div>',
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
            value: "333777777",
          },
        ],
        name: [
          {
            use: "official",
            family: "Enter",
            given: ["Ellen"],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555-555-1020",
            use: "work",
          },
        ],
        address: [
          {
            use: "home",
            line: ["1058 Healthcare Drive"],
          },
        ],
        gender: "female",
      },
    },
  ],
} as const;

export const PractitionerroleExamplesGeneral: Bundle = {
  resourceType: "Bundle",
  id: "3ad0687e-f477-468c-afd5-fcc2bf897808",
  type: "collection",
  entry: [
    {
      fullUrl: "http://hl7.org/fhir/PractitionerRole/f003-0",
      resource: {
        resourceType: "PractitionerRole",
        id: "f003-0",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n            <span style="color: gray;">practitioner:</span> Marc Versteegh<br/><span style="color: gray;">organization:</span> BMC<br/><span style="color: gray;">role:</span> Care role\n          </div>',
        },
        practitioner: {
          reference: "Practitioner/f003",
          display: "Marc Versteegh",
        },
        organization: {
          reference: "Organization/f001",
          display: "BMC",
        },
        code: [
          {
            coding: [
              {
                system: "urn:oid:2.16.840.1.113883.2.4.15.111",
                code: "01.000",
                display: "Arts",
              },
            ],
            text: "Care role",
          },
        ],
        specialty: [
          {
            coding: [
              {
                system: "urn:oid:2.16.840.1.113883.2.4.15.111",
                code: "01.011",
                display: "Cardiothoracal surgery",
              },
            ],
            text: "specialization",
          },
        ],
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/PractitionerRole/example-0",
      resource: {
        resourceType: "PractitionerRole",
        id: "example-0",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n            <span style="color: gray;">practitioner:</span> Adam Careful<br/><span style="color: gray;">location:</span> South Wing, second floor<br/><span style="color: gray;">role:</span> RP<br/><span style="color: gray;">Email:</span> dr.adam.careful@example.org<br/><span style="color: gray;">identifier:</span> 52\n          </div>',
        },
        identifier: [
          {
            system: "http://example.org/role-identifier",
            value: "52",
          },
        ],
        period: {
          start: "2012-01-01",
          end: "2012-03-31",
        },
        practitioner: {
          reference: "Practitioner/example",
          display: "Adam Careful",
        },
        organization: {
          reference: "Organization/f001",
        },
        code: [
          {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0286",
                code: "RP",
              },
            ],
          },
        ],
        location: [
          {
            reference: "Location/1",
            display: "South Wing, second floor",
          },
        ],
        healthcareService: [
          {
            reference: "HealthcareService/example",
          },
        ],
        telecom: [
          {
            system: "email",
            value: "dr.adam.careful@example.org",
          },
        ],
        endpoint: [
          {
            reference: "Endpoint/example",
          },
        ],
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/PractitionerRole/example-1",
      resource: {
        resourceType: "PractitionerRole",
        id: "example-1",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n            <span style="color: gray;">practitioner:</span> Adam Careful<br/><span style="color: gray;">organization:</span> Good Health Clinic\n          </div>',
        },
        period: {
          start: "2012-01-01",
        },
        practitioner: {
          reference: "Practitioner/example",
          display: "Adam Careful",
        },
        organization: {
          reference: "Organization/2",
          display: "Good Health Clinic",
        },
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/PractitionerRole/example-2",
      resource: {
        resourceType: "PractitionerRole",
        id: "example-2",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n            <span style="color: gray;">practitioner:</span> Adam Careful<br/>\n            <span style="color: gray;">organization:</span> Good Health Clinic<br/>\n            <span style="color: gray;">role:</span> On call physcologist\n          </div>',
        },
        period: {
          start: "2016-07-01",
          end: "2017-06-30",
        },
        practitioner: {
          reference: "Practitioner/example",
          display: "Adam Careful",
        },
        organization: {
          reference: "Organization/2",
          display: "Good Health Clinic",
        },
        code: [
          {
            text: "On call physcologist",
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "555 123456",
            use: "mobile",
          },
        ],
        availableTime: [
          {
            daysOfWeek: ["sat", "sun"],
            allDay: true,
          },
        ],
        availabilityExceptions: "Public Holidays",
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/PractitionerRole/f007-0",
      resource: {
        resourceType: "PractitionerRole",
        id: "f007-0",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n            <span style="color: gray;">practitioner:</span> Simone Heps<br/><span style="color: gray;">organization:</span> BMC<br/><span style="color: gray;">role:</span> Care role\n          </div>',
        },
        practitioner: {
          reference: "Practitioner/f007",
          display: "Simone Heps",
        },
        organization: {
          reference: "Organization/f001",
          display: "BMC",
        },
        code: [
          {
            coding: [
              {
                system: "urn:oid:2.16.840.1.113883.2.4.15.111",
                code: "01.000",
                display: "Arts",
              },
            ],
            text: "Care role",
          },
        ],
        specialty: [
          {
            coding: [
              {
                system: "urn:oid:2.16.840.1.113883.2.4.15.111",
                code: "01.015",
                display: "Physician",
              },
            ],
            text: "specialization",
          },
        ],
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/PractitionerRole/f004-0",
      resource: {
        resourceType: "PractitionerRole",
        id: "f004-0",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n            <span style="color: gray;">practitioner:</span> Ronald Briet<br/><span style="color: gray;">organization:</span> BMC<br/><span style="color: gray;">role:</span> Care role\n          </div>',
        },
        practitioner: {
          reference: "Practitioner/f004",
          display: "Ronald Briet",
        },
        organization: {
          reference: "Organization/f001",
          display: "BMC",
        },
        code: [
          {
            coding: [
              {
                system: "urn:oid:2.16.840.1.113883.2.4.15.111",
                code: "01.000",
                display: "Arts",
              },
            ],
            text: "Care role",
          },
        ],
        specialty: [
          {
            coding: [
              {
                system: "urn:oid:2.16.840.1.113883.2.4.15.111",
                code: "01.018",
                display: "Ear-, Nose and Throat",
              },
            ],
            text: "specialization",
          },
        ],
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/PractitionerRole/xcda1-0",
      resource: {
        resourceType: "PractitionerRole",
        id: "xcda1-0",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n            <span style="color: gray;">practitioner:</span> Sherry Dopplemeyer<br/><span style="color: gray;">organization:</span> Cleveland Clinic<br/><span style="color: gray;">role:</span> Primary Surgon\n          </div>',
        },
        practitioner: {
          reference: "Practitioner/xcda1",
          display: "Sherry Dopplemeyer",
        },
        organization: {
          display: "Cleveland Clinic",
        },
        code: [
          {
            text: "Primary Surgon",
          },
        ],
        specialty: [
          {
            text: "Orthopedic",
          },
        ],
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/PractitionerRole/f202-0",
      resource: {
        resourceType: "PractitionerRole",
        id: "f202-0",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n            <span style="color: gray;">practitioner:</span> Luigi Maas<br/><span style="color: gray;">organization:</span> AUMC<br/><span style="color: gray;">role:</span> Electronic laboratory reporting\n          </div>',
        },
        practitioner: {
          reference: "Practitioner/f202",
          display: "Luigi Maas",
        },
        organization: {
          reference: "Organization/f201",
          display: "AUMC",
        },
        code: [
          {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "33526004",
                display: "Electronic laboratory reporting",
              },
            ],
          },
        ],
        specialty: [
          {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "159285000",
                display: "Medical laboratory technician",
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/PractitionerRole/f201-0",
      resource: {
        resourceType: "PractitionerRole",
        id: "f201-0",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n            <span style="color: gray;">practitioner:</span> Dokter Bronsig<br/><span style="color: gray;">organization:</span> AUMC<br/><span style="color: gray;">role:</span> Implementation of planned interventions\n          </div>',
        },
        practitioner: {
          reference: "Practitioner/f201",
          display: "Dokter Bronsig",
        },
        organization: {
          reference: "Organization/f201",
          display: "AUMC",
        },
        code: [
          {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "225304007",
                display: "Implementation of planned interventions",
              },
            ],
          },
        ],
        specialty: [
          {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "310512001",
                display: "Medical oncologist",
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/PractitionerRole/f203-0",
      resource: {
        resourceType: "PractitionerRole",
        id: "f203-0",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n            <span style="color: gray;">practitioner:</span> Juri van Gelder<br/><span style="color: gray;">organization:</span> AUMC<br/><span style="color: gray;">role:</span> Physical therapist\n          </div>',
        },
        practitioner: {
          reference: "Practitioner/f203",
          display: "Juri van Gelder",
        },
        organization: {
          reference: "Organization/f201",
          display: "AUMC",
        },
        code: [
          {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "36682004",
                display: "Physical therapist",
              },
            ],
          },
        ],
        specialty: [
          {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "410158009",
                display: "Assess physical therapist service",
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/PractitionerRole/f005-0",
      resource: {
        resourceType: "PractitionerRole",
        id: "f005-0",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n            <span style="color: gray;">practitioner:</span> Langeveld Anne<br/><span style="color: gray;">organization:</span> BMC<br/><span style="color: gray;">role:</span> Care role\n          </div>',
        },
        practitioner: {
          reference: "Practitioner/f005",
          display: "Langeveld Anne",
        },
        organization: {
          reference: "Organization/f001",
          display: "BMC",
        },
        code: [
          {
            coding: [
              {
                system: "urn:oid:2.16.840.1.113883.2.4.15.111",
                code: "01.000",
                display: "Arts",
              },
            ],
            text: "Care role",
          },
        ],
        specialty: [
          {
            coding: [
              {
                system: "urn:oid:2.16.840.1.113883.2.4.15.111",
                code: "01.018",
                display: "Keel- neus- en oorarts",
              },
            ],
            text: "specialization",
          },
        ],
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/PractitionerRole/f006-0",
      resource: {
        resourceType: "PractitionerRole",
        id: "f006-0",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n            <span style="color: gray;">practitioner:</span> Rob van den Berk<br/><span style="color: gray;">organization:</span> BMC<br/><span style="color: gray;">role:</span> Care role\n          </div>',
        },
        practitioner: {
          reference: "Practitioner/f006",
          display: "Rob van den Berk",
        },
        organization: {
          reference: "Organization/f001",
          display: "BMC",
        },
        code: [
          {
            coding: [
              {
                system: "urn:oid:2.16.840.1.113883.2.4.15.111",
                code: "01.000",
                display: "Arts",
              },
            ],
            text: "Care role",
          },
        ],
        specialty: [
          {
            coding: [
              {
                system: "urn:oid:2.16.840.1.113883.2.4.15.111",
                code: "17.000",
                display: "Pharmacist",
              },
            ],
            text: "specialization",
          },
        ],
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/PractitionerRole/f001-0",
      resource: {
        resourceType: "PractitionerRole",
        id: "f001-0",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n            <span style="color: gray;">practitioner:</span> Eric van den broek<br/><span style="color: gray;">organization:</span> BMC<br/><span style="color: gray;">role:</span> Care role\n          </div>',
        },
        practitioner: {
          reference: "Practitioner/f001",
          display: "Eric van den broek",
        },
        organization: {
          reference: "Organization/f001",
          display: "BMC",
        },
        code: [
          {
            coding: [
              {
                system: "urn:oid:2.16.840.1.113883.2.4.15.111",
                code: "01.000",
                display: "Arts",
              },
            ],
            text: "Care role",
          },
        ],
        specialty: [
          {
            coding: [
              {
                system: "urn:oid:2.16.840.1.113883.2.4.15.111",
                code: "01.018",
                display: "Ear-, Nose and Throat",
              },
            ],
            text: "specialization",
          },
        ],
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/PractitionerRole/f002-0",
      resource: {
        resourceType: "PractitionerRole",
        id: "f002-0",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n            <span style="color: gray;">practitioner:</span> Pieter Voigt<br/><span style="color: gray;">organization:</span> BMC<br/><span style="color: gray;">role:</span> Care role\n          </div>',
        },
        practitioner: {
          reference: "Practitioner/f002",
          display: "Pieter Voigt",
        },
        organization: {
          reference: "Organization/f001",
          display: "BMC",
        },
        code: [
          {
            coding: [
              {
                system: "urn:oid:2.16.840.1.113883.2.4.15.111",
                code: "01.000",
                display: "Arts",
              },
            ],
            text: "Care role",
          },
        ],
        specialty: [
          {
            coding: [
              {
                system: "urn:oid:2.16.840.1.113883.2.4.15.111",
                code: "01.011",
                display: "Cardiothoracal surgery",
              },
            ],
            text: "specialization",
          },
        ],
      },
    },
    {
      fullUrl: "http://hl7.org/fhir/PractitionerRole/f204-0",
      resource: {
        resourceType: "PractitionerRole",
        id: "f204-0",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n            <span style="color: gray;">practitioner:</span> Carla Espinosa<br/><span style="color: gray;">organization:</span> AUMC<br/><span style="color: gray;">role:</span> Renal nurse\n          </div>',
        },
        practitioner: {
          reference: "Practitioner/f204",
          display: "Carla Espinosa",
        },
        organization: {
          reference: "Organization/f201",
          display: "AUMC",
        },
        code: [
          {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "224565004",
                display: "Renal nurse",
              },
            ],
          },
        ],
        specialty: [
          {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "9632001",
                display: "Nursing procedure",
              },
            ],
          },
        ],
      },
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
