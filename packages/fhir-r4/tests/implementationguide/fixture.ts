import type { ImplementationGuide } from "../../src/v4.0.1/implementationguide/types";

export const ImplementationguideExample: ImplementationGuide = {
  resourceType: "ImplementationGuide",
  id: "example",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>url</b>: <b>http://hl7.org/fhir/us/daf</b></p><p><b>version</b>: 0</p><p><b>name</b>: Data Access Framework (DAF)</p><p><b>status</b>: draft</p><p><b>experimental</b>: false</p><p><b>date</b>: 01/01/2015</p><p><b>publisher</b>: ONC / HL7 Joint project</p><p><b>contact</b>: , </p><p><b>description</b>: The Data Access Framework (DAF) Initiative leverages the HL7 FHIR standards to standardize access to Meaningful Use Stage 2 structured information both within the organization and from external organizations</p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><p><b>copyright</b>: Published by ONC under the standard FHIR license (CC0)</p><p><b>packageId</b>: hl7.fhir.us.daf</p><p><b>license</b>: CC0-1.0</p><p><b>fhirVersion</b>: 4.0.1</p><h3>DependsOns</h3><table><tr><td>-</td><td><b>Uri</b></td></tr><tr><td>*</td><td><a>http://hl7.org/fhir/ImplementationGuide/uscore</a></td></tr></table><h3>Globals</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>Profile</b></td></tr><tr><td>*</td><td>Patient</td><td><a>http://hl7.org/fhir/us/core/StructureDefinition/patient</a></td></tr></table><blockquote><p><b>definition</b></p><h3>Groupings</h3><table><tr><td>-</td><td><b>Name</b></td><td><b>Description</b></td></tr><tr><td>*</td><td>test</td><td>Base package (not broken up into multiple packages)</td></tr></table><h3>Resources</h3><table><tr><td>-</td><td><b>Reference</b></td><td><b>Name</b></td><td><b>Description</b></td><td><b>Example[x]</b></td></tr><tr><td>*</td><td><a>Patient/test</a></td><td>Test Example</td><td>A test example to show how an implementation guide works</td><td><a>http://hl7.org/fhir/us/core/StructureDefinition/patient</a></td></tr></table><blockquote><p><b>page</b></p><p><b>name</b>: <a>patient-example.html</a></p><p><b>title</b>: Example Patient Page</p><p><b>generation</b>: html</p><h3>Pages</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><h3>Parameters</h3><table><tr><td>-</td><td><b>Code</b></td><td><b>Value</b></td></tr><tr><td>*</td><td>apply</td><td>version</td></tr></table></blockquote><blockquote><p><b>manifest</b></p><p><b>rendering</b>: <a>http://hl7.org/fhir/us/daf</a></p><h3>Resources</h3><table><tr><td>-</td><td><b>Reference</b></td><td><b>Example[x]</b></td><td><b>RelativePath</b></td></tr><tr><td>*</td><td><a>Patient/test</a></td><td><a>http://hl7.org/fhir/us/core/StructureDefinition/patient</a></td><td><a>patient-test.html#patient-test</a></td></tr></table><h3>Pages</h3><table><tr><td>-</td><td><b>Name</b></td><td><b>Title</b></td><td><b>Anchor</b></td></tr><tr><td>*</td><td>patient-test.html</td><td>Test Patient Example</td><td>patient-test</td></tr></table><p><b>image</b>: fhir.png</p><p><b>other</b>: fhir.css</p></blockquote></div>",
  },
  url: "http://hl7.org/fhir/us/daf",
  version: "0",
  name: "Data Access Framework (DAF)",
  status: "draft",
  experimental: false,
  date: "2015-01-01",
  publisher: "ONC / HL7 Joint project",
  contact: [
    {
      name: "ONC",
      telecom: [
        {
          system: "url",
          value: "http://www.healthit.gov",
        },
      ],
    },
    {
      name: "HL7",
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  description:
    "The Data Access Framework (DAF) Initiative leverages the HL7 FHIR standards to standardize access to Meaningful Use Stage 2 structured information both within the organization and from external organizations",
  jurisdiction: [
    {
      coding: [
        {
          system: "urn:iso:std:iso:3166",
          code: "US",
        },
      ],
    },
  ],
  copyright: "Published by ONC under the standard FHIR license (CC0)",
  packageId: "hl7.fhir.us.daf",
  license: "CC0-1.0",
  fhirVersion: ["4.0.1"],
  dependsOn: [
    {
      uri: "http://hl7.org/fhir/ImplementationGuide/uscore",
    },
  ],
  global: [
    {
      type: "Patient",
      profile: "http://hl7.org/fhir/us/core/StructureDefinition/patient",
    },
  ],
  definition: {
    grouping: [
      {
        name: "test",
        description: "Base package (not broken up into multiple packages)",
      },
    ],
    resource: [
      {
        reference: {
          reference: "Patient/test",
        },
        name: "Test Example",
        description: "A test example to show how an implementation guide works",
        exampleCanonical:
          "http://hl7.org/fhir/us/core/StructureDefinition/patient",
      },
    ],
    page: {
      nameUrl: "patient-example.html",
      title: "Example Patient Page",
      generation: "html",
      page: [
        {
          nameUrl: "list.html",
          title: "Value Set Page",
          generation: "html",
        },
      ],
    },
    parameter: [
      {
        code: "apply",
        value: "version",
      },
    ],
  },
  manifest: {
    rendering: "http://hl7.org/fhir/us/daf",
    resource: [
      {
        reference: {
          reference: "Patient/test",
        },
        exampleCanonical:
          "http://hl7.org/fhir/us/core/StructureDefinition/patient",
        relativePath: "patient-test.html#patient-test",
      },
    ],
    page: [
      {
        name: "patient-test.html",
        title: "Test Patient Example",
        anchor: ["patient-test", "tx", "uml"],
      },
    ],
    image: ["fhir.png"],
    other: ["fhir.css"],
  },
} as const;
