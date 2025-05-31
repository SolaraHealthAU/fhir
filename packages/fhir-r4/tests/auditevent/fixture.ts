import type { AuditEvent } from "../../src/v4.0.1/auditevent/types";

export const AuditEventExampleLogin: AuditEvent = {
  resourceType: "AuditEvent",
  id: "example-login",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-login</p><p><b>type</b>: User Authentication (Details: DICOM code 110114 = 'User Authentication', stated as 'User Authentication')</p><p><b>subtype</b>: Login (Details: DICOM code 110122 = 'Login', stated as 'Login')</p><p><b>action</b>: E</p><p><b>recorded</b>: 20/06/2013 11:41:23 PM</p><p><b>outcome</b>: 0</p><blockquote><p><b>agent</b></p><p><b>type</b>: human user <span>(Details : {http://terminology.hl7.org/CodeSystem/extra-security-role-type code 'humanuser' = 'human user', given as 'human user'})</span></p><p><b>who</b>: </p><p><b>altId</b>: 601847123</p><p><b>name</b>: Grahame Grieve</p><p><b>requestor</b>: true</p><h3>Networks</h3><table><tr><td>-</td><td><b>Address</b></td><td><b>Type</b></td></tr><tr><td>*</td><td>127.0.0.1</td><td>2</td></tr></table></blockquote><blockquote><p><b>agent</b></p><p><b>type</b>: Source Role ID <span>(Details : {DICOM code '110153' = 'Source Role ID', given as 'Source Role ID'})</span></p><p><b>who</b>: </p><p><b>altId</b>: 6580</p><p><b>requestor</b>: false</p><h3>Networks</h3><table><tr><td>-</td><td><b>Address</b></td><td><b>Type</b></td></tr><tr><td>*</td><td>Workstation1.ehr.familyclinic.com</td><td>1</td></tr></table></blockquote><h3>Sources</h3><table><tr><td>-</td><td><b>Site</b></td><td><b>Observer</b></td><td><b>Type</b></td></tr><tr><td>*</td><td>Cloud</td><td/><td>Web Server (Details: http://terminology.hl7.org/CodeSystem/security-source-type code 3 = 'Web Server', stated as 'Web Server')</td></tr></table></div>",
  },
  type: {
    system: "http://dicom.nema.org/resources/ontology/DCM",
    code: "110114",
    display: "User Authentication",
  },
  subtype: [
    {
      system: "http://dicom.nema.org/resources/ontology/DCM",
      code: "110122",
      display: "Login",
    },
  ],
  action: "E",
  recorded: "2013-06-20T23:41:23Z",
  outcome: "0",
  agent: [
    {
      type: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/extra-security-role-type",
            code: "humanuser",
            display: "human user",
          },
        ],
      },
      who: {
        identifier: {
          value: "95",
        },
      },
      altId: "601847123",
      name: "Grahame Grieve",
      requestor: true,
      network: {
        address: "127.0.0.1",
        type: "2",
      },
    },
    {
      type: {
        coding: [
          {
            system: "http://dicom.nema.org/resources/ontology/DCM",
            code: "110153",
            display: "Source Role ID",
          },
        ],
      },
      who: {
        identifier: {
          system: "urn:oid:2.16.840.1.113883.4.2",
          value: "2.16.840.1.113883.4.2",
        },
      },
      altId: "6580",
      requestor: false,
      network: {
        address: "Workstation1.ehr.familyclinic.com",
        type: "1",
      },
    },
  ],
  source: {
    site: "Cloud",
    observer: {
      identifier: {
        value: "hl7connect.healthintersections.com.au",
      },
    },
    type: [
      {
        system: "http://terminology.hl7.org/CodeSystem/security-source-type",
        code: "3",
        display: "Web Server",
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

export const AuditEventExampleLogout: AuditEvent = {
  resourceType: "AuditEvent",
  id: "example-logout",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-logout</p><p><b>type</b>: User Authentication (Details: DICOM code 110114 = 'User Authentication', stated as 'User Authentication')</p><p><b>subtype</b>: Logout (Details: DICOM code 110123 = 'Logout', stated as 'Logout')</p><p><b>action</b>: E</p><p><b>recorded</b>: 20/06/2013 11:46:41 PM</p><p><b>outcome</b>: 0</p><blockquote><p><b>agent</b></p><p><b>type</b>: human user <span>(Details : {http://terminology.hl7.org/CodeSystem/extra-security-role-type code 'humanuser' = 'human user', given as 'human user'})</span></p><p><b>who</b>: </p><p><b>altId</b>: 601847123</p><p><b>name</b>: Grahame Grieve</p><p><b>requestor</b>: true</p><h3>Networks</h3><table><tr><td>-</td><td><b>Address</b></td><td><b>Type</b></td></tr><tr><td>*</td><td>127.0.0.1</td><td>2</td></tr></table></blockquote><blockquote><p><b>agent</b></p><p><b>type</b>: Source Role ID <span>(Details : {DICOM code '110153' = 'Source Role ID', given as 'Source Role ID'})</span></p><p><b>who</b>: </p><p><b>altId</b>: 6580</p><p><b>requestor</b>: false</p><h3>Networks</h3><table><tr><td>-</td><td><b>Address</b></td><td><b>Type</b></td></tr><tr><td>*</td><td>Workstation1.ehr.familyclinic.com</td><td>1</td></tr></table></blockquote><h3>Sources</h3><table><tr><td>-</td><td><b>Site</b></td><td><b>Observer</b></td><td><b>Type</b></td></tr><tr><td>*</td><td>Cloud</td><td/><td>Web Server (Details: http://terminology.hl7.org/CodeSystem/security-source-type code 3 = 'Web Server', stated as 'Web Server')</td></tr></table></div>",
  },
  type: {
    system: "http://dicom.nema.org/resources/ontology/DCM",
    code: "110114",
    display: "User Authentication",
  },
  subtype: [
    {
      system: "http://dicom.nema.org/resources/ontology/DCM",
      code: "110123",
      display: "Logout",
    },
  ],
  action: "E",
  recorded: "2013-06-20T23:46:41Z",
  outcome: "0",
  agent: [
    {
      type: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/extra-security-role-type",
            code: "humanuser",
            display: "human user",
          },
        ],
      },
      who: {
        identifier: {
          value: "95",
        },
      },
      altId: "601847123",
      name: "Grahame Grieve",
      requestor: true,
      network: {
        address: "127.0.0.1",
        type: "2",
      },
    },
    {
      type: {
        coding: [
          {
            system: "http://dicom.nema.org/resources/ontology/DCM",
            code: "110153",
            display: "Source Role ID",
          },
        ],
      },
      who: {
        identifier: {
          system: "urn:oid:2.16.840.1.113883.4.2",
          value: "2.16.840.1.113883.4.2",
        },
      },
      altId: "6580",
      requestor: false,
      network: {
        address: "Workstation1.ehr.familyclinic.com",
        type: "1",
      },
    },
  ],
  source: {
    site: "Cloud",
    observer: {
      identifier: {
        value: "hl7connect.healthintersections.com.au",
      },
    },
    type: [
      {
        system: "http://terminology.hl7.org/CodeSystem/security-source-type",
        code: "3",
        display: "Web Server",
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

export const AuditEventExampleMedia: AuditEvent = {
  resourceType: "AuditEvent",
  id: "example-media",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-media</p><p><b>type</b>: Export (Details: DICOM code 110106 = 'Export', stated as 'Export')</p><p><b>subtype</b>: Distribute Document Set on Media (Details: urn:oid:1.3.6.1.4.1.19376.1.2 code ITI-32 = 'ITI-32', stated as 'Distribute Document Set on Media')</p><p><b>action</b>: R</p><p><b>recorded</b>: 27/08/2015 11:42:24 PM</p><p><b>outcome</b>: 0</p><blockquote><p><b>agent</b></p><p><b>type</b>: Source Role ID <span>(Details : {DICOM code '110153' = 'Source Role ID', given as 'Source Role ID'})</span></p><p><b>who</b>: ExportToMedia.app</p><p><b>requestor</b>: false</p></blockquote><blockquote><p><b>agent</b></p><p><b>type</b>: human user <span>(Details : {http://terminology.hl7.org/CodeSystem/extra-security-role-type code 'humanuser' = 'human user', given as 'human user'})</span></p><p><b>who</b>: </p><p><b>altId</b>: 601847123</p><p><b>name</b>: Grahame Grieve</p><p><b>requestor</b>: true</p></blockquote><blockquote><p><b>agent</b></p><p><b>type</b>: Destination Media <span>(Details : {DICOM code '110154' = 'Destination Media', given as 'Destination Media'})</span></p><p><b>name</b>: Media title: Hello World</p><p><b>requestor</b>: false</p><p><b>media</b>: DVD (Details: DICOM code 110033 = 'DVD', stated as 'DVD')</p></blockquote><h3>Sources</h3><table><tr><td>-</td><td><b>Observer</b></td></tr><tr><td>*</td><td>hl7connect.healthintersections.com.au</td></tr></table><blockquote><p><b>entity</b></p><p><b>what</b>: </p><p><b>type</b>: Person (Details: http://terminology.hl7.org/CodeSystem/audit-entity-type code 1 = 'Person', stated as 'Person')</p><p><b>role</b>: Patient (Details: http://terminology.hl7.org/CodeSystem/object-role code 1 = 'Patient', stated as 'Patient')</p></blockquote><blockquote><p><b>entity</b></p><p><b>what</b>: </p><p><b>type</b>: System Object (Details: http://terminology.hl7.org/CodeSystem/audit-entity-type code 2 = 'System Object', stated as 'System Object')</p><p><b>role</b>: Job (Details: http://terminology.hl7.org/CodeSystem/object-role code 20 = 'Job', stated as 'Job')</p></blockquote><blockquote><p><b>entity</b></p><p><b>what</b>: <a>DocumentManifest/example</a></p><p><b>type</b>: System Object (Details: http://terminology.hl7.org/CodeSystem/audit-entity-type code 2 = 'System Object', stated as 'System Object')</p></blockquote></div>",
  },
  type: {
    system: "http://dicom.nema.org/resources/ontology/DCM",
    code: "110106",
    display: "Export",
  },
  subtype: [
    {
      system: "urn:oid:1.3.6.1.4.1.19376.1.2",
      code: "ITI-32",
      display: "Distribute Document Set on Media",
    },
  ],
  action: "R",
  recorded: "2015-08-27T23:42:24Z",
  outcome: "0",
  agent: [
    {
      type: {
        coding: [
          {
            system: "http://dicom.nema.org/resources/ontology/DCM",
            code: "110153",
            display: "Source Role ID",
          },
        ],
      },
      who: {
        display: "ExportToMedia.app",
      },
      requestor: false,
    },
    {
      type: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/extra-security-role-type",
            code: "humanuser",
            display: "human user",
          },
        ],
      },
      who: {
        identifier: {
          value: "95",
        },
      },
      altId: "601847123",
      name: "Grahame Grieve",
      requestor: true,
    },
    {
      type: {
        coding: [
          {
            system: "http://dicom.nema.org/resources/ontology/DCM",
            code: "110154",
            display: "Destination Media",
          },
        ],
      },
      name: "Media title: Hello World",
      requestor: false,
      media: {
        system: "http://dicom.nema.org/resources/ontology/DCM",
        code: "110033",
        display: "DVD",
      },
    },
  ],
  source: {
    observer: {
      display: "hl7connect.healthintersections.com.au",
    },
  },
  entity: [
    {
      what: {
        identifier: {
          value: "e3cdfc81a0d24bd^^^&2.16.840.1.113883.4.2&ISO",
        },
      },
      type: {
        system: "http://terminology.hl7.org/CodeSystem/audit-entity-type",
        code: "1",
        display: "Person",
      },
      role: {
        system: "http://terminology.hl7.org/CodeSystem/object-role",
        code: "1",
        display: "Patient",
      },
    },
    {
      what: {
        identifier: {
          type: {
            coding: [
              {
                system: "urn:uuid:a54d6aa5-d40d-43f9-88c5-b4633d873bdd",
                code: "IHE XDS Metadata",
                display: "submission set classificationNode",
              },
            ],
          },
          value: "e3cdfc81a0d24bd^^^&2.16.840.1.113883.4.2&ISO",
        },
      },
      type: {
        system: "http://terminology.hl7.org/CodeSystem/audit-entity-type",
        code: "2",
        display: "System Object",
      },
      role: {
        system: "http://terminology.hl7.org/CodeSystem/object-role",
        code: "20",
        display: "Job",
      },
    },
    {
      what: {
        reference: "DocumentManifest/example",
      },
      type: {
        system: "http://terminology.hl7.org/CodeSystem/audit-entity-type",
        code: "2",
        display: "System Object",
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

export const AuditEventExamplePixquery: AuditEvent = {
  resourceType: "AuditEvent",
  id: "example-pixQuery",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-pixQuery</p><p><b>type</b>: Query (Details: DICOM code 110112 = 'Query', stated as 'Query')</p><p><b>subtype</b>: PIX Query (Details: urn:oid:1.3.6.1.4.1.19376.1.2 code ITI-9 = 'ITI-9', stated as 'PIX Query')</p><p><b>action</b>: E</p><p><b>recorded</b>: 26/08/2015 11:42:24 PM</p><p><b>outcome</b>: 0</p><blockquote><p><b>agent</b></p><p><b>type</b>: Source Role ID <span>(Details : {DICOM code '110153' = 'Source Role ID', given as 'Source Role ID'})</span></p><p><b>who</b>: </p><p><b>altId</b>: 6580</p><p><b>requestor</b>: false</p><h3>Networks</h3><table><tr><td>-</td><td><b>Address</b></td><td><b>Type</b></td></tr><tr><td>*</td><td>Workstation1.ehr.familyclinic.com</td><td>1</td></tr></table></blockquote><blockquote><p><b>agent</b></p><p><b>type</b>: human user <span>(Details : {http://terminology.hl7.org/CodeSystem/extra-security-role-type code 'humanuser' = 'human user', given as 'human user'})</span></p><p><b>who</b>: </p><p><b>altId</b>: 601847123</p><p><b>name</b>: Grahame Grieve</p><p><b>requestor</b>: true</p></blockquote><h3>Sources</h3><table><tr><td>-</td><td><b>Observer</b></td></tr><tr><td>*</td><td>hl7connect.healthintersections.com.au</td></tr></table><blockquote><p><b>entity</b></p><p><b>what</b>: </p><p><b>type</b>: Person (Details: http://terminology.hl7.org/CodeSystem/audit-entity-type code 1 = 'Person', stated as 'Person')</p><p><b>role</b>: Patient (Details: http://terminology.hl7.org/CodeSystem/object-role code 1 = 'Patient', stated as 'Patient')</p></blockquote><blockquote><p><b>entity</b></p><p><b>type</b>: System Object (Details: http://terminology.hl7.org/CodeSystem/audit-entity-type code 2 = 'System Object', stated as 'System Object')</p><p><b>role</b>: Query (Details: http://terminology.hl7.org/CodeSystem/object-role code 24 = 'Query', stated as 'Query')</p><p><b>query</b>: PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPFBSUEFfSU4yMDEzMDlVVjAyIElUU1ZlcnNpb249IlhNTF8xLjAiIHhtbG5zPSJ1cm46aGw3LW9yZzp2MyI+CiAgPGlkIGV4dGVuc2lvbj0iMzU0MjMiIHJvb3Q9IjEuMi44NDAuMTE0MzUwLjEuMTMuMC4xLjcuMS4xIi8+CiAgPGNyZWF0aW9uVGltZSB2YWx1ZT0iMjAxNDA1MDgxNjQ5MjUiLz4KICA8aW50ZXJhY3Rpb25JZCBleHRlbnNpb249IlBSUEFfSU4yMDEzMDVVVjAyIiByb290PSIyLjE2Ljg0MC4xLjExMzg4My4xLjYiLz4KICA8cHJvY2Vzc2luZ0NvZGUgY29kZT0iVCIvPgogIDxwcm9jZXNzaW5nTW9kZUNvZGUgY29kZT0iVCIvPgogIDxhY2NlcHRBY2tDb2RlIGNvZGU9IkFMIi8+CiAgPHJlY2VpdmVyIHR5cGVDb2RlPSJSQ1YiPgogICAgPGRldmljZSBjbGFzc0NvZGU9IkRFViIgZGV0ZXJtaW5lckNvZGU9IklOU1RBTkNFIj4KICAgICAgPGlkIHJvb3Q9IkVIUl9NSVNZUyIvPgogICAgICA8YXNBZ2VudCBjbGFzc0NvZGU9IkFHTlQiPgogICAgICAgIDxyZXByZXNlbnRlZE9yZ2FuaXphdGlvbiBjbGFzc0NvZGU9Ik9SRyIgZGV0ZXJtaW5lckNvZGU9IklOU1RBTkNFIj4KICAgICAgICAgIDxpZCByb290PSJNSVNZUyIvPgogICAgICAgIDwvcmVwcmVzZW50ZWRPcmdhbml6YXRpb24+CiAgICAgIDwvYXNBZ2VudD4KICAgIDwvZGV2aWNlPgogIDwvcmVjZWl2ZXI+CiAgPHNlbmRlciB0eXBlQ29kZT0iU05EIj4KICAgIDxkZXZpY2UgY2xhc3NDb2RlPSJERVYiIGRldGVybWluZXJDb2RlPSJJTlNUQU5DRSI+CiAgICAgIDxpZCByb290PSIyLjE2Ljg0MC4xLjExMzg4My40LjIiLz4KICAgICAgPGFzQWdlbnQgY2xhc3NDb2RlPSJBR05UIj4KICAgICAgICA8cmVwcmVzZW50ZWRPcmdhbml6YXRpb24gY2xhc3NDb2RlPSJPUkciIGRldGVybWluZXJDb2RlPSJJTlNUQU5DRSI+CiAgICAgICAgICA8aWQgcm9vdD0iMi4xNi44NDAuMS4xMTM4ODMuNC4yIi8+CiAgICAgICAgPC9yZXByZXNlbnRlZE9yZ2FuaXphdGlvbj4KICAgICAgPC9hc0FnZW50PgogICAgPC9kZXZpY2U+CiAgPC9zZW5kZXI+CiAgPGNvbnRyb2xBY3RQcm9jZXNzIGNsYXNzQ29kZT0iQ0FDVCIgbW9vZENvZGU9IkVWTiI+CiAgICA8Y29kZSBjb2RlPSJQUlBBX1RFMjAxMzA5VVYwMiIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuMS42Ii8+CiAgICA8cXVlcnlCeVBhcmFtZXRlcj4KICAgICAgPHF1ZXJ5SWQgZXh0ZW5zaW9uPSIxODQwOTk3MDg0IiByb290PSIxLjIuODQwLjExNDM1MC4xLjEzLjI4LjEuMTguNS45OTkiLz4KICAgICAgPHN0YXR1c0NvZGUgY29kZT0ibmV3Ii8+CiAgICAgIDxyZXNwb25zZVByaW9yaXR5Q29kZSBjb2RlPSJJIi8+CiAgICAgIDxwYXJhbWV0ZXJMaXN0PgogICAgICAgIDxwYXRpZW50SWRlbnRpZmllcj4KICAgICAgICAgIDx2YWx1ZSBleHRlbnNpb249IlN1cnlhQnJhbmQiIHJvb3Q9IjIuMTYuODQwLjEuMTEzODgzLjQuMiIvPgogICAgICAgICAgPHNlbWFudGljc1RleHQ+UGF0aWVudC5JZDwvc2VtYW50aWNzVGV4dD4KICAgICAgICA8L3BhdGllbnRJZGVudGlmaWVyPgogICAgICA8L3BhcmFtZXRlckxpc3Q+CiAgICA8L3F1ZXJ5QnlQYXJhbWV0ZXI+CiAgPC9jb250cm9sQWN0UHJvY2Vzcz4KPC9QUlBBX0lOMjAxMzA5VVYwMj4K</p><h3>Details</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>Value[x]</b></td></tr><tr><td>*</td><td>MSH-10</td><td>MS4yLjg0MC4xMTQzNTAuMS4xMy4wLjEuNy4xLjE=</td></tr></table></blockquote></div>",
  },
  type: {
    system: "http://dicom.nema.org/resources/ontology/DCM",
    code: "110112",
    display: "Query",
  },
  subtype: [
    {
      system: "urn:oid:1.3.6.1.4.1.19376.1.2",
      code: "ITI-9",
      display: "PIX Query",
    },
  ],
  action: "E",
  recorded: "2015-08-26T23:42:24Z",
  outcome: "0",
  agent: [
    {
      type: {
        coding: [
          {
            system: "http://dicom.nema.org/resources/ontology/DCM",
            code: "110153",
            display: "Source Role ID",
          },
        ],
      },
      who: {
        identifier: {
          system: "urn:oid:2.16.840.1.113883.4.2",
          value: "2.16.840.1.113883.4.2",
        },
      },
      altId: "6580",
      requestor: false,
      network: {
        address: "Workstation1.ehr.familyclinic.com",
        type: "1",
      },
    },
    {
      type: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/extra-security-role-type",
            code: "humanuser",
            display: "human user",
          },
        ],
      },
      who: {
        identifier: {
          value: "95",
        },
      },
      altId: "601847123",
      name: "Grahame Grieve",
      requestor: true,
    },
  ],
  source: {
    observer: {
      display: "hl7connect.healthintersections.com.au",
    },
  },
  entity: [
    {
      what: {
        identifier: {
          value: "e3cdfc81a0d24bd^^^&2.16.840.1.113883.4.2&ISO",
        },
      },
      type: {
        system: "http://terminology.hl7.org/CodeSystem/audit-entity-type",
        code: "1",
        display: "Person",
      },
      role: {
        system: "http://terminology.hl7.org/CodeSystem/object-role",
        code: "1",
        display: "Patient",
      },
    },
    {
      type: {
        system: "http://terminology.hl7.org/CodeSystem/audit-entity-type",
        code: "2",
        display: "System Object",
      },
      role: {
        system: "http://terminology.hl7.org/CodeSystem/object-role",
        code: "24",
        display: "Query",
      },
      query:
        "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPFBSUEFfSU4yMDEzMDlVVjAyIElUU1ZlcnNpb249IlhNTF8xLjAiIHhtbG5zPSJ1cm46aGw3LW9yZzp2MyI+CiAgPGlkIGV4dGVuc2lvbj0iMzU0MjMiIHJvb3Q9IjEuMi44NDAuMTE0MzUwLjEuMTMuMC4xLjcuMS4xIi8+CiAgPGNyZWF0aW9uVGltZSB2YWx1ZT0iMjAxNDA1MDgxNjQ5MjUiLz4KICA8aW50ZXJhY3Rpb25JZCBleHRlbnNpb249IlBSUEFfSU4yMDEzMDVVVjAyIiByb290PSIyLjE2Ljg0MC4xLjExMzg4My4xLjYiLz4KICA8cHJvY2Vzc2luZ0NvZGUgY29kZT0iVCIvPgogIDxwcm9jZXNzaW5nTW9kZUNvZGUgY29kZT0iVCIvPgogIDxhY2NlcHRBY2tDb2RlIGNvZGU9IkFMIi8+CiAgPHJlY2VpdmVyIHR5cGVDb2RlPSJSQ1YiPgogICAgPGRldmljZSBjbGFzc0NvZGU9IkRFViIgZGV0ZXJtaW5lckNvZGU9IklOU1RBTkNFIj4KICAgICAgPGlkIHJvb3Q9IkVIUl9NSVNZUyIvPgogICAgICA8YXNBZ2VudCBjbGFzc0NvZGU9IkFHTlQiPgogICAgICAgIDxyZXByZXNlbnRlZE9yZ2FuaXphdGlvbiBjbGFzc0NvZGU9Ik9SRyIgZGV0ZXJtaW5lckNvZGU9IklOU1RBTkNFIj4KICAgICAgICAgIDxpZCByb290PSJNSVNZUyIvPgogICAgICAgIDwvcmVwcmVzZW50ZWRPcmdhbml6YXRpb24+CiAgICAgIDwvYXNBZ2VudD4KICAgIDwvZGV2aWNlPgogIDwvcmVjZWl2ZXI+CiAgPHNlbmRlciB0eXBlQ29kZT0iU05EIj4KICAgIDxkZXZpY2UgY2xhc3NDb2RlPSJERVYiIGRldGVybWluZXJDb2RlPSJJTlNUQU5DRSI+CiAgICAgIDxpZCByb290PSIyLjE2Ljg0MC4xLjExMzg4My40LjIiLz4KICAgICAgPGFzQWdlbnQgY2xhc3NDb2RlPSJBR05UIj4KICAgICAgICA8cmVwcmVzZW50ZWRPcmdhbml6YXRpb24gY2xhc3NDb2RlPSJPUkciIGRldGVybWluZXJDb2RlPSJJTlNUQU5DRSI+CiAgICAgICAgICA8aWQgcm9vdD0iMi4xNi44NDAuMS4xMTM4ODMuNC4yIi8+CiAgICAgICAgPC9yZXByZXNlbnRlZE9yZ2FuaXphdGlvbj4KICAgICAgPC9hc0FnZW50PgogICAgPC9kZXZpY2U+CiAgPC9zZW5kZXI+CiAgPGNvbnRyb2xBY3RQcm9jZXNzIGNsYXNzQ29kZT0iQ0FDVCIgbW9vZENvZGU9IkVWTiI+CiAgICA8Y29kZSBjb2RlPSJQUlBBX1RFMjAxMzA5VVYwMiIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuMS42Ii8+CiAgICA8cXVlcnlCeVBhcmFtZXRlcj4KICAgICAgPHF1ZXJ5SWQgZXh0ZW5zaW9uPSIxODQwOTk3MDg0IiByb290PSIxLjIuODQwLjExNDM1MC4xLjEzLjI4LjEuMTguNS45OTkiLz4KICAgICAgPHN0YXR1c0NvZGUgY29kZT0ibmV3Ii8+CiAgICAgIDxyZXNwb25zZVByaW9yaXR5Q29kZSBjb2RlPSJJIi8+CiAgICAgIDxwYXJhbWV0ZXJMaXN0PgogICAgICAgIDxwYXRpZW50SWRlbnRpZmllcj4KICAgICAgICAgIDx2YWx1ZSBleHRlbnNpb249IlN1cnlhQnJhbmQiIHJvb3Q9IjIuMTYuODQwLjEuMTEzODgzLjQuMiIvPgogICAgICAgICAgPHNlbWFudGljc1RleHQ+UGF0aWVudC5JZDwvc2VtYW50aWNzVGV4dD4KICAgICAgICA8L3BhdGllbnRJZGVudGlmaWVyPgogICAgICA8L3BhcmFtZXRlckxpc3Q+CiAgICA8L3F1ZXJ5QnlQYXJhbWV0ZXI+CiAgPC9jb250cm9sQWN0UHJvY2Vzcz4KPC9QUlBBX0lOMjAxMzA5VVYwMj4K",
      detail: [
        {
          type: "MSH-10",
          valueBase64Binary: "MS4yLjg0MC4xMTQzNTAuMS4xMy4wLjEuNy4xLjE=",
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

export const AuditEventExampleSearch: AuditEvent = {
  resourceType: "AuditEvent",
  id: "example-search",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-search</p><p><b>type</b>: Restful Operation (Details: http://terminology.hl7.org/CodeSystem/audit-event-type code rest = 'RESTful Operation', stated as 'Restful Operation')</p><p><b>subtype</b>: search (Details: http://hl7.org/fhir/restful-interaction code search = 'search', stated as 'search')</p><p><b>action</b>: E</p><p><b>recorded</b>: 22/08/2015 11:42:24 PM</p><p><b>outcome</b>: 0</p><blockquote><p><b>agent</b></p><p><b>type</b>: human user <span>(Details : {http://terminology.hl7.org/CodeSystem/extra-security-role-type code 'humanuser' = 'human user', given as 'human user'})</span></p><p><b>who</b>: </p><p><b>altId</b>: 601847123</p><p><b>name</b>: Grahame Grieve</p><p><b>requestor</b>: true</p></blockquote><blockquote><p><b>agent</b></p><p><b>type</b>: Source Role ID <span>(Details : {DICOM code '110153' = 'Source Role ID', given as 'Source Role ID'})</span></p><p><b>who</b>: </p><p><b>altId</b>: 6580</p><p><b>requestor</b>: false</p><h3>Networks</h3><table><tr><td>-</td><td><b>Address</b></td><td><b>Type</b></td></tr><tr><td>*</td><td>Workstation1.ehr.familyclinic.com</td><td>1</td></tr></table></blockquote><h3>Sources</h3><table><tr><td>-</td><td><b>Site</b></td><td><b>Observer</b></td><td><b>Type</b></td></tr><tr><td>*</td><td>Cloud</td><td>hl7connect.healthintersections.com.au</td><td>Web Server (Details: http://terminology.hl7.org/CodeSystem/security-source-type code 3 = 'Web Server', stated as 'Web Server')</td></tr></table><h3>Entities</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>Role</b></td><td><b>Query</b></td></tr><tr><td>*</td><td>System Object (Details: http://terminology.hl7.org/CodeSystem/audit-entity-type code 2 = 'System Object', stated as 'System Object')</td><td>Query (Details: http://terminology.hl7.org/CodeSystem/object-role code 24 = 'Query', stated as 'Query')</td><td>aHR0cDovL2ZoaXItZGV2LmhlYWx0aGludGVyc2VjdGlvbnMuY29tLmF1L29wZW4vRW5jb3VudGVyP3BhcnRpY2lwYW50PTEz</td></tr></table></div>",
  },
  type: {
    system: "http://terminology.hl7.org/CodeSystem/audit-event-type",
    code: "rest",
    display: "Restful Operation",
  },
  subtype: [
    {
      system: "http://hl7.org/fhir/restful-interaction",
      code: "search",
      display: "search",
    },
  ],
  action: "E",
  recorded: "2015-08-22T23:42:24Z",
  outcome: "0",
  agent: [
    {
      type: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/extra-security-role-type",
            code: "humanuser",
            display: "human user",
          },
        ],
      },
      who: {
        identifier: {
          value: "95",
        },
      },
      altId: "601847123",
      name: "Grahame Grieve",
      requestor: true,
    },
    {
      type: {
        coding: [
          {
            system: "http://dicom.nema.org/resources/ontology/DCM",
            code: "110153",
            display: "Source Role ID",
          },
        ],
      },
      who: {
        identifier: {
          system: "urn:oid:2.16.840.1.113883.4.2",
          value: "2.16.840.1.113883.4.2",
        },
      },
      altId: "6580",
      requestor: false,
      network: {
        address: "Workstation1.ehr.familyclinic.com",
        type: "1",
      },
    },
  ],
  source: {
    site: "Cloud",
    observer: {
      display: "hl7connect.healthintersections.com.au",
    },
    type: [
      {
        system: "http://terminology.hl7.org/CodeSystem/security-source-type",
        code: "3",
        display: "Web Server",
      },
    ],
  },
  entity: [
    {
      type: {
        system: "http://terminology.hl7.org/CodeSystem/audit-entity-type",
        code: "2",
        display: "System Object",
      },
      role: {
        system: "http://terminology.hl7.org/CodeSystem/object-role",
        code: "24",
        display: "Query",
      },
      query:
        "aHR0cDovL2ZoaXItZGV2LmhlYWx0aGludGVyc2VjdGlvbnMuY29tLmF1L29wZW4vRW5jb3VudGVyP3BhcnRpY2lwYW50PTEz",
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

export const AuditEventExampleVread: AuditEvent = {
  resourceType: "AuditEvent",
  id: "example-rest",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-rest</p><p><b>type</b>: Restful Operation (Details: http://terminology.hl7.org/CodeSystem/audit-event-type code rest = 'RESTful Operation', stated as 'Restful Operation')</p><p><b>subtype</b>: vread (Details: http://hl7.org/fhir/restful-interaction code vread = 'vread', stated as 'vread')</p><p><b>action</b>: R</p><p><b>recorded</b>: 20/06/2013 11:42:24 PM</p><p><b>outcome</b>: 0</p><blockquote><p><b>agent</b></p><p><b>type</b>: human user <span>(Details : {http://terminology.hl7.org/CodeSystem/extra-security-role-type code 'humanuser' = 'human user', given as 'human user'})</span></p><p><b>who</b>: </p><p><b>altId</b>: 601847123</p><p><b>name</b>: Grahame Grieve</p><p><b>requestor</b>: true</p></blockquote><blockquote><p><b>agent</b></p><p><b>type</b>: Source Role ID <span>(Details : {DICOM code '110153' = 'Source Role ID', given as 'Source Role ID'})</span></p><p><b>who</b>: </p><p><b>altId</b>: 6580</p><p><b>requestor</b>: false</p><h3>Networks</h3><table><tr><td>-</td><td><b>Address</b></td><td><b>Type</b></td></tr><tr><td>*</td><td>Workstation1.ehr.familyclinic.com</td><td>1</td></tr></table></blockquote><h3>Sources</h3><table><tr><td>-</td><td><b>Site</b></td><td><b>Observer</b></td><td><b>Type</b></td></tr><tr><td>*</td><td>Cloud</td><td/><td>Web Server (Details: http://terminology.hl7.org/CodeSystem/security-source-type code 3 = 'Web Server', stated as 'Web Server')</td></tr></table><h3>Entities</h3><table><tr><td>-</td><td><b>What</b></td><td><b>Type</b></td><td><b>Lifecycle</b></td></tr><tr><td>*</td><td><a>Patient/example/_history/1</a></td><td>System Object (Details: http://terminology.hl7.org/CodeSystem/audit-entity-type code 2 = 'System Object', stated as 'System Object')</td><td>Access / Use (Details: http://terminology.hl7.org/CodeSystem/dicom-audit-lifecycle code 6 = 'Access / Use', stated as 'Access / Use')</td></tr></table></div>",
  },
  type: {
    system: "http://terminology.hl7.org/CodeSystem/audit-event-type",
    code: "rest",
    display: "Restful Operation",
  },
  subtype: [
    {
      system: "http://hl7.org/fhir/restful-interaction",
      code: "vread",
      display: "vread",
    },
  ],
  action: "R",
  recorded: "2013-06-20T23:42:24Z",
  outcome: "0",
  agent: [
    {
      type: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/extra-security-role-type",
            code: "humanuser",
            display: "human user",
          },
        ],
      },
      who: {
        identifier: {
          value: "95",
        },
      },
      altId: "601847123",
      name: "Grahame Grieve",
      requestor: true,
    },
    {
      type: {
        coding: [
          {
            system: "http://dicom.nema.org/resources/ontology/DCM",
            code: "110153",
            display: "Source Role ID",
          },
        ],
      },
      who: {
        identifier: {
          system: "urn:oid:2.16.840.1.113883.4.2",
          value: "2.16.840.1.113883.4.2",
        },
      },
      altId: "6580",
      requestor: false,
      network: {
        address: "Workstation1.ehr.familyclinic.com",
        type: "1",
      },
    },
  ],
  source: {
    site: "Cloud",
    observer: {
      identifier: {
        value: "hl7connect.healthintersections.com.au",
      },
    },
    type: [
      {
        system: "http://terminology.hl7.org/CodeSystem/security-source-type",
        code: "3",
        display: "Web Server",
      },
    ],
  },
  entity: [
    {
      what: {
        reference: "Patient/example/_history/1",
      },
      type: {
        system: "http://terminology.hl7.org/CodeSystem/audit-entity-type",
        code: "2",
        display: "System Object",
      },
      lifecycle: {
        system: "http://terminology.hl7.org/CodeSystem/dicom-audit-lifecycle",
        code: "6",
        display: "Access / Use",
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

export const AuditeventExampleDisclosure: AuditEvent = {
  resourceType: "AuditEvent",
  id: "example-disclosure",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Disclosure by some idiot, for marketing reasons, to places unknown, of a Poor Sap, data about Everthing important.</div>',
  },
  type: {
    system: "http://dicom.nema.org/resources/ontology/DCM",
    code: "110106",
    display: "Export",
  },
  subtype: [
    {
      code: "Disclosure",
      display: "HIPAA disclosure",
    },
  ],
  action: "R",
  recorded: "2013-09-22T00:08:00Z",
  outcome: "0",
  outcomeDesc: "Successful  Disclosure",
  purposeOfEvent: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          code: "HMARKT",
          display: "healthcare marketing",
        },
      ],
    },
  ],
  agent: [
    {
      type: {
        coding: [
          {
            system: "http://dicom.nema.org/resources/ontology/DCM",
            code: "110153",
            display: "Source Role ID",
          },
        ],
      },
      who: {
        identifier: {
          value: "SomeIdiot@nowhere",
        },
      },
      altId: "notMe",
      name: "That guy everyone wishes would be caught",
      requestor: true,
      location: {
        reference: "Location/1",
      },
      policy: ["http://consent.com/yes"],
      network: {
        address: "custodian.net",
        type: "1",
      },
    },
    {
      type: {
        coding: [
          {
            system: "http://dicom.nema.org/resources/ontology/DCM",
            code: "110152",
            display: "Destination Role ID",
          },
        ],
      },
      who: {
        reference: "Practitioner/example",
        display: "Where",
      },
      requestor: false,
      network: {
        address: "marketing.land",
        type: "1",
      },
      purposeOfUse: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
              code: "HMARKT",
              display: "healthcare marketing",
            },
          ],
        },
      ],
    },
  ],
  source: {
    site: "Watcher",
    observer: {
      display: "Watchers Accounting of Disclosures Application",
    },
    type: [
      {
        system: "http://terminology.hl7.org/CodeSystem/security-source-type",
        code: "4",
        display: "Application Server",
      },
    ],
  },
  entity: [
    {
      what: {
        reference: "Patient/example",
      },
      type: {
        system: "http://terminology.hl7.org/CodeSystem/audit-entity-type",
        code: "1",
        display: "Person",
      },
      role: {
        system: "http://terminology.hl7.org/CodeSystem/object-role",
        code: "1",
        display: "Patient",
      },
    },
    {
      what: {
        reference: "Patient/example/_history/1",
        identifier: {
          value: "What.id",
        },
      },
      type: {
        system: "http://terminology.hl7.org/CodeSystem/audit-entity-type",
        code: "2",
        display: "System Object",
      },
      role: {
        system: "http://terminology.hl7.org/CodeSystem/object-role",
        code: "4",
        display: "Domain Resource",
      },
      lifecycle: {
        system: "http://terminology.hl7.org/CodeSystem/dicom-audit-lifecycle",
        code: "11",
        display: "Disclosure",
      },
      securityLabel: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
          code: "V",
          display: "very restricted",
        },
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          code: "STD",
          display: "sexually transmitted disease information sensitivity",
        },
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          code: "DELAU",
          display: "delete after use",
        },
      ],
      name: "Namne of What",
      description: "data about Everthing important",
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

export const AuditeventExampleError: AuditEvent = {
  resourceType: "AuditEvent",
  id: "example-error",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Recording that an error has happened due to a client requesting that an Observation resource be Created on the Patient endpoint. Note that the OperationOutcome from failed transaction is recorded as an AuditEvent.entity.</div>',
  },
  contained: [
    {
      resourceType: "OperationOutcome",
      id: "o1",
      issue: [
        {
          severity: "error",
          code: "invalid",
          details: {
            text: "Invalid pointer operation",
          },
        },
      ],
    },
  ],
  type: {
    system: "http://terminology.hl7.org/CodeSystem/audit-event-type",
    code: "rest",
    display: "Restful Operation",
  },
  subtype: [
    {
      system: "http://hl7.org/fhir/restful-interaction",
      code: "create",
      display: "create",
    },
  ],
  action: "C",
  recorded: "2017-09-07T23:42:24Z",
  outcome: "8",
  outcomeDesc:
    "Invalid request to create an Operation resource on the Patient endpoint.",
  agent: [
    {
      type: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/extra-security-role-type",
            code: "humanuser",
            display: "human user",
          },
        ],
      },
      who: {
        identifier: {
          value: "95",
        },
      },
      altId: "601847123",
      name: "Grahame Grieve",
      requestor: true,
    },
    {
      type: {
        coding: [
          {
            system: "http://dicom.nema.org/resources/ontology/DCM",
            code: "110153",
            display: "Source Role ID",
          },
        ],
      },
      who: {
        identifier: {
          system: "urn:oid:2.16.840.1.113883.4.2",
          value: "2.16.840.1.113883.4.2",
        },
      },
      altId: "6580",
      requestor: false,
      network: {
        address: "Workstation1.ehr.familyclinic.com",
        type: "1",
      },
    },
  ],
  source: {
    site: "Cloud",
    observer: {
      identifier: {
        value: "hl7connect.healthintersections.com.au",
      },
    },
    type: [
      {
        system: "http://terminology.hl7.org/CodeSystem/security-source-type",
        code: "3",
        display: "Web Server",
      },
    ],
  },
  entity: [
    {
      type: {
        system: "http://terminology.hl7.org/CodeSystem/audit-entity-type",
        code: "2",
        display: "System Object",
      },
      detail: [
        {
          type: "requested transaction",
          valueString: "http POST ..... ",
        },
      ],
    },
    {
      what: {
        reference: "#o1",
      },
      type: {
        system: "http://hl7.org/fhir/resource-types",
        code: "OperationOutcome",
        display: "OperationOutcome",
      },
      description: "transaction failed",
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

export const AuditeventExample: AuditEvent = {
  resourceType: "AuditEvent",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Application Start for under service login &quot;Grahame&quot; (id: Grahame\'s Test HL7Connect)</div>',
  },
  type: {
    system: "http://dicom.nema.org/resources/ontology/DCM",
    code: "110100",
    display: "Application Activity",
  },
  subtype: [
    {
      system: "http://dicom.nema.org/resources/ontology/DCM",
      code: "110120",
      display: "Application Start",
    },
  ],
  action: "E",
  recorded: "2012-10-25T22:04:27+11:00",
  outcome: "0",
  agent: [
    {
      type: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/extra-security-role-type",
            code: "humanuser",
            display: "human user",
          },
        ],
      },
      role: [
        {
          text: "Service User (Logon)",
        },
      ],
      who: {
        identifier: {
          value: "Grahame",
        },
      },
      requestor: false,
      network: {
        address: "127.0.0.1",
        type: "2",
      },
    },
    {
      type: {
        coding: [
          {
            system: "http://dicom.nema.org/resources/ontology/DCM",
            code: "110153",
            display: "Source Role ID",
          },
        ],
      },
      who: {
        identifier: {
          system: "urn:oid:2.16.840.1.113883.4.2",
          value: "2.16.840.1.113883.4.2",
        },
      },
      altId: "6580",
      requestor: false,
      network: {
        address: "Workstation1.ehr.familyclinic.com",
        type: "1",
      },
    },
  ],
  source: {
    site: "Development",
    observer: {
      display: "Grahame's Laptop",
    },
    type: [
      {
        system: "http://dicom.nema.org/resources/ontology/DCM",
        code: "110122",
        display: "Login",
      },
    ],
  },
  entity: [
    {
      what: {
        identifier: {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                code: "SNO",
              },
            ],
            text: "Dell Serial Number",
          },
          value: "ABCDEF",
        },
      },
      type: {
        system: "http://terminology.hl7.org/CodeSystem/audit-entity-type",
        code: "4",
        display: "Other",
      },
      role: {
        system: "http://terminology.hl7.org/CodeSystem/object-role",
        code: "4",
        display: "Domain Resource",
      },
      lifecycle: {
        system: "http://terminology.hl7.org/CodeSystem/dicom-audit-lifecycle",
        code: "6",
        display: "Access / Use",
      },
      name: "Grahame's Laptop",
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
