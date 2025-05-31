import type { List } from "../../src/v4.0.1/list/types";

export const ListExampleAllergies: List = {
  resourceType: "List",
  id: "current-allergies",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>Patient Peter Chalmers, DOB = Dec 25, 1974, MRN = 12345 (Acme Healthcare) has the following allergies</p>\n      <ul>\n        <li>cashew nut allergenic extract Injectable Product (<b>High</b>)</li>\n        <li>Allergenic extract, penicillin (high)</li>\n      </ul>\n    </div>',
  },
  status: "current",
  mode: "working",
  title: "Current Allergy List",
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "52472-8",
        display: "Allergies and Adverse Drug Reactions",
      },
    ],
    text: "Current Allergy List",
  },
  date: "2015-07-14T23:10:23+11:00",
  source: {
    reference: "Patient/example",
  },
  orderedBy: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/list-order",
        code: "entry-date",
      },
    ],
  },
  entry: [
    {
      item: {
        reference: "AllergyIntolerance/example",
      },
    },
    {
      item: {
        reference: "AllergyIntolerance/medication",
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

export const ListExampleDoubleCousinRelationshipPedigree: List = {
  resourceType: "List",
  id: "example-double-cousin-relationship",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-double-cousin-relationship</p><p><b>contained</b>: , , , , , </p><p><b>status</b>: current</p><p><b>mode</b>: snapshot</p><p><b>code</b>: TPMT gene mutations found [Identifier] in Blood or Tissue by Sequencing Nominal <span>(Details : {LOINC code '80738-8' = 'TPMT gene mutations found [Identifier] in Blood or Tissue by Sequencing Nominal', given as 'TPMT gene mutations found [Identifier] in Blood or Tissue by Sequencing Nominal'})</span></p><p><b>subject</b>: <a>Pam Taylor</a></p><blockquote><p><b>entry</b></p><p><b>item</b>: id: 1; status: completed; name: Mary; natural mother <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'NMTH' = 'natural mother', given as 'natural mother'})</span>; deceased</p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: id: 2; status: completed; name: Bob; paternal uncle <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'PUNCLE' = 'paternal uncle', given as 'paternal uncle'})</span></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: id: 3; status: completed; name: Jon; maternal uncle <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'MUNCLE' = 'maternal uncle', given as 'maternal uncle'})</span></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: id: 4; status: completed; name: Alica; maternal grandmother <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'MGRMTH' = 'maternal grandmother', given as 'maternal grandmother'})</span>; 70 yr<span> (Details: UCUM code a = 'a')</span></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: id: 5; status: completed; name: Aunt with Parent ID; maternal aunt <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'MAUNT' = 'maternal aunt', given as 'maternal aunt'})</span>; Female <span>(Details : {http://hl7.org/fhir/administrative-gender code 'female' = 'Female', given as 'Female'})</span>; 55 yr<span> (Details: UCUM code a = 'a')</span></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: id: 6; status: completed; name: Paul; Paternal grandfather <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'PGRFTH' = 'paternal grandfather', given as 'Paternal grandfather'})</span>; 74 yr<span> (Details: UCUM code b = 'b')</span></p></blockquote></div>",
  },
  contained: [
    {
      resourceType: "FamilyMemberHistory",
      id: "1",
      status: "completed",
      patient: {
        reference: "Patient/example",
        display: "Pam Taylor",
      },
      name: "Mary",
      relationship: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
            code: "NMTH",
            display: "natural mother",
          },
        ],
        text: "natural mother",
      },
      deceasedBoolean: true,
      condition: [
        {
          code: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "73211009",
                display: "Diabetes mellitus",
              },
            ],
            text: "Diabetes mellitus",
          },
          onsetAge: {
            value: 45,
            unit: "yr",
            system: "http://unitsofmeasure.org",
            code: "a",
          },
        },
      ],
    },
    {
      resourceType: "FamilyMemberHistory",
      id: "2",
      status: "completed",
      patient: {
        reference: "Patient/example",
        display: "Pam Taylor",
      },
      name: "Bob",
      relationship: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
            code: "PUNCLE",
            display: "paternal uncle",
          },
        ],
        text: "paternal uncle",
      },
      condition: [
        {
          code: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "1481000119100",
                display: "Diabetes mellitus type 2 without retinopathy",
              },
            ],
            text: "Diabetes mellitus type 2 without retinopathy",
          },
          onsetAge: {
            value: 35,
            unit: "yr",
            system: "http://unitsofmeasure.org",
            code: "a",
          },
        },
      ],
    },
    {
      resourceType: "FamilyMemberHistory",
      id: "3",
      status: "completed",
      patient: {
        reference: "Patient/example",
        display: "Pam Taylor",
      },
      name: "Jon",
      relationship: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
            code: "MUNCLE",
            display: "maternal uncle",
          },
        ],
        text: "maternal uncle",
      },
    },
    {
      resourceType: "FamilyMemberHistory",
      id: "4",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/family-member-history-genetics-sibling",
          extension: [
            {
              url: "type",
              valueCodeableConcept: {
                coding: [
                  {
                    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
                    code: "NSIS",
                    display: "natural sister",
                  },
                ],
                text: "natural sister",
              },
            },
            {
              url: "reference",
              valueReference: {
                reference: "FamilyMemberHistory/mother",
                display: "paternal grandmother",
              },
            },
          ],
        },
      ],
      status: "completed",
      patient: {
        reference: "Patient/example",
        display: "Pam Taylor",
      },
      name: "Alica",
      relationship: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
            code: "MGRMTH",
            display: "maternal grandmother",
          },
        ],
        text: "maternal grandmother",
      },
      ageAge: {
        value: 70,
        unit: "yr",
        system: "http://unitsofmeasure.org",
        code: "a",
      },
    },
    {
      resourceType: "FamilyMemberHistory",
      id: "5",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/family-member-history-genetics-parent",
          extension: [
            {
              url: "type",
              valueCodeableConcept: {
                coding: [
                  {
                    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
                    code: "MTH",
                    display: "mother",
                  },
                ],
                text: "mother",
              },
            },
            {
              url: "reference",
              valueReference: {
                reference: "FamilyMemberHistory/147146",
                display: "maternal grandmother",
              },
            },
          ],
        },
      ],
      status: "completed",
      patient: {
        reference: "Patient/example",
        display: "Pam Taylor",
      },
      name: "Aunt with Parent ID",
      relationship: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
            code: "MAUNT",
            display: "maternal aunt",
          },
        ],
        text: "maternal aunt",
      },
      sex: {
        coding: [
          {
            system: "http://hl7.org/fhir/administrative-gender",
            code: "female",
            display: "Female",
          },
        ],
      },
      ageAge: {
        value: 55,
        unit: "yr",
        system: "http://unitsofmeasure.org",
        code: "a",
      },
    },
    {
      resourceType: "FamilyMemberHistory",
      id: "6",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/family-member-history-genetics-sibling",
          extension: [
            {
              url: "type",
              valueCodeableConcept: {
                coding: [
                  {
                    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
                    code: "NBRO",
                    display: "natural brother",
                  },
                ],
                text: "natural brother",
              },
            },
            {
              url: "reference",
              valueReference: {
                reference: "FamilyMemberHistory/father",
                display: "maternal grandfather",
              },
            },
          ],
        },
      ],
      status: "completed",
      patient: {
        reference: "Patient/example",
        display: "Pam Taylor",
      },
      name: "Paul",
      relationship: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
            code: "PGRFTH",
            display: "Paternal grandfather",
          },
        ],
        text: "Paternal grandfather",
      },
      ageAge: {
        value: 74,
        unit: "yr",
        system: "http://unitsofmeasure.org",
        code: "b",
      },
    },
  ],
  status: "current",
  mode: "snapshot",
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "80738-8",
        display:
          "TPMT gene mutations found [Identifier] in Blood or Tissue by Sequencing Nominal",
      },
    ],
    text: "TPMT gene mutations found [Identifier] in Blood or Tissue by Sequencing Nominal",
  },
  subject: {
    reference: "Patient/example",
    display: "Pam Taylor",
  },
  entry: [
    {
      item: {
        reference: "#1",
      },
    },
    {
      item: {
        reference: "#2",
      },
    },
    {
      item: {
        reference: "#3",
      },
    },
    {
      item: {
        reference: "#4",
      },
    },
    {
      item: {
        reference: "#5",
      },
    },
    {
      item: {
        reference: "#6",
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

export const ListExampleEmpty: List = {
  resourceType: "List",
  id: "example-empty",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>The patient is not on any medications</p>\n    </div>',
  },
  status: "current",
  mode: "snapshot",
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "182836005",
        display: "Review of medication",
      },
    ],
    text: "Medication Review",
  },
  date: "2012-11-26T07:30:23+11:00",
  source: {
    reference: "Patient/example",
  },
  emptyReason: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/list-empty-reason",
        code: "nilknown",
        display: "Nil Known",
      },
    ],
    text: "The patient is not on any medications",
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

export const ListExampleFamilyhistoryF201Roel: List = {
  resourceType: "List",
  id: "f201",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f201</p><p><b>contained</b>: , </p><p><b>status</b>: current</p><p><b>mode</b>: snapshot</p><p><b>code</b>: History of family member diseases <span>(Details : {LOINC code '8670-2' = 'History of family member diseases', given as 'History of family member diseases'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>note</b>: Both parents, both brothers and both children (twin) are still alive.</p><blockquote><p><b>entry</b></p><p><b>item</b>: id: fmh-1; status: completed; Mother <span>(Details : {SNOMED CT code '72705000' = 'Mother', given as 'Mother'})</span>; </p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: id: fmh-2; status: completed; Uncle <span>(Details : {SNOMED CT code '38048003' = 'Uncle', given as 'Uncle'})</span>; deceased</p></blockquote></div>",
  },
  contained: [
    {
      resourceType: "FamilyMemberHistory",
      id: "fmh-1",
      status: "completed",
      patient: {
        reference: "Patient/f201",
        display: "Roel",
      },
      relationship: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "72705000",
            display: "Mother",
          },
        ],
      },
      deceasedBoolean: false,
      condition: [
        {
          code: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "39839004",
                display: "Diaphragmatic hernia",
              },
            ],
          },
        },
      ],
    },
    {
      resourceType: "FamilyMemberHistory",
      id: "fmh-2",
      status: "completed",
      patient: {
        reference: "Patient/f201",
        display: "Roel",
      },
      relationship: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "38048003",
            display: "Uncle",
          },
        ],
      },
      deceasedBoolean: true,
      condition: [
        {
          code: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "115665000",
                display: "Atopy",
              },
            ],
          },
          outcome: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "419099009",
                display: "Died",
              },
            ],
          },
        },
      ],
    },
  ],
  status: "current",
  mode: "snapshot",
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "8670-2",
        display: "History of family member diseases",
      },
    ],
  },
  subject: {
    reference: "Patient/f201",
    display: "Roel",
  },
  note: [
    {
      text: "Both parents, both brothers and both children (twin) are still alive.",
    },
  ],
  entry: [
    {
      item: {
        reference: "#fmh-1",
      },
    },
    {
      item: {
        reference: "#fmh-2",
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

export const ListExampleFamilyhistoryGeneticsProfile: List = {
  resourceType: "List",
  id: "genetic",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: genetic</p><p><b>contained</b>: , , , , , , , </p><p><b>status</b>: current</p><p><b>mode</b>: snapshot</p><p><b>code</b>: History of family member diseases <span>(Details : {LOINC code '8670-2' = 'History of family member diseases', given as 'History of family member diseases'})</span></p><p><b>subject</b>: <a>Peter Patient</a></p><blockquote><p><b>entry</b></p><p><b>item</b>: id: 1; status: completed; name: Dave; father <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'FTH' = 'father', given as 'father'})</span></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: id: 2; status: completed; maternal grandfather <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'MGRFTH' = 'maternal grandfather', given as 'maternal grandfather'})</span></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: id: 3; status: completed; mother <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'MTH' = 'mother', given as 'mother'})</span></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: id: 4; status: completed; paternal grandmother <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'PGRMTH' = 'paternal grandmother', given as 'paternal grandmother'})</span></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: id: 5; status: completed; name: Eve; paternal aunt <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'PAUNT' = 'paternal aunt', given as 'paternal aunt'})</span></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: id: 6; status: completed; maternal uncle <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'MUNCLE' = 'maternal uncle', given as 'maternal uncle'})</span></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: id: 7; status: completed; natural sister <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'NSIS' = 'natural sister', given as 'natural sister'})</span></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: id: 8; status: completed; name: Alice; maternal cousin <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'MCOUSN' = 'maternal cousin', given as 'maternal cousin'})</span></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Family history of cancer of colon</a></p></blockquote></div>",
  },
  contained: [
    {
      resourceType: "FamilyMemberHistory",
      id: "1",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/family-member-history-genetics-parent",
          extension: [
            {
              url: "type",
              valueCodeableConcept: {
                coding: [
                  {
                    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
                    code: "FTH",
                    display: "father",
                  },
                ],
              },
            },
            {
              url: "reference",
              valueReference: {
                reference: "#2",
                display: "maternal grandfather",
              },
            },
          ],
        },
      ],
      status: "completed",
      patient: {
        reference: "Patient/example",
        display: "Peter Patient",
      },
      name: "Dave",
      relationship: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
            code: "FTH",
            display: "father",
          },
        ],
      },
    },
    {
      resourceType: "FamilyMemberHistory",
      id: "2",
      status: "completed",
      patient: {
        reference: "Patient/example",
        display: "Peter Patient",
      },
      relationship: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
            code: "MGRFTH",
            display: "maternal grandfather",
          },
        ],
      },
    },
    {
      resourceType: "FamilyMemberHistory",
      id: "3",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/family-member-history-genetics-parent",
          extension: [
            {
              url: "type",
              valueCodeableConcept: {
                coding: [
                  {
                    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
                    code: "MTH",
                    display: "mother",
                  },
                ],
              },
            },
            {
              url: "reference",
              valueReference: {
                reference: "#2",
                display: "maternal grandfather",
              },
            },
          ],
        },
      ],
      status: "completed",
      patient: {
        reference: "Patient/example",
        display: "Peter Patient",
      },
      relationship: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
            code: "MTH",
            display: "mother",
          },
        ],
      },
    },
    {
      resourceType: "FamilyMemberHistory",
      id: "4",
      status: "completed",
      patient: {
        reference: "Patient/example",
        display: "Peter Patient",
      },
      relationship: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
            code: "PGRMTH",
            display: "paternal grandmother",
          },
        ],
      },
    },
    {
      resourceType: "FamilyMemberHistory",
      id: "5",
      status: "completed",
      patient: {
        reference: "Patient/example",
        display: "Peter Patient",
      },
      name: "Eve",
      relationship: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
            code: "PAUNT",
            display: "paternal aunt",
          },
        ],
      },
    },
    {
      resourceType: "FamilyMemberHistory",
      id: "6",
      status: "completed",
      patient: {
        reference: "Patient/example",
        display: "Peter Patient",
      },
      relationship: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
            code: "MUNCLE",
            display: "maternal uncle",
          },
        ],
      },
    },
    {
      resourceType: "FamilyMemberHistory",
      id: "7",
      status: "completed",
      patient: {
        reference: "Patient/example",
        display: "Peter Patient",
      },
      relationship: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
            code: "NSIS",
            display: "natural sister",
          },
        ],
      },
    },
    {
      resourceType: "FamilyMemberHistory",
      id: "8",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/family-member-history-genetics-parent",
          extension: [
            {
              url: "type",
              valueCodeableConcept: {
                coding: [
                  {
                    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
                    code: "MTH",
                    display: "mother",
                  },
                ],
              },
            },
            {
              url: "reference",
              valueReference: {
                reference: "#2",
                display: "maternal grandfather",
              },
            },
          ],
        },
      ],
      status: "completed",
      patient: {
        reference: "Patient/example",
        display: "Peter Patient",
      },
      name: "Alice",
      relationship: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
            code: "MCOUSN",
            display: "maternal cousin",
          },
        ],
      },
    },
  ],
  status: "current",
  mode: "snapshot",
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "8670-2",
        display: "History of family member diseases",
      },
    ],
  },
  subject: {
    reference: "Patient/example",
    display: "Peter Patient",
  },
  entry: [
    {
      item: {
        reference: "#1",
      },
    },
    {
      item: {
        reference: "#2",
      },
    },
    {
      item: {
        reference: "#3",
      },
    },
    {
      item: {
        reference: "#4",
      },
    },
    {
      item: {
        reference: "#5",
      },
    },
    {
      item: {
        reference: "#6",
      },
    },
    {
      item: {
        reference: "#7",
      },
    },
    {
      item: {
        reference: "#8",
      },
    },
    {
      item: {
        reference: "Condition/family-history",
        display: "Family history of cancer of colon",
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

export const ListExampleLong: List = {
  resourceType: "List",
  id: "long",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: long</p><p><b>status</b>: current</p><p><b>mode</b>: changes</p><p><b>date</b>: 21/02/2018 12:17:00 PM</p><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/example</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/pat1</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/pat2</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/pat3</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/pat4</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/1</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/2</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/3</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/4</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/5</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/6</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/7</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/8</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/9</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/10</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/11</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/12</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/71</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/72</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/73</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/74</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/75</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/76</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/77</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/78</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/79</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/80</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/81</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/82</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/83</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/84</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/85</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/86</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/87</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/88</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/89</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/90</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/91</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/92</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/93</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/94</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/95</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/96</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/97</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/98</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/99</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/100</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/101</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/102</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/103</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/104</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/105</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/106</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/107</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/108</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/109</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/110</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/111</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/112</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/113</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/114</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/115</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/116</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/117</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/118</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/119</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/120</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/121</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/122</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/123</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/124</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/125</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/126</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/127</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/128</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/129</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/130</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/131</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/132</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/133</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/134</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/135</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/136</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/137</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/138</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/139</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/140</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/141</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/142</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/143</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/144</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/145</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/146</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/147</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/148</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/149</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/150</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/151</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/152</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/153</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/154</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/155</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/156</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/157</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/158</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/159</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/160</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/161</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/162</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/163</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/164</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/165</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/166</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/167</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/168</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/169</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/170</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/171</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/172</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/173</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/174</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/175</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/176</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/177</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/178</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/179</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/180</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/181</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/182</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/183</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/184</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/185</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/186</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/187</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/188</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/189</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/190</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/191</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/192</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/193</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/194</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/195</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/196</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/197</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/198</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/199</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/200</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/201</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/202</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/203</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/204</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/205</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/206</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/207</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/208</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/209</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/210</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/211</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/212</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/213</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/214</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/215</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/216</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/217</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/218</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/219</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/220</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/221</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/222</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/223</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/224</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/225</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/226</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/227</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/228</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/229</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/230</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/231</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/232</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/233</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/234</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/235</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/236</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/237</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/238</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/239</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/240</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/241</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/242</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/243</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/244</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/245</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/246</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/247</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/248</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/249</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/250</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/251</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/252</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/253</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/254</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/255</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/256</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/257</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/258</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/259</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/260</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/261</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/262</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/263</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/264</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/265</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/266</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/267</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/268</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/269</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/270</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/271</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/272</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/273</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/274</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/275</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/276</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/277</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/278</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/279</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/280</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/281</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/282</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/283</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/284</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/285</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/286</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/287</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/288</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/289</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/290</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/291</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/292</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/293</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/294</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/295</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/xcda</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/xds</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/animal</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/dicom</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/ihe-pcd</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/f001</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/f201</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/glossy</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/proband</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/genetics-example1</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/ch-example</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/newborn</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/mom</a></p></blockquote></div>',
  },
  status: "current",
  mode: "changes",
  date: "2018-02-21T12:17:00+11:00",
  entry: [
    {
      item: {
        reference: "Patient/example",
      },
    },
    {
      item: {
        reference: "Patient/pat1",
      },
    },
    {
      item: {
        reference: "Patient/pat2",
      },
    },
    {
      item: {
        reference: "Patient/pat3",
      },
    },
    {
      item: {
        reference: "Patient/pat4",
      },
    },
    {
      item: {
        reference: "Patient/1",
      },
    },
    {
      item: {
        reference: "Patient/2",
      },
    },
    {
      item: {
        reference: "Patient/3",
      },
    },
    {
      item: {
        reference: "Patient/4",
      },
    },
    {
      item: {
        reference: "Patient/5",
      },
    },
    {
      item: {
        reference: "Patient/6",
      },
    },
    {
      item: {
        reference: "Patient/7",
      },
    },
    {
      item: {
        reference: "Patient/8",
      },
    },
    {
      item: {
        reference: "Patient/9",
      },
    },
    {
      item: {
        reference: "Patient/10",
      },
    },
    {
      item: {
        reference: "Patient/11",
      },
    },
    {
      item: {
        reference: "Patient/12",
      },
    },
    {
      item: {
        reference: "Patient/71",
      },
    },
    {
      item: {
        reference: "Patient/72",
      },
    },
    {
      item: {
        reference: "Patient/73",
      },
    },
    {
      item: {
        reference: "Patient/74",
      },
    },
    {
      item: {
        reference: "Patient/75",
      },
    },
    {
      item: {
        reference: "Patient/76",
      },
    },
    {
      item: {
        reference: "Patient/77",
      },
    },
    {
      item: {
        reference: "Patient/78",
      },
    },
    {
      item: {
        reference: "Patient/79",
      },
    },
    {
      item: {
        reference: "Patient/80",
      },
    },
    {
      item: {
        reference: "Patient/81",
      },
    },
    {
      item: {
        reference: "Patient/82",
      },
    },
    {
      item: {
        reference: "Patient/83",
      },
    },
    {
      item: {
        reference: "Patient/84",
      },
    },
    {
      item: {
        reference: "Patient/85",
      },
    },
    {
      item: {
        reference: "Patient/86",
      },
    },
    {
      item: {
        reference: "Patient/87",
      },
    },
    {
      item: {
        reference: "Patient/88",
      },
    },
    {
      item: {
        reference: "Patient/89",
      },
    },
    {
      item: {
        reference: "Patient/90",
      },
    },
    {
      item: {
        reference: "Patient/91",
      },
    },
    {
      item: {
        reference: "Patient/92",
      },
    },
    {
      item: {
        reference: "Patient/93",
      },
    },
    {
      item: {
        reference: "Patient/94",
      },
    },
    {
      item: {
        reference: "Patient/95",
      },
    },
    {
      item: {
        reference: "Patient/96",
      },
    },
    {
      item: {
        reference: "Patient/97",
      },
    },
    {
      item: {
        reference: "Patient/98",
      },
    },
    {
      item: {
        reference: "Patient/99",
      },
    },
    {
      item: {
        reference: "Patient/100",
      },
    },
    {
      item: {
        reference: "Patient/101",
      },
    },
    {
      item: {
        reference: "Patient/102",
      },
    },
    {
      item: {
        reference: "Patient/103",
      },
    },
    {
      item: {
        reference: "Patient/104",
      },
    },
    {
      item: {
        reference: "Patient/105",
      },
    },
    {
      item: {
        reference: "Patient/106",
      },
    },
    {
      item: {
        reference: "Patient/107",
      },
    },
    {
      item: {
        reference: "Patient/108",
      },
    },
    {
      item: {
        reference: "Patient/109",
      },
    },
    {
      item: {
        reference: "Patient/110",
      },
    },
    {
      item: {
        reference: "Patient/111",
      },
    },
    {
      item: {
        reference: "Patient/112",
      },
    },
    {
      item: {
        reference: "Patient/113",
      },
    },
    {
      item: {
        reference: "Patient/114",
      },
    },
    {
      item: {
        reference: "Patient/115",
      },
    },
    {
      item: {
        reference: "Patient/116",
      },
    },
    {
      item: {
        reference: "Patient/117",
      },
    },
    {
      item: {
        reference: "Patient/118",
      },
    },
    {
      item: {
        reference: "Patient/119",
      },
    },
    {
      item: {
        reference: "Patient/120",
      },
    },
    {
      item: {
        reference: "Patient/121",
      },
    },
    {
      item: {
        reference: "Patient/122",
      },
    },
    {
      item: {
        reference: "Patient/123",
      },
    },
    {
      item: {
        reference: "Patient/124",
      },
    },
    {
      item: {
        reference: "Patient/125",
      },
    },
    {
      item: {
        reference: "Patient/126",
      },
    },
    {
      item: {
        reference: "Patient/127",
      },
    },
    {
      item: {
        reference: "Patient/128",
      },
    },
    {
      item: {
        reference: "Patient/129",
      },
    },
    {
      item: {
        reference: "Patient/130",
      },
    },
    {
      item: {
        reference: "Patient/131",
      },
    },
    {
      item: {
        reference: "Patient/132",
      },
    },
    {
      item: {
        reference: "Patient/133",
      },
    },
    {
      item: {
        reference: "Patient/134",
      },
    },
    {
      item: {
        reference: "Patient/135",
      },
    },
    {
      item: {
        reference: "Patient/136",
      },
    },
    {
      item: {
        reference: "Patient/137",
      },
    },
    {
      item: {
        reference: "Patient/138",
      },
    },
    {
      item: {
        reference: "Patient/139",
      },
    },
    {
      item: {
        reference: "Patient/140",
      },
    },
    {
      item: {
        reference: "Patient/141",
      },
    },
    {
      item: {
        reference: "Patient/142",
      },
    },
    {
      item: {
        reference: "Patient/143",
      },
    },
    {
      item: {
        reference: "Patient/144",
      },
    },
    {
      item: {
        reference: "Patient/145",
      },
    },
    {
      item: {
        reference: "Patient/146",
      },
    },
    {
      item: {
        reference: "Patient/147",
      },
    },
    {
      item: {
        reference: "Patient/148",
      },
    },
    {
      item: {
        reference: "Patient/149",
      },
    },
    {
      item: {
        reference: "Patient/150",
      },
    },
    {
      item: {
        reference: "Patient/151",
      },
    },
    {
      item: {
        reference: "Patient/152",
      },
    },
    {
      item: {
        reference: "Patient/153",
      },
    },
    {
      item: {
        reference: "Patient/154",
      },
    },
    {
      item: {
        reference: "Patient/155",
      },
    },
    {
      item: {
        reference: "Patient/156",
      },
    },
    {
      item: {
        reference: "Patient/157",
      },
    },
    {
      item: {
        reference: "Patient/158",
      },
    },
    {
      item: {
        reference: "Patient/159",
      },
    },
    {
      item: {
        reference: "Patient/160",
      },
    },
    {
      item: {
        reference: "Patient/161",
      },
    },
    {
      item: {
        reference: "Patient/162",
      },
    },
    {
      item: {
        reference: "Patient/163",
      },
    },
    {
      item: {
        reference: "Patient/164",
      },
    },
    {
      item: {
        reference: "Patient/165",
      },
    },
    {
      item: {
        reference: "Patient/166",
      },
    },
    {
      item: {
        reference: "Patient/167",
      },
    },
    {
      item: {
        reference: "Patient/168",
      },
    },
    {
      item: {
        reference: "Patient/169",
      },
    },
    {
      item: {
        reference: "Patient/170",
      },
    },
    {
      item: {
        reference: "Patient/171",
      },
    },
    {
      item: {
        reference: "Patient/172",
      },
    },
    {
      item: {
        reference: "Patient/173",
      },
    },
    {
      item: {
        reference: "Patient/174",
      },
    },
    {
      item: {
        reference: "Patient/175",
      },
    },
    {
      item: {
        reference: "Patient/176",
      },
    },
    {
      item: {
        reference: "Patient/177",
      },
    },
    {
      item: {
        reference: "Patient/178",
      },
    },
    {
      item: {
        reference: "Patient/179",
      },
    },
    {
      item: {
        reference: "Patient/180",
      },
    },
    {
      item: {
        reference: "Patient/181",
      },
    },
    {
      item: {
        reference: "Patient/182",
      },
    },
    {
      item: {
        reference: "Patient/183",
      },
    },
    {
      item: {
        reference: "Patient/184",
      },
    },
    {
      item: {
        reference: "Patient/185",
      },
    },
    {
      item: {
        reference: "Patient/186",
      },
    },
    {
      item: {
        reference: "Patient/187",
      },
    },
    {
      item: {
        reference: "Patient/188",
      },
    },
    {
      item: {
        reference: "Patient/189",
      },
    },
    {
      item: {
        reference: "Patient/190",
      },
    },
    {
      item: {
        reference: "Patient/191",
      },
    },
    {
      item: {
        reference: "Patient/192",
      },
    },
    {
      item: {
        reference: "Patient/193",
      },
    },
    {
      item: {
        reference: "Patient/194",
      },
    },
    {
      item: {
        reference: "Patient/195",
      },
    },
    {
      item: {
        reference: "Patient/196",
      },
    },
    {
      item: {
        reference: "Patient/197",
      },
    },
    {
      item: {
        reference: "Patient/198",
      },
    },
    {
      item: {
        reference: "Patient/199",
      },
    },
    {
      item: {
        reference: "Patient/200",
      },
    },
    {
      item: {
        reference: "Patient/201",
      },
    },
    {
      item: {
        reference: "Patient/202",
      },
    },
    {
      item: {
        reference: "Patient/203",
      },
    },
    {
      item: {
        reference: "Patient/204",
      },
    },
    {
      item: {
        reference: "Patient/205",
      },
    },
    {
      item: {
        reference: "Patient/206",
      },
    },
    {
      item: {
        reference: "Patient/207",
      },
    },
    {
      item: {
        reference: "Patient/208",
      },
    },
    {
      item: {
        reference: "Patient/209",
      },
    },
    {
      item: {
        reference: "Patient/210",
      },
    },
    {
      item: {
        reference: "Patient/211",
      },
    },
    {
      item: {
        reference: "Patient/212",
      },
    },
    {
      item: {
        reference: "Patient/213",
      },
    },
    {
      item: {
        reference: "Patient/214",
      },
    },
    {
      item: {
        reference: "Patient/215",
      },
    },
    {
      item: {
        reference: "Patient/216",
      },
    },
    {
      item: {
        reference: "Patient/217",
      },
    },
    {
      item: {
        reference: "Patient/218",
      },
    },
    {
      item: {
        reference: "Patient/219",
      },
    },
    {
      item: {
        reference: "Patient/220",
      },
    },
    {
      item: {
        reference: "Patient/221",
      },
    },
    {
      item: {
        reference: "Patient/222",
      },
    },
    {
      item: {
        reference: "Patient/223",
      },
    },
    {
      item: {
        reference: "Patient/224",
      },
    },
    {
      item: {
        reference: "Patient/225",
      },
    },
    {
      item: {
        reference: "Patient/226",
      },
    },
    {
      item: {
        reference: "Patient/227",
      },
    },
    {
      item: {
        reference: "Patient/228",
      },
    },
    {
      item: {
        reference: "Patient/229",
      },
    },
    {
      item: {
        reference: "Patient/230",
      },
    },
    {
      item: {
        reference: "Patient/231",
      },
    },
    {
      item: {
        reference: "Patient/232",
      },
    },
    {
      item: {
        reference: "Patient/233",
      },
    },
    {
      item: {
        reference: "Patient/234",
      },
    },
    {
      item: {
        reference: "Patient/235",
      },
    },
    {
      item: {
        reference: "Patient/236",
      },
    },
    {
      item: {
        reference: "Patient/237",
      },
    },
    {
      item: {
        reference: "Patient/238",
      },
    },
    {
      item: {
        reference: "Patient/239",
      },
    },
    {
      item: {
        reference: "Patient/240",
      },
    },
    {
      item: {
        reference: "Patient/241",
      },
    },
    {
      item: {
        reference: "Patient/242",
      },
    },
    {
      item: {
        reference: "Patient/243",
      },
    },
    {
      item: {
        reference: "Patient/244",
      },
    },
    {
      item: {
        reference: "Patient/245",
      },
    },
    {
      item: {
        reference: "Patient/246",
      },
    },
    {
      item: {
        reference: "Patient/247",
      },
    },
    {
      item: {
        reference: "Patient/248",
      },
    },
    {
      item: {
        reference: "Patient/249",
      },
    },
    {
      item: {
        reference: "Patient/250",
      },
    },
    {
      item: {
        reference: "Patient/251",
      },
    },
    {
      item: {
        reference: "Patient/252",
      },
    },
    {
      item: {
        reference: "Patient/253",
      },
    },
    {
      item: {
        reference: "Patient/254",
      },
    },
    {
      item: {
        reference: "Patient/255",
      },
    },
    {
      item: {
        reference: "Patient/256",
      },
    },
    {
      item: {
        reference: "Patient/257",
      },
    },
    {
      item: {
        reference: "Patient/258",
      },
    },
    {
      item: {
        reference: "Patient/259",
      },
    },
    {
      item: {
        reference: "Patient/260",
      },
    },
    {
      item: {
        reference: "Patient/261",
      },
    },
    {
      item: {
        reference: "Patient/262",
      },
    },
    {
      item: {
        reference: "Patient/263",
      },
    },
    {
      item: {
        reference: "Patient/264",
      },
    },
    {
      item: {
        reference: "Patient/265",
      },
    },
    {
      item: {
        reference: "Patient/266",
      },
    },
    {
      item: {
        reference: "Patient/267",
      },
    },
    {
      item: {
        reference: "Patient/268",
      },
    },
    {
      item: {
        reference: "Patient/269",
      },
    },
    {
      item: {
        reference: "Patient/270",
      },
    },
    {
      item: {
        reference: "Patient/271",
      },
    },
    {
      item: {
        reference: "Patient/272",
      },
    },
    {
      item: {
        reference: "Patient/273",
      },
    },
    {
      item: {
        reference: "Patient/274",
      },
    },
    {
      item: {
        reference: "Patient/275",
      },
    },
    {
      item: {
        reference: "Patient/276",
      },
    },
    {
      item: {
        reference: "Patient/277",
      },
    },
    {
      item: {
        reference: "Patient/278",
      },
    },
    {
      item: {
        reference: "Patient/279",
      },
    },
    {
      item: {
        reference: "Patient/280",
      },
    },
    {
      item: {
        reference: "Patient/281",
      },
    },
    {
      item: {
        reference: "Patient/282",
      },
    },
    {
      item: {
        reference: "Patient/283",
      },
    },
    {
      item: {
        reference: "Patient/284",
      },
    },
    {
      item: {
        reference: "Patient/285",
      },
    },
    {
      item: {
        reference: "Patient/286",
      },
    },
    {
      item: {
        reference: "Patient/287",
      },
    },
    {
      item: {
        reference: "Patient/288",
      },
    },
    {
      item: {
        reference: "Patient/289",
      },
    },
    {
      item: {
        reference: "Patient/290",
      },
    },
    {
      item: {
        reference: "Patient/291",
      },
    },
    {
      item: {
        reference: "Patient/292",
      },
    },
    {
      item: {
        reference: "Patient/293",
      },
    },
    {
      item: {
        reference: "Patient/294",
      },
    },
    {
      item: {
        reference: "Patient/295",
      },
    },
    {
      item: {
        reference: "Patient/xcda",
      },
    },
    {
      item: {
        reference: "Patient/xds",
      },
    },
    {
      item: {
        reference: "Patient/animal",
      },
    },
    {
      item: {
        reference: "Patient/dicom",
      },
    },
    {
      item: {
        reference: "Patient/ihe-pcd",
      },
    },
    {
      item: {
        reference: "Patient/f001",
      },
    },
    {
      item: {
        reference: "Patient/f201",
      },
    },
    {
      item: {
        reference: "Patient/glossy",
      },
    },
    {
      item: {
        reference: "Patient/proband",
      },
    },
    {
      item: {
        reference: "Patient/genetics-example1",
      },
    },
    {
      item: {
        reference: "Patient/ch-example",
      },
    },
    {
      item: {
        reference: "Patient/newborn",
      },
    },
    {
      item: {
        reference: "Patient/mom",
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

export const ListExampleMedlist: List = {
  resourceType: "List",
  id: "med-list",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>Add hydroxocobalamin</p>\n      <p>Cancel Morphine Sulphate</p>\n    </div>',
  },
  status: "current",
  mode: "changes",
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "182836005",
        display: "Review of medication",
      },
    ],
    text: "Medication Review",
  },
  date: "2013-11-20T23:10:23+11:00",
  source: {
    reference: "Patient/example",
  },
  entry: [
    {
      flag: {
        coding: [
          {
            system: "http://nehta.gov.au/codes/medications/changetype",
            code: "01",
            display: "Prescribed",
          },
        ],
      },
      item: {
        display: "hydroxocobalamin",
      },
    },
    {
      flag: {
        coding: [
          {
            system: "http://nehta.gov.au/codes/medications/changetype",
            code: "02",
            display: "Cancelled",
          },
        ],
      },
      deleted: true,
      item: {
        display: "Morphine Sulfate",
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

export const ListExampleSimpleEmpty: List = {
  resourceType: "List",
  id: "example-simple-empty",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>Patient Admission Waitoing list</p>\n    </div>',
  },
  status: "current",
  mode: "snapshot",
  code: {
    coding: [
      {
        system: "http://acme.com/list-codes",
        code: "346638",
        display: "Patient Admission List",
      },
    ],
  },
  date: "2016-07-14T11:54:05+10:00",
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

export const ListExample: List = {
  resourceType: "List",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <table>\n        <thead>\n          <tr>\n            <th>Condition</th>\n            <th>Severity</th>\n            <th>Date</th>\n            <th>Location</th>\n            <th>Status</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>Burnt Ear</td>\n            <td>Severe</td>\n            <td>24-May 2012</td>\n            <td>Left Ear</td>\n            <td>deleted</td>\n          </tr>\n          <tr>\n            <td>Asthma</td>\n            <td>Mild</td>\n            <td>21-Nov 2012</td>\n            <td>--</td>\n            <td>added</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>',
  },
  identifier: [
    {
      system: "urn:uuid:a9fcea7c-fcdf-4d17-a5e0-f26dda030b59",
      value: "23974652",
    },
  ],
  status: "current",
  mode: "changes",
  subject: {
    reference: "Patient/example",
  },
  encounter: {
    reference: "Encounter/example",
  },
  date: "2012-11-25T22:17:00+11:00",
  source: {
    reference: "Patient/example",
  },
  entry: [
    {
      flag: {
        text: "Deleted due to error",
      },
      deleted: true,
      item: {
        reference: "Condition/example",
      },
    },
    {
      flag: {
        text: "Added",
      },
      item: {
        reference: "Condition/example2",
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
