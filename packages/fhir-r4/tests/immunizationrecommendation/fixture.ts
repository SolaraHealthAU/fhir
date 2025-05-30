import type { ImmunizationRecommendation } from "../../src/v4.0.1/immunizationrecommendation/types";

export const ImmunizationrecommendationExampleTargetDisease: ImmunizationRecommendation =
  {
    resourceType: "ImmunizationRecommendation",
    id: "example",
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml">Authored by Joginder Madra</div>',
    },
    identifier: [
      {
        system: "urn:ietf:rfc:3986",
        value: "urn:oid:1.3.6.1.4.1.21367.2005.3.7.1235",
      },
    ],
    patient: {
      reference: "Patient/example",
    },
    date: "2015-02-09T11:04:15.817-05:00",
    authority: {
      reference: "Organization/hl7",
    },
    recommendation: [
      {
        targetDisease: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "40468003",
            },
          ],
        },
        forecastStatus: {
          text: "Not Complete",
        },
        dateCriterion: [
          {
            code: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "30981-5",
                  display: "Earliest date to give",
                },
              ],
            },
            value: "2015-12-01T00:00:00-05:00",
          },
          {
            code: {
              coding: [
                {
                  system:
                    "http://example.org/fhir/CodeSystem/immunization-recommendation-date-criterion",
                  code: "recommended",
                  display: "Recommended",
                },
              ],
            },
            value: "2015-12-01T00:00:00-05:00",
          },
          {
            code: {
              coding: [
                {
                  system:
                    "http://example.org/fhir/CodeSystem/immunization-recommendation-date-criterion",
                  code: "overdue",
                  display: "Past Due Date",
                },
              ],
            },
            value: "2016-12-28T00:00:00-05:00",
          },
        ],
        description: "First sequence in protocol",
        series: "Vaccination Series 1",
        doseNumberPositiveInt: 1,
        seriesDosesPositiveInt: 3,
        supportingImmunization: [
          {
            reference: "Immunization/example",
          },
        ],
        supportingPatientInformation: [
          {
            reference: "Observation/example",
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

export const ImmunizationrecommendationExample: ImmunizationRecommendation = {
  resourceType: "ImmunizationRecommendation",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Authored by Joginder Madra</div>',
  },
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:1.3.6.1.4.1.21367.2005.3.7.1235",
    },
  ],
  patient: {
    reference: "Patient/example",
  },
  date: "2015-02-09T11:04:15.817-05:00",
  authority: {
    reference: "Organization/hl7",
  },
  recommendation: [
    {
      vaccineCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "14745005",
              display: "Hepatitis A vaccine",
            },
          ],
        },
      ],
      forecastStatus: {
        text: "Not Complete",
      },
      dateCriterion: [
        {
          code: {
            coding: [
              {
                system:
                  "http://example.org/fhir/CodeSystem/immunization-recommendation-date-criterion",
                code: "earliest",
                display: "Earliest Date",
              },
            ],
          },
          value: "2015-12-01T00:00:00-05:00",
        },
        {
          code: {
            coding: [
              {
                system:
                  "http://example.org/fhir/CodeSystem/immunization-recommendation-date-criterion",
                code: "recommended",
                display: "Recommended",
              },
            ],
          },
          value: "2015-12-01T00:00:00-05:00",
        },
        {
          code: {
            coding: [
              {
                system:
                  "http://example.org/fhir/CodeSystem/immunization-recommendation-date-criterion",
                code: "overdue",
                display: "Past Due Date",
              },
            ],
          },
          value: "2016-12-28T00:00:00-05:00",
        },
      ],
      description: "First sequence in protocol",
      series: "Vaccination Series 1",
      doseNumberPositiveInt: 1,
      seriesDosesPositiveInt: 3,
      supportingImmunization: [
        {
          reference: "Immunization/example",
        },
      ],
      supportingPatientInformation: [
        {
          reference: "Observation/example",
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
