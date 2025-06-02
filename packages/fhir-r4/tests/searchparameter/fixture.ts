import type { SearchParameter } from "../../src/v4.0.1/searchparameter/types";

export const CodesystemExtensionsCodesystemAuthor: SearchParameter = {
  resourceType: "SearchParameter",
  id: "codesystem-extensions-CodeSystem-author",
  url: "http://hl7.org/fhir/SearchParameter/codesystem-extensions-CodeSystem-author",
  version: "4.0.1",
  name: "author",
  status: "draft",
  experimental: true,
  description: "Optional Extensions Element",
  code: "author",
  type: "string",
  xpath:
    "f:CodeSystem/f:extension[@url='http://hl7.org/fhir/StructureDefinition/codesystem-author'] | /f:#author",
  xpathUsage: "normal",
} as const;

export const CodesystemExtensionsCodesystemEffective: SearchParameter = {
  resourceType: "SearchParameter",
  id: "codesystem-extensions-CodeSystem-effective",
  url: "http://hl7.org/fhir/SearchParameter/codesystem-extensions-CodeSystem-effective",
  version: "4.0.1",
  name: "effective",
  status: "draft",
  experimental: true,
  description: "Optional Extensions Element",
  code: "effective",
  type: "date",
  xpath:
    "f:CodeSystem/f:extension[@url='http://hl7.org/fhir/StructureDefinition/codesystem-effectiveDate'] | /f:#effectiveDate",
  xpathUsage: "normal",
} as const;

export const CodesystemExtensionsCodesystemEnd: SearchParameter = {
  resourceType: "SearchParameter",
  id: "codesystem-extensions-CodeSystem-end",
  url: "http://hl7.org/fhir/SearchParameter/codesystem-extensions-CodeSystem-end",
  version: "4.0.1",
  name: "end",
  status: "draft",
  experimental: true,
  description: "Optional Extensions Element",
  code: "end",
  type: "date",
  xpath:
    "f:CodeSystem/f:extension[@url='http://hl7.org/fhir/StructureDefinition/codesystem-expirationDate'] | /f:#expirationDate",
  xpathUsage: "normal",
} as const;

export const CodesystemExtensionsCodesystemKeyword: SearchParameter = {
  resourceType: "SearchParameter",
  id: "codesystem-extensions-CodeSystem-keyword",
  url: "http://hl7.org/fhir/SearchParameter/codesystem-extensions-CodeSystem-keyword",
  version: "4.0.1",
  name: "keyword",
  status: "draft",
  experimental: true,
  description: "Optional Extensions Element",
  code: "keyword",
  type: "string",
  xpath:
    "f:CodeSystem/f:extension[@url='http://hl7.org/fhir/StructureDefinition/codesystem-keyWord'] | /f:#keyWord",
  xpathUsage: "normal",
} as const;

export const CodesystemExtensionsCodesystemWorkflow: SearchParameter = {
  resourceType: "SearchParameter",
  id: "codesystem-extensions-CodeSystem-workflow",
  url: "http://hl7.org/fhir/SearchParameter/codesystem-extensions-CodeSystem-workflow",
  version: "4.0.1",
  name: "workflow",
  status: "draft",
  experimental: true,
  description: "Optional Extensions Element",
  code: "workflow",
  type: "token",
  xpath:
    "f:CodeSystem/f:extension[@url='http://hl7.org/fhir/StructureDefinition/codesystem-workflowStatus'] | /f:#workflowStatus",
  xpathUsage: "normal",
} as const;

export const DeviceExtensionsDeviceDin: SearchParameter = {
  resourceType: "SearchParameter",
  id: "device-extensions-Device-din",
  url: "http://hl7.org/fhir/SearchParameter/device-extensions-Device-din",
  version: "4.0.1",
  name: "din",
  status: "draft",
  experimental: true,
  description: "The donation identification number (DIN)",
  code: "din",
  base: ["Device"],
  type: "token",
  expression:
    "Device.extension('http://hl7.org/fhir/SearchParameter/device-extensions-Device-din')",
  xpathUsage: "normal",
} as const;

export const DiagnosticreportGeneticDiagnosticreportAssessedCondition: SearchParameter =
  {
    resourceType: "SearchParameter",
    id: "diagnosticreport-genetic-DiagnosticReport-assessed-condition",
    url: "http://hl7.org/fhir/SearchParameter/diagnosticreport-genetic-DiagnosticReport-assessed-condition",
    version: "4.0.1",
    name: "assessed-condition",
    status: "draft",
    experimental: true,
    description: "Condition assessed by genetic test",
    code: "assessed-condition",
    base: ["DiagnosticReport"],
    type: "reference",
    expression:
      "DiagnosticReport.extension('http://hl7.org/fhir/StructureDefinition/DiagnosticReport-geneticsAssessedCondition')",
    xpathUsage: "normal",
  } as const;

export const ObservationGeneticObservationAminoAcidChange: SearchParameter = {
  resourceType: "SearchParameter",
  id: "observation-genetic-Observation-amino-acid-change",
  url: "http://hl7.org/fhir/SearchParameter/observation-genetic-Observation-amino-acid-change",
  version: "4.0.1",
  name: "amino-acid-change",
  status: "draft",
  experimental: true,
  description: "HGVS Protein Change",
  code: "amino-acid-change",
  base: ["Observation"],
  type: "string",
  expression:
    "Observation.extension('http://hl7.org/fhir/StructureDefinition/observation-geneticsAminoAcidChangeName')",
  xpathUsage: "normal",
} as const;

export const ObservationGeneticObservationDnaVariant: SearchParameter = {
  resourceType: "SearchParameter",
  id: "observation-genetic-Observation-dna-variant",
  url: "http://hl7.org/fhir/SearchParameter/observation-genetic-Observation-dna-variant",
  version: "4.0.1",
  name: "dna-variant",
  status: "draft",
  experimental: true,
  description: "HGVS DNA variant",
  code: "dna-variant",
  base: ["Observation"],
  type: "string",
  expression:
    "Observation.extension('http://hl7.org/fhir/StructureDefinition/observation-geneticsDnaVariant')",
  xpathUsage: "normal",
} as const;

export const ObservationGeneticObservationGeneAminoAcidChange: SearchParameter =
  {
    resourceType: "SearchParameter",
    id: "observation-genetic-Observation-gene-amino-acid-change",
    url: "http://hl7.org/fhir/SearchParameter/observation-genetic-Observation-gene-amino-acid-change",
    version: "4.0.1",
    name: "gene-amino-acid-change",
    status: "draft",
    experimental: true,
    description: "HGNC gene symbol and HGVS Protein change",
    code: "gene-amino-acid-change",
    base: ["Observation"],
    type: "string",
    expression:
      "Observation.extension('http://hl7.org/fhir/StructureDefinition/observation-geneticsAminoAcidChangeName')",
    xpathUsage: "normal",
  } as const;

export const ObservationGeneticObservationGeneDnavariant: SearchParameter = {
  resourceType: "SearchParameter",
  id: "observation-genetic-Observation-gene-dnavariant",
  url: "http://hl7.org/fhir/SearchParameter/observation-genetic-Observation-gene-dnavariant",
  version: "4.0.1",
  name: "gene-dnavariant",
  status: "draft",
  experimental: true,
  description: "HGNC gene symbol and HGVS DNA Variant",
  code: "gene-dnavariant",
  base: ["Observation"],
  type: "string",
  expression:
    "Observation.extension('http://hl7.org/fhir/StructureDefinition/observation-geneticsDnaVariant')",
  xpathUsage: "normal",
} as const;

export const ObservationGeneticObservationGeneIdentifier: SearchParameter = {
  resourceType: "SearchParameter",
  id: "observation-genetic-Observation-gene-identifier",
  url: "http://hl7.org/fhir/SearchParameter/observation-genetic-Observation-gene-identifier",
  version: "4.0.1",
  name: "gene-identifier",
  status: "draft",
  experimental: true,
  description: "HGNC gene symbol and identifier",
  code: "gene-identifier",
  base: ["Observation"],
  type: "token",
  expression:
    "Observation.extension('http://hl7.org/fhir/StructureDefinition/observation-geneticsGene')",
  xpathUsage: "normal",
} as const;

export const PatientExtensionsPatientAge: SearchParameter = {
  resourceType: "SearchParameter",
  id: "patient-extensions-Patient-age",
  url: "http://hl7.org/fhir/SearchParameter/patient-extensions-Patient-age",
  version: "4.0.1",
  name: "age",
  status: "draft",
  experimental: true,
  description:
    "Searches for patients based on age as calculated based on current date and date of birth.  Deceased patients are excluded from the search.",
  code: "age",
  base: ["Patient"],
  type: "number",
  xpath: "f:Patient/f:birthDate",
  xpathUsage: "normal",
} as const;

export const PatientExtensionsPatientBirthorderboolean: SearchParameter = {
  resourceType: "SearchParameter",
  id: "patient-extensions-Patient-birthOrderBoolean",
  url: "http://hl7.org/fhir/SearchParameter/patient-extensions-Patient-birthOrderBoolean",
  version: "4.0.1",
  name: "birthOrderBoolean",
  status: "draft",
  experimental: true,
  description:
    "Search based on whether a patient was part of a multiple birth or not.",
  code: "birthOrderBoolean",
  base: ["Patient"],
  type: "token",
  xpath: "f:Patient/f:multipleBirthBoolean | f:Patient/f:multipleBirthInteger",
  xpathUsage: "normal",
} as const;

export const PatientExtensionsPatientMothersmaidenname: SearchParameter = {
  resourceType: "SearchParameter",
  id: "patient-extensions-Patient-mothersMaidenName",
  url: "http://hl7.org/fhir/SearchParameter/patient-extensions-Patient-mothersMaidenName",
  version: "4.0.1",
  name: "mothersMaidenName",
  status: "draft",
  experimental: true,
  description: "Search based on patient's mother's maiden name",
  code: "mothersMaidenName",
  base: ["Patient"],
  type: "string",
  expression:
    "Patient.extension('http://hl7.org/fhir/StructureDefinition/patient-extensions-Patient-mothersMaidenName')",
  xpathUsage: "normal",
} as const;

export const SearchparameterExampleExtension: SearchParameter = {
  resourceType: "SearchParameter",
  id: "example-extension",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-extension</p><p><b>url</b>: <b>http://hl7.org/fhir/SearchParameter/example-extension</b></p><p><b>name</b>: Example Search Parameter on an extension</p><p><b>status</b>: draft</p><p><b>experimental</b>: true</p><p><b>publisher</b>: Health Level Seven International (FHIR Infrastructure)</p><p><b>contact</b>: </p><p><b>description</b>: Search by url for a participation agreement, which is stored in a DocumentReference</p><p><b>code</b>: part-agree</p><p><b>base</b>: Patient</p><p><b>type</b>: reference</p><p><b>expression</b>: DocumentReference.extension('http://example.org/fhir/StructureDefinition/participation-agreement')</p><p><b>xpath</b>: f:DocumentReference/f:extension[@url='http://example.org/fhir/StructureDefinition/participation-agreement']</p><p><b>xpathUsage</b>: normal</p><p><b>target</b>: DocumentReference</p></div>",
  },
  url: "http://hl7.org/fhir/SearchParameter/example-extension",
  name: "Example Search Parameter on an extension",
  status: "draft",
  experimental: true,
  publisher: "Health Level Seven International (FHIR Infrastructure)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  description:
    "Search by url for a participation agreement, which is stored in a DocumentReference",
  code: "part-agree",
  base: ["Patient"],
  type: "reference",
  expression:
    "DocumentReference.extension('http://example.org/fhir/StructureDefinition/participation-agreement')",
  xpath:
    "f:DocumentReference/f:extension[@url='http://example.org/fhir/StructureDefinition/participation-agreement']",
  xpathUsage: "normal",
  target: ["DocumentReference"],
} as const;

export const SearchparameterExampleReference: SearchParameter = {
  resourceType: "SearchParameter",
  id: "example-reference",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-reference</p><p><b>url</b>: <b>http://hl7.org/fhir/SearchParameter/example-reference</b></p><p><b>name</b>: Example Search Parameter</p><p><b>status</b>: draft</p><p><b>experimental</b>: true</p><p><b>date</b>: 23/10/2013</p><p><b>publisher</b>: Health Level Seven International (FHIR Infrastructure)</p><p><b>contact</b>: </p><p><b>description</b>: Search by condition subject</p><p><b>purpose</b>: Need to search Condition by subject</p><p><b>code</b>: subject</p><p><b>base</b>: Condition</p><p><b>type</b>: reference</p><p><b>expression</b>: Condition.subject</p><p><b>xpathUsage</b>: normal</p><p><b>target</b>: Organization</p><p><b>modifier</b>: missing</p><p><b>chain</b>: name, identifier</p></div>',
  },
  url: "http://hl7.org/fhir/SearchParameter/example-reference",
  name: "Example Search Parameter",
  status: "draft",
  experimental: true,
  date: "2013-10-23",
  publisher: "Health Level Seven International (FHIR Infrastructure)",
  contact: [
    {
      name: "[string]",
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  description: "Search by condition subject",
  purpose: "Need to search Condition by subject",
  code: "subject",
  base: ["Condition"],
  type: "reference",
  expression: "Condition.subject",
  xpathUsage: "normal",
  target: ["Organization"],
  modifier: ["missing"],
  chain: ["name", "identifier"],
} as const;

export const SearchparameterExample: SearchParameter = {
  resourceType: "SearchParameter",
  id: "example",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>url</b>: <b>http://hl7.org/fhir/SearchParameter/example</b></p><p><b>version</b>: 1</p><p><b>name</b>: ID-SEARCH-PARAMETER</p><p><b>derivedFrom</b>: <a>http://hl7.org/fhir/SearchParameter/Resource-id</a></p><p><b>status</b>: draft</p><p><b>experimental</b>: true</p><p><b>date</b>: 23/10/2013</p><p><b>publisher</b>: Health Level Seven International (FHIR Infrastructure)</p><p><b>contact</b>: </p><p><b>description</b>: Search by resource identifier - e.g. same as the read interaction, but can return included resources</p><p><b>useContext</b>: </p><p><b>jurisdiction</b>: United States of America (the) <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America', given as 'United States of America (the)'})</span></p><p><b>purpose</b>: Need to search by identifier for various infrastructural cases - mainly retrieving packages, and matching as part of a chain</p><p><b>code</b>: _id</p><p><b>base</b>: Resource</p><p><b>type</b>: token</p><p><b>expression</b>: id</p><p><b>xpath</b>: f:*/f:id</p><p><b>xpathUsage</b>: normal</p><p><b>comparator</b>: eq</p></div>",
  },
  url: "http://hl7.org/fhir/SearchParameter/example",
  version: "1",
  name: "ID-SEARCH-PARAMETER",
  derivedFrom: "http://hl7.org/fhir/SearchParameter/Resource-id",
  status: "draft",
  experimental: true,
  date: "2013-10-23",
  publisher: "Health Level Seven International (FHIR Infrastructure)",
  contact: [
    {
      name: "[string]",
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  description:
    "Search by resource identifier - e.g. same as the read interaction, but can return included resources",
  useContext: [
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "focus",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/variant-state",
            code: "positive",
          },
        ],
      },
    },
  ],
  jurisdiction: [
    {
      coding: [
        {
          system: "urn:iso:std:iso:3166",
          code: "US",
          display: "United States of America (the)",
        },
      ],
    },
  ],
  purpose:
    "Need to search by identifier for various infrastructural cases - mainly retrieving packages, and matching as part of a chain",
  code: "_id",
  base: ["Resource"],
  type: "token",
  expression: "id",
  xpath: "f:*/f:id",
  xpathUsage: "normal",
  comparator: ["eq"],
} as const;

export const SearchparameterFilter: SearchParameter = {
  resourceType: "SearchParameter",
  id: "filter",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: filter</p><p><b>url</b>: <b>http://hl7.org/fhir/SearchParameter/filter</b></p><p><b>version</b>: 1</p><p><b>name</b>: FilterSearchParameter</p><p><b>status</b>: draft</p><p><b>experimental</b>: false</p><p><b>date</b>: 26/07/2018</p><p><b>publisher</b>: Health Level Seven International (FHIR Infrastructure)</p><p><b>contact</b>: </p><p><b>description</b>: This is the formal declaration for the _filter parameter, documented at [http://hl7.org/fhir/search_filter.html](http://hl7.org/fhir/search_filter.html)</p><p><b>purpose</b>: Support combination searches when the simple name=value basis of search cannot express what is required</p><p><b>code</b>: _filter</p><p><b>base</b>: Resource</p><p><b>type</b>: special</p></div>',
  },
  url: "http://hl7.org/fhir/SearchParameter/filter",
  version: "1",
  name: "FilterSearchParameter",
  status: "draft",
  experimental: false,
  date: "2018-07-26",
  publisher: "Health Level Seven International (FHIR Infrastructure)",
  contact: [
    {
      name: "FHIR Project",
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  description:
    "This is the formal declaration for the _filter parameter, documented at [http://hl7.org/fhir/search_filter.html](http://hl7.org/fhir/search_filter.html)",
  purpose:
    "Support combination searches when the simple name=value basis of search cannot express what is required",
  code: "_filter",
  base: ["Resource"],
  type: "special",
} as const;

export const ValuesetExtensionsValuesetAuthor: SearchParameter = {
  resourceType: "SearchParameter",
  id: "valueset-extensions-ValueSet-author",
  url: "http://hl7.org/fhir/SearchParameter/valueset-extensions-ValueSet-author",
  version: "4.0.1",
  name: "author",
  status: "draft",
  experimental: true,
  description: "Optional Extensions Element",
  code: "author",
  type: "string",
  xpath:
    "f:ValueSet/f:extension[@url='http://hl7.org/fhir/StructureDefinition/valueset-author'] | /f:#author",
  xpathUsage: "normal",
} as const;

export const ValuesetExtensionsValuesetEffective: SearchParameter = {
  resourceType: "SearchParameter",
  id: "valueset-extensions-ValueSet-effective",
  url: "http://hl7.org/fhir/SearchParameter/valueset-extensions-ValueSet-effective",
  version: "4.0.1",
  name: "effective",
  status: "draft",
  experimental: true,
  description: "Optional Extensions Element",
  code: "effective",
  type: "date",
  xpath:
    "f:ValueSet/f:extension[@url='http://hl7.org/fhir/StructureDefinition/valueset-effectiveDate'] | /f:#effectiveDate",
  xpathUsage: "normal",
} as const;

export const ValuesetExtensionsValuesetEnd: SearchParameter = {
  resourceType: "SearchParameter",
  id: "valueset-extensions-ValueSet-end",
  url: "http://hl7.org/fhir/SearchParameter/valueset-extensions-ValueSet-end",
  version: "4.0.1",
  name: "end",
  status: "draft",
  experimental: true,
  description: "Optional Extensions Element",
  code: "end",
  type: "date",
  xpath:
    "f:ValueSet/f:extension[@url='http://hl7.org/fhir/StructureDefinition/valueset-expirationDate'] | /f:#expirationDate",
  xpathUsage: "normal",
} as const;

export const ValuesetExtensionsValuesetKeyword: SearchParameter = {
  resourceType: "SearchParameter",
  id: "valueset-extensions-ValueSet-keyword",
  url: "http://hl7.org/fhir/SearchParameter/valueset-extensions-ValueSet-keyword",
  version: "4.0.1",
  name: "keyword",
  status: "draft",
  experimental: true,
  description: "Optional Extensions Element",
  code: "keyword",
  type: "string",
  xpath:
    "f:ValueSet/f:extension[@url='http://hl7.org/fhir/StructureDefinition/valueset-keyWord'] | /f:#keyWord",
  xpathUsage: "normal",
} as const;

export const ValuesetExtensionsValuesetWorkflow: SearchParameter = {
  resourceType: "SearchParameter",
  id: "valueset-extensions-ValueSet-workflow",
  url: "http://hl7.org/fhir/SearchParameter/valueset-extensions-ValueSet-workflow",
  version: "4.0.1",
  name: "workflow",
  status: "draft",
  experimental: true,
  description: "Optional Extensions Element",
  code: "workflow",
  type: "token",
  xpath:
    "f:ValueSet/f:extension[@url='http://hl7.org/fhir/StructureDefinition/valueset-workflowStatus'] | /f:#workflowStatus",
  xpathUsage: "normal",
} as const;
