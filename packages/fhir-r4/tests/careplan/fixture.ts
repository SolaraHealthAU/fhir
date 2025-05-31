import type { CarePlan } from "../../src/v4.0.1/careplan/types";

export const CareplanExampleGpvisit: CarePlan = {
  resourceType: "CarePlan",
  id: "gpvisit",
  text: {
    status: "additional",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>  Represents the flow of a patient within a practice. The plan is created when\n        they arrive and represents the 'care' of the patient over the course of that encounter.\n        They first see the nurse for basic observations (BP, pulse, temp) then the doctor for\n        the consultation and finally the nurse again for a tetanus immunization. As the plan is\n        updated (e.g. a new activity added), different versions of the plan exist, and workflow timings\n        for reporting can be gained by examining the plan history. This example is the version after\n        seeing the doctor, and waiting for the nurse.The plan can either be created 'ad hoc' and modified as\n        the parient progresses, or start with a standard template (which can, of course, be altered to suit the patient.</p>\n    </div>",
  },
  contained: [
    {
      resourceType: "Condition",
      id: "p1",
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
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
      code: {
        text: "Overseas encounter",
      },
      subject: {
        reference: "Patient/100",
        display: "Peter James Chalmers",
      },
    },
    {
      resourceType: "CareTeam",
      id: "careteam",
      participant: [
        {
          id: "part1",
          role: [
            {
              coding: [
                {
                  system: "http://example.org/local",
                  code: "nur",
                },
              ],
              text: "nurse",
            },
          ],
          member: {
            reference: "Practitioner/13",
            display: "Nurse Nancy",
          },
        },
        {
          id: "part2",
          role: [
            {
              coding: [
                {
                  system: "http://example.org/local",
                  code: "doc",
                },
              ],
              text: "doctor",
            },
          ],
          member: {
            reference: "Practitioner/14",
            display: "Doctor Dave",
          },
        },
      ],
    },
    {
      resourceType: "Goal",
      id: "goal",
      lifecycleStatus: "planned",
      description: {
        text: "Complete consultation",
      },
      subject: {
        reference: "Patient/100",
        display: "Peter James Chalmers",
      },
    },
  ],
  status: "active",
  intent: "plan",
  subject: {
    reference: "Patient/100",
    display: "Peter James Chalmers",
  },
  period: {
    start: "2013-01-01T10:30:00+00:00",
  },
  careTeam: [
    {
      reference: "#careteam",
    },
  ],
  addresses: [
    {
      reference: "#p1",
      display: "obesity",
    },
  ],
  goal: [
    {
      reference: "#goal",
    },
  ],
  activity: [
    {
      outcomeReference: [
        {
          reference: "Encounter/example",
        },
      ],
      detail: {
        kind: "Appointment",
        code: {
          coding: [
            {
              system: "http://example.org/local",
              code: "nursecon",
            },
          ],
          text: "Nurse Consultation",
        },
        status: "completed",
        doNotPerform: false,
        scheduledPeriod: {
          start: "2013-01-01T10:38:00+00:00",
          end: "2013-01-01T10:50:00+00:00",
        },
        performer: [
          {
            reference: "Practitioner/13",
            display: "Nurse Nancy",
          },
        ],
      },
    },
    {
      detail: {
        kind: "Appointment",
        code: {
          coding: [
            {
              system: "http://example.org/local",
              code: "doccon",
            },
          ],
          text: "Doctor Consultation",
        },
        status: "scheduled",
        doNotPerform: false,
        performer: [
          {
            reference: "Practitioner/14",
            display: "Doctor Dave",
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

export const CareplanExampleF001Heart: CarePlan = {
  resourceType: "CarePlan",
  id: "f001",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f001</p><p><b>contained</b>: , </p><p><b>identifier</b>: CP2903 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>intent</b>: plan</p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>period</b>: 26/06/2011 --&gt; 27/06/2011</p><p><b>careTeam</b>: id: careteam</p><p><b>addresses</b>: <a>?????</a></p><p><b>goal</b>: id: goal; lifecycleStatus: completed; Achieved <span>(Details : {http://terminology.hl7.org/CodeSystem/goal-achievement code 'achieved' = 'Achieved', given as 'Achieved'})</span>; recovery surgery on heart of patient <span>(Details )</span>; Annotation: goal accomplished without complications</p><blockquote><p><b>activity</b></p><h3>Details</h3><table><tr><td>-</td><td><b>Kind</b></td><td><b>Code</b></td><td><b>Status</b></td><td><b>DoNotPerform</b></td><td><b>Scheduled[x]</b></td><td><b>Performer</b></td></tr><tr><td>*</td><td>ServiceRequest</td><td>Operation on heart <span>(Details : {SNOMED CT code '64915003' = 'Operative procedure on heart', given as 'Operation on heart'})</span></td><td>completed</td><td>true</td><td>2011-06-27T09:30:10+01:00</td><td><a>P. Voigt</a></td></tr></table></blockquote></div>",
  },
  contained: [
    {
      resourceType: "CareTeam",
      id: "careteam",
      participant: [
        {
          member: {
            reference: "Practitioner/f002",
            display: "P. Voigt",
          },
        },
      ],
    },
    {
      resourceType: "Goal",
      id: "goal",
      lifecycleStatus: "completed",
      achievementStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/goal-achievement",
            code: "achieved",
            display: "Achieved",
          },
        ],
        text: "Achieved",
      },
      description: {
        text: "recovery surgery on heart of patient",
      },
      subject: {
        reference: "Patient/f001",
        display: "P. van de Heuvel",
      },
      note: [
        {
          text: "goal accomplished without complications",
        },
      ],
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/zorgportal/identifiers/careplans",
      value: "CP2903",
    },
  ],
  status: "completed",
  intent: "plan",
  subject: {
    reference: "Patient/f001",
    display: "P. van de Heuvel",
  },
  period: {
    start: "2011-06-26",
    end: "2011-06-27",
  },
  careTeam: [
    {
      reference: "#careteam",
    },
  ],
  addresses: [
    {
      reference: "Condition/f201",
      display: "?????",
    },
  ],
  goal: [
    {
      reference: "#goal",
    },
  ],
  activity: [
    {
      detail: {
        kind: "ServiceRequest",
        code: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "64915003",
              display: "Operation on heart",
            },
          ],
        },
        status: "completed",
        doNotPerform: true,
        scheduledString: "2011-06-27T09:30:10+01:00",
        performer: [
          {
            reference: "Practitioner/f002",
            display: "P. Voigt",
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

export const CareplanExampleF002Lung: CarePlan = {
  resourceType: "CarePlan",
  id: "f002",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f002</p><p><b>contained</b>: , </p><p><b>identifier</b>: CP2934 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>intent</b>: plan</p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>period</b>: 06/07/2011 --&gt; 07/07/2013</p><p><b>careTeam</b>: id: careteam</p><p><b>addresses</b>: <a>?????</a></p><p><b>goal</b>: id: goal; lifecycleStatus: completed; Achieved <span>(Details : {http://terminology.hl7.org/CodeSystem/goal-achievement code 'achieved' = 'Achieved', given as 'Achieved'})</span>; succesful surgery on lung of patient <span>(Details )</span>; Annotation: goal accomplished with minor complications</p><blockquote><p><b>activity</b></p><h3>Details</h3><table><tr><td>-</td><td><b>Kind</b></td><td><b>Code</b></td><td><b>Status</b></td><td><b>DoNotPerform</b></td><td><b>Scheduled[x]</b></td><td><b>Performer</b></td></tr><tr><td>*</td><td>ServiceRequest</td><td>Partial lobectomy of lung <span>(Details : {SNOMED CT code '359615001' = 'Partial lobectomy of lung', given as 'Partial lobectomy of lung'})</span></td><td>completed</td><td>true</td><td>2011-07-07T09:30:10+01:00</td><td><a>M.I.M. Versteegh</a></td></tr></table></blockquote></div>",
  },
  contained: [
    {
      resourceType: "CareTeam",
      id: "careteam",
      participant: [
        {
          member: {
            reference: "Practitioner/f003",
            display: "M.I.M. Versteegh",
          },
        },
      ],
    },
    {
      resourceType: "Goal",
      id: "goal",
      lifecycleStatus: "completed",
      achievementStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/goal-achievement",
            code: "achieved",
            display: "Achieved",
          },
        ],
        text: "Achieved",
      },
      description: {
        text: "succesful surgery on lung of patient",
      },
      subject: {
        reference: "Patient/f001",
        display: "P. van de Heuvel",
      },
      note: [
        {
          text: "goal accomplished with minor complications",
        },
      ],
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/zorgportal/identifiers/careplans",
      value: "CP2934",
    },
  ],
  status: "completed",
  intent: "plan",
  subject: {
    reference: "Patient/f001",
    display: "P. van de Heuvel",
  },
  period: {
    start: "2011-07-06",
    end: "2013-07-07",
  },
  careTeam: [
    {
      reference: "#careteam",
    },
  ],
  addresses: [
    {
      reference: "Condition/f201",
      display: "?????",
    },
  ],
  goal: [
    {
      reference: "#goal",
    },
  ],
  activity: [
    {
      detail: {
        kind: "ServiceRequest",
        code: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "359615001",
              display: "Partial lobectomy of lung",
            },
          ],
        },
        status: "completed",
        doNotPerform: true,
        scheduledString: "2011-07-07T09:30:10+01:00",
        performer: [
          {
            reference: "Practitioner/f003",
            display: "M.I.M. Versteegh",
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

export const CareplanExampleF003Pharynx: CarePlan = {
  resourceType: "CarePlan",
  id: "f003",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f003</p><p><b>contained</b>: , </p><p><b>identifier</b>: CP3953 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>intent</b>: plan</p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>period</b>: 08/03/2013 9:00:10 AM --&gt; 08/03/2013 9:30:10 AM</p><p><b>careTeam</b>: id: careteam</p><p><b>addresses</b>: <a>?????</a></p><p><b>goal</b>: id: goal; lifecycleStatus: completed; Achieved <span>(Details : {http://terminology.hl7.org/CodeSystem/goal-achievement code 'achieved' = 'Achieved', given as 'Achieved'})</span>; Retropharyngeal abscess removal <span>(Details )</span>; Annotation: goal accomplished without complications</p><blockquote><p><b>activity</b></p><h3>Details</h3><table><tr><td>-</td><td><b>Kind</b></td><td><b>Code</b></td><td><b>Status</b></td><td><b>DoNotPerform</b></td><td><b>Scheduled[x]</b></td><td><b>Performer</b></td></tr><tr><td>*</td><td>ServiceRequest</td><td>Incision of retropharyngeal abscess <span>(Details : {SNOMED CT code '172960003' = 'Incision of retropharyngeal abscess', given as 'Incision of retropharyngeal abscess'})</span></td><td>completed</td><td>true</td><td>2011-06-27T09:30:10+01:00</td><td><a>E.M. van den broek</a></td></tr></table></blockquote></div>",
  },
  contained: [
    {
      resourceType: "CareTeam",
      id: "careteam",
      participant: [
        {
          member: {
            reference: "Practitioner/f001",
            display: "E.M. van den broek",
          },
        },
      ],
    },
    {
      resourceType: "Goal",
      id: "goal",
      lifecycleStatus: "completed",
      achievementStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/goal-achievement",
            code: "achieved",
            display: "Achieved",
          },
        ],
        text: "Achieved",
      },
      description: {
        text: "Retropharyngeal abscess removal",
      },
      subject: {
        reference: "Patient/f001",
        display: "P. van de Heuvel",
      },
      note: [
        {
          text: "goal accomplished without complications",
        },
      ],
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/zorgportal/identifiers/careplans",
      value: "CP3953",
    },
  ],
  status: "completed",
  intent: "plan",
  subject: {
    reference: "Patient/f001",
    display: "P. van de Heuvel",
  },
  period: {
    start: "2013-03-08T09:00:10+01:00",
    end: "2013-03-08T09:30:10+01:00",
  },
  careTeam: [
    {
      reference: "#careteam",
    },
  ],
  addresses: [
    {
      reference: "Condition/f201",
      display: "?????",
    },
  ],
  goal: [
    {
      reference: "#goal",
    },
  ],
  activity: [
    {
      detail: {
        kind: "ServiceRequest",
        code: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "172960003",
              display: "Incision of retropharyngeal abscess",
            },
          ],
        },
        status: "completed",
        doNotPerform: true,
        scheduledString: "2011-06-27T09:30:10+01:00",
        performer: [
          {
            reference: "Practitioner/f001",
            display: "E.M. van den broek",
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

export const CareplanExampleF201Renal: CarePlan = {
  resourceType: "CarePlan",
  id: "f201",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f201</p><p><b>contained</b>: , </p><p><b>status</b>: draft</p><p><b>intent</b>: proposal</p><p><b>subject</b>: <a>Roel</a></p><p><b>period</b>: 11/03/2013 --&gt; 13/03/2013</p><p><b>careTeam</b>: id: careteam</p><p><b>addresses</b>: <a>Roel's renal insufficiency</a></p><p><b>goal</b>: id: goal; lifecycleStatus: completed; Achieved <span>(Details : {http://terminology.hl7.org/CodeSystem/goal-achievement code 'achieved' = 'Achieved', given as 'Achieved'})</span>; Re-established renal function with at least healthy nutrients. <span>(Details )</span></p><blockquote><p><b>activity</b></p><h3>Details</h3><table><tr><td>-</td><td><b>Kind</b></td><td><b>Code</b></td><td><b>Status</b></td><td><b>DoNotPerform</b></td><td><b>Scheduled[x]</b></td><td><b>Product[x]</b></td><td><b>DailyAmount</b></td></tr><tr><td>*</td><td>NutritionOrder</td><td>Potassium supplementation <span>(Details : {SNOMED CT code '284093001' = 'Potassium supplementation', given as 'Potassium supplementation'})</span></td><td>completed</td><td>false</td><td>daily</td><td><a>Potassium</a></td><td>80 mmol<span> (Details: SNOMED CT code 258718000 = 'millimole')</span></td></tr></table></blockquote><blockquote><p><b>activity</b></p><h3>Details</h3><table><tr><td>-</td><td><b>Kind</b></td><td><b>Code</b></td><td><b>Status</b></td><td><b>DoNotPerform</b></td></tr><tr><td>*</td><td>ServiceRequest</td><td>Echography of kidney <span>(Details : {SNOMED CT code '306005' = 'Echography of kidney', given as 'Echography of kidney'})</span></td><td>completed</td><td>false</td></tr></table></blockquote></div>",
  },
  contained: [
    {
      resourceType: "CareTeam",
      id: "careteam",
      participant: [
        {
          role: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "425268008",
                  display: "Review of care plan",
                },
              ],
            },
          ],
          member: {
            reference: "Practitioner/f201",
            display: "Dokter Bronsig",
          },
        },
        {
          role: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "229774002",
                  display: "Carer",
                },
              ],
            },
          ],
          member: {
            reference: "Practitioner/f204",
            display: "Nurse Carla Espinosa",
          },
        },
      ],
    },
    {
      resourceType: "Goal",
      id: "goal",
      lifecycleStatus: "completed",
      achievementStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/goal-achievement",
            code: "achieved",
            display: "Achieved",
          },
        ],
        text: "Achieved",
      },
      description: {
        text: "Re-established renal function with at least healthy nutrients.",
      },
      subject: {
        reference: "Patient/f201",
        display: "Roel",
      },
    },
  ],
  status: "draft",
  intent: "proposal",
  subject: {
    reference: "Patient/f201",
    display: "Roel",
  },
  period: {
    start: "2013-03-11",
    end: "2013-03-13",
  },
  careTeam: [
    {
      reference: "#careteam",
    },
  ],
  addresses: [
    {
      reference: "Condition/f204",
      display: "Roel's renal insufficiency",
    },
  ],
  goal: [
    {
      reference: "#goal",
    },
  ],
  activity: [
    {
      detail: {
        kind: "NutritionOrder",
        code: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "284093001",
              display: "Potassium supplementation",
            },
          ],
        },
        status: "completed",
        doNotPerform: false,
        scheduledString: "daily",
        productReference: {
          reference: "Substance/f203",
          display: "Potassium",
        },
        dailyAmount: {
          value: 80,
          unit: "mmol",
          system: "http://snomed.info/sct",
          code: "258718000",
        },
      },
    },
    {
      detail: {
        kind: "ServiceRequest",
        code: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "306005",
              display: "Echography of kidney",
            },
          ],
        },
        status: "completed",
        doNotPerform: false,
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

export const CareplanExampleF202Malignancy: CarePlan = {
  resourceType: "CarePlan",
  id: "f202",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f202</p><p><b>contained</b>: , , , , , </p><p><b>status</b>: active</p><p><b>intent</b>: plan</p><p><b>subject</b>: <a>Roel</a></p><p><b>careTeam</b>: id: careteam</p><p><b>addresses</b>: <a>Roel's head-neck tumor</a></p><p><b>goal</b>: id: goal; lifecycleStatus: active; Elimination of the spenoid bone tumor <span>(Details )</span></p><blockquote><p><b>activity</b></p><p><b>outcomeReference</b>: <a>Roel's Chemotherapy</a></p><h3>Details</h3><table><tr><td>-</td><td><b>Kind</b></td><td><b>Code</b></td><td><b>Status</b></td><td><b>DoNotPerform</b></td><td><b>Product[x]</b></td></tr><tr><td>*</td><td>ServiceRequest</td><td>Chemotherapy <span>(Details : {SNOMED CT code '367336001' = 'Chemotherapy', given as 'Chemotherapy'})</span></td><td>in-progress</td><td>false</td><td>id: tpf; TPF <span>(Details )</span></td></tr></table></blockquote></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "doce",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "108806006",
            display: "Docetaxel",
          },
        ],
      },
    },
    {
      resourceType: "Medication",
      id: "cisp",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "57066004",
            display: "Cisplatin",
          },
        ],
      },
    },
    {
      resourceType: "Medication",
      id: "fluo",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "3127006",
            display: "Fluorouracil",
          },
        ],
      },
    },
    {
      resourceType: "Medication",
      id: "tpf",
      code: {
        text: "TPF",
      },
      ingredient: [
        {
          itemReference: {
            reference: "#doce",
          },
        },
        {
          itemReference: {
            reference: "#cisp",
          },
        },
        {
          itemReference: {
            reference: "#fluo",
          },
        },
      ],
    },
    {
      resourceType: "CareTeam",
      id: "careteam",
      participant: [
        {
          role: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "28995006",
                  display: "Treated with",
                },
              ],
            },
          ],
          member: {
            reference: "Practitioner/f201",
            display: "Dokter Bronsig",
          },
        },
      ],
    },
    {
      resourceType: "Goal",
      id: "goal",
      lifecycleStatus: "active",
      description: {
        text: "Elimination of the spenoid bone tumor",
      },
      subject: {
        reference: "Patient/f201",
        display: "Roel",
      },
    },
  ],
  status: "active",
  intent: "plan",
  subject: {
    reference: "Patient/f201",
    display: "Roel",
  },
  careTeam: [
    {
      reference: "#careteam",
    },
  ],
  addresses: [
    {
      reference: "Condition/f202",
      display: "Roel's head-neck tumor",
    },
  ],
  goal: [
    {
      reference: "#goal",
    },
  ],
  activity: [
    {
      outcomeReference: [
        {
          reference: "Procedure/f201",
          display: "Roel's Chemotherapy",
        },
      ],
      detail: {
        kind: "ServiceRequest",
        code: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "367336001",
              display: "Chemotherapy",
            },
          ],
        },
        status: "in-progress",
        doNotPerform: false,
        productReference: {
          reference: "#tpf",
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

export const CareplanExampleF203Sepsis: CarePlan = {
  resourceType: "CarePlan",
  id: "f203",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f203</p><p><b>contained</b>: , </p><p><b>status</b>: completed</p><p><b>intent</b>: plan</p><p><b>subject</b>: <a>Roel</a></p><p><b>period</b>: 14/04/2013 --&gt; 21/04/2013</p><p><b>careTeam</b>: id: careteam</p><p><b>addresses</b>: <a>Roel's sepsis</a></p><p><b>goal</b>: id: goal; lifecycleStatus: cancelled; Check whether further treatment of sepsis/pulmonary abcess is required <span>(Details )</span></p><blockquote><p><b>activity</b></p><h3>Details</h3><table><tr><td>-</td><td><b>Kind</b></td><td><b>Code</b></td><td><b>Status</b></td><td><b>DoNotPerform</b></td></tr><tr><td>*</td><td>ServiceRequest</td><td>High resolution computed tomography of lungs <span>(Details : {SNOMED CT code '241541005' = 'High resolution CT of lungs', given as 'High resolution computed tomography of lungs'})</span></td><td>not-started</td><td>false</td></tr></table></blockquote></div>",
  },
  contained: [
    {
      resourceType: "CareTeam",
      id: "careteam",
      participant: [
        {
          role: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "425268008",
                  display: "Review of care plan",
                },
              ],
            },
          ],
          member: {
            reference: "Practitioner/f201",
            display: "Dokter Bronsig",
          },
        },
        {
          role: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "278110001",
                  display: "Radiographic imaging",
                },
              ],
            },
          ],
          member: {
            reference: "Practitioner/f202",
            display: "Luigi Maas",
          },
        },
      ],
    },
    {
      resourceType: "Goal",
      id: "goal",
      lifecycleStatus: "cancelled",
      description: {
        text: "Check whether further treatment of sepsis/pulmonary abcess is required",
      },
      subject: {
        reference: "Patient/f201",
        display: "Roel",
      },
    },
  ],
  status: "completed",
  intent: "plan",
  subject: {
    reference: "Patient/f201",
    display: "Roel",
  },
  period: {
    start: "2013-04-14",
    end: "2013-04-21",
  },
  careTeam: [
    {
      reference: "#careteam",
    },
  ],
  addresses: [
    {
      reference: "Condition/f203",
      display: "Roel's sepsis",
    },
  ],
  goal: [
    {
      reference: "#goal",
    },
  ],
  activity: [
    {
      detail: {
        kind: "ServiceRequest",
        code: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "241541005",
              display: "High resolution computed tomography of lungs",
            },
          ],
        },
        status: "not-started",
        doNotPerform: false,
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

export const CareplanExampleIntegrated: CarePlan = {
  resourceType: "CarePlan",
  id: "integrate",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>Patient family is not ready to commit to goal setting at this time.  Goal setting will be addressed in the future</p>\n      <table>\n        <thead>\n          <tr>\n            <th>Start Date</th>\n            <th>Goal</th>\n            <th>Action Steps</th>\n            <th>Status</th>\n            <th>Date Last Updated</th>\n            <th>Comments</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>10 Sep 2012</td>\n            <td>Eve will lose weight and reduce her GERDS symptoms by improving her diet</td>\n            <td>Eve will review photos of high and low density foods and share with her parents</td>\n            <td>New Goal</td>\n            <td>10 Sep 2012</td>\n            <td>9/10/12 Eve eats one meal a day with her parents</td>\n          </tr>\n          <tr>\n            <td>10 Sep 2012</td>\n            <td>Eve will lose weight and reduce her GERDS symptoms by improving her diet</td>\n            <td>Eve will ask her dad to asist her to put the head of her bed on blocks</td>\n            <td>New Goal</td>\n            <td>10 Sep 2012</td>\n            <td>9/10/12 Eve will sleep in her bed more often than the couch</td>\n          </tr>\n          <tr>\n            <td>10 Sep 2012</td>\n            <td>Eve will improve her GERDS symptoms</td>\n            <td>Eve will reduce her intake of coffee and chocolate</td>\n            <td>In Process</td>\n            <td>10 Sep 2012</td>\n            <td/>\n          </tr>\n          <tr>\n            <td>27 Aug 2012</td>\n            <td>Eve will increase her energy by being more active</td>\n            <td>Eve will walk her friend\'s dog up and down a big hill 15-30 minutes 3 days a week</td>\n            <td>In Process</td>\n            <td>10 Sep 2012</td>\n            <td>8/27/12 Eve would like to try for 5 days a week.  9/10/12 Eve is still walking the dogs.</td>\n          </tr>\n          <tr>\n            <td>23 Jul 2012</td>\n            <td>Eve will increase her energy by being more active</td>\n            <td>Eve will walk 3 blocks to her parents house twice a week</td>\n            <td>In Process</td>\n            <td>10 Sep 2012</td>\n            <td>8/13/12 Eve walked 4 times the last week.  9/10/12 Eve did not walk to her parents the last week, but has plans to start again</td>\n          </tr>\n          <tr>\n            <td>23 Jul 2012</td>\n            <td>Eve will set up her medications and take as prescribed</td>\n            <td>Eve will us a calendar to check off after medications are taken</td>\n            <td>In Process</td>\n            <td>13 Aug 2012</td>\n            <td/>\n          </tr>\n          <tr>\n            <td>23 Jul 2012</td>\n            <td>Eve will restart her light treatments</td>\n            <td>Eve will use her lights MWF after her shower for 3 minutes</td>\n            <td>In Process</td>\n            <td>27 Aug 2012</td>\n            <td>8/13/12 After restarting the vinegar soaks the psoriasis is improved and Eve plans to treat the remainder with light treatments.  She plans to start this week.  8/27/12 Since her skin is improved Eve has not been using the light treatment as often, maybe once a week.  She would like to increase to 3 times a week again</td>\n          </tr>\n          <tr>\n            <td>10 Jul 2012</td>\n            <td>Eve will set up her medications and take as prescribed</td>\n            <td>Eve will use a calendar of a chart to help her remember when to take her medications</td>\n            <td>In Process</td>\n            <td>10 Sep 2012</td>\n            <td>7/23/12 Eve created a chart as a reminer to take the medications that do not fit in her pill box</td>\n          </tr>\n          <tr>\n            <td>23 Jul 2012</td>\n            <td>Eve will increase her energy by being more active</td>\n            <td>Eve will start using stretch bands and one step 2 days a week Mon/Wed 6-7am and maybe Friday afternoon</td>\n            <td>On-Hold</td>\n            <td>23 Aug 2012</td>\n            <td>7/30/12 will be able to esume exercise.  8/13/12 Eve prefers to focus on walking at this time</td>\n          </tr>\n          <tr>\n            <td>10 Jul 2012</td>\n            <td>Eve will set up her medications and take as prescribed</td>\n            <td>Eve will match a printed medication worksheet with the medication bottles at home</td>\n            <td>Completed</td>\n            <td>23 Jul 2012</td>\n            <td/>\n          </tr>\n          <tr>\n            <td>10 Jul 2012</td>\n            <td>Eve will set up her medications and take as prescribed</td>\n            <td>Eve will get a medication box to sort her pills.  She will have one for scheduled medications and one for as needed</td>\n            <td>Completed</td>\n            <td>16 Jul 2012</td>\n            <td>7/16/12 Eve now has some of her medications set up in pill packs by her pharmacist</td>\n          </tr>\n          <tr>\n            <td>23 Jul 2012</td>\n            <td>Eve will increase her energy by being more active</td>\n            <td>Eve will open &quot;The Firm&quot; DVD workout package and listen to it</td>\n            <td>Discontinued</td>\n            <td>13 Aug 2012</td>\n            <td>7/30/12 Eve will be able to resume exercise on 7/30/12.  8/13/12 -hold until &quot;less busy&quot;</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>',
  },
  contained: [
    {
      resourceType: "Condition",
      id: "p1",
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
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
      code: {
        text: "GERDS",
      },
      subject: {
        reference: "Patient/1",
        display: "Eve Everywoman",
      },
    },
    {
      resourceType: "Condition",
      id: "p2",
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
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
      code: {
        text: "Obesity",
      },
      subject: {
        reference: "Patient/1",
        display: "Eve Everywoman",
      },
    },
    {
      resourceType: "Condition",
      id: "p3",
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
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
      code: {
        text: "Psoriasis",
      },
      subject: {
        reference: "Patient/1",
        display: "Eve Everywoman",
      },
    },
    {
      resourceType: "Goal",
      id: "g1",
      lifecycleStatus: "active",
      description: {
        text: "Eve will lose weight and reduce her GERDS symptoms by improving her diet",
      },
      subject: {
        reference: "Patient/1",
        display: "Eve Everywoman",
      },
    },
    {
      resourceType: "Goal",
      id: "g2",
      lifecycleStatus: "active",
      description: {
        text: "Eve will improve her GERDS symptoms",
      },
      subject: {
        reference: "Patient/1",
        display: "Eve Everywoman",
      },
    },
    {
      resourceType: "Goal",
      id: "g3",
      lifecycleStatus: "active",
      description: {
        text: "Eve will increase her energy by being more active",
      },
      subject: {
        reference: "Patient/1",
        display: "Eve Everywoman",
      },
    },
    {
      resourceType: "Goal",
      id: "g4",
      lifecycleStatus: "active",
      description: {
        text: "Eve will set up her medications and take as prescribed",
      },
      subject: {
        reference: "Patient/1",
        display: "Eve Everywoman",
      },
    },
    {
      resourceType: "Goal",
      id: "g5",
      lifecycleStatus: "active",
      description: {
        text: "Eve will restart her light treatments",
      },
      subject: {
        reference: "Patient/1",
        display: "Eve Everywoman",
      },
    },
  ],
  status: "active",
  intent: "plan",
  subject: {
    reference: "Patient/1",
    display: "Eve Everywoman",
  },
  addresses: [
    {
      reference: "#p1",
      display: "GERDS",
    },
    {
      reference: "#p2",
      display: "Obesity",
    },
    {
      reference: "#p3",
      display: "Psoriasis",
    },
  ],
  goal: [
    {
      reference: "#g1",
    },
    {
      reference: "#g2",
    },
    {
      reference: "#g3",
    },
    {
      reference: "#g4",
    },
    {
      reference: "#g5",
    },
  ],
  activity: [
    {
      progress: [
        {
          time: "2012-09-10",
          text: "Eve eats one meal a day with her parents",
        },
      ],
      detail: {
        extension: [
          {
            url: "http://example.org/fhir/StructureDefinition/RevisionDate",
            valueDate: "2012-09-10",
          },
        ],
        goal: [
          {
            reference: "#g1",
          },
        ],
        status: "not-started",
        doNotPerform: false,
        scheduledPeriod: {
          start: "2012-09-10",
        },
        description:
          "Eve will review photos of high and low density foods and share with her parents",
      },
    },
    {
      progress: [
        {
          time: "2012-09-10",
          text: "Eve will sleep in her bed more often than the couch",
        },
      ],
      detail: {
        extension: [
          {
            url: "http://example.org/fhir/StructureDefinition/RevisionDate",
            valueDate: "2012-09-10",
          },
        ],
        kind: "CommunicationRequest",
        goal: [
          {
            reference: "#g1",
          },
        ],
        status: "not-started",
        doNotPerform: false,
        scheduledPeriod: {
          start: "2012-09-10",
        },
        description:
          "Eve will ask her dad to asist her to put the head of her bed on blocks",
      },
    },
    {
      detail: {
        extension: [
          {
            url: "http://example.org/fhir/StructureDefinition/RevisionDate",
            valueDate: "2012-09-10",
          },
        ],
        goal: [
          {
            reference: "#g2",
          },
        ],
        status: "in-progress",
        doNotPerform: false,
        scheduledPeriod: {
          start: "2012-09-10",
        },
        description: "Eve will reduce her intake of coffee and chocolate",
      },
    },
    {
      progress: [
        {
          time: "2012-08-27",
          text: "Eve would like to try for 5 days a week.",
        },
        {
          time: "2012-09-10",
          text: "Eve is still walking the dogs.",
        },
      ],
      detail: {
        extension: [
          {
            url: "http://example.org/fhir/StructureDefinition/RevisionDate",
            valueDate: "2012-09-10",
          },
        ],
        goal: [
          {
            reference: "#g3",
          },
        ],
        status: "in-progress",
        doNotPerform: false,
        scheduledPeriod: {
          start: "2012-08-27",
        },
        description:
          "Eve will walk her friend's dog up and down a big hill 15-30 minutes 3 days a week",
      },
    },
    {
      progress: [
        {
          time: "2012-08-13",
          text: "Eve walked 4 times the last week.",
        },
        {
          time: "2012-09-10",
          text: "Eve did not walk to her parents the last week, but has plans to start again",
        },
      ],
      detail: {
        extension: [
          {
            url: "http://example.org/fhir/StructureDefinition/RevisionDate",
            valueDate: "2012-09-10",
          },
        ],
        goal: [
          {
            reference: "#g3",
          },
        ],
        status: "in-progress",
        doNotPerform: false,
        scheduledPeriod: {
          start: "2012-07-23",
        },
        description: "Eve will walk 3 blocks to her parents house twice a week",
      },
    },
    {
      detail: {
        extension: [
          {
            url: "http://example.org/fhir/StructureDefinition/RevisionDate",
            valueDate: "2012-08-13",
          },
        ],
        goal: [
          {
            reference: "#g4",
          },
        ],
        status: "in-progress",
        doNotPerform: false,
        scheduledPeriod: {
          start: "2012-07-23",
        },
        description:
          "Eve will use a calendar to check off after medications are taken",
      },
    },
    {
      progress: [
        {
          time: "2012-08-13",
          text: "After restarting the vinegar soaks the psoriasis is improved and Eve plans to treat the remainder with light treatments.  She plans to start this week.",
        },
        {
          time: "2012-08-27",
          text: "Since her skin is improved Eve has not been using the light treatment as often, maybe once a week.  She would like to increase to 3 times a week again",
        },
      ],
      detail: {
        extension: [
          {
            url: "http://example.org/fhir/StructureDefinition/RevisionDate",
            valueDate: "2012-08-27",
          },
        ],
        goal: [
          {
            reference: "#g5",
          },
        ],
        status: "in-progress",
        doNotPerform: false,
        scheduledPeriod: {
          start: "2012-07-23",
        },
        description:
          "Eve will use her lights MWF after her shower for 3 minutes",
      },
    },
    {
      progress: [
        {
          time: "2012-07-23",
          text: "Eve created a chart as a reminer to take the medications that do not fit in her pill box",
        },
      ],
      detail: {
        extension: [
          {
            url: "http://example.org/fhir/StructureDefinition/RevisionDate",
            valueDate: "2012-09-10",
          },
        ],
        goal: [
          {
            reference: "#g4",
          },
        ],
        status: "in-progress",
        doNotPerform: false,
        scheduledPeriod: {
          start: "2012-07-10",
        },
        description:
          "Eve will use a calendar of a chart to help her remember when to take her medications",
      },
    },
    {
      progress: [
        {
          time: "2012-07-30",
          text: "Will be able to esume exercise.",
        },
        {
          time: "2012-08-13",
          text: "Eve prefers to focus on walking at this time",
        },
      ],
      detail: {
        extension: [
          {
            url: "http://example.org/fhir/StructureDefinition/RevisionDate",
            valueDate: "2012-08-23",
          },
        ],
        goal: [
          {
            reference: "#g3",
          },
        ],
        status: "on-hold",
        doNotPerform: false,
        scheduledPeriod: {
          start: "2012-07-23",
        },
        description:
          "Eve will start using stretch bands and one step 2 days a week Mon/Wed 6-7am and maybe Friday afternoon",
      },
    },
    {
      detail: {
        extension: [
          {
            url: "http://example.org/fhir/StructureDefinition/RevisionDate",
            valueDate: "2012-07-23",
          },
        ],
        goal: [
          {
            reference: "#g4",
          },
        ],
        status: "completed",
        doNotPerform: false,
        scheduledPeriod: {
          start: "2012-07-10",
        },
        description:
          "Eve will match a printed medication worksheet with the medication bottles at home",
      },
    },
    {
      progress: [
        {
          time: "2012-07-16",
          text: "Eve now has some of her medications set up in pill packs by her pharmacist",
        },
      ],
      detail: {
        extension: [
          {
            url: "http://example.org/fhir/StructureDefinition/RevisionDate",
            valueDate: "2012-07-16",
          },
        ],
        goal: [
          {
            reference: "#g4",
          },
        ],
        status: "completed",
        doNotPerform: false,
        scheduledPeriod: {
          start: "2012-07-10",
        },
        description:
          "Eve will get a medication box to sort her pills.  She will have one for scheduled medications and one for as needed",
      },
    },
    {
      progress: [
        {
          time: "2012-07-12",
          text: "Eve will be able to resume exercise on 7/30/12",
        },
        {
          time: "2012-08-13",
          text: 'hold until "less busy"',
        },
      ],
      detail: {
        extension: [
          {
            url: "http://example.org/fhir/StructureDefinition/RevisionDate",
            valueDate: "2012-08-13",
          },
        ],
        goal: [
          {
            reference: "#g3",
          },
        ],
        status: "on-hold",
        doNotPerform: false,
        scheduledPeriod: {
          start: "2012-07-23",
        },
        description:
          'Eve will open "The Firm" DVD workout package and listen to it',
      },
    },
  ],
  note: [
    {
      text: "Patient family is not ready to commit to goal setting at this time.  Goal setting will be addressed in the future",
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

export const CareplanExampleObesityNarrative: CarePlan = {
  resourceType: "CarePlan",
  id: "obesity-narrative",
  text: {
    status: "additional",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p> Care plan to address obesity.  Goal is a target weight of 160 to 180 lbs.  Activities include diet and exercise.</p>\n    </div>',
  },
  status: "active",
  intent: "plan",
  subject: {
    reference: "Patient/example",
    display: "Peter James Chalmers",
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

export const CareplanExamplePregnancy: CarePlan = {
  resourceType: "CarePlan",
  id: "preg",
  text: {
    status: "additional",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>A maternity care plan (for a pregnant woman).</p>\n      <p>LMP is 1st Jan, 2013 (a great new years party!) The plan has activities to take prenatal vitamins, schedule first antenatal,\n            and 'placeholders' for the second antenatal and delivery (there would be lots of others of course)</p>\n      <p>Note that where is a proposed 'status' element against each activity</p>\n    </div>",
  },
  contained: [
    {
      resourceType: "Condition",
      id: "p1",
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
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
      code: {
        text: "pregnancy",
      },
      subject: {
        reference: "Patient/1",
        display: "Eve Everywoman",
      },
    },
    {
      resourceType: "Practitioner",
      id: "pr1",
      name: [
        {
          family: "Midwife",
          given: ["Mavis"],
        },
      ],
    },
    {
      resourceType: "Practitioner",
      id: "pr2",
      name: [
        {
          family: "Obstetrician",
          given: ["Oscar"],
        },
      ],
    },
    {
      resourceType: "CareTeam",
      id: "careteam",
      participant: [
        {
          role: [
            {
              coding: [
                {
                  system: "http://example.org/mysys",
                  code: "lmc",
                },
              ],
              text: "Midwife",
            },
          ],
          member: {
            reference: "#pr1",
            display: "Mavis Midwife",
          },
        },
        {
          role: [
            {
              coding: [
                {
                  system: "http://example.org/mysys",
                  code: "obs",
                },
              ],
              text: "Obstretitian",
            },
          ],
          member: {
            reference: "#pr2",
            display: "Oscar Obstetrician",
          },
        },
      ],
    },
    {
      resourceType: "Goal",
      id: "goal",
      lifecycleStatus: "active",
      description: {
        text: "Maintain patient's health throughout pregnancy and ensure a healthy child",
      },
      subject: {
        reference: "Patient/1",
        display: "Eve Everywoman",
      },
    },
  ],
  extension: [
    {
      url: "http://example.org/fhir/StructureDefinition/careplan#lmp",
      valueDateTime: "2013-01-01",
    },
  ],
  status: "active",
  intent: "plan",
  subject: {
    reference: "Patient/1",
    display: "Eve Everywoman",
  },
  period: {
    start: "2013-01-01",
    end: "2013-10-01",
  },
  careTeam: [
    {
      reference: "#careteam",
    },
  ],
  addresses: [
    {
      reference: "#p1",
      display: "pregnancy",
    },
  ],
  goal: [
    {
      reference: "#goal",
    },
  ],
  activity: [
    {
      reference: {
        display: "Prenatal vitamin MedicationRequest",
      },
    },
    {
      extension: [
        {
          url: "http://example.org/fhir/StructureDefinition/careplan#andetails",
          valueUri: "http://orionhealth.com/fhir/careplan/1andetails",
        },
      ],
      detail: {
        kind: "Appointment",
        code: {
          coding: [
            {
              system: "http://example.org/mySystem",
              code: "1an",
            },
          ],
          text: "First Antenatal encounter",
        },
        status: "scheduled",
        doNotPerform: false,
        scheduledTiming: {
          repeat: {
            boundsPeriod: {
              start: "2013-02-14",
              end: "2013-02-28",
            },
          },
        },
        performer: [
          {
            reference: "#pr1",
            display: "Mavis Midwife",
          },
        ],
        description:
          "The first antenatal encounter. This is where a detailed physical examination is performed.             and the pregnanacy discussed with the mother-to-be.",
      },
    },
    {
      detail: {
        kind: "Appointment",
        code: {
          coding: [
            {
              system: "http://example.org/mySystem",
              code: "an",
            },
          ],
          text: "Follow-up Antenatal encounter",
        },
        status: "not-started",
        doNotPerform: false,
        scheduledTiming: {
          repeat: {
            boundsPeriod: {
              start: "2013-03-01",
              end: "2013-03-14",
            },
          },
        },
        performer: [
          {
            reference: "#pr1",
            display: "Mavis Midwife",
          },
        ],
        description:
          "The second antenatal encounter. Discuss any issues that arose from the first antenatal encounter",
      },
    },
    {
      detail: {
        kind: "Appointment",
        code: {
          coding: [
            {
              system: "http://example.org/mySystem",
              code: "del",
            },
          ],
          text: "Delivery",
        },
        status: "not-started",
        doNotPerform: false,
        scheduledTiming: {
          repeat: {
            boundsPeriod: {
              start: "2013-09-01",
              end: "2013-09-14",
            },
          },
        },
        performer: [
          {
            reference: "#pr1",
            display: "Mavis Midwife",
          },
        ],
        description: "The delivery.",
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

export const CareplanExample: CarePlan = {
  resourceType: "CarePlan",
  id: "example",
  text: {
    status: "additional",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p> A simple care plan to indicate a patient taking their weight once a day because of obesity.</p>\n    </div>',
  },
  contained: [
    {
      resourceType: "Condition",
      id: "p1",
      clinicalStatus: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
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
      code: {
        text: "Obesity",
      },
      subject: {
        reference: "Patient/example",
        display: "Peter James Chalmers",
      },
    },
  ],
  identifier: [
    {
      value: "12345",
    },
  ],
  instantiatesUri: ["http://example.org/protocol-for-obesity"],
  basedOn: [
    {
      display: "Management of Type 2 Diabetes",
    },
  ],
  replaces: [
    {
      display: "Plan from urgent care clinic",
    },
  ],
  partOf: [
    {
      display: "Overall wellness plan",
    },
  ],
  status: "active",
  intent: "plan",
  category: [
    {
      text: "Weight management plan",
    },
  ],
  description: "Manage obesity and weight loss",
  subject: {
    reference: "Patient/example",
    display: "Peter James Chalmers",
  },
  encounter: {
    reference: "Encounter/home",
  },
  period: {
    end: "2017-06-01",
  },
  created: "2016-01-01",
  author: {
    reference: "Practitioner/example",
    display: "Dr Adam Careful",
  },
  careTeam: [
    {
      reference: "CareTeam/example",
    },
  ],
  addresses: [
    {
      reference: "#p1",
      display: "obesity",
    },
  ],
  goal: [
    {
      reference: "Goal/example",
    },
  ],
  activity: [
    {
      outcomeCodeableConcept: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "161832001",
              display: "Progressive weight loss",
            },
          ],
        },
      ],
      outcomeReference: [
        {
          reference: "Observation/example",
          display: "Weight Measured",
        },
      ],
      detail: {
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "3141-9",
              display: "Weight Measured",
            },
            {
              system: "http://snomed.info/sct",
              code: "27113001",
              display: "Body weight",
            },
          ],
        },
        status: "completed",
        statusReason: {
          text: "Achieved weight loss to mitigate diabetes risk.",
        },
        doNotPerform: false,
        scheduledTiming: {
          repeat: {
            frequency: 1,
            period: 1,
            periodUnit: "d",
          },
        },
        location: {
          display: "Patient's home",
        },
        performer: [
          {
            reference: "Patient/example",
            display: "Peter James Chalmers",
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
