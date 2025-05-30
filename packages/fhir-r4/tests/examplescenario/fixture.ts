import type { ExampleScenario } from "../../src/v4.0.1/examplescenario/types";

export const ExamplescenarioExample: ExampleScenario = {
  resourceType: "ExampleScenario",
  id: "example",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>status</b>: draft</p><p><b>purpose</b>: Purpose: this serves to enable remote performing of medication administration, by using remote / mobile devices to a) Get the planned medication administrations and b) Record the performing of these administrations without a permanent connection to the EHR.</p><blockquote><p><b>actor</b></p><p><b>actorId</b>: Nurse</p><p><b>type</b>: person</p><p><b>name</b>: Nurse</p><p><b>description</b>: The Nurse</p></blockquote><blockquote><p><b>actor</b></p><p><b>actorId</b>: MAP</p><p><b>type</b>: entity</p><p><b>name</b>: Nurse's Tablet</p><p><b>description</b>: The entity that receives the Administration Requests to show the nurse to perform them</p></blockquote><blockquote><p><b>actor</b></p><p><b>actorId</b>: OP</p><p><b>type</b>: entity</p><p><b>name</b>: MAR / Scheduler</p><p><b>description</b>: The Medication Administration Order Placer</p></blockquote><blockquote><p><b>actor</b></p><p><b>actorId</b>: MAC</p><p><b>type</b>: entity</p><p><b>name</b>: MAR / EHR</p><p><b>description</b>: The entity that receives the Medication Administration reports</p></blockquote><blockquote><p><b>instance</b></p><p><b>resourceId</b>: iherx001</p><p><b>resourceType</b>: MedicationRequest</p><p><b>name</b>: Initial Prescription</p><p><b>description</b>: The initial prescription which describes &quot;medication X, 3 times per day&quot; - the exact scheduling is not   in the initial prescription (it is left for the care teams to decide on the schedule).</p></blockquote><blockquote><p><b>instance</b></p><p><b>resourceId</b>: iherx001.001</p><p><b>resourceType</b>: MedicationRequest</p><p><b>name</b>: Request for day 1, morning</p><p><b>description</b>: The administration request for day 1, morning</p></blockquote><blockquote><p><b>instance</b></p><p><b>resourceId</b>: iherx001.002</p><p><b>resourceType</b>: MedicationRequest</p><p><b>name</b>: Request for day 1, lunch</p><p><b>description</b>: The administration request for day 1, lunch</p></blockquote><blockquote><p><b>instance</b></p><p><b>resourceId</b>: iherx001.003</p><p><b>resourceType</b>: MedicationRequest</p><p><b>name</b>: Request for day 1, evening</p><p><b>description</b>: The administration request for day 1, evening</p></blockquote><blockquote><p><b>instance</b></p><p><b>resourceId</b>: iherx001.004</p><p><b>resourceType</b>: MedicationRequest</p><p><b>name</b>: Request for day 2, morning</p><p><b>description</b>: The administration request for day 2, morning</p></blockquote><blockquote><p><b>instance</b></p><p><b>resourceId</b>: iherx001.005</p><p><b>resourceType</b>: MedicationRequest</p><p><b>name</b>: Request for day 2, lunch</p><p><b>description</b>: The administration request for day 2, lunch</p></blockquote><blockquote><p><b>instance</b></p><p><b>resourceId</b>: iherx001.006</p><p><b>resourceType</b>: MedicationRequest</p><p><b>name</b>: Request for day 2, evening</p><p><b>description</b>: The administration request for day 2, evening</p></blockquote><blockquote><p><b>instance</b></p><p><b>resourceId</b>: iheadm001a</p><p><b>resourceType</b>: MedicationAdministration</p><p><b>name</b>: Morning meds - taken</p><p><b>description</b>: Administration report for day 1, morning: Taken</p></blockquote><blockquote><p><b>instance</b></p><p><b>resourceId</b>: iheadm001b</p><p><b>resourceType</b>: MedicationAdministration</p><p><b>name</b>: Morning meds - not taken</p><p><b>description</b>: Administration report for day 1, morning: NOT Taken</p></blockquote><blockquote><p><b>instance</b></p><p><b>resourceId</b>: iherx001bundle</p><p><b>resourceType</b>: MedicationRequest</p><p><b>name</b>: Bundle of Medication Requests</p><p><b>description</b>: All the medication Requests for Day 1</p><blockquote><p><b>containedInstance</b></p><p><b>resourceId</b>: iherx001.001</p></blockquote><blockquote><p><b>containedInstance</b></p><p><b>resourceId</b>: iherx001.002</p></blockquote><blockquote><p><b>containedInstance</b></p><p><b>resourceId</b>: iherx001.003</p></blockquote><blockquote><p><b>containedInstance</b></p><p><b>resourceId</b>: iherx001.004</p></blockquote><blockquote><p><b>containedInstance</b></p><p><b>resourceId</b>: iherx001.005</p></blockquote><blockquote><p><b>containedInstance</b></p><p><b>resourceId</b>: iherx001.006</p></blockquote></blockquote><blockquote><p><b>instance</b></p><p><b>resourceId</b>: iheadm002</p><p><b>resourceType</b>: MedicationAdministration</p><p><b>name</b>: Lunch meds - taken</p><p><b>description</b>: Administration report for day 1, lunch: Taken</p><blockquote><p><b>version</b></p><p><b>versionId</b>: iheadm002v1</p><p><b>description</b>: Medication just taken</p></blockquote><blockquote><p><b>version</b></p><p><b>versionId</b>: iheadm002v2</p><p><b>description</b>: Medication rejected</p></blockquote></blockquote><blockquote><p><b>instance</b></p><p><b>resourceId</b>: iherxqry</p><p><b>resourceType</b>: SearchParameter</p><p><b>name</b>: Search query1</p><p><b>description</b>: The search administration request for day 1, morning</p></blockquote><blockquote><p><b>process</b></p><p><b>title</b>: Mobile Medication Administration</p><p><b>description</b>: This scenario demonstrates the process of getting the relevant medication instructions for a patient visit and reporting the results of administration. The scenario is as follows: After the prescription is issued, the institution schedules each individual administration event in the Medication Administration Record (MAR). When preparing for a visit, the nurse queries the MAR for the scheduled administrations, obtaining a bundle of records. The nurse then performs the care activities and registers the results in the device. Upon synchronization of the device and the institution, the results of administration are uploaded to the EHR, thus updating the MAR.</p><p><b>preConditions</b>: Medication administration requests are in the EHR / MAR, scheduled for each individual intake.</p><p><b>postConditions</b>: Medication administration Reports are submitted, EHR is updated.</p><blockquote><p><b>step</b></p><h3>Operations</h3><table><tr><td>-</td><td><b>Number</b></td><td><b>Name</b></td><td><b>Initiator</b></td><td><b>Receiver</b></td></tr><tr><td>*</td><td>1</td><td>1. Get today's schedule</td><td>Nurse</td><td>MAP</td></tr></table></blockquote><blockquote><p><b>step</b></p><h3>Processes</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>step</b></p><p><b>pause</b>: true</p></blockquote><blockquote><p><b>step</b></p><h3>Operations</h3><table><tr><td>-</td><td><b>Number</b></td><td><b>Name</b></td><td><b>Initiator</b></td><td><b>Receiver</b></td></tr><tr><td>*</td><td>4</td><td>Notify (alert)</td><td>MAP</td><td>Nurse</td></tr></table></blockquote><blockquote><p><b>step</b></p><h3>Operations</h3><table><tr><td>-</td><td><b>Number</b></td><td><b>Name</b></td><td><b>Initiator</b></td><td><b>Receiver</b></td></tr><tr><td>*</td><td>5</td><td>Read orders</td><td>Nurse</td><td>MAP</td></tr></table></blockquote><blockquote><p><b>step</b></p><p><b>pause</b>: true</p></blockquote><blockquote><p><b>step</b></p><h3>Operations</h3><table><tr><td>-</td><td><b>Number</b></td><td><b>Name</b></td><td><b>Initiator</b></td><td><b>Receiver</b></td></tr><tr><td>*</td><td>5</td><td>Ask if patient took meds</td><td>Nurse</td><td>Nurse</td></tr></table></blockquote><blockquote><p><b>step</b></p><blockquote><p><b>alternative</b></p><p><b>title</b>: Patient took drugs</p><p><b>description</b>: Invoke if patient took medications</p><h3>Steps</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>alternative</b></p><p><b>title</b>: No drugs</p><p><b>description</b>: No, patient did not take drugs</p><h3>Steps</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>alternative</b></p><p><b>title</b>: Not clear</p><p><b>description</b>: Unknown whether patient took medications or not</p><h3>Steps</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote></blockquote><blockquote><p><b>step</b></p><p><b>pause</b>: true</p></blockquote><blockquote><p><b>step</b></p><h3>Operations</h3><table><tr><td>-</td><td><b>Number</b></td><td><b>Name</b></td><td><b>Initiator</b></td><td><b>Receiver</b></td></tr><tr><td>*</td><td>6</td><td>Administer drug</td><td>Nurse</td><td>Nurse</td></tr></table></blockquote><blockquote><p><b>step</b></p><h3>Operations</h3><table><tr><td>-</td><td><b>Number</b></td><td><b>Name</b></td><td><b>Initiator</b></td><td><b>Receiver</b></td><td><b>InitiatorActive</b></td></tr><tr><td>*</td><td>7</td><td>Register administration</td><td>Nurse</td><td>MAP</td><td>true</td></tr></table></blockquote><blockquote><p><b>step</b></p><p><b>pause</b>: true</p></blockquote><blockquote><p><b>step</b></p><h3>Processes</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>step</b></p><p><b>pause</b>: true</p></blockquote><blockquote><p><b>step</b></p><h3>Processes</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote></blockquote></div>",
  },
  status: "draft",
  purpose:
    "Purpose: this serves to enable remote performing of medication administration, by using remote / mobile devices to a) Get the planned medication administrations and b) Record the performing of these administrations without a permanent connection to the EHR.",
  actor: [
    {
      actorId: "Nurse",
      type: "person",
      name: "Nurse",
      description: "The Nurse",
    },
    {
      actorId: "MAP",
      type: "entity",
      name: "Nurse's Tablet",
      description:
        "The entity that receives the Administration Requests to show the nurse to perform them",
    },
    {
      actorId: "OP",
      type: "entity",
      name: "MAR / Scheduler",
      description: "The Medication Administration Order Placer",
    },
    {
      actorId: "MAC",
      type: "entity",
      name: "MAR / EHR",
      description:
        "The entity that receives the Medication Administration reports",
    },
  ],
  instance: [
    {
      resourceId: "iherx001",
      resourceType: "MedicationRequest",
      name: "Initial Prescription",
      description:
        'The initial prescription which describes "medication X, 3 times per day" - the exact scheduling is not   in the initial prescription (it is left for the care teams to decide on the schedule).',
    },
    {
      resourceId: "iherx001.001",
      resourceType: "MedicationRequest",
      name: "Request for day 1, morning",
      description: "The administration request for day 1, morning",
    },
    {
      resourceId: "iherx001.002",
      resourceType: "MedicationRequest",
      name: "Request for day 1, lunch",
      description: "The administration request for day 1, lunch",
    },
    {
      resourceId: "iherx001.003",
      resourceType: "MedicationRequest",
      name: "Request for day 1, evening",
      description: "The administration request for day 1, evening",
    },
    {
      resourceId: "iherx001.004",
      resourceType: "MedicationRequest",
      name: "Request for day 2, morning",
      description: "The administration request for day 2, morning",
    },
    {
      resourceId: "iherx001.005",
      resourceType: "MedicationRequest",
      name: "Request for day 2, lunch",
      description: "The administration request for day 2, lunch",
    },
    {
      resourceId: "iherx001.006",
      resourceType: "MedicationRequest",
      name: "Request for day 2, evening",
      description: "The administration request for day 2, evening",
    },
    {
      resourceId: "iheadm001a",
      resourceType: "MedicationAdministration",
      name: "Morning meds - taken",
      description: "Administration report for day 1, morning: Taken",
    },
    {
      resourceId: "iheadm001b",
      resourceType: "MedicationAdministration",
      name: "Morning meds - not taken",
      description: "Administration report for day 1, morning: NOT Taken",
    },
    {
      resourceId: "iherx001bundle",
      resourceType: "MedicationRequest",
      name: "Bundle of Medication Requests",
      description: "All the medication Requests for Day 1",
      containedInstance: [
        {
          resourceId: "iherx001.001",
        },
        {
          resourceId: "iherx001.002",
        },
        {
          resourceId: "iherx001.003",
        },
        {
          resourceId: "iherx001.004",
        },
        {
          resourceId: "iherx001.005",
        },
        {
          resourceId: "iherx001.006",
        },
      ],
    },
    {
      resourceId: "iheadm002",
      resourceType: "MedicationAdministration",
      name: "Lunch meds - taken",
      description: "Administration report for day 1, lunch: Taken",
      version: [
        {
          versionId: "iheadm002v1",
          description: "Medication just taken",
        },
        {
          versionId: "iheadm002v2",
          description: "Medication rejected",
        },
      ],
    },
    {
      resourceId: "iherxqry",
      resourceType: "SearchParameter",
      name: "Search query1",
      description: "The search administration request for day 1, morning",
    },
  ],
  process: [
    {
      title: "Mobile Medication Administration",
      description:
        "This scenario demonstrates the process of getting the relevant medication instructions for a patient visit and reporting the results of administration. The scenario is as follows: After the prescription is issued, the institution schedules each individual administration event in the Medication Administration Record (MAR). When preparing for a visit, the nurse queries the MAR for the scheduled administrations, obtaining a bundle of records. The nurse then performs the care activities and registers the results in the device. Upon synchronization of the device and the institution, the results of administration are uploaded to the EHR, thus updating the MAR.",
      preConditions:
        "Medication administration requests are in the EHR / MAR, scheduled for each individual intake.",
      postConditions:
        "Medication administration Reports are submitted, EHR is updated.",
      step: [
        {
          operation: {
            number: "1",
            name: "1. Get today's schedule",
            initiator: "Nurse",
            receiver: "MAP",
          },
        },
        {
          process: [
            {
              title: "P1. Query Administration Requests",
              description:
                "Query for medication administration orders,\\n- For today's shifts\\n- For today's patients",
              step: [
                {
                  operation: {
                    number: "2",
                    name: "2.Query for medication administration orders,\\n- For today's shifts\\n- For today's patients",
                    initiator: "MAP",
                    receiver: "OP",
                    request: {
                      resourceId: "iherxqry",
                    },
                    response: {
                      resourceId: "iherx001bundle",
                    },
                  },
                },
              ],
            },
          ],
        },
        {
          pause: true,
        },
        {
          operation: {
            number: "4",
            name: "Notify (alert)",
            initiator: "MAP",
            receiver: "Nurse",
          },
        },
        {
          operation: {
            number: "5",
            name: "Read orders",
            initiator: "Nurse",
            receiver: "MAP",
          },
        },
        {
          pause: true,
        },
        {
          operation: {
            number: "5",
            name: "Ask if patient took meds",
            initiator: "Nurse",
            receiver: "Nurse",
          },
        },
        {
          alternative: [
            {
              title: "Patient took drugs",
              description: "Invoke if patient took medications",
              step: [
                {
                  process: [
                    {
                      title: "Register Meds taken",
                      step: [
                        {
                          operation: {
                            number: "1a",
                            name: "Register Meds taken",
                            initiator: "Nurse",
                            receiver: "MAP",
                            initiatorActive: true,
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              title: "No drugs",
              description: "No, patient did not take drugs",
              step: [
                {
                  process: [
                    {
                      title: "Register Meds NOT taken",
                      step: [
                        {
                          operation: {
                            number: "1b",
                            name: "Register Meds NOT taken",
                            initiator: "Nurse",
                            receiver: "MAP",
                            initiatorActive: true,
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              title: "Not clear",
              description: "Unknown whether patient took medications or not",
              step: [
                {
                  pause: true,
                },
              ],
            },
          ],
        },
        {
          pause: true,
        },
        {
          operation: {
            number: "6",
            name: "Administer drug",
            initiator: "Nurse",
            receiver: "Nurse",
          },
        },
        {
          operation: {
            number: "7",
            name: "Register administration",
            initiator: "Nurse",
            receiver: "MAP",
            initiatorActive: true,
          },
        },
        {
          pause: true,
        },
        {
          process: [
            {
              title: "P2. Update administration reports",
              step: [
                {
                  operation: {
                    number: "8",
                    name: "Nurse updates administration report",
                    initiator: "Nurse",
                    receiver: "MAP",
                    initiatorActive: true,
                    request: {
                      resourceId: "iheadm002",
                    },
                  },
                },
              ],
            },
          ],
        },
        {
          pause: true,
        },
        {
          process: [
            {
              title: "P3. Upload administration reports",
              description:
                "The nurse's system uploads the administration results to the server",
              step: [
                {
                  operation: {
                    number: "9",
                    name: "Refresh",
                    initiator: "MAP",
                    receiver: "MAC",
                    request: {
                      resourceId: "iheadm001",
                    },
                  },
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
