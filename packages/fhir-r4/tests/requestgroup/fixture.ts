import type { RequestGroup } from "../../src/v4.0.1/requestgroup/types";

export const RequestgroupExample: RequestGroup = {
  resourceType: "RequestGroup",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Example RequestGroup illustrating related actions to administer medications in sequence with time delay.</div>',
  },
  contained: [
    {
      resourceType: "MedicationRequest",
      id: "medicationrequest-1",
      status: "unknown",
      intent: "proposal",
      medicationCodeableConcept: {
        text: "Medication 1",
      },
      subject: {
        reference: "Patient/example",
      },
    },
    {
      resourceType: "MedicationRequest",
      id: "medicationrequest-2",
      status: "unknown",
      intent: "proposal",
      medicationCodeableConcept: {
        text: "Medication 2",
      },
      subject: {
        reference: "Patient/example",
      },
    },
  ],
  identifier: [
    {
      value: "requestgroup-1",
    },
  ],
  groupIdentifier: {
    system: "http://example.org/treatment-group",
    value: "00001",
  },
  status: "draft",
  intent: "plan",
  priority: "routine",
  subject: {
    reference: "Patient/example",
  },
  encounter: {
    reference: "Encounter/example",
  },
  authoredOn: "2017-03-06T17:31:00Z",
  author: {
    reference: "Practitioner/1",
  },
  reasonCode: [
    {
      text: "Treatment",
    },
  ],
  note: [
    {
      text: "Additional notes about the request group",
    },
  ],
  action: [
    {
      prefix: "1",
      title: "Administer Medications",
      description: "Administer medications at the appropriate time",
      textEquivalent:
        "Administer medication 1, followed an hour later by medication 2",
      timingDateTime: "2017-03-06T19:00:00Z",
      participant: [
        {
          reference: "Practitioner/1",
        },
      ],
      groupingBehavior: "logical-group",
      selectionBehavior: "all",
      requiredBehavior: "must",
      precheckBehavior: "yes",
      cardinalityBehavior: "single",
      action: [
        {
          id: "medication-action-1",
          description: "Administer medication 1",
          type: {
            coding: [
              {
                code: "create",
              },
            ],
          },
          resource: {
            reference: "#medicationrequest-1",
          },
        },
        {
          id: "medication-action-2",
          description: "Administer medication 2",
          relatedAction: [
            {
              actionId: "medication-action-1",
              relationship: "after-end",
              offsetDuration: {
                value: 1,
                unit: "h",
              },
            },
          ],
          type: {
            coding: [
              {
                code: "create",
              },
            ],
          },
          resource: {
            reference: "#medicationrequest-2",
          },
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

export const RequestgroupKdn5Example: RequestGroup = {
  resourceType: "RequestGroup",
  id: "kdn5-example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Administer gemcitabine and carboplatin.</div>',
  },
  contained: [
    {
      resourceType: "MedicationRequest",
      id: "1111",
      status: "unknown",
      intent: "proposal",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "12574",
            display: "gemcitabine",
          },
        ],
        text: "gemcitabine",
      },
      subject: {
        reference: "Patient/example",
      },
      dosageInstruction: [
        {
          text: "1250 mg/m² IV over 30 minutes",
          timing: {
            repeat: {
              duration: 30,
              durationUnit: "min",
            },
          },
          route: {
            text: "IV",
          },
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: {
                value: 1250,
                unit: "mg/m²",
              },
            },
          ],
        },
      ],
    },
    {
      resourceType: "MedicationRequest",
      id: "2222",
      status: "unknown",
      intent: "proposal",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "40048",
            display: "Carboplatin",
          },
        ],
        text: "CARBOplatin",
      },
      subject: {
        reference: "Patient/example",
      },
      dosageInstruction: [
        {
          text: "AUC 5 IV over 30 minutes",
          timing: {
            repeat: {
              duration: 30,
              durationUnit: "min",
            },
          },
          route: {
            text: "IV",
          },
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: {
                extension: [
                  {
                    url: "http://example.org/fhir/AUC-dose",
                    valueInteger: 5,
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  ],
  identifier: [
    {
      value: "requestgroup-kdn5",
    },
  ],
  instantiatesCanonical: ["PlanDefinition/KDN5"],
  status: "draft",
  intent: "plan",
  priority: "routine",
  subject: {
    reference: "Patient/example",
  },
  encounter: {
    reference: "Encounter/example",
  },
  authoredOn: "2017-03-06T17:31:00Z",
  author: {
    reference: "Practitioner/1",
  },
  action: [
    {
      selectionBehavior: "exactly-one",
      action: [
        {
          selectionBehavior: "all",
          action: [
            {
              groupingBehavior: "sentence-group",
              selectionBehavior: "exactly-one",
              action: [
                {
                  id: "cycle-definition-1",
                  textEquivalent: "21-day cycle for 6 cycles",
                  timingTiming: {
                    repeat: {
                      count: 6,
                      duration: 21,
                      durationUnit: "d",
                    },
                  },
                  action: [
                    {
                      id: "action-1",
                      extension: [
                        {
                          url: "http://hl7.org/fhir/StructureDefinition/timing-daysOfCycle",
                          extension: [
                            {
                              url: "day",
                              valueInteger: 1,
                            },
                            {
                              url: "day",
                              valueInteger: 8,
                            },
                          ],
                        },
                      ],
                      textEquivalent:
                        "Gemcitabine 1250 mg/m² IV over 30 minutes on days 1 and 8",
                      resource: {
                        reference: "#1111",
                      },
                    },
                    {
                      id: "action-2",
                      extension: [
                        {
                          url: "http://hl7.org/fhir/StructureDefinition/timing-daysOfCycle",
                          extension: [
                            {
                              url: "day",
                              valueInteger: 1,
                            },
                          ],
                        },
                      ],
                      textEquivalent:
                        "CARBOplatin AUC 5 IV over 30 minutes on Day 1",
                      relatedAction: [
                        {
                          actionId: "action-1",
                          relationship: "concurrent-with-start",
                        },
                      ],
                      resource: {
                        reference: "#2222",
                      },
                    },
                  ],
                },
              ],
            },
          ],
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
