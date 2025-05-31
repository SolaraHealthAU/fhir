import type { StructureMap } from "../../src/v4.0.1/structuremap/types";

export const StructuremapExample: StructureMap = {
  resourceType: "StructureMap",
  id: "example",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>url</b>: <b>http://hl7.org/fhir/StructureMap/example</b></p><p><b>identifier</b>: urn:oid:37843577-95fb-4adb-84c0-8837188a7bf3</p><p><b>version</b>: 0.1</p><p><b>name</b>: ExampleMap</p><p><b>title</b>: Example Map</p><p><b>status</b>: draft</p><p><b>date</b>: 09/03/2017</p><p><b>publisher</b>: HL7 FHIR Standard</p><p><b>contact</b>: </p><p><b>description</b>: Example Structure Map</p><p><b>jurisdiction</b>: Oceania <span>(Details : {http://unstats.un.org/unsd/methods/m49/m49.htm code '009' = 'Oceania', given as 'Oceania'})</span></p><blockquote><p><b>group</b></p><p><b>name</b>: Examples</p><p><b>typeMode</b>: none</p><p><b>documentation</b>: test -&gt; testValue</p><h3>Inputs</h3><table><tr><td>-</td><td><b>Name</b></td><td><b>Mode</b></td></tr><tr><td>*</td><td>test</td><td>source</td></tr></table><blockquote><p><b>rule</b></p><p><b>name</b>: rule1</p><h3>Sources</h3><table><tr><td>-</td><td><b>Context</b></td><td><b>Type</b></td><td><b>Element</b></td><td><b>Variable</b></td></tr><tr><td>*</td><td>Source</td><td>SourceClassA</td><td>test</td><td>t</td></tr></table><h3>Targets</h3><table><tr><td>-</td><td><b>Context</b></td><td><b>ContextType</b></td><td><b>Element</b></td><td><b>Transform</b></td></tr><tr><td>*</td><td>Destination</td><td>variable</td><td>testValue</td><td>copy</td></tr></table></blockquote></blockquote></div>",
  },
  url: "http://hl7.org/fhir/StructureMap/example",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:37843577-95fb-4adb-84c0-8837188a7bf3",
    },
  ],
  version: "0.1",
  name: "ExampleMap",
  title: "Example Map",
  status: "draft",
  date: "2017-03-09",
  publisher: "HL7 FHIR Standard",
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
  description: "Example Structure Map",
  jurisdiction: [
    {
      coding: [
        {
          system: "http://unstats.un.org/unsd/methods/m49/m49.htm",
          code: "009",
          display: "Oceania",
        },
      ],
    },
  ],
  group: [
    {
      name: "Examples",
      typeMode: "none",
      documentation: "test -> testValue",
      input: [
        {
          name: "test",
          mode: "source",
        },
      ],
      rule: [
        {
          name: "rule1",
          source: [
            {
              context: "Source",
              type: "SourceClassA",
              element: "test",
              variable: "t",
            },
          ],
          target: [
            {
              context: "Destination",
              contextType: "variable",
              element: "testValue",
              transform: "copy",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const StructuremapSupplyrequestTransform: StructureMap = {
  resourceType: "StructureMap",
  id: "supplyrequest-transform",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\">\nmap &quot;http://hl7.org/fhir/StructureMap/supplyrequest-transform&quot; = supplyRequestTransform\n\nuses &quot;http://hl7.org/fhir/StructureDefinition/ActivityDefinition&quot; as source\nuses &quot;http://hl7.org/fhir/StructureDefinition/SupplyRequest&quot; as target\n\ngroup main\n  input &quot;source&quot;: ActivityDefinition as source\n  input &quot;target&quot;: SupplyRequest as target\n\n  &quot;status&quot;: for source.id make target.status = 'draft'\n  &quot;category&quot;: for source.id make target.category = 'non-stock'\n  &quot;priority&quot;: for source.id make target.priority = 'routine'\n  &quot;quantity&quot;: for source.quantity make target.orderedItem.quantity\n  &quot;item&quot;: for source.code make target.orderedItem.itemCodeableConcept\n  &quot;when&quot;: for source.id make target.occurrenceDateTime = Now()\n  &quot;authoredOn&quot;: for source.id make target.authoredOn = Now()\n    </div>",
  },
  url: "http://hl7.org/fhir/StructureMap/supplyrequest-transform",
  name: "Transform from an ActivityDefinition to a SupplyRequest",
  status: "draft",
  structure: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/activitydefinition",
      mode: "source",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/supplyrequest",
      mode: "target",
    },
  ],
  group: [
    {
      name: "main",
      typeMode: "none",
      input: [
        {
          name: "source",
          type: "ActivityDefinition",
          mode: "source",
        },
        {
          name: "target",
          type: "SupplyRequest",
          mode: "target",
        },
      ],
      rule: [
        {
          name: "status",
          source: [
            {
              context: "source",
              element: "id",
              variable: "a",
            },
          ],
          target: [
            {
              context: "target",
              contextType: "variable",
              element: "status",
              transform: "evaluate",
              parameter: [
                {
                  valueString: "'draft'",
                },
              ],
            },
          ],
        },
        {
          name: "category",
          source: [
            {
              context: "source",
              element: "id",
              variable: "a",
            },
          ],
          target: [
            {
              context: "target",
              contextType: "variable",
              element: "category",
              transform: "evaluate",
              parameter: [
                {
                  valueString: "'non-stock'",
                },
              ],
            },
          ],
        },
        {
          name: "priority",
          source: [
            {
              context: "source",
              element: "id",
              variable: "a",
            },
          ],
          target: [
            {
              context: "target",
              contextType: "variable",
              element: "priority",
              transform: "evaluate",
              parameter: [
                {
                  valueString: "'routine'",
                },
              ],
            },
          ],
        },
        {
          name: "quantity",
          source: [
            {
              context: "source",
              element: "quantity",
              variable: "a",
            },
          ],
          target: [
            {
              context: "target",
              contextType: "variable",
              element: "category",
              transform: "copy",
            },
          ],
        },
        {
          name: "item",
          source: [
            {
              context: "source",
              element: "code",
              variable: "a",
            },
          ],
          target: [
            {
              context: "target",
              contextType: "variable",
              element: "orderedItem.itemCodeableConcept",
              transform: "copy",
            },
          ],
        },
        {
          name: "when",
          source: [
            {
              context: "source",
              element: "id",
              variable: "a",
            },
          ],
          target: [
            {
              context: "target",
              contextType: "variable",
              element: "occurrenceDateTime",
              transform: "evaluate",
              parameter: [
                {
                  valueString: "now()",
                },
              ],
            },
          ],
        },
        {
          name: "authoredOn",
          source: [
            {
              context: "source",
              element: "id",
              variable: "a",
            },
          ],
          target: [
            {
              context: "target",
              contextType: "variable",
              element: "authoredOn",
              transform: "evaluate",
              parameter: [
                {
                  valueString: "now()",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
} as const;
