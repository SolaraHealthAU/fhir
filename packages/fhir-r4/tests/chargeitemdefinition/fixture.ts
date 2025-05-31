import type { ChargeItemDefinition } from "../../src/v4.0.1/chargeitemdefinition/types";

export const ChargeitemdefinitionDeviceExample: ChargeItemDefinition = {
  resourceType: "ChargeItemDefinition",
  id: "device",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: device</p><p><b>url</b>: <b>http://sap.org/ChargeItemDefinition/device-123</b></p><p><b>status</b>: active</p><p><b>description</b>: Financial details for  custom made device</p><p><b>instance</b>: <a>Device/12345</a></p><h3>Applicabilities</h3><table><tr><td>-</td><td><b>Description</b></td><td><b>Language</b></td><td><b>Expression</b></td></tr><tr><td>*</td><td>Verify ChargeItem pertains to Device 12345</td><td>text/fhirpath</td><td>%context.service.suppliedItem='Device/12345'</td></tr></table><blockquote><p><b>propertyGroup</b></p><h3>PriceComponents</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>Code</b></td><td><b>Amount</b></td></tr><tr><td>*</td><td>base</td><td>Verkaufspreis (netto) <span>(Details : {http://fhir.de/CodeSystem/billing-attributes code 'VK' = 'VK', given as 'Verkaufspreis (netto)'})</span></td><td/></tr></table></blockquote><blockquote><p><b>propertyGroup</b></p><h3>Applicabilities</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table><h3>PriceComponents</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>Code</b></td><td><b>Factor</b></td></tr><tr><td>*</td><td>tax</td><td>Mehrwersteuersatz <span>(Details : {http://fhir.de/CodeSystem/billing-attributes code 'MWST' = 'MWST', given as 'Mehrwersteuersatz'})</span></td><td>1.19</td></tr></table></blockquote><blockquote><p><b>propertyGroup</b></p><h3>Applicabilities</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table><h3>PriceComponents</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>Code</b></td><td><b>Factor</b></td></tr><tr><td>*</td><td>tax</td><td>Mehrwersteuersatz <span>(Details : {http://fhir.de/CodeSystem/billing-attributes code 'MWST' = 'MWST', given as 'Mehrwersteuersatz'})</span></td><td>1.07</td></tr></table></blockquote></div>",
  },
  url: "http://sap.org/ChargeItemDefinition/device-123",
  status: "active",
  description: "Financial details for  custom made device",
  instance: [
    {
      reference: "Device/12345",
    },
  ],
  applicability: [
    {
      description: "Verify ChargeItem pertains to Device 12345",
      language: "text/fhirpath",
      expression: "%context.service.suppliedItem='Device/12345'",
    },
  ],
  propertyGroup: [
    {
      priceComponent: [
        {
          type: "base",
          code: {
            coding: [
              {
                system: "http://fhir.de/CodeSystem/billing-attributes",
                code: "VK",
                display: "Verkaufspreis (netto)",
              },
            ],
          },
          amount: {
            value: 67.44,
            currency: "EUR",
          },
        },
      ],
    },
    {
      applicability: [
        {
          description: "Gültigkeit Steuersatz",
          language: "text/fhirpath",
          expression: "%context.occurenceDateTime > '2018-04-01'",
        },
      ],
      priceComponent: [
        {
          type: "tax",
          code: {
            coding: [
              {
                system: "http://fhir.de/CodeSystem/billing-attributes",
                code: "MWST",
                display: "Mehrwersteuersatz",
              },
            ],
          },
          factor: 1.19,
        },
      ],
    },
    {
      applicability: [
        {
          description: "Gültigkeit Steuersatz",
          language: "text/fhirpath",
          expression: "%context.occurenceDateTime <= '2018-04-01'",
        },
      ],
      priceComponent: [
        {
          type: "tax",
          code: {
            coding: [
              {
                system: "http://fhir.de/CodeSystem/billing-attributes",
                code: "MWST",
                display: "Mehrwersteuersatz",
              },
            ],
          },
          factor: 1.07,
        },
      ],
    },
  ],
} as const;

export const ChargeitemdefinitionEbmExample: ChargeItemDefinition = {
  resourceType: "ChargeItemDefinition",
  id: "ebm",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: ebm</p><p><b>url</b>: <b>http://fhir.de/ChargeItemDefinition/kbv/ebm-30110</b></p><p><b>version</b>: 2-2018</p><p><b>status</b>: active</p><p><b>description</b>: Allergologisch-diagnostischer Komplex zur Diagnostik und/oder zum Ausschluss einer (Kontakt-)Allergie vom Spättyp (Typ IV), einschl. Kosten</p><p><b>effectivePeriod</b>: 01/04/2018 --&gt; 30/06/2018</p><p><b>code</b>: Allergologiediagnostik I <span>(Details : {http://fhir.de/CodingSystem/kbv/ebm code '30110' = '30110', given as 'Allergologiediagnostik I'})</span></p><blockquote><p><b>applicability</b></p><p><b>description</b>: Excludes billing code 13250 for same Encounter</p><p><b>language</b>: text/cql</p><p><b>expression</b>: [some CQL expression]</p></blockquote><blockquote><p><b>applicability</b></p><p><b>description</b>: Applies only once per Encounter</p><p><b>language</b>: text/CQL</p><p><b>expression</b>: [some CQL expression]</p></blockquote><blockquote><p><b>propertyGroup</b></p><blockquote><p><b>priceComponent</b></p><p><b>type</b>: base</p><p><b>code</b>: Gesamt (Euro) <span>(Details : {http://fhir.de/CodeSystem/kbv/ebm-attribute code 'gesamt-euro' = 'gesamt-euro', given as 'Gesamt (Euro)'})</span></p><p><b>amount</b>: </p></blockquote><blockquote><p><b>priceComponent</b></p><p><b>type</b>: informational</p><p><b>code</b>: Gesamt (Punkte) <span>(Details : {http://fhir.de/CodeSystem/kbv/ebm-attribute code 'gesamt-punkte' = 'gesamt-punkte', given as 'Gesamt (Punkte)'})</span></p><p><b>factor</b>: 633</p></blockquote></blockquote></div>",
  },
  url: "http://fhir.de/ChargeItemDefinition/kbv/ebm-30110",
  version: "2-2018",
  status: "active",
  description:
    "Allergologisch-diagnostischer Komplex zur Diagnostik und/oder zum Ausschluss einer (Kontakt-)Allergie vom Spättyp (Typ IV), einschl. Kosten",
  effectivePeriod: {
    start: "2018-04-01",
    end: "2018-06-30",
  },
  code: {
    coding: [
      {
        system: "http://fhir.de/CodingSystem/kbv/ebm",
        code: "30110",
        display: "Allergologiediagnostik I",
      },
    ],
  },
  applicability: [
    {
      description: "Excludes billing code 13250 for same Encounter",
      language: "text/cql",
      expression: "[some CQL expression]",
    },
    {
      description: "Applies only once per Encounter",
      language: "text/CQL",
      expression: "[some CQL expression]",
    },
  ],
  propertyGroup: [
    {
      priceComponent: [
        {
          type: "base",
          code: {
            coding: [
              {
                system: "http://fhir.de/CodeSystem/kbv/ebm-attribute",
                code: "gesamt-euro",
                display: "Gesamt (Euro)",
              },
            ],
          },
          amount: {
            value: 67.44,
            currency: "EUR",
          },
        },
        {
          type: "informational",
          code: {
            coding: [
              {
                system: "http://fhir.de/CodeSystem/kbv/ebm-attribute",
                code: "gesamt-punkte",
                display: "Gesamt (Punkte)",
              },
            ],
          },
          factor: 633,
        },
      ],
    },
  ],
} as const;
