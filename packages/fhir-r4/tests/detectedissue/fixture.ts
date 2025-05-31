import type { DetectedIssue } from "../../src/v4.0.1/detectedissue/types";

export const DetectedissueExampleAllergy: DetectedIssue = {
  resourceType: "DetectedIssue",
  id: "allergy",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">[Put rendering here]</div>',
  },
  status: "final",
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

export const DetectedissueExampleDup: DetectedIssue = {
  resourceType: "DetectedIssue",
  id: "duplicate",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>Similar test was performed within the past 14 days</p>\n      <ul>\n        <li>\n          <a href="ServiceRequest/id">Chest CT - ordered May 8, 2013 by Dr. Adam Careful</a>\n        </li>\n        <li>\n          <a href="ImagingStudy/example">Image 1 from Series 3: CT Images on Patient MINT (MINT1234) taken at 1-Jan 2011 01:20 AM</a>\n        </li>\n      </ul>\n    </div>',
  },
  identifier: [
    {
      use: "official",
      system: "http://example.org",
      value: "12345",
    },
  ],
  status: "final",
  code: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DUPTHPY",
        display: "Duplicate Therapy Alert",
      },
    ],
  },
  patient: {
    reference: "Patient/dicom",
  },
  identifiedDateTime: "2013-05-08",
  author: {
    reference: "Device/software",
  },
  implicated: [
    {
      reference: "ServiceRequest/di",
      display: "Chest CT - ordered May 8, 2013 by Dr. Adam Careful",
    },
    {
      reference: "ImagingStudy/example",
      display:
        "Image 1 from Series 3: CT Images on Patient MINT (MINT1234) taken at 1-Jan 2011 01:20 AM",
    },
  ],
  detail: "Similar test was performed within the past 14 days",
  reference:
    "http://www.tmhp.com/RadiologyClinicalDecisionSupport/2011/CHEST%20IMAGING%20GUIDELINES%202011.pdf",
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

export const DetectedissueExampleLab: DetectedIssue = {
  resourceType: "DetectedIssue",
  id: "lab",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">[Put rendering here]</div>',
  },
  status: "final",
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

export const DetectedissueExample: DetectedIssue = {
  resourceType: "DetectedIssue",
  id: "ddi",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p><b>Severity: High</b> - Risk of internal bleeding</p>\n      <p>Those who take acetaminophen along with the widely used blood-thinning drug warfarin may face the risk of serious internal bleeding. People on warfarin who take acetaminophen for at least seven days in a row should be closely watched for bleeding.</p>\n      <ul>\n        <li><a href="MedicationStatement/tylenol">500 mg Acetaminophen tablet 1/day, PRN since 2010</a></li>\n        <li><a href="MedicationRequest/warfarin">Warfarin 1 MG TAB prescribed Jan. 5, 2014</a></li>\n      </ul>\n      <p>Mitigation: Jan 5, 2014 by Dr. Adam Careful: </p>\n      <p>Asked patient to discontinue regular use of Tylenol and to consult with clinician if they need to resume to allow appropriate INR monitoring</p>\n    </div>',
  },
  status: "final",
  code: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRG",
        display: "Drug Interaction Alert",
      },
    ],
  },
  severity: "high",
  identifiedDateTime: "2014-01-05",
  author: {
    reference: "Device/software",
  },
  implicated: [
    {
      reference: "MedicationStatement/example001",
      display: "500 mg Acetaminophen tablet 1/day, PRN since 2010",
    },
    {
      reference: "MedicationRequest/medrx0331",
      display: "Warfarin 1 MG TAB prescribed Jan. 15, 2015",
    },
  ],
  detail:
    "Risk of internal bleeding.  Those who take acetaminophen along with the widely used blood-thinning drug warfarin may face the risk of serious internal bleeding. People on warfarin who take acetaminophen for at least seven days in a row should be closely watched for bleeding.",
  mitigation: [
    {
      action: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            code: "13",
            display: "Stopped Concurrent Therapy",
          },
        ],
        text: "Asked patient to discontinue regular use of Tylenol and to consult with clinician if they need to resume to allow appropriate INR monitoring",
      },
      date: "2014-01-05",
      author: {
        reference: "Practitioner/example",
        display: "Dr. Adam Careful",
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
