import type { Subscription } from "../../src/v4.0.1/subscription/types";

export const SubscriptionExampleError: Subscription = {
  resourceType: "Subscription",
  id: "example-error",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">[Put rendering here]</div>',
  },
  status: "error",
  contact: [
    {
      system: "phone",
      value: "ext 4123",
    },
  ],
  end: "2021-01-01T00:00:00Z",
  reason: "Monitor new neonatal function",
  criteria: "Observation?code=http://loinc.org|1975-2",
  error: "Socket Error 10060 - can't connect to host",
  channel: {
    type: "rest-hook",
    endpoint: "https://biliwatch.com/customers/mount-auburn-miu/on-result",
    payload: "application/fhir+json",
    header: ["Authorization: Bearer secret-token-abc-123"],
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

export const SubscriptionExample: Subscription = {
  resourceType: "Subscription",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">[Put rendering here]</div>',
  },
  status: "requested",
  contact: [
    {
      system: "phone",
      value: "ext 4123",
    },
  ],
  end: "2021-01-01T00:00:00Z",
  reason: "Monitor new neonatal function",
  criteria: "Observation?code=http://loinc.org|1975-2",
  channel: {
    type: "rest-hook",
    endpoint: "https://biliwatch.com/customers/mount-auburn-miu/on-result",
    payload: "application/fhir+json",
    header: ["Authorization: Bearer secret-token-abc-123"],
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
