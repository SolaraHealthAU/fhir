import type { Task } from "../../src/v4.0.1/task/types";

export const TaskExampleFmCancel: Task = {
  resourceType: "Task",
  id: "fm-example1",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t<p>\n\t\t\t\t<b> Generated Narrative with Details</b>\n\t\t\t</p>\n\t\t</div>',
  },
  identifier: [
    {
      use: "official",
      system: "http:/happyvalley.com/task",
      value: "20181012-001",
    },
  ],
  status: "requested",
  intent: "order",
  priority: "stat",
  code: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/financialtaskcode",
        code: "cancel",
      },
    ],
  },
  focus: {
    identifier: {
      system: "http://happyvalley.com/claim",
      value: "1500",
    },
  },
  authoredOn: "2018-10-04T08:25:05+10:00",
  lastModified: "2018-10-04T08:25:05+10:00",
  requester: {
    reference: "Organization/example",
    display: "Happy Valley Clinic",
  },
  owner: {
    identifier: {
      system: "http://nationalinsurers.com/identifiers",
      value: "12345",
    },
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

export const TaskExampleFmPoll: Task = {
  resourceType: "Task",
  id: "fm-example2",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t<p>\n\t\t\t\t<b> Generated Narrative with Details</b>\n\t\t\t</p>\n\t\t</div>',
  },
  identifier: [
    {
      use: "official",
      system: "http:/happyvalley.com/task",
      value: "20181012-005",
    },
  ],
  status: "requested",
  intent: "order",
  priority: "stat",
  code: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/financialtaskcode",
        code: "poll",
      },
    ],
  },
  authoredOn: "2018-10-12T08:25:05+10:00",
  lastModified: "2018-10-12T08:25:05+10:00",
  requester: {
    reference: "Organization/example",
    display: "Happy Valley Clinic",
  },
  owner: {
    identifier: {
      system: "http://nationalinsurers.com/identifiers",
      value: "12345",
    },
  },
  input: [
    {
      type: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/financialtaskinputtype",
            code: "include",
          },
        ],
      },
      valueCode: "ClaimResponse",
    },
    {
      type: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/financialtaskinputtype",
            code: "period",
          },
        ],
      },
      valuePeriod: {
        start: "2018-10-01",
        end: "2018-10-12",
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

export const TaskExampleFmRelease: Task = {
  resourceType: "Task",
  id: "fm-example3",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t<p>\n\t\t\t\t<b> Generated Narrative with Details</b>\n\t\t\t</p>\n\t\t</div>',
  },
  identifier: [
    {
      use: "official",
      system: "http:/happyvalley.com/task",
      value: "20181012-001",
    },
  ],
  status: "requested",
  intent: "order",
  priority: "stat",
  code: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/financialtaskcode",
        code: "release",
      },
    ],
  },
  focus: {
    identifier: {
      system: "http://happyvalley.com/claim",
      value: "1501",
    },
  },
  authoredOn: "2018-10-04T08:25:05+10:00",
  lastModified: "2018-10-04T08:25:05+10:00",
  requester: {
    reference: "Organization/example",
    display: "Happy Valley Clinic",
  },
  owner: {
    identifier: {
      system: "http://nationalinsurers.com/identifiers",
      value: "12345",
    },
  },
  input: [
    {
      type: {
        coding: [
          {
            system: "http://hl7.org/financial-taskinputtype",
            code: "origresponse",
          },
        ],
      },
      valueReference: {
        identifier: {
          system: "http://nationalinsurers.com/claimresponse",
          value: "CR201810040001234",
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

export const TaskExampleFmReprocess: Task = {
  resourceType: "Task",
  id: "fm-example4",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t<p>\n\t\t\t\t<b> Generated Narrative with Details</b>\n\t\t\t</p>\n\t\t</div>',
  },
  identifier: [
    {
      use: "official",
      system: "http:/happyvalley.com/task",
      value: "20181012-006",
    },
  ],
  status: "requested",
  intent: "order",
  priority: "stat",
  code: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/financialtaskcode",
        code: "reprocess",
      },
    ],
  },
  focus: {
    identifier: {
      system: "http://happyvalley.com/claim",
      value: "1501",
    },
  },
  authoredOn: "2018-10-04T08:25:05+10:00",
  lastModified: "2018-10-04T08:25:05+10:00",
  requester: {
    reference: "Organization/example",
    display: "Happy Valley Clinic",
  },
  owner: {
    identifier: {
      system: "http://nationalinsurers.com/identifiers",
      value: "12345",
    },
  },
  input: [
    {
      type: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/financialtaskinputtype",
            code: "origresponse",
          },
        ],
      },
      valueReference: {
        identifier: {
          system: "http://nationalinsurers.com/claimresponse",
          value: "CR201810040001234",
        },
      },
    },
    {
      type: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/financialtaskinputtype",
            code: "reference",
          },
        ],
      },
      valueString: "BR12345",
    },
    {
      type: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/financialtaskinputtype",
            code: "item",
          },
        ],
      },
      valuePositiveInt: 2,
    },
    {
      type: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/financialtaskinputtype",
            code: "item",
          },
        ],
      },
      valuePositiveInt: 3,
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

export const TaskExampleFmStatusResp: Task = {
  resourceType: "Task",
  id: "fm-example6",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t<p>\n\t\t\t\t<b> Generated Narrative with Details</b>\n\t\t\t</p>\n\t\t</div>',
  },
  identifier: [
    {
      use: "official",
      system: "http:/happyvalley.com/task",
      value: "20181012-001",
    },
    {
      use: "official",
      system: "http://nationalinsurers.com/identifiers/12345",
      value: "123GB5674",
    },
  ],
  status: "completed",
  intent: "order",
  priority: "stat",
  code: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/financialtaskcode",
        code: "status",
      },
    ],
  },
  focus: {
    identifier: {
      system: "http://happyvalley.com/claim",
      value: "1500",
    },
  },
  authoredOn: "2018-10-04T08:25:05+10:00",
  lastModified: "2018-10-04T08:25:05+10:00",
  requester: {
    reference: "Organization/example",
    display: "Happy Valley Clinic",
  },
  owner: {
    identifier: {
      system: "http://nationalinsurers.com/identifiers",
      value: "12345",
    },
  },
  output: [
    {
      type: {
        coding: [
          {
            system: "http://hl7.org/financial-taskoutputtype",
            code: "status",
          },
        ],
      },
      valueCode: "complete",
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

export const TaskExampleFmStatus: Task = {
  resourceType: "Task",
  id: "fm-example5",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t<p>\n\t\t\t\t<b> Generated Narrative with Details</b>\n\t\t\t</p>\n\t\t</div>',
  },
  identifier: [
    {
      use: "official",
      system: "http:/happyvalley.com/task",
      value: "20181012-001",
    },
  ],
  status: "requested",
  intent: "order",
  priority: "stat",
  code: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/financialtaskcode",
        code: "status",
      },
    ],
  },
  focus: {
    identifier: {
      system: "http://happyvalley.com/claim",
      value: "1500",
    },
  },
  authoredOn: "2018-10-04T08:25:05+10:00",
  lastModified: "2018-10-04T08:25:05+10:00",
  requester: {
    reference: "Organization/example",
    display: "Happy Valley Clinic",
  },
  owner: {
    identifier: {
      system: "http://nationalinsurers.com/identifiers",
      value: "12345",
    },
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

export const TaskExample1: Task = {
  resourceType: "Task",
  id: "example1",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example1</p><p><b>contained</b>: </p><p><b>identifier</b>: 20170201-001 (OFFICIAL)</p><p><b>basedOn</b>: General Wellness Careplan</p><p><b>groupIdentifier</b>: G20170201-001 (OFFICIAL)</p><p><b>status</b>: in-progress</p><p><b>businessStatus</b>: waiting for specimen <span>(Details )</span></p><p><b>intent</b>: order</p><p><b>priority</b>: routine</p><p><b>code</b>: Lipid Panel <span>(Details )</span></p><p><b>description</b>: Create order for getting specimen, Set up inhouse testing,  generate order for any sendouts and submit with specimen</p><p><b>focus</b>: <a>Lipid Panel Request</a></p><p><b>for</b>: <a>Peter James Chalmers</a></p><p><b>encounter</b>: <a>Example In-Patient Encounter</a></p><p><b>executionPeriod</b>: 31/10/2016 8:25:05 AM --&gt; (ongoing)</p><p><b>authoredOn</b>: 31/10/2016 8:25:05 AM</p><p><b>lastModified</b>: 31/10/2016 9:45:05 AM</p><p><b>requester</b>: <a>Dr Adam Careful</a></p><p><b>performerType</b>: Performer <span>(Details : {http://terminology.hl7.org/CodeSystem/task-performer-type code 'performer' = 'performer', given as 'Performer'})</span></p><p><b>owner</b>: <a>Clinical Laboratory @ Acme Hospital</a></p><p><b>reasonCode</b>: The Task.reason should only be included if there is no Task.focus or if it differs from the reason indicated on the focus <span>(Details )</span></p><p><b>note</b>: This is an example to demonstrate using task for actioning a servicerequest and to illustrate how to populate many of the task elements - this is the parent task that will be broken into subtask to grab the specimen and a sendout lab test </p><p><b>relevantHistory</b>: Author's Signature. Generated Summary: id: signature; recorded: 31/10/2016 8:25:05 AM; </p><h3>Restrictions</h3><table><tr><td>-</td><td><b>Repetitions</b></td><td><b>Period</b></td></tr><tr><td>*</td><td>1</td><td>?? --&gt; 02/11/2016 9:45:05 AM</td></tr></table></div>",
  },
  contained: [
    {
      resourceType: "Provenance",
      id: "signature",
      target: [
        {
          reference: "ServiceRequest/physiotherapy/_history/1",
        },
      ],
      recorded: "2016-10-31T08:25:05+10:00",
      agent: [
        {
          role: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "AUT",
                },
              ],
            },
          ],
          who: {
            reference: "Practitioner/f202",
            display: "Luigi Maas",
          },
        },
      ],
      signature: [
        {
          type: [
            {
              system: "urn:iso-astm:E1762-95:2013",
              code: "1.2.840.10065.1.12.1.1",
              display: "Author's Signature",
            },
          ],
          when: "2016-10-31T08:25:05+10:00",
          who: {
            reference: "Practitioner/example",
            display: "Dr Adam Careful",
          },
          targetFormat: "application/fhir+xml",
          sigFormat: "application/signature+xml",
          data: "dGhpcyBibG9iIGlzIHNuaXBwZWQ=",
        },
      ],
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http:/goodhealth.org/identifiers",
      value: "20170201-001",
    },
  ],
  basedOn: [
    {
      display: "General Wellness Careplan",
    },
  ],
  groupIdentifier: {
    use: "official",
    system: "http:/goodhealth.org/accession/identifiers",
    value: "G20170201-001",
  },
  status: "in-progress",
  businessStatus: {
    text: "waiting for specimen",
  },
  intent: "order",
  priority: "routine",
  code: {
    text: "Lipid Panel",
  },
  description:
    "Create order for getting specimen, Set up inhouse testing,  generate order for any sendouts and submit with specimen",
  focus: {
    reference: "ServiceRequest/lipid",
    display: "Lipid Panel Request",
  },
  for: {
    reference: "Patient/example",
    display: "Peter James Chalmers",
  },
  encounter: {
    reference: "Encounter/example",
    display: "Example In-Patient Encounter",
  },
  executionPeriod: {
    start: "2016-10-31T08:25:05+10:00",
  },
  authoredOn: "2016-10-31T08:25:05+10:00",
  lastModified: "2016-10-31T09:45:05+10:00",
  requester: {
    reference: "Practitioner/example",
    display: "Dr Adam Careful",
  },
  performerType: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/task-performer-type",
          code: "performer",
          display: "Performer",
        },
      ],
      text: "Performer",
    },
  ],
  owner: {
    reference: "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
    display: "Clinical Laboratory @ Acme Hospital",
  },
  reasonCode: {
    text: "The Task.reason should only be included if there is no Task.focus or if it differs from the reason indicated on the focus",
  },
  note: [
    {
      text: "This is an example to demonstrate using task for actioning a servicerequest and to illustrate how to populate many of the task elements - this is the parent task that will be broken into subtask to grab the specimen and a sendout lab test ",
    },
  ],
  relevantHistory: [
    {
      reference: "#signature",
      display: "Author's Signature",
    },
  ],
  restriction: {
    repetitions: 1,
    period: {
      end: "2016-11-02T09:45:05+10:00",
    },
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

export const TaskExample2: Task = {
  resourceType: "Task",
  id: "example2",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example2</p><p><b>identifier</b>: 20170201-002 (OFFICIAL)</p><p><b>groupIdentifier</b>: G20170201-001 (OFFICIAL)</p><p><b>partOf</b>: <a>Lipid Panel</a></p><p><b>status</b>: accepted</p><p><b>businessStatus</b>: waiting for patient <span>(Details )</span></p><p><b>intent</b>: filler-order</p><p><b>priority</b>: routine</p><p><b>code</b>: Specimen Collection <span>(Details )</span></p><p><b>focus</b>: BloodDraw ServiceRequest</p><p><b>for</b>: <a>Peter James Chalmers</a></p><p><b>encounter</b>: <a>Example In-Patient Encounter</a></p><p><b>executionPeriod</b>: 31/10/2016 8:45:05 AM --&gt; (ongoing)</p><p><b>authoredOn</b>: 31/10/2016 8:45:05 AM</p><p><b>lastModified</b>: 31/10/2016 9:45:05 AM</p><p><b>requester</b>: <a>Clinical Laboratory @ Acme Hospital</a></p><p><b>performerType</b>: Performer <span>(Details : {http://terminology.hl7.org/CodeSystem/task-performer-type code 'performer' = 'performer', given as 'Performer'})</span></p><p><b>owner</b>: <a>Clinical Laboratory @ Acme Hospital</a></p><h3>Restrictions</h3><table><tr><td>-</td><td><b>Repetitions</b></td><td><b>Period</b></td></tr><tr><td>*</td><td>1</td><td>?? --&gt; 01/11/2016 9:45:05 AM</td></tr></table></div>",
  },
  identifier: [
    {
      use: "official",
      system: "http:/goodhealth.org/identifiers",
      value: "20170201-002",
    },
  ],
  groupIdentifier: {
    use: "official",
    system: "http:/goodhealth.org/accession/identifiers",
    value: "G20170201-001",
  },
  partOf: [
    {
      reference: "Task/example1",
      display: "Lipid Panel",
    },
  ],
  status: "accepted",
  businessStatus: {
    text: "waiting for patient",
  },
  intent: "filler-order",
  priority: "routine",
  code: {
    text: "Specimen Collection",
  },
  focus: {
    display: "BloodDraw ServiceRequest",
  },
  for: {
    reference: "Patient/example",
    display: "Peter James Chalmers",
  },
  encounter: {
    reference: "Encounter/example",
    display: "Example In-Patient Encounter",
  },
  executionPeriod: {
    start: "2016-10-31T08:45:05+10:00",
  },
  authoredOn: "2016-10-31T08:45:05+10:00",
  lastModified: "2016-10-31T09:45:05+10:00",
  requester: {
    reference: "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
    display: "Clinical Laboratory @ Acme Hospital",
  },
  performerType: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/task-performer-type",
          code: "performer",
          display: "Performer",
        },
      ],
      text: "Performer",
    },
  ],
  owner: {
    reference: "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
    display: "Clinical Laboratory @ Acme Hospital",
  },
  restriction: {
    repetitions: 1,
    period: {
      end: "2016-11-01T09:45:05+10:00",
    },
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

export const TaskExample3: Task = {
  resourceType: "Task",
  id: "example3",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example3</p><p><b>status</b>: draft</p><p><b>intent</b>: order</p><p><b>code</b>: Refill Request <span>(Details )</span></p><p><b>focus</b>: <a>MedicationRequest/medrx002</a></p><p><b>for</b>: <a>Patient/f001</a></p><p><b>authoredOn</b>: 10/03/2016 10:39:32 PM</p><p><b>lastModified</b>: 10/03/2016 10:39:32 PM</p><p><b>requester</b>: <a>Patient/example</a></p><p><b>owner</b>: <a>Practitioner/example</a></p></div>',
  },
  status: "draft",
  intent: "order",
  code: {
    text: "Refill Request",
  },
  focus: {
    reference: "MedicationRequest/medrx002",
  },
  for: {
    reference: "Patient/f001",
  },
  authoredOn: "2016-03-10T22:39:32-04:00",
  lastModified: "2016-03-10T22:39:32-04:00",
  requester: {
    reference: "Patient/example",
  },
  owner: {
    reference: "Practitioner/example",
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

export const TaskExample4: Task = {
  resourceType: "Task",
  id: "example4",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example4</p><p><b>identifier</b>: 20170201-002 (OFFICIAL)</p><p><b>groupIdentifier</b>: G20170201-001 (OFFICIAL)</p><p><b>partOf</b>: <a>Lipid Panel</a></p><p><b>status</b>: completed</p><p><b>intent</b>: filler-order</p><p><b>priority</b>: routine</p><p><b>code</b>: Specimen Collection <span>(Details )</span></p><p><b>focus</b>: BloodDraw ServiceRequest</p><p><b>for</b>: <a>Peter James Chalmers</a></p><p><b>encounter</b>: <a>Example In-Patient Encounter</a></p><p><b>executionPeriod</b>: 31/10/2016 8:45:05 AM --&gt; 31/10/2016 2:45:05 PM</p><p><b>authoredOn</b>: 31/10/2016 8:45:05 AM</p><p><b>lastModified</b>: 31/10/2016 9:45:05 AM</p><p><b>requester</b>: <a>Clinical Laboratory @ Acme Hospital</a></p><p><b>performerType</b>: Performer <span>(Details : {http://terminology.hl7.org/CodeSystem/task-performer-type code 'performer' = 'performer', given as 'Performer'})</span></p><p><b>owner</b>: <a>Luigi Maas</a></p><h3>Restrictions</h3><table><tr><td>-</td><td><b>Repetitions</b></td><td><b>Period</b></td></tr><tr><td>*</td><td>1</td><td>?? --&gt; 01/11/2016 9:45:05 AM</td></tr></table><h3>Outputs</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>Value[x]</b></td></tr><tr><td>*</td><td>collected specimen <span>(Details )</span></td><td><a>Specimen/101</a></td></tr></table></div>",
  },
  identifier: [
    {
      use: "official",
      system: "http:/goodhealth.org/identifiers",
      value: "20170201-002",
    },
  ],
  groupIdentifier: {
    use: "official",
    system: "http:/goodhealth.org/accession/identifiers",
    value: "G20170201-001",
  },
  partOf: [
    {
      reference: "Task/example1",
      display: "Lipid Panel",
    },
  ],
  status: "completed",
  intent: "filler-order",
  priority: "routine",
  code: {
    text: "Specimen Collection",
  },
  focus: {
    display: "BloodDraw ServiceRequest",
  },
  for: {
    reference: "Patient/example",
    display: "Peter James Chalmers",
  },
  encounter: {
    reference: "Encounter/example",
    display: "Example In-Patient Encounter",
  },
  executionPeriod: {
    start: "2016-10-31T08:45:05+10:00",
    end: "2016-10-31T14:45:05+10:00",
  },
  authoredOn: "2016-10-31T08:45:05+10:00",
  lastModified: "2016-10-31T09:45:05+10:00",
  requester: {
    reference: "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
    display: "Clinical Laboratory @ Acme Hospital",
  },
  performerType: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/task-performer-type",
          code: "performer",
          display: "Performer",
        },
      ],
      text: "Performer",
    },
  ],
  owner: {
    reference: "Practitioner/f202",
    display: "Luigi Maas",
  },
  restriction: {
    repetitions: 1,
    period: {
      end: "2016-11-01T09:45:05+10:00",
    },
  },
  output: [
    {
      type: {
        text: "collected specimen",
      },
      valueReference: {
        reference: "Specimen/101",
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

export const TaskExample5: Task = {
  resourceType: "Task",
  id: "example5",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example5</p><p><b>identifier</b>: 20170201-001 (OFFICIAL)</p><p><b>basedOn</b>: General Wellness Careplan</p><p><b>groupIdentifier</b>: G20170201-001 (OFFICIAL)</p><p><b>status</b>: in-progress</p><p><b>businessStatus</b>: specimen received, test in progress <span>(Details )</span></p><p><b>intent</b>: order</p><p><b>priority</b>: routine</p><p><b>code</b>: Lipid Panel <span>(Details )</span></p><p><b>description</b>: Create order for getting specimen, Set up inhouse testing,  generate order for any sendouts and submit with specimen</p><p><b>focus</b>: <a>Lipid Panel Request</a></p><p><b>for</b>: <a>Peter James Chalmers</a></p><p><b>encounter</b>: <a>Example In-Patient Encounter</a></p><p><b>executionPeriod</b>: 31/10/2016 8:25:05 AM --&gt; (ongoing)</p><p><b>authoredOn</b>: 31/10/2016 8:25:05 AM</p><p><b>lastModified</b>: 31/10/2016 4:45:05 PM</p><p><b>requester</b>: <a>Dr Adam Careful</a></p><p><b>performerType</b>: Performer <span>(Details : {http://terminology.hl7.org/CodeSystem/task-performer-type code 'performer' = 'performer', given as 'Performer'})</span></p><p><b>owner</b>: <a>Clinical Laboratory @ Acme Hospital</a></p><p><b>reasonCode</b>: The Task.reason should only be included if there is no Task.focus or if it differs from the reason indicated on the focus <span>(Details )</span></p><p><b>note</b>: This is an example to demonstrate using task for actioning a servicerequest and to illustrate how to populate many of the task elements - this is the parent task that will be broken into subtask to grab the specimen and a sendout lab test </p><h3>Restrictions</h3><table><tr><td>-</td><td><b>Repetitions</b></td><td><b>Period</b></td></tr><tr><td>*</td><td>1</td><td>?? --&gt; 02/11/2016 9:45:05 AM</td></tr></table><h3>Outputs</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>Value[x]</b></td></tr><tr><td>*</td><td>collected specimen <span>(Details )</span></td><td><a>Specimen/101</a></td></tr></table></div>",
  },
  identifier: [
    {
      use: "official",
      system: "http:/goodhealth.org/identifiers",
      value: "20170201-001",
    },
  ],
  basedOn: [
    {
      display: "General Wellness Careplan",
    },
  ],
  groupIdentifier: {
    use: "official",
    system: "http:/goodhealth.org/accession/identifiers",
    value: "G20170201-001",
  },
  status: "in-progress",
  businessStatus: {
    text: "specimen received, test in progress",
  },
  intent: "order",
  priority: "routine",
  code: {
    text: "Lipid Panel",
  },
  description:
    "Create order for getting specimen, Set up inhouse testing,  generate order for any sendouts and submit with specimen",
  focus: {
    reference: "ServiceRequest/lipid",
    display: "Lipid Panel Request",
  },
  for: {
    reference: "Patient/example",
    display: "Peter James Chalmers",
  },
  encounter: {
    reference: "Encounter/example",
    display: "Example In-Patient Encounter",
  },
  executionPeriod: {
    start: "2016-10-31T08:25:05+10:00",
  },
  authoredOn: "2016-10-31T08:25:05+10:00",
  lastModified: "2016-10-31T16:45:05+10:00",
  requester: {
    reference: "Practitioner/example",
    display: "Dr Adam Careful",
  },
  performerType: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/task-performer-type",
          code: "performer",
          display: "Performer",
        },
      ],
      text: "Performer",
    },
  ],
  owner: {
    reference: "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
    display: "Clinical Laboratory @ Acme Hospital",
  },
  reasonCode: {
    text: "The Task.reason should only be included if there is no Task.focus or if it differs from the reason indicated on the focus",
  },
  note: [
    {
      text: "This is an example to demonstrate using task for actioning a servicerequest and to illustrate how to populate many of the task elements - this is the parent task that will be broken into subtask to grab the specimen and a sendout lab test ",
    },
  ],
  restriction: {
    repetitions: 1,
    period: {
      end: "2016-11-02T09:45:05+10:00",
    },
  },
  output: [
    {
      type: {
        text: "collected specimen",
      },
      valueReference: {
        reference: "Specimen/101",
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

export const TaskExample6: Task = {
  resourceType: "Task",
  id: "example6",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example6</p><p><b>identifier</b>: 20170201-001 (OFFICIAL)</p><p><b>basedOn</b>: General Wellness Careplan</p><p><b>groupIdentifier</b>: G20170201-001 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>businessStatus</b>: test completed and posted <span>(Details )</span></p><p><b>intent</b>: order</p><p><b>priority</b>: routine</p><p><b>code</b>: Lipid Panel <span>(Details )</span></p><p><b>description</b>: Create order for getting specimen, Set up inhouse testing,  generate order for any sendouts and submit with specimen</p><p><b>focus</b>: <a>Lipid Panel Request</a></p><p><b>for</b>: <a>Peter James Chalmers</a></p><p><b>encounter</b>: <a>Example In-Patient Encounter</a></p><p><b>executionPeriod</b>: 31/10/2016 8:25:05 AM --&gt; 31/10/2016 6:45:05 PM</p><p><b>authoredOn</b>: 31/10/2016 8:25:05 AM</p><p><b>lastModified</b>: 31/10/2016 6:45:05 PM</p><p><b>requester</b>: <a>Dr Adam Careful</a></p><p><b>performerType</b>: Performer <span>(Details : {http://terminology.hl7.org/CodeSystem/task-performer-type code 'performer' = 'performer', given as 'Performer'})</span></p><p><b>owner</b>: <a>Clinical Laboratory @ Acme Hospital</a></p><p><b>reasonCode</b>: The Task.reason should only be included if there is no Task.focus or if it differs from the reason indicated on the focus <span>(Details )</span></p><p><b>note</b>: This is an example to demonstrate using task for actioning a servicerequest and to illustrate how to populate many of the task elements - this is the parent task that will be broken into subtask to grab the specimen and a sendout lab test </p><h3>Restrictions</h3><table><tr><td>-</td><td><b>Repetitions</b></td><td><b>Period</b></td></tr><tr><td>*</td><td>1</td><td>?? --&gt; 02/11/2016 9:45:05 AM</td></tr></table><blockquote><p><b>output</b></p><p><b>type</b>: DiagnosticReport generated <span>(Details )</span></p><p><b>value</b>: <a>DiagnosticReport/lipids</a></p></blockquote><blockquote><p><b>output</b></p><p><b>type</b>: collected specimen <span>(Details )</span></p><p><b>value</b>: <a>Specimen/101</a></p></blockquote></div>",
  },
  identifier: [
    {
      use: "official",
      system: "http:/goodhealth.org/identifiers",
      value: "20170201-001",
    },
  ],
  basedOn: [
    {
      display: "General Wellness Careplan",
    },
  ],
  groupIdentifier: {
    use: "official",
    system: "http:/goodhealth.org/accession/identifiers",
    value: "G20170201-001",
  },
  status: "completed",
  businessStatus: {
    text: "test completed and posted",
  },
  intent: "order",
  priority: "routine",
  code: {
    text: "Lipid Panel",
  },
  description:
    "Create order for getting specimen, Set up inhouse testing,  generate order for any sendouts and submit with specimen",
  focus: {
    reference: "ServiceRequest/lipid",
    display: "Lipid Panel Request",
  },
  for: {
    reference: "Patient/example",
    display: "Peter James Chalmers",
  },
  encounter: {
    reference: "Encounter/example",
    display: "Example In-Patient Encounter",
  },
  executionPeriod: {
    start: "2016-10-31T08:25:05+10:00",
    end: "2016-10-31T18:45:05+10:00",
  },
  authoredOn: "2016-10-31T08:25:05+10:00",
  lastModified: "2016-10-31T18:45:05+10:00",
  requester: {
    reference: "Practitioner/example",
    display: "Dr Adam Careful",
  },
  performerType: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/task-performer-type",
          code: "performer",
          display: "Performer",
        },
      ],
      text: "Performer",
    },
  ],
  owner: {
    reference: "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
    display: "Clinical Laboratory @ Acme Hospital",
  },
  reasonCode: {
    text: "The Task.reason should only be included if there is no Task.focus or if it differs from the reason indicated on the focus",
  },
  note: [
    {
      text: "This is an example to demonstrate using task for actioning a servicerequest and to illustrate how to populate many of the task elements - this is the parent task that will be broken into subtask to grab the specimen and a sendout lab test ",
    },
  ],
  restriction: {
    repetitions: 1,
    period: {
      end: "2016-11-02T09:45:05+10:00",
    },
  },
  output: [
    {
      type: {
        text: "DiagnosticReport generated",
      },
      valueReference: {
        reference: "DiagnosticReport/lipids",
      },
    },
    {
      type: {
        text: "collected specimen",
      },
      valueReference: {
        reference: "Specimen/101",
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
