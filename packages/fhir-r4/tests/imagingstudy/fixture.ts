import type { ImagingStudy } from "../../src/v4.0.1/imagingstudy/types";

export const ImagingstudyExampleXr: ImagingStudy = {
  resourceType: "ImagingStudy",
  id: "example-xr",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">XR Wrist 3+ Views. John Smith (MRN: 09236). Accession: W12342398. Performed: 2017-01-01. 1 series, 2 images.</div>',
  },
  identifier: [
    {
      use: "official",
      system: "urn:dicom:uid",
      value: "urn:oid:2.16.124.113543.6003.1154777499.30246.19789.3503430046",
    },
    {
      use: "usual",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0203",
            code: "ACSN",
          },
        ],
      },
      value: "W12342398",
      assigner: {
        reference: "Organization/dicom-organization",
      },
    },
    {
      use: "secondary",
      value: "55551234",
      assigner: {
        reference: "Organization/dicom-organization",
      },
    },
  ],
  status: "available",
  modality: [
    {
      system: "http://dicom.nema.org/resources/ontology/DCM",
      code: "DX",
    },
  ],
  subject: {
    reference: "Patient/dicom",
  },
  encounter: {
    reference: "Encounter/example",
  },
  started: "2017-01-01T11:01:20+03:00",
  basedOn: [
    {
      reference: "ServiceRequest/example",
    },
  ],
  referrer: {
    reference: "Practitioner/example",
  },
  interpreter: [
    {
      reference: "Practitioner/example",
    },
  ],
  endpoint: [
    {
      reference: "Endpoint/example-wadors",
    },
  ],
  numberOfSeries: 1,
  numberOfInstances: 2,
  procedureReference: {
    reference: "Procedure/example",
  },
  procedureCode: [
    {
      coding: [
        {
          system: "http://www.radlex.org",
          code: "RPID2589",
          display: "XR Wrist 3+ Views",
        },
      ],
      text: "XR Wrist 3+ Views",
    },
  ],
  reasonCode: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "357009",
          display: "Closed fracture of trapezoidal bone of wrist",
        },
      ],
    },
  ],
  note: [
    {
      text: "XR Wrist 3+ Views",
    },
  ],
  series: [
    {
      uid: "2.16.124.113543.6003.1154777499.30246.19789.3503430045.1",
      number: 3,
      modality: {
        system: "http://dicom.nema.org/resources/ontology/DCM",
        code: "DX",
      },
      description: "XR Wrist 3+ Views",
      numberOfInstances: 2,
      endpoint: [
        {
          reference: "Endpoint/example-wadors",
        },
      ],
      bodySite: {
        system: "http://snomed.info/sct",
        code: "T-15460",
        display: "Wrist Joint",
      },
      laterality: {
        system: "http://snomed.info/sct",
        code: "419161000",
        display: "Unilateral left",
      },
      started: "2011-01-01T11:01:20+03:00",
      performer: [
        {
          function: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                code: "PRF",
              },
            ],
          },
          actor: {
            reference: "Practitioner/example",
          },
        },
      ],
      instance: [
        {
          uid: "2.16.124.113543.6003.1154777499.30246.19789.3503430045.1.1",
          sopClass: {
            system: "urn:ietf:rfc:3986",
            code: "urn:oid:1.2.840.10008.5.1.4.1.1.2",
          },
          number: 1,
          title: "PA VIEW",
        },
        {
          uid: "2.16.124.113543.6003.1154777499.30246.19789.3503430045.1.2",
          sopClass: {
            system: "urn:ietf:rfc:3986",
            code: "urn:oid:1.2.840.10008.5.1.4.1.1.2",
          },
          number: 2,
          title: "LL VIEW",
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

export const ImagingstudyExample: ImagingStudy = {
  resourceType: "ImagingStudy",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">CT Chest.  John Smith (MRN: 09236). Accession: W12342398. Performed: 2011-01-01. 3 series, 12 images.</div>',
  },
  identifier: [
    {
      system: "urn:dicom:uid",
      value: "urn:oid:2.16.124.113543.6003.1154777499.30246.19789.3503430045",
    },
  ],
  status: "available",
  subject: {
    reference: "Patient/dicom",
  },
  started: "2011-01-01T11:01:20+03:00",
  numberOfSeries: 1,
  numberOfInstances: 1,
  series: [
    {
      uid: "2.16.124.113543.6003.2588828330.45298.17418.2723805630",
      number: 3,
      modality: {
        system: "http://dicom.nema.org/resources/ontology/DCM",
        code: "CT",
      },
      description: "CT Surview 180",
      numberOfInstances: 1,
      bodySite: {
        system: "http://snomed.info/sct",
        code: "67734004",
        display: "Upper Trunk Structure",
      },
      instance: [
        {
          uid: "2.16.124.113543.6003.189642796.63084.16748.2599092903",
          sopClass: {
            system: "urn:ietf:rfc:3986",
            code: "urn:oid:1.2.840.10008.5.1.4.1.1.2",
          },
          number: 1,
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
