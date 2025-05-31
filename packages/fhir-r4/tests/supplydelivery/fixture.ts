import type { SupplyDelivery } from "../../src/v4.0.1/supplydelivery/types";

export const SupplydeliveryExamplePumpdelivery: SupplyDelivery = {
  resourceType: "SupplyDelivery",
  id: "pumpdelivery",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">[Put rendering here]</div>',
  },
  identifier: [
    {
      value: "98398459409",
      assigner: {
        display: "SupplierDeliveryNr",
      },
    },
  ],
  status: "in-progress",
  patient: {
    display: "Mr. Belpit",
  },
  supplier: {
    display: "ACME distribution",
  },
  destination: {
    display: "Home care dept",
  },
  receiver: [
    {
      display: "Nurse Smith",
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

export const SupplydeliveryExample: SupplyDelivery = {
  resourceType: "SupplyDelivery",
  id: "simpledelivery",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: simpledelivery</p><p><b>identifier</b>: Order10284</p><p><b>basedOn</b>: <a>SupplyRequest/simpleorder</a></p><p><b>partOf</b>: Central Supply Restock</p><p><b>status</b>: completed</p><p><b>type</b>: Blood collect tubes blue cap <span>(Details : {http://terminology.hl7.org/CodeSystem/supply-item-type code 'device' = 'Device)</span></p><h3>SuppliedItems</h3><table><tr><td>-</td><td><b>Quantity</b></td><td><b>Item[x]</b></td></tr><tr><td>*</td><td>10</td><td>Blood collect tubes blue cap <span>(Details : {[not stated] code 'BlueTubes' = 'BlueTubes', given as 'Blood collect tubes blue cap'})</span></td></tr></table><p><b>occurrence</b>: 31/12/2016</p><p><b>supplier</b>: Vendor1</p><p><b>destination</b>: Location 1</p></div>",
  },
  identifier: [
    {
      value: "Order10284",
    },
  ],
  basedOn: [
    {
      reference: "SupplyRequest/simpleorder",
    },
  ],
  partOf: [
    {
      display: "Central Supply Restock",
    },
  ],
  status: "completed",
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/supply-item-type",
        code: "device",
      },
    ],
    text: "Blood collect tubes blue cap",
  },
  suppliedItem: {
    quantity: {
      value: 10,
    },
    itemCodeableConcept: {
      coding: [
        {
          code: "BlueTubes",
          display: "Blood collect tubes blue cap",
        },
      ],
    },
  },
  occurrenceDateTime: "2016-12-31",
  supplier: {
    display: "Vendor1",
  },
  destination: {
    display: "Location 1",
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
