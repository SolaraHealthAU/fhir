import type { MedicationRequest } from "../../src/v4.0.1/medicationrequest/types";

export const Medicationrequest0301: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0301",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0301</p><p><b>contained</b>: , </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>statusReason</b>: Try another treatment first <span>(Details : {http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason code 'altchoice' = 'Try another treatment first', given as 'Try another treatment first'})</span></p><p><b>intent</b>: order</p><p><b>category</b>: Inpatient <span>(Details : {http://terminology.hl7.org/CodeSystem/medicationrequest-category code 'inpatient' = 'Inpatient', given as 'Inpatient'})</span></p><p><b>medication</b>: id: med0310; Oral Form Oxycodone (product) <span>(Details : {SNOMED CT code '430127000' = 'Oral form oxycodone', given as 'Oral Form Oxycodone (product)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>encounter</b>: <a>encounter who leads to this prescription</a></p><p><b>supportingInformation</b>: <a>Procedure/biopsy</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>performer</b>: <a>Carla Espinosa</a></p><p><b>performerType</b>: Public Health Nurse <span>(Details : {SNOMED CT code '26369006' = 'Public health nurse', given as 'Public Health Nurse'})</span></p><p><b>reasonCode</b>: Rib Pain (finding) <span>(Details : {SNOMED CT code '297217002' = 'Rib pain', given as 'Rib Pain (finding)'})</span></p><p><b>insurance</b>: <a>Coverage/9876B1</a></p><p><b>note</b>: Patient told to take with food</p><p><b>dosageInstruction</b>: </p><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>NumberOfRepeatsAllowed</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td><td><b>Performer</b></td></tr><tr><td>*</td><td>15/01/2015 --&gt; 15/01/2016</td><td>0</td><td>30 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></td><td>10 days<span> (Details: UCUM code d = 'd')</span></td><td><a>Practitioner/f001</a></td></tr></table><h3>Substitutions</h3><table><tr><td>-</td><td><b>Allowed[x]</b></td><td><b>Reason</b></td></tr><tr><td>*</td><td>true</td><td>formulary policy <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code 'FP' = 'formulary policy', given as 'formulary policy'})</span></td></tr></table><p><b>detectedIssue</b>: <a>DetectedIssue/allergy</a></p><p><b>eventHistory</b>: Author's Signature. Generated Summary: id: signature; recorded: 01/02/2017 5:23:07 PM; </p></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0310",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "430127000",
            display: "Oral Form Oxycodone (product)",
          },
        ],
      },
    },
    {
      resourceType: "Provenance",
      id: "signature",
      target: [
        {
          reference: "ServiceRequest/physiotherapy",
        },
      ],
      recorded: "2017-02-01T17:23:07Z",
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
            reference: "Practitioner/example",
            display: "Dr Adam Careful",
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
          when: "2017-02-01T17:23:07Z",
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
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "completed",
  statusReason: {
    coding: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason",
        code: "altchoice",
        display: "Try another treatment first",
      },
    ],
  },
  intent: "order",
  category: [
    {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
          code: "inpatient",
          display: "Inpatient",
        },
      ],
    },
  ],
  medicationReference: {
    reference: "#med0310",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  encounter: {
    reference: "Encounter/f201",
    display: "encounter who leads to this prescription",
  },
  supportingInformation: [
    {
      reference: "Procedure/biopsy",
    },
  ],
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  performer: {
    reference: "Practitioner/f204",
    display: "Carla Espinosa",
  },
  performerType: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "26369006",
        display: "Public Health Nurse",
      },
    ],
  },
  reasonCode: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "297217002",
          display: "Rib Pain (finding)",
        },
      ],
    },
  ],
  insurance: [
    {
      reference: "Coverage/9876B1",
    },
  ],
  note: [
    {
      text: "Patient told to take with food",
    },
  ],
  dosageInstruction: [
    {
      sequence: 1,
      text: "one to two tablets every 4-6 hours as needed for rib pain",
      additionalInstruction: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "418914006",
              display:
                "Warning. May cause drowsiness. If affected do not drive or operate machinery. Avoid alcoholic drink (qualifier value)",
            },
          ],
        },
      ],
      patientInstruction:
        "Take one to two tablets every four to six hours as needed for rib pain",
      timing: {
        repeat: {
          frequency: 1,
          period: 4,
          periodMax: 6,
          periodUnit: "h",
        },
      },
      asNeededCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "297217002",
            display: "Rib Pain (finding)",
          },
        ],
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "26643006",
            display: "Oral Route",
          },
        ],
      },
      method: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "421521009",
            display:
              "Swallow - dosing instruction imperative (qualifier value)",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseRange: {
            low: {
              value: 1,
              unit: "TAB",
              system:
                "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
              code: "TAB",
            },
            high: {
              value: 2,
              unit: "TAB",
              system:
                "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
              code: "TAB",
            },
          },
        },
      ],
    },
  ],
  dispenseRequest: {
    validityPeriod: {
      start: "2015-01-15",
      end: "2016-01-15",
    },
    numberOfRepeatsAllowed: 0,
    quantity: {
      value: 30,
      unit: "TAB",
      system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      code: "TAB",
    },
    expectedSupplyDuration: {
      value: 10,
      unit: "days",
      system: "http://unitsofmeasure.org",
      code: "d",
    },
    performer: {
      reference: "Practitioner/f001",
    },
  },
  substitution: {
    allowedBoolean: true,
    reason: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          code: "FP",
          display: "formulary policy",
        },
      ],
    },
  },
  detectedIssue: [
    {
      reference: "DetectedIssue/allergy",
    },
  ],
  eventHistory: [
    {
      reference: "#signature",
      display: "Author's Signature",
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

export const Medicationrequest0302: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0302",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0302</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>medication</b>: id: med0320; Azithromycin 250mg capsule (product) <span>(Details : {SNOMED CT code '324252006' = 'Azithromycin 250mg capsule', given as 'Azithromycin 250mg capsule (product)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>encounter</b>: <a>encounter who leads to this prescription</a></p><p><b>supportingInformation</b>: <a>Coverage/SP1234</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>reasonCode</b>: Traveller's Diarrhea (disorder) <span>(Details : {SNOMED CT code '11840006' = 'Traveler's diarrhea', given as 'Traveller's Diarrhea (disorder)'})</span></p><p><b>note</b>: Patient told to take with food</p><p><b>dosageInstruction</b>: , </p><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>NumberOfRepeatsAllowed</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td></tr><tr><td>*</td><td>15/01/2015 --&gt; 15/01/2016</td><td>1</td><td>6 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></td><td>5 days<span> (Details: UCUM code d = 'd')</span></td></tr></table><h3>Substitutions</h3><table><tr><td>-</td><td><b>Allowed[x]</b></td><td><b>Reason</b></td></tr><tr><td>*</td><td>true</td><td>formulary policy <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code 'FP' = 'formulary policy', given as 'formulary policy'})</span></td></tr></table></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0320",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "324252006",
            display: "Azithromycin 250mg capsule (product)",
          },
        ],
      },
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "active",
  intent: "order",
  medicationReference: {
    reference: "#med0320",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  encounter: {
    reference: "Encounter/f001",
    display: "encounter who leads to this prescription",
  },
  supportingInformation: [
    {
      reference: "Coverage/SP1234",
    },
  ],
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  reasonCode: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "11840006",
          display: "Traveller's Diarrhea (disorder)",
        },
      ],
    },
  ],
  note: [
    {
      text: "Patient told to take with food",
    },
  ],
  dosageInstruction: [
    {
      sequence: 1,
      text: "Two tablets at once",
      additionalInstruction: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "311504000",
              display: "With or after food",
            },
          ],
        },
      ],
      timing: {
        repeat: {
          frequency: 1,
          period: 1,
          periodUnit: "d",
        },
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "26643006",
            display: "Oral Route",
          },
        ],
      },
      method: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "421521009",
            display:
              "Swallow - dosing instruction imperative (qualifier value)",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 2,
            unit: "TAB",
            system:
              "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
            code: "TAB",
          },
        },
      ],
    },
    {
      sequence: 2,
      text: "One tablet daily for 4 days",
      additionalInstruction: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "311504000",
              display: "With or after food",
            },
          ],
        },
      ],
      timing: {
        repeat: {
          frequency: 4,
          period: 1,
          periodUnit: "d",
        },
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "26643006",
            display: "Oral Route",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 1,
            unit: "TAB",
            system:
              "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
            code: "TAB",
          },
        },
      ],
    },
  ],
  dispenseRequest: {
    validityPeriod: {
      start: "2015-01-15",
      end: "2016-01-15",
    },
    numberOfRepeatsAllowed: 1,
    quantity: {
      value: 6,
      unit: "TAB",
      system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      code: "TAB",
    },
    expectedSupplyDuration: {
      value: 5,
      unit: "days",
      system: "http://unitsofmeasure.org",
      code: "d",
    },
  },
  substitution: {
    allowedBoolean: true,
    reason: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          code: "FP",
          display: "formulary policy",
        },
      ],
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

export const Medicationrequest0303: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0303",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0303</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>medication</b>: id: med0311; Prednisone 5mg tablet (Product) <span>(Details : {SNOMED CT code '373994007' = 'Prednisone 5mg tablet', given as 'Prednisone 5mg tablet (Product)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>encounter</b>: <a>encounter who leads to this prescription</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>basedOn</b>: <a>CarePlan/gpvisit</a></p><p><b>groupIdentifier</b>: 983939393 (OFFICIAL)</p><p><b>note</b>: Patient told to take with food</p><p><b>dosageInstruction</b>: , , </p><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>NumberOfRepeatsAllowed</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td><td><b>Performer</b></td></tr><tr><td>*</td><td>15/01/2015 --&gt; 15/01/2016</td><td>1</td><td>51 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></td><td>21 days<span> (Details: UCUM code d = 'd')</span></td><td><a>Organization/f001</a></td></tr></table><h3>Substitutions</h3><table><tr><td>-</td><td><b>Allowed[x]</b></td><td><b>Reason</b></td></tr><tr><td>*</td><td>Therapeutic Brand <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution code 'TB' = 'therapeutic brand', given as 'Therapeutic Brand'})</span></td><td>formulary policy <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code 'FP' = 'formulary policy', given as 'formulary policy'})</span></td></tr></table></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0311",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "373994007",
            display: "Prednisone 5mg tablet (Product)",
          },
        ],
      },
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "active",
  intent: "order",
  medicationReference: {
    reference: "#med0311",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  encounter: {
    reference: "Encounter/f001",
    display: "encounter who leads to this prescription",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  basedOn: [
    {
      reference: "CarePlan/gpvisit",
    },
  ],
  groupIdentifier: {
    use: "official",
    system: "http://www.bmc.nl/portal/prescriptions",
    value: "983939393",
  },
  note: [
    {
      text: "Patient told to take with food",
    },
  ],
  dosageInstruction: [
    {
      sequence: 1,
      text: "Take 4 tablets daily for 7 days starting January 16, 2015",
      timing: {
        repeat: {
          boundsPeriod: {
            start: "2015-01-16",
            end: "2015-01-20",
          },
          frequency: 1,
          period: 1,
          periodUnit: "d",
        },
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "26643006",
            display: "Oral Route",
          },
        ],
      },
      method: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "421521009",
            display:
              "Swallow - dosing instruction imperative (qualifier value)",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 4,
            unit: "TAB",
            system:
              "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
            code: "TAB",
          },
        },
      ],
    },
    {
      sequence: 2,
      text: "Take 2 tablets daily for 7 days starting January 23, 2015",
      timing: {
        repeat: {
          boundsPeriod: {
            start: "2015-01-23",
            end: "2015-01-30",
          },
          frequency: 1,
          period: 1,
          periodUnit: "d",
        },
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "26643006",
            display: "Oral Route",
          },
        ],
      },
      method: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "421521009",
            display:
              "Swallow - dosing instruction imperative (qualifier value)",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 2,
            unit: "TAB",
            system:
              "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
            code: "TAB",
          },
        },
      ],
    },
    {
      sequence: 3,
      text: "Take 1 tablets daily for 7 days starting January 31, 2015",
      timing: {
        repeat: {
          boundsPeriod: {
            start: "2015-01-31",
            end: "2015-02-06",
          },
          frequency: 1,
          period: 1,
          periodUnit: "d",
        },
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "26643006",
            display: "Oral Route",
          },
        ],
      },
      method: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "421521009",
            display:
              "Swallow - dosing instruction imperative (qualifier value)",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 1,
            unit: "TAB",
            system:
              "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
            code: "TAB",
          },
        },
      ],
    },
  ],
  dispenseRequest: {
    validityPeriod: {
      start: "2015-01-15",
      end: "2016-01-15",
    },
    numberOfRepeatsAllowed: 1,
    quantity: {
      value: 51,
      unit: "TAB",
      system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      code: "TAB",
    },
    expectedSupplyDuration: {
      value: 21,
      unit: "days",
      system: "http://unitsofmeasure.org",
      code: "d",
    },
    performer: {
      reference: "Organization/f001",
    },
  },
  substitution: {
    allowedCodeableConcept: {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
          code: "TB",
          display: "Therapeutic Brand",
        },
      ],
    },
    reason: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          code: "FP",
          display: "formulary policy",
        },
      ],
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

export const Medicationrequest0304: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0304",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0304</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>medication</b>: Nystatin 100,000 u/ml oral suspension. Generated Summary: id: med0312; Nystatin 100,000 units/ml oral suspension (product) <span>(Details : {SNOMED CT code '324689003' = 'Nystatin 100,000units/mL oral suspension', given as 'Nystatin 100,000 units/ml oral suspension (product)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>dosageInstruction</b>: </p><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>NumberOfRepeatsAllowed</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td></tr><tr><td>*</td><td>15/01/2015 --&gt; 15/01/2016</td><td>3</td><td>10 ml<span> (Details: UCUM code ml = 'ml')</span></td><td>10 days<span> (Details: UCUM code d = 'd')</span></td></tr></table></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0312",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "324689003",
            display: "Nystatin 100,000 units/ml oral suspension (product)",
          },
        ],
      },
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "completed",
  intent: "order",
  medicationReference: {
    reference: "#med0312",
    display: "Nystatin 100,000 u/ml oral suspension",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  dosageInstruction: [
    {
      sequence: 1,
      text: "10 drops four times daily - apply in mouth using cotton swab or finger",
      timing: {
        repeat: {
          frequency: 4,
          period: 1,
          periodUnit: "d",
        },
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 10,
            unit: "drop",
            system: "http://unitsofmeasure.org",
            code: "drop",
          },
        },
      ],
    },
  ],
  dispenseRequest: {
    validityPeriod: {
      start: "2015-01-15",
      end: "2016-01-15",
    },
    numberOfRepeatsAllowed: 3,
    quantity: {
      value: 10,
      unit: "ml",
      system: "http://unitsofmeasure.org",
      code: "ml",
    },
    expectedSupplyDuration: {
      value: 10,
      unit: "days",
      system: "http://unitsofmeasure.org",
      code: "d",
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

export const Medicationrequest0305: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0305",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0305</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>medication</b>: id: med0314; Alprazolam 0.25mg Oral Tablet <span>(Details : {RxNorm code '308047' = 'ALPRAZolam 0.25 MG Oral Tablet', given as 'Alprazolam 0.25mg Oral Tablet'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>encounter</b>: <a>encounter who leads to this prescription</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>dosageInstruction</b>: </p><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>NumberOfRepeatsAllowed</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td></tr><tr><td>*</td><td>15/01/2015 --&gt; 15/01/2016</td><td>1</td><td>30 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></td><td>10 days<span> (Details: UCUM code d = 'd')</span></td></tr></table><h3>Substitutions</h3><table><tr><td>-</td><td><b>Allowed[x]</b></td><td><b>Reason</b></td></tr><tr><td>*</td><td>true</td><td>formulary policy <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code 'FP' = 'formulary policy', given as 'formulary policy'})</span></td></tr></table></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0314",
      code: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "308047",
            display: "Alprazolam 0.25mg Oral Tablet",
          },
        ],
      },
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "completed",
  intent: "order",
  medicationReference: {
    reference: "#med0314",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  encounter: {
    reference: "Encounter/f001",
    display: "encounter who leads to this prescription",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  dosageInstruction: [
    {
      sequence: 1,
      text: "0.25mg PO every 6-12 hours as needed for menses from Jan 15-20, 2015.  Do not exceed more than 4mg per day",
      additionalInstruction: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "418914006",
              display:
                "Warning. May cause drowsiness. If affected do not drive or operate machinery. Avoid alcoholic drink (qualifier value)",
            },
          ],
        },
      ],
      timing: {
        repeat: {
          boundsPeriod: {
            start: "2015-01-15",
            end: "2015-01-20",
          },
          frequency: 1,
          period: 6,
          periodMax: 12,
          periodUnit: "h",
        },
      },
      asNeededCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "266599000",
            display: "Dysmenorrhea (disorder)",
          },
        ],
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "26643006",
            display: "Oral Route",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 1,
            unit: "TAB",
            system:
              "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
            code: "TAB",
          },
        },
      ],
      maxDosePerAdministration: {
        value: 4,
        unit: "mg",
        system: "http://unitsofmeasure.org",
        code: "mg",
      },
    },
  ],
  dispenseRequest: {
    validityPeriod: {
      start: "2015-01-15",
      end: "2016-01-15",
    },
    numberOfRepeatsAllowed: 1,
    quantity: {
      value: 30,
      unit: "TAB",
      system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      code: "TAB",
    },
    expectedSupplyDuration: {
      value: 10,
      unit: "days",
      system: "http://unitsofmeasure.org",
      code: "d",
    },
  },
  substitution: {
    allowedBoolean: true,
    reason: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          code: "FP",
          display: "formulary policy",
        },
      ],
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

export const Medicationrequest0306: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0306",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0306</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>medication</b>: Myleran 2mg tablet. Generated Summary: id: med0304; Myleran 2mg tablet, film coated <span>(Details : {http://hl7.org/fhir/sid/ndc code '76388-713-25' = 'n/a', given as 'Myleran 2mg tablet, film coated'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>reasonCode</b>: Chronic myeloid Leukemia (disorder) <span>(Details : {SNOMED CT code '92818009' = 'Chronic myeloid leukemia', given as 'Chronic myeloid Leukemia (disorder)'})</span></p><p><b>dosageInstruction</b>: </p></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0304",
      code: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ndc",
            code: "76388-713-25",
            display: "Myleran 2mg tablet, film coated",
          },
        ],
      },
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "active",
  intent: "order",
  medicationReference: {
    reference: "#med0304",
    display: "Myleran 2mg tablet",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  reasonCode: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "92818009",
          display: "Chronic myeloid Leukemia (disorder)",
        },
      ],
    },
  ],
  dosageInstruction: [
    {
      sequence: 1,
      text: "6 mg PO daily for remission induction; adjust dosage to white blood cell (WBC) count.  With hold treatment if WBC is less than 15,000/µL; resume when WBC is greater than 50,000/µL",
      timing: {
        repeat: {
          frequency: 1,
          period: 1,
          periodUnit: "d",
        },
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "26643006",
            display: "Oral route (qualifier value)",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 6,
            unit: "mg",
            system: "http://unitsofmeasure.org",
            code: "mg",
          },
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

export const Medicationrequest0307: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0307",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0307</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>medication</b>: id: med0308; Percocet tablet <span>(Details : {http://hl7.org/fhir/sid/ndc code '16590-619-30' = 'n/a', given as 'Percocet tablet'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>encounter</b>: <a>encounter who leads to this prescription</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>dosageInstruction</b>: </p><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td></tr><tr><td>*</td><td>15/01/2015 --&gt; 15/01/2016</td><td>30 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></td><td>10 days<span> (Details: UCUM code d = 'd')</span></td></tr></table><h3>Substitutions</h3><table><tr><td>-</td><td><b>Allowed[x]</b></td><td><b>Reason</b></td></tr><tr><td>*</td><td>true</td><td>formulary policy <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code 'FP' = 'formulary policy', given as 'formulary policy'})</span></td></tr></table></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0308",
      code: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ndc",
            code: "16590-619-30",
            display: "Percocet tablet",
          },
        ],
      },
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "completed",
  intent: "order",
  medicationReference: {
    reference: "#med0308",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  encounter: {
    reference: "Encounter/f001",
    display: "encounter who leads to this prescription",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  dosageInstruction: [
    {
      sequence: 1,
      text: "1 tablet every four hours as needed for pain",
      additionalInstruction: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "418914006",
              display:
                "Warning. May cause drowsiness. If affected do not drive or operate machinery. Avoid alcoholic drink (qualifier value)",
            },
          ],
        },
      ],
      timing: {
        repeat: {
          frequency: 1,
          period: 4,
          periodUnit: "h",
        },
      },
      asNeededCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "203082005",
            display: "Fibromyalgia (disorder)",
          },
        ],
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "26643006",
            display: "Oral Route",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 1,
            unit: "TAB",
            system:
              "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
            code: "TAB",
          },
        },
      ],
    },
  ],
  dispenseRequest: {
    validityPeriod: {
      start: "2015-01-15",
      end: "2016-01-15",
    },
    quantity: {
      value: 30,
      unit: "TAB",
      system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      code: "TAB",
    },
    expectedSupplyDuration: {
      value: 10,
      unit: "days",
      system: "http://unitsofmeasure.org",
      code: "d",
    },
  },
  substitution: {
    allowedBoolean: true,
    reason: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          code: "FP",
          display: "formulary policy",
        },
      ],
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

export const Medicationrequest0308: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0308",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0308</p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>medication</b>: Vicodin 5/500 Oral Tablet <span>(Details : {RxNorm code '856907' = 'Vicodin 5 MG / 500 MG Oral Tablet', given as 'Vicodin 5/500 Oral Tablet'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>encounter</b>: <a>encounter who leads to this prescription</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>recorder</b>: <a>Carla Espinoza</a></p><p><b>dosageInstruction</b>: </p><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td></tr><tr><td>*</td><td>15/01/2015 --&gt; 15/01/2016</td><td>30 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></td><td>10 days<span> (Details: UCUM code d = 'd')</span></td></tr></table><h3>Substitutions</h3><table><tr><td>-</td><td><b>Allowed[x]</b></td><td><b>Reason</b></td></tr><tr><td>*</td><td>false</td><td>formulary policy <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code 'FP' = 'formulary policy', given as 'formulary policy'})</span></td></tr></table></div>",
  },
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "completed",
  intent: "order",
  medicationCodeableConcept: {
    coding: [
      {
        system: "http://www.nlm.nih.gov/research/umls/rxnorm",
        code: "856907",
        display: "Vicodin 5/500 Oral Tablet",
      },
    ],
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  encounter: {
    reference: "Encounter/f001",
    display: "encounter who leads to this prescription",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  recorder: {
    reference: "Practitioner/f204",
    display: "Carla Espinoza",
  },
  dosageInstruction: [
    {
      sequence: 1,
      text: "1 tablet every four hours as needed for pain",
      additionalInstruction: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "418914006",
              display:
                "Warning. May cause drowsiness. If affected do not drive or operate machinery. Avoid alcoholic drink (qualifier value)",
            },
          ],
        },
      ],
      timing: {
        repeat: {
          frequency: 1,
          period: 4,
          periodUnit: "h",
        },
      },
      asNeededCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "203082005",
            display: "Fibromyalgia (disorder)",
          },
        ],
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "26643006",
            display: "Oral Route",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 1,
            unit: "TAB",
            system:
              "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
            code: "TAB",
          },
        },
      ],
    },
  ],
  dispenseRequest: {
    validityPeriod: {
      start: "2015-01-15",
      end: "2016-01-15",
    },
    quantity: {
      value: 30,
      unit: "TAB",
      system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      code: "TAB",
    },
    expectedSupplyDuration: {
      value: 10,
      unit: "days",
      system: "http://unitsofmeasure.org",
      code: "d",
    },
  },
  substitution: {
    allowedBoolean: false,
    reason: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          code: "FP",
          display: "formulary policy",
        },
      ],
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

export const Medicationrequest0309: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0309",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0309</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>medication</b>: id: med0321; Capecitabine (product) <span>(Details : {SNOMED CT code '108761006' = 'Capecitabine', given as 'Capecitabine (product)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>encounter</b>: <a>encounter who leads to this prescription</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>dosageInstruction</b>: </p></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0321",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "108761006",
            display: "Capecitabine (product)",
          },
        ],
      },
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "active",
  intent: "order",
  medicationReference: {
    reference: "#med0321",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  encounter: {
    reference: "Encounter/f001",
    display: "encounter who leads to this prescription",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  dosageInstruction: [
    {
      sequence: 1,
      text: "1000 mg/m2 orally twice daily from days 1-14 of cycle",
      timing: {
        repeat: {
          boundsPeriod: {
            start: "2016-01-22",
            end: "2016-02-04",
          },
          frequency: 1,
          period: 2,
          periodUnit: "d",
        },
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "26643006",
            display: "Oral Route",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 1000,
            unit: "mg/m2",
            system: "http://unitsofmeasure.org",
            code: "mg/m2",
          },
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

export const Medicationrequest0310: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0310",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0310</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>medication</b>: id: med0309; Tylenol PM <span>(Details : {http://hl7.org/fhir/sid/ndc code '50580-506-02' = 'n/a', given as 'Tylenol PM'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>encounter</b>: <a>encounter who leads to this prescription</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>dosageInstruction</b>: </p></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0309",
      code: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ndc",
            code: "50580-506-02",
            display: "Tylenol PM",
          },
        ],
      },
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "active",
  intent: "order",
  medicationReference: {
    reference: "#med0309",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  encounter: {
    reference: "Encounter/f001",
    display: "encounter who leads to this prescription",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  dosageInstruction: [
    {
      sequence: 1,
      text: "Take 1-2 tablets once daily at bedtime as needed for restless legs",
      additionalInstruction: [
        {
          text: "Take at bedtime",
        },
      ],
      timing: {
        repeat: {
          frequency: 1,
          period: 1,
          periodUnit: "d",
        },
      },
      asNeededCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "32914008",
            display: "Restless Legs",
          },
        ],
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "26643006",
            display: "Oral Route",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseRange: {
            low: {
              value: 1,
              unit: "TAB",
              system:
                "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
              code: "TAB",
            },
            high: {
              value: 2,
              unit: "TAB",
              system:
                "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
              code: "TAB",
            },
          },
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

export const Medicationrequest0312: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0312",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0312</p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>medication</b>: Phenytoin 25mg/ml oral suspension <span>(Details : {RxNorm code '1313112' = 'Phenytoin 25 MG/ML Oral Suspension', given as 'Phenytoin 25mg/ml oral suspension'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>reasonCode</b>: Status epilepticus (disorder) <span>(Details : {SNOMED CT code '230456007' = 'Status epilepticus', given as 'Status epilepticus (disorder)'})</span></p><p><b>note</b>: Patient should be counselled to ensure good dental hygiene</p><p><b>dosageInstruction</b>: </p><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>NumberOfRepeatsAllowed</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td></tr><tr><td>*</td><td>15/01/2015 --&gt; 15/01/2016</td><td>3</td><td>360 mL<span> (Details: UCUM code mL = 'mL')</span></td><td>30 days<span> (Details: UCUM code d = 'd')</span></td></tr></table><h3>Substitutions</h3><table><tr><td>-</td><td><b>Allowed[x]</b></td><td><b>Reason</b></td></tr><tr><td>*</td><td>true</td><td>Continuing therapy <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code 'CT' = 'continuing therapy', given as 'Continuing therapy'})</span></td></tr></table><p><b>priorPrescription</b>: <a>MedicationRequest/medrx0304</a></p></div>",
  },
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "active",
  intent: "order",
  medicationCodeableConcept: {
    coding: [
      {
        system: "http://www.nlm.nih.gov/research/umls/rxnorm",
        code: "1313112",
        display: "Phenytoin 25mg/ml oral suspension",
      },
    ],
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  reasonCode: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "230456007",
          display: "Status epilepticus (disorder)",
        },
      ],
    },
  ],
  note: [
    {
      text: "Patient should be counselled to ensure good dental hygiene",
    },
  ],
  dosageInstruction: [
    {
      sequence: 1,
      text: "100mg (4ml) three times daily",
      timing: {
        repeat: {
          frequency: 3,
          period: 1,
          periodUnit: "d",
        },
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "26643006",
            display: "Oral Route (qualifier value)",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 100,
            unit: "mg",
            system: "http://unitsofmeasure.org",
            code: "mg",
          },
        },
      ],
    },
  ],
  dispenseRequest: {
    validityPeriod: {
      start: "2015-01-15",
      end: "2016-01-15",
    },
    numberOfRepeatsAllowed: 3,
    quantity: {
      value: 360,
      unit: "mL",
      system: "http://unitsofmeasure.org",
      code: "mL",
    },
    expectedSupplyDuration: {
      value: 30,
      unit: "days",
      system: "http://unitsofmeasure.org",
      code: "d",
    },
  },
  substitution: {
    allowedBoolean: true,
    reason: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          code: "CT",
          display: "Continuing therapy",
        },
      ],
    },
  },
  priorPrescription: {
    reference: "MedicationRequest/medrx0304",
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

export const Medicationrequest0313: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0313",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0313</p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>medication</b>: Azithromycin 250mg capsule (product) <span>(Details : {SNOMED CT code '324252006' = 'Azithromycin 250mg capsule', given as 'Azithromycin 250mg capsule (product)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>reasonCode</b>: Traveller's Diarrhea (disorder) <span>(Details : {SNOMED CT code '11840006' = 'Traveler's diarrhea', given as 'Traveller's Diarrhea (disorder)'})</span></p><p><b>dosageInstruction</b>: </p><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td></tr><tr><td>*</td><td>15/01/2015 --&gt; 15/01/2016</td><td>5 Tab<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code Tab = 'Tab')</span></td><td>5 days<span> (Details: UCUM code d = 'd')</span></td></tr></table><p><b>priorPrescription</b>: <a>Vancomycin IV</a></p></div>",
  },
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "completed",
  intent: "order",
  medicationCodeableConcept: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "324252006",
        display: "Azithromycin 250mg capsule (product)",
      },
    ],
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  reasonCode: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "11840006",
          display: "Traveller's Diarrhea (disorder)",
        },
      ],
    },
  ],
  dosageInstruction: [
    {
      sequence: 1,
      text: "500mg daily for 5 days",
      additionalInstruction: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "421984009",
              display:
                "Until finished - dosing instruction fragment (qualifier value)",
            },
          ],
        },
      ],
      timing: {
        repeat: {
          frequency: 1,
          period: 1,
          periodUnit: "d",
        },
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "26643006",
            display: "Oral Route (qualifier value)",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 500,
            unit: "mg",
            system: "http://unitsofmeasure.org",
            code: "mg",
          },
        },
      ],
    },
  ],
  dispenseRequest: {
    validityPeriod: {
      start: "2015-01-15",
      end: "2016-01-15",
    },
    quantity: {
      value: 5,
      unit: "Tab",
      system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      code: "Tab",
    },
    expectedSupplyDuration: {
      value: 5,
      unit: "days",
      system: "http://unitsofmeasure.org",
      code: "d",
    },
  },
  priorPrescription: {
    reference: "MedicationRequest/medrx0318",
    display: "Vancomycin IV",
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

export const Medicationrequest0314: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0314",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0314</p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>priority</b>: routine</p><p><b>medication</b>: Levothyroxine Sodium 75micrograms tablet (product) <span>(Details : {SNOMED CT code '376988009' = 'Levothyroxine sodium 75micrograms tablet', given as 'Levothyroxine Sodium 75micrograms tablet (product)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>reasonCode</b>: Hypothyroidism (disorder) <span>(Details : {SNOMED CT code '40930008' = 'Hypothyroidism', given as 'Hypothyroidism (disorder)'})</span></p><p><b>dosageInstruction</b>: </p><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td></tr><tr><td>*</td><td>15/01/2015 --&gt; 15/01/2016</td><td>100 Tab<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code Tab = 'Tab')</span></td><td>30 days<span> (Details: UCUM code d = 'd')</span></td></tr></table></div>",
  },
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "completed",
  intent: "order",
  priority: "routine",
  medicationCodeableConcept: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "376988009",
        display: "Levothyroxine Sodium 75micrograms tablet (product)",
      },
    ],
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  reasonCode: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "40930008",
          display: "Hypothyroidism (disorder)",
        },
      ],
    },
  ],
  dosageInstruction: [
    {
      sequence: 1,
      text: "75mcg daily",
      timing: {
        repeat: {
          frequency: 1,
          period: 1,
          periodUnit: "d",
        },
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "26643006",
            display: "Oral Route (qualifier value)",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 75,
            unit: "mcg",
            system: "http://unitsofmeasure.org",
            code: "mcg",
          },
        },
      ],
    },
  ],
  dispenseRequest: {
    validityPeriod: {
      start: "2015-01-15",
      end: "2016-01-15",
    },
    quantity: {
      value: 100,
      unit: "Tab",
      system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      code: "Tab",
    },
    expectedSupplyDuration: {
      value: 30,
      unit: "days",
      system: "http://unitsofmeasure.org",
      code: "d",
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

export const Medicationrequest0315: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0315",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0315</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>medication</b>: id: med0313; Lorazepam 2mg/ml injection solution 1ml vial (product) <span>(Details : {SNOMED CT code '400621001' = 'Lorazepam 2mg/mL injection solution 1mL vial', given as 'Lorazepam 2mg/ml injection solution 1ml vial (product)'})</span>; Injection solution (qualifier value) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection solution (qualifier value)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>encounter</b>: <a>encounter who leads to this prescription</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>reasonCode</b>: Epilepsy (disorder) <span>(Details : {SNOMED CT code '84757009' = 'Epilepsy', given as 'Epilepsy (disorder)'})</span></p><p><b>dosageInstruction</b>: </p></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0313",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "400621001",
            display: "Lorazepam 2mg/ml injection solution 1ml vial (product)",
          },
        ],
      },
      form: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "385219001",
            display: "Injection solution (qualifier value)",
          },
        ],
      },
      ingredient: [
        {
          itemCodeableConcept: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "387106007",
                display: "Lorazepam (substance)",
              },
            ],
          },
          strength: {
            numerator: {
              value: 2,
              system: "http://unitsofmeasure.org",
              code: "mg",
            },
            denominator: {
              value: 1,
              system: "http://unitsofmeasure.org",
              code: "mL",
            },
          },
        },
      ],
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "active",
  intent: "order",
  medicationReference: {
    reference: "#med0313",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  encounter: {
    reference: "Encounter/f001",
    display: "encounter who leads to this prescription",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  reasonCode: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "84757009",
          display: "Epilepsy (disorder)",
        },
      ],
    },
  ],
  dosageInstruction: [
    {
      sequence: 1,
      text: "0.05 - 0.1mg/kg IV over 2-5 minutes every 15 minutes as needed",
      timing: {
        repeat: {
          frequency: 1,
          period: 15,
          periodUnit: "min",
        },
      },
      asNeededBoolean: true,
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "255560000",
            display: "Intravenous",
          },
        ],
      },
      method: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "420620005",
            display: "Push - dosing instruction imperative (qualifier value)",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseRange: {
            low: {
              value: 0.05,
              unit: "mg/kg",
              system: "http://unitsofmeasure.org",
              code: "mg/kg",
            },
            high: {
              value: 0.1,
              unit: "mg/kg",
              system: "http://unitsofmeasure.org",
              code: "mg/kg",
            },
          },
          rateRange: {
            low: {
              value: 2,
              unit: "min",
              system: "http://unitsofmeasure.org",
              code: "min",
            },
            high: {
              value: 5,
              unit: "min",
              system: "http://unitsofmeasure.org",
              code: "min",
            },
          },
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

export const Medicationrequest0316: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0316",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0316</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>medication</b>: id: med0306; Adcetris <span>(Details : {http://hl7.org/fhir/sid/ndc code '51144-050-01' = 'n/a', given as 'Adcetris'})</span>; Lyophilized powder for injectable solution (qualifier value)  <span>(Details : {SNOMED CT code '421637006' = 'Lyophilised powder for injectable solution', given as 'Lyophilized powder for injectable solution (qualifier value) '})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>encounter</b>: <a>encounter who leads to this prescription</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>instantiatesUri</b>: <a>http://www.bccancer.bc.ca/chemotherapy-protocols-site/Documents/Lymphoma-Myeloma/ULYBRENTUX%20Protocol_1Jun2017.pdf</a></p><p><b>dosageInstruction</b>: </p></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0306",
      code: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ndc",
            code: "51144-050-01",
            display: "Adcetris",
          },
        ],
      },
      form: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "421637006",
            display:
              "Lyophilized powder for injectable solution (qualifier value) ",
          },
        ],
      },
      batch: {
        lotNumber: "12345",
        expirationDate: "2019-10-31",
      },
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "completed",
  intent: "order",
  medicationReference: {
    reference: "#med0306",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  encounter: {
    reference: "Encounter/f001",
    display: "encounter who leads to this prescription",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  instantiatesUri: [
    "http://www.bccancer.bc.ca/chemotherapy-protocols-site/Documents/Lymphoma-Myeloma/ULYBRENTUX%20Protocol_1Jun2017.pdf",
  ],
  dosageInstruction: [
    {
      sequence: 1,
      text: "1.8 mg/kg IV infusion over 20 minutes every 3 weeks for 16 cycles",
      timing: {
        repeat: {
          count: 16,
          frequency: 1,
          period: 3,
          periodUnit: "wk",
        },
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "255560000",
            display: "Intravenous",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 1.8,
            unit: "mg/kg",
            system: "http://unitsofmeasure.org",
            code: "mg/kg",
          },
          rateRatio: {
            numerator: {
              value: 1.8,
              system: "http://unitsofmeasure.org",
              code: "mg/kg",
            },
            denominator: {
              value: 20,
              system: "http://unitsofmeasure.org",
              code: "min",
            },
          },
        },
      ],
      maxDosePerLifetime: {
        value: 400,
        unit: "mg",
        system: "http://unitsofmeasure.org",
        code: "mg",
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

export const Medicationrequest0317: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0317",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0317</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>medication</b>: id: med0303; Alemtuzumab 10mg/ml (Lemtrada) <span>(Details : {RxNorm code '1594660' = 'alemtuzumab 10 MG/ML [Lemtrada]', given as 'Alemtuzumab 10mg/ml (Lemtrada)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>reasonCode</b>: Chronic Lymphoid Leukemia (disorder) <span>(Details : {SNOMED CT code '92814006' = 'Chronic lymphoid leukemia', given as 'Chronic Lymphoid Leukemia (disorder)'})</span></p><p><b>dosageInstruction</b>: , , </p></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0303",
      code: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "1594660",
            display: "Alemtuzumab 10mg/ml (Lemtrada)",
          },
        ],
      },
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "completed",
  intent: "order",
  medicationReference: {
    reference: "#med0303",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  reasonCode: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "92814006",
          display: "Chronic Lymphoid Leukemia (disorder)",
        },
      ],
    },
  ],
  dosageInstruction: [
    {
      sequence: 1,
      text: "Rapid daily-dose escalation, until tolerated, from 3 mg/d, and then 10 mg/d, to the recommended maintenance dose of 30 mg IV over 120 min, 3 times per wk on alternate days for up to 12 wk",
      additionalInstruction: [
        {
          text: "Rapidly increase dose until tolerated",
        },
        {
          text: "Administer on alternate days",
        },
      ],
      timing: {
        repeat: {
          duration: 12,
          durationUnit: "wk",
          frequency: 3,
          period: 1,
          periodUnit: "wk",
        },
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "47625008",
            display: "Intravenous route (qualifier value)",
          },
        ],
      },
      method: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "422145002",
            display: "Inject - dosing instruction imperative (qualifier value)",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 3,
            unit: "mg",
            system: "http://unitsofmeasure.org",
            code: "mg",
          },
        },
      ],
    },
    {
      sequence: 2,
      text: "Rapid daily-dose escalation, until tolerated, from 3 mg/d, and then 10 mg/d, to the recommended maintenance dose of 30 mg IV over 120 min, 3 times per wk on alternate days for up to 12 wk",
      additionalInstruction: [
        {
          text: "Rapidly increase dose until tolerated",
        },
        {
          text: "Administer on alternate days",
        },
      ],
      timing: {
        repeat: {
          duration: 12,
          durationUnit: "wk",
          frequency: 3,
          period: 1,
          periodUnit: "wk",
        },
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "47625008",
            display: "Intravenous route (qualifier value)",
          },
        ],
      },
      method: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "422145002",
            display: "Inject - dosing instruction imperative (qualifier value)",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 10,
            unit: "mg",
            system: "http://unitsofmeasure.org",
            code: "mg",
          },
        },
      ],
    },
    {
      sequence: 3,
      text: "Rapid daily-dose escalation, until tolerated, from 3 mg/d, and then 10 mg/d, to the recommended maintenance dose of 30 mg IV over 120 min, 3 times per wk on alternate days for up to 12 wk",
      additionalInstruction: [
        {
          text: "Rapidly increase dose until tolerated",
        },
        {
          text: "Administer on alternate days",
        },
      ],
      timing: {
        repeat: {
          duration: 12,
          durationUnit: "wk",
          frequency: 3,
          period: 1,
          periodUnit: "wk",
        },
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "47625008",
            display: "Intravenous route (qualifier value)",
          },
        ],
      },
      method: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "422145002",
            display: "Inject - dosing instruction imperative (qualifier value)",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 30,
            unit: "mg",
            system: "http://unitsofmeasure.org",
            code: "mg",
          },
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

export const Medicationrequest0318: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0318",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0318</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>medication</b>: id: med0301; Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE) <span>(Details : {http://hl7.org/fhir/sid/ndc code '0069-2587-10' = 'n/a', given as 'Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>encounter</b>: <a>encounter who leads to this prescription</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>reasonCode</b>: Traveller's Diarrhea (disorder) <span>(Details : {SNOMED CT code '11840006' = 'Traveler's diarrhea', given as 'Traveller's Diarrhea (disorder)'})</span></p><p><b>note</b>: culture expected back in 12 hours - may switch depending on results</p><p><b>dosageInstruction</b>: </p></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0301",
      code: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ndc",
            code: "0069-2587-10",
            display: "Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE)",
          },
        ],
      },
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "active",
  intent: "order",
  medicationReference: {
    reference: "#med0301",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  encounter: {
    reference: "Encounter/f001",
    display: "encounter who leads to this prescription",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  reasonCode: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "11840006",
          display: "Traveller's Diarrhea (disorder)",
        },
      ],
    },
  ],
  note: [
    {
      text: "culture expected back in 12 hours - may switch depending on results",
    },
  ],
  dosageInstruction: [
    {
      sequence: 1,
      text: "500mg IV q6h x 3 days",
      timing: {
        repeat: {
          frequency: 1,
          period: 6,
          periodUnit: "h",
        },
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "255560000",
            display: "Intravenous",
          },
        ],
      },
      method: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "420620005",
            display: "Push - dosing instruction imperative (qualifier value)",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 500,
            unit: "mg",
            system: "http://unitsofmeasure.org",
            code: "mg",
          },
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

export const Medicationrequest0319: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0319",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0319</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>medication</b>: Piperacillin/Tazobactam 4.5gm. Generated Summary: id: med0302; Zosyn (piperacillin/tazobactam) 4.5gm injection <span>(Details : {http://hl7.org/fhir/sid/ndc code '0206-8862-02' = 'n/a', given as 'Zosyn (piperacillin/tazobactam) 4.5gm injection'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>reasonCode</b>: Community acquired pneumonia (disorder) <span>(Details : {SNOMED CT code '385093006' = 'Community acquired pneumonia', given as 'Community acquired pneumonia (disorder)'})</span></p><p><b>dosageInstruction</b>: </p></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0302",
      code: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ndc",
            code: "0206-8862-02",
            display: "Zosyn (piperacillin/tazobactam) 4.5gm injection",
          },
        ],
      },
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "completed",
  intent: "order",
  medicationReference: {
    reference: "#med0302",
    display: "Piperacillin/Tazobactam 4.5gm",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  reasonCode: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "385093006",
          display: "Community acquired pneumonia (disorder)",
        },
      ],
    },
  ],
  dosageInstruction: [
    {
      sequence: 1,
      text: "4.5 grams in D5W 250 ml. IV every 6 hours.Infuse over 30 min at 8L/min ",
      timing: {
        repeat: {
          frequency: 1,
          period: 6,
          periodUnit: "h",
        },
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "47625008",
            display: "Intravenous route (qualifier value)",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 4.5,
            unit: "g",
            system: "http://unitsofmeasure.org",
            code: "g",
          },
          rateQuantity: {
            value: 50,
            system: "http://unitsofmeasure.org",
            code: "ml/hr",
          },
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

export const Medicationrequest0320: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0320",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0320</p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>medication</b>: Lantus 100 unit/ml injectable solution <span>(Details : {RxNorm code '285018' = 'Lantus 100 UNT/ML Injectable Solution', given as 'Lantus 100 unit/ml injectable solution'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>reasonCode</b>: On subcutaneous insulin for diabetes mellitus (finding) <span>(Details : {SNOMED CT code '473189005' = 'On subcutaneous insulin for diabetes mellitus', given as 'On subcutaneous insulin for diabetes mellitus (finding)'})</span></p><p><b>dosageInstruction</b>: </p><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>NumberOfRepeatsAllowed</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td></tr><tr><td>*</td><td>15/01/2015 --&gt; 15/01/2016</td><td>6</td><td>10 mL<span> (Details: UCUM code mL = 'mL')</span></td><td>30 days<span> (Details: UCUM code d = 'd')</span></td></tr></table></div>",
  },
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "completed",
  intent: "order",
  medicationCodeableConcept: {
    coding: [
      {
        system: "http://www.nlm.nih.gov/research/umls/rxnorm",
        code: "285018",
        display: "Lantus 100 unit/ml injectable solution",
      },
    ],
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  reasonCode: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "473189005",
          display: "On subcutaneous insulin for diabetes mellitus (finding)",
        },
      ],
    },
  ],
  dosageInstruction: [
    {
      sequence: 1,
      text: "20 Units SC three times daily",
      timing: {
        repeat: {
          frequency: 3,
          period: 1,
          periodUnit: "d",
        },
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "263887005",
            display: "Subcutaneous (qualifier value)",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 20,
            unit: "U",
            system: "http://unitsofmeasure.org",
            code: "U",
          },
        },
      ],
    },
  ],
  dispenseRequest: {
    validityPeriod: {
      start: "2015-01-15",
      end: "2016-01-15",
    },
    numberOfRepeatsAllowed: 6,
    quantity: {
      value: 10,
      unit: "mL",
      system: "http://unitsofmeasure.org",
      code: "mL",
    },
    expectedSupplyDuration: {
      value: 30,
      unit: "days",
      system: "http://unitsofmeasure.org",
      code: "d",
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

export const Medicationrequest0321: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0321",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0321</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>medication</b>: Novolog 100u/ml. Generated Summary: id: med0307; Novolog 100u/ml <span>(Details : {http://hl7.org/fhir/sid/ndc code '0169-7501-11' = 'n/a', given as 'Novolog 100u/ml'})</span>; Injection solution (qualifier value) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection solution (qualifier value)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>reasonCode</b>: Diabetes mellitus type 2 (disorder) <span>(Details : {SNOMED CT code '44054006' = 'Diabetes mellitus type II', given as 'Diabetes mellitus type 2 (disorder)'})</span></p><p><b>note</b>: Check blood sugar levels before taking insulin</p><p><b>dosageInstruction</b>: , , </p><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>NumberOfRepeatsAllowed</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td></tr><tr><td>*</td><td>15/01/2015 --&gt; 15/01/2016</td><td>3</td><td>10 ml<span> (Details: UCUM code ml = 'ml')</span></td><td>30 days<span> (Details: UCUM code d = 'd')</span></td></tr></table></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0307",
      code: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ndc",
            code: "0169-7501-11",
            display: "Novolog 100u/ml",
          },
        ],
      },
      form: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "385219001",
            display: "Injection solution (qualifier value)",
          },
        ],
      },
      ingredient: [
        {
          itemCodeableConcept: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "325072002",
                display: "Insulin Aspart (substance)",
              },
            ],
          },
          strength: {
            numerator: {
              value: 100,
              system: "http://unitsofmeasure.org",
              code: "U",
            },
            denominator: {
              value: 1,
              system: "http://unitsofmeasure.org",
              code: "mL",
            },
          },
        },
      ],
      batch: {
        lotNumber: "12345",
        expirationDate: "2019-10-31",
      },
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "active",
  intent: "order",
  medicationReference: {
    reference: "#med0307",
    display: "Novolog 100u/ml",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  reasonCode: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "44054006",
          display: "Diabetes mellitus type 2 (disorder)",
        },
      ],
    },
  ],
  note: [
    {
      text: "Check blood sugar levels before taking insulin",
    },
  ],
  dosageInstruction: [
    {
      sequence: 2,
      text: "inject 10 units subcut 10 minutes before breakfast",
      timing: {
        repeat: {
          frequency: 1,
          period: 1,
          periodUnit: "d",
          when: ["ACM"],
          offset: 10,
        },
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 10,
            unit: "U",
            system: "http://unitsofmeasure.org",
            code: "U",
          },
        },
      ],
    },
    {
      sequence: 2,
      text: "15 units before lunch",
      additionalInstruction: [
        {
          text: "Before Lunch",
        },
      ],
      timing: {
        repeat: {
          frequency: 1,
          period: 1,
          periodUnit: "d",
        },
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 15,
            unit: "U",
            system: "http://unitsofmeasure.org",
            code: "U",
          },
        },
      ],
    },
    {
      sequence: 1,
      text: "20 units before dinner",
      additionalInstruction: [
        {
          text: "Before Dinner",
        },
      ],
      timing: {
        repeat: {
          frequency: 1,
          period: 1,
          periodUnit: "d",
        },
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 20,
            unit: "U",
            system: "http://unitsofmeasure.org",
            code: "U",
          },
        },
      ],
    },
  ],
  dispenseRequest: {
    validityPeriod: {
      start: "2015-01-15",
      end: "2016-01-15",
    },
    numberOfRepeatsAllowed: 3,
    quantity: {
      value: 10,
      unit: "ml",
      system: "http://unitsofmeasure.org",
      code: "ml",
    },
    expectedSupplyDuration: {
      value: 30,
      unit: "days",
      system: "http://unitsofmeasure.org",
      code: "d",
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

export const Medicationrequest0322: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0322",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0322</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>medication</b>: Potassium Chloride 20mEq in 1L Normal Saline. Generated Summary: id: med0317; Injection Solution (qualifier value) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection Solution (qualifier value)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>reasonCode</b>: Disorder of Electrolytes (disorder) <span>(Details : {SNOMED CT code '237840007' = 'Disorder of electrolytes', given as 'Disorder of Electrolytes (disorder)'})</span></p><p><b>dosageInstruction</b>: </p></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0317",
      form: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "385219001",
            display: "Injection Solution (qualifier value)",
          },
        ],
        text: "Injection Solution (qualifier value)",
      },
      ingredient: [
        {
          itemCodeableConcept: {
            coding: [
              {
                system: "http://www.nlm.nih.gov/research/umls/rxnorm",
                code: "204520",
                display: "Potassium Chloride",
              },
            ],
          },
          strength: {
            numerator: {
              value: 2,
              system: "http://unitsofmeasure.org",
              code: "mEq",
            },
            denominator: {
              value: 1,
              system: "http://unitsofmeasure.org",
              code: "mL",
            },
          },
        },
        {
          itemCodeableConcept: {
            coding: [
              {
                system: "http://www.nlm.nih.gov/research/umls/rxnorm",
                code: "313002",
                display: "Sodium Chloride 0.9% injectable solution",
              },
            ],
          },
          strength: {
            numerator: {
              value: 0.9,
              system: "http://unitsofmeasure.org",
              code: "g",
            },
            denominator: {
              value: 100,
              system: "http://unitsofmeasure.org",
              code: "mL",
            },
          },
        },
      ],
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "completed",
  intent: "order",
  medicationReference: {
    reference: "#med0317",
    display: "Potassium Chloride 20mEq in 1L Normal Saline",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  reasonCode: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "237840007",
          display: "Disorder of Electrolytes (disorder)",
        },
      ],
    },
  ],
  dosageInstruction: [
    {
      sequence: 1,
      text: "KCl 20 mEq in 1 L 0.9%NS IV at 100 ml/hr",
      timing: {
        repeat: {
          frequency: 1,
          period: 1,
          periodUnit: "h",
        },
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "47625008",
            display: "Intravenous route (qualifier value)",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 20,
            unit: "mEq",
            system: "http://unitsofmeasure.org",
            code: "mEq",
          },
          rateRatio: {
            numerator: {
              value: 100,
              system: "http://unitsofmeasure.org",
              code: "mL",
            },
            denominator: {
              value: 1,
              system: "http://unitsofmeasure.org",
              code: "h",
            },
          },
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

export const Medicationrequest0323: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0323",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0323</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>medication</b>: id: med0318; Injection emulsion <span>(Details : {SNOMED CT code '385221006' = 'Injection emulsion', given as 'Injection emulsion'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>encounter</b>: <a>encounter who leads to this prescription</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>dosageInstruction</b>: </p></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0318",
      form: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "385221006",
            display: "Injection emulsion",
          },
        ],
      },
      ingredient: [
        {
          itemCodeableConcept: {
            coding: [
              {
                system: "http://hl7.org/fhir/sid/ndc",
                code: "0338-1134-03",
                display:
                  "Clinimix 4.25/10 sulfite-free (4.25% Amino Acid in 10% Dextrose) Injection, 1000ml",
              },
            ],
          },
        },
        {
          itemCodeableConcept: {
            coding: [
              {
                system: "http://hl7.org/fhir/sid/ndc",
                code: "0409-5779-01",
                display:
                  "TPN Electrolytes SODIUM CHLORIDE, CALCIUM CHLORIDE, POTASSIUM CHLORIDE, MAGNESIUM CHLORIDE, and SODIUM ACETATE ANHYDROUS | INJECTION, SOLUTION, CONCENTRATE | 321 mg/20mL, 331 mg/20mL, 1491 mg/20mL, 508 mg/20mL, 2420 mg/20mL",
              },
            ],
          },
        },
        {
          itemCodeableConcept: {
            coding: [
              {
                system: "http://hl7.org/fhir/sid/ndc",
                code: "0338-0519-02",
                display: "Intralipid 20% IV Fat Emulsion",
              },
            ],
          },
        },
      ],
      batch: {
        lotNumber: "123455",
        expirationDate: "2016-07-09",
      },
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "completed",
  intent: "order",
  medicationReference: {
    reference: "#med0318",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  encounter: {
    reference: "Encounter/f001",
    display: "encounter who leads to this prescription",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  dosageInstruction: [
    {
      sequence: 1,
      text: "1000mL infused at 50ml/hour for 4 hours - hung at 2200 hours",
      timing: {
        event: ["2015-01-15T22:00:00+11:00"],
        repeat: {
          frequency: 1,
          period: 24,
          periodUnit: "h",
        },
      },
      site: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "6073002",
            display: "Structure of ligament of left superior vena cava",
          },
        ],
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "255560000",
            display: "Intravenous",
          },
        ],
      },
      method: {
        text: "PICC line",
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 1000,
            unit: "mL",
            system: "http://unitsofmeasure.org",
            code: "mL",
          },
          rateRatio: {
            numerator: {
              value: 50,
              unit: "mL",
              system: "http://unitsofmeasure.org",
              code: "mL",
            },
            denominator: {
              value: 1,
              unit: "h",
              system: "http://unitsofmeasure.org",
              code: "h",
            },
          },
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

export const Medicationrequest0324: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0324",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0324</p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>medication</b>: Paracetamol 240mg suppository (product) <span>(Details : {SNOMED CT code '322254008' = 'Paracetamol 240mg suppository', given as 'Paracetamol 240mg suppository (product)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>reasonCode</b>: Scarlet Fever (disorder) <span>(Details : {SNOMED CT code '30242009' = 'Scarlet fever', given as 'Scarlet Fever (disorder)'})</span></p><p><b>dosageInstruction</b>: </p><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>NumberOfRepeatsAllowed</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td></tr><tr><td>*</td><td>15/01/2015 --&gt; 15/01/2016</td><td>3</td><td>30 RECSUPP<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code RECSUPP = 'Rectal Suppository')</span></td><td>10 days<span> (Details: UCUM code d = 'd')</span></td></tr></table><h3>Substitutions</h3><table><tr><td>-</td><td><b>Allowed[x]</b></td><td><b>Reason</b></td></tr><tr><td>*</td><td>true</td><td>formulary policy <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code 'FP' = 'formulary policy', given as 'formulary policy'})</span></td></tr></table></div>",
  },
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "completed",
  intent: "order",
  medicationCodeableConcept: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "322254008",
        display: "Paracetamol 240mg suppository (product)",
      },
    ],
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  reasonCode: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "30242009",
          display: "Scarlet Fever (disorder)",
        },
      ],
    },
  ],
  dosageInstruction: [
    {
      sequence: 1,
      text: "Insert one suppository rectally twice daily as needed for fever to a maximim of 3 per day",
      additionalInstruction: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "418637003",
              display:
                "Do not take with any other paracetamol products (qualifier value)",
            },
          ],
        },
      ],
      timing: {
        repeat: {
          frequency: 2,
          period: 1,
          periodUnit: "d",
        },
      },
      asNeededCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "386661006",
            display: "Fever (finding)",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 240,
            unit: "mg",
            system: "http://unitsofmeasure.org",
            code: "mg",
          },
        },
      ],
      maxDosePerPeriod: {
        numerator: {
          value: 720,
          system: "http://unitsofmeasure.org",
          code: "mg",
        },
        denominator: {
          value: 1,
          system: "http://unitsofmeasure.org",
          code: "d",
        },
      },
    },
  ],
  dispenseRequest: {
    validityPeriod: {
      start: "2015-01-15",
      end: "2016-01-15",
    },
    numberOfRepeatsAllowed: 3,
    quantity: {
      value: 30,
      unit: "RECSUPP",
      system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      code: "RECSUPP",
    },
    expectedSupplyDuration: {
      value: 10,
      unit: "days",
      system: "http://unitsofmeasure.org",
      code: "d",
    },
  },
  substitution: {
    allowedBoolean: true,
    reason: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          code: "FP",
          display: "formulary policy",
        },
      ],
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

export const Medicationrequest0325: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0325",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0325</p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: on-hold</p><p><b>intent</b>: order</p><p><b>medication</b>: Nystatin 100UNT/MG Topical Ointment <span>(Details : {RxNorm code '884308' = 'nystatin 100,000 UNT/GM Topical Ointment', given as 'Nystatin 100UNT/MG Topical Ointment'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>dosageInstruction</b>: </p><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>NumberOfRepeatsAllowed</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td></tr><tr><td>*</td><td>15/01/2015 --&gt; 15/01/2016</td><td>3</td><td>30 g<span> (Details: UCUM code g = 'g')</span></td><td>10 days<span> (Details: UCUM code d = 'd')</span></td></tr></table><h3>Substitutions</h3><table><tr><td>-</td><td><b>Allowed[x]</b></td><td><b>Reason</b></td></tr><tr><td>*</td><td>true</td><td>formulary policy <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code 'FP' = 'formulary policy', given as 'formulary policy'})</span></td></tr></table></div>",
  },
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "on-hold",
  intent: "order",
  medicationCodeableConcept: {
    coding: [
      {
        system: "http://www.nlm.nih.gov/research/umls/rxnorm",
        code: "884308",
        display: "Nystatin 100UNT/MG Topical Ointment",
      },
    ],
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  dosageInstruction: [
    {
      sequence: 1,
      text: "Apply to affected areas four times daily",
      timing: {
        repeat: {
          frequency: 4,
          period: 1,
          periodUnit: "d",
        },
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 1,
            unit: "ea",
            system: "http://unitsofmeasure.org",
            code: "ea",
          },
        },
      ],
    },
  ],
  dispenseRequest: {
    validityPeriod: {
      start: "2015-01-15",
      end: "2016-01-15",
    },
    numberOfRepeatsAllowed: 3,
    quantity: {
      value: 30,
      unit: "g",
      system: "http://unitsofmeasure.org",
      code: "g",
    },
    expectedSupplyDuration: {
      value: 10,
      unit: "days",
      system: "http://unitsofmeasure.org",
      code: "d",
    },
  },
  substitution: {
    allowedBoolean: true,
    reason: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          code: "FP",
          display: "formulary policy",
        },
      ],
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

export const Medicationrequest0326: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0326",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0326</p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: on-hold</p><p><b>intent</b>: order</p><p><b>medication</b>: Proventil HFA 90mcg/actuat metered dose inhaler, 200 actuat <span>(Details : {RxNorm code '746763' = 'Proventil HFA 90 MCG/INHAL Metered Dose Inhaler, 200 Actuations', given as 'Proventil HFA 90mcg/actuat metered dose inhaler, 200 actuat'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>dosageInstruction</b>: </p><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>NumberOfRepeatsAllowed</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td></tr><tr><td>*</td><td>15/01/2015 --&gt; 15/01/2016</td><td>3</td><td>30 mL<span> (Details: UCUM code mL = 'mL')</span></td><td>30 days<span> (Details: UCUM code d = 'd')</span></td></tr></table><h3>Substitutions</h3><table><tr><td>-</td><td><b>Allowed[x]</b></td><td><b>Reason</b></td></tr><tr><td>*</td><td>true</td><td>formulary policy <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code 'FP' = 'formulary policy', given as 'formulary policy'})</span></td></tr></table></div>",
  },
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "on-hold",
  intent: "order",
  medicationCodeableConcept: {
    coding: [
      {
        system: "http://www.nlm.nih.gov/research/umls/rxnorm",
        code: "746763",
        display: "Proventil HFA 90mcg/actuat metered dose inhaler, 200 actuat",
      },
    ],
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  dosageInstruction: [
    {
      sequence: 1,
      text: "Use two sprays twice daily",
      additionalInstruction: [
        {
          text: "Shake Well",
        },
      ],
      timing: {
        repeat: {
          frequency: 2,
          period: 1,
          periodUnit: "d",
        },
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 1,
            unit: "ea",
            system: "http://unitsofmeasure.org",
            code: "ea",
          },
        },
      ],
    },
  ],
  dispenseRequest: {
    validityPeriod: {
      start: "2015-01-15",
      end: "2016-01-15",
    },
    numberOfRepeatsAllowed: 3,
    quantity: {
      value: 30,
      unit: "mL",
      system: "http://unitsofmeasure.org",
      code: "mL",
    },
    expectedSupplyDuration: {
      value: 30,
      unit: "days",
      system: "http://unitsofmeasure.org",
      code: "d",
    },
  },
  substitution: {
    allowedBoolean: true,
    reason: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          code: "FP",
          display: "formulary policy",
        },
      ],
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

export const Medicationrequest0327: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0327",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0327</p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>medication</b>: Fentanyl 25micrograms/hour patch (product) <span>(Details : {SNOMED CT code '333919005' = 'Fentanyl 25micrograms/hour patch', given as 'Fentanyl 25micrograms/hour patch (product)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>dosageInstruction</b>: </p><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td></tr><tr><td>*</td><td>15/01/2015 --&gt; 15/01/2016</td><td>6 patch<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code patch = 'patch')</span></td><td>14 days<span> (Details: UCUM code d = 'd')</span></td></tr></table></div>",
  },
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "active",
  intent: "order",
  medicationCodeableConcept: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "333919005",
        display: "Fentanyl 25micrograms/hour patch (product)",
      },
    ],
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  dosageInstruction: [
    {
      sequence: 1,
      text: "apply one patch three times per week",
      timing: {
        repeat: {
          frequency: 3,
          period: 1,
          periodUnit: "wk",
        },
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 1,
            unit: "patch",
            system:
              "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
            code: "patch",
          },
        },
      ],
    },
  ],
  dispenseRequest: {
    validityPeriod: {
      start: "2015-01-15",
      end: "2016-01-15",
    },
    quantity: {
      value: 6,
      unit: "patch",
      system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      code: "patch",
    },
    expectedSupplyDuration: {
      value: 14,
      unit: "days",
      system: "http://unitsofmeasure.org",
      code: "d",
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

export const Medicationrequest0328: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0328",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0328</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>medication</b>: id: med0315; Mometasone Furoate 0.05mg/Actuat <span>(Details : {RxNorm code '358793' = 'mometasone furoate 0.05 MG/ACTUAT', given as 'Mometasone Furoate 0.05mg/Actuat'})</span>; Nasal Spray <span>(Details : {SNOMED CT code '385157007' = 'Nasal spray', given as 'Nasal Spray'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>dosageInstruction</b>: </p><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>NumberOfRepeatsAllowed</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td></tr><tr><td>*</td><td>15/01/2015 --&gt; 15/01/2016</td><td>3</td><td>30 ml<span> (Details: UCUM code ml = 'ml')</span></td><td>30 days<span> (Details: UCUM code d = 'd')</span></td></tr></table><h3>Substitutions</h3><table><tr><td>-</td><td><b>Allowed[x]</b></td><td><b>Reason</b></td></tr><tr><td>*</td><td>true</td><td>formulary policy <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code 'FP' = 'formulary policy', given as 'formulary policy'})</span></td></tr></table></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0315",
      code: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "358793",
            display: "Mometasone Furoate 0.05mg/Actuat",
          },
        ],
      },
      form: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "385157007",
            display: "Nasal Spray",
          },
        ],
      },
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "active",
  intent: "order",
  medicationReference: {
    reference: "#med0315",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  dosageInstruction: [
    {
      sequence: 1,
      text: "Use 1 spray twice daily",
      timing: {
        repeat: {
          frequency: 2,
          period: 1,
          periodUnit: "d",
        },
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 1,
            unit: "ea",
            system: "http://unitsofmeasure.org",
            code: "ea",
          },
        },
      ],
    },
  ],
  dispenseRequest: {
    validityPeriod: {
      start: "2015-01-15",
      end: "2016-01-15",
    },
    numberOfRepeatsAllowed: 3,
    quantity: {
      value: 30,
      unit: "ml",
      system: "http://unitsofmeasure.org",
      code: "ml",
    },
    expectedSupplyDuration: {
      value: 30,
      unit: "days",
      system: "http://unitsofmeasure.org",
      code: "d",
    },
  },
  substitution: {
    allowedBoolean: true,
    reason: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          code: "FP",
          display: "formulary policy",
        },
      ],
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

export const Medicationrequest0329: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0329",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0329</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: on-hold</p><p><b>intent</b>: order</p><p><b>medication</b>: id: med0319; Ointment <span>(Details : {SNOMED CT code '385101003' = 'Ointment', given as 'Ointment'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>dosageInstruction</b>: </p><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>NumberOfRepeatsAllowed</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td></tr><tr><td>*</td><td>15/01/2015 --&gt; 15/01/2016</td><td>3</td><td>30 g<span> (Details: UCUM code g = 'g')</span></td><td>10 days<span> (Details: UCUM code d = 'd')</span></td></tr></table></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0319",
      form: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "385101003",
            display: "Ointment",
          },
        ],
        text: "Ointment",
      },
      ingredient: [
        {
          itemCodeableConcept: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "387253001",
                display: "Salicyclic Acid (substance)",
              },
            ],
          },
          strength: {
            numerator: {
              value: 5,
              system: "http://unitsofmeasure.org",
              code: "g",
            },
            denominator: {
              value: 100,
              system: "http://unitsofmeasure.org",
              code: "g",
            },
          },
        },
        {
          itemCodeableConcept: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "396458002",
                display: "Salicyclic Acid (substance)",
              },
            ],
          },
          strength: {
            numerator: {
              value: 1,
              system: "http://unitsofmeasure.org",
              code: "g",
            },
            denominator: {
              value: 100,
              system: "http://unitsofmeasure.org",
              code: "g",
            },
          },
        },
        {
          itemCodeableConcept: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "126066007",
                display: "White Petrolatum (substance)",
              },
            ],
          },
          strength: {
            numerator: {
              value: 94,
              system: "http://unitsofmeasure.org",
              code: "g",
            },
            denominator: {
              value: 100,
              system: "http://unitsofmeasure.org",
              code: "g",
            },
          },
        },
      ],
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "on-hold",
  intent: "order",
  medicationReference: {
    reference: "#med0319",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  dosageInstruction: [
    {
      sequence: 1,
      text: "Apply twice daily to affected area on left arm",
      additionalInstruction: [
        {
          text: "Apply sparingly",
        },
      ],
      timing: {
        repeat: {
          frequency: 2,
          period: 1,
          periodUnit: "d",
        },
      },
      site: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "72098002",
            display: "Entire left upper arm (body structure)",
          },
        ],
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "359540000",
            display: "Topical (qualifier value)",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 1,
            unit: "ea",
            system: "http://unitsofmeasure.org",
            code: "ea",
          },
        },
      ],
    },
  ],
  dispenseRequest: {
    validityPeriod: {
      start: "2015-01-15",
      end: "2016-01-15",
    },
    numberOfRepeatsAllowed: 3,
    quantity: {
      value: 30,
      unit: "g",
      system: "http://unitsofmeasure.org",
      code: "g",
    },
    expectedSupplyDuration: {
      value: 10,
      unit: "days",
      system: "http://unitsofmeasure.org",
      code: "d",
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

export const Medicationrequest0330: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0330",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0330</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>medication</b>: id: med0305; Timoptic 5mg/ml solution <span>(Details : {http://hl7.org/fhir/sid/ndc code '2501-813-16' = 'n/a', given as 'Timoptic 5mg/ml solution'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>encounter</b>: <a>encounter who leads to this prescription</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>dosageInstruction</b>: </p><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>NumberOfRepeatsAllowed</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td></tr><tr><td>*</td><td>15/01/2015 --&gt; 15/01/2016</td><td>1</td><td>10 mL<span> (Details: UCUM code mL = 'mL')</span></td><td>30 days<span> (Details: UCUM code d = 'd')</span></td></tr></table><h3>Substitutions</h3><table><tr><td>-</td><td><b>Allowed[x]</b></td><td><b>Reason</b></td></tr><tr><td>*</td><td>false</td><td>formulary policy <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code 'FP' = 'formulary policy', given as 'formulary policy'})</span></td></tr></table></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0305",
      code: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ndc",
            code: "2501-813-16",
            display: "Timoptic 5mg/ml solution",
          },
        ],
      },
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "active",
  intent: "order",
  medicationReference: {
    reference: "#med0305",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  encounter: {
    reference: "Encounter/f002",
    display: "encounter who leads to this prescription",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  dosageInstruction: [
    {
      sequence: 1,
      text: "Instil one drop in each eye twice daily",
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
            code: "54485002",
            display: "Ophthalmic route (qualifier value)",
          },
        ],
      },
      method: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "421538008",
            display:
              "Instill - dosing instruction imperative (qualifier value)",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 1,
            unit: "OPDROP",
            system:
              "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
            code: "OPDROP",
          },
        },
      ],
    },
  ],
  dispenseRequest: {
    validityPeriod: {
      start: "2015-01-15",
      end: "2016-01-15",
    },
    numberOfRepeatsAllowed: 1,
    quantity: {
      value: 10,
      unit: "mL",
      system: "http://unitsofmeasure.org",
      code: "mL",
    },
    expectedSupplyDuration: {
      value: 30,
      unit: "days",
      system: "http://unitsofmeasure.org",
      code: "d",
    },
  },
  substitution: {
    allowedBoolean: false,
    reason: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          code: "FP",
          display: "formulary policy",
        },
      ],
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

export const Medicationrequest0331: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0331",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0331</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>medication</b>: id: med0350; Warfarin Sodium <span>(Details : {RxNorm code '114194' = 'Warfarin Sodium', given as 'Warfarin Sodium'})</span>; Oral Tablet <span>(Details : {SNOMED CT code '421026006' = 'Oral tablet', given as 'Oral Tablet'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>dosageInstruction</b>: </p><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>NumberOfRepeatsAllowed</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td></tr><tr><td>*</td><td>15/01/2015 --&gt; 15/01/2016</td><td>3</td><td>30 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></td><td>30 days<span> (Details: UCUM code d = 'd')</span></td></tr></table><h3>Substitutions</h3><table><tr><td>-</td><td><b>Allowed[x]</b></td><td><b>Reason</b></td></tr><tr><td>*</td><td>true</td><td>formulary policy <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code 'FP' = 'formulary policy', given as 'formulary policy'})</span></td></tr></table></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0350",
      code: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "114194",
            display: "Warfarin Sodium",
          },
        ],
      },
      form: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "421026006",
            display: "Oral Tablet",
          },
        ],
      },
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "active",
  intent: "order",
  medicationReference: {
    reference: "#med0350",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  dosageInstruction: [
    {
      sequence: 1,
      text: "7mg once daily",
      timing: {
        repeat: {
          frequency: 1,
          period: 1,
          periodUnit: "d",
        },
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 7,
            unit: "mg",
            system: "http://unitsofmeasure.org",
            code: "mg",
          },
        },
      ],
    },
  ],
  dispenseRequest: {
    validityPeriod: {
      start: "2015-01-15",
      end: "2016-01-15",
    },
    numberOfRepeatsAllowed: 3,
    quantity: {
      value: 30,
      unit: "TAB",
      system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      code: "TAB",
    },
    expectedSupplyDuration: {
      value: 30,
      unit: "days",
      system: "http://unitsofmeasure.org",
      code: "d",
    },
  },
  substitution: {
    allowedBoolean: true,
    reason: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          code: "FP",
          display: "formulary policy",
        },
      ],
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

export const Medicationrequest0332: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0332",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0332</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>medication</b>: id: med03499; Ceftriaxone sodium 500mg powder for injection solution vial (product) <span>(Details : {SNOMED CT code '375860009' = 'Ceftriaxone sodium 500mg powder for injection', given as 'Ceftriaxone sodium 500mg powder for injection solution vial (product)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>encounter</b>: <a>encounter who leads to this prescription</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>basedOn</b>: <a>CarePlan/gpvisit</a></p><p><b>groupIdentifier</b>: 983939393 (OFFICIAL)</p><p><b>dosageInstruction</b>: </p></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med03499",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "375860009",
            display:
              "Ceftriaxone sodium 500mg powder for injection solution vial (product)",
          },
        ],
      },
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "active",
  intent: "order",
  medicationReference: {
    reference: "#med03499",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  encounter: {
    reference: "Encounter/f001",
    display: "encounter who leads to this prescription",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  basedOn: [
    {
      reference: "CarePlan/gpvisit",
    },
  ],
  groupIdentifier: {
    use: "official",
    system: "http://www.bmc.nl/portal/prescriptions",
    value: "983939393",
  },
  dosageInstruction: [
    {
      sequence: 1,
      text: "Administer 500mg IM as a single dose",
      timing: {
        repeat: {
          count: 1,
        },
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "255559005",
            display: "Intramuscular (qualifier value)",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 500,
            unit: "mg",
            system: "http://unitsofmeasure.org",
            code: "mg",
          },
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

export const Medicationrequest0333: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0333",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0333</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>category</b>: Inpatient <span>(Details : {http://terminology.hl7.org/CodeSystem/medicationrequest-category code 'inpatient' = 'Inpatient', given as 'Inpatient'})</span></p><p><b>medication</b>: id: med0310; Oral Form Oxycodone (product) <span>(Details : {SNOMED CT code '430127000' = 'Oral form oxycodone', given as 'Oral Form Oxycodone (product)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>encounter</b>: <a>encounter who leads to this prescription</a></p><p><b>supportingInformation</b>: <a>Procedure/biopsy</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>reasonCode</b>: Rib Pain (finding) <span>(Details : {SNOMED CT code '297217002' = 'Rib pain', given as 'Rib Pain (finding)'})</span></p><p><b>note</b>: Patient told to take with food</p><p><b>dosageInstruction</b>: </p><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>NumberOfRepeatsAllowed</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td></tr><tr><td>*</td><td>15/01/2015 --&gt; 15/01/2016</td><td>1</td><td>30 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></td><td>10 days<span> (Details: UCUM code d = 'd')</span></td></tr></table><h3>Substitutions</h3><table><tr><td>-</td><td><b>Allowed[x]</b></td><td><b>Reason</b></td></tr><tr><td>*</td><td>true</td><td>formulary policy <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code 'FP' = 'formulary policy', given as 'formulary policy'})</span></td></tr></table></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0310",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "430127000",
            display: "Oral Form Oxycodone (product)",
          },
        ],
      },
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "active",
  intent: "order",
  category: [
    {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
          code: "inpatient",
          display: "Inpatient",
        },
      ],
    },
  ],
  medicationReference: {
    reference: "#med0310",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  encounter: {
    reference: "Encounter/f001",
    display: "encounter who leads to this prescription",
  },
  supportingInformation: [
    {
      reference: "Procedure/biopsy",
    },
  ],
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  reasonCode: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "297217002",
          display: "Rib Pain (finding)",
        },
      ],
    },
  ],
  note: [
    {
      text: "Patient told to take with food",
    },
  ],
  dosageInstruction: [
    {
      sequence: 1,
      text: "one tablet one time daily in the morning for rib pain",
      additionalInstruction: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "418914006",
              display:
                "Warning. May cause drowsiness. If affected do not drive or operate machinery. Avoid alcoholic drink (qualifier value)",
            },
          ],
        },
      ],
      timing: {
        repeat: {
          frequency: 1,
          period: 1,
          periodUnit: "d",
          when: ["MORN"],
        },
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "26643006",
            display: "Oral Route",
          },
        ],
      },
      method: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "421521009",
            display:
              "Swallow - dosing instruction imperative (qualifier value)",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseRange: {
            low: {
              value: 1,
              unit: "TAB",
              system:
                "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
              code: "TAB",
            },
            high: {
              value: 2,
              unit: "TAB",
              system:
                "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
              code: "TAB",
            },
          },
        },
      ],
    },
  ],
  dispenseRequest: {
    validityPeriod: {
      start: "2015-01-15",
      end: "2016-01-15",
    },
    numberOfRepeatsAllowed: 1,
    quantity: {
      value: 30,
      unit: "TAB",
      system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      code: "TAB",
    },
    expectedSupplyDuration: {
      value: 10,
      unit: "days",
      system: "http://unitsofmeasure.org",
      code: "d",
    },
  },
  substitution: {
    allowedBoolean: true,
    reason: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          code: "FP",
          display: "formulary policy",
        },
      ],
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

export const Medicationrequest0334: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0334",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0334</p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: on-hold</p><p><b>intent</b>: order</p><p><b>medication</b>: Nystatin 100UNT/MG Topical Ointment <span>(Details : {RxNorm code '884308' = 'nystatin 100,000 UNT/GM Topical Ointment', given as 'Nystatin 100UNT/MG Topical Ointment'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>dosageInstruction</b>: </p><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>NumberOfRepeatsAllowed</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td></tr><tr><td>*</td><td>15/01/2015 --&gt; 15/01/2016</td><td>3</td><td>30 g<span> (Details: UCUM code g = 'g')</span></td><td>10 days<span> (Details: UCUM code d = 'd')</span></td></tr></table><h3>Substitutions</h3><table><tr><td>-</td><td><b>Allowed[x]</b></td><td><b>Reason</b></td></tr><tr><td>*</td><td>true</td><td>formulary policy <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code 'FP' = 'formulary policy', given as 'formulary policy'})</span></td></tr></table></div>",
  },
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "on-hold",
  intent: "order",
  medicationCodeableConcept: {
    coding: [
      {
        system: "http://www.nlm.nih.gov/research/umls/rxnorm",
        code: "884308",
        display: "Nystatin 100UNT/MG Topical Ointment",
      },
    ],
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  dosageInstruction: [
    {
      sequence: 1,
      text: "Apply to affected areas four times daily on Monday of each week",
      timing: {
        repeat: {
          frequency: 4,
          period: 1,
          periodUnit: "d",
          dayOfWeek: ["mon"],
        },
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 1,
            unit: "ea",
            system: "http://unitsofmeasure.org",
            code: "ea",
          },
        },
      ],
    },
  ],
  dispenseRequest: {
    validityPeriod: {
      start: "2015-01-15",
      end: "2016-01-15",
    },
    numberOfRepeatsAllowed: 3,
    quantity: {
      value: 30,
      unit: "g",
      system: "http://unitsofmeasure.org",
      code: "g",
    },
    expectedSupplyDuration: {
      value: 10,
      unit: "days",
      system: "http://unitsofmeasure.org",
      code: "d",
    },
  },
  substitution: {
    allowedBoolean: true,
    reason: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          code: "FP",
          display: "formulary policy",
        },
      ],
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

export const Medicationrequest0335: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0335",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0335</p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: on-hold</p><p><b>intent</b>: order</p><p><b>medication</b>: Nystatin 100UNT/MG Topical Ointment <span>(Details : {RxNorm code '884308' = 'nystatin 100,000 UNT/GM Topical Ointment', given as 'Nystatin 100UNT/MG Topical Ointment'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>dosageInstruction</b>: </p><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>NumberOfRepeatsAllowed</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td></tr><tr><td>*</td><td>15/01/2015 --&gt; 15/01/2016</td><td>3</td><td>30 g<span> (Details: UCUM code g = 'g')</span></td><td>10 days<span> (Details: UCUM code d = 'd')</span></td></tr></table><h3>Substitutions</h3><table><tr><td>-</td><td><b>Allowed[x]</b></td><td><b>Reason</b></td></tr><tr><td>*</td><td>true</td><td>formulary policy <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code 'FP' = 'formulary policy', given as 'formulary policy'})</span></td></tr></table></div>",
  },
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "on-hold",
  intent: "order",
  medicationCodeableConcept: {
    coding: [
      {
        system: "http://www.nlm.nih.gov/research/umls/rxnorm",
        code: "884308",
        display: "Nystatin 100UNT/MG Topical Ointment",
      },
    ],
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  dosageInstruction: [
    {
      sequence: 1,
      text: "Apply to affected areas at 9am daily",
      timing: {
        repeat: {
          timeOfDay: ["09:00:00"],
        },
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 1,
            unit: "ea",
            system: "http://unitsofmeasure.org",
            code: "ea",
          },
        },
      ],
    },
  ],
  dispenseRequest: {
    validityPeriod: {
      start: "2015-01-15",
      end: "2016-01-15",
    },
    numberOfRepeatsAllowed: 3,
    quantity: {
      value: 30,
      unit: "g",
      system: "http://unitsofmeasure.org",
      code: "g",
    },
    expectedSupplyDuration: {
      value: 10,
      unit: "days",
      system: "http://unitsofmeasure.org",
      code: "d",
    },
  },
  substitution: {
    allowedBoolean: true,
    reason: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          code: "FP",
          display: "formulary policy",
        },
      ],
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

export const Medicationrequest0336: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0336",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0336</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>medication</b>: Dopamine 400mg in 500mL D5W. Generated Summary: id: med0336; Injection Solution (qualifier value) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection Solution (qualifier value)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>supportingInformation</b>: <a>Observation/example</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>dosageInstruction</b>: </p></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0336",
      form: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "385219001",
            display: "Injection Solution (qualifier value)",
          },
        ],
        text: "Injection Solution (qualifier value)",
      },
      ingredient: [
        {
          itemCodeableConcept: {
            coding: [
              {
                system: "http://www.nlm.nih.gov/research/umls/rxnorm",
                code: "1114879",
                display: "Dopamine",
              },
            ],
          },
          strength: {
            numerator: {
              value: 400,
              system: "http://unitsofmeasure.org",
              code: "mg",
            },
            denominator: {
              value: 500,
              system: "http://unitsofmeasure.org",
              code: "mL",
            },
          },
        },
        {
          itemCodeableConcept: {
            coding: [
              {
                system: "http://hl7.org/fhir/sid/ndc",
                code: "0264751010",
                display: "Dextrose 5% injection USP",
              },
            ],
          },
          strength: {
            numerator: {
              value: 5,
              system: "http://unitsofmeasure.org",
              code: "g",
            },
            denominator: {
              value: 100,
              system: "http://unitsofmeasure.org",
              code: "mL",
            },
          },
        },
      ],
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "completed",
  intent: "order",
  medicationReference: {
    reference: "#med0336",
    display: "Dopamine 400mg in 500mL D5W",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  supportingInformation: [
    {
      reference: "Observation/example",
    },
  ],
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  dosageInstruction: [
    {
      sequence: 1,
      text: "Dopamine 4mcg/kg/min",
      timing: {
        repeat: {
          duration: 33.33,
          durationUnit: "h",
        },
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "47625008",
            display: "Intravenous route (qualifier value)",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          rateQuantity: {
            value: 4,
            unit: "ug/kg/min",
            system: "http://unitsofmeasure.org",
          },
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

export const Medicationrequest0337: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0337",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0337</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>medication</b>: Dopamine 400mg in 500mL D5W. Generated Summary: id: med0337; Injection Solution (qualifier value) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection Solution (qualifier value)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>dosageInstruction</b>: </p></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0337",
      form: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "385219001",
            display: "Injection Solution (qualifier value)",
          },
        ],
        text: "Injection Solution (qualifier value)",
      },
      ingredient: [
        {
          itemCodeableConcept: {
            coding: [
              {
                system: "http://www.nlm.nih.gov/research/umls/rxnorm",
                code: "1114879",
                display: "Dopamine",
              },
            ],
          },
          strength: {
            numerator: {
              value: 400,
              system: "http://unitsofmeasure.org",
              code: "mg",
            },
            denominator: {
              value: 500,
              system: "http://unitsofmeasure.org",
              code: "mL",
            },
          },
        },
        {
          itemCodeableConcept: {
            coding: [
              {
                system: "http://hl7.org/fhir/sid/ndc",
                code: "0264751010",
                display: "Dextrose 5% injection USP",
              },
            ],
          },
          strength: {
            numerator: {
              value: 5,
              system: "http://unitsofmeasure.org",
              code: "g",
            },
            denominator: {
              value: 100,
              system: "http://unitsofmeasure.org",
              code: "mL",
            },
          },
        },
      ],
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "completed",
  intent: "order",
  medicationReference: {
    reference: "#med0337",
    display: "Dopamine 400mg in 500mL D5W",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  dosageInstruction: [
    {
      sequence: 1,
      text: "Dopamine 4mcg/kg/min",
      timing: {
        repeat: {
          duration: 33.33,
          durationUnit: "h",
        },
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "47625008",
            display: "Intravenous route (qualifier value)",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          rateQuantity: {
            value: 200,
            unit: "ug/min",
            system: "http://unitsofmeasure.org",
          },
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

export const Medicationrequest0338: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0338",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0338</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>medication</b>: Dopamine 400mg in 500mL D5W. Generated Summary: id: med0338; Injection Solution (qualifier value) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection Solution (qualifier value)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>supportingInformation</b>: <a>Observation/example</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>dosageInstruction</b>: </p></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0338",
      form: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "385219001",
            display: "Injection Solution (qualifier value)",
          },
        ],
        text: "Injection Solution (qualifier value)",
      },
      ingredient: [
        {
          itemCodeableConcept: {
            coding: [
              {
                system: "http://www.nlm.nih.gov/research/umls/rxnorm",
                code: "1114879",
                display: "Dopamine",
              },
            ],
          },
          strength: {
            numerator: {
              value: 400,
              system: "http://unitsofmeasure.org",
              code: "mg",
            },
            denominator: {
              value: 500,
              system: "http://unitsofmeasure.org",
              code: "mL",
            },
          },
        },
        {
          itemCodeableConcept: {
            coding: [
              {
                system: "http://hl7.org/fhir/sid/ndc",
                code: "0264751010",
                display: "Dextrose 5% injection USP",
              },
            ],
          },
          strength: {
            numerator: {
              value: 5,
              system: "http://unitsofmeasure.org",
              code: "g",
            },
            denominator: {
              value: 100,
              system: "http://unitsofmeasure.org",
              code: "mL",
            },
          },
        },
      ],
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "completed",
  intent: "order",
  medicationReference: {
    reference: "#med0338",
    display: "Dopamine 400mg in 500mL D5W",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  supportingInformation: [
    {
      reference: "Observation/example",
    },
  ],
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  dosageInstruction: [
    {
      sequence: 1,
      text: "Dopamine 4mcg/kg/min",
      timing: {
        repeat: {
          duration: 33.33,
          durationUnit: "h",
        },
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "47625008",
            display: "Intravenous route (qualifier value)",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 400,
            unit: "mg",
            system: "http://unitsofmeasure.org",
            code: "mg",
          },
          rateQuantity: {
            value: 7.5,
            unit: "ml/h",
            system: "http://unitsofmeasure.org",
          },
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

export const Medicationrequest0339: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0339",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0339</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>medication</b>: id: med0322; Vagistat-3 <span>(Details : {http://hl7.org/fhir/sid/ndc code '0067-2091-03' = 'n/a', given as 'Vagistat-3'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>encounter</b>: <a>encounter who leads to this prescription</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>basedOn</b>: <a>CarePlan/gpvisit</a></p><p><b>groupIdentifier</b>: 983939393 (OFFICIAL)</p><p><b>dosageInstruction</b>: , </p><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>NumberOfRepeatsAllowed</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td><td><b>Performer</b></td></tr><tr><td>*</td><td>15/01/2015 --&gt; 15/01/2016</td><td>1</td><td>1</td><td>3 days<span> (Details: UCUM code d = 'd')</span></td><td><a>Organization/f001</a></td></tr></table><h3>Substitutions</h3><table><tr><td>-</td><td><b>Allowed[x]</b></td><td><b>Reason</b></td></tr><tr><td>*</td><td>true</td><td>formulary policy <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code 'FP' = 'formulary policy', given as 'formulary policy'})</span></td></tr></table></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0322",
      code: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ndc",
            code: "0067-2091-03",
            display: "Vagistat-3",
          },
        ],
      },
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "active",
  intent: "order",
  medicationReference: {
    reference: "#med0322",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  encounter: {
    reference: "Encounter/f001",
    display: "encounter who leads to this prescription",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  basedOn: [
    {
      reference: "CarePlan/gpvisit",
    },
  ],
  groupIdentifier: {
    use: "official",
    system: "http://www.bmc.nl/portal/prescriptions",
    value: "983939393",
  },
  dosageInstruction: [
    {
      sequence: 1,
      text: "Insert one suppository into the vagina daily at bedtime",
      timing: {
        repeat: {
          boundsPeriod: {
            start: "2015-01-16",
            end: "2015-01-18",
          },
          frequency: 1,
          period: 1,
          periodUnit: "d",
        },
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "16857009",
            display: "Vaginal Route",
          },
        ],
      },
      method: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "421257003",
            display: "Insert",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 1,
            unit: "VAGTAB",
            system:
              "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
            code: "VAGTAB",
          },
        },
      ],
    },
    {
      sequence: 1,
      text: "Apply to vaginal area topically once daily",
      timing: {
        repeat: {
          boundsPeriod: {
            start: "2015-01-16",
            end: "2015-01-18",
          },
          frequency: 1,
          period: 1,
          periodUnit: "d",
        },
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "6064005",
            display: "Topical Route",
          },
        ],
      },
      method: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "417924000",
            display: "Apply - dosing instruction imperative (qualifier value)",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
        },
      ],
    },
  ],
  dispenseRequest: {
    validityPeriod: {
      start: "2015-01-15",
      end: "2016-01-15",
    },
    numberOfRepeatsAllowed: 1,
    quantity: {
      value: 1,
    },
    expectedSupplyDuration: {
      value: 3,
      unit: "days",
      system: "http://unitsofmeasure.org",
      code: "d",
    },
    performer: {
      reference: "Organization/f001",
    },
  },
  substitution: {
    allowedBoolean: true,
    reason: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          code: "FP",
          display: "formulary policy",
        },
      ],
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

export const Medicationrequestexample1: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0311",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0311</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>medication</b>: id: med0316; Chlorthalidone 50mg tablet (product) <span>(Details : {SNOMED CT code '317935006' = 'Chlortalidone 50mg tablet', given as 'Chlorthalidone 50mg tablet (product)'})</span>; Tablet dose form (qualifier value) <span>(Details : {SNOMED CT code '385055001' = 'Tablet', given as 'Tablet dose form (qualifier value)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>encounter</b>: <a>encounter who leads to this prescription</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>reasonReference</b>: <a>condition for prescribing this medication</a></p><p><b>note</b>: Chlorthalidone increases urniation so take it in the morning</p><p><b>dosageInstruction</b>: </p><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>NumberOfRepeatsAllowed</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td></tr><tr><td>*</td><td>15/01/2015 --&gt; 15/01/2016</td><td>1</td><td>30 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></td><td>30 days<span> (Details: UCUM code d = 'd')</span></td></tr></table><h3>Substitutions</h3><table><tr><td>-</td><td><b>Allowed[x]</b></td><td><b>Reason</b></td></tr><tr><td>*</td><td>true</td><td>continuing therapy <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code 'CT' = 'continuing therapy', given as 'continuing therapy'})</span></td></tr></table></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0316",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "317935006",
            display: "Chlorthalidone 50mg tablet (product)",
          },
        ],
      },
      form: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "385055001",
            display: "Tablet dose form (qualifier value)",
          },
        ],
      },
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "active",
  intent: "order",
  medicationReference: {
    reference: "#med0316",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  encounter: {
    reference: "Encounter/f001",
    display: "encounter who leads to this prescription",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  reasonReference: [
    {
      reference: "Condition/f201",
      display: "condition for prescribing this medication",
    },
  ],
  note: [
    {
      text: "Chlorthalidone increases urniation so take it in the morning",
    },
  ],
  dosageInstruction: [
    {
      sequence: 1,
      text: "One tablet daily",
      additionalInstruction: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "311504000",
              display: "With or after food",
            },
          ],
        },
      ],
      timing: {
        code: {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/v3-GTSAbbreviation",
              code: "QD",
              display: "QD",
            },
          ],
        },
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "26643006",
            display: "Oral Route",
          },
        ],
      },
      method: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "421521009",
            display:
              "Swallow - dosing instruction imperative (qualifier value)",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 1,
            unit: "TAB",
            system:
              "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
            code: "TAB",
          },
        },
      ],
    },
  ],
  dispenseRequest: {
    validityPeriod: {
      start: "2015-01-15",
      end: "2016-01-15",
    },
    numberOfRepeatsAllowed: 1,
    quantity: {
      value: 30,
      unit: "TAB",
      system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      code: "TAB",
    },
    expectedSupplyDuration: {
      value: 30,
      unit: "days",
      system: "http://unitsofmeasure.org",
      code: "d",
    },
  },
  substitution: {
    allowedBoolean: true,
    reason: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          code: "CT",
          display: "continuing therapy",
        },
      ],
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

export const Medicationrequestexample2: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx002",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx002</p><p><b>identifier</b>: 12345 (OFFICIAL)</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>medication</b>: <a>prescribed medication</a></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>encounter</b>: <a>encounter that leads to this prescription</a></p><p><b>authoredOn</b>: 01/03/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>reasonCode</b>: Essential hypertension (disorder) <span>(Details : {SNOMED CT code '59621000' = 'Essential hypertension', given as 'Essential hypertension (disorder)'})</span></p><p><b>dosageInstruction</b>: </p></div>",
  },
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345",
    },
  ],
  status: "active",
  intent: "order",
  medicationReference: {
    reference: "Medication/med0316",
    display: "prescribed medication",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  encounter: {
    reference: "Encounter/f001",
    display: "encounter that leads to this prescription",
  },
  authoredOn: "2015-03-01",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
  },
  reasonCode: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "59621000",
          display: "Essential hypertension (disorder)",
        },
      ],
    },
  ],
  dosageInstruction: [
    {
      sequence: 1,
      text: "Take one tablet daily as directed",
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
