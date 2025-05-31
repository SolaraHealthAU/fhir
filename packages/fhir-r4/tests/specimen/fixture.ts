import type { Specimen } from "../../src/v4.0.1/specimen/types";

export const SpecimenExampleIsolate: Specimen = {
  resourceType: "Specimen",
  id: "isolate",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: isolate</p><p><b>contained</b>: </p><p><b>accessionIdentifier</b>: X352356-ISO1</p><p><b>status</b>: available</p><p><b>type</b>: Bacterial isolate specimen <span>(Details : {SNOMED CT code '429951000124103' = 'Bacterial isolate specimen (specimen)', given as 'Bacterial isolate specimen'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>receivedTime</b>: 18/08/2015 7:03:00 AM</p><p><b>parent</b>: id: stool; X352356; status: unavailable; Stool specimen <span>(Details : {SNOMED CT code '119339001' = 'Stool specimen', given as 'Stool specimen'})</span>; receivedTime: 16/08/2015 7:03:00 AM</p><h3>Collections</h3><table><tr><td>-</td><td><b>Collector</b></td><td><b>Collected[x]</b></td><td><b>Method</b></td></tr><tr><td>*</td><td><a>Practitioner/f202</a></td><td>16/08/2015 7:03:00 AM</td><td>Plates, Blood Agar <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0488 code 'BAP' = 'Plates, Blood Agar)</span></td></tr></table><p><b>note</b>: Patient dropped off specimen</p></div>",
  },
  contained: [
    {
      resourceType: "Specimen",
      id: "stool",
      accessionIdentifier: {
        system: "http://lab.acme.org/specimens/2015",
        value: "X352356",
      },
      status: "unavailable",
      type: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "119339001",
            display: "Stool specimen",
          },
        ],
      },
      subject: {
        reference: "Patient/example",
      },
      receivedTime: "2015-08-16T07:03:00Z",
      collection: {
        collector: {
          display: "Patient",
        },
        collectedDateTime: "2011-08-16T06:15:00Z",
        method: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0488",
              code: "LNV",
            },
          ],
        },
      },
    },
  ],
  accessionIdentifier: {
    system: "http://lab.acme.org/specimens/2011",
    value: "X352356-ISO1",
  },
  status: "available",
  type: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "429951000124103",
        display: "Bacterial isolate specimen",
      },
    ],
  },
  subject: {
    reference: "Patient/example",
  },
  receivedTime: "2015-08-18T07:03:00Z",
  parent: [
    {
      reference: "#stool",
    },
  ],
  collection: {
    collector: {
      reference: "Practitioner/f202",
    },
    collectedDateTime: "2015-08-16T07:03:00Z",
    method: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v2-0488",
          code: "BAP",
        },
      ],
    },
  },
  note: [
    {
      text: "Patient dropped off specimen",
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

export const SpecimenExamplePooledSerum: Specimen = {
  resourceType: "Specimen",
  id: "pooled-serum",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: pooled-serum</p><p><b>accessionIdentifier</b>: 20171120-1234</p><p><b>type</b>: Pooled serum sample <span>(Details : {https://vetmed.iastate.edu/vdl code 'Serum sample, pooled' = 'Serum sample, pooled', given as 'Serum sample, pooled'})</span></p><p><b>subject</b>: <a>Group/herd1</a></p><h3>Collections</h3><table><tr><td>-</td><td><b>Collector</b></td><td><b>Collected[x]</b></td></tr><tr><td>*</td><td>James Herriot, FRCVS</td><td>14/11/2017</td></tr></table><h3>Containers</h3><table><tr><td>-</td><td><b>Type</b></td></tr><tr><td>*</td><td>Red Top Blood Collection Tube <span>(Details : {https://vetmed.iastate.edu/vdl code 'RTT' = 'RTT', given as 'Red Top Tube'})</span></td></tr></table><p><b>note</b>: Pooled serum sample from 30 individuals</p></div>",
  },
  accessionIdentifier: {
    system: "https://vetmed.iastate.edu/vdl",
    value: "20171120-1234",
  },
  type: {
    coding: [
      {
        system: "https://vetmed.iastate.edu/vdl",
        code: "Serum sample, pooled",
        display: "Serum sample, pooled",
      },
    ],
    text: "Pooled serum sample",
  },
  subject: {
    reference: "Group/herd1",
  },
  collection: {
    collector: {
      display: "James Herriot, FRCVS",
    },
    collectedDateTime: "2017-11-14",
  },
  container: [
    {
      type: {
        coding: [
          {
            system: "https://vetmed.iastate.edu/vdl",
            code: "RTT",
            display: "Red Top Tube",
          },
        ],
        text: "Red Top Blood Collection Tube",
      },
    },
  ],
  note: [
    {
      text: "Pooled serum sample from 30 individuals",
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

export const SpecimenExampleSerum: Specimen = {
  resourceType: "Specimen",
  id: "sst",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: sst</p><p><b>accessionIdentifier</b>: 20150816-00124</p><p><b>type</b>: Serum sample <span>(Details : {SNOMED CT code '119364003' = 'Serum specimen', given as 'Serum sample'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>request</b>: <a>ServiceRequest/ft4</a></p><h3>Collections</h3><table><tr><td>-</td><td><b>Collector</b></td><td><b>Collected[x]</b></td></tr><tr><td>*</td><td><a>Practitioner/f202</a></td><td>16/08/2015 6:40:17 AM</td></tr></table><h3>Containers</h3><table><tr><td>-</td><td><b>Type</b></td></tr><tr><td>*</td><td>Serum Separator Tube <span>(Details : {http://acme.com/labs code 'SST' = 'SST', given as 'Serum Separator Tube'})</span></td></tr></table></div>",
  },
  accessionIdentifier: {
    system: "http://acme.com/labs/accession-ids",
    value: "20150816-00124",
  },
  type: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "119364003",
        display: "Serum sample",
      },
    ],
  },
  subject: {
    reference: "Patient/pat2",
  },
  request: [
    {
      reference: "ServiceRequest/ft4",
    },
  ],
  collection: {
    collector: {
      reference: "Practitioner/f202",
    },
    collectedDateTime: "2015-08-16T06:40:17Z",
  },
  container: [
    {
      type: {
        coding: [
          {
            system: "http://acme.com/labs",
            code: "SST",
            display: "Serum Separator Tube",
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

export const SpecimenExampleUrine: Specimen = {
  resourceType: "Specimen",
  id: "vma-urine",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: vma-urine</p><p><b>accessionIdentifier</b>: X352356</p><p><b>status</b>: available</p><p><b>type</b>: Urine, Random <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0487 code 'RANDU' = 'Urine, Random', given as 'Urine, Random'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>receivedTime</b>: 18/08/2015 7:03:00 AM</p><h3>Collections</h3><table><tr><td>-</td><td><b>Collector</b></td><td><b>Collected[x]</b></td></tr><tr><td>*</td><td><a>Practitioner/f202</a></td><td>18/08/2015 7:03:00 AM</td></tr></table><h3>Processings</h3><table><tr><td>-</td><td><b>Description</b></td><td><b>Procedure</b></td><td><b>Additive</b></td><td><b>Time[x]</b></td></tr><tr><td>*</td><td>Acidify to pH &lt; 3.0 with 6 N HCl.</td><td>Acidification <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0373 code 'ACID' = 'Acidification)</span></td><td>6 N HCl</td><td>18/08/2015 8:10:00 AM</td></tr></table><h3>Containers</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>Capacity</b></td><td><b>SpecimenQuantity</b></td></tr><tr><td>*</td><td>Non-sterile specimen container <span>(Details )</span></td><td>50 mls</td><td>10 mls</td></tr></table></div>",
  },
  accessionIdentifier: {
    system: "http://lab.acme.org/specimens/2015",
    value: "X352356",
  },
  status: "available",
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0487",
        code: "RANDU",
        display: "Urine, Random",
      },
    ],
  },
  subject: {
    reference: "Patient/example",
  },
  receivedTime: "2015-08-18T07:03:00Z",
  collection: {
    collector: {
      reference: "Practitioner/f202",
    },
    collectedDateTime: "2015-08-18T07:03:00Z",
  },
  processing: [
    {
      description: "Acidify to pH < 3.0 with 6 N HCl.",
      procedure: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0373",
            code: "ACID",
          },
        ],
      },
      additive: [
        {
          display: "6 N HCl",
        },
      ],
      timeDateTime: "2015-08-18T08:10:00Z",
    },
  ],
  container: [
    {
      type: {
        text: "Non-sterile specimen container",
      },
      capacity: {
        value: 50,
        unit: "mls",
      },
      specimenQuantity: {
        value: 10,
        unit: "mls",
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

export const SpecimenExample: Specimen = {
  resourceType: "Specimen",
  id: "101",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 101</p><p><b>contained</b>: </p><p><b>identifier</b>: 23234352356</p><p><b>accessionIdentifier</b>: X352356</p><p><b>status</b>: available</p><p><b>type</b>: Venous blood specimen <span>(Details : {SNOMED CT code '122555007' = 'Venous blood specimen', given as 'Venous blood specimen'})</span></p><p><b>subject</b>: <a>Peter Patient</a></p><p><b>receivedTime</b>: 04/03/2011 7:03:00 AM</p><p><b>request</b>: <a>ServiceRequest/example</a></p><h3>Collections</h3><table><tr><td>-</td><td><b>Collector</b></td><td><b>Collected[x]</b></td><td><b>Quantity</b></td><td><b>Method</b></td><td><b>BodySite</b></td></tr><tr><td>*</td><td><a>Practitioner/example</a></td><td>30/05/2011 6:15:00 AM</td><td>6 mL</td><td>Line, Venous <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0488 code 'LNV' = 'Line, Venous)</span></td><td>Right median cubital vein <span>(Details : {SNOMED CT code '49852007' = 'Median cubital vein', given as 'Structure of median cubital vein (body structure)'})</span></td></tr></table><h3>Containers</h3><table><tr><td>-</td><td><b>Identifier</b></td><td><b>Description</b></td><td><b>Type</b></td><td><b>Capacity</b></td><td><b>SpecimenQuantity</b></td><td><b>Additive[x]</b></td></tr><tr><td>*</td><td>48736-15394-75465</td><td>Green Gel tube</td><td>Vacutainer <span>(Details )</span></td><td>10 mL</td><td>6 mL</td><td>id: hep; Lithium/Li Heparin <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-EntityCode code 'HEPL' = 'Lithium/Li Heparin)</span></td></tr></table><p><b>note</b>: Specimen is grossly lipemic</p></div>",
  },
  contained: [
    {
      resourceType: "Substance",
      id: "hep",
      code: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-EntityCode",
            code: "HEPL",
          },
        ],
      },
    },
  ],
  identifier: [
    {
      system: "http://ehr.acme.org/identifiers/collections",
      value: "23234352356",
    },
  ],
  accessionIdentifier: {
    system: "http://lab.acme.org/specimens/2011",
    value: "X352356",
  },
  status: "available",
  type: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "122555007",
        display: "Venous blood specimen",
      },
    ],
  },
  subject: {
    reference: "Patient/example",
    display: "Peter Patient",
  },
  receivedTime: "2011-03-04T07:03:00Z",
  request: [
    {
      reference: "ServiceRequest/example",
    },
  ],
  collection: {
    collector: {
      reference: "Practitioner/example",
    },
    collectedDateTime: "2011-05-30T06:15:00Z",
    quantity: {
      value: 6,
      unit: "mL",
    },
    method: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v2-0488",
          code: "LNV",
        },
      ],
    },
    bodySite: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "49852007",
          display: "Structure of median cubital vein (body structure)",
        },
      ],
      text: "Right median cubital vein",
    },
  },
  container: [
    {
      identifier: [
        {
          value: "48736-15394-75465",
        },
      ],
      description: "Green Gel tube",
      type: {
        text: "Vacutainer",
      },
      capacity: {
        value: 10,
        unit: "mL",
      },
      specimenQuantity: {
        value: 6,
        unit: "mL",
      },
      additiveReference: {
        reference: "#hep",
      },
    },
  ],
  note: [
    {
      text: "Specimen is grossly lipemic",
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
