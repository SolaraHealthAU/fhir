import type { Encounter } from "../../src/v4.0.1/encounter/types";

export const EncounterExampleEmerg: Encounter = {
  resourceType: "Encounter",
  id: "emerg",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Emergency visit that escalated into inpatient patient @example</div>',
  },
  status: "in-progress",
  statusHistory: [
    {
      status: "arrived",
      period: {
        start: "2017-02-01T07:15:00+10:00",
        end: "2017-02-01T07:35:00+10:00",
      },
    },
    {
      status: "triaged",
      period: {
        start: "2017-02-01T07:35:00+10:00",
        end: "2017-02-01T08:45:00+10:00",
      },
    },
    {
      status: "in-progress",
      period: {
        start: "2017-02-01T08:45:00+10:00",
        end: "2017-02-01T12:15:00+10:00",
      },
    },
    {
      status: "onleave",
      period: {
        start: "2017-02-01T12:15:00+10:00",
        end: "2017-02-01T12:45:00+10:00",
      },
    },
    {
      status: "in-progress",
      period: {
        start: "2017-02-01T12:45:00+10:00",
      },
    },
  ],
  class: {
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    code: "IMP",
    display: "inpatient encounter",
  },
  classHistory: [
    {
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EMER",
        display: "emergency",
      },
      period: {
        start: "2017-02-01T07:15:00+10:00",
        end: "2017-02-01T09:27:00+10:00",
      },
    },
    {
      class: {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IMP",
        display: "inpatient encounter",
      },
      period: {
        start: "2017-02-01T09:27:00+10:00",
      },
    },
  ],
  subject: {
    reference: "Patient/example",
  },
  period: {
    start: "2017-02-01T07:15:00+10:00",
  },
  hospitalization: {
    admitSource: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/admit-source",
          code: "emd",
          display: "From accident/emergency department",
        },
      ],
    },
  },
  location: [
    {
      location: {
        display: "Emergency Waiting Room",
      },
      status: "active",
      period: {
        start: "2017-02-01T07:15:00+10:00",
        end: "2017-02-01T08:45:00+10:00",
      },
    },
    {
      location: {
        display: "Emergency",
      },
      status: "active",
      period: {
        start: "2017-02-01T08:45:00+10:00",
        end: "2017-02-01T09:27:00+10:00",
      },
    },
    {
      location: {
        display: "Ward 1, Room 42, Bed 1",
      },
      status: "active",
      period: {
        start: "2017-02-01T09:27:00+10:00",
        end: "2017-02-01T12:15:00+10:00",
      },
    },
    {
      location: {
        display: "Ward 1, Room 42, Bed 1",
      },
      status: "reserved",
      period: {
        start: "2017-02-01T12:15:00+10:00",
        end: "2017-02-01T12:45:00+10:00",
      },
    },
    {
      location: {
        display: "Ward 1, Room 42, Bed 1",
      },
      status: "active",
      period: {
        start: "2017-02-01T12:45:00+10:00",
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

export const EncounterExampleF001Heart: Encounter = {
  resourceType: "Encounter",
  id: "f001",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f001</p><p><b>identifier</b>: v1451 (OFFICIAL)</p><p><b>status</b>: finished</p><p><b>class</b>: ambulatory (Details: http://terminology.hl7.org/CodeSystem/v3-ActCode code AMB = 'ambulatory', stated as 'ambulatory')</p><p><b>type</b>: Patient-initiated encounter <span>(Details : {SNOMED CT code '270427003' = 'Patient-initiated encounter', given as 'Patient-initiated encounter'})</span></p><p><b>priority</b>: Non-urgent cardiological admission <span>(Details : {SNOMED CT code '310361003' = 'Non-urgent cardiological admission', given as 'Non-urgent cardiological admission'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><h3>Participants</h3><table><tr><td>-</td><td><b>Individual</b></td></tr><tr><td>*</td><td><a>P. Voigt</a></td></tr></table><p><b>length</b>: 140 min<span> (Details: UCUM code min = 'min')</span></p><p><b>reasonCode</b>: Heart valve replacement <span>(Details : {SNOMED CT code '34068001' = 'Heart valve replacement', given as 'Heart valve replacement'})</span></p><h3>Hospitalizations</h3><table><tr><td>-</td><td><b>PreAdmissionIdentifier</b></td><td><b>AdmitSource</b></td><td><b>DischargeDisposition</b></td></tr><tr><td>*</td><td>93042 (OFFICIAL)</td><td>Referral by physician <span>(Details : {SNOMED CT code '305956004' = 'Referral from physician', given as 'Referral by physician'})</span></td><td>Discharge to home <span>(Details : {SNOMED CT code '306689006' = 'Discharge to home', given as 'Discharge to home'})</span></td></tr></table><p><b>serviceProvider</b>: <a>Burgers University Medical Center</a></p></div>",
  },
  identifier: [
    {
      use: "official",
      system: "http://www.amc.nl/zorgportal/identifiers/visits",
      value: "v1451",
    },
  ],
  status: "finished",
  class: {
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    code: "AMB",
    display: "ambulatory",
  },
  type: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "270427003",
          display: "Patient-initiated encounter",
        },
      ],
    },
  ],
  priority: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "310361003",
        display: "Non-urgent cardiological admission",
      },
    ],
  },
  subject: {
    reference: "Patient/f001",
    display: "P. van de Heuvel",
  },
  participant: [
    {
      individual: {
        reference: "Practitioner/f002",
        display: "P. Voigt",
      },
    },
  ],
  length: {
    value: 140,
    unit: "min",
    system: "http://unitsofmeasure.org",
    code: "min",
  },
  reasonCode: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "34068001",
          display: "Heart valve replacement",
        },
      ],
    },
  ],
  hospitalization: {
    preAdmissionIdentifier: {
      use: "official",
      system: "http://www.amc.nl/zorgportal/identifiers/pre-admissions",
      value: "93042",
    },
    admitSource: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "305956004",
          display: "Referral by physician",
        },
      ],
    },
    dischargeDisposition: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "306689006",
          display: "Discharge to home",
        },
      ],
    },
  },
  serviceProvider: {
    reference: "Organization/f001",
    display: "Burgers University Medical Center",
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

export const EncounterExampleF002Lung: Encounter = {
  resourceType: "Encounter",
  id: "f002",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f002</p><p><b>identifier</b>: v3251 (OFFICIAL)</p><p><b>status</b>: finished</p><p><b>class</b>: ambulatory (Details: http://terminology.hl7.org/CodeSystem/v3-ActCode code AMB = 'ambulatory', stated as 'ambulatory')</p><p><b>type</b>: Patient-initiated encounter <span>(Details : {SNOMED CT code '270427003' = 'Patient-initiated encounter', given as 'Patient-initiated encounter'})</span></p><p><b>priority</b>: Urgent <span>(Details : {SNOMED CT code '103391001' = 'Urgency', given as 'Urgent'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><h3>Participants</h3><table><tr><td>-</td><td><b>Individual</b></td></tr><tr><td>*</td><td><a>M.I.M Versteegh</a></td></tr></table><p><b>length</b>: 140 min<span> (Details: UCUM code min = 'min')</span></p><p><b>reasonCode</b>: Partial lobectomy of lung <span>(Details : {SNOMED CT code '34068001' = 'Heart valve replacement', given as 'Partial lobectomy of lung'})</span></p><h3>Hospitalizations</h3><table><tr><td>-</td><td><b>PreAdmissionIdentifier</b></td><td><b>AdmitSource</b></td><td><b>DischargeDisposition</b></td></tr><tr><td>*</td><td>98682 (OFFICIAL)</td><td>Referral by radiologist <span>(Details : {SNOMED CT code '305997006' = 'Referral by radiologist', given as 'Referral by radiologist'})</span></td><td>Discharge to home <span>(Details : {SNOMED CT code '306689006' = 'Discharge to home', given as 'Discharge to home'})</span></td></tr></table><p><b>serviceProvider</b>: <a>BMC</a></p></div>",
  },
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/zorgportal/identifiers/encounters",
      value: "v3251",
    },
  ],
  status: "finished",
  class: {
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    code: "AMB",
    display: "ambulatory",
  },
  type: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "270427003",
          display: "Patient-initiated encounter",
        },
      ],
    },
  ],
  priority: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "103391001",
        display: "Urgent",
      },
    ],
  },
  subject: {
    reference: "Patient/f001",
    display: "P. van de Heuvel",
  },
  participant: [
    {
      individual: {
        reference: "Practitioner/f003",
        display: "M.I.M Versteegh",
      },
    },
  ],
  length: {
    value: 140,
    unit: "min",
    system: "http://unitsofmeasure.org",
    code: "min",
  },
  reasonCode: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "34068001",
          display: "Partial lobectomy of lung",
        },
      ],
    },
  ],
  hospitalization: {
    preAdmissionIdentifier: {
      use: "official",
      system: "http://www.bmc.nl/zorgportal/identifiers/pre-admissions",
      value: "98682",
    },
    admitSource: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "305997006",
          display: "Referral by radiologist",
        },
      ],
    },
    dischargeDisposition: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "306689006",
          display: "Discharge to home",
        },
      ],
    },
  },
  serviceProvider: {
    reference: "Organization/f001",
    display: "BMC",
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

export const EncounterExampleF003Abscess: Encounter = {
  resourceType: "Encounter",
  id: "f003",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f003</p><p><b>identifier</b>: v6751 (OFFICIAL)</p><p><b>status</b>: finished</p><p><b>class</b>: ambulatory (Details: http://terminology.hl7.org/CodeSystem/v3-ActCode code AMB = 'ambulatory', stated as 'ambulatory')</p><p><b>type</b>: Patient-initiated encounter <span>(Details : {SNOMED CT code '270427003' = 'Patient-initiated encounter', given as 'Patient-initiated encounter'})</span></p><p><b>priority</b>: Non-urgent ear, nose and throat admission <span>(Details : {SNOMED CT code '103391001' = 'Urgency', given as 'Non-urgent ear, nose and throat admission'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><h3>Participants</h3><table><tr><td>-</td><td><b>Individual</b></td></tr><tr><td>*</td><td><a>E.M. van den Broek</a></td></tr></table><p><b>length</b>: 90 min<span> (Details: UCUM code min = 'min')</span></p><p><b>reasonCode</b>: Retropharyngeal abscess <span>(Details : {SNOMED CT code '18099001' = 'Retropharyngeal abscess', given as 'Retropharyngeal abscess'})</span></p><h3>Hospitalizations</h3><table><tr><td>-</td><td><b>PreAdmissionIdentifier</b></td><td><b>AdmitSource</b></td><td><b>DischargeDisposition</b></td></tr><tr><td>*</td><td>93042 (OFFICIAL)</td><td>Referral by physician <span>(Details : {SNOMED CT code '305956004' = 'Referral from physician', given as 'Referral by physician'})</span></td><td>Discharge to home <span>(Details : {SNOMED CT code '306689006' = 'Discharge to home', given as 'Discharge to home'})</span></td></tr></table><p><b>serviceProvider</b>: <a>Organization/f001</a></p></div>",
  },
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/zorgportal/identifiers/encounters",
      value: "v6751",
    },
  ],
  status: "finished",
  class: {
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    code: "AMB",
    display: "ambulatory",
  },
  type: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "270427003",
          display: "Patient-initiated encounter",
        },
      ],
    },
  ],
  priority: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "103391001",
        display: "Non-urgent ear, nose and throat admission",
      },
    ],
  },
  subject: {
    reference: "Patient/f001",
    display: "P. van de Heuvel",
  },
  participant: [
    {
      individual: {
        reference: "Practitioner/f001",
        display: "E.M. van den Broek",
      },
    },
  ],
  length: {
    value: 90,
    unit: "min",
    system: "http://unitsofmeasure.org",
    code: "min",
  },
  reasonCode: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "18099001",
          display: "Retropharyngeal abscess",
        },
      ],
    },
  ],
  hospitalization: {
    preAdmissionIdentifier: {
      use: "official",
      system: "http://www.bmc.nl/zorgportal/identifiers/pre-admissions",
      value: "93042",
    },
    admitSource: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "305956004",
          display: "Referral by physician",
        },
      ],
    },
    dischargeDisposition: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "306689006",
          display: "Discharge to home",
        },
      ],
    },
  },
  serviceProvider: {
    reference: "Organization/f001",
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

export const EncounterExampleF20120130404: Encounter = {
  resourceType: "Encounter",
  id: "f201",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f201</p><p><b>identifier</b>: Encounter_Roel_20130404 (TEMP)</p><p><b>status</b>: finished</p><p><b>class</b>: ambulatory (Details: http://terminology.hl7.org/CodeSystem/v3-ActCode code AMB = 'ambulatory', stated as 'ambulatory')</p><p><b>type</b>: Consultation <span>(Details : {SNOMED CT code '11429006' = 'Consultation', given as 'Consultation'})</span></p><p><b>priority</b>: Normal <span>(Details : {SNOMED CT code '17621005' = 'Normal', given as 'Normal'})</span></p><p><b>subject</b>: <a>Roel</a></p><h3>Participants</h3><table><tr><td>-</td><td><b>Individual</b></td></tr><tr><td>*</td><td><a>Practitioner/f201</a></td></tr></table><p><b>reasonCode</b>: The patient had fever peaks over the last couple of days. He is worried about these peaks. <span>(Details )</span></p><p><b>serviceProvider</b>: <a>Organization/f201</a></p></div>",
  },
  identifier: [
    {
      use: "temp",
      value: "Encounter_Roel_20130404",
    },
  ],
  status: "finished",
  class: {
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    code: "AMB",
    display: "ambulatory",
  },
  type: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "11429006",
          display: "Consultation",
        },
      ],
    },
  ],
  priority: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "17621005",
        display: "Normal",
      },
    ],
  },
  subject: {
    reference: "Patient/f201",
    display: "Roel",
  },
  participant: [
    {
      individual: {
        reference: "Practitioner/f201",
      },
    },
  ],
  reasonCode: [
    {
      text: "The patient had fever peaks over the last couple of days. He is worried about these peaks.",
    },
  ],
  serviceProvider: {
    reference: "Organization/f201",
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

export const EncounterExampleF20220130128: Encounter = {
  resourceType: "Encounter",
  id: "f202",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f202</p><p><b>identifier</b>: Encounter_Roel_20130128 (TEMP)</p><p><b>status</b>: finished</p><p><b>class</b>: ambulatory (Details: http://terminology.hl7.org/CodeSystem/v3-ActCode code AMB = 'ambulatory', stated as 'ambulatory')</p><p><b>type</b>: Chemotherapy <span>(Details : {SNOMED CT code '367336001' = 'Chemotherapy', given as 'Chemotherapy'})</span></p><p><b>priority</b>: Urgent <span>(Details : {SNOMED CT code '103391001' = 'Urgency', given as 'Urgent'})</span></p><p><b>subject</b>: <a>Roel</a></p><h3>Participants</h3><table><tr><td>-</td><td><b>Individual</b></td></tr><tr><td>*</td><td><a>Practitioner/f201</a></td></tr></table><p><b>length</b>: 56 minutes<span> (Details: UCUM code min = 'min')</span></p><p><b>reasonCode</b>: The patient is treated for a tumor. <span>(Details )</span></p><blockquote><p><b>diagnosis</b></p><p><b>condition</b>: Complications from Roel's TPF chemotherapy on January 28th, 2013</p><p><b>use</b>: Admission diagnosis <span>(Details : {http://terminology.hl7.org/CodeSystem/diagnosis-role code 'AD' = 'Admission diagnosis', given as 'Admission diagnosis'})</span></p><p><b>rank</b>: 2</p></blockquote><blockquote><p><b>diagnosis</b></p><p><b>condition</b>: The patient is treated for a tumor</p><p><b>use</b>: Chief complaint <span>(Details : {http://terminology.hl7.org/CodeSystem/diagnosis-role code 'CC' = 'Chief complaint', given as 'Chief complaint'})</span></p><p><b>rank</b>: 1</p></blockquote><p><b>serviceProvider</b>: <a>Organization/f201</a></p></div>",
  },
  identifier: [
    {
      use: "temp",
      value: "Encounter_Roel_20130128",
    },
  ],
  status: "finished",
  class: {
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    code: "AMB",
    display: "ambulatory",
  },
  type: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "367336001",
          display: "Chemotherapy",
        },
      ],
    },
  ],
  priority: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "103391001",
        display: "Urgent",
      },
    ],
  },
  subject: {
    reference: "Patient/f201",
    display: "Roel",
  },
  participant: [
    {
      individual: {
        reference: "Practitioner/f201",
      },
    },
  ],
  length: {
    value: 56,
    unit: "minutes",
    system: "http://unitsofmeasure.org",
    code: "min",
  },
  reasonCode: [
    {
      text: "The patient is treated for a tumor.",
    },
  ],
  diagnosis: [
    {
      condition: {
        display:
          "Complications from Roel's TPF chemotherapy on January 28th, 2013",
      },
      use: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/diagnosis-role",
            code: "AD",
            display: "Admission diagnosis",
          },
        ],
      },
      rank: 2,
    },
    {
      condition: {
        display: "The patient is treated for a tumor",
      },
      use: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/diagnosis-role",
            code: "CC",
            display: "Chief complaint",
          },
        ],
      },
      rank: 1,
    },
  ],
  serviceProvider: {
    reference: "Organization/f201",
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

export const EncounterExampleF20320130311: Encounter = {
  resourceType: "Encounter",
  id: "f203",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f203</p><p><b>identifier</b>: Encounter_Roel_20130311 (TEMP)</p><p><b>status</b>: finished</p><h3>StatusHistories</h3><table><tr><td>-</td><td><b>Status</b></td><td><b>Period</b></td></tr><tr><td>*</td><td>arrived</td><td>08/03/2013 --&gt; (ongoing)</td></tr></table><p><b>class</b>: inpatient encounter (Details: http://terminology.hl7.org/CodeSystem/v3-ActCode code IMP = 'inpatient encounter', stated as 'inpatient encounter')</p><p><b>type</b>: Inpatient stay for nine days <span>(Details : {SNOMED CT code '183807002' = 'Inpatient stay 9 days', given as 'Inpatient stay for nine days'})</span></p><p><b>priority</b>: High priority <span>(Details : {SNOMED CT code '394849002' = 'High priority', given as 'High priority'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>episodeOfCare</b>: <a>EpisodeOfCare/example</a></p><p><b>basedOn</b>: <a>ServiceRequest/myringotomy</a></p><h3>Participants</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>Individual</b></td></tr><tr><td>*</td><td>Participation <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ParticipationType code 'PART' = 'Participation)</span></td><td><a>Practitioner/f201</a></td></tr></table><p><b>appointment</b>: <a>Appointment/example</a></p><p><b>period</b>: 11/03/2013 --&gt; 20/03/2013</p><p><b>reasonCode</b>: The patient seems to suffer from bilateral pneumonia and renal insufficiency, most likely due to chemotherapy. <span>(Details )</span></p><blockquote><p><b>diagnosis</b></p><p><b>condition</b>: <a>Condition/stroke</a></p><p><b>use</b>: Admission diagnosis <span>(Details : {http://terminology.hl7.org/CodeSystem/diagnosis-role code 'AD' = 'Admission diagnosis', given as 'Admission diagnosis'})</span></p><p><b>rank</b>: 1</p></blockquote><blockquote><p><b>diagnosis</b></p><p><b>condition</b>: <a>Condition/f201</a></p><p><b>use</b>: Discharge diagnosis <span>(Details : {http://terminology.hl7.org/CodeSystem/diagnosis-role code 'DD' = 'Discharge diagnosis', given as 'Discharge diagnosis'})</span></p></blockquote><p><b>account</b>: <a>Account/example</a></p><h3>Hospitalizations</h3><table><tr><td>-</td><td><b>Origin</b></td><td><b>AdmitSource</b></td><td><b>ReAdmission</b></td><td><b>DietPreference</b></td><td><b>SpecialCourtesy</b></td><td><b>SpecialArrangement</b></td><td><b>Destination</b></td></tr><tr><td>*</td><td><a>Location/2</a></td><td>Clinical Oncology Department <span>(Details : {SNOMED CT code '309902002' = 'Clinical oncology department', given as 'Clinical Oncology Department'})</span></td><td>readmitted <span>(Details : {[not stated] code 'null' = 'null', given as 'readmitted'})</span></td><td>Fluid balance regulation <span>(Details : {SNOMED CT code '276026009' = 'Fluid balance regulation', given as 'Fluid balance regulation'})</span></td><td>normal courtesy <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-EncounterSpecialCourtesy code 'NRM' = 'normal courtesy', given as 'normal courtesy'})</span></td><td>Wheelchair <span>(Details : {http://terminology.hl7.org/CodeSystem/encounter-special-arrangements code 'wheel' = 'Wheelchair', given as 'Wheelchair'})</span></td><td><a>Location/2</a></td></tr></table><p><b>serviceProvider</b>: <a>Organization/2</a></p><p><b>partOf</b>: <a>Encounter/f203</a></p></div>",
  },
  identifier: [
    {
      use: "temp",
      value: "Encounter_Roel_20130311",
    },
  ],
  status: "finished",
  statusHistory: [
    {
      status: "arrived",
      period: {
        start: "2013-03-08",
      },
    },
  ],
  class: {
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    code: "IMP",
    display: "inpatient encounter",
  },
  type: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "183807002",
          display: "Inpatient stay for nine days",
        },
      ],
    },
  ],
  priority: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "394849002",
        display: "High priority",
      },
    ],
  },
  subject: {
    reference: "Patient/f201",
    display: "Roel",
  },
  episodeOfCare: [
    {
      reference: "EpisodeOfCare/example",
    },
  ],
  basedOn: [
    {
      reference: "ServiceRequest/myringotomy",
    },
  ],
  participant: [
    {
      type: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
              code: "PART",
            },
          ],
        },
      ],
      individual: {
        reference: "Practitioner/f201",
      },
    },
  ],
  appointment: [
    {
      reference: "Appointment/example",
    },
  ],
  period: {
    start: "2013-03-11",
    end: "2013-03-20",
  },
  reasonCode: [
    {
      text: "The patient seems to suffer from bilateral pneumonia and renal insufficiency, most likely due to chemotherapy.",
    },
  ],
  diagnosis: [
    {
      condition: {
        reference: "Condition/stroke",
      },
      use: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/diagnosis-role",
            code: "AD",
            display: "Admission diagnosis",
          },
        ],
      },
      rank: 1,
    },
    {
      condition: {
        reference: "Condition/f201",
      },
      use: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/diagnosis-role",
            code: "DD",
            display: "Discharge diagnosis",
          },
        ],
      },
    },
  ],
  account: [
    {
      reference: "Account/example",
    },
  ],
  hospitalization: {
    origin: {
      reference: "Location/2",
    },
    admitSource: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "309902002",
          display: "Clinical Oncology Department",
        },
      ],
    },
    reAdmission: {
      coding: [
        {
          display: "readmitted",
        },
      ],
    },
    dietPreference: [
      {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "276026009",
            display: "Fluid balance regulation",
          },
        ],
      },
    ],
    specialCourtesy: [
      {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/v3-EncounterSpecialCourtesy",
            code: "NRM",
            display: "normal courtesy",
          },
        ],
      },
    ],
    specialArrangement: [
      {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/encounter-special-arrangements",
            code: "wheel",
            display: "Wheelchair",
          },
        ],
      },
    ],
    destination: {
      reference: "Location/2",
    },
  },
  serviceProvider: {
    reference: "Organization/2",
  },
  partOf: {
    reference: "Encounter/f203",
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

export const EncounterExampleHome: Encounter = {
  resourceType: "Encounter",
  id: "home",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Encounter with patient @example who is at home</div>',
  },
  contained: [
    {
      resourceType: "Location",
      id: "home",
      description: "Client's home",
      mode: "kind",
    },
  ],
  status: "finished",
  class: {
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    code: "HH",
    display: "home health",
  },
  subject: {
    reference: "Patient/example",
  },
  participant: [
    {
      period: {
        start: "2015-01-17T16:00:00+10:00",
        end: "2015-01-17T16:30:00+10:00",
      },
      individual: {
        reference: "Practitioner/example",
        display: "Dr Adam Careful",
      },
    },
  ],
  period: {
    start: "2015-01-17T16:00:00+10:00",
    end: "2015-01-17T16:30:00+10:00",
  },
  location: [
    {
      location: {
        reference: "#home",
        display: "Client's home",
      },
      status: "completed",
      period: {
        start: "2015-01-17T16:00:00+10:00",
        end: "2015-01-17T16:30:00+10:00",
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

export const EncounterExampleXcda: Encounter = {
  resourceType: "Encounter",
  id: "xcda",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: xcda</p><p><b>identifier</b>: 1234213.52345873 (OFFICIAL)</p><p><b>status</b>: finished</p><p><b>class</b>: ambulatory (Details: http://terminology.hl7.org/CodeSystem/v3-ActCode code AMB = 'ambulatory', stated as 'ambulatory')</p><p><b>subject</b>: <a>Patient/xcda</a></p><h3>Participants</h3><table><tr><td>-</td><td><b>Individual</b></td></tr><tr><td>*</td><td><a>Practitioner/xcda1</a></td></tr></table><p><b>reasonCode</b>: Arm <span>(Details : {http://ihe.net/xds/connectathon/eventCodes code 'T-D8200' = 'T-D8200', given as 'Arm'})</span></p></div>",
  },
  identifier: [
    {
      use: "official",
      system: "http://healthcare.example.org/identifiers/enocunter",
      value: "1234213.52345873",
    },
  ],
  status: "finished",
  class: {
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    code: "AMB",
    display: "ambulatory",
  },
  subject: {
    reference: "Patient/xcda",
  },
  participant: [
    {
      individual: {
        reference: "Practitioner/xcda1",
      },
    },
  ],
  reasonCode: [
    {
      coding: [
        {
          system: "http://ihe.net/xds/connectathon/eventCodes",
          code: "T-D8200",
          display: "Arm",
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

export const EncounterExample: Encounter = {
  resourceType: "Encounter",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Encounter with patient @example</div>',
  },
  status: "in-progress",
  class: {
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    code: "IMP",
    display: "inpatient encounter",
  },
  subject: {
    reference: "Patient/example",
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
