import type { MedicationAdministration } from "../../src/v4.0.1/medicationadministration/types";

export const Medicationadministration0301: MedicationAdministration = {
  resourceType: "MedicationAdministration",
  id: "medadmin0301",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medadmin0301</p><p><b>contained</b>: , </p><p><b>status</b>: in-progress</p><p><b>medication</b>: id: med0301; Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE) <span>(Details : {http://hl7.org/fhir/sid/ndc code '0069-2587-10' = 'n/a', given as 'Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>context</b>: <a>encounter who leads to this prescription</a></p><p><b>effective</b>: 15/01/2015 2:30:00 PM --&gt; (ongoing)</p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Patrick Pump</a></td></tr></table><p><b>reasonCode</b>: Given as Ordered <span>(Details : {http://terminology.hl7.org/CodeSystem/reason-medication-given code 'b' = 'Given as Ordered', given as 'Given as Ordered'})</span></p><p><b>request</b>: <a>MedicationRequest/medrx0318</a></p><h3>Dosages</h3><table><tr><td>-</td><td><b>Text</b></td><td><b>Route</b></td><td><b>Method</b></td><td><b>Dose</b></td></tr><tr><td>*</td><td>500mg IV q6h x 3 days</td><td>Intravenous route (qualifier value) <span>(Details : {SNOMED CT code '47625008' = 'Intravenous route', given as 'Intravenous route (qualifier value)'})</span></td><td>IV Push <span>(Details )</span></td><td>500 mg<span> (Details: UCUM code mg = 'mg')</span></td></tr></table><p><b>eventHistory</b>: Author's Signature. Generated Summary: id: signature; recorded: 01/02/2017 5:23:07 PM; </p></div>",
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
  status: "in-progress",
  medicationReference: {
    reference: "#med0301",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  context: {
    reference: "Encounter/f001",
    display: "encounter who leads to this prescription",
  },
  effectivePeriod: {
    start: "2015-01-15T14:30:00+01:00",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f007",
        display: "Patrick Pump",
      },
    },
  ],
  reasonCode: [
    {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/reason-medication-given",
          code: "b",
          display: "Given as Ordered",
        },
      ],
    },
  ],
  request: {
    reference: "MedicationRequest/medrx0318",
  },
  dosage: {
    text: "500mg IV q6h x 3 days",
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
      text: "IV Push",
    },
    dose: {
      value: 500,
      unit: "mg",
      system: "http://unitsofmeasure.org",
      code: "mg",
    },
  },
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

export const Medicationadministration0302: MedicationAdministration = {
  resourceType: "MedicationAdministration",
  id: "medadmin0302",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medadmin0302</p><p><b>contained</b>: </p><p><b>partOf</b>: <a>Procedure/biopsy</a></p><p><b>status</b>: completed</p><p><b>category</b>: Inpatient <span>(Details : {http://terminology.hl7.org/CodeSystem/medication-admin-category code 'inpatient' = 'Inpatient', given as 'Inpatient'})</span></p><p><b>medication</b>: id: med0317; Injection Solution (qualifier value) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection Solution (qualifier value)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>context</b>: <a>encounter who leads to this prescription</a></p><p><b>effective</b>: 15/01/2015 4:30:00 AM --&gt; 15/01/2015 2:30:00 PM</p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Patrick Pump</a></td></tr></table><p><b>reasonCode</b>: Given as Ordered <span>(Details : {http://terminology.hl7.org/CodeSystem/reason-medication-given code 'b' = 'Given as Ordered', given as 'Given as Ordered'})</span></p><p><b>request</b>: <a>MedicationRequest/medrx0322</a></p><h3>Dosages</h3><table><tr><td>-</td><td><b>Text</b></td><td><b>Site</b></td><td><b>Route</b></td><td><b>Method</b></td><td><b>Dose</b></td><td><b>Rate[x]</b></td></tr><tr><td>*</td><td>KCl 20 mEq in 1 L 0.9%NS IV at 100 ml/hr</td><td>Structure of ligament of left superior vena cava <span>(Details : {SNOMED CT code '6073002' = 'Ligament of left superior vena cava', given as 'Structure of ligament of left superior vena cava'})</span></td><td>Intravenous route (qualifier value) <span>(Details : {SNOMED CT code '47625008' = 'Intravenous route', given as 'Intravenous route (qualifier value)'})</span></td><td>Continuous infusion <span>(Details )</span></td><td>20 meq<span> (Details: UCUM code meq = 'meq')</span></td><td>100 mL<span> (Details: UCUM code mL = 'mL')</span>/1 h<span> (Details: UCUM code h = 'h')</span></td></tr></table></div>",
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
              code: "meq",
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
  partOf: [
    {
      reference: "Procedure/biopsy",
    },
  ],
  status: "completed",
  category: {
    coding: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medication-admin-category",
        code: "inpatient",
        display: "Inpatient",
      },
    ],
  },
  medicationReference: {
    reference: "#med0317",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  context: {
    reference: "Encounter/f001",
    display: "encounter who leads to this prescription",
  },
  effectivePeriod: {
    start: "2015-01-15T04:30:00+01:00",
    end: "2015-01-15T14:30:00+01:00",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f007",
        display: "Patrick Pump",
      },
    },
  ],
  reasonCode: [
    {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/reason-medication-given",
          code: "b",
          display: "Given as Ordered",
        },
      ],
    },
  ],
  request: {
    reference: "MedicationRequest/medrx0322",
  },
  dosage: {
    text: "KCl 20 mEq in 1 L 0.9%NS IV at 100 ml/hr",
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
          code: "47625008",
          display: "Intravenous route (qualifier value)",
        },
      ],
    },
    method: {
      text: "Continuous infusion",
    },
    dose: {
      value: 20,
      unit: "meq",
      system: "http://unitsofmeasure.org",
      code: "meq",
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

export const Medicationadministration0303: MedicationAdministration = {
  resourceType: "MedicationAdministration",
  id: "medadmin0303",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medadmin0303</p><p><b>contained</b>: </p><p><b>status</b>: entered-in-error</p><p><b>medication</b>: id: med0303; Zosyn (piperacillin/tazobactam) 4.5gm injection <span>(Details : {http://hl7.org/fhir/sid/ndc code '0206-8862-02' = 'n/a', given as 'Zosyn (piperacillin/tazobactam) 4.5gm injection'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>context</b>: <a>encounter who leads to this prescription</a></p><p><b>effective</b>: 15/01/2015 4:30:00 AM --&gt; 15/01/2015 2:30:00 PM</p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Patrick Pump</a></td></tr></table><p><b>request</b>: <a>MedicationRequest/medrx0319</a></p><h3>Dosages</h3><table><tr><td>-</td><td><b>Text</b></td><td><b>Route</b></td><td><b>Dose</b></td><td><b>Rate[x]</b></td></tr><tr><td>*</td><td>4.5 grams in D5W 250 ml. IV every 6 hours. Infuse over 30 min at 8L/min </td><td>Intravenous route (qualifier value) <span>(Details : {SNOMED CT code '47625008' = 'Intravenous route', given as 'Intravenous route (qualifier value)'})</span></td><td>4.5 g<span> (Details: UCUM code g = 'g')</span></td><td>8 ml<span> (Details: UCUM code ml = 'ml')</span>/1 min<span> (Details: UCUM code min = 'min')</span></td></tr></table></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0303",
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
  status: "entered-in-error",
  medicationReference: {
    reference: "#med0303",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  context: {
    reference: "Encounter/f001",
    display: "encounter who leads to this prescription",
  },
  effectivePeriod: {
    start: "2015-01-15T04:30:00+01:00",
    end: "2015-01-15T14:30:00+01:00",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f007",
        display: "Patrick Pump",
      },
    },
  ],
  request: {
    reference: "MedicationRequest/medrx0319",
  },
  dosage: {
    text: "4.5 grams in D5W 250 ml. IV every 6 hours. Infuse over 30 min at 8L/min ",
    route: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "47625008",
          display: "Intravenous route (qualifier value)",
        },
      ],
    },
    dose: {
      value: 4.5,
      unit: "g",
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

export const Medicationadministration0304: MedicationAdministration = {
  resourceType: "MedicationAdministration",
  id: "medadmin0304",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medadmin0304</p><p><b>contained</b>: </p><p><b>status</b>: completed</p><p><b>medication</b>: id: med0303; Alemtuzumab 10mg/ml (Lemtrada) <span>(Details : {RxNorm code '1594660' = 'alemtuzumab 10 MG/ML [Lemtrada]', given as 'Alemtuzumab 10mg/ml (Lemtrada)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>context</b>: <a>encounter who leads to this prescription</a></p><p><b>effective</b>: 15/01/2015 4:30:00 AM --&gt; 15/01/2015 2:30:00 PM</p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Patrick Pump</a></td></tr></table><p><b>reasonReference</b>: <a>Condition/f202</a></p><p><b>request</b>: <a>MedicationRequest/medrx0319</a></p><h3>Dosages</h3><table><tr><td>-</td><td><b>Text</b></td><td><b>Route</b></td><td><b>Method</b></td><td><b>Dose</b></td></tr><tr><td>*</td><td>Rapid daily-dose escalation, until tolerated, from 3 mg/d, and then 10 mg/d, to the recommended maintenance dose of 30 mg IV over 120 min, 3 times per wk on alternate days for up to 12 wk</td><td>Intravenous route (qualifier value) <span>(Details : {SNOMED CT code '47625008' = 'Intravenous route', given as 'Intravenous route (qualifier value)'})</span></td><td>Inject - dosing instruction imperative (qualifier value) <span>(Details : {SNOMED CT code '422145002' = 'Inject', given as 'Inject - dosing instruction imperative (qualifier value)'})</span></td><td>3 mg<span> (Details: UCUM code mg = 'mg')</span></td></tr></table></div>",
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
  status: "completed",
  medicationReference: {
    reference: "#med0303",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  context: {
    reference: "Encounter/f001",
    display: "encounter who leads to this prescription",
  },
  effectivePeriod: {
    start: "2015-01-15T04:30:00+01:00",
    end: "2015-01-15T14:30:00+01:00",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f007",
        display: "Patrick Pump",
      },
    },
  ],
  reasonReference: [
    {
      reference: "Condition/f202",
    },
  ],
  request: {
    reference: "MedicationRequest/medrx0319",
  },
  dosage: {
    text: "Rapid daily-dose escalation, until tolerated, from 3 mg/d, and then 10 mg/d, to the recommended maintenance dose of 30 mg IV over 120 min, 3 times per wk on alternate days for up to 12 wk",
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
    dose: {
      value: 3,
      unit: "mg",
      system: "http://unitsofmeasure.org",
      code: "mg",
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

export const Medicationadministration0305: MedicationAdministration = {
  resourceType: "MedicationAdministration",
  id: "medadmin0305",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medadmin0305</p><p><b>contained</b>: </p><p><b>instantiates</b>: <a>http://www.bccancer.bc.ca/chemotherapy-protocols-site/Documents/Lymphoma-Myeloma/ULYBRENTUX%20Protocol_1Jun2017.pdf</a></p><p><b>status</b>: completed</p><p><b>medication</b>: id: med0306; Adcetris <span>(Details : {http://hl7.org/fhir/sid/ndc code '51144-050-01' = 'n/a', given as 'Adcetris'})</span>; Lyophilized powder for injectable solution (qualifier value)  <span>(Details : {SNOMED CT code '421637006' = 'Lyophilised powder for injectable solution', given as 'Lyophilized powder for injectable solution (qualifier value) '})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>context</b>: <a>encounter who leads to this prescription</a></p><p><b>effective</b>: 15/01/2015 4:30:00 AM --&gt; 15/01/2015 2:30:00 PM</p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Patrick Pump</a></td></tr></table><p><b>request</b>: <a>MedicationRequest/medrx0316</a></p><h3>Dosages</h3><table><tr><td>-</td><td><b>Text</b></td><td><b>Route</b></td><td><b>Dose</b></td><td><b>Rate[x]</b></td></tr><tr><td>*</td><td>1.8 mg/kg IV infusion over 30 minutes</td><td>Intravenous <span>(Details : {SNOMED CT code '255560000' = 'Intravenous', given as 'Intravenous'})</span></td><td>1.8 mg/kg<span> (Details: UCUM code mg/kg = 'mg/kg')</span></td><td>20 min<span> (Details: UCUM code min = 'min')</span></td></tr></table></div>",
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
      batch: {
        lotNumber: "12345",
        expirationDate: "2019-10-31",
      },
    },
  ],
  instantiates: [
    "http://www.bccancer.bc.ca/chemotherapy-protocols-site/Documents/Lymphoma-Myeloma/ULYBRENTUX%20Protocol_1Jun2017.pdf",
  ],
  status: "completed",
  medicationReference: {
    reference: "#med0306",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  context: {
    reference: "Encounter/f001",
    display: "encounter who leads to this prescription",
  },
  effectivePeriod: {
    start: "2015-01-15T04:30:00+01:00",
    end: "2015-01-15T14:30:00+01:00",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f007",
        display: "Patrick Pump",
      },
    },
  ],
  request: {
    reference: "MedicationRequest/medrx0316",
  },
  dosage: {
    text: "1.8 mg/kg IV infusion over 30 minutes",
    route: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "255560000",
          display: "Intravenous",
        },
      ],
    },
    dose: {
      value: 1.8,
      unit: "mg/kg",
      system: "http://unitsofmeasure.org",
      code: "mg/kg",
    },
    rateQuantity: {
      value: 20,
      unit: "min",
      system: "http://unitsofmeasure.org",
      code: "min",
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

export const Medicationadministration0306: MedicationAdministration = {
  resourceType: "MedicationAdministration",
  id: "medadmin0306",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medadmin0306</p><p><b>contained</b>: </p><p><b>status</b>: completed</p><p><b>medication</b>: id: med0306; Azithromycin 250mg capsule (product) <span>(Details : {SNOMED CT code '324252006' = 'Azithromycin 250mg capsule', given as 'Azithromycin 250mg capsule (product)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>context</b>: <a>encounter who leads to this prescription</a></p><p><b>effective</b>: 15/01/2015 4:30:00 AM --&gt; 15/01/2015 2:30:00 PM</p><h3>Performers</h3><table><tr><td>-</td><td><b>Function</b></td><td><b>Actor</b></td></tr><tr><td>*</td><td>Performer <span>(Details : {http://terminology.hl7.org/CodeSystem/med-admin-perform-function code 'performer' = 'Performer', given as 'Performer'})</span></td><td><a>Patrick Pump</a></td></tr></table><p><b>request</b>: <a>MedicationRequest/medrx0302</a></p><h3>Dosages</h3><table><tr><td>-</td><td><b>Text</b></td><td><b>Route</b></td><td><b>Method</b></td><td><b>Dose</b></td></tr><tr><td>*</td><td>Two tablets at once</td><td>Oral Route <span>(Details : {SNOMED CT code '26643006' = 'Oral route', given as 'Oral Route'})</span></td><td>Swallow - dosing instruction imperative (qualifier value) <span>(Details : {SNOMED CT code '421521009' = 'Swallow', given as 'Swallow - dosing instruction imperative (qualifier value)'})</span></td><td>2 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></td></tr></table></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0306",
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
  status: "completed",
  medicationReference: {
    reference: "#med0306",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  context: {
    reference: "Encounter/f001",
    display: "encounter who leads to this prescription",
  },
  effectivePeriod: {
    start: "2015-01-15T04:30:00+01:00",
    end: "2015-01-15T14:30:00+01:00",
  },
  performer: [
    {
      function: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/med-admin-perform-function",
            code: "performer",
            display: "Performer",
          },
        ],
      },
      actor: {
        reference: "Practitioner/f007",
        display: "Patrick Pump",
      },
    },
  ],
  request: {
    reference: "MedicationRequest/medrx0302",
  },
  dosage: {
    text: "Two tablets at once",
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
          display: "Swallow - dosing instruction imperative (qualifier value)",
        },
      ],
    },
    dose: {
      value: 2,
      unit: "TAB",
      system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      code: "TAB",
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

export const Medicationadministration0307: MedicationAdministration = {
  resourceType: "MedicationAdministration",
  id: "medadmin0307",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medadmin0307</p><p><b>contained</b>: </p><p><b>status</b>: completed</p><p><b>medication</b>: id: med0313; Lorazepam 2mg/ml injection solution 1ml vial (product) <span>(Details : {SNOMED CT code '400621001' = 'Lorazepam 2mg/mL injection solution 1mL vial', given as 'Lorazepam 2mg/ml injection solution 1ml vial (product)'})</span>; Injection solution (qualifier value) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection solution (qualifier value)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>context</b>: <a>encounter who leads to this prescription</a></p><p><b>effective</b>: 15/01/2015 4:30:00 AM --&gt; 15/01/2015 2:30:00 PM</p><h3>Performers</h3><table><tr><td>-</td><td><b>Function</b></td><td><b>Actor</b></td></tr><tr><td>*</td><td>Performer <span>(Details : {http://terminology.hl7.org/CodeSystem/med-admin-perform-function code 'performer' = 'Performer', given as 'Performer'})</span></td><td><a>Patrick Pump</a></td></tr></table><p><b>request</b>: <a>MedicationRequest/medrx0315</a></p><p><b>device</b>: <a>Device/f001</a></p><h3>Dosages</h3><table><tr><td>-</td><td><b>Text</b></td><td><b>Route</b></td><td><b>Method</b></td><td><b>Dose</b></td><td><b>Rate[x]</b></td></tr><tr><td>*</td><td>0.05 - 0.1mg/kg IV over 2-5 minutes every 15 minutes as needed</td><td>Intravenous <span>(Details : {SNOMED CT code '255560000' = 'Intravenous', given as 'Intravenous'})</span></td><td>Push - dosing instruction imperative (qualifier value) <span>(Details : {SNOMED CT code '420620005' = 'Push', given as 'Push - dosing instruction imperative (qualifier value)'})</span></td><td>7 mg<span> (Details: UCUM code mg = 'mg')</span></td><td>4 min<span> (Details: UCUM code min = 'min')</span></td></tr></table></div>",
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
  status: "completed",
  medicationReference: {
    reference: "#med0313",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  context: {
    reference: "Encounter/f001",
    display: "encounter who leads to this prescription",
  },
  effectivePeriod: {
    start: "2015-01-15T04:30:00+01:00",
    end: "2015-01-15T14:30:00+01:00",
  },
  performer: [
    {
      function: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/med-admin-perform-function",
            code: "performer",
            display: "Performer",
          },
        ],
      },
      actor: {
        reference: "Practitioner/f007",
        display: "Patrick Pump",
      },
    },
  ],
  request: {
    reference: "MedicationRequest/medrx0315",
  },
  device: [
    {
      reference: "Device/f001",
    },
  ],
  dosage: {
    text: "0.05 - 0.1mg/kg IV over 2-5 minutes every 15 minutes as needed",
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
    dose: {
      value: 7,
      unit: "mg",
      system: "http://unitsofmeasure.org",
      code: "mg",
    },
    rateQuantity: {
      value: 4,
      unit: "min",
      system: "http://unitsofmeasure.org",
      code: "min",
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

export const Medicationadministration0308: MedicationAdministration = {
  resourceType: "MedicationAdministration",
  id: "medadmin0308",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medadmin0308</p><p><b>status</b>: completed</p><p><b>medication</b>: Lantus 100 unit/ml injectable solution <span>(Details : {RxNorm code '285018' = 'Lantus 100 UNT/ML Injectable Solution', given as 'Lantus 100 unit/ml injectable solution'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>effective</b>: 15/01/2015 4:30:00 AM --&gt; 15/01/2015 2:30:00 PM</p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Patrick Pump</a></td></tr></table><p><b>request</b>: <a>MedicationRequest/medrx0320</a></p><h3>Dosages</h3><table><tr><td>-</td><td><b>Text</b></td><td><b>Route</b></td><td><b>Dose</b></td></tr><tr><td>*</td><td>20 Units SC before breakfast</td><td>Subcutaneous (qualifier value) <span>(Details : {SNOMED CT code '263887005' = 'Subcutaneous', given as 'Subcutaneous (qualifier value)'})</span></td><td>20 U<span> (Details: UCUM code U = 'U')</span></td></tr></table></div>",
  },
  status: "completed",
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
  effectivePeriod: {
    start: "2015-01-15T04:30:00+01:00",
    end: "2015-01-15T14:30:00+01:00",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f007",
        display: "Patrick Pump",
      },
    },
  ],
  request: {
    reference: "MedicationRequest/medrx0320",
  },
  dosage: {
    text: "20 Units SC before breakfast",
    route: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "263887005",
          display: "Subcutaneous (qualifier value)",
        },
      ],
    },
    dose: {
      value: 20,
      unit: "U",
      system: "http://unitsofmeasure.org",
      code: "U",
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

export const Medicationadministration0309: MedicationAdministration = {
  resourceType: "MedicationAdministration",
  id: "medadmin0309",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medadmin0309</p><p><b>contained</b>: </p><p><b>status</b>: completed</p><p><b>medication</b>: id: med0318; Injection emulsion <span>(Details : {SNOMED CT code '385221006' = 'Injection emulsion', given as 'Injection emulsion'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>effective</b>: 15/01/2015 10:03:00 PM --&gt; 16/01/2015 2:03:00 AM</p><h3>Performers</h3><table><tr><td>-</td><td><b>Function</b></td><td><b>Actor</b></td></tr><tr><td>*</td><td>Performer <span>(Details : {http://terminology.hl7.org/CodeSystem/med-admin-perform-function code 'performer' = 'Performer', given as 'Performer'})</span></td><td><a>Patrick Pump</a></td></tr></table><p><b>request</b>: <a>MedicationRequest/medrx0323</a></p><p><b>device</b>: <a>Device/f001</a></p><h3>Dosages</h3><table><tr><td>-</td><td><b>Text</b></td><td><b>Site</b></td><td><b>Route</b></td><td><b>Method</b></td><td><b>Dose</b></td><td><b>Rate[x]</b></td></tr><tr><td>*</td><td>1000mL infused at 50ml/hour for 4 hours - hung at 2200 hours</td><td>Structure of ligament of left superior vena cava <span>(Details : {SNOMED CT code '6073002' = 'Ligament of left superior vena cava', given as 'Structure of ligament of left superior vena cava'})</span></td><td>Intravenous <span>(Details : {SNOMED CT code '255560000' = 'Intravenous', given as 'Intravenous'})</span></td><td>PICC line <span>(Details )</span></td><td>1000 mL<span> (Details: UCUM code mL = 'mL')</span></td><td>50 mL<span> (Details: UCUM code mL = 'mL')</span>/1 h<span> (Details: UCUM code h = 'h')</span></td></tr></table></div>",
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
  status: "completed",
  medicationReference: {
    reference: "#med0318",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  effectivePeriod: {
    start: "2015-01-15T22:03:00+01:00",
    end: "2015-01-16T02:03:00+01:00",
  },
  performer: [
    {
      function: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/med-admin-perform-function",
            code: "performer",
            display: "Performer",
          },
        ],
      },
      actor: {
        reference: "Practitioner/f007",
        display: "Patrick Pump",
      },
    },
  ],
  request: {
    reference: "MedicationRequest/medrx0323",
  },
  device: [
    {
      reference: "Device/f001",
    },
  ],
  dosage: {
    text: "1000mL infused at 50ml/hour for 4 hours - hung at 2200 hours",
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
    dose: {
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

export const Medicationadministration0310: MedicationAdministration = {
  resourceType: "MedicationAdministration",
  id: "medadmin0310",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medadmin0310</p><p><b>contained</b>: </p><p><b>status</b>: completed</p><p><b>medication</b>: id: med0304; Myleran 2mg tablet, film coated <span>(Details : {http://hl7.org/fhir/sid/ndc code '76388-713-25' = 'n/a', given as 'Myleran 2mg tablet, film coated'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>effective</b>: 15/01/2015 10:03:00 PM --&gt; 16/01/2015 2:03:00 AM</p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Patrick Pump</a></td></tr></table><p><b>request</b>: <a>MedicationRequest/medrx0306</a></p><h3>Dosages</h3><table><tr><td>-</td><td><b>Text</b></td><td><b>Route</b></td><td><b>Dose</b></td></tr><tr><td>*</td><td>6 mg PO daily for remission induction; adjust dosage to white blood cell (WBC) count.  With hold treatment if WBC is less than 15,000/µL; resume when WBC is greater than 50,000/µL</td><td>Oral route (qualifier value) <span>(Details : {SNOMED CT code '26643006' = 'Oral route', given as 'Oral route (qualifier value)'})</span></td><td>6 mg<span> (Details: UCUM code mg = 'mg')</span></td></tr></table></div>",
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
  status: "completed",
  medicationReference: {
    reference: "#med0304",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  effectivePeriod: {
    start: "2015-01-15T22:03:00+01:00",
    end: "2015-01-16T02:03:00+01:00",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f007",
        display: "Patrick Pump",
      },
    },
  ],
  request: {
    reference: "MedicationRequest/medrx0306",
  },
  dosage: {
    text: "6 mg PO daily for remission induction; adjust dosage to white blood cell (WBC) count.  With hold treatment if WBC is less than 15,000/µL; resume when WBC is greater than 50,000/µL",
    route: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "26643006",
          display: "Oral route (qualifier value)",
        },
      ],
    },
    dose: {
      value: 6,
      unit: "mg",
      system: "http://unitsofmeasure.org",
      code: "mg",
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

export const Medicationadministration0311: MedicationAdministration = {
  resourceType: "MedicationAdministration",
  id: "medadmin0311",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medadmin0311</p><p><b>contained</b>: </p><p><b>status</b>: completed</p><p><b>medication</b>: id: med0304; Alprazolam 0.25mg Oral Tablet <span>(Details : {RxNorm code '308047' = 'ALPRAZolam 0.25 MG Oral Tablet', given as 'Alprazolam 0.25mg Oral Tablet'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>effective</b>: 15/01/2015 10:03:00 PM --&gt; 16/01/2015 2:03:00 AM</p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Patrick Pump</a></td></tr></table><p><b>reasonCode</b>: Dysmenorrhea <span>(Details : {SNOMED CT code '266599000' = 'Period pain', given as 'Dysmenorrhea'})</span></p><p><b>request</b>: <a>MedicationRequest/medrx0305</a></p><h3>Dosages</h3><table><tr><td>-</td><td><b>Text</b></td><td><b>Route</b></td><td><b>Dose</b></td></tr><tr><td>*</td><td>0.25mg PO every 6-12 hours as needed for menses from Jan 15-20, 2015.  Do not exceed more than 4mg per day</td><td>Oral Route <span>(Details : {SNOMED CT code '26643006' = 'Oral route', given as 'Oral Route'})</span></td><td>1 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></td></tr></table></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0304",
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
  status: "completed",
  medicationReference: {
    reference: "#med0304",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  effectivePeriod: {
    start: "2015-01-15T22:03:00+01:00",
    end: "2015-01-16T02:03:00+01:00",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f007",
        display: "Patrick Pump",
      },
    },
  ],
  reasonCode: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "266599000",
          display: "Dysmenorrhea",
        },
      ],
    },
  ],
  request: {
    reference: "MedicationRequest/medrx0305",
  },
  dosage: {
    text: "0.25mg PO every 6-12 hours as needed for menses from Jan 15-20, 2015.  Do not exceed more than 4mg per day",
    route: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "26643006",
          display: "Oral Route",
        },
      ],
    },
    dose: {
      value: 1,
      unit: "TAB",
      system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      code: "TAB",
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

export const Medicationadministration0312: MedicationAdministration = {
  resourceType: "MedicationAdministration",
  id: "medadmin0312",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medadmin0312</p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>medication</b>: Fentanyl 25micrograms/hour patch (product) <span>(Details : {SNOMED CT code '333919005' = 'Fentanyl 25micrograms/hour patch', given as 'Fentanyl 25micrograms/hour patch (product)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>effective</b>: 15/01/2015 10:03:00 PM --&gt; 16/01/2015 2:03:00 AM</p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Patrick Pump</a></td></tr></table><p><b>request</b>: <a>MedicationRequest/medrx0305</a></p><h3>Dosages</h3><table><tr><td>-</td><td><b>Text</b></td><td><b>Dose</b></td></tr><tr><td>*</td><td>apply one patch three times per week</td><td>1 patch<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code patch = 'patch')</span></td></tr></table></div>",
  },
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/administrations",
      value: "12345689",
    },
  ],
  status: "completed",
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
  effectivePeriod: {
    start: "2015-01-15T22:03:00+01:00",
    end: "2015-01-16T02:03:00+01:00",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f007",
        display: "Patrick Pump",
      },
    },
  ],
  request: {
    reference: "MedicationRequest/medrx0305",
  },
  dosage: {
    text: "apply one patch three times per week",
    dose: {
      value: 1,
      unit: "patch",
      system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      code: "patch",
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

export const Medicationadministration0313: MedicationAdministration = {
  resourceType: "MedicationAdministration",
  id: "medadmin0313",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medadmin0313</p><p><b>status</b>: completed</p><p><b>medication</b>: Paracetamol 240mg suppository (product) <span>(Details : {SNOMED CT code '322254008' = 'Paracetamol 240mg suppository', given as 'Paracetamol 240mg suppository (product)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>effective</b>: 15/01/2015 10:03:00 PM --&gt; 16/01/2015 2:03:00 AM</p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Patrick Pump</a></td></tr></table><p><b>reasonCode</b>: Emergency <span>(Details : {http://terminology.hl7.org/CodeSystem/reason-medication-given code 'c' = 'Emergency', given as 'Emergency'})</span></p><p><b>request</b>: <a>MedicationRequest/medrx0324</a></p><h3>Dosages</h3><table><tr><td>-</td><td><b>Text</b></td><td><b>Site</b></td><td><b>Dose</b></td></tr><tr><td>*</td><td>Insert one suppository rectally twice daily as needed for fever to a maximim of 3 per day</td><td>Rectum structure <span>(Details : {SNOMED CT code '34402009' = 'Rectum', given as 'Rectum structure'})</span></td><td>240 mg<span> (Details: UCUM code mg = 'mg')</span></td></tr></table></div>",
  },
  status: "completed",
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
  effectivePeriod: {
    start: "2015-01-15T22:03:00+01:00",
    end: "2015-01-16T02:03:00+01:00",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f007",
        display: "Patrick Pump",
      },
    },
  ],
  reasonCode: [
    {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/reason-medication-given",
          code: "c",
          display: "Emergency",
        },
      ],
    },
  ],
  request: {
    reference: "MedicationRequest/medrx0324",
  },
  dosage: {
    text: "Insert one suppository rectally twice daily as needed for fever to a maximim of 3 per day",
    site: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "34402009",
          display: "Rectum structure",
        },
      ],
    },
    dose: {
      value: 240,
      unit: "mg",
      system: "http://unitsofmeasure.org",
      code: "mg",
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

export const Medicationadministrationexample3: MedicationAdministration = {
  resourceType: "MedicationAdministration",
  id: "medadminexample03",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medadminexample03</p><p><b>contained</b>: </p><p><b>status</b>: on-hold</p><p><b>statusReason</b>: Administration of medication not done due to a contraindication (situation) <span>(Details : {SNOMED CT code '373147003' = 'Medication not administered because contraindicated', given as 'Administration of medication not done due to a contraindication (situation)'})</span></p><p><b>medication</b>: id: med0303; Alemtuzumab 10mg/ml (Lemtrada) <span>(Details : {RxNorm code '1594660' = 'alemtuzumab 10 MG/ML [Lemtrada]', given as 'Alemtuzumab 10mg/ml (Lemtrada)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>context</b>: <a>Encounter/f001</a></p><p><b>supportingInformation</b>: <a>Condition/f204</a></p><p><b>effective</b>: 15/01/2015 2:30:00 PM --&gt; 15/01/2015 2:30:00 PM</p><p><b>request</b>: <a>MedicationRequest/medrx0317</a></p><p><b>note</b>: Patient started Bupropion this morning - will administer in a reduced dose tomorrow</p></div>",
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
  status: "on-hold",
  statusReason: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "373147003",
          display:
            "Administration of medication not done due to a contraindication (situation)",
        },
      ],
    },
  ],
  medicationReference: {
    reference: "#med0303",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  context: {
    reference: "Encounter/f001",
  },
  supportingInformation: [
    {
      reference: "Condition/f204",
    },
  ],
  effectivePeriod: {
    start: "2015-01-15T14:30:00+01:00",
    end: "2015-01-15T14:30:00+01:00",
  },
  request: {
    reference: "MedicationRequest/medrx0317",
  },
  note: [
    {
      text: "Patient started Bupropion this morning - will administer in a reduced dose tomorrow",
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
