import type { RiskAssessment } from "../../src/v4.0.1/riskassessment/types";

export const RiskassessmentExampleBreastcancer: RiskAssessment = {
  resourceType: "RiskAssessment",
  id: "breastcancer-risk",
  text: {
    status: "additional",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <table>\n        <tr>\n          <td colspan="2">\n            <h1>Information about your risk score:</h1>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <strong>Birthdate:</strong>\n          </td>\n          <td>1981-01-01</td>\n        </tr>\n        <tr>\n          <td>\n            <strong>Gender:</strong>\n          </td>\n          <td>female</td>\n        </tr>\n        <tr>\n          <td>\n            <strong>Ethnicity:</strong>\n          </td>\n          <td>Unknown / Not Reported</td>\n        </tr>\n      </table>\n    </div>',
  },
  identifier: [
    {
      use: "official",
      system: "http://example.org",
      value: "risk-assessment-breastcancer1",
    },
  ],
  status: "final",
  code: {
    coding: [
      {
        system: "http://browser.ihtsdotools.org/",
        code: "709510001",
        display: "Assessment of risk for disease (procedure)",
      },
    ],
  },
  subject: {
    reference: "Patient/example",
  },
  performer: {
    reference: "Practitioner/example",
  },
  basis: [
    {
      reference: "Observation/example-genetics-brcapat",
    },
  ],
  prediction: [
    {
      outcome: {
        text: "Unknown risk of developing breast cancer",
      },
    },
  ],
  note: [
    {
      text: "This risk assessment is based on BRCA1 and BRCA2 genetic mutation test",
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

export const RiskassessmentExampleCardiac: RiskAssessment = {
  resourceType: "RiskAssessment",
  id: "cardiac",
  text: {
    status: "additional",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <table>\n        <tr>\n          <td colspan="2">\n            <h1>Information about your risk score:</h1>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <strong>Age:</strong>\n          </td>\n          <td>39</td>\n        </tr>\n        <tr>\n          <td>\n            <strong>Gender:</strong>\n          </td>\n          <td>male</td>\n        </tr>\n        <tr>\n          <td>\n            <strong>Total Cholesterol:</strong>\n          </td>\n          <td>244 mg/dL</td>\n        </tr>\n        <tr>\n          <td>\n            <strong>HDL Cholesterol:</strong>\n          </td>\n          <td>50 mg/dL\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <strong>Smoker:</strong>\n          </td>\n          <td>No</td>\n        </tr>\n        <tr>\n          <td>\n            <strong>Systolic Blood Pressure:</strong>\n          </td>\n          <td>107 mm/Hg</td>\n        </tr>\n        <tr>\n          <td>\n            <strong>On medication for HBP:</strong>\n          </td>\n          <td>No</td>\n        </tr>\n        <tr>\n          <td valign="top">\n            <b>Risk Score*</b>\n          </td>\n          <td>2%<br/>Means 2 of 100 people with this level of risk will have a heart attack in the next 10 years.</td>\n        </tr>\n        <tr>\n          <td colspan="2">* Your risk score was calculated using an equation.  Other NCEP products, such as printed ATP III materials, use a point system to determine a risk score that is close to the equation score.</td>\n        </tr>\n        <tr>\n          <td colspan="2">To find out what your risk score means and how to lower your risk for a heart attack, go to<br/>\n            <a href="http://www.nhlbi.nih.gov/health/public/heart/chol/hbc_what.htm">&quot;High Blood Cholesterol—What You Need to Know&quot;</a>.<br/>\n            <a href="http://www.nhlbi.nih.gov/health/public/heart/chol/chol_tlc.htm">Your Guide to Lowering Cholesterol with Therapeutic Lifestyle Changes (TLC)</a><br/>\n            <a href="http://www.nhlbi.nih.gov/health/public/heart/other/hhw/index.htm">The Healthy Heart Handbook for Women</a>\n          </td>\n        </tr>\n      </table>\n    </div>',
  },
  identifier: [
    {
      use: "official",
      system: "http://example.org",
      value: "risk-assessment-cardiac",
    },
  ],
  status: "final",
  subject: {
    reference: "Patient/pat2",
  },
  encounter: {
    reference: "Encounter/example",
  },
  occurrenceDateTime: "2014-07-19T16:04:00Z",
  performer: {
    display: "http://cvdrisk.nhlbi.nih.gov/#cholesterol",
  },
  basis: [
    {
      reference: "Patient/pat2",
    },
    {
      reference: "DiagnosticReport/lipids",
    },
    {
      reference: "Observation/blood-pressure",
    },
  ],
  prediction: [
    {
      outcome: {
        text: "Heart Attack",
      },
      probabilityDecimal: 0.02,
      whenRange: {
        low: {
          value: 39,
          unit: "years",
          system: "http://unitsofmeasure.org",
          code: "a",
        },
        high: {
          value: 49,
          unit: "years",
          system: "http://unitsofmeasure.org",
          code: "a",
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

export const RiskassessmentExamplePopulation: RiskAssessment = {
  resourceType: "RiskAssessment",
  id: "population",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>Todo - e.g. probable number of infections in a given region over a time period for a given disease based on vaccination rates and other factors</p>\n    </div>',
  },
  contained: [
    {
      resourceType: "Group",
      id: "group1",
      type: "person",
      actual: false,
    },
  ],
  status: "final",
  subject: {
    reference: "#group1",
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

export const RiskassessmentExamplePrognosis: RiskAssessment = {
  resourceType: "RiskAssessment",
  id: "prognosis",
  text: {
    status: "additional",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>Moderate risk of permanent weakness of the left arm, but otherwise no permanent disability</p>\n    </div>',
  },
  status: "final",
  subject: {
    reference: "Patient/example",
  },
  occurrenceDateTime: "2010-11-22",
  condition: {
    reference: "Condition/stroke",
    display: "Ischemic Stroke",
  },
  prediction: [
    {
      outcome: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "249943000:363698007=72098002,260868000=6934004",
          },
        ],
        text: "permanent weakness of the left arm",
      },
      qualitativeRisk: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/risk-probability",
            code: "moderate",
            display: "moderate likelihood",
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

export const RiskassessmentExample: RiskAssessment = {
  resourceType: "RiskAssessment",
  id: "genetic",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>Probability of developing breast cancer before the age indicated:</p>\n      <table>\n        <thead>\n          <tr>\n            <th>Age</th>\n            <th>Probability (%)</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>current-53</td>\n            <td>0.0168</td>\n          </tr>\n          <tr>\n            <td>54-57</td>\n            <td>0.0368</td>\n          </tr>\n          <tr>\n            <td>58-62</td>\n            <td>0.0594</td>\n          </tr>\n          <tr>\n            <td>63-67</td>\n            <td>0.0838</td>\n          </tr>\n          <tr>\n            <td>68-72</td>\n            <td>0.1089</td>\n          </tr>\n          <tr>\n            <td>73-77</td>\n            <td>0.1327</td>\n          </tr>\n          <tr>\n            <td>78-82</td>\n            <td>0.1530</td>\n          </tr>\n          <tr>\n            <td>83-87</td>\n            <td>0.1663</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>',
  },
  status: "final",
  method: {
    coding: [
      {
        code: "BRCAPRO",
      },
    ],
  },
  subject: {
    reference: "Patient/b248b1b2-1686-4b94-9936-37d7a5f94b51",
  },
  occurrenceDateTime: "2006-01-13T23:01:00Z",
  basis: [
    {
      reference: "List/prognosis",
    },
  ],
  prediction: [
    {
      outcome: {
        text: "Breast Cancer",
      },
      probabilityDecimal: 0.000168,
      whenRange: {
        high: {
          value: 53,
          unit: "years",
          system: "http://unitsofmeasure.org",
          code: "a",
        },
      },
    },
    {
      outcome: {
        text: "Breast Cancer",
      },
      probabilityDecimal: 0.000368,
      whenRange: {
        low: {
          value: 54,
          unit: "years",
          system: "http://unitsofmeasure.org",
          code: "a",
        },
        high: {
          value: 57,
          unit: "years",
          system: "http://unitsofmeasure.org",
          code: "a",
        },
      },
    },
    {
      outcome: {
        text: "Breast Cancer",
      },
      probabilityDecimal: 0.000594,
      whenRange: {
        low: {
          value: 58,
          unit: "years",
          system: "http://unitsofmeasure.org",
          code: "a",
        },
        high: {
          value: 62,
          unit: "years",
          system: "http://unitsofmeasure.org",
          code: "a",
        },
      },
    },
    {
      outcome: {
        text: "Breast Cancer",
      },
      probabilityDecimal: 0.000838,
      whenRange: {
        low: {
          value: 63,
          unit: "years",
          system: "http://unitsofmeasure.org",
          code: "a",
        },
        high: {
          value: 67,
          unit: "years",
          system: "http://unitsofmeasure.org",
          code: "a",
        },
      },
    },
    {
      outcome: {
        text: "Breast Cancer",
      },
      probabilityDecimal: 0.001089,
      whenRange: {
        low: {
          value: 68,
          unit: "years",
          system: "http://unitsofmeasure.org",
          code: "a",
        },
        high: {
          value: 72,
          unit: "years",
          system: "http://unitsofmeasure.org",
          code: "a",
        },
      },
    },
    {
      outcome: {
        text: "Breast Cancer",
      },
      probabilityDecimal: 0.001327,
      whenRange: {
        low: {
          value: 73,
          unit: "years",
          system: "http://unitsofmeasure.org",
          code: "a",
        },
        high: {
          value: 77,
          unit: "years",
          system: "http://unitsofmeasure.org",
          code: "a",
        },
      },
    },
    {
      outcome: {
        text: "Breast Cancer",
      },
      probabilityDecimal: 0.00153,
      whenRange: {
        low: {
          value: 78,
          unit: "years",
          system: "http://unitsofmeasure.org",
          code: "a",
        },
        high: {
          value: 82,
          unit: "years",
          system: "http://unitsofmeasure.org",
          code: "a",
        },
      },
    },
    {
      outcome: {
        text: "Breast Cancer",
      },
      probabilityDecimal: 0.001663,
      whenRange: {
        low: {
          value: 83,
          unit: "years",
          system: "http://unitsofmeasure.org",
          code: "a",
        },
        high: {
          value: 88,
          unit: "years",
          system: "http://unitsofmeasure.org",
          code: "a",
        },
      },
    },
  ],
  note: [
    {
      text: "High degree of certainty",
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

export const RiskassessmentRiskexample: RiskAssessment = {
  resourceType: "RiskAssessment",
  id: "riskexample",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Risk assessment for reference only</div>',
  },
  identifier: [
    {
      use: "official",
      system: "http://example.org",
      value: "risk-assessment-breastcancer1",
    },
  ],
  basedOn: {
    reference: "ImmunizationRecommendation/example",
  },
  parent: {
    reference: "DiagnosticReport/example",
  },
  status: "final",
  code: {
    coding: [
      {
        system: "http://browser.ihtsdotools.org/",
        code: "709510001",
        display: "Assessment of risk for disease (procedure)",
      },
    ],
  },
  subject: {
    reference: "Patient/example",
  },
  encounter: {
    reference: "Encounter/example",
    display: "Encounter with patient @example",
  },
  occurrenceDateTime: "2017-10-10",
  condition: {
    reference: "Condition/example",
  },
  performer: {
    reference: "Practitioner/example",
  },
  basis: [
    {
      reference: "DiagnosticReport/example",
    },
    {
      reference: "Observation/example",
    },
  ],
  prediction: [
    {
      outcome: {
        text: "Breast Cancer",
      },
      probabilityDecimal: 0.000368,
      whenRange: {
        low: {
          value: 54,
          unit: "years",
          system: "http://unitsofmeasure.org",
          code: "a",
        },
        high: {
          value: 57,
          unit: "years",
          system: "http://unitsofmeasure.org",
          code: "a",
        },
      },
    },
  ],
  note: [
    {
      text: "This risk assessment is for reference only",
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
