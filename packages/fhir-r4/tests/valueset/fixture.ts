import type { ValueSet } from "../../src/v4.0.1/valueset/types";

export const ValuesetFhirVersion: ValueSet = {
  resourceType: "ValueSet",
  id: "FHIR-version",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>FHIRVersion</h2><div><p>All published FHIR Versions.</p>\n</div><p>This value set includes codes from the following code systems:</p><ul><li>Include all codes defined in <a href="codesystem-FHIR-version.html"><code>http://hl7.org/fhir/FHIR-version</code></a></li></ul></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "vocab",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "normative",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
      valueCode: "4.0.0",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 5,
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/FHIR-version",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.1309",
    },
  ],
  version: "4.0.1",
  name: "FHIRVersion",
  title: "FHIRVersion",
  status: "active",
  experimental: false,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: "All published FHIR Versions.",
  immutable: true,
  compose: {
    include: [
      {
        system: "http://hl7.org/fhir/FHIR-version",
      },
    ],
  },
} as const;

export const ValuesetAbstractTypes: ValueSet = {
  resourceType: "ValueSet",
  id: "abstract-types",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>AbstractType</h2><div><p>A list of the base types defined by this version of the FHIR specification - types that are defined, but for which only specializations actually are created.</p>\n</div><p>This value set includes codes from the following code systems:</p><ul><li>Include all codes defined in <a href="codesystem-abstract-types.html"><code>http://hl7.org/fhir/abstract-types</code></a></li></ul></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/valueset-special-status",
      valueString:
        "This Value Set is normative - it is generated based on the information defined in this specification. The definition will remain fixed  across versions, but the actual contents will change from version to version",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "normative",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
      valueCode: "4.0.0",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 5,
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/abstract-types",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.23",
    },
  ],
  version: "4.0.1",
  name: "AbstractType",
  title: "AbstractType",
  status: "active",
  experimental: false,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description:
    "A list of the base types defined by this version of the FHIR specification - types that are defined, but for which only specializations actually are created.",
  immutable: true,
  compose: {
    include: [
      {
        system: "http://hl7.org/fhir/abstract-types",
      },
    ],
  },
} as const;

export const ValuesetAccountStatus: ValueSet = {
  resourceType: "ValueSet",
  id: "account-status",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>AccountStatus</h2><div><p>Indicates whether the account is available to be used.</p>\n</div><p>This value set includes codes from the following code systems:</p><ul><li>Include all codes defined in <a href="codesystem-account-status.html"><code>http://hl7.org/fhir/account-status</code></a></li></ul></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pa",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 2,
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/account-status",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.726",
    },
  ],
  version: "4.0.1",
  name: "AccountStatus",
  title: "AccountStatus",
  status: "draft",
  experimental: false,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: "Indicates whether the account is available to be used.",
  immutable: true,
  compose: {
    include: [
      {
        system: "http://hl7.org/fhir/account-status",
      },
    ],
  },
} as const;

export const ValuesetAccountType: ValueSet = {
  resourceType: "ValueSet",
  id: "account-type",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>Account Types</h2><div><p>This examples value set defines the set of codes that can be used to represent the type of an account.</p>\n</div><p>This value set includes codes from the following code systems:</p><ul><li>Include codes from <a href="v3/ActCode/cs.html"><code>http://terminology.hl7.org/CodeSystem/v3-ActCode</code></a> where concept  is-a  <a href="v3/ActCode/cs.html#v3-ActCode-_ActAccountCode">_ActAccountCode</a></li></ul></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pa",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "draft",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 1,
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/account-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.728",
    },
  ],
  version: "4.0.1",
  name: "AccountTypes",
  title: "Account Types",
  status: "draft",
  experimental: false,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "FHIR Project team",
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
    "This examples value set defines the set of codes that can be used to represent the type of an account.",
  compose: {
    include: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        filter: [
          {
            property: "concept",
            op: "is-a",
            value: "_ActAccountCode",
          },
        ],
      },
    ],
  },
} as const;

export const ValuesetActionCardinalityBehavior: ValueSet = {
  resourceType: "ValueSet",
  id: "action-cardinality-behavior",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>ActionCardinalityBehavior</h2><div><p>Defines behavior for an action or a group for how many times that item may be repeated.</p>\n</div><p>This value set includes codes from the following code systems:</p><ul><li>Include all codes defined in <a href="codesystem-action-cardinality-behavior.html"><code>http://hl7.org/fhir/action-cardinality-behavior</code></a></li></ul></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "cds",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 2,
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/action-cardinality-behavior",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.807",
    },
  ],
  version: "4.0.1",
  name: "ActionCardinalityBehavior",
  title: "ActionCardinalityBehavior",
  status: "draft",
  experimental: false,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description:
    "Defines behavior for an action or a group for how many times that item may be repeated.",
  immutable: true,
  compose: {
    include: [
      {
        system: "http://hl7.org/fhir/action-cardinality-behavior",
      },
    ],
  },
} as const;

export const ValuesetActionConditionKind: ValueSet = {
  resourceType: "ValueSet",
  id: "action-condition-kind",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>ActionConditionKind</h2><div><p>Defines the kinds of conditions that can appear on actions.</p>\n</div><p>This value set includes codes from the following code systems:</p><ul><li>Include all codes defined in <a href="codesystem-action-condition-kind.html"><code>http://hl7.org/fhir/action-condition-kind</code></a></li></ul></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "cds",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 2,
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/action-condition-kind",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.815",
    },
  ],
  version: "4.0.1",
  name: "ActionConditionKind",
  title: "ActionConditionKind",
  status: "draft",
  experimental: false,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: "Defines the kinds of conditions that can appear on actions.",
  immutable: true,
  compose: {
    include: [
      {
        system: "http://hl7.org/fhir/action-condition-kind",
      },
    ],
  },
} as const;

export const ValuesetActionGroupingBehavior: ValueSet = {
  resourceType: "ValueSet",
  id: "action-grouping-behavior",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>ActionGroupingBehavior</h2><div><p>Defines organization behavior of a group.</p>\n</div><p>This value set includes codes from the following code systems:</p><ul><li>Include all codes defined in <a href="codesystem-action-grouping-behavior.html"><code>http://hl7.org/fhir/action-grouping-behavior</code></a></li></ul></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "cds",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 2,
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/action-grouping-behavior",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.799",
    },
  ],
  version: "4.0.1",
  name: "ActionGroupingBehavior",
  title: "ActionGroupingBehavior",
  status: "draft",
  experimental: false,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: "Defines organization behavior of a group.",
  immutable: true,
  compose: {
    include: [
      {
        system: "http://hl7.org/fhir/action-grouping-behavior",
      },
    ],
  },
} as const;

export const ValuesetActionParticipantRole: ValueSet = {
  resourceType: "ValueSet",
  id: "action-participant-role",
  meta: {
    lastUpdated: "2019-10-31T15:29:23.356-07:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <h2>Action Participant Role</h2>\n      <p>Either a practitioner role or a relationship type.</p>\n      <p>This value set includes codes from the following value sets:</p>\n      <ul>\n        <li>Include all codes defined in\n          <a href="valueset-practitioner-role.html">http://hl7.org/fhir/ValueSet/practitioner-role</a>\n        </li>\n        <li>Include all codes defined in\n          <a href="valueset-relatedperson-relationshiptype.html">http://hl7.org/fhir/ValueSet/relatedperson-relationshiptype</a>\n        </li>\n      </ul>\n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "cds",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "draft",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 1,
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/action-participant-role",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.796",
    },
  ],
  version: "4.0.1",
  name: "ActionParticipantRole",
  title: "Action participant role",
  status: "draft",
  experimental: false,
  date: "2017-02-15T16:33:00.000-07:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "other",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: "Either a practitioner role or a relationship type.",
  compose: {
    include: [
      {
        valueSet: [
          "http://hl7.org/fhir/ValueSet/practitioner-role",
          "http://hl7.org/fhir/ValueSet/relatedperson-relationshiptype",
        ],
      },
    ],
  },
} as const;

export const ValuesetActionParticipantType: ValueSet = {
  resourceType: "ValueSet",
  id: "action-participant-type",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>ActionParticipantType</h2><div><p>The type of participant for the action.</p>\n</div><p>This value set includes codes from the following code systems:</p><ul><li>Include all codes defined in <a href="codesystem-action-participant-type.html"><code>http://hl7.org/fhir/action-participant-type</code></a></li></ul></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "cds",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 2,
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/action-participant-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.811",
    },
  ],
  version: "4.0.1",
  name: "ActionParticipantType",
  title: "ActionParticipantType",
  status: "draft",
  experimental: false,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: "The type of participant for the action.",
  immutable: true,
  compose: {
    include: [
      {
        system: "http://hl7.org/fhir/action-participant-type",
      },
    ],
  },
} as const;

export const ValuesetActionPrecheckBehavior: ValueSet = {
  resourceType: "ValueSet",
  id: "action-precheck-behavior",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>ActionPrecheckBehavior</h2><div><p>Defines selection frequency behavior for an action or group.</p>\n</div><p>This value set includes codes from the following code systems:</p><ul><li>Include all codes defined in <a href="codesystem-action-precheck-behavior.html"><code>http://hl7.org/fhir/action-precheck-behavior</code></a></li></ul></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "cds",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 2,
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/action-precheck-behavior",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.805",
    },
  ],
  version: "4.0.1",
  name: "ActionPrecheckBehavior",
  title: "ActionPrecheckBehavior",
  status: "draft",
  experimental: false,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: "Defines selection frequency behavior for an action or group.",
  immutable: true,
  compose: {
    include: [
      {
        system: "http://hl7.org/fhir/action-precheck-behavior",
      },
    ],
  },
} as const;

export const ValuesetActionRelationshipType: ValueSet = {
  resourceType: "ValueSet",
  id: "action-relationship-type",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>ActionRelationshipType</h2><div><p>Defines the types of relationships between actions.</p>\n</div><p>This value set includes codes from the following code systems:</p><ul><li>Include all codes defined in <a href="codesystem-action-relationship-type.html"><code>http://hl7.org/fhir/action-relationship-type</code></a></li></ul></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "cds",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 2,
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/action-relationship-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.813",
    },
  ],
  version: "4.0.1",
  name: "ActionRelationshipType",
  title: "ActionRelationshipType",
  status: "draft",
  experimental: false,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: "Defines the types of relationships between actions.",
  immutable: true,
  compose: {
    include: [
      {
        system: "http://hl7.org/fhir/action-relationship-type",
      },
    ],
  },
} as const;

export const ValuesetActionRequiredBehavior: ValueSet = {
  resourceType: "ValueSet",
  id: "action-required-behavior",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>ActionRequiredBehavior</h2><div><p>Defines expectations around whether an action or action group is required.</p>\n</div><p>This value set includes codes from the following code systems:</p><ul><li>Include all codes defined in <a href="codesystem-action-required-behavior.html"><code>http://hl7.org/fhir/action-required-behavior</code></a></li></ul></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "cds",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 2,
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/action-required-behavior",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.803",
    },
  ],
  version: "4.0.1",
  name: "ActionRequiredBehavior",
  title: "ActionRequiredBehavior",
  status: "draft",
  experimental: false,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description:
    "Defines expectations around whether an action or action group is required.",
  immutable: true,
  compose: {
    include: [
      {
        system: "http://hl7.org/fhir/action-required-behavior",
      },
    ],
  },
} as const;

export const ValuesetActionSelectionBehavior: ValueSet = {
  resourceType: "ValueSet",
  id: "action-selection-behavior",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>ActionSelectionBehavior</h2><div><p>Defines selection behavior of a group.</p>\n</div><p>This value set includes codes from the following code systems:</p><ul><li>Include all codes defined in <a href="codesystem-action-selection-behavior.html"><code>http://hl7.org/fhir/action-selection-behavior</code></a></li></ul></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "cds",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 2,
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/action-selection-behavior",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.801",
    },
  ],
  version: "4.0.1",
  name: "ActionSelectionBehavior",
  title: "ActionSelectionBehavior",
  status: "draft",
  experimental: false,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: "Defines selection behavior of a group.",
  immutable: true,
  compose: {
    include: [
      {
        system: "http://hl7.org/fhir/action-selection-behavior",
      },
    ],
  },
} as const;

export const ValuesetActionType: ValueSet = {
  resourceType: "ValueSet",
  id: "action-type",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>ActionType</h2><div><p>The type of action to be performed.</p>\n</div><p>This value set includes codes from the following code systems:</p><ul><li>Include all codes defined in <a href="codesystem-action-type.html"><code>http://terminology.hl7.org/CodeSystem/action-type</code></a></li></ul></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "cds",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 2,
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/action-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.809",
    },
  ],
  version: "4.0.1",
  name: "ActionType",
  title: "ActionType",
  status: "draft",
  experimental: false,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: "The type of action to be performed.",
  immutable: true,
  compose: {
    include: [
      {
        system: "http://terminology.hl7.org/CodeSystem/action-type",
      },
    ],
  },
} as const;

export const ValuesetActivityDefinitionCategory: ValueSet = {
  resourceType: "ValueSet",
  id: "activity-definition-category",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>ActivityDefinitionCategory</h2><div><p>High-level categorization of the type of activity.</p>\n</div><p>This value set includes codes from the following code systems:</p><ul><li>Include all codes defined in <a href="codesystem-activity-definition-category.html"><code>http://terminology.hl7.org/CodeSystem/activity-definition-category</code></a></li></ul></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "cds",
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/activity-definition-category",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.792",
    },
  ],
  version: "4.0.1",
  name: "ActivityDefinitionCategory",
  title: "ActivityDefinitionCategory",
  status: "draft",
  experimental: false,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: "High-level categorization of the type of activity.",
  immutable: true,
  compose: {
    include: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/activity-definition-category",
      },
    ],
  },
} as const;

export const ValuesetAdditionalInstructionCodes: ValueSet = {
  resourceType: "ValueSet",
  id: "additional-instruction-codes",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>SNOMED CT Additional Dosage Instructions</h2><div><p>This value set includes all SNOMED CT Additional Dosage Instructions.</p>\n</div><p><b>Copyright Statement:</b></p><div><p>This resource includes content from SNOMED Clinical Terms® (SNOMED CT®) which is copyright of the International Health Terminology Standards Development Organisation (IHTSDO). Implementers of these specifications must have the appropriate SNOMED CT Affiliate license - for more information contact http://www.snomed.org/snomed-ct/get-snomed-ct or info@snomed.org</p>\n</div><p>This value set includes codes from the following code systems:</p><ul><li>Include codes from <a href="http://www.snomed.org/"><code>http://snomed.info/sct</code></a> where concept  is-a  419492006 (Additional dosage instructions)</li></ul></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "phx",
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/additional-instruction-codes",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.95",
    },
  ],
  version: "4.0.1",
  name: "SNOMEDCTAdditionalDosageInstructions",
  title: "SNOMED CT Additional Dosage Instructions",
  status: "draft",
  experimental: false,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "FHIR Project team",
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
    "This value set includes all SNOMED CT Additional Dosage Instructions.",
  copyright:
    "This resource includes content from SNOMED Clinical Terms® (SNOMED CT®) which is copyright of the International Health Terminology Standards Development Organisation (IHTSDO). Implementers of these specifications must have the appropriate SNOMED CT Affiliate license - for more information contact http://www.snomed.org/snomed-ct/get-snomed-ct or info@snomed.org",
  compose: {
    include: [
      {
        system: "http://snomed.info/sct",
        filter: [
          {
            property: "concept",
            op: "is-a",
            value: "419492006",
          },
        ],
      },
    ],
  },
} as const;

export const ValuesetAdditionalmaterials: ValueSet = {
  resourceType: "ValueSet",
  id: "additionalmaterials",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>Additional Material Codes</h2><div><p>This value set includes sample additional material type codes.</p>\n</div><p><b>Copyright Statement:</b></p><div><p>This is an example set.</p>\n</div><p>This value set includes codes from the following code systems:</p><ul><li>Include all codes defined in <a href="codesystem-additionalmaterials.html"><code>http://hl7.org/fhir/additionalmaterials</code></a></li></ul></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/additionalmaterials",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.529",
    },
  ],
  version: "4.0.1",
  name: "AdditionalMaterialCodes",
  title: "Additional Material Codes",
  status: "draft",
  experimental: false,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "Financial Management",
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
  description: "This value set includes sample additional material type codes.",
  immutable: true,
  copyright: "This is an example set.",
  compose: {
    include: [
      {
        system: "http://hl7.org/fhir/additionalmaterials",
      },
    ],
  },
} as const;

export const ValuesetAddressType: ValueSet = {
  resourceType: "ValueSet",
  id: "address-type",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>AddressType</h2><div><p>The type of an address (physical / postal).</p>\n</div><p>This value set includes codes from the following code systems:</p><ul><li>Include all codes defined in <a href="codesystem-address-type.html"><code>http://hl7.org/fhir/address-type</code></a></li></ul></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "normative",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
      valueCode: "4.0.0",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 5,
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/address-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.69",
    },
  ],
  version: "4.0.1",
  name: "AddressType",
  title: "AddressType",
  status: "active",
  experimental: false,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: "The type of an address (physical / postal).",
  immutable: true,
  compose: {
    include: [
      {
        system: "http://hl7.org/fhir/address-type",
      },
    ],
  },
} as const;

export const ValuesetAddressUse: ValueSet = {
  resourceType: "ValueSet",
  id: "address-use",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>AddressUse</h2><div><p>The use of an address.</p>\n</div><p>This value set includes codes from the following code systems:</p><ul><li>Include all codes defined in <a href="codesystem-address-use.html"><code>http://hl7.org/fhir/address-use</code></a></li></ul></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "normative",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
      valueCode: "4.0.0",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 5,
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/address-use",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.67",
    },
  ],
  version: "4.0.1",
  name: "AddressUse",
  title: "AddressUse",
  status: "active",
  experimental: false,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: "The use of an address.",
  immutable: true,
  compose: {
    include: [
      {
        system: "http://hl7.org/fhir/address-use",
      },
    ],
  },
} as const;

export const ValuesetAdjudicationError: ValueSet = {
  resourceType: "ValueSet",
  id: "adjudication-error",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>AdjudicationError</h2><div><p>This value set includes a smattering of adjudication codes.</p>\n</div><p><b>Copyright Statement:</b></p><div><p>This is an example set.</p>\n</div><p>This value set includes codes from the following code systems:</p><ul><li>Include all codes defined in <a href="codesystem-adjudication-error.html"><code>http://terminology.hl7.org/CodeSystem/adjudication-error</code></a></li></ul></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "draft",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 1,
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/adjudication-error",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.39",
    },
  ],
  version: "4.0.1",
  name: "Adjudication Error Codes",
  title: "AdjudicationError",
  status: "draft",
  experimental: true,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "Financial Management",
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
  description: "This value set includes a smattering of adjudication codes.",
  immutable: true,
  copyright: "This is an example set.",
  compose: {
    include: [
      {
        system: "http://terminology.hl7.org/CodeSystem/adjudication-error",
      },
    ],
  },
} as const;

export const ValuesetAdjudicationReason: ValueSet = {
  resourceType: "ValueSet",
  id: "adjudication-reason",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>Adjudication Reason Codes</h2><div><p>This value set includes smattering of Adjudication Reason codes.</p>\n</div><p><b>Copyright Statement:</b></p><div><p>This is an example set.</p>\n</div><p>This value set includes codes from the following code systems:</p><ul><li>Include all codes defined in <a href="codesystem-adjudication-reason.html"><code>http://terminology.hl7.org/CodeSystem/adjudication-reason</code></a></li></ul></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "draft",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 1,
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/adjudication-reason",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.598",
    },
  ],
  version: "4.0.1",
  name: "AdjudicationReasonCodes",
  title: "Adjudication Reason Codes",
  status: "draft",
  experimental: false,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "Financial Management",
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
    "This value set includes smattering of Adjudication Reason codes.",
  immutable: true,
  copyright: "This is an example set.",
  compose: {
    include: [
      {
        system: "http://terminology.hl7.org/CodeSystem/adjudication-reason",
      },
    ],
  },
} as const;

export const ValuesetAdjudication: ValueSet = {
  resourceType: "ValueSet",
  id: "adjudication",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>Adjudication Value Codes</h2><div><p>This value set includes a smattering of Adjudication Value codes which includes codes to indicate the amounts eligible under the plan, the amount of benefit, copays etc.</p>\n</div><p><b>Copyright Statement:</b></p><div><p>This is an example set.</p>\n</div><p>This value set includes codes from the following code systems:</p><ul><li>Include all codes defined in <a href="codesystem-adjudication.html"><code>http://terminology.hl7.org/CodeSystem/adjudication</code></a></li></ul></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "draft",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 1,
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/adjudication",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.596",
    },
  ],
  version: "4.0.1",
  name: "AdjudicationValueCodes",
  title: "Adjudication Value Codes",
  status: "draft",
  experimental: false,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "FHIR Project team",
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
    "This value set includes a smattering of Adjudication Value codes which includes codes to indicate the amounts eligible under the plan, the amount of benefit, copays etc.",
  immutable: true,
  copyright: "This is an example set.",
  compose: {
    include: [
      {
        system: "http://terminology.hl7.org/CodeSystem/adjudication",
      },
    ],
  },
} as const;

export const ValuesetAdministrationMethodCodes: ValueSet = {
  resourceType: "ValueSet",
  id: "administration-method-codes",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>SNOMED CT Administration Method Codes</h2><div><p>This value set includes some method codes from SNOMED CT - provided as an exemplar</p>\n</div><p><b>Copyright Statement:</b></p><div><p>This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement</p>\n</div><p>This value set includes codes from the following code systems:</p><ul><li>Include codes from <a href="http://www.snomed.org/"><code>http://snomed.info/sct</code></a> where concept  is-a  422096002 (Dosing instruction fragment)</li></ul></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "phx",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "draft",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 1,
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/administration-method-codes",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.97",
    },
  ],
  version: "4.0.1",
  name: "SNOMEDCTAdministrationMethodCodes",
  title: "SNOMED CT Administration Method Codes",
  status: "draft",
  experimental: false,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "FHIR Project team",
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
    "This value set includes some method codes from SNOMED CT - provided as an exemplar",
  copyright:
    "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement",
  compose: {
    include: [
      {
        system: "http://snomed.info/sct",
        filter: [
          {
            property: "concept",
            op: "is-a",
            value: "422096002",
          },
        ],
      },
    ],
  },
} as const;

export const ValuesetAdministrativeGender: ValueSet = {
  resourceType: "ValueSet",
  id: "administrative-gender",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>AdministrativeGender</h2><div><p>The gender of a person used for administrative purposes.</p>\n</div><p>This value set includes codes from the following code systems:</p><ul><li>Include all codes defined in <a href="codesystem-administrative-gender.html"><code>http://hl7.org/fhir/administrative-gender</code></a></li></ul></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pa",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "normative",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 5,
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
      valueCode: "4.0.0",
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/administrative-gender",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.1",
    },
  ],
  version: "4.0.1",
  name: "AdministrativeGender",
  title: "AdministrativeGender",
  status: "active",
  experimental: false,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: "The gender of a person used for administrative purposes.",
  immutable: true,
  compose: {
    include: [
      {
        system: "http://hl7.org/fhir/administrative-gender",
      },
    ],
  },
} as const;

export const ValuesetAdverseEventActuality: ValueSet = {
  resourceType: "ValueSet",
  id: "adverse-event-actuality",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>AdverseEventActuality</h2><div><p>Overall nature of the adverse event, e.g. real or potential.</p>\n</div><p>This value set includes codes from the following code systems:</p><ul><li>Include all codes defined in <a href="codesystem-adverse-event-actuality.html"><code>http://hl7.org/fhir/adverse-event-actuality</code></a></li></ul></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pc",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 0,
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/adverse-event-actuality",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.831",
    },
  ],
  version: "4.0.1",
  name: "AdverseEventActuality",
  title: "AdverseEventActuality",
  status: "draft",
  experimental: false,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: "Overall nature of the adverse event, e.g. real or potential.",
  immutable: true,
  compose: {
    include: [
      {
        system: "http://hl7.org/fhir/adverse-event-actuality",
      },
    ],
  },
} as const;

export const ValuesetAdverseEventCategory: ValueSet = {
  resourceType: "ValueSet",
  id: "adverse-event-category",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>AdverseEventCategory</h2><div><p>Overall categorization of the event, e.g. product-related or situational.</p>\n</div><p>This value set includes codes from the following code systems:</p><ul><li>Include all codes defined in <a href="codesystem-adverse-event-category.html"><code>http://terminology.hl7.org/CodeSystem/adverse-event-category</code></a></li></ul></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pc",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 0,
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/adverse-event-category",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.833",
    },
  ],
  version: "4.0.1",
  name: "AdverseEventCategory",
  title: "AdverseEventCategory",
  status: "draft",
  experimental: false,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description:
    "Overall categorization of the event, e.g. product-related or situational.",
  immutable: true,
  compose: {
    include: [
      {
        system: "http://terminology.hl7.org/CodeSystem/adverse-event-category",
      },
    ],
  },
} as const;

export const ValuesetAdverseEventCausalityAssess: ValueSet = {
  resourceType: "ValueSet",
  id: "adverse-event-causality-assess",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>AdverseEventCausalityAssessment</h2><div><p>Codes for the assessment of whether the entity caused the event.</p>\n</div><p>This value set includes codes from the following code systems:</p><ul><li>Include all codes defined in <a href="codesystem-adverse-event-causality-assess.html"><code>http://terminology.hl7.org/CodeSystem/adverse-event-causality-assess</code></a></li></ul></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pc",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "draft",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 1,
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/adverse-event-causality-assess",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.840",
    },
  ],
  version: "4.0.1",
  name: "AdverseEventCausalityAssessment",
  title: "AdverseEventCausalityAssessment",
  status: "draft",
  experimental: false,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description:
    "Codes for the assessment of whether the entity caused the event.",
  immutable: true,
  compose: {
    include: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/adverse-event-causality-assess",
      },
    ],
  },
} as const;

export const ValuesetAdverseEventCausalityMethod: ValueSet = {
  resourceType: "ValueSet",
  id: "adverse-event-causality-method",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>AdverseEventCausalityMethod</h2><div><p>TODO.</p>\n</div><p>This value set includes codes from the following code systems:</p><ul><li>Include all codes defined in <a href="codesystem-adverse-event-causality-method.html"><code>http://terminology.hl7.org/CodeSystem/adverse-event-causality-method</code></a></li></ul></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pc",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "draft",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 1,
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/adverse-event-causality-method",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.842",
    },
  ],
  version: "4.0.1",
  name: "AdverseEventCausalityMethod",
  title: "AdverseEventCausalityMethod",
  status: "draft",
  experimental: false,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: "TODO.",
  immutable: true,
  compose: {
    include: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/adverse-event-causality-method",
      },
    ],
  },
} as const;

export const ValuesetAdverseEventOutcome: ValueSet = {
  resourceType: "ValueSet",
  id: "adverse-event-outcome",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>AdverseEventOutcome</h2><div><p>TODO (and should this be required?).</p>\n</div><p>This value set includes codes from the following code systems:</p><ul><li>Include all codes defined in <a href="codesystem-adverse-event-outcome.html"><code>http://terminology.hl7.org/CodeSystem/adverse-event-outcome</code></a></li></ul></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pc",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 0,
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/adverse-event-outcome",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.836",
    },
  ],
  version: "4.0.1",
  name: "AdverseEventOutcome",
  title: "AdverseEventOutcome",
  status: "draft",
  experimental: false,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: "TODO (and should this be required?).",
  immutable: true,
  compose: {
    include: [
      {
        system: "http://terminology.hl7.org/CodeSystem/adverse-event-outcome",
      },
    ],
  },
} as const;

export const ValuesetAdverseEventSeriousness: ValueSet = {
  resourceType: "ValueSet",
  id: "adverse-event-seriousness",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>AdverseEventSeriousness</h2><div><p>Overall seriousness of this event for the patient.</p>\n</div><p>This value set includes codes from the following code systems:</p><ul><li>Include all codes defined in <a href="codesystem-adverse-event-seriousness.html"><code>http://terminology.hl7.org/CodeSystem/adverse-event-seriousness</code></a></li></ul></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pc",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "draft",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 1,
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/adverse-event-seriousness",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.838",
    },
  ],
  version: "4.0.1",
  name: "AdverseEventSeriousness",
  title: "AdverseEventSeriousness",
  status: "draft",
  experimental: false,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: "Overall seriousness of this event for the patient.",
  immutable: true,
  compose: {
    include: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/adverse-event-seriousness",
      },
    ],
  },
} as const;

export const ValuesetAdverseEventSeverity: ValueSet = {
  resourceType: "ValueSet",
  id: "adverse-event-severity",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>AdverseEventSeverity</h2><div><p>The severity of the adverse event itself, in direct relation to the subject.</p>\n</div><p>This value set includes codes from the following code systems:</p><ul><li>Include all codes defined in <a href="codesystem-adverse-event-severity.html"><code>http://terminology.hl7.org/CodeSystem/adverse-event-severity</code></a></li></ul></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pc",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 0,
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/adverse-event-severity",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.844",
    },
  ],
  version: "4.0.1",
  name: "AdverseEventSeverity",
  title: "AdverseEventSeverity",
  status: "draft",
  experimental: false,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description:
    "The severity of the adverse event itself, in direct relation to the subject.",
  immutable: true,
  compose: {
    include: [
      {
        system: "http://terminology.hl7.org/CodeSystem/adverse-event-severity",
      },
    ],
  },
} as const;

export const ValuesetAdverseEventType: ValueSet = {
  resourceType: "ValueSet",
  id: "adverse-event-type",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>SNOMED CT Clinical Findings</h2><div><p>This value set includes all SNOMED CT Clinical Findings.</p>\n</div><p><b>Copyright Statement:</b></p><div><p>This resource includes content from SNOMED Clinical Terms® (SNOMED CT®) which is copyright of the International Health Terminology Standards Development Organisation (IHTSDO). Implementers of these specifications must have the appropriate SNOMED CT Affiliate license - for more information contact http://www.snomed.org/snomed-ct/get-snomed-ct or info@snomed.org</p>\n</div><p>This value set includes codes from the following code systems:</p><ul><li>Include codes from <a href="http://www.snomed.org/"><code>http://snomed.info/sct</code></a> where concept  is-a  404684003 (Clinical finding)</li></ul></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pc",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "draft",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 1,
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/adverse-event-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.835",
    },
  ],
  version: "4.0.1",
  name: "SNOMEDCTClinicalFindings",
  title: "SNOMED CT Clinical Findings",
  status: "draft",
  experimental: false,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "FHIR Project team",
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
  description: "This value set includes all SNOMED CT Clinical Findings.",
  copyright:
    "This resource includes content from SNOMED Clinical Terms® (SNOMED CT®) which is copyright of the International Health Terminology Standards Development Organisation (IHTSDO). Implementers of these specifications must have the appropriate SNOMED CT Affiliate license - for more information contact http://www.snomed.org/snomed-ct/get-snomed-ct or info@snomed.org",
  compose: {
    include: [
      {
        system: "http://snomed.info/sct",
        filter: [
          {
            property: "concept",
            op: "is-a",
            value: "404684003",
          },
        ],
      },
    ],
  },
} as const;

export const ValuesetAgeUnits: ValueSet = {
  resourceType: "ValueSet",
  id: "age-units",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>\n        This value set includes all common UCUM codes used for Age - that it is, all commonly used units which have the same canonical unit as &quot;a&quot; (year)\n      </p>\n      <p> \n        The UCUM codes, UCUM table (regardless of format), and UCUM Specification are copyright © 1999-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved.\n     </p>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 5,
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/age-units",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.19",
    },
  ],
  version: "4.0.1",
  name: "CommonUCUMCodesForAge",
  title: "Common UCUM Codes for Age",
  status: "draft",
  experimental: false,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "FHIR Project team",
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
    "Unified Code for Units of Measure (UCUM). This value set includes all UCUM codes",
  copyright:
    "The UCUM codes, UCUM table (regardless of format), and UCUM Specification are copyright © 1999-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved.",
  compose: {
    include: [
      {
        system: "http://unitsofmeasure.org",
        concept: [
          {
            code: "min",
            display: "minutes",
          },
          {
            code: "h",
            display: "hours",
          },
          {
            code: "d",
            display: "days",
          },
          {
            code: "wk",
            display: "weeks",
          },
          {
            code: "mo",
            display: "months",
          },
          {
            code: "a",
            display: "years",
          },
        ],
      },
    ],
  },
} as const;

export const ValuesetAllDistanceUnits: ValueSet = {
  resourceType: "ValueSet",
  id: "all-distance-units",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>\n        This value set includes all possible UCUM codes used for distance measures - that it is, all units which have the same canonical unit as &quot;m&quot; (metre)\n      </p>\n      <p> \n        The UCUM codes, UCUM table (regardless of format), and UCUM Specification are copyright © 1999-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved.\n     </p>\n    \n    </div>',
  },
  url: "http://hl7.org/fhir/ValueSet/all-distance-units",
  version: "4.0.1",
  name: "AllUCUMExpressionForDistance",
  title: "All UCUM Expression for Distance",
  status: "draft",
  publisher: "FHIR Project team",
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
    "Unified Code for Units of Measure (UCUM). This value set includes all UCUM codes for units of length",
  copyright:
    "The UCUM codes, UCUM table (regardless of format), and UCUM Specification are copyright © 1999-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved.",
  compose: {
    include: [
      {
        system: "http://unitsofmeasure.org",
        filter: [
          {
            property: "canonical",
            op: "=",
            value: "m",
          },
        ],
      },
    ],
  },
} as const;

export const ValuesetAllLanguages: ValueSet = {
  resourceType: "ValueSet",
  id: "all-languages",
  meta: {
    lastUpdated: "2019-11-01T09:29:23.356+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>All Languages</h2><div><p>This value set includes all possible codes from BCP-47 (http://tools.ietf.org/html/bcp47)</p>\n</div><p>This value set includes codes from the following code systems:</p><ul><li>Include all codes defined in <code>urn:ietf:bcp:47</code></li></ul></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "normative",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
      valueCode: "4.0.0",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 5,
    },
  ],
  url: "http://hl7.org/fhir/ValueSet/all-languages",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.21",
    },
  ],
  version: "4.0.1",
  name: "AllLanguages",
  title: "All Languages",
  status: "active",
  experimental: false,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 International - FHIR-Infrastructure",
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
    "This value set includes all possible codes from BCP-47 (http://tools.ietf.org/html/bcp47)",
  compose: {
    include: [
      {
        system: "urn:ietf:bcp:47",
      },
    ],
  },
} as const;
