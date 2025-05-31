import type { MedicationDispense } from "../../src/v4.0.1/medicationdispense/types";

export const Medicationdispense0301: MedicationDispense = {
  resourceType: "MedicationDispense",
  id: "meddisp0301",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0301</p><p><b>contained</b>: </p><p><b>status</b>: in-progress</p><p><b>medication</b>: Vancomycin Hydrochloride. Generated Summary: id: med0301; Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE) <span>(Details : {http://hl7.org/fhir/sid/ndc code '0069-2587-10' = 'n/a', given as 'Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>supportingInformation</b>: <a>Condition/f203</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>location</b>: <a>Pharmacy</a></p><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0318</a></p><p><b>type</b>: Emergency Supply <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'EM' = 'Emergency Supply', given as 'Emergency Supply'})</span></p><p><b>quantity</b>: 12 Vial<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code Vial = 'Vial')</span></p><p><b>daysSupply</b>: 3 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 15/01/2015 10:20:00 AM</p><p><b>destination</b>: <a>Location/ph</a></p><p><b>receiver</b>: <a>Donald Duck</a></p><p><b>dosageInstruction</b>: </p></div>",
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
  status: "in-progress",
  medicationReference: {
    reference: "#med0301",
    display: "Vancomycin Hydrochloride",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  supportingInformation: [
    {
      reference: "Condition/f203",
    },
  ],
  performer: [
    {
      actor: {
        reference: "Practitioner/f006",
      },
    },
  ],
  location: {
    reference: "Location/ukp",
    display: "Pharmacy",
  },
  authorizingPrescription: [
    {
      reference: "MedicationRequest/medrx0318",
    },
  ],
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EM",
        display: "Emergency Supply",
      },
    ],
  },
  quantity: {
    value: 12,
    unit: "Vial",
    system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
    code: "Vial",
  },
  daysSupply: {
    value: 3,
    unit: "Day",
    system: "http://unitsofmeasure.org",
    code: "d",
  },
  whenPrepared: "2015-01-15T10:20:00Z",
  destination: {
    reference: "Location/ph",
  },
  receiver: [
    {
      reference: "Patient/pat1",
      display: "Donald Duck",
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

export const Medicationdispense0302: MedicationDispense = {
  resourceType: "MedicationDispense",
  id: "meddisp0302",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0302</p><p><b>contained</b>: </p><p><b>status</b>: in-progress</p><p><b>medication</b>: Novolog 100u/ml. Generated Summary: id: med0360; Novolog 100u/ml <span>(Details : {http://hl7.org/fhir/sid/ndc code '0169-7501-11' = 'n/a', given as 'Novolog 100u/ml'})</span>; Injection solution (qualifier value) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection solution (qualifier value)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Function</b></td><td><b>Actor</b></td></tr><tr><td>*</td><td>Final Checker <span>(Details : {http://terminology.hl7.org/CodeSystem/medicationdispense-performer-function code 'finalchecker' = 'Final Checker', given as 'Final Checker'})</span></td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0321</a></p><p><b>type</b>: Refill - Part Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'RFP' = 'Refill - Part Fill', given as 'Refill - Part Fill'})</span></p><p><b>quantity</b>: 10 ml<span> (Details: UCUM code ml = 'ml')</span></p><p><b>daysSupply</b>: 30 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 15/01/2015 10:20:00 AM</p><p><b>whenHandedOver</b>: 15/01/2015 4:20:00 PM</p><p><b>dosageInstruction</b>: , , </p></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0360",
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
  status: "in-progress",
  medicationReference: {
    reference: "#med0360",
    display: "Novolog 100u/ml",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  performer: [
    {
      function: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/medicationdispense-performer-function",
            code: "finalchecker",
            display: "Final Checker",
          },
        ],
      },
      actor: {
        reference: "Practitioner/f006",
      },
    },
  ],
  authorizingPrescription: [
    {
      reference: "MedicationRequest/medrx0321",
    },
  ],
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFP",
        display: "Refill - Part Fill",
      },
    ],
  },
  quantity: {
    value: 10,
    system: "http://unitsofmeasure.org",
    code: "ml",
  },
  daysSupply: {
    value: 30,
    unit: "Day",
    system: "http://unitsofmeasure.org",
    code: "d",
  },
  whenPrepared: "2015-01-15T10:20:00Z",
  whenHandedOver: "2015-01-15T16:20:00Z",
  dosageInstruction: [
    {
      sequence: 1,
      text: "Before Breakfast",
      additionalInstruction: [
        {
          text: "Check sugar level before taking Novolog",
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
            value: 10,
            unit: "U",
            system: "http://unitsofmeasure.org",
            code: "U",
          },
        },
      ],
    },
    {
      sequence: 1,
      text: "15 units before lunch",
      additionalInstruction: [
        {
          text: "Check sugar level before taking Novolog",
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
          text: "Check sugar level before taking Novolog",
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

export const Medicationdispense0303: MedicationDispense = {
  resourceType: "MedicationDispense",
  id: "meddisp0303",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0303</p><p><b>contained</b>: </p><p><b>partOf</b>: <a>Procedure/biopsy</a></p><p><b>status</b>: on-hold</p><p><b>statusReason</b>: <a>DetectedIssue/allergy</a></p><p><b>category</b>: Outpatient <span>(Details : {http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-category code 'outpatient' = 'Outpatient', given as 'Outpatient'})</span></p><p><b>medication</b>: id: med0310; Oxycodone Hydrochloride 5mg oral tablet (Roxicodone <span>(Details : {RxNorm code '1049623' = 'ROXICODONE 5 MG Oral Tablet', given as 'Oxycodone Hydrochloride 5mg oral tablet (Roxicodone'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>context</b>: <a>Encounter/f001</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0310</a></p><p><b>type</b>: Emergency Supply <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'EM' = 'Emergency Supply', given as 'Emergency Supply'})</span></p><p><b>quantity</b>: 30 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></p><p><b>daysSupply</b>: 10 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 15/04/2016 7:14:00 AM</p><p><b>dosageInstruction</b>: </p><p><b>detectedIssue</b>: <a>DetectedIssue/allergy</a></p></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0310",
      code: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "1049623",
            display: "Oxycodone Hydrochloride 5mg oral tablet (Roxicodone",
          },
        ],
      },
    },
  ],
  partOf: [
    {
      reference: "Procedure/biopsy",
    },
  ],
  status: "on-hold",
  statusReasonReference: {
    reference: "DetectedIssue/allergy",
  },
  category: {
    coding: [
      {
        system:
          "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-category",
        code: "outpatient",
        display: "Outpatient",
      },
    ],
  },
  medicationReference: {
    reference: "#med0310",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  context: {
    reference: "Encounter/f001",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f006",
      },
    },
  ],
  authorizingPrescription: [
    {
      reference: "MedicationRequest/medrx0310",
    },
  ],
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EM",
        display: "Emergency Supply",
      },
    ],
  },
  quantity: {
    value: 30,
    system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
    code: "TAB",
  },
  daysSupply: {
    value: 10,
    unit: "Day",
    system: "http://unitsofmeasure.org",
    code: "d",
  },
  whenPrepared: "2016-04-15T07:14:00+05:00",
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
    },
  ],
  detectedIssue: [
    {
      reference: "DetectedIssue/allergy",
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

export const Medicationdispense0304: MedicationDispense = {
  resourceType: "MedicationDispense",
  id: "meddisp0304",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0304</p><p><b>contained</b>: </p><p><b>status</b>: completed</p><p><b>medication</b>: Zosyn (piperacillin/tazobactam) 4.5gm injection. Generated Summary: id: med0302; Zosyn (piperacillin/tazobactam) 4.5gm injection <span>(Details : {http://hl7.org/fhir/sid/ndc code '0206-8862-02' = 'n/a', given as 'Zosyn (piperacillin/tazobactam) 4.5gm injection'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0319</a></p><p><b>type</b>: First Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'FF' = 'First Fill', given as 'First Fill'})</span></p><p><b>quantity</b>: 250 mL<span> (Details: UCUM code mL = 'mL')</span></p><p><b>daysSupply</b>: 1 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 25/06/2015 7:13:00 AM</p><p><b>whenHandedOver</b>: 26/06/2015 7:13:00 AM</p><p><b>dosageInstruction</b>: </p></div>",
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
  status: "completed",
  medicationReference: {
    reference: "#med0302",
    display: "Zosyn (piperacillin/tazobactam) 4.5gm injection",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f006",
      },
    },
  ],
  authorizingPrescription: [
    {
      reference: "MedicationRequest/medrx0319",
    },
  ],
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FF",
        display: "First Fill",
      },
    ],
  },
  quantity: {
    value: 250,
    system: "http://unitsofmeasure.org",
    code: "mL",
  },
  daysSupply: {
    value: 1,
    unit: "Day",
    system: "http://unitsofmeasure.org",
    code: "d",
  },
  whenPrepared: "2015-06-25T07:13:00+05:00",
  whenHandedOver: "2015-06-26T07:13:00+05:00",
  dosageInstruction: [
    {
      sequence: 1,
      text: "4.5 grams in D5W 250 ml. IV every 6 hours. Infuse over 30 min at 8L/min",
      timing: {
        repeat: {
          frequency: 1,
          period: 6,
          periodUnit: "h",
        },
      },
      site: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "255560000",
            display: "Intravenous route (qualifier value)",
          },
        ],
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "47625008",
            display: "IV intravascular route that begins within a vein)",
          },
        ],
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "calculated",
                display: "Calculated",
              },
            ],
          },
          doseQuantity: {
            value: 4.5,
            system: "http://unitsofmeasure.org",
            code: "g",
          },
          rateRatio: {
            numerator: {
              value: 8,
              system: "http://unitsofmeasure.org",
              code: "ml",
            },
            denominator: {
              value: 1,
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

export const Medicationdispense0305: MedicationDispense = {
  resourceType: "MedicationDispense",
  id: "meddisp0305",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0305</p><p><b>contained</b>: </p><p><b>status</b>: entered-in-error</p><p><b>medication</b>: Prednisone. Generated Summary: id: med0311; Prednisone 5mg Oral Tablet 48 Count Pack <span>(Details : {RxNorm code '763179' = 'predniSONE 5 MG Oral Tablet 48 Count Pack', given as 'Prednisone 5mg Oral Tablet 48 Count Pack'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0303</a></p><p><b>type</b>: First Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'FF' = 'First Fill', given as 'First Fill'})</span></p><p><b>quantity</b>: 49 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></p><p><b>daysSupply</b>: 21 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 15/01/2015 10:20:00 AM</p><p><b>whenHandedOver</b>: 15/01/2015 4:20:00 PM</p><p><b>dosageInstruction</b>: , , </p></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0311",
      code: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "763179",
            display: "Prednisone 5mg Oral Tablet 48 Count Pack",
          },
        ],
      },
    },
  ],
  status: "entered-in-error",
  medicationReference: {
    reference: "#med0311",
    display: "Prednisone",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f006",
      },
    },
  ],
  authorizingPrescription: [
    {
      reference: "MedicationRequest/medrx0303",
    },
  ],
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FF",
        display: "First Fill",
      },
    ],
  },
  quantity: {
    value: 49,
    unit: "TAB",
    system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
    code: "TAB",
  },
  daysSupply: {
    value: 21,
    unit: "Day",
    system: "http://unitsofmeasure.org",
    code: "d",
  },
  whenPrepared: "2015-01-15T10:20:00Z",
  whenHandedOver: "2015-01-15T16:20:00Z",
  dosageInstruction: [
    {
      sequence: 1,
      text: "Take 4 tablets daily for 7 days starting January 16, 2015",
      additionalInstruction: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "311504000",
              display: "With or after Food",
            },
          ],
        },
      ],
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
                code: "calculated",
                display: "Calculated",
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
      additionalInstruction: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "311504000",
              display: "With or after Food",
            },
          ],
        },
      ],
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
                code: "calculated",
                display: "Calculated",
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
      additionalInstruction: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "311504000",
              display: "With or after Food",
            },
          ],
        },
      ],
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
                code: "calculated",
                display: "Calculated",
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

export const Medicationdispense0306: MedicationDispense = {
  resourceType: "MedicationDispense",
  id: "meddisp0306",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0306</p><p><b>contained</b>: </p><p><b>status</b>: in-progress</p><p><b>medication</b>: Alemtuzumab 10mg/ml (Lemtrada). Generated Summary: id: med0303; Alemtuzumab 10mg/ml (Lemtrada) <span>(Details : {RxNorm code '1594660' = 'alemtuzumab 10 MG/ML [Lemtrada]', given as 'Alemtuzumab 10mg/ml (Lemtrada)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0317</a></p><p><b>type</b>: Daily Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'DF' = 'Daily Fill', given as 'Daily Fill'})</span></p><p><b>quantity</b>: 5 415818006<span> (Details: SNOMED CT code 415818006 = 'Vial')</span></p><p><b>daysSupply</b>: 7 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 15/01/2015 10:20:00 AM</p><p><b>dosageInstruction</b>: , , </p></div>",
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
  status: "in-progress",
  medicationReference: {
    reference: "#med0303",
    display: "Alemtuzumab 10mg/ml (Lemtrada)",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f006",
      },
    },
  ],
  authorizingPrescription: [
    {
      reference: "MedicationRequest/medrx0317",
    },
  ],
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DF",
        display: "Daily Fill",
      },
    ],
  },
  quantity: {
    value: 5,
    system: "http://snomed.info/sct",
    code: "415818006",
  },
  daysSupply: {
    value: 7,
    unit: "Day",
    system: "http://unitsofmeasure.org",
    code: "d",
  },
  whenPrepared: "2015-01-15T10:20:00Z",
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
                code: "calculated",
                display: "Calculated",
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
                code: "calculated",
                display: "Calculated",
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
                code: "calculated",
                display: "Calculated",
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

export const Medicationdispense0307: MedicationDispense = {
  resourceType: "MedicationDispense",
  id: "meddisp0307",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0307</p><p><b>status</b>: completed</p><p><b>medication</b>: Myleran 2mg tablet, film coated <span>(Details : {http://hl7.org/fhir/sid/ndc code '76388-713-25' = 'n/a', given as 'Myleran 2mg tablet, film coated'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0306</a></p><p><b>type</b>: Refill - Part Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'RFP' = 'Refill - Part Fill', given as 'Refill - Part Fill'})</span></p><p><b>quantity</b>: 90 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></p><p><b>daysSupply</b>: 30 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 15/01/2015 10:20:00 AM</p><p><b>whenHandedOver</b>: 15/01/2015 4:20:00 PM</p><p><b>dosageInstruction</b>: </p></div>",
  },
  status: "completed",
  medicationCodeableConcept: {
    coding: [
      {
        system: "http://hl7.org/fhir/sid/ndc",
        code: "76388-713-25",
        display: "Myleran 2mg tablet, film coated",
      },
    ],
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f006",
      },
    },
  ],
  authorizingPrescription: [
    {
      reference: "MedicationRequest/medrx0306",
    },
  ],
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFP",
        display: "Refill - Part Fill",
      },
    ],
  },
  quantity: {
    value: 90,
    system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
    code: "TAB",
  },
  daysSupply: {
    value: 30,
    unit: "Day",
    system: "http://unitsofmeasure.org",
    code: "d",
  },
  whenPrepared: "2015-01-15T10:20:00Z",
  whenHandedOver: "2015-01-15T16:20:00Z",
  dosageInstruction: [
    {
      sequence: 1,
      text: "Take 3 tablets (6mg) once daily",
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
                code: "calculated",
                display: "Calculated",
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

export const Medicationdispense0308: MedicationDispense = {
  resourceType: "MedicationDispense",
  id: "meddisp0308",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0308</p><p><b>contained</b>: </p><p><b>status</b>: completed</p><p><b>medication</b>: Timoptic 5mg/ml solution. Generated Summary: id: med0305; Timoptic 5mg/ml solution <span>(Details : {http://hl7.org/fhir/sid/ndc code '2501-813-16' = 'n/a', given as 'Timoptic 5mg/ml solution'})</span></p><p><b>subject</b>: <a>Donald Duck </a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0330</a></p><p><b>type</b>: Refill - Part Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'RFP' = 'Refill - Part Fill', given as 'Refill - Part Fill'})</span></p><p><b>quantity</b>: 10 mL<span> (Details: UCUM code mL = 'mL')</span></p><p><b>daysSupply</b>: 30 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 25/06/2015 7:13:00 AM</p><p><b>whenHandedOver</b>: 26/06/2015 7:13:00 AM</p><p><b>dosageInstruction</b>: </p></div>",
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
  status: "completed",
  medicationReference: {
    reference: "#med0305",
    display: "Timoptic 5mg/ml solution",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck ",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f006",
      },
    },
  ],
  authorizingPrescription: [
    {
      reference: "MedicationRequest/medrx0330",
    },
  ],
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFP",
        display: "Refill - Part Fill",
      },
    ],
  },
  quantity: {
    value: 10,
    unit: "mL",
    system: "http://unitsofmeasure.org",
    code: "mL",
  },
  daysSupply: {
    value: 30,
    unit: "Day",
    system: "http://unitsofmeasure.org",
    code: "d",
  },
  whenPrepared: "2015-06-25T07:13:00+05:00",
  whenHandedOver: "2015-06-26T07:13:00+05:00",
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

export const Medicationdispense0309: MedicationDispense = {
  resourceType: "MedicationDispense",
  id: "meddisp0309",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0309</p><p><b>contained</b>: </p><p><b>status</b>: entered-in-error</p><p><b>medication</b>: Nystatin 100,000 units/ml oral suspension (product). Generated Summary: id: med0312; Nystatin 100,000 units/ml oral suspension (product) <span>(Details : {SNOMED CT code '324689003' = 'Nystatin 100,000units/mL oral suspension', given as 'Nystatin 100,000 units/ml oral suspension (product)'})</span></p><p><b>subject</b>: <a>Donald Duck </a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0319</a></p><p><b>type</b>: First Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'FF' = 'First Fill', given as 'First Fill'})</span></p><p><b>quantity</b>: 10 ml<span> (Details: UCUM code ml = 'ml')</span></p><p><b>daysSupply</b>: 10 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 15/01/2015</p><p><b>whenHandedOver</b>: 15/01/2016</p><p><b>dosageInstruction</b>: </p></div>",
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
  status: "entered-in-error",
  medicationReference: {
    reference: "#med0312",
    display: "Nystatin 100,000 units/ml oral suspension (product)",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck ",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f006",
      },
    },
  ],
  authorizingPrescription: [
    {
      reference: "MedicationRequest/medrx0319",
    },
  ],
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FF",
        display: "First Fill",
      },
    ],
  },
  quantity: {
    value: 10,
    unit: "ml",
    system: "http://unitsofmeasure.org",
    code: "ml",
  },
  daysSupply: {
    value: 10,
    unit: "Day",
    system: "http://unitsofmeasure.org",
    code: "d",
  },
  whenPrepared: "2015-01-15",
  whenHandedOver: "2016-01-15",
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

export const Medicationdispense0310: MedicationDispense = {
  resourceType: "MedicationDispense",
  id: "meddisp0310",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0310</p><p><b>contained</b>: </p><p><b>status</b>: in-progress</p><p><b>medication</b>: Percocet. Generated Summary: id: med0308; Percocet tablet <span>(Details : {http://hl7.org/fhir/sid/ndc code '16590-619-30' = 'n/a', given as 'Percocet tablet'})</span></p><p><b>subject</b>: <a>Donald Duck </a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0307</a></p><p><b>type</b>: Emergency Supply <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'EM' = 'Emergency Supply', given as 'Emergency Supply'})</span></p><p><b>quantity</b>: 30 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></p><p><b>daysSupply</b>: 30 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 15/01/2015 10:20:00 AM</p><p><b>dosageInstruction</b>: </p></div>",
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
  status: "in-progress",
  medicationReference: {
    reference: "#med0308",
    display: "Percocet",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck ",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f006",
      },
    },
  ],
  authorizingPrescription: [
    {
      reference: "MedicationRequest/medrx0307",
    },
  ],
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EM",
        display: "Emergency Supply",
      },
    ],
  },
  quantity: {
    value: 30,
    unit: "TAB",
    system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
    code: "TAB",
  },
  daysSupply: {
    value: 30,
    unit: "Day",
    system: "http://unitsofmeasure.org",
    code: "d",
  },
  whenPrepared: "2015-01-15T10:20:00Z",
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

export const Medicationdispense0311: MedicationDispense = {
  resourceType: "MedicationDispense",
  id: "meddisp0311",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0311</p><p><b>status</b>: completed</p><p><b>medication</b>: Acetaminophen 120mg Suppository <span>(Details : {http://hl7.org/fhir/sid/ndc code '50090-0001' = 'n/a', given as 'Acetaminophen 120mg Suppository'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0324</a></p><p><b>type</b>: Refill - Part Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'RFP' = 'Refill - Part Fill', given as 'Refill - Part Fill'})</span></p><p><b>quantity</b>: 60 RECSUPP<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code RECSUPP = 'Rectal Suppository')</span></p><p><b>daysSupply</b>: 10 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 15/01/2015 10:20:00 AM</p><p><b>whenHandedOver</b>: 15/01/2015 4:20:00 PM</p><p><b>dosageInstruction</b>: </p></div>",
  },
  status: "completed",
  medicationCodeableConcept: {
    coding: [
      {
        system: "http://hl7.org/fhir/sid/ndc",
        code: "50090-0001",
        display: "Acetaminophen 120mg Suppository",
      },
    ],
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f006",
      },
    },
  ],
  authorizingPrescription: [
    {
      reference: "MedicationRequest/medrx0324",
    },
  ],
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFP",
        display: "Refill - Part Fill",
      },
    ],
  },
  quantity: {
    value: 60,
    system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
    code: "RECSUPP",
  },
  daysSupply: {
    value: 10,
    unit: "Day",
    system: "http://unitsofmeasure.org",
    code: "d",
  },
  whenPrepared: "2015-01-15T10:20:00Z",
  whenHandedOver: "2015-01-15T16:20:00Z",
  dosageInstruction: [
    {
      sequence: 1,
      text: "Insert two suppositories (240mg) rectally twice daily as needed for fever to a maximim of 6 per day",
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

export const Medicationdispense0312: MedicationDispense = {
  resourceType: "MedicationDispense",
  id: "meddisp0312",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0312</p><p><b>contained</b>: </p><p><b>status</b>: on-hold</p><p><b>medication</b>: Tylenol PM. Generated Summary: id: med0309; Tylenol PM <span>(Details : {http://hl7.org/fhir/sid/ndc code '50580-506-02' = 'n/a', given as 'Tylenol PM'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0310</a></p><p><b>type</b>: First Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'FF' = 'First Fill', given as 'First Fill'})</span></p><p><b>quantity</b>: 100 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></p><p><b>daysSupply</b>: 30 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 15/01/2015 10:20:00 AM</p><p><b>whenHandedOver</b>: 15/01/2015 4:20:00 PM</p><p><b>dosageInstruction</b>: </p></div>",
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
  status: "on-hold",
  medicationReference: {
    reference: "#med0309",
    display: "Tylenol PM",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f006",
      },
    },
  ],
  authorizingPrescription: [
    {
      reference: "MedicationRequest/medrx0310",
    },
  ],
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FF",
        display: "First Fill",
      },
    ],
  },
  quantity: {
    value: 100,
    system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
    code: "TAB",
  },
  daysSupply: {
    value: 30,
    unit: "Day",
    system: "http://unitsofmeasure.org",
    code: "d",
  },
  whenPrepared: "2015-01-15T10:20:00Z",
  whenHandedOver: "2015-01-15T16:20:00Z",
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

export const Medicationdispense0313: MedicationDispense = {
  resourceType: "MedicationDispense",
  id: "meddisp0313",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0313</p><p><b>contained</b>: </p><p><b>status</b>: stopped</p><p><b>medication</b>: Potassium Chloride 20mEq in 1L Normal Saline. Generated Summary: id: med0317; Injection Solution (qualifier value) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection Solution (qualifier value)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0322</a></p><p><b>type</b>: First Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'FF' = 'First Fill', given as 'First Fill'})</span></p><p><b>quantity</b>: 1000 ml<span> (Details: UCUM code ml = 'ml')</span></p><p><b>daysSupply</b>: 1 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 28/04/2016 7:13:00 AM</p><p><b>whenHandedOver</b>: 28/04/2016 7:13:00 AM</p><p><b>dosageInstruction</b>: </p></div>",
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
  status: "stopped",
  medicationReference: {
    reference: "#med0317",
    display: "Potassium Chloride 20mEq in 1L Normal Saline",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f006",
      },
    },
  ],
  authorizingPrescription: [
    {
      reference: "MedicationRequest/medrx0322",
    },
  ],
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FF",
        display: "First Fill",
      },
    ],
  },
  quantity: {
    value: 1000,
    system: "http://unitsofmeasure.org",
    code: "ml",
  },
  daysSupply: {
    value: 1,
    unit: "Day",
    system: "http://unitsofmeasure.org",
    code: "d",
  },
  whenPrepared: "2016-04-28T07:13:00+05:00",
  whenHandedOver: "2016-04-28T07:13:00+05:00",
  dosageInstruction: [
    {
      sequence: 1,
      text: "KCl 20 mEq in 1 L 0.9%NS IV at 100 ml/hr",
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

export const Medicationdispense0314: MedicationDispense = {
  resourceType: "MedicationDispense",
  id: "meddisp0314",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0314</p><p><b>contained</b>: </p><p><b>status</b>: completed</p><p><b>medication</b>: id: med0313; Lorazepam 2mg/ml Injectable Solution (Ativan) <span>(Details : {RxNorm code '206819' = 'Ativan 2 MG/ML Injectable Solution', given as 'Lorazepam 2mg/ml Injectable Solution (Ativan)'})</span>; Injection solution (qualifier value) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection solution (qualifier value)'})</span></p><p><b>subject</b>: <a>Donald Duck </a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0315</a></p><p><b>type</b>: Trial Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'TF' = 'Trial Fill', given as 'Trial Fill'})</span></p><p><b>quantity</b>: 1 415818005<span> (Details: SNOMED CT code 415818005 = '415818005')</span></p><p><b>daysSupply</b>: 1 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 25/06/2015 7:13:00 AM</p><p><b>whenHandedOver</b>: 26/06/2015 7:13:00 AM</p><p><b>dosageInstruction</b>: </p></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0313",
      code: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "206819",
            display: "Lorazepam 2mg/ml Injectable Solution (Ativan)",
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
  status: "completed",
  medicationReference: {
    reference: "#med0313",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck ",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f006",
      },
    },
  ],
  authorizingPrescription: [
    {
      reference: "MedicationRequest/medrx0315",
    },
  ],
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TF",
        display: "Trial Fill",
      },
    ],
  },
  quantity: {
    value: 1,
    system: "http://snomed.info/sct",
    code: "415818005",
  },
  daysSupply: {
    value: 1,
    unit: "Day",
    system: "http://unitsofmeasure.org",
    code: "d",
  },
  whenPrepared: "2015-06-25T07:13:00+05:00",
  whenHandedOver: "2015-06-26T07:13:00+05:00",
  dosageInstruction: [
    {
      sequence: 1,
      text: "7mg IV over 2-5 minutes every 15 minutes as needed",
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
          doseQuantity: {
            value: 7,
            unit: "mg",
            system: "http://unitsofmeasure.org",
            code: "mg",
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

export const Medicationdispense0315: MedicationDispense = {
  resourceType: "MedicationDispense",
  id: "meddisp0315",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0315</p><p><b>contained</b>: </p><p><b>status</b>: in-progress</p><p><b>medication</b>: Alprazolam 0.25mg (Xanax). Generated Summary: id: med0314; Alprazolam 0.25mg (Xanax) <span>(Details : {RxNorm code '562721' = 'Amylases / CELLULASE / Endopeptidases / Hyoscyamine / Lipase / phenyltoloxamine Oral Capsule', given as 'Alprazolam 0.25mg (Xanax)'})</span></p><p><b>subject</b>: <a>Donald Duck </a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0305</a></p><p><b>type</b>: Refill - Part Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'RFP' = 'Refill - Part Fill', given as 'Refill - Part Fill'})</span></p><p><b>quantity</b>: 30 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></p><p><b>daysSupply</b>: 10 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 25/06/2015 7:13:00 AM</p><p><b>whenHandedOver</b>: 26/06/2015 7:13:00 AM</p><p><b>dosageInstruction</b>: </p></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0314",
      code: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "562721",
            display: "Alprazolam 0.25mg (Xanax)",
          },
        ],
      },
    },
  ],
  status: "in-progress",
  medicationReference: {
    reference: "#med0314",
    display: "Alprazolam 0.25mg (Xanax)",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck ",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f006",
      },
    },
  ],
  authorizingPrescription: [
    {
      reference: "MedicationRequest/medrx0305",
    },
  ],
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFP",
        display: "Refill - Part Fill",
      },
    ],
  },
  quantity: {
    value: 30,
    system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
    code: "TAB",
  },
  daysSupply: {
    value: 10,
    unit: "Day",
    system: "http://unitsofmeasure.org",
    code: "d",
  },
  whenPrepared: "2015-06-25T07:13:00+05:00",
  whenHandedOver: "2015-06-26T07:13:00+05:00",
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

export const Medicationdispense0316: MedicationDispense = {
  resourceType: "MedicationDispense",
  id: "meddisp0316",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0316</p><p><b>status</b>: in-progress</p><p><b>medication</b>: Lantus 100 unit/ml injectable solution <span>(Details : {RxNorm code '285018' = 'Lantus 100 UNT/ML Injectable Solution', given as 'Lantus 100 unit/ml injectable solution'})</span></p><p><b>subject</b>: <a>Donald Duck </a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0320</a></p><p><b>type</b>: Refill - Part Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'RFP' = 'Refill - Part Fill', given as 'Refill - Part Fill'})</span></p><p><b>quantity</b>: 10 ml<span> (Details: UCUM code ml = 'ml')</span></p><p><b>daysSupply</b>: 30 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 25/06/2015 7:13:00 AM</p><p><b>dosageInstruction</b>: </p></div>",
  },
  status: "in-progress",
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
    display: "Donald Duck ",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f006",
      },
    },
  ],
  authorizingPrescription: [
    {
      reference: "MedicationRequest/medrx0320",
    },
  ],
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFP",
        display: "Refill - Part Fill",
      },
    ],
  },
  quantity: {
    value: 10,
    system: "http://unitsofmeasure.org",
    code: "ml",
  },
  daysSupply: {
    value: 30,
    unit: "Day",
    system: "http://unitsofmeasure.org",
    code: "d",
  },
  whenPrepared: "2015-06-25T07:13:00+05:00",
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

export const Medicationdispense0317: MedicationDispense = {
  resourceType: "MedicationDispense",
  id: "meddisp0317",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0317</p><p><b>contained</b>: </p><p><b>status</b>: stopped</p><p><b>medication</b>: Brentixumab Vedotin (Adcetris). Generated Summary: id: med0306; Adcetris (Brentuximab Vedotin 50mg/10.5ml) <span>(Details : {http://hl7.org/fhir/sid/ndc code '51144-050-01' = 'n/a', given as 'Adcetris (Brentuximab Vedotin 50mg/10.5ml)'})</span>; Lyophilized powder for injectable solution (qualifier value)  <span>(Details : {SNOMED CT code '421637006' = 'Lyophilised powder for injectable solution', given as 'Lyophilized powder for injectable solution (qualifier value) '})</span></p><p><b>subject</b>: <a>Donald Duck </a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0316</a></p><p><b>type</b>: Trial Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'TF' = 'Trial Fill', given as 'Trial Fill'})</span></p><p><b>quantity</b>: 3 415818005<span> (Details: SNOMED CT code 415818005 = '415818005')</span></p><p><b>daysSupply</b>: 1 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 25/06/2015 7:13:00 AM</p><p><b>whenHandedOver</b>: 26/06/2015 7:13:00 AM</p><p><b>dosageInstruction</b>: </p></div>",
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
            display: "Adcetris (Brentuximab Vedotin 50mg/10.5ml)",
          },
        ],
      },
      manufacturer: {
        reference: "Organization/mmanu",
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
    },
  ],
  status: "stopped",
  medicationReference: {
    reference: "#med0306",
    display: "Brentixumab Vedotin (Adcetris)",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck ",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f006",
      },
    },
  ],
  authorizingPrescription: [
    {
      reference: "MedicationRequest/medrx0316",
    },
  ],
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TF",
        display: "Trial Fill",
      },
    ],
  },
  quantity: {
    value: 3,
    system: "http://snomed.info/sct",
    code: "415818005",
  },
  daysSupply: {
    value: 1,
    unit: "Day",
    system: "http://unitsofmeasure.org",
    code: "d",
  },
  whenPrepared: "2015-06-25T07:13:00+05:00",
  whenHandedOver: "2015-06-26T07:13:00+05:00",
  dosageInstruction: [
    {
      sequence: 1,
      text: "1.8 mg/kg IV infusion over 30 minutes every 3 weeks for 16 cycles",
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

export const Medicationdispense0318: MedicationDispense = {
  resourceType: "MedicationDispense",
  id: "meddisp0318",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0318</p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: in-progress</p><p><b>medication</b>: Levothyroxine Sodium Tablets, USP (75mcg) <span>(Details : {http://hl7.org/fhir/sid/ndc code '0378-1805-01' = 'n/a', given as 'Levothyroxine Sodium Tablets, USP (75mcg)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0314</a></p><p><b>type</b>: Refill - Part Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'RFP' = 'Refill - Part Fill', given as 'Refill - Part Fill'})</span></p><p><b>quantity</b>: 100 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></p><p><b>daysSupply</b>: 30 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 16/03/2015 5:13:00 PM</p><p><b>dosageInstruction</b>: </p><h3>Substitutions</h3><table><tr><td>-</td><td><b>WasSubstituted</b></td><td><b>Type</b></td><td><b>Reason</b></td><td><b>ResponsibleParty</b></td></tr><tr><td>*</td><td>true</td><td>formulary <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution code 'F' = 'formulary', given as 'formulary'})</span></td><td>Formulary Policy <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code 'FP' = 'formulary policy', given as 'Formulary Policy'})</span></td><td><a>Practitioner/f006</a></td></tr></table></div>",
  },
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/dispenses",
      value: "12345689",
    },
  ],
  status: "in-progress",
  medicationCodeableConcept: {
    coding: [
      {
        system: "http://hl7.org/fhir/sid/ndc",
        code: "0378-1805-01",
        display: "Levothyroxine Sodium Tablets, USP (75mcg)",
      },
    ],
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f006",
      },
    },
  ],
  authorizingPrescription: [
    {
      reference: "MedicationRequest/medrx0314",
    },
  ],
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFP",
        display: "Refill - Part Fill",
      },
    ],
  },
  quantity: {
    value: 100,
    system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
    code: "TAB",
  },
  daysSupply: {
    value: 30,
    unit: "Day",
    system: "http://unitsofmeasure.org",
    code: "d",
  },
  whenPrepared: "2015-03-16T17:13:00+05:00",
  dosageInstruction: [
    {
      sequence: 1,
      text: "75mcg daily daily",
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
  substitution: {
    wasSubstituted: true,
    type: {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
          code: "F",
          display: "formulary",
        },
      ],
    },
    reason: [
      {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
            code: "FP",
            display: "Formulary Policy",
          },
        ],
      },
    ],
    responsibleParty: [
      {
        reference: "Practitioner/f006",
      },
    ],
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

export const Medicationdispense0319: MedicationDispense = {
  resourceType: "MedicationDispense",
  id: "meddisp0319",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0319</p><p><b>contained</b>: </p><p><b>status</b>: completed</p><p><b>medication</b>: Azithromycin 250mg capsule (product). Generated Summary: id: med0320; Azithromycin 250mg tablet, film coated (Aidarex Pharmaceuticals LLC) <span>(Details : {http://hl7.org/fhir/sid/ndc code '33261-403-02' = 'n/a', given as 'Azithromycin 250mg tablet, film coated (Aidarex Pharmaceuticals LLC)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0302</a></p><p><b>type</b>: First Fill - Complete <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'FFC' = 'First Fill - Complete', given as 'First Fill - Complete'})</span></p><p><b>quantity</b>: 6 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></p><p><b>daysSupply</b>: 5 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 16/03/2015 5:13:00 PM</p><p><b>whenHandedOver</b>: 17/03/2015 5:13:00 PM</p><p><b>note</b>: Patient told to take with food</p><p><b>dosageInstruction</b>: , </p></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0320",
      code: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ndc",
            code: "33261-403-02",
            display:
              "Azithromycin 250mg tablet, film coated (Aidarex Pharmaceuticals LLC)",
          },
        ],
      },
    },
  ],
  status: "completed",
  medicationReference: {
    reference: "#med0320",
    display: "Azithromycin 250mg capsule (product)",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f006",
      },
    },
  ],
  authorizingPrescription: [
    {
      reference: "MedicationRequest/medrx0302",
    },
  ],
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FFC",
        display: "First Fill - Complete",
      },
    ],
  },
  quantity: {
    value: 6,
    system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
    code: "TAB",
  },
  daysSupply: {
    value: 5,
    unit: "Day",
    system: "http://unitsofmeasure.org",
    code: "d",
  },
  whenPrepared: "2015-03-16T17:13:00+05:00",
  whenHandedOver: "2015-03-17T17:13:00+05:00",
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

export const Medicationdispense0320: MedicationDispense = {
  resourceType: "MedicationDispense",
  id: "meddisp0320",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0320</p><p><b>contained</b>: </p><p><b>status</b>: completed</p><p><b>medication</b>: TPN Solution. Generated Summary: id: med0318; Injection emulsion <span>(Details : {SNOMED CT code '385221006' = 'Injection emulsion', given as 'Injection emulsion'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0323</a></p><p><b>quantity</b>: 1000 ml<span> (Details: UCUM code ml = 'ml')</span></p><p><b>daysSupply</b>: 1 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 16/03/2015 5:13:00 PM</p><p><b>whenHandedOver</b>: 17/03/2015 5:13:00 PM</p><p><b>dosageInstruction</b>: </p></div>",
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
    },
  ],
  status: "completed",
  medicationReference: {
    reference: "#med0318",
    display: "TPN Solution",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f006",
      },
    },
  ],
  authorizingPrescription: [
    {
      reference: "MedicationRequest/medrx0323",
    },
  ],
  quantity: {
    value: 1000,
    system: "http://unitsofmeasure.org",
    code: "ml",
  },
  daysSupply: {
    value: 1,
    unit: "Day",
    system: "http://unitsofmeasure.org",
    code: "d",
  },
  whenPrepared: "2015-03-16T17:13:00+05:00",
  whenHandedOver: "2015-03-17T17:13:00+05:00",
  dosageInstruction: [
    {
      sequence: 1,
      text: "1000mL infused at 50ml/hour for 4 hours - hang at 2200 hours",
      timing: {
        event: ["2015-01-15T22:00:00+11:00"],
        repeat: {
          frequency: 1,
          period: 24,
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

export const Medicationdispense0321: MedicationDispense = {
  resourceType: "MedicationDispense",
  id: "meddisp0321",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0321</p><p><b>status</b>: in-progress</p><p><b>medication</b>: Vicodin 5mg Hydrocodone, 500mg Acetaminophen tablet  <span>(Details : {http://hl7.org/fhir/sid/ndc code '49999-051-30' = 'n/a', given as 'Vicodin 5mg Hydrocodone, 500mg Acetaminophen tablet '})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0321</a></p><p><b>type</b>: Refill - Part Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'RFP' = 'Refill - Part Fill', given as 'Refill - Part Fill'})</span></p><p><b>quantity</b>: 30 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></p><p><b>daysSupply</b>: 10 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 15/01/2015 10:20:00 AM</p><p><b>dosageInstruction</b>: </p></div>",
  },
  status: "in-progress",
  medicationCodeableConcept: {
    coding: [
      {
        system: "http://hl7.org/fhir/sid/ndc",
        code: "49999-051-30",
        display: "Vicodin 5mg Hydrocodone, 500mg Acetaminophen tablet ",
      },
    ],
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f006",
      },
    },
  ],
  authorizingPrescription: [
    {
      reference: "MedicationRequest/medrx0321",
    },
  ],
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFP",
        display: "Refill - Part Fill",
      },
    ],
  },
  quantity: {
    value: 30,
    system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
    code: "TAB",
  },
  daysSupply: {
    value: 10,
    unit: "Day",
    system: "http://unitsofmeasure.org",
    code: "d",
  },
  whenPrepared: "2015-01-15T10:20:00Z",
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

export const Medicationdispense0322: MedicationDispense = {
  resourceType: "MedicationDispense",
  id: "meddisp0322",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0322</p><p><b>status</b>: completed</p><p><b>medication</b>: Dilantin 125mg/5ml Oral Suspension <span>(Details : {http://hl7.org/fhir/sid/ndc code '0071-2214-20' = 'n/a', given as 'Dilantin 125mg/5ml Oral Suspension'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0312</a></p><p><b>type</b>: Refill - Part Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'RFP' = 'Refill - Part Fill', given as 'Refill - Part Fill'})</span></p><p><b>quantity</b>: 360 ml<span> (Details: UCUM code ml = 'ml')</span></p><p><b>daysSupply</b>: 30 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 16/01/2015 7:13:00 AM</p><p><b>whenHandedOver</b>: 18/01/2015 7:13:00 AM</p><p><b>dosageInstruction</b>: </p></div>",
  },
  status: "completed",
  medicationCodeableConcept: {
    coding: [
      {
        system: "http://hl7.org/fhir/sid/ndc",
        code: "0071-2214-20",
        display: "Dilantin 125mg/5ml Oral Suspension",
      },
    ],
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f006",
      },
    },
  ],
  authorizingPrescription: [
    {
      reference: "MedicationRequest/medrx0312",
    },
  ],
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFP",
        display: "Refill - Part Fill",
      },
    ],
  },
  quantity: {
    value: 360,
    system: "http://unitsofmeasure.org",
    code: "ml",
  },
  daysSupply: {
    value: 30,
    unit: "Day",
    system: "http://unitsofmeasure.org",
    code: "d",
  },
  whenPrepared: "2015-01-16T07:13:00+05:00",
  whenHandedOver: "2015-01-18T07:13:00+05:00",
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
            value: 4,
            unit: "ml",
            system: "http://unitsofmeasure.org",
            code: "ml",
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

export const Medicationdispense0324: MedicationDispense = {
  resourceType: "MedicationDispense",
  id: "meddisp0324",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0324</p><p><b>status</b>: completed</p><p><b>medication</b>: Nystex 100,000 UNT/GM Topical Ointment <span>(Details : {RxNorm code '884375' = 'Nystex 100,000 UNT/GM Topical Ointment', given as 'Nystex 100,000 UNT/GM Topical Ointment'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0321</a></p><p><b>type</b>: Refill - Part Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'RFP' = 'Refill - Part Fill', given as 'Refill - Part Fill'})</span></p><p><b>quantity</b>: 30 g<span> (Details: UCUM code g = 'g')</span></p><p><b>daysSupply</b>: 10 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 15/01/2015 10:20:00 AM</p><p><b>whenHandedOver</b>: 15/01/2015 4:20:00 PM</p><p><b>dosageInstruction</b>: </p></div>",
  },
  status: "completed",
  medicationCodeableConcept: {
    coding: [
      {
        system: "http://www.nlm.nih.gov/research/umls/rxnorm",
        code: "884375",
        display: "Nystex 100,000 UNT/GM Topical Ointment",
      },
    ],
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f006",
      },
    },
  ],
  authorizingPrescription: [
    {
      reference: "MedicationRequest/medrx0321",
    },
  ],
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFP",
        display: "Refill - Part Fill",
      },
    ],
  },
  quantity: {
    value: 30,
    system: "http://unitsofmeasure.org",
    code: "g",
  },
  daysSupply: {
    value: 10,
    unit: "Day",
    system: "http://unitsofmeasure.org",
    code: "d",
  },
  whenPrepared: "2015-01-15T10:20:00Z",
  whenHandedOver: "2015-01-15T16:20:00Z",
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

export const Medicationdispense0325: MedicationDispense = {
  resourceType: "MedicationDispense",
  id: "meddisp0325",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0325</p><p><b>status</b>: in-progress</p><p><b>medication</b>: fentanyl 25mcg/hour Patch, Extended Release (Apotex) <span>(Details : {http://hl7.org/fhir/sid/ndc code '60505-7001-2' = 'n/a', given as 'fentanyl 25mcg/hour Patch, Extended Release (Apotex)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0327</a></p><p><b>type</b>: Emergency Supply <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'EM' = 'Emergency Supply', given as 'Emergency Supply'})</span></p><p><b>quantity</b>: 5 PATCH<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code PATCH = 'Patch')</span></p><p><b>daysSupply</b>: 14 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 15/01/2015 10:20:00 AM</p><p><b>dosageInstruction</b>: </p></div>",
  },
  status: "in-progress",
  medicationCodeableConcept: {
    coding: [
      {
        system: "http://hl7.org/fhir/sid/ndc",
        code: "60505-7001-2",
        display: "fentanyl 25mcg/hour Patch, Extended Release (Apotex)",
      },
    ],
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f006",
      },
    },
  ],
  authorizingPrescription: [
    {
      reference: "MedicationRequest/medrx0327",
    },
  ],
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EM",
        display: "Emergency Supply",
      },
    ],
  },
  quantity: {
    value: 5,
    system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
    code: "PATCH",
  },
  daysSupply: {
    value: 14,
    unit: "Day",
    system: "http://unitsofmeasure.org",
    code: "d",
  },
  whenPrepared: "2015-01-15T10:20:00Z",
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

export const Medicationdispense0326: MedicationDispense = {
  resourceType: "MedicationDispense",
  id: "meddisp0326",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0326</p><p><b>status</b>: in-progress</p><p><b>medication</b>: Azithromycin 500mg oral tablet (Zithromax) <span>(Details : {RxNorm code '226827' = 'Zithromax 500 MG Oral Tablet', given as 'Azithromycin 500mg oral tablet (Zithromax)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0313</a></p><p><b>type</b>: trial Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'TF' = 'Trial Fill', given as 'trial Fill'})</span></p><p><b>quantity</b>: 5 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></p><p><b>daysSupply</b>: 5 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 15/01/2015 10:20:00 AM</p><p><b>dosageInstruction</b>: </p></div>",
  },
  status: "in-progress",
  medicationCodeableConcept: {
    coding: [
      {
        system: "http://www.nlm.nih.gov/research/umls/rxnorm",
        code: "226827",
        display: "Azithromycin 500mg oral tablet (Zithromax)",
      },
    ],
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f006",
      },
    },
  ],
  authorizingPrescription: [
    {
      reference: "MedicationRequest/medrx0313",
    },
  ],
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TF",
        display: "trial Fill",
      },
    ],
  },
  quantity: {
    value: 5,
    system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
    code: "TAB",
  },
  daysSupply: {
    value: 5,
    unit: "Day",
    system: "http://unitsofmeasure.org",
    code: "d",
  },
  whenPrepared: "2015-01-15T10:20:00Z",
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

export const Medicationdispense0327: MedicationDispense = {
  resourceType: "MedicationDispense",
  id: "meddisp0327",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0327</p><p><b>status</b>: completed</p><p><b>medication</b>: Proventil 0.09mg/actuat (Albuterol sulfate 0.108mg/actuat from mouthpiece) <span>(Details : {RxNorm code '746763' = 'Proventil HFA 90 MCG/INHAL Metered Dose Inhaler, 200 Actuations', given as 'Proventil 0.09mg/actuat (Albuterol sulfate 0.108mg/actuat from mouthpiece)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0321</a></p><p><b>type</b>: Trial Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'TF' = 'Trial Fill', given as 'Trial Fill'})</span></p><p><b>quantity</b>: 30 ml<span> (Details: UCUM code ml = 'ml')</span></p><p><b>daysSupply</b>: 30 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 15/01/2015 10:20:00 AM</p><p><b>whenHandedOver</b>: 15/01/2015 4:20:00 PM</p><p><b>dosageInstruction</b>: </p></div>",
  },
  status: "completed",
  medicationCodeableConcept: {
    coding: [
      {
        system: "http://www.nlm.nih.gov/research/umls/rxnorm",
        code: "746763",
        display:
          "Proventil 0.09mg/actuat (Albuterol sulfate 0.108mg/actuat from mouthpiece)",
      },
    ],
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f006",
      },
    },
  ],
  authorizingPrescription: [
    {
      reference: "MedicationRequest/medrx0321",
    },
  ],
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TF",
        display: "Trial Fill",
      },
    ],
  },
  quantity: {
    value: 30,
    system: "http://unitsofmeasure.org",
    code: "ml",
  },
  daysSupply: {
    value: 30,
    unit: "Day",
    system: "http://unitsofmeasure.org",
    code: "d",
  },
  whenPrepared: "2015-01-15T10:20:00Z",
  whenHandedOver: "2015-01-15T16:20:00Z",
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

export const Medicationdispense0328: MedicationDispense = {
  resourceType: "MedicationDispense",
  id: "meddisp0328",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0328</p><p><b>status</b>: in-progress</p><p><b>medication</b>: Nasonex 0.05mg/ACTUAT Nasal Inhaler <span>(Details : {RxNorm code '1797870' = 'NASONEX 50 MCG/ACTUAT Metered Dose Nasal Spray', given as 'Nasonex 0.05mg/ACTUAT Nasal Inhaler'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0321</a></p><p><b>type</b>: Emergency Supply <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'EM' = 'Emergency Supply', given as 'Emergency Supply'})</span></p><p><b>quantity</b>: 30 ml<span> (Details: UCUM code ml = 'ml')</span></p><p><b>daysSupply</b>: 30 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 15/01/2015 10:20:00 AM</p><p><b>dosageInstruction</b>: </p></div>",
  },
  status: "in-progress",
  medicationCodeableConcept: {
    coding: [
      {
        system: "http://www.nlm.nih.gov/research/umls/rxnorm",
        code: "1797870",
        display: "Nasonex 0.05mg/ACTUAT Nasal Inhaler",
      },
    ],
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f006",
      },
    },
  ],
  authorizingPrescription: [
    {
      reference: "MedicationRequest/medrx0321",
    },
  ],
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EM",
        display: "Emergency Supply",
      },
    ],
  },
  quantity: {
    value: 30,
    system: "http://unitsofmeasure.org",
    code: "ml",
  },
  daysSupply: {
    value: 30,
    unit: "Day",
    system: "http://unitsofmeasure.org",
    code: "d",
  },
  whenPrepared: "2015-01-15T10:20:00Z",
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

export const Medicationdispense0329: MedicationDispense = {
  resourceType: "MedicationDispense",
  id: "meddisp0329",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0329</p><p><b>contained</b>: </p><p><b>status</b>: completed</p><p><b>medication</b>: id: med0319; Ointment <span>(Details : {SNOMED CT code '385101003' = 'Ointment', given as 'Ointment'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0329</a></p><p><b>type</b>: Refill - Part Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'RFP' = 'Refill - Part Fill', given as 'Refill - Part Fill'})</span></p><p><b>quantity</b>: 30 g<span> (Details: UCUM code g = 'g')</span></p><p><b>daysSupply</b>: 10 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 15/01/2015 10:20:00 AM</p><p><b>whenHandedOver</b>: 15/01/2015 4:20:00 PM</p><p><b>dosageInstruction</b>: </p></div>",
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
                display: "Hydrocortisone (substance)",
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
  status: "completed",
  medicationReference: {
    reference: "#med0319",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f006",
      },
    },
  ],
  authorizingPrescription: [
    {
      reference: "MedicationRequest/medrx0329",
    },
  ],
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFP",
        display: "Refill - Part Fill",
      },
    ],
  },
  quantity: {
    value: 30,
    system: "http://unitsofmeasure.org",
    code: "g",
  },
  daysSupply: {
    value: 10,
    unit: "Day",
    system: "http://unitsofmeasure.org",
    code: "d",
  },
  whenPrepared: "2015-01-15T10:20:00Z",
  whenHandedOver: "2015-01-15T16:20:00Z",
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

export const Medicationdispense0330: MedicationDispense = {
  resourceType: "MedicationDispense",
  id: "meddisp0330",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0330</p><p><b>contained</b>: </p><p><b>status</b>: in-progress</p><p><b>medication</b>: Coumadin 5mg tablet. Generated Summary: id: med0351; Coumadin 5mg tablet <span>(Details : {http://hl7.org/fhir/sid/ndc code '0056-1072-70' = 'n/a', given as 'Coumadin 5mg tablet'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0331</a></p><p><b>type</b>: Daily Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'DF' = 'Daily Fill', given as 'Daily Fill'})</span></p><p><b>quantity</b>: 1 415818006<span> (Details: SNOMED CT code 415818006 = 'Vial')</span></p><p><b>daysSupply</b>: 1 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 15/01/2015 10:20:00 AM</p><p><b>dosageInstruction</b>: </p></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0351",
      code: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ndc",
            code: "0056-1072-70",
            display: "Coumadin 5mg tablet",
          },
        ],
      },
    },
  ],
  status: "in-progress",
  medicationReference: {
    reference: "#med0351",
    display: "Coumadin 5mg tablet",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f006",
      },
    },
  ],
  authorizingPrescription: [
    {
      reference: "MedicationRequest/medrx0331",
    },
  ],
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DF",
        display: "Daily Fill",
      },
    ],
  },
  quantity: {
    value: 1,
    system: "http://snomed.info/sct",
    code: "415818006",
  },
  daysSupply: {
    value: 1,
    unit: "Day",
    system: "http://unitsofmeasure.org",
    code: "d",
  },
  whenPrepared: "2015-01-15T10:20:00Z",
  dosageInstruction: [
    {
      sequence: 1,
      text: "7mg (=one 5mg tablet PLUS one 2mg tablet) once daily",
      additionalInstruction: [
        {
          text: "Take along with one 5mg Coumadin tablet for a total daily dose of 7mg as prescribed by physician",
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
            value: 5,
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

export const Medicationdispense0331: MedicationDispense = {
  resourceType: "MedicationDispense",
  id: "meddisp0331",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0331</p><p><b>contained</b>: </p><p><b>status</b>: in-progress</p><p><b>medication</b>: Coumadin 2mg tablet. Generated Summary: id: med0352; Coumadin 2mg tablet <span>(Details : {http://hl7.org/fhir/sid/ndc code '0056-0170-70' = 'n/a', given as 'Coumadin 2mg tablet'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0331</a></p><p><b>type</b>: Daily Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'DF' = 'Daily Fill', given as 'Daily Fill'})</span></p><p><b>quantity</b>: 1 415818006<span> (Details: SNOMED CT code 415818006 = 'Vial')</span></p><p><b>daysSupply</b>: 1 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 15/01/2015 10:20:00 AM</p><p><b>dosageInstruction</b>: </p></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0352",
      code: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ndc",
            code: "0056-0170-70",
            display: "Coumadin 2mg tablet",
          },
        ],
      },
    },
  ],
  status: "in-progress",
  medicationReference: {
    reference: "#med0352",
    display: "Coumadin 2mg tablet",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f006",
      },
    },
  ],
  authorizingPrescription: [
    {
      reference: "MedicationRequest/medrx0331",
    },
  ],
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DF",
        display: "Daily Fill",
      },
    ],
  },
  quantity: {
    value: 1,
    system: "http://snomed.info/sct",
    code: "415818006",
  },
  daysSupply: {
    value: 1,
    unit: "Day",
    system: "http://unitsofmeasure.org",
    code: "d",
  },
  whenPrepared: "2015-01-15T10:20:00Z",
  dosageInstruction: [
    {
      sequence: 1,
      text: "7mg (=one 5mg tablet PLUS one 2mg tablet) once daily",
      additionalInstruction: [
        {
          text: "Take along with one 2mg Coumadin tablet for a total daily dose of 7mg as prescribed by physician",
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
            value: 2,
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

export const Medicationdispenseexample8: MedicationDispense = {
  resourceType: "MedicationDispense",
  id: "meddisp008",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp008</p><p><b>contained</b>: </p><p><b>status</b>: completed</p><p><b>medication</b>: id: medexample015; Capecitabine 500mg oral tablet (Xeloda) <span>(Details : {RxNorm code '213293' = 'Xeloda 500 MG Oral Tablet', given as 'Capecitabine 500mg oral tablet (Xeloda)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0309</a></p><p><b>dosageInstruction</b>: </p></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "medexample015",
      code: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "213293",
            display: "Capecitabine 500mg oral tablet (Xeloda)",
          },
        ],
      },
    },
  ],
  status: "completed",
  medicationReference: {
    reference: "#medexample015",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f006",
      },
    },
  ],
  authorizingPrescription: [
    {
      reference: "MedicationRequest/medrx0309",
    },
  ],
  dosageInstruction: [
    {
      sequence: 1,
      timing: {
        repeat: {
          frequency: 2,
          period: 21,
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
